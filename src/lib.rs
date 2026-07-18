use std::borrow::Cow;
use std::str::FromStr;

use mago_allocator::LocalArena;
use mago_formatter::Formatter;
use mago_formatter::presets::FormatterPreset;
use mago_formatter::settings::{FormatSettings, RawFormatSettings};
use mago_php_version::PHPVersion;
use serde::Deserialize;
use wasm_bindgen::prelude::*;

/// Intermediate struct for deserializing settings with preset support.
#[derive(Deserialize)]
struct RawFormatterConfiguration {
    #[serde(default)]
    preset: Option<String>,
    #[serde(flatten)]
    settings: RawFormatSettings,
}
impl TryFrom<RawFormatterConfiguration> for FormatSettings {
    type Error = String;

    fn try_from(raw: RawFormatterConfiguration) -> Result<Self, Self::Error> {
        let base = raw
            .preset
            .map(|p| p.parse::<FormatterPreset>())
            .transpose()?
            .map(|p| p.settings())
            .unwrap_or_default();
        Ok(raw.settings.merge_with(base))
    }
}

#[wasm_bindgen(typescript_custom_section)]
const TS_Types: &'static str = r#"
import type { Settings } from "./mago_fmt_settings.d.ts";
export type * from "./mago_fmt_settings.d.ts";
"#;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(typescript_type = "Settings")]
    pub type Settings;
}

/// Format PHP code with optional filename and settings.
#[wasm_bindgen]
pub fn format(
    #[wasm_bindgen(param_description = "PHP code to format")] code: &str,
    #[wasm_bindgen(param_description = "Optional filename for context")] filename: Option<String>,
    #[wasm_bindgen(param_description = "Optional formatter settings")] settings: Option<Settings>,
) -> Result<String, JsValue> {
    let settings = if let Some(settings) = settings {
        serde_wasm_bindgen::from_value::<RawFormatterConfiguration>(settings.into())?.try_into()?
    } else {
        FormatSettings::default()
    };

    format_internal(code, filename, settings).map_err(JsValue::from)
}

pub fn format_internal(
    code: &str,
    filename: Option<String>,
    settings: FormatSettings,
) -> Result<String, String> {
    let filename = filename.unwrap_or_else(|| "code.php".to_string());

    let arena = LocalArena::new();
    let formatter = Formatter::new(&arena, PHPVersion::LATEST, settings);

    format_code_to_string(&formatter, filename, code)
}

/// Format PHP code with specified PHP version, optional filename and settings.
#[wasm_bindgen]
pub fn format_with_version(
    #[wasm_bindgen(param_description = "PHP code to format")] code: &str,
    #[wasm_bindgen(param_description = "PHP version (e.g., '7.4', '8.0', '8.1')")]
    php_version: &str,
    #[wasm_bindgen(param_description = "Optional filename for context")] filename: Option<String>,
    #[wasm_bindgen(param_description = "Optional formatter settings")] settings: Option<Settings>,
) -> Result<String, JsValue> {
    let settings = if let Some(settings) = settings {
        serde_wasm_bindgen::from_value::<RawFormatterConfiguration>(settings.into())?.try_into()?
    } else {
        FormatSettings::default()
    };

    let version = PHPVersion::from_str(php_version).map_err(|e| e.to_string())?;

    format_with_version_internal(code, version, filename, settings).map_err(JsValue::from)
}

pub fn format_with_version_internal(
    code: &str,
    version: PHPVersion,
    filename: Option<String>,
    settings: FormatSettings,
) -> Result<String, String> {
    let filename = filename.unwrap_or_else(|| "code.php".to_string());

    let arena = LocalArena::new();
    let formatter = Formatter::new(&arena, version, settings);

    format_code_to_string(&formatter, filename, code)
}

fn format_code_to_string(
    formatter: &Formatter<'_, LocalArena>,
    filename: String,
    code: &str,
) -> Result<String, String> {
    match formatter
        .format_code(Cow::Owned(filename.into_bytes()), Cow::Owned(code.as_bytes().to_vec()))
    {
        Ok(output) => std::str::from_utf8(output).map(str::to_owned).map_err(|err| err.to_string()),
        Err(err) => Err(format!("{:?}", err)),
    }
}

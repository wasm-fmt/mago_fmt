use std::borrow::Cow;
use std::str::FromStr;

use bumpalo::Bump;
use mago_formatter::settings::FormatSettings;
use mago_formatter::Formatter;
use mago_php_version::PHPVersion;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn format(
    code: &str,
    filename: Option<String>,
    settings: Option<JsValue>,
) -> Result<String, JsValue> {
    let settings = if let Some(settings) = settings {
        serde_wasm_bindgen::from_value(settings)?
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

    let arena = Bump::new();
    let formatter = Formatter::new(&arena, PHPVersion::LATEST, settings);
    match formatter.format_code(Cow::Owned(filename), Cow::Owned(code.to_owned())) {
        Ok(output) => Ok(output.to_string()),
        Err(err) => Err(format!("{:?}", err)),
    }
}

#[wasm_bindgen]
pub fn format_with_version(
    code: &str,
    php_version: &str,
    filename: Option<String>,
    settings: Option<JsValue>,
) -> Result<String, JsValue> {
    let settings = if let Some(settings) = settings {
        serde_wasm_bindgen::from_value(settings)?
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

    let arena = Bump::new();
    let formatter = Formatter::new(&arena, version, settings);
    match formatter.format_code(Cow::Owned(filename), Cow::Owned(code.to_owned())) {
        Ok(output) => Ok(output.to_string()),
        Err(err) => Err(format!("{:?}", err)),
    }
}

use mago_formatter::Formatter;
use mago_formatter::settings::FormatSettings;
use mago_interner::ThreadedInterner;
use mago_php_version::PHPVersion;
use std::str::FromStr;
use std::thread_local;
use wasm_bindgen::prelude::*;

thread_local! {
    static INTERNER: ThreadedInterner = ThreadedInterner::default();
}

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

    INTERNER.with(|interner| {
        let formatter = Formatter::new(interner, PHPVersion::LATEST, settings);
        match formatter.format_code(&filename, code) {
            Ok(output) => Ok(output.to_string()),
            Err(err) => Err(format!("{:?}", err)),
        }
    })
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

    INTERNER.with(|interner| {
        let formatter = Formatter::new(interner, version, settings);
        match formatter.format_code(&filename, code) {
            Ok(output) => Ok(output.to_string()),
            Err(err) => Err(format!("{:?}", err)),
        }
    })
}

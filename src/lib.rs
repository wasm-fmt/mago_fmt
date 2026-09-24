use std::borrow::Cow;
use std::str::FromStr;

use mago_allocator::LocalArena;
use mago_formatter::Formatter;
use mago_formatter::presets::FormatterPreset;
use mago_formatter::settings::{FormatSettings, RawFormatSettings};
use mago_php_version::PHPVersion;
use serde::Deserialize;

/// Intermediate struct for deserializing settings with preset support.
#[bridge::config]
#[derive(Clone, Default, Deserialize)]
struct RawFormatterConfiguration {
    #[serde(default, rename = "__wasmFmtPhpVersion")]
    php_version: Option<String>,
    #[serde(default)]
    preset: Option<String>,
    #[serde(flatten)]
    settings: RawFormatSettings,
}

impl bridge::Config for RawFormatterConfiguration {
    fn decode(bytes: &[u8]) -> Result<Self, String> {
        if bytes.is_empty() {
            return Ok(Self::default());
        }

        serde_json::from_slice(bytes).map_err(|error| error.to_string())
    }
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

/// Format PHP code with optional filename and settings.
#[bridge::formatter]
fn format(
    source: &str,
    filename: Option<&str>,
    config: &RawFormatterConfiguration,
) -> Result<String, String> {
    let version = config
        .php_version
        .as_deref()
        .map(PHPVersion::from_str)
        .transpose()
        .map_err(|error| error.to_string())?
        .unwrap_or(PHPVersion::LATEST);
    let settings = config.clone().try_into()?;

    format_with_version_internal(source, version, filename.map(str::to_owned), settings)
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

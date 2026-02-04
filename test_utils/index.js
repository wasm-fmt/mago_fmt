/**
 * Convert snake_case to kebab-case.
 * @param {string} str
 * @returns {string}
 */
function toKebabCase(str) {
	return str.replace(/_/g, "-");
}

/**
 * Parse Rust FormatSettings struct from string.
 * @param {string} content
 * @returns {any}
 */
export function parseSettings(content) {
	const trimmed = content.trim();

	// Handle preset format: "mago_formatter::presets::FormatterPreset::Drupal.settings()"
	const presetMatch = trimmed.match(/^mago_formatter::presets::FormatterPreset::(\w+)\.settings\(\)$/);
	if (presetMatch) {
		return { preset: presetMatch[1].toLowerCase() };
	}

	const openBrace = trimmed.indexOf("{");
	const closeBrace = trimmed.lastIndexOf("}");

	if (openBrace === -1 || closeBrace === -1 || closeBrace <= openBrace) {
		return {};
	}

	const body = trimmed.slice(openBrace + 1, closeBrace);
	const parts = body.split(",");
	const json = {};

	for (const part of parts) {
		let partTrimmed = part.trim();
		// Remove comments
		const commentIndex = partTrimmed.indexOf("//");
		if (commentIndex !== -1) {
			partTrimmed = partTrimmed.slice(0, commentIndex).trim();
		}

		if (!partTrimmed || partTrimmed.startsWith("..")) continue;

		const colonIndex = partTrimmed.indexOf(":");
		if (colonIndex === -1) continue;

		const key = toKebabCase(partTrimmed.slice(0, colonIndex).trim());
		let value = partTrimmed.slice(colonIndex + 1).trim();

		if (!key || !value) continue;

		if (value === "true") json[key] = true;
		else if (value === "false") json[key] = false;
		else if (!isNaN(Number(value))) json[key] = Number(value);
		else if (value.includes("::")) {
			json[key] = value.split("::").pop().trim();
		} else json[key] = value.replace(/^['"]|['"]$/g, ""); // Remove quotes if present
	}

	return json;
}

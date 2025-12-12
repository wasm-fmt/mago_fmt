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
 * @returns {Object}
 */
export function parseSettings(content) {
	const openBrace = content.indexOf("{");
	const closeBrace = content.lastIndexOf("}");

	if (openBrace === -1 || closeBrace === -1 || closeBrace <= openBrace) {
		// https://github.com/carthage-software/mago/pull/713
		return {};
	}

	const body = content.slice(openBrace + 1, closeBrace);
	const parts = body.split(",");
	const json = {};

	for (const part of parts) {
		let trimmed = part.trim();
		// Remove comments
		const commentIndex = trimmed.indexOf("//");
		if (commentIndex !== -1) {
			trimmed = trimmed.slice(0, commentIndex).trim();
		}

		if (!trimmed || trimmed.startsWith("..")) continue;

		const colonIndex = trimmed.indexOf(":");
		if (colonIndex === -1) continue;

		const key = toKebabCase(trimmed.slice(0, colonIndex).trim());
		let value = trimmed.slice(colonIndex + 1).trim();

		if (!key || !value) continue;

		if (value === "true") json[key] = true;
		else if (value === "false") json[key] = false;
		else if (!isNaN(Number(value))) json[key] = Number(value);
		else json[key] = value.replace(/^['"]|['"]$/g, ""); // Remove quotes if present
	}

	return json;
}

import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { expect, test } from "bun:test";
import { parseSettings } from "../test_utils/index.js";

import init, { format, format_with_version } from "../pkg/mago_fmt";

await init();

const cases_root = fileURLToPath(import.meta.resolve("../tests/cases"));

const entries = await readdir(cases_root, { withFileTypes: true });

for (const entry of entries) {
	if (
		!entry.isDirectory() ||
		entry.name.startsWith(".") ||
		entry.name.startsWith("-")
	)
		continue;

	const case_path = join(cases_root, entry.name);

	const input_file = Bun.file(join(case_path, "before.php"));
	const expected_file = Bun.file(join(case_path, "after.php"));
	const settings_file = Bun.file(join(case_path, "settings.inc")); // May not exist

	if (!(await input_file.exists()) || !(await expected_file.exists()))
		continue;

	const [input, expected, settings] = await Promise.all([
		input_file.text(),
		expected_file.text(),
		settings_file.text().then(parseSettings)
	]);

	test(entry.name, () => {
		let actual;

		if (entry.name.startsWith("php83")) {
			actual = format_with_version(input, "8.3", "code.php", settings);
		} else if (entry.name.startsWith("php84")) {
			actual = format_with_version(input, "8.4", "code.php", settings);
		} else {
			actual = format(input, "code.php", settings);
		}
		expect(actual).toBe(expected);
	});
}

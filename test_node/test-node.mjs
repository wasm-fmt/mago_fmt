import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { parseSettings } from "../test_utils/index.js";

import init, { format, format_with_version } from "../pkg/mago_fmt_node.js";

await init();

const cases_root = fileURLToPath(import.meta.resolve("../tests/cases"));

const entries = await readdir(cases_root);

for (const entry of entries) {
	if (entry.startsWith(".") || entry.startsWith("-")) continue;

	const case_path = join(cases_root, entry);
	if (!(await stat(case_path)).isDirectory()) continue;

	const [input, expected, settings] = await Promise.all([
		readFile(join(case_path, "before.php"), "utf-8"),
		readFile(join(case_path, "after.php"), "utf-8"),
		readFile(join(case_path, "settings.inc"), "utf-8").then(parseSettings),
	]);

	test(entry, () => {
		let actual;
		if (entry.startsWith("php83")) {
			actual = format_with_version(input, "8.3", "code.php", settings);
		} else if (entry.startsWith("php84")) {
			actual = format_with_version(input, "8.4", "code.php", settings);
		} else {
			actual = format(input, "code.php", settings);
		}
		assert.equal(actual, expected);
	});
}

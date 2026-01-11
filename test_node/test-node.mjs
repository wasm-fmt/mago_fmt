#! /usr/bin/env node --test
import assert from "node:assert/strict";
import { glob, readFile } from "node:fs/promises";
import { dirname, join, basename } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { parseSettings } from "../test_utils/index.js";

import { format, format_with_version } from "../pkg/mago_fmt_node.js";

const project_root = fileURLToPath(import.meta.resolve("../"));

for await (const input_path of glob("tests/cases/**/before.php", {
	cwd: project_root,
})) {
	const case_path = dirname(input_path);
	const case_name = basename(case_path);

	if (case_name.startsWith(".") || case_name.startsWith("-")) {
		test.skip(case_name, () => {});
		continue;
	}

	const [input, expected, settings] = await Promise.all([
		readFile(input_path, "utf-8"),
		readFile(join(case_path, "after.php"), "utf-8"),
		readFile(join(case_path, "settings.inc"), "utf-8").then(parseSettings),
	]);

	test(case_name, () => {
		let actual;
		if (case_name.startsWith("php83")) {
			actual = format_with_version(input, "8.3", "code.php", settings);
		} else if (case_name.startsWith("php84")) {
			actual = format_with_version(input, "8.4", "code.php", settings);
		} else {
			actual = format(input, "code.php", settings);
		}
		assert.equal(actual, expected);
	});
}

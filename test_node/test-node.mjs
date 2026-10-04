#! /usr/bin/env node --test
import assert from "node:assert/strict";
import { glob, readFile } from "node:fs/promises";
import { dirname, join, basename } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { getPhpVersion, parseSettings } from "../test_utils/index.js";

import { createConfig, format, format_with_version, releaseConfig } from "../pkg/mago_fmt_node.js";

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
	const php_version = getPhpVersion(case_name);

	const [input, expected, settings] = await Promise.all([
		readFile(input_path, "utf-8"),
		readFile(join(case_path, "after.php"), "utf-8"),
		readFile(join(case_path, "settings.inc"), "utf-8").then(parseSettings),
	]);

	test(case_name, () => {
		const actual = format_with_version(input, php_version, "code.php", settings);
		assert.equal(actual, expected);
	});
}

test("registered config handle", () => {
	const source = '<?php function hello( $name ) { echo "Hello, " . $name; }';
	const settings = { "print-width": 120 };
	const config = createConfig(settings);
	try {
		assert.equal(format(source, "code.php", config), format(source, "code.php", settings));
	} finally {
		releaseConfig(config);
	}
});

test("invalid JSON config is rejected during registration", () => {
	assert.throws(() => createConfig("{"), /EOF while parsing an object/);
});

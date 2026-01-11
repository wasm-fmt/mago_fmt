#! /usr/bin/env bun test
import { Glob } from "bun";
import { expect, test } from "bun:test";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseSettings } from "../test_utils/index.js";

import init, { format, format_with_version } from "../pkg/mago_fmt_web";

await init();

const project_root = fileURLToPath(import.meta.resolve("../"));

const glob = new Glob("tests/cases/*/before.php");

for await (const relative_path of glob.scan({ cwd: project_root })) {
	const input_path = join(project_root, relative_path);
	const case_path = dirname(input_path);
	const case_name = basename(case_path);

	if (case_name.startsWith(".") || case_name.startsWith("-")) {
		test.skip(case_name, () => {});
		continue;
	}

	const [input, expected, settings] = await Promise.all([
		Bun.file(input_path).text(),
		Bun.file(join(case_path, "after.php")).text(),
		Bun.file(join(case_path, "settings.inc")).text().then(parseSettings),
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
		expect(actual).toBe(expected);
	});
}

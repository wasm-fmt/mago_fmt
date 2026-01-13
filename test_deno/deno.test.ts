#!/usr/bin/env deno test --allow-read --parallel
import { assertEquals } from "jsr:@std/assert@1.0.16";
import { expandGlob } from "jsr:@std/fs@1.0.21";
import { basename, dirname, fromFileUrl } from "jsr:@std/path@1.1.4";
import { parseSettings } from "../test_utils/index.js";

import { format, format_with_version } from "../pkg/mago_fmt_esm.js";

const project_root = fromFileUrl(import.meta.resolve("../"));

for await (const { path: input_path } of expandGlob("tests/cases/*/before.php", { root: project_root })) {
	const case_path = dirname(input_path);
	const case_name = basename(case_path);

	if (case_name.startsWith(".") || case_name.startsWith("-")) {
		Deno.test({ name: case_name, fn: () => {}, ignore: true });
		continue;
	}

	const [input, expected, settings] = await Promise.all([
		Deno.readTextFile(input_path),
		Deno.readTextFile(`${case_path}/after.php`),
		Deno.readTextFile(`${case_path}/settings.inc`).then(parseSettings),
	]);

	Deno.test(case_name, () => {
		let actual;
		if (case_name.startsWith("php83")) {
			actual = format_with_version(input, "8.3", "code.php", settings);
		} else if (case_name.startsWith("php84")) {
			actual = format_with_version(input, "8.4", "code.php", settings);
		} else {
			actual = format(input, "code.php", settings);
		}
		assertEquals(actual, expected);
	});
}

import { assertEquals } from "jsr:@std/assert";
import { fromFileUrl, join } from "jsr:@std/path";
import { parseSettings } from "../test_utils/index.js";

import init, { format, format_with_version } from "../pkg/mago_fmt.js";

await init();

const cases_root = fromFileUrl(import.meta.resolve("../tests/cases"));

for await (const entry of Deno.readDir(cases_root)) {
	if (
		!entry.isDirectory ||
		entry.name.startsWith(".") ||
		entry.name.startsWith("-")
	)
		continue;

	const case_path = join(cases_root, entry.name);

	const [input, expected, settings] = await Promise.all([
		Deno.readTextFile(join(case_path, "before.php")),
		Deno.readTextFile(join(case_path, "after.php")),
		Deno.readTextFile(join(case_path, "settings.inc")).then(
			parseSettings,
		),
	]);

	Deno.test(entry.name, () => {
		let actual;
		if (entry.name.startsWith("php83")) {
			actual = format_with_version(input, "8.3", "code.php", settings);
		} else if (entry.name.startsWith("php84")) {
			actual = format_with_version(input, "8.4", "code.php", settings);
		} else {
			actual = format(input, "code.php", settings);
		}
		assertEquals(actual, expected);
	});
}

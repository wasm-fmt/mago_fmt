import { defineBindings } from "@wasm-fmt/bindgen";

export default defineBindings({
	name: "mago_fmt",
	wasm: "target/wasm32-unknown-unknown/release/mago_fmt.wasm",
	wasmFile: "mago_fmt_bg.wasm",
	adapter: "bindings/mago_fmt_binding.js",
	types: {
		main: "bindings/mago_fmt.d.ts",
	},
	assets: [
		"package.json",
		"jsr.jsonc",
		"README.md",
		"LICENSE-MIT",
		"LICENSE-APACHE",
		"bindings/.npmignore",
		"bindings/mago_fmt_settings.d.ts",
	],
	outDir: "pkg",
	clean: true,
});

#!/usr/bin/env node
import process from "node:process";
import path from "node:path";
import fs from "node:fs";

const pkg_path = path.resolve(process.cwd(), process.argv[2]);
const pkg_text = fs.readFileSync(pkg_path, { encoding: "utf-8" });
const pkg_json = JSON.parse(pkg_text);

delete pkg_json.files;

pkg_json.main = pkg_json.module;
pkg_json.type = "module";
pkg_json.publishConfig = {
	access: "public",
};
pkg_json.exports = {
	// Deno
	// - 2.6 supports wasm source phase imports
	// - 2.1 support wasm instance phase imports
	// Node.js
	// - 24.5.0 unflag source phase imports for webassembly
	// - 24.0.0 supports source phase imports for webassembly
	// - 22.19.0 backport source/instance phase imports for webassembly
	".": {
		types: "./mago_fmt.d.ts",
		webpack: "./mago_fmt.js",
		deno: "./mago_fmt.js",
		// CJS supports
		"module-sync": "./mago_fmt_node.js",
		default: "./mago_fmt_esm.js",
	},
	"./esm": {
		types: "./mago_fmt.d.ts",
		default: "./mago_fmt_esm.js",
	},
	"./node": {
		types: "./mago_fmt.d.ts",
		default: "./mago_fmt_node.js",
	},
	"./bundler": {
		types: "./mago_fmt.d.ts",
		default: "./mago_fmt.js",
	},
	"./web": {
		types: "./mago_fmt_web.d.ts",
		default: "./mago_fmt_web.js",
	},
	"./vite": {
		types: "./mago_fmt_web.d.ts",
		default: "./mago_fmt_vite.js",
	},
	"./wasm": "./mago_fmt_bg.wasm",
	"./package.json": "./package.json",
	"./*": "./*",
};
pkg_json.sideEffects = ["./mago_fmt.js", "./mago_fmt_node.js", "./mago_fmt_esm.js"];

fs.writeFileSync(pkg_path, JSON.stringify(pkg_json, null, "\t"));

const jsr_path = path.resolve(pkg_path, "..", "jsr.jsonc");
pkg_json.name = "@fmt/mago-fmt";
pkg_json.exports = {
	".": "./mago_fmt.js",
	"./esm": "./mago_fmt_esm.js",
	"./node": "./mago_fmt_node.js",
	"./bundler": "./mago_fmt.js",
	"./web": "./mago_fmt_web.js",
	// jsr does not support imports from wasm?init
	// "./vite": "./mago_fmt_vite.js",
};
pkg_json.exclude = ["!**", "*.tgz"];
fs.writeFileSync(jsr_path, JSON.stringify(pkg_json, null, "\t"));

const mago_fmt_path = path.resolve(path.dirname(pkg_path), "mago_fmt.js");
prependTextToFile('/* @ts-self-types="./mago_fmt.d.ts" */\n', mago_fmt_path);

const mago_fmt_d_ts_path = path.resolve(path.dirname(pkg_path), "mago_fmt.d.ts");
const doc_path = path.resolve(import.meta.dirname, "doc.d.ts");
const doc_text = fs.readFileSync(doc_path, { encoding: "utf-8" });
prependTextToFile(doc_text + "\n", mago_fmt_d_ts_path);

function prependTextToFile(text, filePath) {
	const originalContent = fs.readFileSync(filePath, { encoding: "utf-8" });
	const newContent = text + originalContent;
	fs.writeFileSync(filePath, newContent);
}

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
	".": {
		types: "./mago_fmt.d.ts",
		node: "./mago_fmt_node.js",
		webpack: "./mago_fmt.js",
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
	"./wasm": {
		types: "./mago_fmt_bg.wasm.d.ts",
		default: "./mago_fmt_bg.wasm",
	},
	"./package.json": "./package.json",
	"./*": "./*",
};

fs.writeFileSync(pkg_path, JSON.stringify(pkg_json, null, "\t"));

const jsr_path = path.resolve(pkg_path, "..", "jsr.jsonc");
pkg_json.name = "@fmt/mago-fmt";
pkg_json.exports = {
	".": "./mago_fmt_esm.js",
	"./esm": "./mago_fmt_esm.js",
	"./node": "./mago_fmt_node.js",
	"./bundler": "./mago_fmt.js",
	"./web": "./mago_fmt_web.js",
	// jsr does not support imports from wasm?init
	// "./vite": "./mago_fmt_vite.js",
	"./wasm": "./mago_fmt_bg.wasm",
};
pkg_json.exclude = ["!**", "*.tgz"];
fs.writeFileSync(jsr_path, JSON.stringify(pkg_json, null, "\t"));

const mago_fmt_path = path.resolve(path.dirname(pkg_path), "mago_fmt.js");
let mago_fmt_text = fs.readFileSync(mago_fmt_path, { encoding: "utf-8" });
fs.writeFileSync(mago_fmt_path, '/* @ts-self-types="./mago_fmt.d.ts" */\n' + mago_fmt_text);

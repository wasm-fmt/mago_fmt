/* @ts-self-types="./mago_fmt.d.ts" */
import { readFileSync } from "node:fs";
import * as import_bg from "./mago_fmt_bg.js";
const { format, format_with_version, __wbg_set_wasm, ...wasmImport } = import_bg;

const wasmUrl = new URL("mago_fmt_bg.wasm", import.meta.url);
const wasmBytes = readFileSync(wasmUrl);
const wasmModule = new WebAssembly.Module(wasmBytes);

function getImports() {
	return {
		__proto__: null,
		"./mago_fmt_bg.js": wasmImport,
	};
}

/**
 * @import * as WASM from "./mago_fmt.wasm"
 */

const instance = new WebAssembly.Instance(wasmModule, getImports());

/**
 * @type {WASM}
 */
const wasm = instance.exports;
__wbg_set_wasm(wasm);

export { format, format_with_version };

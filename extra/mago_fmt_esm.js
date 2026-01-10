/* @ts-self-types="./mago_fmt.d.ts" */
// prettier-ignore
import source wasmModule from "./mago_fmt_bg.wasm";

import * as import_bg from "./mago_fmt_bg.js";
const { __wbg_set_wasm, format, format_with_version, ...wasmImport } = import_bg;

function getImports() {
	return {
		__proto__: null,
		"./mago_fmt_bg.js": wasmImport,
	};
}

const instance = new WebAssembly.Instance(wasmModule, getImports());

/**
 * @import * as WASM from "./mago_fmt_bg.wasm"
 */

/**
 * @type {WASM}
 */
const wasm = instance.exports;
__wbg_set_wasm(wasm);

export { format, format_with_version };

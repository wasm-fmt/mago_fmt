/* @ts-self-types="./mago_fmt_web.d.ts" */
import * as import_bg from "./mago_fmt_bg.js";
const { format, format_with_version, __wbg_set_wasm, ...wasmImport } = import_bg;

let wasm, wasmModule;

function getImports() {
	return {
		__proto__: null,
		"./mago_fmt_bg.js": wasmImport,
	};
}

function finalize_init(instance, module) {
	wasm = instance.exports;
	wasmModule = module;
	__wbg_set_wasm(wasm);
	return wasm;
}

export function initSync(module) {
	if (wasm !== void 0) return wasm;

	if (!(module instanceof WebAssembly.Module)) {
		module = new WebAssembly.Module(module);
	}
	const instance = new WebAssembly.Instance(module, getImports());
	return finalize_init(instance, module);
}

export default async function initAsync(module_or_path) {
	if (wasm !== void 0) return wasm;

	if (module_or_path === void 0) {
		module_or_path = new URL("mago_fmt_bg.wasm", import.meta.url);
	}

	if (
		typeof module_or_path === "string" ||
		(typeof Request === "function" && module_or_path instanceof Request) ||
		(typeof URL === "function" && module_or_path instanceof URL)
	) {
		module_or_path = fetch(module_or_path);
	}

	if (typeof module_or_path.then === "function") {
		module_or_path = await module_or_path;
	}

	if (
		typeof Response === "function" &&
		module_or_path instanceof Response &&
		typeof WebAssembly.instantiateStreaming === "function"
	) {
		try {
			const { instance, module } = await WebAssembly.instantiateStreaming(module_or_path, getImports());
			return finalize_init(instance, module);
		} catch (e) {
			if (module_or_path.ok && module_or_path.headers.get("Content-Type") !== "application/wasm") {
				console.warn(
					"`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
					e,
				);
			} else {
				throw e;
			}
		}
	}

	const bytes = await module_or_path.arrayBuffer();
	const { instance, module } = await WebAssembly.instantiate(bytes, getImports());

	return finalize_init(instance, module);
}

export { format, format_with_version };

import initAsync from "./mago_fmt.js";
import wasm from "./mago_fmt_bg.wasm?url";

export default function __wbg_init(input = { module_or_path: wasm }) {
	return initAsync(input);
}

export * from "./mago_fmt.js";

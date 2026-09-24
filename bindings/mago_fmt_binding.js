// @ts-check

const encoder = new TextEncoder();

/** @type {import("@wasm-fmt/runtime").FormatterAdapter<typeof import("./mago_fmt.d.ts")>} */
const adapter = {
	create(wasm, host) {
		const runtime = host.createRuntime(wasm, { encodeConfig });

		/** @type {typeof import("./mago_fmt.d.ts")} */
		const api = {
			format(source, filename, config) {
				return runtime.format(source, filename ?? undefined, config ?? undefined);
			},
			format_with_version(source, phpVersion, filename, settings) {
				const config = {
					...(settings ?? {}),
					__wasmFmtPhpVersion: phpVersion,
				};
				return runtime.format(source, filename ?? undefined, config);
			},
			createConfig(config) {
				return /** @type {import("./mago_fmt.d.ts").ConfigHandle} */ (runtime.createConfig(config ?? {}));
			},
			releaseConfig(handle) {
				return runtime.releaseConfig(handle);
			},
		};

		return api;
	},
};

export default adapter;

/**
 * @param {unknown} config
 * @returns {Uint8Array}
 */
function encodeConfig(config) {
	if (typeof config === "string") {
		return encoder.encode(config);
	}

	const json = JSON.stringify(config);
	if (json === undefined) {
		throw new TypeError("config must be JSON serializable");
	}
	return encoder.encode(json);
}

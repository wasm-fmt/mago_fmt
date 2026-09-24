/** WASM formatter for PHP using Mago. */

import type { ConfigHandle as BridgeConfigHandle } from "@wasm-fmt/runtime";
import type { Settings } from "./mago_fmt_settings.d.ts";
export type * from "./mago_fmt_settings.d.ts";

export type ConfigHandle = BridgeConfigHandle<"mago_fmt">;
export type ConfigInput = Settings | ConfigHandle;

export declare function format(code: string, filename?: string | null, settings?: ConfigInput | null): string;

export declare function format_with_version(
	code: string,
	php_version: string,
	filename?: string | null,
	settings?: Settings | null,
): string;

export declare function createConfig(settings?: Settings): ConfigHandle;
export declare function releaseConfig(handle: ConfigHandle): void;

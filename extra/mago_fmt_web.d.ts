import type * as InitOutput from "./mago_fmt_bg.wasm.d.ts";
declare type InitOutput = typeof InitOutput;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;
export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Initializes the WASM module asynchronously.
 * @param init_input - Optional URL/path to the WASM file, or any valid InitInput
 */
export default function initAsync(init_input?: InitInput | Promise<InitInput>): Promise<InitOutput>;
/**
 * Initializes the WASM module synchronously.
 * @param module_or_buffer - The WASM module or buffer source
 */
export declare function initSync(module_or_buffer: SyncInitInput): InitOutput;

export type * from "./mago_fmt.d.ts";

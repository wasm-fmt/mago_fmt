/**
 * WASM formatter for PHP using Mago.
 *
 * @example
 * ```javascript
 * import { format } from "@wasm-fmt/mago_fmt";
 *
 * const input = `<?php
 * function hello( \$name ) {
 *     echo "Hello, " . \$name;
 * }
 * ?>`;
 *
 * const formatted = format(input, "main.php", {
 * 	"use-tabs": false,
 * 	"tab-width": 4,
 * 	"print-width": 120,
 * });
 * console.log(formatted);
 * ```
 * @module
 */

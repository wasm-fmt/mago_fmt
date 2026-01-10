[![Test](https://github.com/wasm-fmt/mago_fmt/actions/workflows/test.yml/badge.svg)](https://github.com/wasm-fmt/mago_fmt/actions/workflows/test.yml)

# Install

[![npm](https://img.shields.io/npm/v/@wasm-fmt/mago_fmt?color=4F5D95)](https://www.npmjs.com/package/@wasm-fmt/mago_fmt)

```bash
npm install @wasm-fmt/mago_fmt
```

[![jsr.io](https://jsr.io/badges/@fmt/mago-fmt?color=4F5D95)](https://jsr.io/@fmt/mago-fmt)

```bash
npx jsr add @fmt/mago-fmt
```

# Usage

## Node.js / Deno / Bun / Bundler

```javascript
import { format } from "@wasm-fmt/mago_fmt";

const input = `<?php
function hello( \$name ) {
    echo "Hello, " . \$name;
}
?>`;

const formatted = format(input, "main.php", {
	"use-tabs": false,
	"tab-width": 4,
	"print-width": 120,
});
console.log(formatted);
```

With specific PHP version:

```javascript
import { format_with_version } from "@wasm-fmt/mago_fmt";

const input = `<?php
function hello( \$name ) {
    echo "Hello, " . \$name;
}
?>`;

const formatted = format_with_version(input, "8.3", "main.php", {
	"use-tabs": false,
	"tab-width": 4,
	"print-width": 120,
});
console.log(formatted);
```

## Web

For web environments, you need to initialize WASM module manually:

```javascript
import init, { format } from "@wasm-fmt/mago_fmt/web";

await init();

const input = `<?php
function hello( \$name ) {
    echo "Hello, " . \$name;
}
?>`;

const formatted = format(input, "main.php", {
	"use-tabs": false,
	"tab-width": 4,
	"print-width": 120,
});
console.log(formatted);
```

### Vite

```JavaScript
import init, { format } from "@wasm-fmt/mago_fmt/vite";

await init();
// ...
```

## Entry Points

- `.` - Auto-detects environment (Node.js uses node, Webpack uses bundler, default is ESM)
- `./node` - Node.js environment (no init required)
- `./esm` - ESM environments like Deno (no init required)
- `./bundler` - Bundlers like Webpack (no init required)
- `./web` - Web browsers (requires manual init)
- `./vite` - Vite bundler (requires manual init)

# Credits

Thanks to:

- The [Mago](https://github.com/carthage-software/mago) project created by [Carthage Software](https://github.com/carthage-software)

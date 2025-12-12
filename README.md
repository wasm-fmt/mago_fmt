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

```javascript
import init, { format } from "@wasm-fmt/mago_fmt";

await init();

const input = `<?php
function hello( \$name ) {
    echo "Hello, " . \$name;
}
?>`;

const formatted = format(input);
console.log(formatted);
```

with custom options:

```javascript
import init, { format } from "@wasm-fmt/mago_fmt";

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

with specific PHP version:

```javascript
import init, { format_with_version } from "@wasm-fmt/mago_fmt";

await init();

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

For Vite users:

Add `"@wasm-fmt/mago_fmt"` to `optimizeDeps.exclude` in your vite config:

```JSON
{
    "optimizeDeps": {
        "exclude": ["@wasm-fmt/mago_fmt"]
    }
}
```

<details>
<summary>
If you cannot change the vite config, you can use another import entry

</summary>

```JavaScript
import init, { format } from "@wasm-fmt/mago_fmt/vite";

// ...
```

</details>

# How does it work?

[Mago] is an extremely fast PHP linter, formatter, and static analyzer, written in Rust.

This package is a WebAssembly build of the Mago formatter, with a JavaScript wrapper.

[Mago]: https://github.com/carthage-software/mago

# Credits

Thanks to:

- The [Mago](https://github.com/carthage-software/mago) project created by [Carthage Software](https://github.com/carthage-software)

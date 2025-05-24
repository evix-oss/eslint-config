# @evix-oss/eslint-config

An opinionated ESLint config with reasonable defaults for TypeScript and React.

## Installation

Install with your preferred package manager:

```sh
pnpm add --save-dev @evix-oss/eslint-config
```

Create `eslint.config.mjs` in your project root:

```js
// eslint.config.mjs
import configs from '@evix-oss/eslint-config';

export default [
    ...configs.recommended, // includes TypeScript
    ...configs.react,
];
```

Override any of the configs by adding to the default export.

### Add package scripts

Example `package.json`:

```json
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint --fix ."
    }
}
```

## License

[MIT](./LICENSE) License &copy; 2025-PRESENT [Steven Whitfield](https://github.com/stevmwhitfield)

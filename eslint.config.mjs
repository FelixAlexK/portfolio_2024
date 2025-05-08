// Run this command to generate base config and vs code settings:
// pnpm dlx @antfu/eslint-config@latest

import antfu from "@antfu/eslint-config";
import eslintPluginYml from "eslint-plugin-yml";

export default antfu(
  {
    type: "app",
    typescript: true,
    formatters: true,
    vue: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
  },
  {
    rules: {
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["off"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["off"],
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfigRootDir: ".",
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md"],
        },
      ],
    },
    plugins: [eslintPluginYml.configs["flat/recommended"]],
  },
);

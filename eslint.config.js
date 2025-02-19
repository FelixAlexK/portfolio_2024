import antfu from "@antfu/eslint-config";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default antfu(
  {
    typescript: true,
    vue: true,
  },
  {
    files: ["*.vue", "*.ts", "*.js"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  prettier,
);

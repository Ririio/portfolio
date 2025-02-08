import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "*.config.js",
      ".next",
      ".vercel",
      "build",
      "coverage",
      "cypress",
      "dist",
      "node_modules",
      "out",
      "public",
    ]
  },
  ...compat.extends("next/core-web-vitals", "next/typescript", 
    "plugin:react/recommended", "plugin:react-hooks/recommended", 
    "plugin:jsx-a11y/recommended", "prettier", "plugin:react/jsx-runtime"),
  {
    rules: {
    "no-console": "warn",
    "no-debugger": "error",
    "no-unused-vars": "error",
    "react/prop-types": "off",
  }
  }
];

export default eslintConfig;

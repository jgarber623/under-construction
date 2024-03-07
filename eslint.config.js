import config from "@jgarber/eslint-config";

export default [
  ...config,
  {
    languageOptions: {
      globals: {
        CSSStyleSheet: "readonly",
        HTMLElement: "readonly",
      },
    },
  },
];

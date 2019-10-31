const silence = require.resolve("./index.js")

module.exports = {
  plugins: ["react"],

  extends: [silence],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    "react/button-has-type": "warn",
    "react/forbid-prop-types": "warn",
    "react/no-array-index-key": "warn",
    "react/no-danger-with-children": "warn",
    "react/no-unescaped-entities": "warn",
    "react/no-unused-prop-types": "warn",
    "react/default-props-match-prop-types": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-children-prop": "error",
    "react/no-deprecated": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/require-default-props": "error",
    "react/require-render-return": "error",
    "react/void-dom-elements-no-children": "error",
    "react/self-closing-comp": "error",

    // JSX-specific
    "react/jsx-no-target-blank": "warn",
    "react/jsx-uses-vars": "warn",
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-useless-fragment": "error",
  },
}

const { rules } = require("./index.js")

module.exports = {
  plugins: ["prettier"],

  env: {
    es6: true,
    node: true,
  },

  rules: Object.assign(
    {
      "prettier/prettier": "error",
    },
    rules,
  ),
}

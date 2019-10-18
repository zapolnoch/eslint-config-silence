const silence = require.resolve("./index.js")

module.exports = {
  plugins: ["prettier"],

  extends: [silence],

  rules: {
    "prettier/prettier": "error",
  },
}

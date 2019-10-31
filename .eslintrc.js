const silence = require.resolve("./react.js")

module.exports = {
  plugins: ["prettier"],

  extends: [silence],

  rules: {
    "prettier/prettier": "error",
  },
}

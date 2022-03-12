const { plugins } = require("../index.js")
const package = require("../package.json")
const test = require("tape")

test("all plugins are in the dependencies", async (t) => {
  const dependencies = Object.keys(package.dependencies)
  const result = plugins.every((plugin) => dependencies.includes(`eslint-plugin-${plugin}`))

  t.equal(result, true)
  t.end()
})

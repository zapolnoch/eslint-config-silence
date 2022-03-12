const { ESLint } = require("eslint")
const silence = require("../index.js")
const typescript = require("../typescript.js")
const test = require("tape")

test("core config is valid", async (t) => {
  const eslint = new ESLint({ baseConfig: silence, useEslintrc: false })
  const [lintResult] = await eslint.lintText("console.log('hello world')")

  t.equal(lintResult.errorCount, 0)
  t.end()
})

test("typescript config is valid", async (t) => {
  const eslint = new ESLint({ baseConfig: typescript, useEslintrc: false })
  const [lintResult] = await eslint.lintText("console.log('hello world')")

  t.equal(lintResult.errorCount, 0)
  t.end()
})

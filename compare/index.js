const { ESLint } = require("eslint")

async function main() {
  const [silence, airbnb, standard, shopify] = await Promise.all([
    getRules("silence"),
    getRules("airbnb"),
    getRules("standard"),
    getRules("plugin:@shopify/esnext"),
  ])

  const result = Object.entries(silence)
    .map(([rule, value]) => [
      rule,
      ruleValueNormalize(value),
      ruleValueNormalize(airbnb[rule]),
      ruleValueNormalize(standard[rule]),
      ruleValueNormalize(shopify[rule]),
    ])
    .filter((item) => {
      const isEnabled = item[1] !== "off"
      const isAvailableInOtherPackages = item.filter(Boolean).length > 2
      const isAnyDifferences = item
        .slice(2)
        .filter(Boolean)
        .some((compared) => compared !== item[1])

      return isEnabled && isAvailableInOtherPackages && isAnyDifferences
    })

  const markdown = [
    ["rule", "silence", "airbnb", "standard", "shopify"],
    ["---", "---", "---", "---", "---"],
  ]
    .concat(result)
    .map((item) => [null, ...item.map((rule) => getEmojiFromRule(rule)), null].join("|"))
    .join("\n")

  console.log(markdown)
}
main()

// #region
async function getRules(configurationName) {
  const eslint = new ESLint({
    baseConfig: {
      extends: [configurationName],
      root: true,
    },
    useEslintrc: false,
  })

  const { rules } = await eslint.calculateConfigForFile("./index")
  return rules
}

function ruleValueNormalize(val) {
  const map = ["off", "warn", "error"]
  const value = Array.isArray(val) ? val[0] : val

  return Number.isInteger(value) ? map[value] : value
}

function getEmojiFromRule(rule) {
  const map = { off: "⬜", warn: "🟨", error: "🟥" }
  return map[rule] || rule
}
// #endregion

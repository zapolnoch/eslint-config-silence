Comparison of `eslint-config-silence` rules with other known configs

### Usage

```bash
nvm use 16.14.0
npm -v # 8.5.2
npm install --legacy-peer-deps
node index.js >> readme.md
```

### Legend
```
⬜ = off
🟨 = warn
🟥 = error
```

### Result
|rule|silence|airbnb|standard|shopify|
|---|---|---|---|---|
|no-constant-condition|🟥|🟨|🟥|🟥|
|no-debugger|🟥|🟥|🟥|⬜|
|no-template-curly-in-string|🟨|🟥|🟥|🟥|
|require-atomic-updates|🟥|⬜||🟥|
|valid-typeof|🟥|🟥|🟥|⬜|
|no-bitwise|🟨|🟥||⬜|
|no-else-return|🟥|🟥||⬜|
|no-throw-literal|🟨|🟥|🟥|🟥|
|no-unused-expressions|🟥|🟥|🟥|⬜|
|no-useless-call|🟥|⬜|🟥|🟥|
|no-useless-return|🟨|🟥|🟥|🟥|
|complexity|🟨|⬜||⬜|
|max-depth|🟨|⬜||⬜|
|max-lines|🟨|⬜||⬜|
|max-params|🟨|⬜||🟥|
|init-declarations|🟥|⬜||⬜|
|id-match|🟥|⬜||⬜|
|no-duplicate-imports|🟥|⬜||⬜|
|no-var|🟥|🟥|🟨|🟥|
|node/handle-callback-err|🟨||🟥||
|node/no-deprecated-api|🟨||🟥||
|promise/no-new-statics|🟥|||⬜|
|import/no-deprecated|🟨|⬜||🟥|

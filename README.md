# :mag_right: :bar_chart: Cognition

[![Baked by Bun](https://img.shields.io/badge/baked-bun-brightblue?logo=bun)](https://bun.sh) [![Powered By Sveltekit](https://img.shields.io/badge/powered%20by-svelte-FF3C02.svg?style=flat&logo=svelte)](https://kit.svelte.dev/) [![Language: TypeScript](https://img.shields.io/badge/language-typescript-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![Tailwindcss](https://img.shields.io/badge/Tailwindcss-CSS--Framework-%2338B2AC?logo=tailwindcss)](https://tailwindcss.com) [![Jest](https://img.shields.io/badge/Jest-Unit--Testing--Framework-%23C21325?style=flat&logo=jest)](https://jestjs.io/) [![Prettier](https://img.shields.io/badge/Prettier-code--formatter-%23F7B93E?style=flat&logo=prettier)](https://prettier.io/) [![Postcss](https://img.shields.io/badge/Postcss-style-%23DD3A0A?style=flat&logo=postcss)](https://postcss.org) [![SCSS](https://img.shields.io/badge/SCSS-Style-%23CC6699?style=flat&logo=sass)](https://sass-lang.com/) [![Eslint](https://img.shields.io/badge/Eslint-linter-%234B32C3?style=flat&logo=eslint)](https://eslint.org/) [![ECMAScript: 2019](https://img.shields.io/badge/ES-9-F7DF1E.svg?style=flat&logo=javascript)](https://github.com/tc39/ecma262) [![License: Apache-2.0](https://img.shields.io/badge/license-Apache-brightgreen.svg?style=flat&logo=license)](https://github.com/Fluent-Finance/cognition/blob/main/LICENSE) [![fleek](https://img.shields.io/badge/fleek-on%20IPFS-white?labelColor=black&style=flat&logo=gamejolt&link=https://fleek.xyz)](https://fleek.xyz)
---

A charted data dashboard to track metrics across the [fluent](https://fluent.finance) network.

### :paperclip: Pre Reqs 

```bash
# install native bun
curl -fsSL https://bun.sh/install | bash

# install via homebrew
brew tap oven-sh/bun && brew install bun
```

### :rocket: Bootstrap

```bash
git clone github:Fluent-Finance/cognition.git
cd cognition
```

### :satellite: Install Pkgs

```bash
bun install
```

### :sparkles: Shell Env

```bash
# source .env.bootstrap
. ./bootstrap.env 
```

### :hammer: Build

```bash
bun do
```

### :vertical_traffic_light: Run

```bash
bun go
```

### :checkered_flag: Preview (production)

```bash
bun done
```

### :triangular_ruler: Testing (Integration & Unit)

![cognition_run_tests](https://github.com/Fluent-Finance/cognition/assets/757859/9296d5f8-dd20-4a08-8c5b-4dcf835358ec)

```bash
# Deps -- need to run only once
bunx playwright install

# will run both sets of tests
# and watch for file changes
bun run test

# test specific suite 
bun run test:unit
bun run test:integration
```

### :closed_lock_with_key: Secure Shell / Runtime

```bash
# want to stay secure even in the shell
# you can extract env values from password manager
# if using 1Password or Bitwarden, e.g. uses 1Password
export OP_CONNECT_HOST=https://vault.fluent.finance
export OP_CONNECT_TOKEN="$(cat < $HOME/.config/op/op_fluent_token)"

# only run command if using 1password local vault 
op inject -i bootstrap.env > .env.bootstrap

# Not using a pw manager ?
# you will need to update the env vars 
# with your data after copy 
cp bootstrap.env .env.bootstrap

# Ultra Secure Method (1password)
# op run --env-file=bootstrap.env -- bun fun

# uses secure vault and 1password cli
# to read in environment variables into runtime
# secrets are not exposed even in the shell 
#
# bun run --bun dev --port $PORT --host $HOST
```

#### :recycle: Decentralized Deploys

- [IPFS Deployed](https://fluent-finance-production.on.fleek.co)

#### :file_folder: Data SOURCES

*Off Chain*
- [Reserves](https://gatewayapi.fluent.finance/v1/gateway/balances)

*On Chain*
- [US+ Contract](https://etherscan.io/token/0xe2e15a27fd732a96534b9797bf8091f3d9849831)

#### :gift_heart: Powered By NextGen Technology

- [Bun](https://bun.sh)
- [Vite](https://vitejs.dev)
- [Fleek](https://fleek.xyz)
- [Svelte](https://svelte.dev)
- [ChartJS](https://www.chartjs.org)
- [SvelteKit](https://kit.svelte.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Flowbite (svelte)](https://flowbite-svelte.com)

***

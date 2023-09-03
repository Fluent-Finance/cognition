# Fluent Cognition

A charted data dashboard to track metrics across the [fluent](https://fluent.finance) network.

# Bootstrop

```bash
git clone github:Fluent-Finance/cognition.git
cd cognition
```

## Pre Reqs 

```bash
# install native bun
curl -fsSL https://bun.sh/install | bash

# install via homebrew
brew tap oven-sh/bun && brew install bun
```

## Install Packages

```bash
bun install
```

## Setup Shell Environment

```bash
# source .env.bootstrap
. ./bootstrap.env 
```

## Run App

```bash
bun go
```

## Secure Shell / Runtime

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

## Build Process

```bash
bun do
```

### Preview App (static)

```bash
bun done
```

### Data Sources

*Off Chain*
- [Reserves](https://gatewayapi.fluent.finance/v1/gateway/balances)

*On Chain*
- [US+ Contract](https://etherscan.io/token/0xe2e15a27fd732a96534b9797bf8091f3d9849831)

### Powered By NextGen Technology

- [Vite](https://vitejs.dev)
- [Svelte](https://svelte.dev)
- [ChartJS](https://www.chartjs.org)
- [SvelteKit](https://kit.svelte.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Flowbite (svelte)](https://flowbite-svelte.com)

# Fluent Cognition

A charted data dashboard to track metrics across the fluent network.

# Bootstrop

```bash
git clone github:Fluent-Finance/cognition.git
cd cognition
```

## Pre Reqs 

```bash
# install bun
curl -fsSL https://bun.sh/install | bash
```

## Install Packages

```bash
bun install
```

## Setup Shell Environment

```bash
# want to stay secure even in the shell
# you can extract env values from password manager
# if using 1Password or Bitwarden, e.g. uses 1Password
export OP_CONNECT_HOST=https://vault.fluent.finance
export OP_CONNECT_TOKEN="$(cat < $HOME/.config/op/op_fluent_token)"

# only run command if using 1password vault 
op inject -i bootstrap.env > .env.bootstrap

# Not using a pw manager ?
# you will need to update the env vars 
# with your data after copy 
cp bootstrap.env .env.bootstrap
```

```bash
# source .env.bootstrap
. ./.env.bootstrap 
```
## Run App

```bash
bun go
```

```bash
# Ultra Secure Method (1password)

# op run --env-file=bootstrap.env -- bun fun

# uses secure vault and 1password cli
# to read in environment variables into runtime
# secrets are not exposed even in the shell 
#
# bun run --bun dev --port $PORT --host $HOST
```

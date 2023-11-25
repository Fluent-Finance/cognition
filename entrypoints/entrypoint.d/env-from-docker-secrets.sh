#!/bin/sh

# handcoded with 🤍 by 𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 <iam@kodepoet.dev>

# EXPANDING VARIABLES DOCKER SECRETS
: "${ENV_SECRETS_DIR:=/run/secrets}"

env_secret_debug()
{
  if [ -n "$ENV_SECRETS_DEBUG" ]; then
    echo -e "\033[1m$@\033[0m"
  fi
}

env_secret_expand() {
  var="$1"
  eval val="\$$var"
  if secret_name=$(expr match "$val" "DOCKER-SECRET->:\([^}]\+\)$"); then
    secret="${ENV_SECRETS_DIR}/${secret_name}"
    env_secret_debug "Secret file for $var: $secret"
    if [ -f "$secret" ]; then
      val=$(cat "${secret}")
      export "$var"="$val"
      env_secret_debug "Expanded variable: $var=$val"
    else
      env_secret_debug "Secret file does not exist! $secret"
    fi
  fi
}

env_secrets_expand() {
  for env_var in $(printenv | cut -f1 -d"=")
  do
    env_secret_expand "$env_var"
  done

  if [ -n "$ENV_SECRETS_DEBUG" ]; then
    echo -e "\n\033[1mExpanded environment variables\033[0m"
    printenv
  fi
}

env_secrets_expand

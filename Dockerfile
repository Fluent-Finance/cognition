# syntax=docker/dockerfile:1.3

# handcoded with 🤍 by 𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 <iam@kodepoet.dev>

ARG BASE_IMAGE=oven/bun:1.0.14-debian 
ARG CACHE_IMAGE=${BASE_IMAGE}
ARG BASE_DOMAIN=fluent.finance

# -------------------------------------------------------------------
FROM node:20.9.0-bullseye AS node_base
# -------------------------------------------------------------------
# -------------------------------------------------------------------
FROM $CACHE_IMAGE as base
# -------------------------------------------------------------------

# Dependencies
# -------------------------------------------------------------------
FROM base as deps

SHELL ["/bin/bash", "-c"]

ARG APP_PATH=/usr/src/app
ARG ARCH="arm64"
ARG OP_CLI_URL="https://cache.agilebits.com/dist/1P/op2/pkg/v2.23.0/op_linux_${ARCH}_v2.23.0.zip"  

ENV OP_CLI_URL $OP_CLI_URL
ENV NODE_ENV development
ENV NPM_CONFIG_LOGLEVEL silent

WORKDIR /tmp/dev

# install pip
ENV PIP_CACHE_DIR=/var/cache/buildkit/pip
RUN mkdir -p $PIP_CACHE_DIR
RUN rm -f /etc/apt/apt.conf.d/docker-clean

# install other deps
RUN --mount=type=cache,target=/var/cache/apt \
  apt-get update && \
  apt-get install -yqq --no-install-recommends \
    git git-core curl build-essential openssl libssl-dev \
    unzip age jq httpie wget sudo init make automake \
    && rm -fr /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN apt-get clean && \
  dpkg-divert --local --rename --add /sbin/udevadm && \
  ln -s /bin/true /sbin/udevadm

# install 1Password CLI
RUN curl -sSfo op.zip "$OP_CLI_URL"
RUN unzip -od ./ op.zip
RUN chmod +x ./op
RUN mv ./op /usr/local/bin/op
RUN rm -r op.zip && \
    groupadd -f onepassword-cli && \
    chgrp onepassword-cli /usr/local/bin/op && \
    chmod g+s /usr/local/bin/op
# -------------------------------------------------------------------

# Builder Container
# -------------------------------------------------------------------
FROM deps AS install

SHELL ["/bin/bash", "-c"]

# Development
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Production
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Install Container
# -------------------------------------------------------------------
FROM install AS prerelease

SHELL ["/bin/bash", "-c"]

ARG SERVICE_NAME=frontend
ARG APP_ENV=production
ARG APP_PORT=3333
ARG APP_HOST=0.0.0.0
ARG APP_LOG_LEVEL=error
ARG ENV_FILE="bootstrap.env"
ARG APP_PATH=/usr/src/app
ARG APP_SERVICE_PATH=$APP_PATH/build

RUN mkdir -p $APP_PATH

WORKDIR $APP_PATH

ENV PORT $APP_PORT
ENV HOST $APP_HOST
ENV NODE_ENV development

COPY --from=install /temp/dev/node_modules $APP_PATH/node_modules
COPY --from=deps /usr/local/bin/op /usr/local/bin/op
COPY --from=deps /var/cache/apt /var/cache/apt
COPY --from=node_base /usr/local/bin/node /usr/local/bin/node

COPY . $APP_PATH

# RUN --mount=type=secret,id=opConnectToken \
#     --mount=type=secret,id=opConnectHost  \
#     ./buildSecurity

# ----------------------------------------------------------
# !!! END BUILD STAGE ||||||||||||||||||||||||||||||||||||||
# ----------------------------------------------------------

# Runtime Container
# ----------------------------------------------------------
FROM prerelease AS release

SHELL ["/bin/bash", "-c"]

ARG SERVICE_NAME=frontend
ARG APP_ENV=production
ARG APP_PORT=3333
arg APP_HOST=0.0.0.0
ARG APP_LOG_LEVEL=error
ARG ENV_FILE="bootstrap.env"
ARG APP_PATH=/usr/src/app
ARG APP_SERVICE_PATH=$APP_PATH/build

COPY --from=install /temp/prod/node_modules $APP_PATH/node_modules
COPY --from=install /temp/dev/node_modules $APP_PATH/node_modules
COPY --from=prerelease --chown=bun:bun /usr/src/app $APP_PATH

WORKDIR $APP_PATH

ENV PORT $APP_PORT
ENV HOST $APP_HOST
ENV NODE_ENV development

COPY . $APP_PATH

RUN chmod -R 0777 $APP_PATH/entrypoints/entrypoint.d/*
RUN chown -R bun:bun $APP_PATH

# HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
#   CMD curl --fail "http://0.0.0.0:$APP_PORT/" || exit 1

HEALTHCHECK  --interval=45s --start-period=30s --timeout=6s \
  CMD wget --no-verbose --tries=1 --spider http://0.0.0.0:3333/ || exit 1

USER bun

EXPOSE 3333/tcp

ENTRYPOINT ["/usr/src/app/entrypoint"]
# ----------------------------------------------------------

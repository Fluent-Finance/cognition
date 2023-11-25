#!/bin/sh

# handcoded with 🤍 by ⚡️--𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏--⚡️ - <iam@kodepoet.dev>

set -e

. /usr/src/app/entrypoints/entrypoint.d/env-from-docker-secrets.sh

if /usr/bin/find "/usr/src/app/entrypoints/entrypoint.d/" -mindepth 1 -maxdepth 1 -type f -print -quit 2>/dev/null | read v; then

  echo "$0: /usr/src/app/entrypoints/entrypoint.d/ not empty, attempting configuration"

  echo "$0: searching for scripts in /entrypoint.d/"

  find "/usr/src/app/entrypoints/entrypoint.d/" -follow -type f -print | sort -V | while read -r f; do
    case "$f" in
      *.sh)
        if [ -x "$f" ]; then
          echo "$0: Launching $f";
          "$f"
        else
          # warn on shell scripts without exec bit
          echo "$0: Ignoring $f, not executable";
        fi
        ;;
      *) echo "$0: Ignoring $f";;
    esac
  done

  echo "$0: Configuration complete; ready for launch"
else
  echo "$0: No files found in /entrypoint.d/, skipping configuration"
fi

exec "$@"


#!/bin/bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
NODE_BIN="${NODE_BIN:-$(command -v node || true)}"
if [ -z "$NODE_BIN" ]; then
  echo "Node.js is required. Install Node.js 22 or newer, then run this script again."
  exit 1
fi
WRANGLER_JS="$ROOT_DIR/node_modules/wrangler/bin/wrangler.js"
VINEXT_JS="$ROOT_DIR/node_modules/vinext/dist/cli.js"

cd "$ROOT_DIR"
export WRANGLER_LOG_PATH="$ROOT_DIR/.wrangler/wrangler.log"

"$NODE_BIN" "$VINEXT_JS" build

if ! grep -q '"d1_databases"' wrangler.jsonc; then
  "$NODE_BIN" "$WRANGLER_JS" d1 create realtree-customer-care-db \
    --binding DB \
    --location enam \
    --update-config \
    --config wrangler.jsonc
fi

"$NODE_BIN" "$WRANGLER_JS" deploy --config wrangler.jsonc

#!/usr/bin/env bash
# Build and deploy thealmamun.com to Firebase Hosting.
# Usage: ./deploy.sh

set -euo pipefail
cd "$(dirname "$0")"

echo "==> Building static export..."
npx next build

echo "==> Deploying to Firebase Hosting (project: thealmamun)..."
npx --yes firebase-tools@latest deploy --only hosting

echo "==> Done. Live at https://thealmamun.com"

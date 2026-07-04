#!/usr/bin/env bash
set -euo pipefail

REPO="rahul-gautam-portfolio"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$ROOT"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required. Install with: brew install gh"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Sign in to GitHub first:"
  gh auth login -h github.com -p https -w
fi

if gh repo view "rahulgautam034/${REPO}" >/dev/null 2>&1; then
  echo "Repo already exists. Pushing main..."
  git push -u origin main
else
  echo "Creating public repo rahulgautam034/${REPO} and pushing..."
  gh repo create "$REPO" --public --source=. --remote=origin --push
fi

echo ""
echo "Done. Check deploy at:"
echo "  https://github.com/rahulgautam034/${REPO}/actions"
echo "Live site (after Actions finishes):"
echo "  https://rahulgautam034.github.io/${REPO}/"

#!/bin/bash
set -e

echo "Installing NVM..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "Installing Node.js v20..."
nvm install 20
nvm use 20

echo "Installing pnpm..."
npm install -g pnpm

echo "Installing project dependencies..."
pnpm install

echo "Starting Next.js development server..."
pnpm run dev

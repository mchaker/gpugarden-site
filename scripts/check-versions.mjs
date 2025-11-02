#!/usr/bin/env node
import { execSync } from 'child_process';
const pkg = JSON.parse(execSync('cat package.json').toString());
const requiredPnpm = (pkg.packageManager || '').split('@')[1] || '';
const requiredNode = (pkg.engines && pkg.engines.node) || '';

function cleanNode(v) {
  if (!v) return '';
  return v.startsWith('v') ? v.slice(1) : v;
}

const currentNode = cleanNode(process.version);

let currentPnpm = '';
try {
  currentPnpm = execSync('pnpm -v', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
} catch (e) {
  console.error('pnpm is not available in PATH. Install or activate pnpm:', e.message || e);
  process.exit(1);
}

function mismatch(name, want, have) {
  if (!want) return false;
  return !have || !have.startsWith(want);
}

const nodeBad = mismatch(requiredNode, requiredNode, currentNode);
const pnpmBad = mismatch(requiredPnpm, requiredPnpm, currentPnpm);

if (nodeBad || pnpmBad) {
  console.error('\n=== Version mismatch detected ===');
  if (nodeBad) {
    console.error(`Node required: ${requiredNode}  —  found: ${currentNode}`);
    console.error('Use nvm/asdf/volta or install the correct Node version.');
  }
  if (pnpmBad) {
    console.error(`pnpm required: ${requiredPnpm}  —  found: ${currentPnpm}`);
    console.error('Use Corepack to activate the pinned pnpm:');
    console.error(`  corepack enable && corepack prepare pnpm@${requiredPnpm} --activate`);
  }
  console.error('Aborting install to prevent lockfile/engine drift.');
  process.exit(1);
}

// All good
process.exit(0);

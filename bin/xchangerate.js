#!/usr/bin/env node

import { xchangerate } from '../index.js';

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Usage: xchangerate <baseCurrency> <targetCurrency> [--local]');
  process.exit(1);
}

const [baseCurrency, targetCurrency, ...flags] = args;
const useCDN = !flags.includes('--local');

xchangerate(baseCurrency, targetCurrency, useCDN)
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
  });
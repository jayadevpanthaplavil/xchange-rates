const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const localPath = path.resolve('./v1/currencies.json');
let localRates = fs.existsSync(localPath) ? JSON.parse(fs.readFileSync(localPath, 'utf-8')) : null;

export async function xchangerate(baseCurrency, targetCurrency, useCDN = false) {
  baseCurrency = baseCurrency.toUpperCase();
  targetCurrency = targetCurrency.toUpperCase();

  let data;

  if (useCDN) {
    const res = await fetch('https://cdn.jsdelivr.net/npm/@jayadevpanthaplavil/xchange-rates@latest/v1/currencies.json');
    data = await res.json();
  } else {
    if (!localRates) throw new Error('Local JSON not available');
    data = localRates;
  }

  if (!data.rates[baseCurrency]) throw new Error(`Base currency ${baseCurrency} not found`);
  if (!data.rates[targetCurrency]) throw new Error(`Target currency ${targetCurrency} not found`);

  const rate = data.rates[targetCurrency] / data.rates[baseCurrency];

  return {
    date: data.date,
    base: baseCurrency,
    target: targetCurrency,
    rate
  };
}

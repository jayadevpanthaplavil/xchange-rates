const fs = require('fs');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const { format } = require('date-fns');
const path = require('path');


dotenv.config();

const KEY = process.env.XCR_KEY1;
const URL = process.env.XCR_URL1;
const API_URL = `${URL}${APP_ID}`;
const outputDir = path.resolve('./v1');
const outputFile = path.join(outputDir, 'currencies.json');

async function updateRates() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    // Remove disclaimer and license
    const { disclaimer, license, ...cleanData } = data;

    // Add today's date
    cleanData.date = format(new Date(), 'yyyy-MM-dd');

    // Ensure directory exists
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

    fs.writeFileSync(outputFile, JSON.stringify(cleanData, null, 2));
    console.log('Exchange rates updated successfully!');
  } catch (err) {
    console.error('Error updating rates:', err);
  }
}

updateRates();

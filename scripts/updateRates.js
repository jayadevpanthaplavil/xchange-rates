import { format } from "date-fns";
import dotenv from "dotenv";
import fs from "fs";
import fetch from "node-fetch";
import path from "path";

dotenv.config();

const KEY = process.env.XCR_KEY1;
const URL = process.env.XCR_URL1;
const API_URL = `${URL}${KEY}`;
const outputDir = path.resolve("./v1");
const outputFile = path.join(outputDir, "currencies.json");

const MAX_RETRIES = 5;
const INITIAL_DELAY_MS = 2000;

async function fetchWithRetry() {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (!res.ok || data.error) {
        const msg = data.description || data.message || `HTTP ${res.status}`;
        throw new Error(`API error: ${msg}`);
      }

      return data;
    } catch (err) {
      if (attempt === MAX_RETRIES) throw err;
      const delay = INITIAL_DELAY_MS * 2 ** (attempt - 1);
      console.warn(
        `Attempt ${attempt}/${MAX_RETRIES} failed: ${err.message}. Retrying in ${delay}ms...`,
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

async function updateRates() {
  try {
    const data = await fetchWithRetry();

    // Remove disclaimer and license
    const { disclaimer, license, ...cleanData } = data;

    // Add today's date
    cleanData.date = format(new Date(), "yyyy-MM-dd");

    // Ensure directory exists
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

    fs.writeFileSync(outputFile, JSON.stringify(cleanData, null, 2));
    console.log("Exchange rates updated successfully!");
  } catch (err) {
    console.error(
      `Error updating rates after ${MAX_RETRIES} attempts:`,
      err.message,
    );
    process.exit(1);
  }
}

updateRates();

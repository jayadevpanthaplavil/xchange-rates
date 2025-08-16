// // semver-date.js
// const today = new Date();
// const version = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`;
// console.log(version);


import fetch from 'node-fetch';

async function generateVersion() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 1–12
  const day = today.getDate();        // 1–31

  // Ensure no leading zeros
  const baseVersion = `${year}.${month}.${day}`;

  try {
    const res = await fetch('https://registry.npmjs.org/xchange-rates');
    const data = await res.json();

    const versions = new Set(Object.keys(data.versions || {}));
    const timeKeys = new Set(Object.keys(data.time || {})); // includes removed versions
    const allVersions = new Set([...versions, ...timeKeys]);

    let finalVersion = baseVersion;
    let patch = 0;

    while (allVersions.has(finalVersion)) {
      patch += 1;
      finalVersion = `${baseVersion}-${patch}`;
    }

    console.log(finalVersion);
  } catch (err) {
    console.error("Error fetching registry:", err);
    console.log(baseVersion);
  }
}

generateVersion();

// // semver-date.js
// const today = new Date();
// const version = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`;
// console.log(version);


import fetch from 'node-fetch';

async function generateVersion() {
  const today = new Date();
  const baseVersion = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`;

  try {
    const res = await fetch('https://registry.npmjs.org/xchange-rates');
    const data = await res.json();

    const versions = new Set(Object.keys(data.versions || {}));
    const timeKeys = new Set(Object.keys(data.time || {})); // includes removed versions
    const allVersions = new Set([...versions, ...timeKeys]);

    let finalVersion = baseVersion;
    let patch = 0;

    // if date already exists anywhere (versions or time), bump patch
    while (allVersions.has(finalVersion)) {
      patch += 1;
      finalVersion = `${baseVersion}.${patch}`; // → 2025.8.16.1, 2025.8.16.2, etc.
    }

    console.log(finalVersion); // stdout → version string
  } catch (err) {
    console.error("Error fetching registry:", err);
    console.log(baseVersion); // fallback to base
  }
}

generateVersion();

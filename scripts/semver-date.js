// // semver-date.js
// const today = new Date();
// const version = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`;
// console.log(version);


import fetch from 'node-fetch';

async function generateVersion() {
  const today = new Date();
  const baseVersion = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`;

  try {
    const res = await fetch('https://registry.npmjs.org/xchange-rates');
    const data = await res.json();
    const versions = Object.keys(data.versions);

    let finalVersion = baseVersion;
    let patch = 0;

    while (versions.includes(finalVersion)) {
      patch += 1;
      finalVersion = `${baseVersion}.${patch}`; // 2025.8.16.1, 2025.8.16.2, etc.
    }

    console.log(finalVersion); // npm uses the stdout as version
  } catch (err) {
    console.error(err);
    console.log(baseVersion); // fallback
  }
}

generateVersion();

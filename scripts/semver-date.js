// semver-date.js
const today = new Date();
const version = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`;
console.log(version);

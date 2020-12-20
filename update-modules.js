const packagejson = require('./package.json'),
	axios = require('axios'),
	fs = require('fs');
let index = "";
console.log('[!] Fetching package list [!]');
axios.get('https://replicate.npmjs.com/_all_docs')
.then(async (response) => {
	const packageList = response.data;
	packageList.rows = packageList.rows.sort();
	console.log(`[!] Found ${packageList.total_rows} package [!]`);
	eval(`packagejson.dependencies = {\n${packageList.rows.filter(packageData => packageData.id !== "all-module").map(packageData => "\"" +packageData.id + "\": 'latest'").join(',\n')}\n}`);
	index = `module.exports = {\n${packageList.rows.filter(packageData => packageData.id !== "all-module").map(packageData => "\"" +packageData.id + "\": require('" + packageData.id + "')").join(',\n')}\n}`;
	console.log("[!] Writing package list to package.json [!]");
	fs.writeFile('./package.json', JSON.stringify(packagejson, null, 2), () => {});
	console.log("[!] Writing export script to index.js [!]");
	fs.writeFile('./index.js', index, () => {});
});

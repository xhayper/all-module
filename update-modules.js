const packageTemplateJSON = require('./package-template.json'),
	axios = require('axios'),
	fs = require('fs');
let index = "";
console.log('[!] Fetching package list [!]');
axios.get('https://replicate.npmjs.com/_all_docs')
.then(async (response) => {
	const packageList = response.data;
	packageList.rows = packageList.rows.sort();
	console.log(`[!] Found ${packageList.total_rows} package [!]`);
	eval(`packageTemplateJSON.dependencies = {\n${packageList.rows.filter(packageData => packageData.id !== "@xhayper/all-module").map(packageData => "\"" +packageData.id + "\": 'latest'").join(',\n')}\n}`);
	index = `module.exports = {\n${packageList.rows.filter(packageData => packageData.id !== "@xhayper/all-module").map(packageData => "\"" +packageData.id + "\": require('" + packageData.id + "')").join(',\n')}\n}`;
	console.log("[!] Writing package list to package.json [!]");
	fs.writeFile('./package.json', JSON.stringify(packageTemplateJSON, null, 2), () => {});
	console.log("[!] Writing export script to index.js [!]");
	fs.writeFile('./index.js', index, () => {});
});

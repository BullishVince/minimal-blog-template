const { readFileSync, writeFileSync, readdirSync, rmSync, unlinkSync, cpSync, rename, renameSync } = require('fs');
const { execSync } = require('child_process');
const cheerio = require('cheerio');
const JavaScriptObfuscator = require('javascript-obfuscator');

const distPath = "./dist/bullishlife.com/browser/";

execSync("npm run prerender");

const files = readdirSync(`${distPath}`);

const jsFiles = files.filter(file => file.endsWith(".js"));
const indexFiles = files.filter(file => file.endsWith(".html"));

//Remove hash from stylesheet filename
const stylesheetFile = files.find(file => file.endsWith(".css"));
renameSync(`${distPath}${stylesheetFile}`, `${distPath}${stylesheetFile.replace(/\.([a-f0-9]+)\./, '.')}`);

indexFiles.forEach(file => {
    const fileContent = readFileSync(`${distPath}/${file}`);
    const $ = cheerio.load(fileContent);
    $('script').remove(); // Remove all existing script tags
    $('head').append(`<script src="main.js" type="module"></script>`); // Add new script tag
    $('link[rel="stylesheet"]').attr('href', `${stylesheetFile.replace(/\.([a-f0-9]+)\./, '.')}`); //Refer to the new styles.css instead of the hashed one

    //This one doesn't work atm, will fix soon as possible...
    $('noscript link[rel="stylesheet"]').attr('href', `${stylesheetFile.replace(/\.([a-f0-9]+)\./, '.')}`); //Refer to the new styles.css instead of the hashed one

    writeFileSync(`${distPath}/${file}`,$.html());
});

const sourceCodeFiles = [];
jsFiles.forEach(jsFile => {
    sourceCodeFiles[jsFile.replace(/\.[^.]+$/, '')] = readFileSync(`${distPath}${jsFile}`, "utf-8");
});

let obfuscatedJs =  "";
const obfuscationDictionary = JavaScriptObfuscator.obfuscateMultiple(sourceCodeFiles, {compact: true, deadCodeInjection: true});
for (const key in obfuscationDictionary) {
    if (obfuscationDictionary.hasOwnProperty(key)) {
        obfuscatedJs += obfuscationDictionary[key];
    }
}

jsFiles.forEach(file => {
    unlinkSync(`${distPath}/${file}`);
})
writeFileSync(`${distPath}main.js`, obfuscatedJs);
execSync(`cp .htaccess ${distPath}/.htaccess`);
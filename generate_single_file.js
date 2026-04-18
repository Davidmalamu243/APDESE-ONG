
import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const assetsDir = path.join(distDir, 'assets');

// Find the CSS and JS files
const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));
const jsFile = files.find(f => f.endsWith('.js'));

if (!cssFile || !jsFile) {
  console.error('Assets not found in dist/assets');
  process.exit(1);
}

const htmlContent = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
const jsContent = fs.readFileSync(path.join(assetsDir, jsFile), 'utf8');

let finalHtml = htmlContent;

// Inline CSS
const cssTag = `<link rel="stylesheet" crossorigin href="/APDESE-ONG/assets/${cssFile}">`;
finalHtml = finalHtml.replace(cssTag, `<style>\n${cssContent}\n</style>`);

// Inline JS
const jsTag = `<script type="module" crossorigin src="/APDESE-ONG/assets/${jsFile}"></script>`;
finalHtml = finalHtml.replace(jsTag, `<script type="module" crossorigin>\n${jsContent}\n</script>`);

// Update Title
finalHtml = finalHtml.replace('<title>My Google AI Studio App</title>', '<title>APDESE ONG - Appui aux Personnes Démunies et de Sensibilisation sur l\'Environnement</title>');

// Save the final file
fs.writeFileSync(path.join(distDir, 'index_github.html'), finalHtml);

console.log('Single file generated at dist/index_github.html');

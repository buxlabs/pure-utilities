const fs = require('fs')
const path = require('path')
const documentation = require('.')

const OUTPUT_DIR = path.join(__dirname, '../gh-pages')

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// HTML template for index page
function generateIndexPage() {
  const modules = Object.keys(documentation)
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pure-utilities - Documentation</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #24292e;
      background-color: #fff;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    header {
      border-bottom: 1px solid #e1e4e8;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
      color: #0366d6;
    }
    .tagline {
      font-size: 1.2em;
      color: #586069;
      margin-bottom: 10px;
    }
    .badges {
      margin-top: 15px;
    }
    .badges img {
      margin-right: 5px;
    }
    .module-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    .module-card {
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      padding: 20px;
      text-decoration: none;
      color: inherit;
      transition: box-shadow 0.2s, transform 0.2s;
      background-color: #fff;
    }
    .module-card:hover {
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
    .module-card h2 {
      color: #0366d6;
      margin-bottom: 10px;
      font-size: 1.5em;
    }
    .method-count {
      color: #586069;
      font-size: 0.9em;
    }
    footer {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid #e1e4e8;
      text-align: center;
      color: #586069;
    }
    footer a {
      color: #0366d6;
      text-decoration: none;
    }
    footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>pure-utilities</h1>
      <p class="tagline">A set of pure functions</p>
      <div class="badges">
        <a href="https://www.npmjs.com/package/pure-utilities"><img src="https://img.shields.io/npm/v/pure-utilities.svg" alt="npm"></a>
        <a href="https://github.com/buxlabs/pure-utilities/actions/workflows/nodejs.yml"><img src="https://github.com/buxlabs/pure-utilities/actions/workflows/nodejs.yml/badge.svg" alt="build"></a>
      </div>
    </header>
    
    <main>
      <h2 style="margin-bottom: 20px;">Modules</h2>
      <div class="module-grid">
${modules.map(moduleName => {
  const methods = Object.keys(documentation[moduleName])
  return `        <a href="${moduleName}.html" class="module-card">
          <h2>${moduleName}</h2>
          <p class="method-count">${methods.length} method${methods.length !== 1 ? 's' : ''}</p>
        </a>`
}).join('\n')}
      </div>
    </main>
    
    <footer>
      <p>
        <a href="https://github.com/buxlabs/pure-utilities">View on GitHub</a> | 
        <a href="https://www.npmjs.com/package/pure-utilities">npm package</a> | 
        Licensed under MIT
      </p>
    </footer>
  </div>
</body>
</html>`
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), html)
}

// HTML template for module page
function generateModulePage(moduleName, methods) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${moduleName} - pure-utilities</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #24292e;
      background-color: #fff;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    header {
      border-bottom: 1px solid #e1e4e8;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .breadcrumb {
      font-size: 0.9em;
      color: #586069;
      margin-bottom: 10px;
    }
    .breadcrumb a {
      color: #0366d6;
      text-decoration: none;
    }
    .breadcrumb a:hover {
      text-decoration: underline;
    }
    h1 {
      font-size: 2.5em;
      color: #0366d6;
      margin-bottom: 10px;
    }
    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      width: 250px;
      height: 100vh;
      background-color: #f6f8fa;
      border-right: 1px solid #e1e4e8;
      overflow-y: auto;
      padding: 20px;
    }
    .sidebar h3 {
      margin-bottom: 10px;
      font-size: 1.1em;
    }
    .sidebar ul {
      list-style: none;
    }
    .sidebar li {
      margin-bottom: 5px;
    }
    .sidebar a {
      color: #586069;
      text-decoration: none;
      font-size: 0.9em;
    }
    .sidebar a:hover {
      color: #0366d6;
    }
    .content-wrapper {
      margin-left: 270px;
    }
    .method {
      margin-bottom: 40px;
      padding: 20px;
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      background-color: #fff;
    }
    .method h2 {
      color: #0366d6;
      margin-bottom: 15px;
      font-size: 1.8em;
    }
    .method-signature {
      background-color: #f6f8fa;
      padding: 10px 15px;
      border-radius: 6px;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 0.9em;
      margin-bottom: 15px;
      border-left: 3px solid #0366d6;
    }
    .parameters {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .parameters h3 {
      font-size: 1em;
      margin-bottom: 10px;
      color: #586069;
    }
    .parameters ul {
      list-style: none;
      padding-left: 0;
    }
    .parameters li {
      padding: 5px 0;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 0.9em;
    }
    .description {
      margin-top: 15px;
    }
    .description h3 {
      font-size: 1em;
      margin-bottom: 10px;
      color: #586069;
    }
    .description p {
      margin-bottom: 10px;
    }
    .lang-toggle {
      display: inline-flex;
      background-color: #f6f8fa;
      border-radius: 6px;
      padding: 2px;
      margin-bottom: 10px;
    }
    .lang-toggle button {
      padding: 5px 15px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      border-radius: 4px;
      font-size: 0.9em;
      color: #586069;
    }
    .lang-toggle button.active {
      background-color: #fff;
      color: #24292e;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    footer {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid #e1e4e8;
      text-align: center;
      color: #586069;
    }
    footer a {
      color: #0366d6;
      text-decoration: none;
    }
    footer a:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      .sidebar {
        position: static;
        width: 100%;
        height: auto;
        border-right: none;
        border-bottom: 1px solid #e1e4e8;
      }
      .content-wrapper {
        margin-left: 0;
      }
    }
  </style>
</head>
<body>
  <div class="sidebar">
    <h3><a href="index.html">← All Modules</a></h3>
    <h3 style="margin-top: 20px;">Methods</h3>
    <ul>
${Object.keys(methods).map(methodName => 
  `      <li><a href="#${methodName}">${methodName}</a></li>`
).join('\n')}
    </ul>
  </div>
  
  <div class="content-wrapper">
    <div class="container">
      <header>
        <div class="breadcrumb">
          <a href="index.html">pure-utilities</a> / ${moduleName}
        </div>
        <h1>${moduleName}</h1>
      </header>
      
      <main>
${Object.entries(methods).map(([methodName, methodData]) => {
  const params = methodData.parameters || []
  const signature = `${methodName}(${params.join(', ')})`
  
  return `        <div class="method" id="${methodName}">
          <h2>${methodName}</h2>
          <div class="method-signature">${signature}</div>
          
          ${params.length > 0 ? `<div class="parameters">
            <h3>Parameters:</h3>
            <ul>
${params.map(param => `              <li>${param}</li>`).join('\n')}
            </ul>
          </div>` : ''}
          
          <div class="description">
            <div class="lang-toggle">
              <button class="active" onclick="showLang(this, 'en', '${methodName}')">English</button>
              <button onclick="showLang(this, 'pl', '${methodName}')">Polski</button>
            </div>
            <p class="desc-en-${methodName}">${methodData.description.en}</p>
            <p class="desc-pl-${methodName}" style="display: none;">${methodData.description.pl}</p>
          </div>
        </div>`
}).join('\n\n')}
      </main>
      
      <footer>
        <p>
          <a href="https://github.com/buxlabs/pure-utilities">View on GitHub</a> | 
          <a href="https://www.npmjs.com/package/pure-utilities">npm package</a> | 
          Licensed under MIT
        </p>
      </footer>
    </div>
  </div>
  
  <script>
    function showLang(btn, lang, methodName) {
      const parent = btn.parentElement;
      const buttons = parent.querySelectorAll('button');
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const enDesc = document.querySelector('.desc-en-' + methodName);
      const plDesc = document.querySelector('.desc-pl-' + methodName);
      
      if (lang === 'en') {
        enDesc.style.display = 'block';
        plDesc.style.display = 'none';
      } else {
        enDesc.style.display = 'none';
        plDesc.style.display = 'block';
      }
    }
  </script>
</body>
</html>`
  
  fs.writeFileSync(path.join(OUTPUT_DIR, `${moduleName}.html`), html)
}

// Generate all pages
console.log('Generating GitHub Pages documentation...')

// Create .nojekyll file to disable Jekyll processing
fs.writeFileSync(path.join(OUTPUT_DIR, '.nojekyll'), '')
console.log('✓ Generated .nojekyll')

// Create index page
generateIndexPage()
console.log('✓ Generated index.html')

// Create module pages
for (const moduleName in documentation) {
  generateModulePage(moduleName, documentation[moduleName])
  console.log(`✓ Generated ${moduleName}.html`)
}

console.log(`\nDocumentation generated in ${OUTPUT_DIR}`)
console.log(`Total pages: ${Object.keys(documentation).length + 1}`)

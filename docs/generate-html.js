const fs = require('fs')
const path = require('path')
const { compile } = require('boxwood')
const documentation = require('.')

const OUTPUT_DIR = __dirname

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// Compile templates
const indexTemplate = compile(path.join(__dirname, 'templates/index.js'))
const moduleTemplate = compile(path.join(__dirname, 'templates/module.js'))

// Generate index page
function generateIndexPage() {
  const modules = Object.keys(documentation).map(name => ({
    name,
    count: Object.keys(documentation[name]).length
  }))
  
  const html = indexTemplate.template({ modules })
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), html)
}

// Generate module page
function generateModulePage(moduleName, methods) {
  const html = moduleTemplate.template({ moduleName, methods })
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

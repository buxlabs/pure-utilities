const { doctype, html, head, meta, title, body, div, header, h1, h2, h3, p, main, a, footer, link, style, script, ul, li, button, raw } = require('boxwood')

module.exports = ({ moduleName, methods }) => {
  return [
    doctype(),
    html({ lang: 'en' }, [
      head([
        meta({ charset: 'UTF-8' }),
        meta({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
        title(`${moduleName} - pure-utilities`),
        style(`
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
        `)
      ]),
      body([
        div({ className: 'sidebar' }, [
          h3([
            a({ href: 'index.html' }, '← All Modules')
          ]),
          h3({ style: 'margin-top: 20px;' }, 'Methods'),
          ul(
            Object.keys(methods).map(methodName =>
              li([
                a({ href: `#${methodName}` }, methodName)
              ])
            )
          )
        ]),
        div({ className: 'content-wrapper' }, [
          div({ className: 'container' }, [
            header([
              div({ className: 'breadcrumb' }, [
                a({ href: 'index.html' }, 'pure-utilities'),
                raw(` / ${moduleName}`)
              ]),
              h1(moduleName)
            ]),
            main(
              Object.entries(methods).map(([methodName, methodData]) => {
                const params = methodData.parameters || []
                const signature = `${methodName}(${params.join(', ')})`
                
                return div({ className: 'method', id: methodName }, [
                  h2(methodName),
                  div({ className: 'method-signature' }, signature),
                  
                  params.length > 0 ? div({ className: 'parameters' }, [
                    h3('Parameters:'),
                    ul(
                      params.map(param => li(param))
                    )
                  ]) : null,
                  
                  div({ className: 'description' }, [
                    div({ className: 'lang-toggle' }, [
                      button({ 
                        className: 'active',
                        onclick: `showLang(this, 'en', '${methodName}')`
                      }, 'English'),
                      button({ 
                        onclick: `showLang(this, 'pl', '${methodName}')`
                      }, 'Polski')
                    ]),
                    p({ className: `desc-en-${methodName}` }, methodData.description.en),
                    p({ 
                      className: `desc-pl-${methodName}`,
                      style: 'display: none;'
                    }, methodData.description.pl)
                  ])
                ])
              })
            ),
            footer([
              p([
                a({ href: 'https://github.com/buxlabs/pure-utilities' }, 'View on GitHub'),
                raw(' | '),
                a({ href: 'https://www.npmjs.com/package/pure-utilities' }, 'npm package'),
                raw(' | Licensed under MIT')
              ])
            ])
          ])
        ]),
        script(raw(`
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
        `))
      ])
    ])
  ]
}

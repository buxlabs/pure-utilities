const { doctype, html, head, meta, title, body, div, header, h1, p, main, h2, a, footer, link, style, raw } = require('boxwood')

module.exports = ({ modules }) => {
  return [
    doctype(),
    html({ lang: 'en' }, [
      head([
        meta({ charset: 'UTF-8' }),
        meta({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
        title('pure-utilities - Documentation'),
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
        `)
      ]),
      body([
        div({ className: 'container' }, [
          header([
            h1('pure-utilities'),
            p({ className: 'tagline' }, 'A set of pure functions'),
            div({ className: 'badges' }, [
              a({ href: 'https://www.npmjs.com/package/pure-utilities' }, [
                raw('<img src="https://img.shields.io/npm/v/pure-utilities.svg" alt="npm">')
              ]),
              a({ href: 'https://github.com/buxlabs/pure-utilities/actions/workflows/nodejs.yml' }, [
                raw('<img src="https://github.com/buxlabs/pure-utilities/actions/workflows/nodejs.yml/badge.svg" alt="build">')
              ])
            ])
          ]),
          main([
            h2({ style: 'margin-bottom: 20px;' }, 'Modules'),
            div({ className: 'module-grid' }, 
              modules.map(({ name, count }) => 
                a({ href: `${name}.html`, className: 'module-card' }, [
                  h2(name),
                  p({ className: 'method-count' }, `${count} method${count !== 1 ? 's' : ''}`)
                ])
              )
            )
          ]),
          footer([
            p([
              a({ href: 'https://github.com/buxlabs/pure-utilities' }, 'View on GitHub'),
              raw(' | '),
              a({ href: 'https://www.npmjs.com/package/pure-utilities' }, 'npm package'),
              raw(' | Licensed under MIT')
            ])
          ])
        ])
      ])
    ])
  ]
}

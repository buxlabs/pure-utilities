const { Doctype, Html, Head, Meta, Title, Body, Div, Header, H1, P, Main, H2, A, Footer, css, raw } = require('boxwood')
const path = require('path')

const styles = css.load(path.join(__dirname, 'styles', 'index.css'))

module.exports = ({ modules }) => {
  return [
    Doctype(),
    Html({ lang: 'en' }, [
      Head([
        Meta({ charset: 'UTF-8' }),
        Meta({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
        Title('pure-utilities - Documentation'),
        styles.css
      ]),
      Body([
        Div({ className: styles.container }, [
          Header([
            H1('pure-utilities'),
            P({ className: styles.tagline }, 'A set of pure functions'),
            Div({ className: styles.badges }, [
              A({ href: 'https://www.npmjs.com/package/pure-utilities' }, [
                raw('<img src="https://img.shields.io/npm/v/pure-utilities.svg" alt="npm">')
              ]),
              A({ href: 'https://github.com/buxlabs/pure-utilities/actions/workflows/nodejs.yml' }, [
                raw('<img src="https://github.com/buxlabs/pure-utilities/actions/workflows/nodejs.yml/badge.svg" alt="build">')
              ])
            ])
          ]),
          Main([
            H2({ style: 'margin-bottom: 20px;' }, 'Modules'),
            Div({ className: styles['module-grid'] }, 
              modules.map(({ name, count }) => 
                A({ href: `${name}.html`, className: styles['module-card'] }, [
                  H2(name),
                  P({ className: styles['method-count'] }, `${count} method${count !== 1 ? 's' : ''}`)
                ])
              )
            )
          ]),
          Footer([
            P([
              A({ href: 'https://github.com/buxlabs/pure-utilities' }, 'View on GitHub'),
              raw(' | '),
              A({ href: 'https://www.npmjs.com/package/pure-utilities' }, 'npm package'),
              raw(' | Licensed under MIT')
            ])
          ])
        ])
      ])
    ])
  ]
}

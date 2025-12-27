const { Doctype, Html, Head, Meta, Title, Body, Div, Header, H1, H2, H3, P, Main, A, Footer, css, Script, Ul, Li, Button, raw } = require('boxwood')
const path = require('path')

const styles = css.load(path.join(__dirname, 'styles', 'module.css'))

module.exports = ({ moduleName, methods }) => {
  return [
    Doctype(),
    Html({ lang: 'en' }, [
      Head([
        Meta({ charset: 'UTF-8' }),
        Meta({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
        Title(`${moduleName} - pure-utilities`),
        styles.css
      ]),
      Body([
        Div({ className: styles.sidebar }, [
          H3([
            A({ href: 'index.html' }, '← All Modules')
          ]),
          H3({ style: 'margin-top: 20px;' }, 'Methods'),
          Ul(
            Object.keys(methods).map(methodName =>
              Li([
                A({ href: `#${methodName}` }, methodName)
              ])
            )
          )
        ]),
        Div({ className: styles['content-wrapper'] }, [
          Div({ className: styles.container }, [
            Header([
              Div({ className: styles.breadcrumb }, [
                A({ href: 'index.html' }, 'pure-utilities'),
                raw(` / ${moduleName}`)
              ]),
              H1(moduleName)
            ]),
            Main(
              Object.entries(methods).map(([methodName, methodData]) => {
                const params = methodData.parameters || []
                const signature = `${methodName}(${params.join(', ')})`
                
                return Div({ className: styles.method, id: methodName }, [
                  H2(methodName),
                  Div({ className: styles['method-signature'] }, signature),
                  
                  params.length > 0 ? Div({ className: styles.parameters }, [
                    H3('Parameters:'),
                    Ul(
                      params.map(param => Li(param))
                    )
                  ]) : null,
                  
                  Div({ className: styles.description }, [
                    Div({ className: styles['lang-toggle'] }, [
                      Button({ 
                        className: 'active',
                        onclick: `showLang(this, 'en', '${methodName}')`
                      }, 'English'),
                      Button({ 
                        onclick: `showLang(this, 'pl', '${methodName}')`
                      }, 'Polski')
                    ]),
                    P({ className: `desc-en-${methodName}` }, methodData.description.en),
                    P({ 
                      className: `desc-pl-${methodName}`,
                      style: 'display: none;'
                    }, methodData.description.pl)
                  ])
                ])
              })
            ),
            Footer([
              P([
                A({ href: 'https://github.com/buxlabs/pure-utilities' }, 'View on GitHub'),
                raw(' | '),
                A({ href: 'https://www.npmjs.com/package/pure-utilities' }, 'npm package'),
                raw(' | Licensed under MIT')
              ])
            ])
          ])
        ]),
        Script(`
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
        `)
      ])
    ])
  ]
}

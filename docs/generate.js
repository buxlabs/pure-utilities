const utilities = require('..')
const string = require('./string')
const array = require('./array')


const documentation = Object.assign({}, string, array)

for (let name in utilities) {
  const utility = utilities[name]
  for (let method in utility.ar) {
    if (!documentation[method]) {
      throw new Error(`Documentation missing for: ${method}`)
    }
  }
}

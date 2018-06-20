const utilities = require('..')
const string = require('./string')
const documentation = Object.assign({}, string)

for (let name in utilities) {
  const utility = utilities[name]
  for (let method in utility) {
    if (!documentation[method]) {
      throw new Error(`Documentation missing for: ${method}`)
    }
  }
}

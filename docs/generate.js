const utilities = require('..')
const documentation = require('.')

for (let name in utilities) {
  const utility = utilities[name]
  for (let method in utility) {
    if (!documentation[method]) {
      throw new Error(`Documentation missing for: ${method}`)
    }
    const { description } = documentation[method]
    if (!description) {
      throw new Error(`Description missing for: ${method}`)
    }
    if (!description.en || !description.pl) {
      throw new Error(`Translations missing for: ${method}`)
    }
  }
}

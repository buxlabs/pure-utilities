const utilities = require('..')
const string = require('./string')
const array = require('./array')
const collection = require('./collection')
const date = require('./date')
const json = require('./json')

const documentation = Object.assign({}, string, array, collection, json)

for (let name in utilities) {
  const utility = utilities[name]
  for (let method in utility) {
    if (!documentation[method]) {
      throw new Error(`Documentation missing for: ${method}`)
    }
  }
}

const array = require('../../array')
const input = require('./input')

for (let key in input) {
  const fn = array[key]
  for (let example of input[key].examples) {
    const { input } = example
    example.output = fn(...input)
  }
}

module.exports =  input

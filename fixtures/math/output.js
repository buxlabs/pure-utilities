const math = require('../../math')
const input = require('./input')
const { stringify } = JSON
function replacer  (key, value) {
  return typeof value === 'function' ? value.toString() : value
}
function getCode (fn, input) {
  const args = input.map(value => stringify(value, replacer)).join(', ')
  return `${fn.name}(${args})`
}
for (let key in input) {
  const fn = math[key]
  for (let example of input[key].examples) {
    const { input } = example
    example.code = getCode(fn, input)
    example.output = stringify(fn(...input))
  }
}
module.exports =  input

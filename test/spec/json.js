const test = require('ava')
const { json } = require('../..')

test('prettify should format JSON string', t => {
  var parsed = json.prettify('{"hello":"world"}')
  t.deepEqual(parsed, '{\n  "hello": "world"\n}')
})

test('prettify should format objects', t => {
  var parsed = json.prettify({ hello: 'world' })
  t.deepEqual(parsed, '{\n  "hello": "world"\n}')
})

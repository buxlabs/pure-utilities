import test from 'ava'
import { json } from '../..'

test('prettify should format JSON string', t => {
  var parsed = json.prettify('{"hello":"world"}')
  t.deepEqual(parsed, '{\n  "hello": "world"\n}')
})

test('prettify should format objects', t => {
  var parsed = json.prettify({ hello: 'world' })
  t.deepEqual(parsed, '{\n  "hello": "world"\n}')
})

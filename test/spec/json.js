import test from 'ava'
import { json } from '../../build'

test('prettify should format JSON string', t => {
  var parsed = json.prettify('{"hello":"world"}')
  t.deepEqual(parsed, '{\n    "hello": "world"\n}')
})

import test from 'ava'
import index from '../..'

test('methods should be unique', t => {
  const methods = []
  for (let key in index) {
    for (let method in index[key]) {
      methods.push(method)
    }
  }
  t.truthy(methods.length === new Set(methods).size)
})

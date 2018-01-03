import test from 'ava'
import index from '../../build/index.umd'

test('it is defined', t => {
  t.truthy(index)
})

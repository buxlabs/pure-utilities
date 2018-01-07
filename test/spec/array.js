import test from 'ava'
import { array } from '../../build/index.umd'

test('flatten an n-dimensional array', assert => {
  assert.deepEqual(array.flatten([1, [2], [[3, [4, [5]]]]]), [1, 2, 3, 4, 5])
})

test('identifier returns a new unique identifier based on used identifiers', assert => {
  assert.deepEqual(array.identifier([]), 'a')
  assert.deepEqual(array.identifier(['a']), 'b')
  assert.deepEqual(array.identifier('abcdefghijklmnopqrstuvwxyz'.split('')), '_a')
})

import test from 'ava'
import { array } from '../../build/index.umd'

test('flatten an n-dimensional array', t => {
  t.deepEqual(array.flatten([1, [2], [[3, [4, [5]]]]]), [1, 2, 3, 4, 5])
})

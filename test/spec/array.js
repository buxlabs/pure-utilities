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

test('first returns first element of an array', assert => {
  assert.deepEqual(array.first([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1)
})

test('second returns second element of an array', assert => {
  assert.deepEqual(array.second([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 2)
})

test('third returns third element of an array', assert => {
  assert.deepEqual(array.third([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3)
})

test('fourth returns fourth element of an array', assert => {
  assert.deepEqual(array.fourth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 4)
})

test('fifth returns fifth element of an array', assert => {
  assert.deepEqual(array.fifth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 5)
})

test('sixth returns sixth element of an array', assert => {
  assert.deepEqual(array.sixth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 6)
})

test('seventh returns seventh element of an array', assert => {
  assert.deepEqual(array.seventh([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 7)
})

test('eigth returns eigth element of an array', assert => {
  assert.deepEqual(array.eigth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 8)
})

test('ninth returns ninth element of an array', assert => {
  assert.deepEqual(array.ninth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9)
})

test('tenth returns tenth element of an array', assert => {
  assert.deepEqual(array.tenth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10)
})

test('last returns last element of an array', assert => {
  assert.deepEqual(array.last([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10)
})

test('sum returns the sum of a list of numbers', assert => {
  assert.deepEqual(array.sum([3, 10, 2]), 15)
})

test('sum returns the sum of a list of numbers', assert => {
  assert.deepEqual(array.sum([100, 200, 1]), 301)
})

test('average returns the average of a list of numbers', assert => {
  assert.deepEqual(array.average([100, 200]), 150)
})

test('average returns the average of a list of numbers', assert => {
  assert.deepEqual(array.average([2, 0]), 1)
})

test('median returns the median of a list of numbers', assert => {
  assert.deepEqual(array.median([6, 4, 2, 4, 4]), 4)
})

test('median returns the median of a list of numbers', assert => {
  assert.deepEqual(array.median([1, 2, 3, 5, 5, 6]), 4)
})


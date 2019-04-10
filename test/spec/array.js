import test from 'ava'
import { array } from '../..'

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

test('median returns the median of a list of numbers', assert => {
  assert.deepEqual(array.median([5, 18, 1]), 5)
})

test('median returns the median of a list of numbers', assert => {
  assert.deepEqual(array.median([91, 210, 205, 204, 212]), 205)
})

test('compact returns a copy of the array only with truthy values', assert => {
  assert.deepEqual(array.compact([0, 1, false, 2, '', 3]), [1, 2, 3])
})

test('unique returns a copy of the array without duplicate items', assert => {
  assert.deepEqual(array.unique([1, 1, 2, 10, 2, 33]), [1, 2, 10, 33])
})

test('nth gets element at index "n" of array', assert => {
  assert.deepEqual(array.nth([1, 2, 3, 4, 5], 4), 4)
})

test('nth gets element at index "n" of array', assert => {
  assert.deepEqual(array.nth([1, 2, 3, 4, 5], -2), 4)
})

test('nth gets element at index "n" of array', assert => {
  assert.deepEqual(array.nth([1, 2, 3, 4, 5], -5), 1)
})

test('sample returns a random item from array', assert => {
  assert.deepEqual(array.sample([1]), 1)
})

test('rotate shifts "n" items out of the array and pushes them back on the end', assert => {
  assert.deepEqual(array.rotate([1, 2, 3]), [1, 2, 3])
})

test('rotate shifts "n" items out of the array and pushes them back on the end', assert => {
  assert.deepEqual(array.rotate([1, 2, 3], 1), [2, 3, 1])
})

test('rotate shifts "n" items out of the array and pushes them back on the end', assert => {
  assert.deepEqual(array.rotate([1, 2, 3], 2), [3, 1, 2])
})

test('rotate shifts "n" items out of the array and pushes them back on the end', assert => {
  assert.deepEqual(array.rotate([1, 2, 3], 3), [1, 2, 3])
})

test('rotate shifts "n" items out of the array and pushes them back on the end', assert => {
  assert.deepEqual(array.rotate([1, 2, 3], 4), [2, 3, 1])
})

test('rotate shifts "n" items out of the array and pushes them back on the end', assert => {
  assert.deepEqual(array.rotate([1, 2, 3], -1), [3, 1, 2])
})

test('rotate shifts "n" items out of the array and pushes them back on the end', assert => {
  assert.deepEqual(array.rotate(['lorem', 'ipsum', 'dolor', 'santo'], -2), ['dolor', 'santo', 'lorem', 'ipsum'])
})

test('rotate shifts "n" items out of the array and pushes them back on the end', assert => {
  assert.deepEqual(array.rotate([1, 2, 3], -3), [1, 2, 3])
})

test('drop returns the tail of array after dropping the first `n` elements.', assert => {
  assert.deepEqual(array.drop([1, 2, 3], 2), [3])
})

test('drop returns the tail of array after dropping the first `n` elements.', assert => {
  assert.deepEqual(array.drop([1, 2, 3, 4, 5, 6], 3), [4, 5, 6])
})

test('drop returns the tail of array after dropping the first `n` elements.', assert => {
  assert.deepEqual(array.drop('Hello World', 6), 'World')
})

test('head returns first element of an array', assert => {
  assert.deepEqual(array.head([1, 2, 3, 4, 5, 6]), 1)
})

test('head returns first element of an array', assert => {
  assert.deepEqual(array.head('Hello World'), 'H')
})

test('take takes n items of an array.', assert => {
  assert.deepEqual(array.take([1, 2, 3, 4, 5, 6], 2), [1, 2])
})

test('take takes n items of an array.', assert => {
  assert.deepEqual(array.take('Hello World', 5), 'Hello')
})

test('slice returns a shallow copy of a portion of an array into a new array object selected from start to end', assert => {
  assert.deepEqual(array.slice([1, 2, 3, 4, 5, 6], 3, 5), [4, 5])
})

test('slice returns a shallow copy of a portion of an array into a new array object selected from start to end', assert => {
  assert.deepEqual(array.slice('Hello World', 6, 9), 'Wor')
})

test('pluck extracts a list of all property values', assert => {
  assert.deepEqual(
    array.pluck([
      { name: 'moe', age: 40 },
      { name: 'larry', age: 50 },
      { name: 'curly', age: 60 }
    ], 'name'), ['moe', 'larry', 'curly'])
})

test('pluck returns a list of only existing property values', assert => {
  assert.deepEqual(
    array.pluck([
      { foo: 'moe', age: 40 },
      { name: 'larry', age: 50 },
      { bar: 'curly', age: 60 }
    ], 'name'), ['larry'])
})

test('pluck returns a list of not empty property values', assert => {
  assert.deepEqual(
    array.pluck([
      { name: '', age: 40 },
      { name: 'larry', age: 50 },
      { name: null, age: 60 },
      { name: undefined, age: 70 }
    ], 'name'), ['larry'])
})

test('pluck ignores elements which are not an objects', assert => {
  assert.deepEqual(
    array.pluck([
      333,
      { name: 'moe', age: 40 },
      'bar',
      [123, 'foo'],
      () => {}
    ], 'name'), ['moe'])
})

test('intersection returns common elements of passed arrays', assert => {
  const array1 = [1, 2, 3, 4, 5, 100]
  const array2 = [100, 2, 3, 10, 31]
  const array3 = [2, 3, 4]
  let commonElements = []
  commonElements = array.intersection(array1, array2)
  assert.deepEqual(commonElements, [2, 3, 100])

  commonElements = array.intersection(array1, array3)
  assert.deepEqual(commonElements, [2, 3, 4])

  commonElements = array.intersection(array1, array2, array3)
  assert.deepEqual(commonElements, [2, 3])

  commonElements = array.intersection(array1, array2, array3)
  assert.deepEqual(commonElements, [2, 3])
})

test('difference returns the difference between one array and a number of other arrays', assert => {
  const array1 = [1, 2, 3, 4, 5, 100]
  const array2 = [100, 2, 3, 10, 31]
  const array3 = [2, 3, 4]
  let difference = []
  difference = array.difference(array1, array2)
  assert.deepEqual(difference, [1, 4, 5])

  difference = array.difference(array1, array3)
  assert.deepEqual(difference, [1, 5, 100])

  difference = array.difference(array1, array2, array3)
  assert.deepEqual(difference, [1, 5])

  difference = array.difference(['foo', 'bar', 'baz'], ['bar'], ['baz'])
  assert.deepEqual(difference, ['foo'])
})

test('duplicates returns repeating elements of the array', assert => {
  let array1 = [1, 1, 2, 3, 5, 5]
  let duplicates = array.duplicates(array1)
  assert.deepEqual(duplicates, [1, 5])

  array1 = ['foo', 'bar', 'baz', 'foo', 'baz']
  duplicates = array.duplicates(array1)
  assert.deepEqual(duplicates, ['foo', 'baz'])
})

test('symdifference returns an array of unique values that is the symmetric difference', assert => {
  let array1 = [1, 2]
  let array2 = [2, 3]
  let difference = array.symdifference(array1, array2)

  array1 = [1, 3, 4, 6, 7, 9]
  array2 = [3, 5, 6, 7, 8, 9]
  difference = array.symdifference(array1, array2)
  assert.deepEqual(difference, [1, 4, 5, 8])
})

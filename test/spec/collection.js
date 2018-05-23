import test from 'ava'
import { collection } from '../..'

test('size returns length of collection', assert => {
  assert.deepEqual(collection.size([1, 2, 3, 4, 5]), 5)
})

test('size returns length of collection', assert => {
  assert.deepEqual(collection.size('foobar'), 6)
})

test('size returns length of collection', assert => {
  assert.deepEqual(collection.size({ a: 1, b: 2 }), 2)
})

test('size returns length of collection', assert => {
  assert.deepEqual(collection.size(new Set([1, 2, 3, 4, 5])), 5)
})

test('reverse should reverse collection', t => {
  var parsed = collection.reverse('foo')
  t.deepEqual(parsed, 'oof')
})

test('reverse should reverse collection', t => {
  var parsed = collection.reverse('12345')
  t.deepEqual(parsed, '54321')
})

test('reverse should reverse collection', t => {
  var parsed = collection.reverse([1, 2, 3, 4])
  t.deepEqual(parsed, [4, 3, 2, 1])
})

import test from 'ava'
import { collection } from '../..'

// append tests
test('append called without any arguments should return untouched collection', assert => {
  assert.deepEqual(collection.append('qwe'), 'qwe')
})

test('append called with argument other than string or array should throw an error', assert => {
  const error = assert.throws(() => {
    collection.append({}, 'abc')
  }, TypeError)
  assert.is(error.message, "[ERROR]: 'append' filter processes only strings or arrays")
})

test('append for string should add argument at the end of the string', assert => {
  assert.deepEqual(collection.append('qwe', 'abc'), 'qweabc')
})

test('append for string should add many arguments at the end of the string', assert => {
  assert.deepEqual(collection.append('qwe', '---', '___', '***'), 'qwe---___***')
})

test('append for array should add argument at the end of the array', assert => {
  assert.deepEqual(collection.append(['qwe'], 'abc'), ['qwe', 'abc'])
})

test('append for array should add many arguments at the end of the array', assert => {
  assert.deepEqual(collection.append(['qwe'], '---', '___', '***'), ['qwe', '---', '___', '***'])
})

// prepend tests
test('prepend called without any arguments should return untouched collection', assert => {
  assert.deepEqual(collection.prepend('qwe'), 'qwe')
})

test('prepend called with argument other than string or array should throw an error', assert => {
  const error = assert.throws(() => {
    collection.prepend({}, 'abc')
  }, TypeError)
  assert.is(error.message, "[ERROR]: 'prepend' filter processes only strings or arrays")
})

test('prepend for string should add argument at the beginning of the string', assert => {
  assert.deepEqual(collection.prepend('qwe', 'abc'), 'abcqwe')
})

test('prepend for string should add many arguments at the beginning of the string', assert => {
  assert.deepEqual(collection.prepend('qwe', '---', '___', '***'), '---___***qwe')
})

test('prepend for array should add argument at the beginning of the array', assert => {
  assert.deepEqual(collection.prepend(['qwe'], 'abc'), ['abc', 'qwe'])
})

test('prepend for array should add many arguments at the beginning of the array', assert => {
  assert.deepEqual(collection.prepend(['qwe'], '---', '___', '***'), ['---', '___', '***', 'qwe'])
})

// size tests
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

// reverse tests
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

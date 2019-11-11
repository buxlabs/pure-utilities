import test from 'ava'
import { collection } from '../..'

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

test('size returns length of collection/array', assert => {
  assert.deepEqual(collection.size([1, 2, 3, 4, 5]), 5)
})

test('size returns length of collection/string', assert => {
  assert.deepEqual(collection.size('foobar'), 6)
})

test('size returns length of collection/object', assert => {
  assert.deepEqual(collection.size({ a: 1, b: 2 }), 2)
})

test('size returns length of collection/set', assert => {
  assert.deepEqual(collection.size(new Set([1, 2, 3, 4, 5])), 5)
})

test('reverse should reverse collection/string of letters', t => {
  var parsed = collection.reverse('foo')
  t.deepEqual(parsed, 'oof')
})

test('reverse should reverse collection/string of numbers', t => {
  var parsed = collection.reverse('12345')
  t.deepEqual(parsed, '54321')
})

test('reverse should reverse collection/array of numbers', t => {
  var parsed = collection.reverse([1, 2, 3, 4])
  t.deepEqual(parsed, [4, 3, 2, 1])
})

test('flatten an n-dimensional array', assert => {
  assert.deepEqual(collection.flatten([1, [2], [[3, [4, [5]]]]]), [1, 2, 3, 4, 5])
})

test('flatten shouldn`t change flat object', t => {
  const object1 = { orderAccepted: 'Your order has been accepted' }
  const result = { orderAccepted: 'Your order has been accepted' }
  t.deepEqual(collection.flatten(object1), result)
})

test('flatten should flatten the object if it has 2 levels', t => {
  const object1 = { titles: { index: 'Buxus - Plants, seedlings, producer' } }
  const result = { 'titles.index': 'Buxus - Plants, seedlings, producer' }
  t.deepEqual(collection.flatten(object1), result)
})

test('flatten should flatten the object if it has 3 levels', t => {
  const object1 = {
    errors: {
      404: {
        title: 'Page not found'
      }
    }
  }
  const result = {
    'errors.404.title': 'Page not found'
  }
  t.deepEqual(collection.flatten(object1), result)
})

test('unflatten shouldn`t change unflat object', t => {
  const result = { orderAccepted: 'Your order has been accepted' }
  const object1 = { orderAccepted: 'Your order has been accepted' }
  t.deepEqual(collection.unflatten(object1), result)
})

test('unflatten should unflatten the object if it has 2 levels', t => {
  const object1 = { 'titles.index': 'Buxus - Plants, seedlings, producer' }
  const result = {
    titles: {
      index: 'Buxus - Plants, seedlings, producer'
    }
  }
  t.deepEqual(collection.unflatten(object1), result)
})

test('unflatten should unflatten the object if it has 3 levels', t => {
  const object1 = { 'errors.404.title': 'Page not found' }
  const result = {
    errors: {
      404: {
        title: 'Page not found'
      }
    }
  }
  const unflattened = collection.unflatten(object1)
  t.deepEqual(unflattened, result)
  t.truthy(!Array.isArray(unflattened.errors))
})

test('occurences should return the count of occurences of the string in the array', t => {
  t.deepEqual(collection.occurences(['foo', 'foo', 'bar'], 'foo'), 2)
})

test('occurences should return the count of occurences of the string in the string', t => {
  t.deepEqual(collection.occurences('foo foo bar', 'foo'), 2)
})

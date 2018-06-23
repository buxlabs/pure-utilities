import test from 'ava'
import { object } from '../..'

test('flatten shouldn`t change flat object', t => {
  const object1 = { 'orderAccepted': 'Your order has been accepted' }
  const result = { 'orderAccepted': 'Your order has been accepted' }
  t.deepEqual(object.flatten(object1), result)
})

test('flatten should flatten the object if it has 2 levels', t => {
  const object1 = { titles: { 'index': 'Buxus - Plants, seedlings, producer' } }
  const result = { 'titles.index': 'Buxus - Plants, seedlings, producer' }
  t.deepEqual(object.flatten(object1), result)
})

test('flatten should flatten the object if it has 3 levels', t => {
  const object1 = {
    errors: {
      '404': {
        title: 'Page not found'
      }
    }
  }
  const result = {
    'errors.404.title': 'Page not found'
  }
  t.deepEqual(object.flatten(object1), result)
})

test('unflatten shouldn`t change unflat object', t => {
  const result = { 'orderAccepted': 'Your order has been accepted' }
  const object1 = { 'orderAccepted': 'Your order has been accepted' }
  t.deepEqual(object.unflatten(object1), result)
})

test('unflatten should unflatten the object if it has 2 levels', t => {
  const object1 = { 'titles.index': 'Buxus - Plants, seedlings, producer' }
  const result = {
    'titles': {
      'index': 'Buxus - Plants, seedlings, producer'
    }
  }
  t.deepEqual(object.unflatten(object1), result)
})

test('unflatten should unflatten the object if it has 3 levels', t => {
  const object1 = { 'errors.404.title': 'Page not found' }
  const result = {
    'errors': {
      '404': {
        'title': 'Page not found'
      }
    }
  }
  const unflattened = object.unflatten(object1)
  t.deepEqual(unflattened, result)
  t.truthy(!Array.isArray(unflattened.errors))
})

test('rename should rename the keys in given object', t => {
  const object1 = { 'created_at': '2000-01-01' }
  const keys = { 'created_at': 'createdAt' }
  const result = { 'createdAt': '2000-01-01' }
  t.deepEqual(object.rename(object1, keys), result)
})

test('rename should ignore object`s properties without match', t => {
  const object1 = { 'created_at': '2000-01-01', 'title': 'Hello world!' }
  const keys = { 'created_at': 'createdAt' }
  const result = { 'createdAt': '2000-01-01', 'title': 'Hello world!' }
  t.deepEqual(object.rename(object1, keys), result)
})

test('rename should ignore key`s properties without match', t => {
  const object1 = { 'created_at': '2000-01-01', 'title': 'Hello world!' }
  const keys = { 'created_at': 'createdAt', 'updated_at': 'updatedAt' }
  const result = { 'createdAt': '2000-01-01', 'title': 'Hello world!' }
  t.deepEqual(object.rename(object1, keys), result)
})

test('dig returns the value of a field', t => {
  t.deepEqual(object.dig({ foo: 'bar' }, 'foo'), 'bar')
})

test('dig returns the value of a nested field', t => {
  t.deepEqual(object.dig({ foo: { bar: 'baz' } }, 'foo.bar'), 'baz')
})

test('dig returns null if the key does not match', t => {
  t.deepEqual(object.dig({ foo: 'bar' }, 'baz'), null)
})

test('pat overrides a value of a field', t => {
  t.deepEqual(object.pat({ foo: 'bar' }, 'foo', 'baz'), { foo: 'baz' })
})

test('pat overrides deeply nested fields', t => {
  t.deepEqual(object.pat({}, 'baz.bar', 'foo'), { baz: { bar: 'foo' } })
})

test(`values returns an array containing the values that correspond to all of a given object's own enumerable string properties`, t => {
  const parsed = object.values({ foo: 'bar', baz: [1, 2, 3] })
  t.deepEqual(parsed.length, 2)
})

test(`values returns an array containing the values that correspond to all of a given object's own enumerable string properties`, t => {
  const parsed = object.values({})
  t.deepEqual(parsed.length, 0)
})

test(`keys returns an array containing the names of all of the given object's own enumerable string properties`, t => {
  const parsed = object.keys({ foo: 'bar', baz: [1, 2, 3] })
  t.deepEqual(parsed.length, 2)
})

test(`keys returns an array containing the names of all of the given object's own enumerable string properties`, t => {
  const parsed = object.keys({})
  t.deepEqual(parsed.length, 0)
})

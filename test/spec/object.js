import test from 'ava'
import { object } from '../..'

test('rename should rename the keys in given object', t => {
  const object1 = { created_at: '2000-01-01' }
  const keys = { created_at: 'createdAt' }
  const result = { createdAt: '2000-01-01' }
  t.deepEqual(object.rename(object1, keys), result)
})

test('rename should ignore object`s properties without match', t => {
  const object1 = { created_at: '2000-01-01', title: 'Hello world!' }
  const keys = { created_at: 'createdAt' }
  const result = { createdAt: '2000-01-01', title: 'Hello world!' }
  t.deepEqual(object.rename(object1, keys), result)
})

test('rename should ignore key`s properties without match', t => {
  const object1 = { created_at: '2000-01-01', title: 'Hello world!' }
  const keys = { created_at: 'createdAt', updated_at: 'updatedAt' }
  const result = { createdAt: '2000-01-01', title: 'Hello world!' }
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

test('values returns an array containing the values that correspond to all of a given object\'s own enumerable string properties', t => {
  var parsed = object.values({ foo: 'bar', baz: [1, 2, 3] })
  t.deepEqual(parsed.length, 2)

  parsed = object.values({})
  t.deepEqual(parsed.length, 0)
})

test('keys returns an array containing the names of all of the given object\'s own enumerable string properties', t => {
  var parsed = object.keys({ foo: 'bar', baz: [1, 2, 3] })
  t.deepEqual(parsed.length, 2)

  parsed = object.keys({})
  t.deepEqual(parsed.length, 0)
})

test('merge merges properties of source into the destination object', t => {
  const destination = { a: 1, b: 1, c: 1 }
  const source = { b: 2, c: 2 }
  const parsed = object.merge(destination, source)
  t.deepEqual(parsed, { a: 1, b: 2, c: 2 })
})

test('merge merges properties of sources into the destination object', t => {
  const destination = { a: 1, b: 1, c: 1 }
  const source1 = { b: 2, c: 2 }
  const source2 = { a: 3, c: 3 }
  const source3 = { d: 4 }
  const parsed = object.merge(destination, source1, source2, source3)
  t.deepEqual(parsed, { a: 3, b: 2, c: 3, d: 4 })
})

test('clone creates shallow copy of object', t => {
  const source = { a: 1, b: { foo: 'bar' } }
  const parsed = object.clone(source)
  source.b.foo = 'baz'
  t.deepEqual(parsed, source)
})

test('deepclone creates deep copy of object', t => {
  const source = { a: 1, b: { foo: 'bar' } }
  const parsed = object.deepclone(source)
  source.b.foo = 'baz'
  t.deepEqual(parsed, { a: 1, b: { foo: 'bar' } })
  t.notDeepEqual(parsed, source)
})

const test = require("node:test")
const assert = require("node:assert")
const { object } = require("../..")

test("rename should rename the keys in given object", () => {
  const object1 = { created_at: "2000-01-01" }
  const keys = { created_at: "createdAt" }
  const result = { createdAt: "2000-01-01" }
  assert.deepEqual(object.rename(object1, keys), result)
})

test("rename should ignore object`s properties without match", () => {
  const object1 = { created_at: "2000-01-01", title: "Hello world!" }
  const keys = { created_at: "createdAt" }
  const result = { createdAt: "2000-01-01", title: "Hello world!" }
  assert.deepEqual(object.rename(object1, keys), result)
})

test("rename should ignore key`s properties without match", () => {
  const object1 = { created_at: "2000-01-01", title: "Hello world!" }
  const keys = { created_at: "createdAt", updated_at: "updatedAt" }
  const result = { createdAt: "2000-01-01", title: "Hello world!" }
  assert.deepEqual(object.rename(object1, keys), result)
})

test("camelcase should convert object keys to camelCase", () => {
  const object1 = { created_at: "2000-01-01" }
  const result = { createdAt: "2000-01-01" }
  assert.deepEqual(object.camelcase(object1), result)
})

test("camelcase should convert nested object keys to camelCase", () => {
  const object1 = {
    created_at: "2000-01-01",
    nested_object: { nested_key: "value" },
  }
  const result = {
    createdAt: "2000-01-01",
    nestedObject: { nestedKey: "value" },
  }
  assert.deepEqual(object.camelcase(object1), result)
})

test("camelcase should convert array of objects keys to camelCase", () => {
  const object1 = {
    created_at: "2000-01-01",
    array: [{ nested_key: "value" }],
  }
  const result = {
    createdAt: "2000-01-01",
    array: [{ nestedKey: "value" }],
  }
  assert.deepEqual(object.camelcase(object1), result)
})

test("camelcase should convert array of nested objects keys to camelCase", () => {
  const object1 = {
    created_at: "2000-01-01",
    array: [{ nested_object: { nested_key: "value" } }],
  }
  const result = {
    createdAt: "2000-01-01",
    array: [{ nestedObject: { nestedKey: "value" } }],
  }
  assert.deepEqual(object.camelcase(object1), result)
})

test("camelcase should convert array of nested objects keys to camelCase", () => {
  const object1 = {
    created_at: "2000-01-01",
    array: [{ nested_object: { nested_array: [{ nested_key: "value" }] } }],
  }
  const result = {
    createdAt: "2000-01-01",
    array: [{ nestedObject: { nestedArray: [{ nestedKey: "value" }] } }],
  }
  assert.deepEqual(object.camelcase(object1), result)
})

test("dig returns the value of a field", () => {
  assert.deepEqual(object.dig({ foo: "bar" }, "foo"), "bar")
})

test("dig returns the value of a nested field", () => {
  assert.deepEqual(object.dig({ foo: { bar: "baz" } }, "foo.bar"), "baz")
})

test("dig returns null if the key does not match", () => {
  assert.deepEqual(object.dig({ foo: "bar" }, "baz"), null)
})

test("pat overrides a value of a field", () => {
  assert.deepEqual(object.pat({ foo: "bar" }, "foo", "baz"), {
    foo: "baz",
  })
})

test("pat overrides deeply nested fields", () => {
  assert.deepEqual(object.pat({}, "baz.bar", "foo"), {
    baz: { bar: "foo" },
  })
})

test("values returns an array containing the values that correspond to all of a given object's own enumerable string properties", () => {
  const parsed = object.values({ foo: "bar", baz: [1, 2, 3] })
  assert.deepEqual(parsed.length, 2)
})

test("values returns an empty array when object doesn't have own enumerable string properties", () => {
  const parsed = object.values({})
  assert.deepEqual(parsed.length, 0)
})

test("keys returns an array containing the names of all of the given object's own enumerable string properties", () => {
  const parsed = object.keys({ foo: "bar", baz: [1, 2, 3] })
  assert.deepEqual(parsed.length, 2)
})

test("keys returns an empty array when object doesn't have own enumerable string properties", () => {
  const parsed = object.keys({})
  assert.deepEqual(parsed.length, 0)
})

test("merge merges properties of source into the destination object", () => {
  const destination = { a: 1, b: 1, c: 1 }
  const source = { b: 2, c: 2 }
  const parsed = object.merge(destination, source)
  assert.deepEqual(parsed, { a: 1, b: 2, c: 2 })
})

test("merge merges properties of sources into the destination object", () => {
  const destination = { a: 1, b: 1, c: 1 }
  const source1 = { b: 2, c: 2 }
  const source2 = { a: 3, c: 3 }
  const source3 = { d: 4 }
  const parsed = object.merge(destination, source1, source2, source3)
  assert.deepEqual(parsed, { a: 3, b: 2, c: 3, d: 4 })
})

test("clone creates shallow copy of object", () => {
  const source = { a: 1, b: { foo: "bar" } }
  const parsed = object.clone(source)
  source.b.foo = "baz"
  assert.deepEqual(parsed, source)
})

test("deepclone creates deep copy of object", () => {
  const source = { a: 1, b: { foo: "bar" } }
  const parsed = object.deepclone(source)
  source.b.foo = "baz"
  assert.deepEqual(parsed, { a: 1, b: { foo: "bar" } })
  assert.notDeepEqual(parsed, source)

  assert.deepEqual(object.deepclone(), {})
})

test("recsort sorts keys of objects recursively", () => {
  const source = { a: { c: 3, b: 2 } }
  const result = object.recsort(source)
  const actual = Object.keys(source.a)
    .map((key) => key)
    .join()
  const expected = Object.keys(result.a)
    .map((key) => key)
    .join()
  assert.notDeepEqual(actual, expected)
  assert.deepEqual(actual, "c,b")
  assert.deepEqual(expected, "b,c")
})

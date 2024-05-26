const test = require("node:test")
const assert = require("node:assert")
const { json } = require("../..")

test("prettify should format JSON string", () => {
  const parsed = json.prettify('{"hello":"world"}')
  assert.deepEqual(parsed, '{\n  "hello": "world"\n}')
})

test("prettify should format objects", () => {
  const parsed = json.prettify({ hello: "world" })
  assert.deepEqual(parsed, '{\n  "hello": "world"\n}')
})

const test = require("ava")
const { json } = require("../..")

test("prettify should format JSON string", (assert) => {
  const parsed = json.prettify('{"hello":"world"}')
  assert.deepEqual(parsed, '{\n  "hello": "world"\n}')
})

test("prettify should format objects", (assert) => {
  const parsed = json.prettify({ hello: "world" })
  assert.deepEqual(parsed, '{\n  "hello": "world"\n}')
})

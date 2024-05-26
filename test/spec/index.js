const test = require("ava")
const index = require("../..")

test("methods should be unique", (assert) => {
  const methods = []
  for (const key in index) {
    for (const method in index[key]) {
      methods.push(method)
    }
  }
  assert.truthy(methods.length === new Set(methods).size)
})

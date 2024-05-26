const test = require("node:test")
const assert = require("node:assert")
const index = require("../..")

test("methods should be unique", () => {
  const methods = []
  for (const key in index) {
    for (const method in index[key]) {
      methods.push(method)
    }
  }
  assert(methods.length === new Set(methods).size)
})

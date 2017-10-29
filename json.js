/**
 *
 * prettify
 *
 * prettifies json string
 *
 * example:
 *
 * input
 * '{ "hello": "world" }'
 *
 * output
 * '{\n    "hello": "world"\n}'
 *
 */

export function prettify (string) {
  return JSON.stringify(JSON.parse(string), null, 4)
}

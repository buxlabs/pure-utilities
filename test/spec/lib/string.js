import test from 'ava'
import { string } from '../../../build'

test('removeWhitespace should remove whitespace characters', t => {
  var parsed = string.removeWhitespace('\t1234 5678\n')
  t.deepEqual(parsed, '12345678')
})

test('leftPad should return the same string if no padding was provided', t => {
  var parsed = string.leftPad('hello')
  t.deepEqual(parsed, 'hello')
})

test('leftPad should pad the string with given characters', t => {
  var parsed = string.leftPad('hello world', '** ')
  t.deepEqual(parsed, '** hello world')
})

test('leftPad should pad given number with given characters', t => {
  var parsed = string.leftPad(42, '---- ')
  t.deepEqual(parsed, '---- 42')
})

test("leftPad shouldn't add padding to empty lines", t => {
  var parsed = string.leftPad('hello\n\nworld', '* ')
  t.deepEqual(parsed, '* hello\n\n* world')
})

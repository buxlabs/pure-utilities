import test from 'ava'
import { math } from '../../build/index.umd'

test('abs returns the absolute value of a number', t => {
  var parsed = math.abs(-1)
  t.deepEqual(parsed, 1)
})

test('trunc returns the integer part of a number (x)', t => {
  var parsed = math.trunc(42.84)
  t.deepEqual(parsed, 42)
})

test('tanh returns the hyperbolic tangent of a number', t => {
  var parsed = math.tanh(0)
  t.deepEqual(parsed, 0)
})

test('tan returns the tangent of an angle', t => {
  var parsed = math.tan(1)
  t.deepEqual(parsed, 1.5574077246549023)
})

test('sqrt returns the square root of x', t => {
  var parsed = math.sqrt(4)
  t.deepEqual(parsed, 2)
})

test('sinh returns the hyperbolic sine of x', t => {
  var parsed = math.sinh(1)
  t.deepEqual(parsed, 1.1752011936438014)
})

test('sin returns the hyperbolic sine of x', t => {
  var parsed = math.sin(0)
  t.deepEqual(parsed, 0)
})

test('round rounds x to the nearest integer', t => {
  var parsed = math.round(20.49)
  t.deepEqual(parsed, 20)
})

test('pow returns the value of x to the power of y', t => {
  var parsed = math.pow(2, 5)
  t.deepEqual(parsed, 32)
})

test('min returns the number with the lowest value', t => {
  var parsed = math.min([2, 5, 1])
  t.deepEqual(parsed, 1)
})

test('max returns the number with the highest value', t => {
  var parsed = math.max([2, 5, 1])
  t.deepEqual(parsed, 5)
})

test('log returns the natural logarithm (base E) of x', t => {
  var parsed = math.log(1)
  t.deepEqual(parsed, 0)
})

test('floor returns x, rounded downwards to the nearest integer', t => {
  var parsed = math.floor(300.91)
  t.deepEqual(parsed, 300)
})

test('exp returns the value of Ex', t => {
  var parsed = math.exp(0)
  t.deepEqual(parsed, 1)
})

test('cosh returns the hyperbolic cosine of x', t => {
  var parsed = math.cosh(0)
  t.deepEqual(parsed, 1)
})

test('cos returns the cosine of x (x is in radians)', t => {
  var parsed = math.cos(0)
  t.deepEqual(parsed, 1)
})

test('ceil returns x, rounded upwards to the nearest integer', t => {
  var parsed = math.ceil(100.2)
  t.deepEqual(parsed, 101)
})

test('cbrt returns the cubic root of x', t => {
  var parsed = math.cbrt(1)
  t.deepEqual(parsed, 1)
})

test('atanh returns the hyperbolic arctangent of x', t => {
  var parsed = math.atanh(2)
  t.deepEqual(parsed, NaN)
})

test('atan2 returns the arctangent of the quotient of its arguments', t => {
  var parsed = math.atan2(90, 15)
  t.deepEqual(parsed, 1.4056476493802699)
})

test('atan returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians', t => {
  var parsed = math.atan(0)
  t.deepEqual(parsed, 0)
})

test('asinh returns the hyperbolic arcsine of x', t => {
  var parsed = math.asinh(0)
  t.deepEqual(parsed, 0)
})

test('asin returns the arcsine of x, in radians', t => {
  var parsed = math.asin(2)
  t.deepEqual(parsed, NaN)
})

test('acosh returns the hyperbolic arccosine of x', t => {
  var parsed = math.acosh(1)
  t.deepEqual(parsed, 0)
})

test('acos returns the arccosine of x, in radians', t => {
  var parsed = math.acos(1)
  t.deepEqual(parsed, 0)
})
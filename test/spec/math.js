import test from 'ava'
import { math } from '../..'

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

test('square returns square of x', t => {
  var parsed = math.square(5)
  t.deepEqual(parsed, 25)
})

test('factorial returns factorial of x', t => {
  var parsed = math.factorial(5)
  t.deepEqual(parsed, 120)
})

test('add adds numbers', t => {
  var parsed = math.add(5, 10)
  t.deepEqual(parsed, 15)
})

test('subtract subtracts numbers', t => {
  var parsed = math.subtract(5, 10)
  t.deepEqual(parsed, -5)
})

test('multiply multiplies numbers', t => {
  var parsed = math.multiply(5, 10)
  t.deepEqual(parsed, 50)
})

test('divide divides numbers', t => {
  var parsed = math.divide(10, 5)
  t.deepEqual(parsed, 2)
})

test('modulo returns modulo of x', t => {
  var parsed = math.modulo(4, 2)
  t.deepEqual(parsed, 0)
})

test('increment increments number', t => {
  var parsed = math.increment(4)
  t.deepEqual(parsed, 5)
})

test('decrement decrements number', t => {
  var parsed = math.decrement(4)
  t.deepEqual(parsed, 3)
})

test('int parses string and returns integer', t => {
  var parsed = math.int('4.25')
  t.deepEqual(parsed, 4)
})

test('float parses string and returns float', t => {
  var parsed = math.float('4.25')
  t.deepEqual(parsed, 4.25)
})

test('clamp clamps value inside range', t => {
  t.deepEqual(math.clamp(10, 20, 30), 20)
})

test('clamp clamps value inside range', t => {
  t.deepEqual(math.clamp(20, 20, 30), 20)
})

test('clamp clamps value inside range', t => {
  t.deepEqual(math.clamp(25, 20, 30), 25)
})

test('clamp clamps value inside range', t => {
  t.deepEqual(math.clamp(30, 20, 30), 30)
})

test('clamp clamps value inside range', t => {
  t.deepEqual(math.clamp(31, 20, 30), 30)
})

test('percentage converts number to percent format', t => {
  t.deepEqual(math.percentage(0.25), '25%')
})

test('percentage converts number to percent format', t => {
  t.deepEqual(math.percentage(1), '100%')
})

test('fixed formats a number using fixed-point notation', t => {
  t.deepEqual(math.fixed(25.32), '25')
})

test('fixed formats a number using fixed-point notation', t => {
  t.deepEqual(math.fixed(25.32, 1), '25.3')
})

test('monetize formats a number to currency format', t => {
  const parsed = math.monetize(100)
  t.deepEqual(parsed, '100,00 zł')
})

test('monetize formats a number to currency format', t => {
  const parsed = math.monetize(100.50, { symbol: '€', separator: '.' })
  t.deepEqual(parsed, '100.50 €')
})

test('monetize formats a number to currency format', t => {
  const parsed = math.monetize(1000)
  t.deepEqual(parsed, '1 000,00 zł')
})

test('monetize formats a number to currency format', t => {
  const parsed = math.monetize(1000000)
  t.deepEqual(parsed, '1 000 000,00 zł')
})

test('monetize formats a number to currency format', t => {
  const parsed = math.monetize(531722.07)
  t.deepEqual(parsed, '531 722,07 zł')
})

test('monetize formats a number to currency format', t => {
  const parsed = math.monetize(100230.1)
  t.deepEqual(parsed, '100 230,10 zł')
})

test('monetize formats a number to currency format', t => {
  const parsed = math.monetize(100, {
    symbol: '$',
    space: false,
    ending: false,
    separator: '.'
  })
  t.deepEqual(parsed, '$100.00')
})

test('monetize formats a number to currency format', t => {
  const parsed = math.monetize(100.50, {
    digits: 1,
    symbol: '€',
    separator: '.',
    space: false
  })
  t.deepEqual(parsed, '100.5€')
})

test('monetize formats a number to currency format', t => {
  const parsed = math.monetize(100.50, {
    digits: 1,
    symbol: '€',
    separator: '.',
    space: true,
    ending: false
  })
  t.deepEqual(parsed, '€ 100.5')
})

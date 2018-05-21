function abs(number) {
  return Math.abs(number)
}

function acos(number) {
  return Math.acos(number)
}

function acosh(number) {
  return Math.acosh(number)
}

function asin(number) {
  return Math.asin(number)
}

function asinh(number) {
  return Math.asinh(number)
}

function atan(number) {
  return Math.atan(number)
}

function atan2(number1, number2) {
  return Math.atan2(number1, number2)
}

function atanh(number) {
  return Math.atanh(number)
}

function cbrt(number) {
  return Math.cbrt(number)
}

function ceil(number) {
  return Math.ceil(number)
}

function cos(number) {
  return Math.cos(number)
}

function cosh(number) {
  return Math.cosh(number)
}

function exp(number) {
  return Math.exp(number)
}

function floor(number) {
  return Math.floor(number)
}

function log(number) {
  return Math.log(number)
}

function max(array) {
  return Math.max.apply(this, array)
}

function min(array) {
  return Math.min.apply(this, array)
}

function pow(number1, number2) {
  return Math.pow(number1, number2)
}

function random() {
  return Math.random()
}

function round(number) {
  return Math.round(number)
}

function sin(number) {
  return Math.sin(number)
}

function sinh(number) {
  return Math.sinh(number)
}

function sqrt(number) {
  return Math.sqrt(number)
}

function tan(number) {
  return Math.tan(number)
}

function tanh(number) {
  return Math.tanh(number)
}

function trunc(number) {
  return Math.trunc(number)
}

function square(number) {
  return number * number
}

function factorial(number) {
  return number < 2 ? 1 : number * factorial(number - 1)
}

function add(number1, number2) {
  return number1 + number2
}

function subtract(number1, number2) {
  return number1 - number2
}

function multiply(number1, number2) {
  return number1 * number2
}

function divide(number1, number2) {
  return number1 / number2
}

function modulo(number1, number2) {
  return number1 % number2
}

function increment(number) {
  return ++number
}

function decrement(number) {
  return --number
}

function int(string) {
  return parseInt(string)
}

function float(string) {
  return parseFloat(string)
}

function clamp(number, min, max) {
  if (number <= min) return min
  if (number >= max) return max
  return number
}

module.exports = {
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atan2,
  atanh,
  cbrt,
  ceil,
  cos,
  cosh,
  exp,
  floor,
  log,
  max,
  min,
  pow,
  random,
  round,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  trunc,
  square,
  factorial,
  add,
  subtract,
  multiply,
  divide,
  modulo,
  increment,
  decrement,
  int,
  float,
  clamp
}

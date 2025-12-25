const test = require("node:test")
const assert = require("node:assert")
const { math } = require("../..")

test("distance returns the distance between two points in space", () => {
  const number = math.distance([1, 2, 3], [1, 2, 4])
  assert.deepEqual(number, 1)
})

test("distance returns null for arrays with different lengths", () => {
  const result = math.distance([1, 2], [1, 2, 3])
  assert.deepEqual(result, null)
})

test("random returns a random number", () => {
  const result = math.random()
  assert.ok(typeof result === "number")
  assert.ok(result >= 0 && result < 1)
})

test("kmeans finds centoids of clusters", () => {
  const data = [
    [1, 2],
    [2, 3],
    [2, 5],
    [1, 6],
    [4, 6],
    [3, 5],
    [2, 4],
    [4, 3],
    [5, 2],
    [6, 9],
    [4, 4],
    [3, 3],
    [8, 6],
    [7, 5],
    [9, 6],
    [9, 7],
    [8, 8],
    [7, 9],
    [11, 3],
    [11, 2],
    [9, 9],
    [7, 8],
    [6, 8],
    [12, 2],
    [14, 3],
    [15, 1],
    [15, 4],
    [14, 2],
    [13, 1],
    [16, 4],
  ]
  const { centroids } = math.kmeans(3, data)
  assert.deepEqual(centroids.length, 3)
  assert.deepEqual(centroids[0].length, 2)
  assert.deepEqual(centroids[1].length, 2)
  assert.deepEqual(centroids[2].length, 2)
})

test("abs returns the absolute value of a number", () => {
  const parsed = math.abs(-1)
  assert.deepEqual(parsed, 1)
})

test("trunc returns the integer part of a number (x)", () => {
  const parsed = math.trunc(42.84)
  assert.deepEqual(parsed, 42)
})

test("tanh returns the hyperbolic tangent of a number", () => {
  const parsed = math.tanh(0)
  assert.deepEqual(parsed, 0)
})

test("tan returns the tangent of an angle", () => {
  const parsed = math.tan(1)
  assert.deepEqual(parsed, 1.5574077246549023)
})

test("sqrt returns the square root of x", () => {
  const parsed = math.sqrt(4)
  assert.deepEqual(parsed, 2)
})

test("sinh returns the hyperbolic sine of x", () => {
  const parsed = math.sinh(1)
  assert.deepEqual(parsed, 1.1752011936438014)
})

test("sin returns the hyperbolic sine of x", () => {
  const parsed = math.sin(0)
  assert.deepEqual(parsed, 0)
})

test("round rounds x to the nearest integer", () => {
  const parsed = math.round(20.49)
  assert.deepEqual(parsed, 20)
})

test("pow returns the value of x to the power of y", () => {
  const parsed = math.pow(2, 5)
  assert.deepEqual(parsed, 32)
})

test("min returns the number with the lowest value", () => {
  const parsed = math.min([2, 5, 1])
  assert.deepEqual(parsed, 1)
})

test("max returns the number with the highest value", () => {
  const parsed = math.max([2, 5, 1])
  assert.deepEqual(parsed, 5)
})

test("log returns the natural logarithm (base E) of x", () => {
  const parsed = math.log(1)
  assert.deepEqual(parsed, 0)
})

test("floor returns x, rounded downwards to the nearest integer", () => {
  const parsed = math.floor(300.91)
  assert.deepEqual(parsed, 300)
})

test("exp returns the value of Ex", () => {
  const parsed = math.exp(0)
  assert.deepEqual(parsed, 1)
})

test("cosh returns the hyperbolic cosine of x", () => {
  const parsed = math.cosh(0)
  assert.deepEqual(parsed, 1)
})

test("cos returns the cosine of x (x is in radians)", () => {
  const parsed = math.cos(0)
  assert.deepEqual(parsed, 1)
})

test("ceil returns x, rounded upwards to the nearest integer", () => {
  const parsed = math.ceil(100.2)
  assert.deepEqual(parsed, 101)
})

test("cbrt returns the cubic root of x", () => {
  const parsed = math.cbrt(1)
  assert.deepEqual(parsed, 1)
})

test("atanh returns the hyperbolic arctangent of x", () => {
  const parsed = math.atanh(2)
  assert.deepEqual(parsed, NaN)
})

test("atan2 returns the arctangent of the quotient of its arguments", () => {
  const parsed = math.atan2(90, 15)
  assert.deepEqual(parsed, 1.4056476493802699)
})

test("atan returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians", () => {
  const parsed = math.atan(0)
  assert.deepEqual(parsed, 0)
})

test("asinh returns the hyperbolic arcsine of x", () => {
  const parsed = math.asinh(0)
  assert.deepEqual(parsed, 0)
})

test("asin returns the arcsine of x, in radians", () => {
  const parsed = math.asin(2)
  assert.deepEqual(parsed, NaN)
})

test("acosh returns the hyperbolic arccosine of x", () => {
  const parsed = math.acosh(1)
  assert.deepEqual(parsed, 0)
})

test("acos returns the arccosine of x, in radians", () => {
  const parsed = math.acos(1)
  assert.deepEqual(parsed, 0)
})

test("square returns square of x", () => {
  const parsed = math.square(5)
  assert.deepEqual(parsed, 25)
})

test("factorial returns factorial of x", () => {
  const parsed = math.factorial(5)
  assert.deepEqual(parsed, 120)
})

test("add adds numbers", () => {
  const parsed = math.add(5, 10)
  assert.deepEqual(parsed, 15)
})

test("subtract subtracts numbers", () => {
  const parsed = math.subtract(5, 10)
  assert.deepEqual(parsed, -5)
})

test("multiply multiplies numbers", () => {
  const parsed = math.multiply(5, 10)
  assert.deepEqual(parsed, 50)
})

test("divide divides numbers", () => {
  const parsed = math.divide(10, 5)
  assert.deepEqual(parsed, 2)
})

test("modulo returns modulo of x", () => {
  const parsed = math.modulo(4, 2)
  assert.deepEqual(parsed, 0)
})

test("increment increments number", () => {
  const parsed = math.increment(4)
  assert.deepEqual(parsed, 5)
})

test("decrement decrements number", () => {
  const parsed = math.decrement(4)
  assert.deepEqual(parsed, 3)
})

test("int parses string and returns integer", () => {
  const parsed = math.int("4.25")
  assert.deepEqual(parsed, 4)
})

test("float parses string and returns float (t1)", () => {
  const parsed = math.float("4.25")
  assert.deepEqual(parsed, 4.25)
})

test("float works for numbers", () => {
  const parsed = math.float(1)
  assert.deepEqual(parsed, 1.0)
})

test("float parses string and returns float (t2)", () => {
  const parsed = math.float("4,25")
  assert.deepEqual(parsed, 4.25)
})

test("float parses string and returns float (t3)", () => {
  const parsed = math.float("100 000,01")
  assert.deepEqual(parsed, 100000.01)
})

test("float parses string and returns float (t4)", () => {
  const parsed = math.float("100000.01")
  assert.deepEqual(parsed, 100000.01)
})

test("float parses string and returns float (t5)", () => {
  const parsed = math.float("100,000.01")
  assert.deepEqual(parsed, 100000.01)
})

test("clamp clamps value inside range (t1)", () => {
  assert.deepEqual(math.clamp(10, 20, 30), 20)
})

test("clamp clamps value inside range (t2)", () => {
  assert.deepEqual(math.clamp(20, 20, 30), 20)
})

test("clamp clamps value inside range (t3)", () => {
  assert.deepEqual(math.clamp(25, 20, 30), 25)
})

test("clamp clamps value inside range (t4)", () => {
  assert.deepEqual(math.clamp(30, 20, 30), 30)
})

test("clamp clamps value inside range (t5)", () => {
  assert.deepEqual(math.clamp(31, 20, 30), 30)
})

test("percentage converts number to percent format (t1)", () => {
  assert.deepEqual(math.percentage(0.25), "25%")
})

test("percentage converts number to percent format (t2)", () => {
  assert.deepEqual(math.percentage(1), "100%")
})

test("fixed formats a number using fixed-point notation (t1)", () => {
  assert.deepEqual(math.fixed(25.32), "25")
})

test("fixed formats a number using fixed-point notation (t2)", () => {
  assert.deepEqual(math.fixed(25.32, 1), "25.3")
})

test("monetize formats a number to currency format (t1)", () => {
  const parsed = math.monetize(100)
  assert.deepEqual(parsed, "100,00 zł")
})

test("monetize formats a number to currency format (t2)", () => {
  const parsed = math.monetize(100.5, { symbol: "€", separator: "." })
  assert.deepEqual(parsed, "100.50 €")
})

test("monetize formats a number to currency format (t3)", () => {
  const parsed = math.monetize(1000)
  assert.deepEqual(parsed, "1 000,00 zł")
})

test("monetize formats a number to currency format (t4)", () => {
  const parsed = math.monetize(1000000)
  assert.deepEqual(parsed, "1 000 000,00 zł")
})

test("monetize formats a number to currency format (t5)", () => {
  const parsed = math.monetize(531722.07)
  assert.deepEqual(parsed, "531 722,07 zł")
})

test("monetize formats a number to currency format (t6)", () => {
  const parsed = math.monetize(100230.1)
  assert.deepEqual(parsed, "100 230,10 zł")
})

test("monetize formats a number to currency format (t7)", () => {
  const parsed = math.monetize(100, {
    symbol: "$",
    space: false,
    ending: false,
    separator: ".",
  })
  assert.deepEqual(parsed, "$100.00")
})

test("monetize formats a number to currency format (t8)", () => {
  const parsed = math.monetize(100.5, {
    digits: 1,
    symbol: "€",
    separator: ".",
    space: false,
  })
  assert.deepEqual(parsed, "100.5€")
})

test("monetize formats a number to currency format (t9)", () => {
  const parsed = math.monetize(100.5, {
    digits: 1,
    symbol: "€",
    separator: ".",
    space: true,
    ending: false,
  })
  assert.deepEqual(parsed, "€ 100.5")
})

test("cube returns the third power of the number (t1)", () => {
  const parsed = math.cube(5)
  assert.deepEqual(parsed, 125)
})

test("cube returns the third power of the number (t2)", () => {
  const parsed = math.cube(-4)
  assert.deepEqual(parsed, -64)
})

test("inches converts feest to inches", () => {
  const parsed = math.inches(1)
  assert.deepEqual(parsed, 12)
})

test("inches converts feets to inches (t1)", () => {
  const parsed = math.inches(0.01)
  assert.deepEqual(parsed, 0.12)
})

test("inches converts feets to inches (t2)", () => {
  const parsed = math.inches(0.01, 2, false)
  assert.deepEqual(parsed, "0.12″")
})

test("inches converts inches to feets", () => {
  const parsed = math.feet(1)
  assert.deepEqual(parsed, 0.08)
})

test("feet converts inches to feets (t1)", () => {
  const parsed = math.feet(1, 5)
  assert.deepEqual(parsed, 0.08333)
})

test("feet converts inches to feets (t2)", () => {
  const parsed = math.feet(60)
  assert.deepEqual(parsed, 5)
})

test("feet converts inches to feets (t3)", () => {
  const parsed = math.feet(13.25)
  assert.deepEqual(parsed, 1.1)
})

test("feet converts f to feets", () => {
  const parsed = math.feet(13.25, 2, false)
  assert.deepEqual(parsed, "1.1′")
})

test("degrees converts radians to degrees (t1)", () => {
  const parsed = math.degrees(1)
  assert.deepEqual(parsed, 57.3)
})

test("degrees converts radians to degrees (t2)", () => {
  const parsed = math.degrees(5)
  assert.deepEqual(parsed, 286.48)
})

test("radians converts degrees to radians (t1)", () => {
  const parsed = math.radians(12)
  assert.deepEqual(parsed, 0.21)
})

test("radians converts degrees to radians (t2)", () => {
  const parsed = math.radians(-1, 10)
  assert.deepEqual(parsed, -0.0174532925)
})

test("mean computes mean of the values in array", () => {
  const parsed = math.mean([1, 2, 3, 4])
  assert.deepEqual(parsed, 2.5)
})

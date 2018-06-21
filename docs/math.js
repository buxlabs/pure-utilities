const math = {
  abs: `Takes one argument: number
        Returns the absolute value of the number.`,

  acos: `Takes one argument: number
         Returns the arccosine of the number, in radians.`,

  acosh: `Takes one argument: number
          Returns the hyperbolic arccosine of the number.`,

  asin: `Takes one argument: number
         Returns the arcsine of the number, in radians.`,

  asinh: `Takes one argument: number
          Returns the hyperbolic arcsine of the number.`,

  atan: `Takes one argument: number
         Returns the hyperbolic arctangent of the number.`,

  atan2: `Takes two arguments: number1, number2
          Returns the arctangent of the quotient of its arguments.`,

  atanh: `Takes one argument: number
          Returns the hyperbolic arctangent of the number.`,

  cbrt: `Takes one argument: number
         Returns the cubic root of the number.`,

  ceil: `Takes one argument: number
         Returns the number, rounded upwards to the nearest integer.`,

  cos: `Takes one argument: number
        Returns the cosine of the number (number is in radians).`,

  cosh: `Takes one argument: number
         Returns the hyperbolic cosine of the number.`,

  exp: `Takes one argument: number
        Returns the value of E^number, where E is Euler's number.`,

  floor: `Takes one argument: number
          Returns the number, rounded downwards to the nearest integer.`,

  log: `Takes one argument: number
        Returns the natural logarithm (base E) of the number.`,

  max: `Takes one argument: number
        Returns the number with the highest value.`,

  min: `Takes one argument: number
        Returns the number with the lowest value.`,

  pow: `Takes two arguments: number1, number2
        Returns the value of number1 to the power of number2.`,

  random: `Returns a floating-point, pseudo-random number in the range 0–1.`,

  round: `Takes one argument: number
          Rounds the number, to the nearest integer.`,

  sin: `Takes one argument: number
        Returns the sine of the number.`,

  sinh: `Takes one argument: number
         Returns the hyperbolic sine of the number.`,

  tan: `Takes one argument: number
        Returns the tangent of the number.`,

  tanh: `Takes one argument: number
        Returns the hyperbolic tangent of the number.`,

  sqrt: `Takes one argument: number
         Returns the square root of the number.`,

  trunc: `Takes one argument: number
          Returns the integer part of the number.`,

  square: `Takes one argument: number
           Returns square of the number.`,

  radians : `Takes two arguments: number, precision
             Converts degrees to radians and rounds received result to the passed precision.
             By default precision equals 2.`,

  degrees : `Takes two arguments: number, precision
             Converts radians to degrees and rounds received result to the passed precision.
             By default precision equals 2.`,

  factorial: `Takes one argument: number
              Returns factorial of the number.`,

  add: `Takes two arguments: number1, number2
        Adds number1 to number2.`,

  subtract: `Takes two arguments: number1, number2
             Subtracts number2 from number1.`,

  multiply: `Takes two arguments: number1, number2
             Multiplies number1 by number2.`,

  divide: `Takes two arguments: number1, number2
           Dividies number1 by number2.`,

  modulo: `Takes two arguments: number1, number2
           Divides number1 by number2, and returns the remainder.`,

  increment: `Takes one argument: number
              Increments the number`,

  decrement: `Takes one argument: number
              Decrements the number`,

  int: `Takes one argument: number
        Parses the number to the integer.`,

  float: `Takes one argument: number
          Parses the number to the float.`,

  clamp: `Takes three arguments: number, min, max
          Returns the highest possible value from range min to max included number.`,

  percentage: `Takes one argument: number
               Converts the number to percentage format.`,

  fixed: `Takes two arguments: number, digit
          Formats the number using fixed-point notation.
          By default digit equals 0.`,

  monetize: `Takes two arguments: number, options
             Formats the number to currency format.
             options is an object that accepts the following parameters:
              - digits: Number of digits after comma. By default equals 2.
              - separator: Separator separating the decimal part. By default equals ','.
              - symbol: The symbol of currency. By default equals 'zł'.
              - ending: Boolean flag, that specifies position of currency symbol. By default set to true.
              - space: Boolean flag, that specifies if space should exist before currency symbol. By default set to true.
              - hyphen: The symbol between groups of integer part. By default set to empty space.
              - size: The number of integers, that should be grouped. By default set to 3.`,

  cube: `Takes one argument: number
         Returns the third power of the number.`,

  feet: `Takes three arguments: number, precision, decimal
         Converts inches to feets.
         By default precision equals 2.
         When decimal flag is set to false, returns result with prim (′) symbol.`,

  inches: `Takes three arguments: number, precision, decimal
           Converts feets to inches.
           By default precision equals 2.
           When decimal flag is set to false, returns result with bis (″) symbol.`,

}
module.exports = math

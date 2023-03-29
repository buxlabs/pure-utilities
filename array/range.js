function range(number1, number2) {
  const result = []
  for (let i = number1; i <= number2; i++) {
    result.push(i)
  }
  return result
}

module.exports = range

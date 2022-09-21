function mean (numbers) {
  return numbers.reduce((result, value) => result + value, 0) / numbers.length
}

module.exports = mean

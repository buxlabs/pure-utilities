function distance (a, b) {
  if (a.length !== b.length) { return null }

  let sum = 0

  for (let i = 0, ilen = a.length; i < ilen; i++) {
    const diff = b[i] - a[i]
    sum += diff * diff
  }

  return Math.sqrt(sum)
}

module.exports = distance

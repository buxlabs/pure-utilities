function unique (array, iteratee) {
  function isEqual (value1, value2) {
    if (typeof value1 !== 'object' || typeof value2 !== 'object') {
      return value1 === value2
    }
    if (value1 === null || value2 === null) {
      return value1 === value2
    }
    const keys1 = Object.keys(value1)
    const keys2 = Object.keys(value2)
    if (keys1.length !== keys2.length) {
      return false
    }
    for (let i = 0, ilen = keys1.length; i < ilen; i++) {
      if (!isEqual(value1[keys1[i]], value2[keys1[i]])) {
        return false
      }
    }
    return true
  }

  const result = []
  const seen = []
  for (let i = 0, ilen = array.length; i < ilen; i++) {
    const value = array[i]
    const computed = iteratee ? iteratee(value) : value
    let found = false
    for (let j = 0; j < seen.length; j++) {
      if (isEqual(computed, seen[j])) {
        found = true
        break
      }
    }
    if (!found) {
      seen.push(computed)
      result.push(value)
    }
  }
  return result
}

module.exports = unique

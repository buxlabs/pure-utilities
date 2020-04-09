function occurences (collection, string) {
  if (Array.isArray(collection)) {
    collection = collection.join('')
  }

  if (string.length <= 0) {
    return collection.length + 1
  }

  let count = 0; let position = 0
  const step = string.length
  while (true) {
    position = collection.indexOf(string, position)
    if (position >= 0) {
      count += 1
      position += step
    } else {
      break
    }
  }
  return count
}

module.exports = occurences

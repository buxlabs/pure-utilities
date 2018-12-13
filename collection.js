function prepend (collection, ...args) {
  if (args.length === 0) {
    return collection
  }

  if (typeof collection === 'string') {
    return args.join('') + collection
  } else if (Array.isArray(collection)) {
    return [...args, ...collection]
  }

  throw new TypeError("[ERROR]: 'prepend' filter processes only strings or arrays")
}

function reverse (collection) {
  return Array.isArray(collection) ? collection.reverse() : [...collection].reverse().join('')
}

function size (collection) {
  const type = Object.prototype.toString.call(collection).substr(8).replace(']', '')
  if (type === 'Array' || type === 'String') return collection.length
  if (type === 'Object') return Object.keys(collection).length
  if (type === 'Map' || type === 'Set') return collection.size
}

module.exports = {
  prepend,
  reverse,
  size
}

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

module.exports = prepend

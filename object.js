function flatten (object) {
  const result = {}
  for (let key in object) {
    if (typeof object[key] === 'object') {
      const deep = this.flatten(object[key])
      for (let prefix in deep) {
        result[key + '.' + prefix] = deep[prefix]
      }
    } else {
      result[key] = object[key]
    }
  }
  return result
}

function unflatten (object) {
  const result = {}
  for (let key in object) {
    const parts = key.split('.')
    let current = result
    let property = '_'
    for (let i = 0; i < parts.length; i++) {
      current = current[property] || (current[property] = {})
      property = parts[i]
    }
    current[property] = object[key]
  }
  return result['_']
}

function rename (object, keys) {
  for (let key in keys) {
    if (keys.hasOwnProperty(key) && object.hasOwnProperty(key)) {
      object[keys[key]] = object[key]
      delete object[key]
    }
  }
  return object
}

function dig (object, string) {
  const keys = string.split('.')
  for (let i = 0, ilen = keys.length; i < ilen; i += 1) {
    const key = keys[i]
    if (key in object) {
      object = object[key]
    } else {
      return null
    }
  }
  return object
}

function pat (object, string, value) {
  const keys = string.split('.')
  const reference = object
  for (let i = 0, ilen = keys.length; i < ilen; i += 1) {
    let key = keys[i]
    if (i + 1 === ilen) {
      object[key] = value
    } else {
      object[key] = {}
      object = object[key]
    }
  }
  return reference
}

function values (object) {
  return Object.values(object)
}

function keys (object) {
  return Object.keys(object)
}

module.exports = {
  flatten,
  unflatten,
  rename,
  dig,
  pat,
  values,
  keys
}

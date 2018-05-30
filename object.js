function isObject (object) {
  var type = typeof object
  return (type === 'function' || type === 'object') && !!object
}

function isNull (object) {
  return object === null
}

function isArray (object) {
  return Array.isArray(object)
}

function isRegExp (object) {
  return Object.prototype.toString.call(object) === '[object RegExp]'
}

function isFunction (object) {
  return Object.prototype.toString.call(object) === '[object Function]'
}

function isArguments (object) {
  return Object.prototype.toString.call(object) === '[object Arguments]'
}

function isString (object) {
  return Object.prototype.toString.call(object) === '[object String]'
}

function isNumber (object) {
  return Object.prototype.toString.call(object) === '[object Number]'
}

function isDate (object) {
  return Object.prototype.toString.call(object) === '[object Date]'
}

function isUndefined (object) {
  return object === void 0
}

function extend () {
  var result = {}
  for (var i = 0, ilen = arguments.length; i < ilen; i += 1) {
    var object = arguments[i]
    Object.keys(object).forEach(function (key) {
      var value = object[key]
      if (isObject(value) &&
                !isNull(value) &&
                !isArray(value) &&
                !isRegExp(value) &&
                !isFunction(value) &&
                !isArguments(value) &&
                !isString(value) &&
                !isNumber(value) &&
                !isDate(value)
            ) {
        result[key] = extend(result[key] || {}, value)
      } else {
        result[key] = value
      }
    }, this)
  }
  return result
}


function flatten (object) {
  var key
  var prefix
  var deep
  var result = {}
  for (key in object) {
    if (typeof object[key] === 'object') {
      deep = this.flatten(object[key])
      for (prefix in deep) {
        result[key + '.' + prefix] = deep[prefix]
      }
    } else {
      result[key] = object[key]
    }
  }
  return result
}



function unflatten (object) {
  var result = {}
  var current
  var property
  var parts
  var key
  var i
  for (key in object) {
    current = result
    property = '_'
    parts = key.split('.')
    for (i = 0; i < parts.length; i++) {
      current = current[property] || (current[property] = {})
      property = parts[i]
    }
    current[property] = object[key]
  }
  return result['_']
}

function rename (object, keys) {
  var key
  for (key in keys) {
    if (keys.hasOwnProperty(key) && object.hasOwnProperty(key)) {
      object[keys[key]] = object[key]
      delete object[key]
    }
  }

  return object
}

function dig (object, string) {
  var keys = string.split('.')
  for (var i = 0, ilen = keys.length; i < ilen; i += 1) {
    var key = keys[i]
    if (key in object) {
      object = object[key]
    } else {
      return null
    }
  }
  return object
}

function pat (object, string, value) {
  var keys = string.split('.')
  var reference = object
  for (var i = 0, ilen = keys.length; i < ilen; i += 1) {
    var key = keys[i]
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
  extend,
  flatten,
  unflatten,
  rename,
  dig,
  pat,
  values,
  keys
}

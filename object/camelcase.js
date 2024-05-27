function camelcase(object) {
  function isPlainObject(obj) {
    return typeof obj === "object" && obj.constructor === Object
  }
  if (Array.isArray(object)) {
    return object.map((item) => (isPlainObject(item) ? camelcase(item) : item))
  }
  if (typeof object !== "object" || object === null) {
    return object
  }
  return Object.keys(object).reduce((result, key) => {
    const camel = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
    result[camel] = object[key]
    if (Array.isArray(object[key])) {
      result[camel] = object[key].map((item) =>
        isPlainObject(item) ? camelcase(item) : item
      )
    } else if (isPlainObject(object[key])) {
      result[camel] = camelcase(object[key])
    }
    return result
  }, {})
}

module.exports = camelcase

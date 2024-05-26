function camelcase(object) {
  if (Array.isArray(object)) {
    return object.map((item) =>
      typeof item === "object" ? camelcase(item) : item
    )
  }
  if (typeof object !== "object" || object === null) {
    return object
  }
  return Object.keys(object).reduce((result, key) => {
    const camel = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
    result[camel] = object[key]
    if (Array.isArray(object[key])) {
      result[camel] = object[key].map((item) =>
        typeof item === "object" ? camelcase(item) : item
      )
    } else if (typeof object[key] === "object") {
      result[camel] = camelcase(object[key])
    }
    return result
  }, {})
}

module.exports = camelcase

function camelcase(obj) {
  return Object.keys(obj).reduce((result, key) => {
    const camel = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
    result[camel] = obj[key]
    if (Array.isArray(obj[key])) {
      result[camel] = obj[key].map((item) =>
        typeof item === "object" ? camelcase(item) : item
      )
    } else if (typeof obj[key] === "object") {
      result[camel] = camelcase(obj[key])
    }
    return result
  }, {})
}

module.exports = camelcase

function recsort(object) {
  function isPlainObject(object) {
    return Object.prototype.toString.call(object) === "[object Object]";
  }
  if (!isPlainObject(object)) {
    return object;
  }
  const newObject = Object.create(null);
  Object.keys(object)
    .sort()
    .forEach((key) => {
      const value = object[key];
      if (isPlainObject(value)) {
        newObject[key] = recsort(value);
      } else {
        newObject[key] = value;
      }
    });
  return newObject;
}

module.exports = recsort;

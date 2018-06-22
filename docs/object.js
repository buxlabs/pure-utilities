const object = {
  flatten: `Takes one argument: object
            Flattens the object into a single-depth object.`,

  unflatten: `Takes one argument: object
              Converts properties of the object, which contain in the name dots(.), to multi-depth object.`,

  rename: `Takes two arguments: object, keys
           Changes names of the object properties to responds values from the key's object.`,

  dig: `Takes two arguments: object, string
        Returns the value of any object property, which the name has been passed in the string.`,

  pat: `Takes three arguments: object, string, value
        Overrides the value of any object property, which the name has been passed in the string with the value.`,

  values: `Takes one argument: object
           Returns an array of a given object's own enumerable property values.`,

  keys: `Takes one argument: object
         Returns an array of a given object's property names.`
}
module.exports = object

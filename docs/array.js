const array = {
  flatten: `Takes one argument: array
            Flattens n-dimensional array to the single depth array.`,

  identifier: `Takes one argument: array
               Returns a new unique identifier based on used identifiers.`,

  first: `Takes one argument: array
          Returns the first element of the array.`,

  second: `Takes one argument: array
           Returns the second element of the array.`,

  third:  `Takes one argument: array
           Returns the third element of the array.`,

  fourth: `Takes one argument: array
           Returns the fourth element of the array.`,

  fifth:  `Takes one argument: array
           Returns the fifth element of the array.`,

  sixth:  `Takes one argument: array
           Returns the sixth element of the array.`,

  seventh: `Takes one argument: array
            Returns the sixth element of the array.`,

  eigth: `Takes one argument: array
          Returns the eigth element of the array.`,

  ninth: `Takes one argument: array
          Returns the ninth element of the array.`,

  tenth: `Takes one argument: array
          Returns the tenth element of the array.`,

  last: `Takes one argument: array
         Returns the last element of the array.`,

  sum: `Takes one argument: array
        Returns the sum from array elements.`,

  average: `Takes one argument: array
            Returns the average from array elements.`,

  median: `Takes one argument: array
           Returns the median from array elements.`,

  compact: `Takes one argument: array
            Returns an array containing only truthy values.`,

  unique: `Takes one argument: array
           Returns an array containing unique elements.`,

  nth: `Takes two arguments: array, position
        Returns the element located at the passed position.
        When position is negative, the position of the element is searched from the end of the array.`,

  sample: `Takes one argument: array
           Returns random element from the array.`,

  rotate: `Takes two arguments: array, digit
           Shifts "n" items out of the array and pushes them back on the end.
           When digit is negative, shifting start from the end of the array.`,

  drop: `Takes two arguments: array, digit
         Remove "n" elements from the array.`,

  head: `Takes one argument: array
         Returns the first element of the array.`,

  take: `Takes two arguments: array, digit
         Takes "n" elements from the array, starting from the beginning of the array.`,

  slice: `Takes three arguments: array, start, end
          Extracts a fragment of an array/`
}

module.exports = array

const array = [
  flatten: {
    parameters: ['array'],
    description: 'Flattens n-dimensional array to the single depth array.'
  },
  identifier: {
    parameters: ['array'],
    description: 'Returns a new unique identifier based on used identifiers.'
  },
  first: {
    parameters: ['array'],
    description: 'Returns the first element of the array.'
  },
  second: {
    parameters: ['array'],
    description: 'Returns the second element of the array.'
  },
  third: {
    parameters: ['array'],
    description: 'Returns the third element of the array.'
  },
  fourth: {
    parameters: ['array'],
    description: 'Returns the fourth element of the array.'
  },
  fifth:  {
    parameters: ['array'],
    description: 'Returns the fifth element of the array.'
  },
  sixth:  {
    parameters: ['array'],
    description: 'Returns the sixth element of the array.'
  },
  seventh: {
    parameters: ['array'],
    description: 'Returns the sixth element of the array.'
  },
  eigth: {
    parameters: ['array'],
    description: 'Returns the eigth element of the array.'
  },
  ninth: {
    parameters: ['array'],
    description: 'Returns the ninth element of the array.'
  },
  tenth: {
    parameters: ['array'],
    description: 'Returns the tenth element of the array.'
  },
  last: {
    parameters: ['array'],
    description: 'Returns the last element of the array.'
  },
  sum: {
    parameters: ['array'],
    description: 'Returns the sum from array elements.'
  },
  average: {
    parameters: ['array'],
    description: 'Returns the average from array elements.'
  },
  median: {
    parameters: ['array'],
    description: 'Returns the median from array elements.'
  },
  compact: {
    parameters: ['array'],
    description: 'Returns an array containing only truthy values.'
  },
  unique: {
    parameters: ['array'],
    description: 'Returns an array containing unique elements.'
  },
  nth: {
    parameters: ['array', 'position'],
    description: `Returns the element located at the passed position.
                  When position is negative, the position of the element is searched from the end of the array.`,
  },
  sample: {
    parameters: [],
    description: 'Returns random element from the array.',
  },
  rotate: {
    parameters: ['array', 'digit']
    description: `Shifts "n" items out of the array and pushes them back on the end.
                  When digit is negative, shifting start from the end of the array.`
  },
  drop: {
    parameters: ['array', 'digit']
    description: 'Remove "n" elements from the array'.,
  },
  head: {
    parameters: ['array'],
    description: 'Returns the first element of the array.'
  },
  take: {
    parameters: ['array', 'digit']
    description: `Takes "n" elements from the array, starting from the beginning of the array.`
  },
  slice: {
    parameters: ['array', 'start', 'end']
    description: 'Extracts a fragment of an array.'
  }
]
module.exports = array

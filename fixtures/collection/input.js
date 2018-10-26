module.exports = {
  reverse: {
    examples:
    [
      {
        input: [[1, 2, 3, 4]],
        code: 'reverse([1, 2, 3, 4])'
      },
      {
        input: ['foo'],
        code: 'reverse("foo")'
      }
    ]
  },
  size: {
    examples:
    [
      {
        input: [[1, 2, 3, 4, 5]],
        code: 'size(1, 2, 3, 4, 5)'
      },
      {
        input: [{ a: 1, b: 2 }],
        code: 'size({ a: 1, b: 2 })'
      }
    ]
  }
}

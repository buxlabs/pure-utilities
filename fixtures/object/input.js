const object = {
  dig: {
    examples:
    [
      {
        input: [ { foo: { bar: 'baz' } }, 'foo.bar']
      },
    ]
  },
  flatten: {
    examples:
    [
      {
        input: [{ titles: { 'index': 'Buxus - Plants, seedlings, producer' } }]
      }
    ]
  },
  keys: {
    examples:
    [
      {
        input: [ { foo: 'bar', baz: [1, 2, 3] } ]
      }
    ]
  },
  pat: {
    examples:
    [
      {
        input: [{ foo: 'bar' }, 'foo', 'baz']
      }
    ]
  },
  rename: {
    examples:
    [
      {
        input: [{ 'created_at': '2000-01-01' }, { 'created_at': 'createdAt' }]
      }
    ]
  },
  unflatten: {
    examples:
    [
      {
        input: [{ 'errors.404.title': 'Page not found' }]
      }
    ]
  },
  values: {
    examples:
    [
      {
        input: [{ foo: 'bar', baz: [1, 2, 3] }]
      }
    ]
  }
}
module.exports = object

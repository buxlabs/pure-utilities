import test from 'ava'
import { object } from '../..'

test('extend should be possible to extend two objects', t => {
  var object1 = {
    'hello': 'world'
  }
  var object2 = {
    'world': 'hello'
  }
  var result = {
    'hello': 'world',
    'world': 'hello'
  }
  t.deepEqual(object.extend(object1, object2), result)
})

test('extend should be possible to extend more than two objects', t => {
  var object1 = {
    'hello': 'world'
  }
  var object2 = {
    'world': 'hello'
  }
  var object3 = {
    'witaj': 'świecie'
  }
  var object4 = {
    'świecie': 'witaj'
  }
  var result = {
    'hello': 'world',
    'world': 'hello',
    'witaj': 'świecie',
    'świecie': 'witaj'
  }
  t.deepEqual(object.extend(object1, object2, object3, object4), result)
})

test('extend should be possible to extend deeply nested objects', t => {
  var object1 = {
    pushState: true,
    exceptions: {
      suppressError: false
    },
    root: '/'
  }
  var object2 = {
    order: {
      quantity: {
        minimum: 100
      }
    }
  }
  var result = {
    pushState: true,
    exceptions: {
      suppressError: false
    },
    root: '/',
    order: {
      quantity: {
        minimum: 100
      }
    }
  }
  t.deepEqual(object.extend(object1, object2), result)
})

test('extend should be possible to extend deeply nested objects with same keys', t => {
  var object1 = {
    rest: {
      login: '/rest/login'
    }
  }
  var object2 = {
    rest: {
      logout: '/rest/logout'
    }
  }
  var result = {
    rest: {
      login: '/rest/login',
      logout: '/rest/logout'
    }
  }
  t.deepEqual(object.extend(object1, object2), result)
})

test('extend should be possible to extend multiple deeply nested objects with same keys', t => {
  var object1 = {
    rest: {
      login: '/rest/login'
    }
  }
  var object2 = {
    rest: {
      logout: '/rest/logout'
    }
  }
  var object3 = {
    rest: {
      register: '/rest/register'
    }
  }
  var result = {
    rest: {
      login: '/rest/login',
      logout: '/rest/logout',
      register: '/rest/register'
    }
  }
  t.deepEqual(object.extend(object1, object2, object3), result)
})

test('extend should copy arrays', t => {
  var object1 = {
    extensions: ['jpg', 'png']
  }
  var object2 = {
    rest: {
      logout: '/rest/logout'
    }
  }
  var expected = {
    extensions: ['jpg', 'png'],
    rest: {
      logout: '/rest/logout'
    }
  }
  var result = object.extend(object1, object2)
  t.deepEqual(result, expected)
  t.truthy(Array.isArray(result.extensions))
})

test('extend should copy regexps', t => {
  var object1 = {
    regexp: /\d/g
  }
  var object2 = {
    rest: {
      logout: '/rest/logout'
    }
  }
  var expected = {
    regexp: /\d/g,
    rest: {
      logout: '/rest/logout'
    }
  }
  var result = object.extend(object1, object2)
  t.deepEqual(result, expected)
})

test("flatten shouldn't change flat object", t => {
  var object1 = {
    'orderAccepted': 'Your order has been accepted'
  }
  var result = {
    'orderAccepted': 'Your order has been accepted'
  }
  t.deepEqual(object.flatten(object1), result)
})

test('flatten should flatten the object if it has 2 levels', t => {
  var object1 = {
    'titles': {
      'index': 'Buxus - Plants, seedlings, producer'
    }
  }
  var result = {
    'titles.index': 'Buxus - Plants, seedlings, producer'
  }
  t.deepEqual(object.flatten(object1), result)
})

test('flatten should flatten the object if it has 3 levels', t => {
  var object1 = {
    'errors': {
      '404': {
        'title': 'Page not found'
      }
    }
  }
  var result = {
    'errors.404.title': 'Page not found'
  }
  t.deepEqual(object.flatten(object1), result)
})

test("unflatten shouldn't change unflat object", t => {
  var result = {
    'orderAccepted': 'Your order has been accepted'
  }
  var object1 = {
    'orderAccepted': 'Your order has been accepted'
  }
  t.deepEqual(object.unflatten(object1), result)
})

test('unflatten should unflatten the object if it has 2 levels', t => {
  var object1 = {
    'titles.index': 'Buxus - Plants, seedlings, producer'
  }
  var result = {
    'titles': {
      'index': 'Buxus - Plants, seedlings, producer'
    }
  }
  t.deepEqual(object.unflatten(object1), result)
})

test('unflatten should unflatten the object if it has 3 levels', t => {
  var object1 = {
    'errors.404.title': 'Page not found'
  }
  var result = {
    'errors': {
      '404': {
        'title': 'Page not found'
      }
    }
  }
  var unflattened = object.unflatten(object1)
  t.deepEqual(unflattened, result)
  t.truthy(!Array.isArray(unflattened.errors))
})

test('rename should rename the keys in given object', t => {
  var object1 = {
    'created_at': '2000-01-01'
  }
  var keys = {
    'created_at': 'createdAt'
  }
  var result = {
    'createdAt': '2000-01-01'
  }
  t.deepEqual(object.rename(object1, keys), result)
})

test("rename should ignore object's properties without match", t => {
  var object1 = {
    'created_at': '2000-01-01',
    'title': 'Hello world!'
  }
  var keys = {
    'created_at': 'createdAt'
  }
  var result = {
    'createdAt': '2000-01-01',
    'title': 'Hello world!'
  }
  t.deepEqual(object.rename(object1, keys), result)
})

test("rename should ignore key's properties without match", t => {
  var object1 = {
    'created_at': '2000-01-01',
    'title': 'Hello world!'
  }
  var keys = {
    'created_at': 'createdAt',
    'updated_at': 'updatedAt'
  }
  var result = {
    'createdAt': '2000-01-01',
    'title': 'Hello world!'
  }
  t.deepEqual(object.rename(object1, keys), result)
})

test('dig returns the value of a field', t => {
  t.deepEqual(object.dig({ foo: 'bar' }, 'foo'), 'bar')
})

test('dig returns the value of a nested field', t => {
  t.deepEqual(object.dig({ foo: { bar: 'baz' } }, 'foo.bar'), 'baz')
})

test('dig returns null if the key does not match', t => {
  t.deepEqual(object.dig({ foo: 'bar' }, 'baz'), null)
})

test('pat overrides a value of a field', t => {
  t.deepEqual(object.pat({ foo: 'bar' }, 'foo', 'baz'), { foo: 'baz' })
})

test('pat overrides deeply nested fields', t => {
  t.deepEqual(object.pat({}, 'baz.bar', 'foo'), { baz: { bar: 'foo' }})
})

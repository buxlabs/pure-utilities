(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.utils = factory());
}(this, (function () { 'use strict';

/**
 *
 * prettify
 *
 * prettifies json string
 *
 * example:
 *
 * input
 * '{ "hello": "world" }'
 *
 * output
 * '{\n    "hello": "world"\n}'
 *
 */

function prettify (string) {
  return JSON.stringify(JSON.parse(string), null, 4)
}


var json = Object.freeze({
	prettify: prettify
});

function isObject (object) {
  var type = typeof object;
  return (type === 'function' || type === 'object') && !!object
}

function isNull (object) {
  return object === null
}

function isArray (object) {
  return Array.isArray(object)
}

function isRegExp (object) {
  return Object.prototype.toString.call(object) === '[object RegExp]'
}

function isFunction (object) {
  return Object.prototype.toString.call(object) === '[object Function]'
}

function isArguments (object) {
  return Object.prototype.toString.call(object) === '[object Arguments]'
}

function isString (object) {
  return Object.prototype.toString.call(object) === '[object String]'
}

function isNumber (object) {
  return Object.prototype.toString.call(object) === '[object Number]'
}

function isDate (object) {
  return Object.prototype.toString.call(object) === '[object Date]'
}

function isUndefined (object) {
  return object === void 0
}

/**
 *
 * extend
 *
 * returns a new object with fields from both objects
 *
 * example:
 *
 * input
 * { "hello": "world" }, { "world": "hello" }
 *
 * output
 * { "hello": "world", "world": "hello" }
 *
 */

function extend () {
  var result = {};
  for (var i = 0, ilen = arguments.length; i < ilen; i += 1) {
    var object = arguments[i];
    Object.keys(object).forEach(function (key) {
      var value = object[key];
      if (this.isObject(value) &&
                !this.isNull(value) &&
                !this.isArray(value) &&
                !this.isRegExp(value) &&
                !this.isFunction(value) &&
                !this.isArguments(value) &&
                !this.isString(value) &&
                !this.isNumber(value) &&
                !this.isDate(value)
            ) {
        result[key] = this.extend(result[key] || {}, value);
      } else {
        result[key] = value;
      }
    }, this);
  }
  return result
}

/**
 *
 * flatten
 *
 * parse the object and change it structure so it has only 1 level
 *
 * example:
 *
 * input
 * { "page": { "404": "Not found" }}
 *
 * output
 * { "page.404": "Not found" }
 *
 */

function flatten (object) {
  var key;
  var prefix;
  var deep;
  var result = {};
  for (key in object) {
    if (typeof object[key] === 'object') {
      deep = this.flatten(object[key]);
      for (prefix in deep) {
        result[key + '.' + prefix] = deep[prefix];
      }
    } else {
      result[key] = object[key];
    }
  }
  return result
}

/**
 *
 * unflatten
 *
 * parse the object and change it structure so it has multiple levels
 *
 * example:
 *
 * input
 * { "page.404": "Not found" }
 *
 * output
 * { "page": { "404": "Not found" }}
 *
 */

function unflatten (object) {
  var result = {};
  var current;
  var property;
  var parts;
  var key;
  var i;
  for (key in object) {
    current = result;
    property = '_';
    parts = key.split('.');
    for (i = 0; i < parts.length; i++) {
      current = current[property] || (current[property] = {});
      property = parts[i];
    }
    current[property] = object[key];
  }
  return result['_']
}

/**
 *
 * rename
 *
 * parse the object and change the names of the keys in the first level
 *
 * example:
 *
 * input
 * { "created_at": "2000-01-01" }, { "created_at": "createdAt" }
 *
 * output
 * { "createdAt": "2000-01-01" }
 *
 */

function rename (object, keys) {
  var key;
  for (key in keys) {
    if (keys.hasOwnProperty(key) && object.hasOwnProperty(key)) {
      object[keys[key]] = object[key];
      delete object[key];
    }
  }

  return object
}


var object = Object.freeze({
	isObject: isObject,
	isNull: isNull,
	isArray: isArray,
	isRegExp: isRegExp,
	isFunction: isFunction,
	isArguments: isArguments,
	isString: isString,
	isNumber: isNumber,
	isDate: isDate,
	isUndefined: isUndefined,
	extend: extend,
	flatten: flatten,
	unflatten: unflatten,
	rename: rename
});

/**
 *
 * removeWhitespace
 *
 * removes whitespace from string
 *
 * example:
 *
 * input
 * '\t1234 5678\n'
 *
 * output
 * '12345678'
 *
 */

function removeWhitespace (string) {
  return string.replace(/\s/g, '')
}

/**
 *
 * leftPad
 *
 * adds left padding to a string
 *
 * example:
 *
 * input
 * 'hello world', '** '
 *
 * output
 * '** hello world'
 *
 */

function leftPad (value, pad) {
  if (!pad) { return value }
  return String(value).split(/\r\n|\n/).map(function (line) {
    return line ? pad + line : line
  }).join('\n')
}


var string = Object.freeze({
	removeWhitespace: removeWhitespace,
	leftPad: leftPad
});

/**
 *
 * toISOString
 *
 * parse given keys and change them to iso8601 format
 *
 * example:
 *
 * input
 * "1460303444338"
 *
 * output
 * "2016-04-10T15:50:44.338Z"
 *
 */

function toISOString (value) {
  return new Date(parseInt(value, 10)).toISOString()
}


var date = Object.freeze({
	toISOString: toISOString
});

var index = {
  json,
  object,
  string,
  date
};

return index;

})));

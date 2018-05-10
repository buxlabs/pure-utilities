import test from 'ava'
import { string } from '../../build/index.umd'

test('removeWhitespace should remove whitespace characters', t => {
  var parsed = string.removeWhitespace('\t1234 5678\n')
  t.deepEqual(parsed, '12345678')
})

test('leftPad should return the same string if no padding was provided', t => {
  var parsed = string.leftPad('hello')
  t.deepEqual(parsed, 'hello')
})

test('leftPad should pad the string with given characters', t => {
  var parsed = string.leftPad('hello world', '** ')
  t.deepEqual(parsed, '** hello world')
})

test('leftPad should pad given number with given characters', t => {
  var parsed = string.leftPad(42, '---- ')
  t.deepEqual(parsed, '---- 42')
})

test("leftPad shouldn't add padding to empty lines", t => {
  var parsed = string.leftPad('hello\n\nworld', '* ')
  t.deepEqual(parsed, '* hello\n\n* world')
})

test('trim should remove whitespace in left and right', t => {
  var parsed = string.trim(' foo ')
  t.deepEqual(parsed, 'foo')
})

test("uppercase should convert string to uppercase", t => {
  var parsed = string.uppercase('foo')
  t.deepEqual(parsed, 'FOO')
})

test("uppercase should convert string to uppercase", t => {
  var parsed = string.uppercase('foo')
  t.deepEqual(parsed, 'FOO')
})

test("underscore shouldn't modify string", t => {
  var parsed = string.underscore('foo')
  t.deepEqual(parsed, 'foo')
})

test("underscore shouldn't modify string", t => {
  var parsed = string.underscore('foobar')
  t.deepEqual(parsed, 'foobar')
})

test("underscore shouldn't modify string", t => {
  var parsed = string.underscore('foo_bar')
  t.deepEqual(parsed, 'foo_bar')
})

test("underscore shouldn't modify string", t => {
  var parsed = string.underscore(' foo')
  t.deepEqual(parsed, 'foo')
})

test("underscore should convert string to lowerCase", t => {
  var parsed = string.underscore('Foo')
  t.deepEqual(parsed, 'foo')
})

test("underscore should convert string to lowerCase", t => {
  var parsed = string.underscore(' Foo ')
  t.deepEqual(parsed, 'foo')
})

test("underscore should add underscore between camelCase words", t => {
  var parsed = string.underscore('fooBar')
  t.deepEqual(parsed, 'foo_bar')
})

test("underscore should add underscore between camelCase words", t => {
  var parsed = string.underscore('fooBarBaz')
  t.deepEqual(parsed, 'foo_bar_baz')
})

test("underscore should add underscore between camelCase words", t => {
  var parsed = string.underscore('fooBarBarBar')
  t.deepEqual(parsed, 'foo_bar_bar_bar')
})

test("underscore should add underscore between camelCase words", t => {
  var parsed = string.underscore('fooBarBazBanQux')
  t.deepEqual(parsed, 'foo_bar_baz_ban_qux')
})

test("underscore should add underscore between spaced words", t => {
  var parsed = string.underscore('foo bar')
  t.deepEqual(parsed, 'foo_bar')
})

test("underscore should add underscore between spaced words", t => {
  var parsed = string.underscore('foo bar baz ban qux')
  t.deepEqual(parsed, 'foo_bar_baz_ban_qux')
})

test("underscore should add underscore between spaced words", t => {
  var parsed = string.underscore('foo     bar baz')
  t.deepEqual(parsed, 'foo_bar_baz')
})

test("underscore should add underscore between spaced words", t => {
  var parsed = string.underscore('foo     bar baz    qux')
  t.deepEqual(parsed, 'foo_bar_baz_qux')
})

test("underscore should add underscore between spaced words", t => {
  var parsed = string.underscore('foo Bar')
  t.deepEqual(parsed, 'foo_bar')
})

test("underscore should add underscore between spaced words", t => {
  var parsed = string.underscore('foo Bar Baq')
  t.deepEqual(parsed, 'foo_bar_baq')
})

test("underscore should add underscore between spaced words", t => {
  var parsed = string.underscore('foo Bar      baq')
  t.deepEqual(parsed, 'foo_bar_baq')
})

test("underscore should add underscore between spaced words", t => {
  var parsed = string.underscore('foo Bar      baq')
  t.deepEqual(parsed, 'foo_bar_baq')
})

test("underscore should add underscore between CapitalCase words", t => {
  var parsed = string.underscore('FooBar')
  t.deepEqual(parsed, 'foo_bar')
})

test("underscore should add underscore between CapitalCase words", t => {
  var parsed = string.underscore('FooBarBaz')
  t.deepEqual(parsed, 'foo_bar_baz')
})

test("underscore should add underscore between CapitalCase words", t => {
  var parsed = string.underscore('FooBarBazQux')
  t.deepEqual(parsed, 'foo_bar_baz_qux')
})

test("underscore should add underscore between CapitalCase words", t => {
  var parsed = string.underscore('FooBarBazQux')
  t.deepEqual(parsed, 'foo_bar_baz_qux')
})

test("underscore should add underscore between CapitalCase words", t => {
  var parsed = string.underscore('FooBarBazQux bar')
  t.deepEqual(parsed, 'foo_bar_baz_qux_bar')
})

test("underscore should convert kebab-case to underscoreCase", t => {
  var parsed = string.underscore('foo-bar')
  t.deepEqual(parsed, 'foo_bar')
})

test("underscore should convert kebab-case to underscoreCase", t => {
  var parsed = string.underscore('foo-bar-baz')
  t.deepEqual(parsed, 'foo_bar_baz')
})

test("underscore should convert kebab-case to underscoreCase", t => {
  var parsed = string.underscore('foo-BAR-baz')
  t.deepEqual(parsed, 'foo_bar_baz')
})

test("underscore should convert kebab-case to underscoreCase", t => {
  var parsed = string.underscore('foo-BaR-baz')
  t.deepEqual(parsed, 'foo_ba_r_baz')
})

test("underscore should convert kebab-case to underscoreCase", t => {
  var parsed = string.underscore('Bar-baz-baN')
  t.deepEqual(parsed, 'bar_baz_ba_n')
})

test("underscore should convert string containing numbers to underscoreCase", t => {
  var parsed = string.underscore('foo11')
  t.deepEqual(parsed, 'foo_11')
})

test("underscore should convert string containing numbers to underscoreCase", t => {
  var parsed = string.underscore('foo1o11')
  t.deepEqual(parsed, 'foo_1_o_11')
})

test("underscore should convert string containing numbers to underscoreCase", t => {
  var parsed = string.underscore('fo_o1o11')
  t.deepEqual(parsed, 'fo_o_1_o_11')
})

test("underscore should convert string containing numbers to underscoreCase", t => {
  var parsed = string.underscore('1bar')
  t.deepEqual(parsed, '1_bar')
})

test("underscore should convert string containing numbers to underscoreCase", t => {
  var parsed = string.underscore('1barBan-baz')
  t.deepEqual(parsed, '1_bar_ban_baz')
})

test("underscore should convert string containing numbers to underscoreCase", t => {
  var parsed = string.underscore('00')
  t.deepEqual(parsed, '00')
})

test("reverse should reverse string", t => {
  var parsed = string.reverse('foo')
  t.deepEqual(parsed, 'oof')
})

test("reverse should reverse string", t => {
  var parsed = string.reverse('12345')
  t.deepEqual(parsed, '54321')
})

test("capitalize should capitalize first character of string", t => {
  var parsed = string.capitalize('foo')
  t.deepEqual(parsed, 'Foo')
})

test("capitalize should capitalize first character of string", t => {
  var parsed = string.capitalize('foo bar and baz')
  t.deepEqual(parsed, 'Foo bar and baz')
})

test("lowerCase should convert each character to lowerCase", t => {
  var parsed = string.lowercase('Foo BAR and baZ')
  t.deepEqual(parsed, 'foo bar and baz')
})

test("humanize should capitalize first word", t => {
  var parsed = string.humanize('foo bar')
  t.deepEqual(parsed, 'Foo bar')
})

test("humanize should capitalize first word and replace underscores to spaces", t => {
  var parsed = string.humanize('foo_bar')
  t.deepEqual(parsed, 'Foo bar')
})

test("humanize should capitalize first word and replace underscores to spaces", t => {
  var parsed = string.humanize('foo_bar. Baz qux _and_qux')
  t.deepEqual(parsed, 'Foo bar. Baz qux  and qux')
})

test("humanize shouldn't capitalize first word and should replace underscores to spaces", t => {
  var parsed = string.humanize('foo_bar. Baz qux _and_qux', false)
  t.deepEqual(parsed, 'foo bar. Baz qux  and qux')
})

test("titleize should capitalize all the words", t => {
  var parsed = string.titleize('foo bar')
  t.deepEqual(parsed, 'Foo Bar')
})

test("titleize should capitalize all the words", t => {
  var parsed = string.titleize('foo, bar, baz and qux')
  t.deepEqual(parsed, 'Foo, Bar, Baz And Qux')
})

test("dasherize replaces underscores with dashes in the string", t => {
  var parsed = string.dasherize('foo_bar')
  t.deepEqual(parsed, 'foo-bar')
})

test("dasherize replaces underscores with dashes in the string", t => {
  var parsed = string.dasherize('foo_bar__baz')
  t.deepEqual(parsed, 'foo-bar--baz')
})

test("classify creates a class name from a plural", t => {
  var parsed = string.classify('foos')
  t.deepEqual(parsed, 'Foo')
})

test("classify creates a class name from a plural", t => {
  var parsed = string.classify('fooBars')
  t.deepEqual(parsed, 'FooBar')
})

test("classify creates a class name from a plural", t => {
  var parsed = string.classify('fooBar')
  t.deepEqual(parsed, 'FooBar')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('car')
  t.deepEqual(parsed, 'cars')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('dress')
  t.deepEqual(parsed, 'dresses')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('box')
  t.deepEqual(parsed, 'boxes')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('bush')
  t.deepEqual(parsed, 'bushes')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('bus')
  t.deepEqual(parsed, 'buses')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('watch')
  t.deepEqual(parsed, 'watches')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('bridge')
  t.deepEqual(parsed, 'bridges')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('prize')
  t.deepEqual(parsed, 'prizes')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('tomato')
  t.deepEqual(parsed, 'tomatoes')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('wife')
  t.deepEqual(parsed, 'wives')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('shelf')
  t.deepEqual(parsed, 'shelves')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('lady')
  t.deepEqual(parsed, 'ladies')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('city')
  t.deepEqual(parsed, 'cities')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('toy')
  t.deepEqual(parsed, 'toys')
})

test("pluralize returns the plural form of the word in the string", t => {
  var parsed = string.pluralize('ad')
  t.deepEqual(parsed, 'ads')
})

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('cars')
  t.deepEqual(parsed, 'car')
})

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('cars')
  t.deepEqual(parsed, 'car')
})

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('dresses')
  t.deepEqual(parsed, 'dress')
})

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('boxes')
  t.deepEqual(parsed, 'box')
})

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('bushes')
  t.deepEqual(parsed, 'bush')
})

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('buses')
  t.deepEqual(parsed, 'bus')
})

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('watches')
  t.deepEqual(parsed, 'watch')
})

// test("singularize returns singular form of a word in a string", t => {
//   var parsed = string.singularize('bridges')
//   t.deepEqual(parsed, 'bridge')
// })

// test("singularize returns singular form of a word in a string", t => {
//   var parsed = string.singularize('prizes')
//   t.deepEqual(parsed, 'prize')
// })

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('tomatoes')
  t.deepEqual(parsed, 'tomato')
})

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('wives')
  t.deepEqual(parsed, 'wife')
})

// test("singularize returns singular form of a word in a string", t => {
//   var parsed = string.singularize('shelves')
//   t.deepEqual(parsed, 'shelf')
// })

// test("singularize returns singular form of a word in a string", t => {
//   var parsed = string.singularize('thieves')
//   t.deepEqual(parsed, 'thief')
// })

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('cities')
  t.deepEqual(parsed, 'city')
})

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('ladies')
  t.deepEqual(parsed, 'lady')
})

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('toys')
  t.deepEqual(parsed, 'toy')
})

test("singularize returns singular form of a word in a string", t => {
  var parsed = string.singularize('ads')
  t.deepEqual(parsed, 'ad')
})

test("swapcase converts uppercase to lowercase and lowercase to uppercase", t => {
  var parsed = string.swapcase('foo')
  t.deepEqual(parsed, 'FOO')
})

test("swapcase converts uppercase to lowercase and lowercase to uppercase", t => {
  var parsed = string.swapcase('FOO')
  t.deepEqual(parsed, 'foo')
})

test("swapcase converts uppercase to lowercase and lowercase to uppercase", t => {
  var parsed = string.swapcase('fOo Bar BAZ')
  t.deepEqual(parsed, 'FoO bAR baz')
})

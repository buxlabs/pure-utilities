import test from 'ava'
import { string } from '../..'

test('whitespacestrip should remove whitespace characters', t => {
  var parsed = string.whitespacestrip('\t1234 5678\n')
  t.deepEqual(parsed, '12345678')

  parsed = string.whitespacestrip('b  ar')
  t.deepEqual(parsed, 'bar')
})

test('pad should return the same string if no padding was provided', t => {
  const parsed = string.pad('hello')
  t.deepEqual(parsed, 'hello')
})

test('pad (left) should add (n) whitespaces if pad is a number', t => {
  const parsed = string.pad('hello world', 5)
  t.deepEqual(parsed, '     hello world')
})

test('pad (right) should add (n) whitespaces if pad is a number', t => {
  const parsed = string.pad('hello world', 5, false)
  t.deepEqual(parsed, 'hello world     ')
})

test('pad (left) should pad the string with given characters', t => {
  const parsed = string.pad('hello world', '** ')
  t.deepEqual(parsed, '** hello world')
})

test('pad (right) should pad the string with given characters', t => {
  const parsed = string.pad('3', '000', false)
  t.deepEqual(parsed, '3000')
})

test('pad (left) should pad given number with given characters', t => {
  const parsed = string.pad(42, '---- ')
  t.deepEqual(parsed, '---- 42')
})

test('pad (right) should pad given number with given characters', t => {
  const parsed = string.pad(42, ' ----', false)
  t.deepEqual(parsed, '42 ----')
})

test("pad shouldn't add padding to empty lines", t => {
  const parsed = string.pad('hello\n\nworld', '* ')
  t.deepEqual(parsed, '* hello\n\n* world')
})

test('trim should remove whitespace in left and right', t => {
  const parsed = string.trim(' foo ')
  t.deepEqual(parsed, 'foo')
})

test('uppercase should convert string to uppercase', t => {
  const parsed = string.uppercase('foo')
  t.deepEqual(parsed, 'FOO')
})

test("underscore shouldn't modify the string, lowercase without underscore", t => {
  var parsed = string.underscore('foo')
  t.deepEqual(parsed, 'foo')

  parsed = string.underscore('foobar')
  t.deepEqual(parsed, 'foobar')

  parsed = string.underscore(' foo')
  t.deepEqual(parsed, 'foo')
})

test("underscore shouldn't modify the string, lowercase with underscore", t => {
  const parsed = string.underscore('foo_bar')
  t.deepEqual(parsed, 'foo_bar')
})

test('underscore should convert string to lowerCase', t => {
  const parsed = string.underscore('Foo')
  t.deepEqual(parsed, 'foo')
})

test('underscore should convert string to lowerCase and remove esternal space', t => {
  const parsed = string.underscore(' Foo ')
  t.deepEqual(parsed, 'foo')
})

test('underscore should add underscore between camelCase words', t => {
  var parsed = string.underscore('fooBar')
  t.deepEqual(parsed, 'foo_bar')

  parsed = string.underscore('fooBarBaz')
  t.deepEqual(parsed, 'foo_bar_baz')

  parsed = string.underscore('fooBarBarBar')
  t.deepEqual(parsed, 'foo_bar_bar_bar')

  parsed = string.underscore('fooBarBazBanQux')
  t.deepEqual(parsed, 'foo_bar_baz_ban_qux')
})

test('underscore should add underscore between spaced words', t => {
  var parsed = string.underscore('foo bar')
  t.deepEqual(parsed, 'foo_bar')

  parsed = string.underscore('foo bar baz ban qux')
  t.deepEqual(parsed, 'foo_bar_baz_ban_qux')
})

test('underscore should add underscore between spaced words, even with multiple spaces', t => {
  var parsed = string.underscore('foo     bar baz')
  t.deepEqual(parsed, 'foo_bar_baz')

  parsed = string.underscore('foo     bar baz    qux')
  t.deepEqual(parsed, 'foo_bar_baz_qux')
})

test('underscore should add underscore between spaced words and string should be converted lowercase', t => {
  var parsed = string.underscore('foo Bar')
  t.deepEqual(parsed, 'foo_bar')

  parsed = string.underscore('foo Bar Baq')
  t.deepEqual(parsed, 'foo_bar_baq')

  parsed = string.underscore('foo Bar      baq')
  t.deepEqual(parsed, 'foo_bar_baq')
})

test('underscore should add underscore between CapitalCase words', t => {
  var parsed = string.underscore('FooBar')
  t.deepEqual(parsed, 'foo_bar')

  parsed = string.underscore('FooBarBaz')
  t.deepEqual(parsed, 'foo_bar_baz')

  parsed = string.underscore('FooBarBazQux')
  t.deepEqual(parsed, 'foo_bar_baz_qux')

  parsed = string.underscore('FooBarBazQux')
  t.deepEqual(parsed, 'foo_bar_baz_qux')

  parsed = string.underscore('FooBarBazQux bar')
  t.deepEqual(parsed, 'foo_bar_baz_qux_bar')
})

test('underscore should convert kebab-case to underscoreCase', t => {
  var parsed = string.underscore('foo-bar')
  t.deepEqual(parsed, 'foo_bar')

  parsed = string.underscore('foo-bar-baz')
  t.deepEqual(parsed, 'foo_bar_baz')

  parsed = string.underscore('foo-BAR-baz')
  t.deepEqual(parsed, 'foo_bar_baz')

  parsed = string.underscore('foo-BaR-baz')
  t.deepEqual(parsed, 'foo_ba_r_baz')

  parsed = string.underscore('Bar-baz-baN')
  t.deepEqual(parsed, 'bar_baz_ba_n')
})

test('underscore should convert string containing numbers to underscoreCase', t => {
  const parsed = string.underscore('foo11')
  t.deepEqual(parsed, 'foo_11')
})

test('underscore should convert string containing numbers to underscoreCase, even with letters between numbers', t => {
  const parsed = string.underscore('foo1o11')
  t.deepEqual(parsed, 'foo_1_o_11')
})

test('underscore should convert string containing numbers to underscoreCase, even with underscore', t => {
  const parsed = string.underscore('fo_o1o11')
  t.deepEqual(parsed, 'fo_o_1_o_11')
})

test('underscore should convert string containing numbers to underscoreCase, even starting with number', t => {
  const parsed = string.underscore('1bar')
  t.deepEqual(parsed, '1_bar')
})

test('underscore should convert string containing numbers to underscoreCase, even if mixed with kebabcase', t => {
  const parsed = string.underscore('1barBan-baz')
  t.deepEqual(parsed, '1_bar_ban_baz')
})

test('underscore should convert string containing numbers to underscoreCase, but not if are only numbers', t => {
  const parsed = string.underscore('00')
  t.deepEqual(parsed, '00')
})

test('capitalize should capitalize first character of string', t => {
  const parsed = string.capitalize('foo')
  t.deepEqual(parsed, 'Foo')
})

test('capitalize should capitalize first character of string, even with space in it', t => {
  const parsed = string.capitalize('foo bar and baz')
  t.deepEqual(parsed, 'Foo bar and baz')
})
/// ////////YOU ARE HERE
test('lowerCase should convert each character to lowerCase', t => {
  const parsed = string.lowercase('Foo BAR and baZ')
  t.deepEqual(parsed, 'foo bar and baz')
})

test('humanize should capitalize first word', t => {
  const parsed = string.humanize('foo bar')
  t.deepEqual(parsed, 'Foo bar')
})

test('humanize should capitalize first word and replace underscores to spaces', t => {
  var parsed = string.humanize('foo_bar')
  t.deepEqual(parsed, 'Foo bar')

  parsed = string.humanize('foo_bar. Baz qux _and_qux')
  t.deepEqual(parsed, 'Foo bar. Baz qux  and qux')
})

test("humanize shouldn't capitalize first word and should replace underscores to spaces", t => {
  const parsed = string.humanize('foo_bar. Baz qux _and_qux', false)
  t.deepEqual(parsed, 'foo bar. Baz qux  and qux')
})

test('titleize should capitalize all the words', t => {
  var parsed = string.titleize('foo bar')
  t.deepEqual(parsed, 'Foo Bar')

  parsed = string.titleize('foo, bar, baz and qux')
  t.deepEqual(parsed, 'Foo, Bar, Baz And Qux')
})

test('dasherize replaces underscores with dashes in the string', t => {
  var parsed = string.dasherize('foo_bar')
  t.deepEqual(parsed, 'foo-bar')

  parsed = string.dasherize('foo_bar__baz')
  t.deepEqual(parsed, 'foo-bar--baz')
})

test('classify creates a class name from a plural', t => {
  const parsed = string.classify('foos')
  t.deepEqual(parsed, 'Foo')
})

test('classify creates a class name from a plural in camelcase', t => {
  const parsed = string.classify('fooBars')
  t.deepEqual(parsed, 'FooBar')
})

test('classify creates a class name from a singular', t => {
  const parsed = string.classify('fooBar')
  t.deepEqual(parsed, 'FooBar')
})

test('pluralize returns the plural form of the word in the string', t => {
  var parsed = string.pluralize('car')
  t.deepEqual(parsed, 'cars')

  parsed = string.pluralize('bridge')
  t.deepEqual(parsed, 'bridges')

  parsed = string.pluralize('prize')
  t.deepEqual(parsed, 'prizes')

  parsed = string.pluralize('toy')
  t.deepEqual(parsed, 'toys')

  parsed = string.pluralize('ad')
  t.deepEqual(parsed, 'ads')
})

test('pluralize returns the plural form of the word (that ends in "s") in the string', t => {
  var parsed = string.pluralize('dress')
  t.deepEqual(parsed, 'dresses')

  parsed = string.pluralize('bus')
  t.deepEqual(parsed, 'buses')
})

test('pluralize returns the plural form of the word (that ends in "x") in the string', t => {
  const parsed = string.pluralize('box')
  t.deepEqual(parsed, 'boxes')
})

test('pluralize returns the plural form of the word (that ends in "h") in the string', t => {
  var parsed = string.pluralize('bush')
  t.deepEqual(parsed, 'bushes')

  parsed = string.pluralize('watch')
  t.deepEqual(parsed, 'watches')
})

test('pluralize returns the plural form of the word (that ends in "o") in the string', t => {
  const parsed = string.pluralize('tomato')
  t.deepEqual(parsed, 'tomatoes')
})

test('pluralize returns the irregolar plural form of the word in the string', t => {
  var parsed = string.pluralize('wife')
  t.deepEqual(parsed, 'wives')

  parsed = string.pluralize('shelf')
  t.deepEqual(parsed, 'shelves')

  parsed = string.pluralize('lady')
  t.deepEqual(parsed, 'ladies')

  parsed = string.pluralize('city')
  t.deepEqual(parsed, 'cities')
})

test('singularize returns singular form of a word  (in "es") in the string', t => {
  var parsed = string.singularize('dresses')
  t.deepEqual(parsed, 'dress')

  parsed = string.singularize('boxes')
  t.deepEqual(parsed, 'box')

  parsed = string.singularize('bushes')
  t.deepEqual(parsed, 'bush')

  parsed = string.singularize('buses')
  t.deepEqual(parsed, 'bus')

  parsed = string.singularize('watches')
  t.deepEqual(parsed, 'watch')

  parsed = string.singularize('bridges', 'e')
  t.deepEqual(parsed, 'bridge')

  parsed = string.singularize('prizes', 'e')
  t.deepEqual(parsed, 'prize')

  parsed = string.singularize('tomatoes')
  t.deepEqual(parsed, 'tomato')
})

test('singularize returns singular form of a word in the string', t => {
  var parsed = string.singularize('toys')
  t.deepEqual(parsed, 'toy')

  parsed = string.singularize('ads')
  t.deepEqual(parsed, 'ad')

  parsed = string.singularize('cars')
  t.deepEqual(parsed, 'car')

  parsed = string.singularize('cars')
  t.deepEqual(parsed, 'car')
})

test('singularize returns singular form of a irregolar plural a word in the string', t => {
  var parsed = string.singularize('wives')
  t.deepEqual(parsed, 'wife')

  parsed = string.singularize('shelves', 'f')
  t.deepEqual(parsed, 'shelf')

  parsed = string.singularize('thieves', 'f')
  t.deepEqual(parsed, 'thief')

  parsed = string.singularize('cities')
  t.deepEqual(parsed, 'city')

  parsed = string.singularize('ladies')
  t.deepEqual(parsed, 'lady')
})

test('swapcase converts lowercase to uppercase', t => {
  const parsed = string.swapcase('foo')
  t.deepEqual(parsed, 'FOO')
})

test('swapcase converts uppercase to lowercase ', t => {
  const parsed = string.swapcase('FOO')
  t.deepEqual(parsed, 'foo')
})

test('swapcase converts uppercase to lowercase and lowercase to uppercase', t => {
  var parsed = string.swapcase('fOo Bar BAZ')
  t.deepEqual(parsed, 'FoO bAR baz')

  parsed = string.swapcase('fOo Bar BAZ')
  t.deepEqual(parsed, 'FoO bAR baz')
})

test("camelize shouldn't modify the string in lowercase", t => {
  var parsed = string.camelize('foo')
  t.deepEqual(parsed, 'foo')

  parsed = string.camelize('foobar')
  t.deepEqual(parsed, 'foobar')
})

test("camelize shouldn't modify the string already in camelcase", t => {
  const parsed = string.camelize('fooBar')
  t.deepEqual(parsed, 'fooBar')
})

test('camelize should trim the string', t => {
  const parsed = string.camelize(' foo')
  t.deepEqual(parsed, 'foo')
})

test('camelize should modify the string to lowerCamelCase by default', t => {
  var parsed = string.camelize('FooBar')
  t.deepEqual(parsed, 'fooBar')

  parsed = string.camelize('FooBarbazBan')
  t.deepEqual(parsed, 'fooBarbazBan')

  parsed = string.camelize('Foo')
  t.deepEqual(parsed, 'foo')
})

test('camelize should modify the string (with underscore) to lowerCamelCase by default', t => {
  var parsed = string.camelize('foo_bar')
  t.deepEqual(parsed, 'fooBar')

  parsed = string.camelize('foo_bar_baz_ban_qux')
  t.deepEqual(parsed, 'fooBarBazBanQux')
})

test('camelize should modify the string (with "-") to lowerCamelCase by default', t => {
  const parsed = string.camelize('foo-Bar')
  t.deepEqual(parsed, 'fooBar')
})

test('camelize should modify the string (with space) to lowerCamelCase by default', t => {
  const parsed = string.camelize('foo bar')
  t.deepEqual(parsed, 'fooBar')
})

test('camelize should modify the string (with spaces) to lowerCamelCase by default', t => {
  const parsed = string.camelize('Foo bar ban')
  t.deepEqual(parsed, 'fooBarBan')
})

test('camelize should modify the string to UpperCamelCase if proper flag has been passed', t => {
  var parsed = string.camelize('foo', true)
  t.deepEqual(parsed, 'Foo')

  parsed = string.camelize('foobar', true)
  t.deepEqual(parsed, 'Foobar')

  parsed = string.camelize('fooBar', true)
  t.deepEqual(parsed, 'FooBar')
})

test('camelize should modify the string to UpperCamelCase, removing spaces, if proper flag has been passed', t => {
  var parsed = string.camelize(' foo', true)
  t.deepEqual(parsed, 'Foo')

  parsed = string.camelize('Foo bar ban', true)
  t.deepEqual(parsed, 'FooBarBan')
})

test('camelize should modify the string to UpperCamelCase, removing underscore, if proper flag has been passed', t => {
  var parsed = string.camelize('Foo_bar', true)
  t.deepEqual(parsed, 'FooBar')
  parsed = string.camelize('foo_bar_baz_ban_qux', true)
  t.deepEqual(parsed, 'FooBarBazBanQux')
})

test('constantize should modify the string to the string in CONST_CONVENTION', t => {
  var parsed = string.constantize('foo')
  t.deepEqual(parsed, 'FOO')

  parsed = string.constantize('foobar')
  t.deepEqual(parsed, 'FOOBAR')
})

test('constantize should modify the camelcase string to the string in CONST_CONVENTION', t => {
  var parsed = string.constantize('fooBar')
  t.deepEqual(parsed, 'FOO_BAR')

  parsed = string.constantize('FooBarBazQux')
  t.deepEqual(parsed, 'FOO_BAR_BAZ_QUX')

  parsed = string.constantize('FooBar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test('constantize should modify the snakecase string to the string in CONST_CONVENTION', t => {
  var parsed = string.constantize('foo_bar')
  t.deepEqual(parsed, 'FOO_BAR')

  parsed = string.constantize('Foo_Bar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test('constantize should modify the kebabcase string to the string in CONST_CONVENTION', t => {
  const parsed = string.constantize('foo-bar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test('constantize should modify the mixedcase string to the string in CONST_CONVENTION', t => {
  const parsed = string.constantize('foo-bar_baz')
  t.deepEqual(parsed, 'FOO_BAR_BAZ')
})

test('constantize should modify the string to the string in CONST_CONVENTION, removing duplicate spaces', t => {
  const parsed = string.constantize('foo   bar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test("truncate should truncate the string if it's longer than the given maximum string length", t => {
  var parsed = string.truncate('Once upon a time in a world far far away')
  t.deepEqual(parsed, 'Once upon a time in a world...')

  parsed = string.truncate('Once upon a time in a world far far away', 17)
  t.deepEqual(parsed, 'Once upon a ti...')
})

test('tail removes an initial substring with length consisting of the difference and prepends a prefix', t => {
  const parsed = string.tail('Once upon a time in a world far far away', 15)
  t.deepEqual(parsed, '...far far away')
})

test('lowerfirst should lowercase first character of string', t => {
  const parsed = string.lowerfirst('Foo')
  t.deepEqual(parsed, 'foo')
})

test('lowerfirst should lowercase first character of string even with spaces', t => {
  const parsed = string.lowerfirst('Foo bar baz')
  t.deepEqual(parsed, 'foo bar baz')
})

test('unescape should convert the HTML entities in string to their corresponding characters', t => {
  var parsed = string.unescape('&amp;')
  t.deepEqual(parsed, '&')

  parsed = string.unescape('&lt;script&gt;alert("foo")&lt;/script&gt;')
  t.deepEqual(parsed, '<script>alert("foo")</script>')
})

test('repeat should return new string which contains the specified number of copies of the string', t => {
  const parsed = string.repeat('foo', 2)
  t.deepEqual(parsed, 'foofoo')
})

test('singlespace should return new string which contains singlespace', t => {
  const parsed = string.singlespace('foo     bar   baz')
  t.deepEqual(parsed, 'foo bar baz')
})

test('quote return a string inside quotes', t => {
  const parsed = string.quote('foo bar baz')
  t.deepEqual(parsed, '"foo bar baz"')
})

test('quote return a string inside quotes, with english localization', t => {
  const parsed = string.quote('foo bar baz', 'en')
  t.deepEqual(parsed, '"foo bar baz"')
})

test('quote return a string inside quotes, with polish localization', t => {
  const parsed = string.quote('foo bar baz', 'pl')
  t.deepEqual(parsed, '„foo bar baz”')
})

test('unquote removes left and right quotation mark from string', t => {
  const parsed = string.unquote('„foo bar baz”')
  t.deepEqual(parsed, 'foo bar baz')
})

test('unquote removes quotation from string', t => {
  const parsed = string.unquote('"foo bar baz"')
  t.deepEqual(parsed, 'foo bar baz')
})

test('squeeze return a string with removed double characters at the end of the string', t => {
  const parsed = string.squeeze('foo')
  t.deepEqual(parsed, 'fo')
})

test('squeeze return a string with removed double characters in the middle of the string', t => {
  const parsed = string.squeeze('yellow moon')
  t.deepEqual(parsed, 'yelow mon')
})

test('squeeze return a string with removed double characters even spaces', t => {
  const parsed = string.squeeze('fooo    bar')
  t.deepEqual(parsed, 'fo bar')
})

test('squeeze return a string with removed multiple double characters int the middle of the string', t => {
  const parsed = string.squeeze('putters shoot balls')
  t.deepEqual(parsed, 'puters shot bals')
})

test('squeeze return a string with removed double characters with supplied char', t => {
  const parsed = string.squeeze('yellow moon', 'o')
  t.deepEqual(parsed, 'yellow mon')
})

test('squeeze return a string with removed double characters with supplied range', t => {
  const parsed = string.squeeze('putters shoot balls', 'm-z')
  t.deepEqual(parsed, 'puters shot balls')
})

test('summarize return a string with dots if string length is longer or equal 100', t => {
  const parsed = string.summarize(`
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Suspendisse venenatis ultrices arcu ut fermentum.
    Aenean non nibh sed augue gravida ultricies. Fusce dapibus libero vitae diam malesuada dictum.
    Curabitur congue venenatis ante, non congue tortor lobortis in. Sed hendrerit egestas eleifend.
    Nullam non accumsan augue. Maecenas sed tellus diam. Maecenas et dui auctor, elementum sapien in, fermentum nisi.
    Etiam in tempus libero, non finibus dui. Nunc vulputate mauris odio, quis vehicula dui malesuada eu.
    Etiam a justo quis nisl viverra finibus convallis in lorem. Sed eu massa consequat, venenatis mi at, lobortis lectus.
    Nulla euismod mattis justo id consequat. Proin`
  )
  t.deepEqual(parsed.substr(parsed.length - 3), '...')
})

test('summarize return a string with dots if string length is longer or equal x', t => {
  const parsed = string.summarize('foo bar baz ban', 10)
  t.deepEqual(parsed.substr(parsed.length - 3), '...')
})

test('wrap, insert string between passed character', t => {
  const parsed = string.wrap('foo bar baz ban', '"')
  t.deepEqual(parsed, '"foo bar baz ban"')
})

test('wrap, insert string between passed characters', t => {
  var parsed = string.wrap('foo bar baz', '„', '”')
  t.deepEqual(parsed, '„foo bar baz”')

  parsed = string.wrap('foo bar baz', '(', ')')
  t.deepEqual(parsed, '(foo bar baz)')
})

test('unwrap, removed starting and ending character', t => {
  const parsed = string.unwrap('"foo bar baz ban"', '"')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('unwrap, removed starting and ending characters', t => {
  var parsed = string.unwrap('„foo bar baz”', '„', '”')
  t.deepEqual(parsed, 'foo bar baz')

  parsed = string.unwrap('(foo bar baz)', '(', ')')
  t.deepEqual(parsed, 'foo bar baz')
})

test('strip should remove whitespace in left and right', t => {
  const parsed = string.strip(' foo ')
  t.deepEqual(parsed, 'foo')
})

test('strip should remove from string passed string', t => {
  const parsed = string.strip('foo bar baz ban', 'baz')
  t.deepEqual(parsed, 'foo bar ban')
})

test('strip should remove from string passed string with length 1 ', t => {
  const parsed = string.strip('foo bar', 'o')
  t.deepEqual(parsed, 'f bar')
})

test('strip should remove from string passed strings', t => {
  const parsed = string.strip('foo bar baz ban', ['o', 'r', 'a'])
  t.deepEqual(parsed, 'f b bz bn')
})

test('replace should replace string characters with newString', t => {
  const parsed = string.replace('foo bar baz ban', 'baz', 'qux')
  t.deepEqual(parsed, 'foo bar qux ban')
})

test('index returns the index of the first occurence of the given substring of length 1', t => {
  const parsed = string.index('hello', 'e')
  t.deepEqual(parsed, 1)
})

test('index returns the index of the first occurence of the given substring', t => {
  const parsed = string.index('hello', 'lo')
  t.deepEqual(parsed, 3)
})

test('index returns -1 if there is not a occurence of the given substring', t => {
  const parsed = string.index('hello', 'x')
  t.deepEqual(parsed, -1)
})

test('chop returns string with the last character removed or a empty string if input is empty', t => {
  const parsed = string.chop('')
  t.deepEqual(parsed, '')
})

test('chop returns string with the last character removed, with w32 newline', t => {
  const parsed = string.chop('foo bar baz ban\r\n')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chop returns string with the last character removed, with a white char', t => {
  const parsed = string.chop('foo bar baz ban\n\r')
  t.deepEqual(parsed, 'foo bar baz ban\n')
})

test('chop returns string with the last character removed, with newline', t => {
  const parsed = string.chop('foo bar baz ban\n')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chop returns string with the last character removed', t => {
  const parsed = string.chop('foo bar baz bar')
  t.deepEqual(parsed, 'foo bar baz ba')
})

test('chomp returns string with the given record separator removed from the end of string', t => {
  const parsed = string.chomp('foo bar', 'ar')
  t.deepEqual(parsed, 'foo b')
})

test('chomp returns string with the given record separator removed from the end of string if at the end of the string', t => {
  const parsed = string.chomp('foo bar', 'qux')
  t.deepEqual(parsed, 'foo bar')
})

test('chomp returns string with the default record separator removed from the end of string', t => {
  var parsed = string.chomp('foo bar baz ban\n\r')
  t.deepEqual(parsed, 'foo bar baz ban\n')

  parsed = string.chomp('foo bar baz ban\n\r')
  t.deepEqual(parsed, 'foo bar baz ban\n')

  parsed = string.chomp('foo bar baz ban\n')
  t.deepEqual(parsed, 'foo bar baz ban')

  parsed = string.chomp('foo bar baz ban\r')
  t.deepEqual(parsed, 'foo bar baz ban')

  parsed = string.chomp('foo\r\n\r\r\n')
  t.deepEqual(parsed, 'foo\r\n\r')

  parsed = string.chomp('foo bar')
  t.deepEqual(parsed, 'foo bar')

  parsed = string.chomp('')
  t.deepEqual(parsed, '')

  parsed = string.chomp('foo bar baz ban\r\n')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('dot returns string with "." at the end of the string', t => {
  var parsed = string.dot('')
  t.deepEqual(parsed, '.')
  parsed = string.dot('foo bar')
  t.deepEqual(parsed, 'foo bar.')
})

test('dot returns the same string if it ends with a "."', t => {
  const parsed = string.dot('foo bar.')
  t.deepEqual(parsed, 'foo bar.')
})

test('crop don\'t truncates string at full words if string is shorter', t => {
  const parsed = string.crop('foo bar baz ban bar', 100)
  t.deepEqual(parsed, 'foo bar baz ban bar')
})

test('crop truncates string at full words', t => {
  var parsed = string.crop('foo bar baz ban bar', 10)
  t.deepEqual(parsed, 'foo bar...')

  parsed = string.crop('consectetur adipiscing elit. Suspendisse venenatis ultrices arcu ut fermentum', 70)
  t.deepEqual(parsed, 'consectetur adipiscing elit. Suspendisse venenatis ultrices arcu ut...')
})

test('hyphenate replaces spaces with hyphens and remove non-word chars', t => {
  const parsed = string.hyphenate('%# lorem ipsum  ? $  dolor')
  t.deepEqual(parsed, 'lorem-ipsum-dolor')
})

test('hyphenate replaces spaces with hyphens, split camelCase text and convert to lower case', t => {
  const parsed = string.hyphenate('loremIpsum')
  t.deepEqual(parsed, 'lorem-ipsum')
})

test('slugify convert to lower case, remove non-word chars and replace spaces with the delimeter', t => {
  const parsed = string.slugify('loremIpsum dolor special chars')
  t.deepEqual(parsed, 'loremipsum-dolor-special-chars')
})

test('slugify convert to lower case, remove non-word chars and replace spaces with the supplied delimeter', t => {
  const parsed = string.slugify('loremIpsum dolor special chars', '_')
  t.deepEqual(parsed, 'loremipsum_dolor_special_chars')
})

test('initials converts string to initials', t => {
  const parsed = string.initials('Foo Bar')
  t.deepEqual(parsed, 'FB')
})

test('initials converts string to initials joined by supplied string', t => {
  const parsed = string.initials('Foo Bar', ('.'))
  t.deepEqual(parsed, 'F.B')
})

test('initials converts string to initials joined by supplied string. "-" act as space', t => {
  const parsed = string.initials('Foo Barin-Bar', ('.'))
  t.deepEqual(parsed, 'F.B.B')
})

test('initials converts strings to initials', t => {
  const parsed = string.initials(['foo bar', 'ban bar'], '.')
  t.deepEqual(parsed, ['F.B', 'B.B'])
})

test('htmlstrip returns text content of html tag', t => {
  const parsed = string.htmlstrip('<div>foo</div>')
  t.deepEqual(parsed, 'foo')
})

test('htmlstrip returns text content of html tag inside another', t => {
  const parsed = string.htmlstrip('<div><div>foo</div></div>')
  t.deepEqual(parsed, 'foo')
})

test('htmlstrip returns text content of html tags', t => {
  const parsed = string.htmlstrip('<div>foo<div>foo</div></div>')
  t.deepEqual(parsed, 'foofoo')
})

test('htmlstrip returns text content of html tag and text outside tag', t => {
  const parsed = string.htmlstrip('Hello <b><i>world!</i></b>')
  t.deepEqual(parsed, 'Hello world!')
})

test('htmlstrip returns text content of html tags, ingnoring attributes', t => {
  var parsed = string.htmlstrip('<a href="">lorem <strong>ipsum</strong></a>')
  t.deepEqual(parsed, 'lorem ipsum')

  parsed = string.htmlstrip('<article attr="foo \'bar\'">lorem</article> ipsum')
  t.deepEqual(parsed, 'lorem ipsum')

  parsed = string.htmlstrip('<a href="https://example.com">lorem ipsum</a>')
  t.deepEqual(parsed, 'lorem ipsum')
})

test('split should return an array', t => {
  var result = string.split('foo,bar,bazz', ',')
  t.deepEqual(result, ['foo', 'bar', 'bazz'])

  result = string.split('foo bar baz')
  t.deepEqual(result, ['foo bar baz'])
})

test('celsius should convert the temperature to the Celsius scale, celsius is default scale', t => {
  const result = string.celsius('25')
  t.deepEqual(result, '25°C')
})

test('celsius should convert the celsius temperature to the Celsius scale', t => {
  const result = string.celsius('25°C')
  t.deepEqual(result, '25°C')
})

test('celsius should convert the fahrenheit temperature to the Celsius scale', t => {
  var result = string.celsius('0°F')
  t.deepEqual(result, '-18°C')

  result = string.celsius('70°F')
  t.deepEqual(result, '21°C')
})

test('celsius should convert the negative fahrenheit temperature to the Celsius scale', t => {
  const result = string.celsius('-10°F')
  t.deepEqual(result, '-23°C')
})

test('celsius should convert the kelvin temperature to the Celsius scale', t => {
  var result = string.celsius('0K')
  t.deepEqual(result, '-273°C')

  result = string.celsius('300K')
  t.deepEqual(result, '27°C')
})

test('fahrenheit should convert the temperature to the Fahrenheit scale. fahrenheit is the default scale', t => {
  const result = string.fahrenheit('50')
  t.deepEqual(result, '50°F')
})

test('fahrenheit should convert the fahrenheit temperature to the Fahrenheit scale', t => {
  const result = string.fahrenheit('50°F')
  t.deepEqual(result, '50°F')
})

test('fahrenheit should convert the celsius temperature to the Fahrenheit scale', t => {
  var result = string.fahrenheit('30°C')
  t.deepEqual(result, '86°F')

  result = string.fahrenheit('10°C')
  t.deepEqual(result, '50°F')
})

test('fahrenheit should convert the negative celsius temperature to the Fahrenheit scale', t => {
  const result = string.fahrenheit('-20.21°C')
  t.deepEqual(result, '-4°F')
})

test('fahrenheit should convert the kelvin temperature to the Fahrenheit scale', t => {
  var result = string.fahrenheit('1K')
  t.deepEqual(result, '-458°F')

  result = string.fahrenheit('300K')
  t.deepEqual(result, '80°F')

  result = string.fahrenheit('100K')
  t.deepEqual(result, '-280°F')
})

test('kelvin should convert the temperature to the Kelvin scale. Kelvin is the default', t => {
  const result = string.kelvin('100')
  t.deepEqual(result, '100K')
})

test('kelvin should convert the kelvin temperature to the Kelvin scale', t => {
  const result = string.kelvin('100K')
  t.deepEqual(result, '100K')
})

test('kelvin should convert the celsius temperature to the Kelvin scale', t => {
  const result = string.kelvin('26°C')
  t.deepEqual(result, '299K')
})

test('kelvin should convert the negative celsius temperature to the Kelvin scale', t => {
  const result = string.kelvin('-10°C')
  t.deepEqual(result, '263K')
})

test('kelvin should convert the fahrenheit temperature to the Kelvin scale', t => {
  const result = string.kelvin('50°F')
  t.deepEqual(result, '283K')
})

test('kelvin should convert the negative fahrenheit temperature to the Kelvin scale', t => {
  const result = string.kelvin('-100°F')
  t.deepEqual(result, '200K')
})

test('ltrim should remove all white space characters from the beginning of the string', t => {
  const result = string.ltrim('   qwe')
  t.deepEqual(result, 'qwe')
})

test('ltrim should remove all white space characters only from the beginning of the string', t => {
  const result = string.ltrim('   qwe  ')
  t.deepEqual(result, 'qwe  ')
})

test('ltrim should remove all specified characters regardless of the order of occurrence from the beginning of the string', t => {
  const result = string.ltrim('-_-qwe-_-', '_-')
  t.deepEqual(result, 'qwe-_-')
})

test('rtrim should remove all white space characters from the end of the string', t => {
  const result = string.rtrim('qwe   ')
  t.deepEqual(result, 'qwe')
})

test('rtrim should remove all white space characters only from the end of the string', t => {
  const result = string.rtrim('  qwe   ')
  t.deepEqual(result, '  qwe')
})

test('rtrim should remove all specified characters regardless of the order of occurrence from the end of the string', t => {
  const result = string.rtrim('-_-qwe-_-', '_-')
  t.deepEqual(result, '-_-qwe')
})

test('uid generates a new id', assert => {
  assert.deepEqual(string.uid().length, 32)
})

test('uid can create ids with given length', assert => {
  assert.deepEqual(string.uid(5).length, 5)
})

import test from 'ava'
import { string } from '../..'

test('whitespacestrip should remove whitespace characters', t => {
  var parsed = string.whitespacestrip('\t1234 5678\n')
  t.deepEqual(parsed, '12345678')
})

test('whitespacestrip should remove whitespace characters', t => {
  var parsed = string.whitespacestrip('b  ar')
  t.deepEqual(parsed, 'bar')
})

test('leftPad should return the same string if no padding was provided', t => {
  var parsed = string.pad('hello')
  t.deepEqual(parsed, 'hello')
})

test('leftPad should pad the string with given characters', t => {
  var parsed = string.pad('hello world', '** ')
  t.deepEqual(parsed, '** hello world')
})

test('leftPad should pad given number with given characters', t => {
  var parsed = string.pad(42, '---- ')
  t.deepEqual(parsed, '---- 42')
})

test("leftPad shouldn't add padding to empty lines", t => {
  var parsed = string.pad('hello\n\nworld', '* ')
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

test("underscore shouldn't modify the string", t => {
  var parsed = string.underscore('foo')
  t.deepEqual(parsed, 'foo')
})

test("underscore shouldn't modify the string", t => {
  var parsed = string.underscore('foobar')
  t.deepEqual(parsed, 'foobar')
})

test("underscore shouldn't modify the string", t => {
  var parsed = string.underscore('foo_bar')
  t.deepEqual(parsed, 'foo_bar')
})

test("underscore shouldn't modify the string", t => {
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

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('cars')
  t.deepEqual(parsed, 'car')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('cars')
  t.deepEqual(parsed, 'car')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('dresses')
  t.deepEqual(parsed, 'dress')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('boxes')
  t.deepEqual(parsed, 'box')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('bushes')
  t.deepEqual(parsed, 'bush')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('buses')
  t.deepEqual(parsed, 'bus')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('watches')
  t.deepEqual(parsed, 'watch')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('bridges', 'e')
  t.deepEqual(parsed, 'bridge')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('prizes', 'e')
  t.deepEqual(parsed, 'prize')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('tomatoes')
  t.deepEqual(parsed, 'tomato')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('wives')
  t.deepEqual(parsed, 'wife')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('shelves', 'f')
  t.deepEqual(parsed, 'shelf')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('thieves', 'f')
  t.deepEqual(parsed, 'thief')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('cities')
  t.deepEqual(parsed, 'city')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('ladies')
  t.deepEqual(parsed, 'lady')
})

test("singularize returns singular form of a word in the string", t => {
  var parsed = string.singularize('toys')
  t.deepEqual(parsed, 'toy')
})

test("singularize returns singular form of a word in the string", t => {
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

test("swapcase converts uppercase to lowercase and lowercase to uppercase", t => {
  var parsed = string.swapcase('fOo Bar BAZ')
  t.deepEqual(parsed, 'FoO bAR baz')
})

test("camelize shouldn't modify the string", t => {
  var parsed = string.camelize('foo')
  t.deepEqual(parsed, 'foo')
})

test("camelize shouldn't modify the string", t => {
  var parsed = string.camelize('foobar')
  t.deepEqual(parsed, 'foobar')
})

test("camelize shouldn't modify the string", t => {
  var parsed = string.camelize('fooBar')
  t.deepEqual(parsed, 'fooBar')
})

test("camelize shouldn't modify the string", t => {
  var parsed = string.camelize(' foo')
  t.deepEqual(parsed, 'foo')
})

test("camelize should modify the string to lowerCamelCase by default", t => {
  var parsed = string.camelize('foo_bar')
  t.deepEqual(parsed, 'fooBar')
})

test("camelize should modify the string to lowerCamelCase by default", t => {
  var parsed = string.camelize('FooBar')
  t.deepEqual(parsed, 'fooBar')
})

test("camelize should modify the string to lowerCamelCase by default", t => {
  var parsed = string.camelize('FooBarbazBan')
  t.deepEqual(parsed, 'fooBarbazBan')
})

test("camelize should modify the string to lowerCamelCase by default", t => {
  var parsed = string.camelize('Foo')
  t.deepEqual(parsed, 'foo')
})

test("camelize should modify the string to lowerCamelCase by default", t => {
  var parsed = string.camelize('foo_bar_baz_ban_qux')
  t.deepEqual(parsed, 'fooBarBazBanQux')
})

test("camelize should modify the string to lowerCamelCase by default", t => {
  var parsed = string.camelize('foo-Bar')
  t.deepEqual(parsed, 'fooBar')
})

test("camelize should modify the string to lowerCamelCase by default", t => {
  var parsed = string.camelize('foo bar')
  t.deepEqual(parsed, 'fooBar')
})

test("camelize should modify the string to lowerCamelCase by default", t => {
  var parsed = string.camelize('Foo bar ban')
  t.deepEqual(parsed, 'fooBarBan')
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed", t => {
  var parsed = string.camelize('foo', true)
  t.deepEqual(parsed, 'Foo')
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed", t => {
  var parsed = string.camelize('foobar', true)
  t.deepEqual(parsed, 'Foobar')
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed", t => {
  var parsed = string.camelize('fooBar', true)
  t.deepEqual(parsed, 'FooBar')
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed", t => {
  var parsed = string.camelize(' foo', true)
  t.deepEqual(parsed, 'Foo')
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed", t => {
  var parsed = string.camelize('Foo_bar', true)
  t.deepEqual(parsed, 'FooBar')
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed", t => {
  var parsed = string.camelize('foo_bar_baz_ban_qux', true)
  t.deepEqual(parsed, 'FooBarBazBanQux')
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed", t => {
  var parsed = string.camelize('Foo bar ban', true)
  t.deepEqual(parsed, 'FooBarBan')
})

test("constantize should modify the string to the string in CONST_CONVENTION", t => {
  var parsed = string.constantize('foo')
  t.deepEqual(parsed, 'FOO')
})

test("constantize should modify the string to the string in CONST_CONVENTION", t => {
  var parsed = string.constantize('foobar')
  t.deepEqual(parsed, 'FOOBAR')
})

test("constantize should modify the string to the string in CONST_CONVENTION", t => {
  var parsed = string.constantize('fooBar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test("constantize should modify the string to the string in CONST_CONVENTION", t => {
  var parsed = string.constantize('foo_bar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test("constantize should modify the string to the string in CONST_CONVENTION", t => {
  var parsed = string.constantize('Foo_Bar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test("constantize should modify the string to the string in CONST_CONVENTION", t => {
  var parsed = string.constantize('FooBar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test("constantize should modify the string to the string in CONST_CONVENTION", t => {
  var parsed = string.constantize('foo-bar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test("constantize should modify the string to the string in CONST_CONVENTION", t => {
  var parsed = string.constantize('foo-bar_baz')
  t.deepEqual(parsed, 'FOO_BAR_BAZ')
})

test("constantize should modify the string to the string in CONST_CONVENTION", t => {
  var parsed = string.constantize('FooBarBazQux')
  t.deepEqual(parsed, 'FOO_BAR_BAZ_QUX')
})

test("constantize should modify the string to the string in CONST_CONVENTION", t => {
  var parsed = string.constantize('foo   bar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test("truncate should truncate the string if it's longer than the given maximum string length", t => {
  var parsed = string.truncate('Once upon a time in a world far far away')
  t.deepEqual(parsed, 'Once upon a time in a world...')
})

test("truncate should truncate the string if it's longer than the given maximum string length", t => {
  var parsed = string.truncate('Once upon a time in a world far far away', 17)
  t.deepEqual(parsed, 'Once upon a ti...')
})

test("lowerfirst should lowercase first character of string", t => {
  var parsed = string.lowerfirst('Foo')
  t.deepEqual(parsed, 'foo')
})

test("lowerfirst should lowercase first character of string", t => {
  var parsed = string.lowerfirst('Foo bar baz')
  t.deepEqual(parsed, 'foo bar baz')
})

test("unescape should convert the HTML entities in string to their corresponding characters", t => {
  var parsed = string.unescape('&amp;')
  t.deepEqual(parsed, '&')
})

test("unescape should convert the HTML entities in string to their corresponding characters", t => {
  var parsed = string.unescape('&lt;script&gt;alert("foo")&lt;/script&gt;')
  t.deepEqual(parsed, '<script>alert("foo")</script>')
})

test("repeat should return new string which contains the specified number of copies of the string", t => {
  var parsed = string.repeat('foo', 2)
  t.deepEqual(parsed, 'foofoo')
})

test("singlespace should return new string which contains singlespace", t => {
  var parsed = string.singlespace('foo     bar   baz')
  t.deepEqual(parsed, 'foo bar baz')
})

test("quote return a string inside quotes", t => {
  var parsed = string.quote('foo bar baz')
  t.deepEqual(parsed, `„foo bar baz”`)
})

test("quote return a string inside quotes", t => {
  var parsed = string.quote('foo bar baz', 'en')
  t.deepEqual(parsed, '"foo bar baz"')
})

test("unquote removes quotes from string", t => {
  var parsed = string.unquote('„foo bar baz”')
  t.deepEqual(parsed, `foo bar baz`)
})

test("unquote removes quotes from string", t => {
  var parsed = string.unquote('"foo bar baz"')
  t.deepEqual(parsed, 'foo bar baz')
})

test("squeeze return a string with removed double characters", t => {
  var parsed = string.squeeze('foo')
  t.deepEqual(parsed, 'fo')
})

test("squeeze return a string with removed double characters", t => {
  var parsed = string.squeeze('yellow moon')
  t.deepEqual(parsed, 'yelow mon')
})

test("squeeze return a string with removed double characters", t => {
  var parsed = string.squeeze('fooo    bar')
  t.deepEqual(parsed, 'fo bar')
})

test("squeeze return a string with removed double characters", t => {
  var parsed = string.squeeze('putters shoot balls')
  t.deepEqual(parsed, 'puters shot bals')
})

test("squeeze return a string with removed double characters", t => {
  var parsed = string.squeeze('yellow moon', 'o')
  t.deepEqual(parsed, 'yellow mon')
})

test("squeeze return a string with removed double characters", t => {
  var parsed = string.squeeze('putters shoot balls', 'm-z')
  t.deepEqual(parsed, 'puters shot balls')
})

test("summarize return a string with dots if string length is longer or equal 100", t => {
  var parsed = string.summarize(`
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

test("summarize return a string with dots if string length is longer or equal x", t => {
  var parsed = string.summarize('foo bar baz ban', 10)
  t.deepEqual(parsed.substr(parsed.length - 3), '...')
})

test("wrap, insert string between passed character", t => {
  var parsed = string.wrap('foo bar baz ban', '"')
  t.deepEqual(parsed, '"foo bar baz ban"')
})

test("wrap, insert string between passed character", t => {
  var parsed = string.wrap('foo bar baz', '„' ,'”')
  t.deepEqual(parsed, '„foo bar baz”')
})

test("wrap, insert string between passed character", t => {
  var parsed = string.wrap('foo bar baz', '(' ,')')
  t.deepEqual(parsed, '(foo bar baz)')
})

test("unwrap, removed starting and ending character", t => {
  var parsed = string.unwrap('"foo bar baz ban"', '"')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test("unwrap, removed starting and ending character", t => {
  var parsed = string.unwrap('„foo bar baz”', '„' ,'”')
  t.deepEqual(parsed, 'foo bar baz')
})

test("unwrap, removed starting and ending character", t => {
  var parsed = string.unwrap('(foo bar baz)', '(' ,')')
  t.deepEqual(parsed, 'foo bar baz')
})

test('strip should remove whitespace in left and right', t => {
  var parsed = string.strip(' foo ')
  t.deepEqual(parsed, 'foo')
})

test('strip should remove from string passed string', t => {
  var parsed = string.strip('foo bar baz ban', 'baz')
  t.deepEqual(parsed, 'foo bar ban')
})

test('strip should remove from string passed string', t => {
  var parsed = string.strip('foo bar', 'o')
  t.deepEqual(parsed, 'f bar')
})

test('strip should remove from string passed string', t => {
  var parsed = string.strip('foo bar baz ban', ['o', 'r', 'a'])
  t.deepEqual(parsed, 'f b bz bn')
})

test('replace should replace string characters with newString', t => {
  var parsed = string.replace('foo bar baz ban', 'baz', 'qux')
  t.deepEqual(parsed, 'foo bar qux ban')
})

test('index returns the index of the first occurence of the given substring', t => {
  var parsed = string.index('hello', 'e')
  t.deepEqual(parsed, 1)
})

test('index returns the index of the first occurence of the given substring', t => {
  var parsed = string.index('hello', 'lo')
  t.deepEqual(parsed, 3)
})

test('index returns the index of the first occurence of the given substring', t => {
  var parsed = string.index('hello', 'x')
  t.deepEqual(parsed, -1)
})

test('chop returns string with the last character removed', t => {
  var parsed = string.chop('')
  t.deepEqual(parsed, '')
})

test('chop returns string with the last character removed', t => {
  var parsed = string.chop('foo bar baz ban\r\n')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chop returns string with the last character removed', t => {
  var parsed = string.chop('foo bar baz ban\n\r')
  t.deepEqual(parsed, 'foo bar baz ban\n')
})

test('chop returns string with the last character removed', t => {
  var parsed = string.chop('foo bar baz ban\n')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chop returns string with the last character removed', t => {
  var parsed = string.chop('foo bar baz bar')
  t.deepEqual(parsed, 'foo bar baz ba')
})

test('chomp returns string with the given record separator removed from the end of string', t => {
  var parsed = string.chomp('foo bar')
  t.deepEqual(parsed, 'foo bar')
})

test('chomp returns string with the given record separator removed from the end of string', t => {
  var parsed = string.chomp('')
  t.deepEqual(parsed, '')
})

test('chomp returns string with the given record separator removed from the end of string', t => {
  var parsed = string.chomp('foo bar', 'ar')
  t.deepEqual(parsed, 'foo b')
})

test('chomp returns string with the given record separator removed from the end of string', t => {
  var parsed = string.chomp('foo bar', 'qux')
  t.deepEqual(parsed, 'foo bar')
})

test('chomp returns string with the given record separator removed from the end of string', t => {
  var parsed = string.chomp('foo bar baz ban\r\n')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chomp returns string with the given record separator removed from the end of string', t => {
  var parsed = string.chomp('foo bar baz ban\n\r')
  t.deepEqual(parsed, 'foo bar baz ban\n')
})

test('chomp returns string with the given record separator removed from the end of string', t => {
  var parsed = string.chomp('foo bar baz ban\n\r')
  t.deepEqual(parsed, 'foo bar baz ban\n')
})

test('chomp returns string with the given record separator removed from the end of string', t => {
  var parsed = string.chomp('foo bar baz ban\n')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chomp returns string with the given record separator removed from the end of string', t => {
  var parsed = string.chomp('foo bar baz ban\r')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chomp returns string with the given record separator removed from the end of string', t => {
  var parsed = string.chomp('foo\r\n\r\r\n')
  t.deepEqual(parsed, 'foo\r\n\r')
})

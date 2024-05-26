const test = require("ava")
const { string } = require("../..")

test("whitespacestrip should remove whitespace characters (t1)", (assert) => {
  const parsed = string.whitespacestrip("\t1234 5678\n")
  assert.deepEqual(parsed, "12345678")
})

test("whitespacestrip should remove whitespace characters (t2)", (assert) => {
  const parsed = string.whitespacestrip("b  ar")
  assert.deepEqual(parsed, "bar")
})

test("pad should return the same string if no padding was provided", (assert) => {
  const parsed = string.pad("hello")
  assert.deepEqual(parsed, "hello")
})

test("pad should add (n) whitespaces if pad is a number (t1)", (assert) => {
  const parsed = string.pad("hello world", 5)
  assert.deepEqual(parsed, "     hello world")
})

test("pad should add (n) whitespaces if pad is a number (t2)", (assert) => {
  const parsed = string.pad("hello world", 5, false)
  assert.deepEqual(parsed, "hello world     ")
})

test("pad should pad the string with given characters (t1)", (assert) => {
  const parsed = string.pad("hello world", "** ")
  assert.deepEqual(parsed, "** hello world")
})

test("pad should pad the string with given characters (t2)", (assert) => {
  const parsed = string.pad("3", "000", false)
  assert.deepEqual(parsed, "3000")
})

test("pad should pad given number with given characters (t1)", (assert) => {
  const parsed = string.pad(42, "---- ")
  assert.deepEqual(parsed, "---- 42")
})

test("pad should pad given number with given characters (t2)", (assert) => {
  const parsed = string.pad(42, " ----", false)
  assert.deepEqual(parsed, "42 ----")
})

test("pad shouldn't add padding to empty lines", (assert) => {
  const parsed = string.pad("hello\n\nworld", "* ")
  assert.deepEqual(parsed, "* hello\n\n* world")
})

test("trim should remove whitespace in left and right", (assert) => {
  const parsed = string.trim(" foo ")
  assert.deepEqual(parsed, "foo")
})

test("uppercase should convert string to uppercase (t1)", (assert) => {
  const parsed = string.uppercase("foo")
  assert.deepEqual(parsed, "FOO")
})

test("uppercase should convert string to uppercase (t2)", (assert) => {
  const parsed = string.uppercase("foo")
  assert.deepEqual(parsed, "FOO")
})

test("underscore shouldn't modify the string (t1)", (assert) => {
  const parsed = string.underscore("foo")
  assert.deepEqual(parsed, "foo")
})

test("underscore shouldn't modify the string (t2)", (assert) => {
  const parsed = string.underscore("foobar")
  assert.deepEqual(parsed, "foobar")
})

test("underscore shouldn't modify the string (t3)", (assert) => {
  const parsed = string.underscore("foo_bar")
  assert.deepEqual(parsed, "foo_bar")
})

test("underscore shouldn't modify the string (t4)", (assert) => {
  const parsed = string.underscore(" foo")
  assert.deepEqual(parsed, "foo")
})

test("underscore should convert string to lowerCase (t1)", (assert) => {
  const parsed = string.underscore("Foo")
  assert.deepEqual(parsed, "foo")
})

test("underscore should convert string to lowerCase (t2)", (assert) => {
  const parsed = string.underscore(" Foo ")
  assert.deepEqual(parsed, "foo")
})

test("underscore should add underscore between camelCase words (t1)", (assert) => {
  const parsed = string.underscore("fooBar")
  assert.deepEqual(parsed, "foo_bar")
})

test("underscore should add underscore between camelCase words (t2)", (assert) => {
  const parsed = string.underscore("fooBarBaz")
  assert.deepEqual(parsed, "foo_bar_baz")
})

test("underscore should add underscore between camelCase words (t3)", (assert) => {
  const parsed = string.underscore("fooBarBarBar")
  assert.deepEqual(parsed, "foo_bar_bar_bar")
})

test("underscore should add underscore between camelCase words (t4)", (assert) => {
  const parsed = string.underscore("fooBarBazBanQux")
  assert.deepEqual(parsed, "foo_bar_baz_ban_qux")
})

test("underscore should add underscore between spaced words (t1)", (assert) => {
  const parsed = string.underscore("foo bar")
  assert.deepEqual(parsed, "foo_bar")
})

test("underscore should add underscore between spaced words (t2)", (assert) => {
  const parsed = string.underscore("foo bar baz ban qux")
  assert.deepEqual(parsed, "foo_bar_baz_ban_qux")
})

test("underscore should add underscore between spaced words (t3)", (assert) => {
  const parsed = string.underscore("foo     bar baz")
  assert.deepEqual(parsed, "foo_bar_baz")
})

test("underscore should add underscore between spaced words (t4)", (assert) => {
  const parsed = string.underscore("foo     bar baz    qux")
  assert.deepEqual(parsed, "foo_bar_baz_qux")
})

test("underscore should add underscore between spaced words (t5)", (assert) => {
  const parsed = string.underscore("foo Bar")
  assert.deepEqual(parsed, "foo_bar")
})

test("underscore should add underscore between spaced words (t6)", (assert) => {
  const parsed = string.underscore("foo Bar Baq")
  assert.deepEqual(parsed, "foo_bar_baq")
})

test("underscore should add underscore between spaced words (t7)", (assert) => {
  const parsed = string.underscore("foo Bar      baq")
  assert.deepEqual(parsed, "foo_bar_baq")
})

test("underscore should add underscore between spaced words (t8)", (assert) => {
  const parsed = string.underscore("foo Bar      baq")
  assert.deepEqual(parsed, "foo_bar_baq")
})

test("underscore should add underscore between CapitalCase words (t1)", (assert) => {
  const parsed = string.underscore("FooBar")
  assert.deepEqual(parsed, "foo_bar")
})

test("underscore should add underscore between CapitalCase words (t2)", (assert) => {
  const parsed = string.underscore("FooBarBaz")
  assert.deepEqual(parsed, "foo_bar_baz")
})

test("underscore should add underscore between CapitalCase words (t3)", (assert) => {
  const parsed = string.underscore("FooBarBazQux")
  assert.deepEqual(parsed, "foo_bar_baz_qux")
})

test("underscore should add underscore between CapitalCase words (t4)", (assert) => {
  const parsed = string.underscore("FooBarBazQux")
  assert.deepEqual(parsed, "foo_bar_baz_qux")
})

test("underscore should add underscore between CapitalCase words (t5)", (assert) => {
  const parsed = string.underscore("FooBarBazQux bar")
  assert.deepEqual(parsed, "foo_bar_baz_qux_bar")
})

test("underscore should convert kebab-case to underscoreCase (t1)", (assert) => {
  const parsed = string.underscore("foo-bar")
  assert.deepEqual(parsed, "foo_bar")
})

test("underscore should convert kebab-case to underscoreCase (t2)", (assert) => {
  const parsed = string.underscore("foo-bar-baz")
  assert.deepEqual(parsed, "foo_bar_baz")
})

test("underscore should convert kebab-case to underscoreCase (t3)", (assert) => {
  const parsed = string.underscore("foo-BAR-baz")
  assert.deepEqual(parsed, "foo_bar_baz")
})

test("underscore should convert kebab-case to underscoreCase (t4)", (assert) => {
  const parsed = string.underscore("foo-BaR-baz")
  assert.deepEqual(parsed, "foo_ba_r_baz")
})

test("underscore should convert kebab-case to underscoreCase (t5)", (assert) => {
  const parsed = string.underscore("Bar-baz-baN")
  assert.deepEqual(parsed, "bar_baz_ba_n")
})

test("underscore should convert string containing numbers to underscoreCase (t1)", (assert) => {
  const parsed = string.underscore("foo11")
  assert.deepEqual(parsed, "foo_11")
})

test("underscore should convert string containing numbers to underscoreCase (t2)", (assert) => {
  const parsed = string.underscore("foo1o11")
  assert.deepEqual(parsed, "foo_1_o_11")
})

test("underscore should convert string containing numbers to underscoreCase (t3)", (assert) => {
  const parsed = string.underscore("fo_o1o11")
  assert.deepEqual(parsed, "fo_o_1_o_11")
})

test("underscore should convert string containing numbers to underscoreCase (t4)", (assert) => {
  const parsed = string.underscore("1bar")
  assert.deepEqual(parsed, "1_bar")
})

test("underscore should convert string containing numbers to underscoreCase (t5)", (assert) => {
  const parsed = string.underscore("1barBan-baz")
  assert.deepEqual(parsed, "1_bar_ban_baz")
})

test("underscore should convert string containing numbers to underscoreCase (t6)", (assert) => {
  const parsed = string.underscore("00")
  assert.deepEqual(parsed, "00")
})

test("capitalize should capitalize first character of string (t1)", (assert) => {
  const parsed = string.capitalize("foo")
  assert.deepEqual(parsed, "Foo")
})

test("capitalize should capitalize first character of string (t2)", (assert) => {
  const parsed = string.capitalize("foo bar and baz")
  assert.deepEqual(parsed, "Foo bar and baz")
})

test("lowerCase should convert each character to lowerCase", (assert) => {
  const parsed = string.lowercase("Foo BAR and baZ")
  assert.deepEqual(parsed, "foo bar and baz")
})

test("humanize should capitalize first word", (assert) => {
  const parsed = string.humanize("foo bar")
  assert.deepEqual(parsed, "Foo bar")
})

test("humanize should capitalize first word and replace underscores to spaces (t1)", (assert) => {
  const parsed = string.humanize("foo_bar")
  assert.deepEqual(parsed, "Foo bar")
})

test("humanize should capitalize first word and replace underscores to spaces (t2)", (assert) => {
  const parsed = string.humanize("foo_bar. Baz qux _and_qux")
  assert.deepEqual(parsed, "Foo bar. Baz qux  and qux")
})

test("humanize shouldn't capitalize first word and should replace underscores to spaces", (assert) => {
  const parsed = string.humanize("foo_bar. Baz qux _and_qux", false)
  assert.deepEqual(parsed, "foo bar. Baz qux  and qux")
})

test("titleize should capitalize all the words (t1)", (assert) => {
  const parsed = string.titleize("foo bar")
  assert.deepEqual(parsed, "Foo Bar")
})

test("titleize should capitalize all the words (t2)", (assert) => {
  const parsed = string.titleize("foo, bar, baz and qux")
  assert.deepEqual(parsed, "Foo, Bar, Baz And Qux")
})

test("dasherize replaces underscores with dashes in the string (t1)", (assert) => {
  const parsed = string.dasherize("foo_bar")
  assert.deepEqual(parsed, "foo-bar")
})

test("dasherize replaces underscores with dashes in the string (t2)", (assert) => {
  const parsed = string.dasherize("foo_bar__baz")
  assert.deepEqual(parsed, "foo-bar--baz")
})

test("classify creates a class name from a plural (t1)", (assert) => {
  const parsed = string.classify("foos")
  assert.deepEqual(parsed, "Foo")
})

test("classify creates a class name from a plural (t2)", (assert) => {
  const parsed = string.classify("fooBars")
  assert.deepEqual(parsed, "FooBar")
})

test("classify creates a class name from a plural (t3)", (assert) => {
  const parsed = string.classify("fooBar")
  assert.deepEqual(parsed, "FooBar")
})

test("pluralize returns the plural form of the word in the string (t1)", (assert) => {
  const parsed = string.pluralize("car")
  assert.deepEqual(parsed, "cars")
})

test("pluralize returns the plural form of the word in the string (t2)", (assert) => {
  const parsed = string.pluralize("dress")
  assert.deepEqual(parsed, "dresses")
})

test("pluralize returns the plural form of the word in the string (t3)", (assert) => {
  const parsed = string.pluralize("box")
  assert.deepEqual(parsed, "boxes")
})

test("pluralize returns the plural form of the word in the string (t4)", (assert) => {
  const parsed = string.pluralize("bush")
  assert.deepEqual(parsed, "bushes")
})

test("pluralize returns the plural form of the word in the string (t5)", (assert) => {
  const parsed = string.pluralize("bus")
  assert.deepEqual(parsed, "buses")
})

test("pluralize returns the plural form of the word in the string (t6)", (assert) => {
  const parsed = string.pluralize("watch")
  assert.deepEqual(parsed, "watches")
})

test("pluralize returns the plural form of the word in the string (t7)", (assert) => {
  const parsed = string.pluralize("bridge")
  assert.deepEqual(parsed, "bridges")
})

test("pluralize returns the plural form of the word in the string (t8)", (assert) => {
  const parsed = string.pluralize("prize")
  assert.deepEqual(parsed, "prizes")
})

test("pluralize returns the plural form of the word in the string (t9)", (assert) => {
  const parsed = string.pluralize("tomato")
  assert.deepEqual(parsed, "tomatoes")
})

test("pluralize returns the plural form of the word in the string (t10)", (assert) => {
  const parsed = string.pluralize("wife")
  assert.deepEqual(parsed, "wives")
})

test("pluralize returns the plural form of the word in the string (t11)", (assert) => {
  const parsed = string.pluralize("shelf")
  assert.deepEqual(parsed, "shelves")
})

test("pluralize returns the plural form of the word in the string (t12)", (assert) => {
  const parsed = string.pluralize("lady")
  assert.deepEqual(parsed, "ladies")
})

test("pluralize returns the plural form of the word in the string (t13)", (assert) => {
  const parsed = string.pluralize("city")
  assert.deepEqual(parsed, "cities")
})

test("pluralize returns the plural form of the word in the string (t14)", (assert) => {
  const parsed = string.pluralize("toy")
  assert.deepEqual(parsed, "toys")
})

test("pluralize returns the plural form of the word in the string (t15)", (assert) => {
  const parsed = string.pluralize("ad")
  assert.deepEqual(parsed, "ads")
})

test("singularize returns singular form of a word in the string (t1)", (assert) => {
  const parsed = string.singularize("cars")
  assert.deepEqual(parsed, "car")
})

test("singularize returns singular form of a word in the string (t2)", (assert) => {
  const parsed = string.singularize("cars")
  assert.deepEqual(parsed, "car")
})

test("singularize returns singular form of a word in the string (t3)", (assert) => {
  const parsed = string.singularize("dresses")
  assert.deepEqual(parsed, "dress")
})

test("singularize returns singular form of a word in the string (t4)", (assert) => {
  const parsed = string.singularize("boxes")
  assert.deepEqual(parsed, "box")
})

test("singularize returns singular form of a word in the string (t5)", (assert) => {
  const parsed = string.singularize("bushes")
  assert.deepEqual(parsed, "bush")
})

test("singularize returns singular form of a word in the string (t6)", (assert) => {
  const parsed = string.singularize("buses")
  assert.deepEqual(parsed, "bus")
})

test("singularize returns singular form of a word in the string (t7)", (assert) => {
  const parsed = string.singularize("watches")
  assert.deepEqual(parsed, "watch")
})

test("singularize returns singular form of a word in the string (t8)", (assert) => {
  const parsed = string.singularize("bridges", "e")
  assert.deepEqual(parsed, "bridge")
})

test("singularize returns singular form of a word in the string (t9)", (assert) => {
  const parsed = string.singularize("prizes", "e")
  assert.deepEqual(parsed, "prize")
})

test("singularize returns singular form of a word in the string (t10)", (assert) => {
  const parsed = string.singularize("tomatoes")
  assert.deepEqual(parsed, "tomato")
})

test("singularize returns singular form of a word in the string (t11)", (assert) => {
  const parsed = string.singularize("wives")
  assert.deepEqual(parsed, "wife")
})

test("singularize returns singular form of a word in the string (t12)", (assert) => {
  const parsed = string.singularize("shelves", "f")
  assert.deepEqual(parsed, "shelf")
})

test("singularize returns singular form of a word in the string (t13)", (assert) => {
  const parsed = string.singularize("thieves", "f")
  assert.deepEqual(parsed, "thief")
})

test("singularize returns singular form of a word in the string (t14)", (assert) => {
  const parsed = string.singularize("cities")
  assert.deepEqual(parsed, "city")
})

test("singularize returns singular form of a word in the string (t15)", (assert) => {
  const parsed = string.singularize("ladies")
  assert.deepEqual(parsed, "lady")
})

test("singularize returns singular form of a word in the string (t16)", (assert) => {
  const parsed = string.singularize("toys")
  assert.deepEqual(parsed, "toy")
})

test("singularize returns singular form of a word in the string (t17)", (assert) => {
  const parsed = string.singularize("ads")
  assert.deepEqual(parsed, "ad")
})

test("swapcase converts uppercase to lowercase and lowercase to uppercase (t1)", (assert) => {
  const parsed = string.swapcase("foo")
  assert.deepEqual(parsed, "FOO")
})

test("swapcase converts uppercase to lowercase and lowercase to uppercase (t2)", (assert) => {
  const parsed = string.swapcase("FOO")
  assert.deepEqual(parsed, "foo")
})

test("swapcase converts uppercase to lowercase and lowercase to uppercase (t3)", (assert) => {
  const parsed = string.swapcase("fOo Bar BAZ")
  assert.deepEqual(parsed, "FoO bAR baz")
})

test("swapcase converts uppercase to lowercase and lowercase to uppercase (t4)", (assert) => {
  const parsed = string.swapcase("fOo Bar BAZ")
  assert.deepEqual(parsed, "FoO bAR baz")
})

test("camelize shouldn't modify the string (t1)", (assert) => {
  const parsed = string.camelize("foo")
  assert.deepEqual(parsed, "foo")
})

test("camelize shouldn't modify the string (t2)", (assert) => {
  const parsed = string.camelize("foobar")
  assert.deepEqual(parsed, "foobar")
})

test("camelize shouldn't modify the string (t3)", (assert) => {
  const parsed = string.camelize("fooBar")
  assert.deepEqual(parsed, "fooBar")
})

test("camelize shouldn't modify the string (t4)", (assert) => {
  const parsed = string.camelize(" foo")
  assert.deepEqual(parsed, "foo")
})

test("camelize should modify the string to lowerCamelCase by default (t1)", (assert) => {
  const parsed = string.camelize("foo_bar")
  assert.deepEqual(parsed, "fooBar")
})

test("camelize should modify the string to lowerCamelCase by default (t2)", (assert) => {
  const parsed = string.camelize("FooBar")
  assert.deepEqual(parsed, "fooBar")
})

test("camelize should modify the string to lowerCamelCase by default (t3)", (assert) => {
  const parsed = string.camelize("FooBarbazBan")
  assert.deepEqual(parsed, "fooBarbazBan")
})

test("camelize should modify the string to lowerCamelCase by default (t4)", (assert) => {
  const parsed = string.camelize("Foo")
  assert.deepEqual(parsed, "foo")
})

test("camelize should modify the string to lowerCamelCase by default (t5)", (assert) => {
  const parsed = string.camelize("foo_bar_baz_ban_qux")
  assert.deepEqual(parsed, "fooBarBazBanQux")
})

test("camelize should modify the string to lowerCamelCase by default (t6)", (assert) => {
  const parsed = string.camelize("foo-Bar")
  assert.deepEqual(parsed, "fooBar")
})

test("camelize should modify the string to lowerCamelCase by default (t7)", (assert) => {
  const parsed = string.camelize("foo bar")
  assert.deepEqual(parsed, "fooBar")
})

test("camelize should modify the string to lowerCamelCase by default (t8)", (assert) => {
  const parsed = string.camelize("Foo bar ban")
  assert.deepEqual(parsed, "fooBarBan")
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed (t1)", (assert) => {
  const parsed = string.camelize("foo", true)
  assert.deepEqual(parsed, "Foo")
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed (t2)", (assert) => {
  const parsed = string.camelize("foobar", true)
  assert.deepEqual(parsed, "Foobar")
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed (t3)", (assert) => {
  const parsed = string.camelize("fooBar", true)
  assert.deepEqual(parsed, "FooBar")
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed (t4)", (assert) => {
  const parsed = string.camelize(" foo", true)
  assert.deepEqual(parsed, "Foo")
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed (t5)", (assert) => {
  const parsed = string.camelize("Foo_bar", true)
  assert.deepEqual(parsed, "FooBar")
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed (t6)", (assert) => {
  const parsed = string.camelize("foo_bar_baz_ban_qux", true)
  assert.deepEqual(parsed, "FooBarBazBanQux")
})

test("camelize should modify the string to UpperCamelCase if proper flag has been passed (t7)", (assert) => {
  const parsed = string.camelize("Foo bar ban", true)
  assert.deepEqual(parsed, "FooBarBan")
})

test("constantize should modify the string to the string in CONST_CONVENTION (t1)", (assert) => {
  const parsed = string.constantize("foo")
  assert.deepEqual(parsed, "FOO")
})

test("constantize should modify the string to the string in CONST_CONVENTION (t2)", (assert) => {
  const parsed = string.constantize("foobar")
  assert.deepEqual(parsed, "FOOBAR")
})

test("constantize should modify the string to the string in CONST_CONVENTION (t3)", (assert) => {
  const parsed = string.constantize("fooBar")
  assert.deepEqual(parsed, "FOO_BAR")
})

test("constantize should modify the string to the string in CONST_CONVENTION (t4)", (assert) => {
  const parsed = string.constantize("foo_bar")
  assert.deepEqual(parsed, "FOO_BAR")
})

test("constantize should modify the string to the string in CONST_CONVENTION (t5)", (assert) => {
  const parsed = string.constantize("Foo_Bar")
  assert.deepEqual(parsed, "FOO_BAR")
})

test("constantize should modify the string to the string in CONST_CONVENTION (t6)", (assert) => {
  const parsed = string.constantize("FooBar")
  assert.deepEqual(parsed, "FOO_BAR")
})

test("constantize should modify the string to the string in CONST_CONVENTION (t7)", (assert) => {
  const parsed = string.constantize("foo-bar")
  assert.deepEqual(parsed, "FOO_BAR")
})

test("constantize should modify the string to the string in CONST_CONVENTION (t8)", (assert) => {
  const parsed = string.constantize("foo-bar_baz")
  assert.deepEqual(parsed, "FOO_BAR_BAZ")
})

test("constantize should modify the string to the string in CONST_CONVENTION (t9)", (assert) => {
  const parsed = string.constantize("FooBarBazQux")
  assert.deepEqual(parsed, "FOO_BAR_BAZ_QUX")
})

test("constantize should modify the string to the string in CONST_CONVENTION (t10)", (assert) => {
  const parsed = string.constantize("foo   bar")
  assert.deepEqual(parsed, "FOO_BAR")
})

test("truncate should truncate the string if it's longer than the given maximum string length (t1)", (assert) => {
  const parsed = string.truncate("Once upon a time in a world far far away")
  assert.deepEqual(parsed, "Once upon a time in a world...")
})

test("truncate should truncate the string if it's longer than the given maximum string length (t2)", (assert) => {
  const parsed = string.truncate("Once upon a time in a world far far away", 17)
  assert.deepEqual(parsed, "Once upon a ti...")
})

test("tail removes an initial substring with length consisting of the difference and prepends a prefix", (assert) => {
  const parsed = string.tail("Once upon a time in a world far far away", 15)
  assert.deepEqual(parsed, "...far far away")
})

test("lowerfirst should lowercase first character of string (t1)", (assert) => {
  const parsed = string.lowerfirst("Foo")
  assert.deepEqual(parsed, "foo")
})

test("lowerfirst should lowercase first character of string (t2)", (assert) => {
  const parsed = string.lowerfirst("Foo bar baz")
  assert.deepEqual(parsed, "foo bar baz")
})

test("unescape should convert the HTML entities in string to their corresponding characters (t1)", (assert) => {
  const parsed = string.unescape("&amp;")
  assert.deepEqual(parsed, "&")
})

test("unescape should convert the HTML entities in string to their corresponding characters (t2)", (assert) => {
  const parsed = string.unescape('&lt;script&gt;alert("foo")&lt;/script&gt;')
  assert.deepEqual(parsed, '<script>alert("foo")</script>')
})

test("repeat should return new string which contains the specified number of copies of the string", (assert) => {
  const parsed = string.repeat("foo", 2)
  assert.deepEqual(parsed, "foofoo")
})

test("singlespace should return new string which contains singlespace", (assert) => {
  const parsed = string.singlespace("foo     bar   baz")
  assert.deepEqual(parsed, "foo bar baz")
})

test("quote return a string inside quotes (t1)", (assert) => {
  const parsed = string.quote("foo bar baz")
  assert.deepEqual(parsed, '"foo bar baz"')
})

test("quote return a string inside quotes (t2)", (assert) => {
  const parsed = string.quote("foo bar baz", "en")
  assert.deepEqual(parsed, '"foo bar baz"')
})

test("quote return a string inside quotes (t3)", (assert) => {
  const parsed = string.quote("foo bar baz", "pl")
  assert.deepEqual(parsed, "„foo bar baz”")
})

test("unquote removes quotes from string (t1)", (assert) => {
  const parsed = string.unquote("„foo bar baz”")
  assert.deepEqual(parsed, "foo bar baz")
})

test("unquote removes quotes from string (t2)", (assert) => {
  const parsed = string.unquote('"foo bar baz"')
  assert.deepEqual(parsed, "foo bar baz")
})

test("squeeze return a string with removed double characters (t1)", (assert) => {
  const parsed = string.squeeze("foo")
  assert.deepEqual(parsed, "fo")
})

test("squeeze return a string with removed double characters (t2)", (assert) => {
  const parsed = string.squeeze("yellow moon")
  assert.deepEqual(parsed, "yelow mon")
})

test("squeeze return a string with removed double characters (t3)", (assert) => {
  const parsed = string.squeeze("fooo    bar")
  assert.deepEqual(parsed, "fo bar")
})

test("squeeze return a string with removed double characters (t4)", (assert) => {
  const parsed = string.squeeze("putters shoot balls")
  assert.deepEqual(parsed, "puters shot bals")
})

test("squeeze return a string with removed double characters (t5)", (assert) => {
  const parsed = string.squeeze("yellow moon", "o")
  assert.deepEqual(parsed, "yellow mon")
})

test("squeeze return a string with removed double characters (t6)", (assert) => {
  const parsed = string.squeeze("putters shoot balls", "m-z")
  assert.deepEqual(parsed, "puters shot balls")
})

test("summarize return a string with dots if string length is longer or equal 100", (assert) => {
  const parsed = string.summarize(`
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Suspendisse venenatis ultrices arcu ut fermentum.
    Aenean non nibh sed augue gravida ultricies. Fusce dapibus libero vitae diam malesuada dictum.
    Curabitur congue venenatis ante, non congue tortor lobortis in. Sed hendrerit egestas eleifend.
    Nullam non accumsan augue. Maecenas sed tellus diam. Maecenas et dui auctor, elementum sapien in, fermentum nisi.
    Etiam in tempus libero, non finibus dui. Nunc vulputate mauris odio, quis vehicula dui malesuada eu.
    Etiam a justo quis nisl viverra finibus convallis in lorem. Sed eu massa consequat, venenatis mi at, lobortis lectus.
    Nulla euismod mattis justo id consequat. Proin`)
  assert.deepEqual(parsed.substr(parsed.length - 3), "...")
})

test("summarize return a string with dots if string length is longer or equal x", (assert) => {
  const parsed = string.summarize("foo bar baz ban", 10)
  assert.deepEqual(parsed.substr(parsed.length - 3), "...")
})

test("wrap, insert string between passed character (t1)", (assert) => {
  const parsed = string.wrap("foo bar baz ban", '"')
  assert.deepEqual(parsed, '"foo bar baz ban"')
})

test("wrap, insert string between passed character (t2)", (assert) => {
  const parsed = string.wrap("foo bar baz", "„", "”")
  assert.deepEqual(parsed, "„foo bar baz”")
})

test("wrap, insert string between passed character (t3)", (assert) => {
  const parsed = string.wrap("foo bar baz", "(", ")")
  assert.deepEqual(parsed, "(foo bar baz)")
})

test("unwrap, removed starting and ending character (t1)", (assert) => {
  const parsed = string.unwrap('"foo bar baz ban"', '"')
  assert.deepEqual(parsed, "foo bar baz ban")
})

test("unwrap, removed starting and ending character (t2)", (assert) => {
  const parsed = string.unwrap("„foo bar baz”", "„", "”")
  assert.deepEqual(parsed, "foo bar baz")
})

test("unwrap, removed starting and ending character (t3)", (assert) => {
  const parsed = string.unwrap("(foo bar baz)", "(", ")")
  assert.deepEqual(parsed, "foo bar baz")
})

test("strip should remove whitespace in left and right", (assert) => {
  const parsed = string.strip(" foo ")
  assert.deepEqual(parsed, "foo")
})

test("strip should remove from string passed string (t1)", (assert) => {
  const parsed = string.strip("foo bar baz ban", "baz")
  assert.deepEqual(parsed, "foo bar ban")
})

test("strip should remove from string passed string (t2)", (assert) => {
  const parsed = string.strip("foo bar", "o")
  assert.deepEqual(parsed, "f bar")
})

test("strip should remove from string passed string (t3)", (assert) => {
  const parsed = string.strip("foo bar baz ban", ["o", "r", "a"])
  assert.deepEqual(parsed, "f b bz bn")
})

test("replace should replace string characters with newString", (assert) => {
  const parsed = string.replace("foo bar baz ban", "baz", "qux")
  assert.deepEqual(parsed, "foo bar qux ban")
})

test("index returns the index of the first occurence of the given substring (t1)", (assert) => {
  const parsed = string.index("hello", "e")
  assert.deepEqual(parsed, 1)
})

test("index returns the index of the first occurence of the given substring (t2)", (assert) => {
  const parsed = string.index("hello", "lo")
  assert.deepEqual(parsed, 3)
})

test("index returns the index of the first occurence of the given substring (t3)", (assert) => {
  const parsed = string.index("hello", "x")
  assert.deepEqual(parsed, -1)
})

test("chop returns string with the last character removed (t1)", (assert) => {
  const parsed = string.chop("")
  assert.deepEqual(parsed, "")
})

test("chop returns string with the last character removed (t2)", (assert) => {
  const parsed = string.chop("foo bar baz ban\r\n")
  assert.deepEqual(parsed, "foo bar baz ban")
})

test("chop returns string with the last character removed (t3)", (assert) => {
  const parsed = string.chop("foo bar baz ban\n\r")
  assert.deepEqual(parsed, "foo bar baz ban\n")
})

test("chop returns string with the last character removed (t4)", (assert) => {
  const parsed = string.chop("foo bar baz ban\n")
  assert.deepEqual(parsed, "foo bar baz ban")
})

test("chop returns string with the last character removed (t5)", (assert) => {
  const parsed = string.chop("foo bar baz bar")
  assert.deepEqual(parsed, "foo bar baz ba")
})

test("chomp returns string with the given record separator removed from the end of string (t1)", (assert) => {
  const parsed = string.chomp("foo bar")
  assert.deepEqual(parsed, "foo bar")
})

test("chomp returns string with the given record separator removed from the end of string (t2)", (assert) => {
  const parsed = string.chomp("")
  assert.deepEqual(parsed, "")
})

test("chomp returns string with the given record separator removed from the end of string (t3)", (assert) => {
  const parsed = string.chomp("foo bar", "ar")
  assert.deepEqual(parsed, "foo b")
})

test("chomp returns string with the given record separator removed from the end of string (t4)", (assert) => {
  const parsed = string.chomp("foo bar", "qux")
  assert.deepEqual(parsed, "foo bar")
})

test("chomp returns string with the given record separator removed from the end of string (t5)", (assert) => {
  const parsed = string.chomp("foo bar baz ban\r\n")
  assert.deepEqual(parsed, "foo bar baz ban")
})

test("chomp returns string with the given record separator removed from the end of string (t6)", (assert) => {
  const parsed = string.chomp("foo bar baz ban\n\r")
  assert.deepEqual(parsed, "foo bar baz ban\n")
})

test("chomp returns string with the given record separator removed from the end of string (t7)", (assert) => {
  const parsed = string.chomp("foo bar baz ban\n\r")
  assert.deepEqual(parsed, "foo bar baz ban\n")
})

test("chomp returns string with the given record separator removed from the end of string (t8)", (assert) => {
  const parsed = string.chomp("foo bar baz ban\n")
  assert.deepEqual(parsed, "foo bar baz ban")
})

test("chomp returns string with the given record separator removed from the end of string (t9)", (assert) => {
  const parsed = string.chomp("foo bar baz ban\r")
  assert.deepEqual(parsed, "foo bar baz ban")
})

test("chomp returns string with the given record separator removed from the end of string (t10)", (assert) => {
  const parsed = string.chomp("foo\r\n\r\r\n")
  assert.deepEqual(parsed, "foo\r\n\r")
})

test('dot returns string with "." at the end of the string (t1)', (assert) => {
  const parsed = string.dot("")
  assert.deepEqual(parsed, ".")
})

test('dot returns string with "." at the end of the string (t2)', (assert) => {
  const parsed = string.dot("foo bar")
  assert.deepEqual(parsed, "foo bar.")
})

test('dot returns string with "." at the end of the string (t3)', (assert) => {
  const parsed = string.dot("foo bar.")
  assert.deepEqual(parsed, "foo bar.")
})

test("crop truncates string at full words (t1)", (assert) => {
  const parsed = string.crop("foo bar baz ban bar", 100)
  assert.deepEqual(parsed, "foo bar baz ban bar")
})

test("crop truncates string at full words (t2)", (assert) => {
  const parsed = string.crop("foo bar baz ban bar", 10)
  assert.deepEqual(parsed, "foo bar...")
})

test("crop truncates string at full words (t3)", (assert) => {
  const parsed = string.crop(
    "consectetur adipiscing elit. Suspendisse venenatis ultrices arcu ut fermentum",
    70
  )
  assert.deepEqual(
    parsed,
    "consectetur adipiscing elit. Suspendisse venenatis ultrices arcu ut..."
  )
})

test("hyphenate replaces spaces with hyphens, split camelCase text, remove non-word chars and convert to lower case (t1)", (assert) => {
  const parsed = string.hyphenate("%# lorem ipsum  ? $  dolor")
  assert.deepEqual(parsed, "lorem-ipsum-dolor")
})

test("hyphenate replaces spaces with hyphens, split camelCase text, remove non-word chars and convert to lower case (t2)", (assert) => {
  const parsed = string.hyphenate("loremIpsum")
  assert.deepEqual(parsed, "lorem-ipsum")
})

test("slugify convert to lower case, remove non-word chars and replace spaces with the delimeter (t1)", (assert) => {
  const parsed = string.slugify("loremIpsum dolor special chars")
  assert.deepEqual(parsed, "loremipsum-dolor-special-chars")
})

test("slugify convert to lower case, remove non-word chars and replace spaces with the delimeter (t2)", (assert) => {
  const parsed = string.slugify("loremIpsum dolor special chars", "_")
  assert.deepEqual(parsed, "loremipsum_dolor_special_chars")
})

test("initials converts string to initials (t1)", (assert) => {
  const parsed = string.initials("Foo Bar")
  assert.deepEqual(parsed, "FB")
})

test("initials converts string to initials (t2)", (assert) => {
  const parsed = string.initials("Foo Bar", ".")
  assert.deepEqual(parsed, "F.B")
})

test("initials converts string to initials (t3)", (assert) => {
  const parsed = string.initials("Foo Barin-Bar", ".")
  assert.deepEqual(parsed, "F.B.B")
})

test("initials converts string to initials (t4)", (assert) => {
  const parsed = string.initials(["foo bar", "ban bar"], ".")
  assert.deepEqual(parsed, ["F.B", "B.B"])
})

test("htmlstrip returns text content of html tags (t1)", (assert) => {
  const parsed = string.htmlstrip("<div>foo</div>")
  assert.deepEqual(parsed, "foo")
})

test("htmlstrip returns text content of html tags (t2)", (assert) => {
  const parsed = string.htmlstrip("<div><div>foo</div></div>")
  assert.deepEqual(parsed, "foo")
})

test("htmlstrip returns text content of html tags (t3)", (assert) => {
  const parsed = string.htmlstrip("<div>foo<div>foo</div></div>")
  assert.deepEqual(parsed, "foofoo")
})

test("htmlstrip returns text content of html tags (t4)", (assert) => {
  const parsed = string.htmlstrip("Hello <b><i>world!</i></b>")
  assert.deepEqual(parsed, "Hello world!")
})

test("htmlstrip returns text content of html tags (t5)", (assert) => {
  const parsed = string.htmlstrip('<a href="">lorem <strong>ipsum</strong></a>')
  assert.deepEqual(parsed, "lorem ipsum")
})

test("htmlstrip returns text content of html tags (t6)", (assert) => {
  const parsed = string.htmlstrip(
    "<article attr=\"foo 'bar'\">lorem</article> ipsum"
  )
  assert.deepEqual(parsed, "lorem ipsum")
})

test("htmlstrip returns text content of html tags (t7)", (assert) => {
  const parsed = string.htmlstrip(
    '<a href="https://example.com">lorem ipsum</a>'
  )
  assert.deepEqual(parsed, "lorem ipsum")
})

test("split should return an array (t1)", (assert) => {
  const result = string.split("foo,bar,bazz", ",")
  assert.deepEqual(result, ["foo", "bar", "bazz"])
})

test("split should return an array (t2)", (assert) => {
  const result = string.split("foo bar baz")
  assert.deepEqual(result, ["foo bar baz"])
})

test("celsius should convert the temperature to the Celsius scale (t1)", (assert) => {
  const result = string.celsius("25")
  assert.deepEqual(result, "25°C")
})

test("celsius should convert the temperature to the Celsius scale (t2)", (assert) => {
  const result = string.celsius("25°C")
  assert.deepEqual(result, "25°C")
})

test("celsius should convert the temperature to the Celsius scale (t3)", (assert) => {
  const result = string.celsius("0°F")
  assert.deepEqual(result, "-18°C")
})

test("celsius should convert the temperature to the Celsius scale (t4)", (assert) => {
  const result = string.celsius("70°F")
  assert.deepEqual(result, "21°C")
})

test("celsius should convert the temperature to the Celsius scale (t5)", (assert) => {
  const result = string.celsius("70°F")
  assert.deepEqual(result, "21°C")
})

test("celsius should convert the temperature to the Celsius scale (t6)", (assert) => {
  const result = string.celsius("-10°F")
  assert.deepEqual(result, "-23°C")
})

test("celsius should convert the temperature to the Celsius scale (t7)", (assert) => {
  const result = string.celsius("0K")
  assert.deepEqual(result, "-273°C")
})

test("celsius should convert the temperature to the Celsius scale (t8)", (assert) => {
  const result = string.celsius("300K")
  assert.deepEqual(result, "27°C")
})

test("fahrenheit should convert the temperature to the Fahrenheit scale (t1)", (assert) => {
  const result = string.fahrenheit("50")
  assert.deepEqual(result, "50°F")
})

test("fahrenheit should convert the temperature to the Fahrenheit scale (t2)", (assert) => {
  const result = string.fahrenheit("50°F")
  assert.deepEqual(result, "50°F")
})

test("fahrenheit should convert the temperature to the Fahrenheit scale (t3)", (assert) => {
  const result = string.fahrenheit("30°C")
  assert.deepEqual(result, "86°F")
})

test("fahrenheit should convert the temperature to the Fahrenheit scale (t4)", (assert) => {
  const result = string.fahrenheit("10°C")
  assert.deepEqual(result, "50°F")
})

test("fahrenheit should convert the temperature to the Fahrenheit scale (t5)", (assert) => {
  const result = string.fahrenheit("-20.21°C")
  assert.deepEqual(result, "-4°F")
})

test("fahrenheit should convert the temperature to the Fahrenheit scale (t6)", (assert) => {
  const result = string.fahrenheit("1K")
  assert.deepEqual(result, "-458°F")
})

test("fahrenheit should convert the temperature to the Fahrenheit scale (t7)", (assert) => {
  const result = string.fahrenheit("300K")
  assert.deepEqual(result, "80°F")
})

test("fahrenheit should convert the temperature to the Fahrenheit scale (t8)", (assert) => {
  const result = string.fahrenheit("100K")
  assert.deepEqual(result, "-280°F")
})

test("kelvin should convert the temperature to the Kelvin scale (t1)", (assert) => {
  const result = string.kelvin("100")
  assert.deepEqual(result, "100K")
})

test("kelvin should convert the temperature to the Kelvin scale (t2)", (assert) => {
  const result = string.kelvin("100K")
  assert.deepEqual(result, "100K")
})

test("kelvin should convert the temperature to the Kelvin scale (t3)", (assert) => {
  const result = string.kelvin("26°C")
  assert.deepEqual(result, "299K")
})

test("kelvin should convert the temperature to the Kelvin scale (t4)", (assert) => {
  const result = string.kelvin("-10°C")
  assert.deepEqual(result, "263K")
})

test("kelvin should convert the temperature to the Kelvin scale (t5)", (assert) => {
  const result = string.kelvin("50°F")
  assert.deepEqual(result, "283K")
})

test("kelvin should convert the temperature to the Kelvin scale (t6)", (assert) => {
  const result = string.kelvin("-100°F")
  assert.deepEqual(result, "200K")
})

test("ltrim should remove all white space characters from the beginning of the string", (assert) => {
  const result = string.ltrim("   qwe")
  assert.deepEqual(result, "qwe")
})

test("ltrim should remove all white space characters only from the beginning of the string", (assert) => {
  const result = string.ltrim("   qwe  ")
  assert.deepEqual(result, "qwe  ")
})

test("ltrim should remove all specified characters regardless of the order of occurrence from the beginning of the string", (assert) => {
  const result = string.ltrim("-_-qwe-_-", "_-")
  assert.deepEqual(result, "qwe-_-")
})

test("rtrim should remove all white space characters from the end of the string", (assert) => {
  const result = string.rtrim("qwe   ")
  assert.deepEqual(result, "qwe")
})

test("rtrim should remove all white space characters only from the end of the string", (assert) => {
  const result = string.rtrim("  qwe   ")
  assert.deepEqual(result, "  qwe")
})

test("rtrim should remove all specified characters regardless of the order of occurrence from the end of the string", (assert) => {
  const result = string.rtrim("-_-qwe-_-", "_-")
  assert.deepEqual(result, "-_-qwe")
})

test("uid generates a new id", (assert) => {
  assert.deepEqual(string.uid().length, 32)
})

test("uid can create ids with given length", (assert) => {
  assert.deepEqual(string.uid(5).length, 5)
})

test("bytes should convert the string with specific unit to bytes", (assert) => {
  assert.deepEqual(string.bytes("1B"), 1)
  assert.deepEqual(string.bytes("2B"), 2)
  assert.deepEqual(string.bytes("1KB"), 1024)
  assert.deepEqual(string.bytes("2KB"), 2048)
  assert.deepEqual(string.bytes("400KB"), 409600)
  assert.deepEqual(string.bytes("2GB"), 2147483648)
  assert.deepEqual(string.bytes("2TB"), 2199023255552)
  assert.deepEqual(string.bytes("2PB"), 2251799813685248)
  assert.deepEqual(string.bytes("2EB"), 2305843009213694000)
  assert.deepEqual(string.bytes("2ZB"), 2.3611832414348226e21)
  assert.deepEqual(string.bytes("2YB"), 2.4178516392292583e24)
  assert.deepEqual(string.bytes("20YB"), 2.4178516392292583e25)
  assert.deepEqual(string.bytes("200YB"), 2.4178516392292583e26)
})

# pure-utilities

[![Codeship](https://img.shields.io/codeship/d0a4ca60-9ed5-0135-eb8d-5e3172fc544d.svg)]()

A set of pure utility methods.

## Installation

`npm install pure-utilities`

## Usage

```javascript
import { flatten } from 'pure-utilities/object'
flatten({ hello: { world: '1234' } }); // { 'hello.world': '1234' }
```

## Methods

### array

#### flatten

### object

#### isObject
#### isNull
#### isArray
#### isRegExp
#### isFunction
#### isArguments
#### isString
#### isNumber
#### isDate
#### isUndefined
#### extend
#### flatten
#### unflatten
#### rename
#### dig
#### pat

### string

#### pad
#### whitespaceless
#### dasherize
#### constantize
#### trim
#### uppercase
#### lowercase
#### underscore
#### reverse
#### capitalize
#### unescape
#### lowerfirst
#### humanize
#### titleize
#### classify
#### pluralize
#### singularize
#### swapcase
#### camelize
#### truncate

### date

#### toISOString

### json

#### prettify

### math

#### abs
#### acos
#### acosh
#### asin
#### asinh
#### atan
#### atan2
#### atanh
#### cbrt
#### ceil
#### cos
#### cosh
#### exp
#### floor
#### log
#### max
#### min
#### pow
#### random
#### round
#### sin
#### sinh
#### sqrt
#### tan
#### tanh
#### trunc

## Development

To see available commands run:

`npm run`

Lint:

`npm run lint`

Test:

`npm test`

Coverage:

`npm run coverage`

Build:

`npm run build`

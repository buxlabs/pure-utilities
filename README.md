# Utils

[![Codeship](https://img.shields.io/codeship/d0a4ca60-9ed5-0135-eb8d-5e3172fc544d.svg)]()

A set of utility methods reused exported as a UMD module. Methods can also be imported directly.

## Installation

`npm install @buxlabs/utils`

## Usage

### cjs

```javascript
const { flatten } = require('@buxlabs/utils/object');
flatten({ hello: { world: '1234' } }); // { 'hello.world': '1234' }
```

### es

```javascript
import { flatten } from '@buxlabs/utils/object'
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

#### leftPad
#### removeWhitespace

### date

#### toISOString

### json

#### prettify

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

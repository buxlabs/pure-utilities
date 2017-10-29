# Utils

A set of utility methods reused exported as a UMD module. Methods can also be imported directly.

## Installation

`npm install @buxlabs/utils`

- [x] 100% coverage

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

### string

#### leftPad
#### removeWhitespace

### date

#### toISOString

### json

#### prettify

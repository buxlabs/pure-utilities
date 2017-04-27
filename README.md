# Utils

## Installation

`npm install @buxlabs/utils`

- [x] 100% coverage

## Usage

```javascript
const object = require('@buxlabs/utils/lib/object');
object.flatten({ hello: { world: '1234' } }); // { 'hello.world': '1234' }
```

## Methods

### object utils

`const object = require('@buxlabs/utils/lib/object');`

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

### string utils

`const string = require('@buxlabs/utils/lib/string');`

#### lpad
#### removeWhitespace

### date utils

`const date = require('@buxlabs/utils/lib/date');`

#### toISOString

### json utils

`const json = require('@buxlabs/utils/lib/json');`

#### prettify

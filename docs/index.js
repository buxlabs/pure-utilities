const string = require('./string')
const array = require('./array')
const collection = require('./collection')
const date = require('./date')
const json = require('./json')
const math = require('./math')
const object = require('./object')

const documentation = Object.assign({}, string, array, collection, date, json, math, object)
module.exports = documentation

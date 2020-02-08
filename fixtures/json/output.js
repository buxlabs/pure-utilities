const input = require('./input')
const generate = require('../generate')
const json = require('../../json')

const fixtures = generate(json, input)
module.exports = fixtures

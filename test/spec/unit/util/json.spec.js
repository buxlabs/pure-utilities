"use strict";

const tap = require("tap");
const util = require("../../../../lib/util/json");

tap.test("prettify should format JSON string", function (t) {

    var parsed = util.prettify('{"hello":"world"}');
    t.equal(parsed, '{\n    "hello": "world"\n}');
    t.end();

});

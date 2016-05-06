"use strict";

const tap = require("tap");
const util = require("../../../../lib/util/string");

tap.test("removeWhitespace should remove whitespace characters", function (t) {

    var parsed = util.removeWhitespace("\t1234 5678\n");
    t.equal(parsed, "12345678");
    t.end();

});

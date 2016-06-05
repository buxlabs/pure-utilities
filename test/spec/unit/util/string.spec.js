"use strict";

const tap = require("tap");
const util = require("../../../../lib/util/string");

tap.test("removeWhitespace should remove whitespace characters", function (t) {

    var parsed = util.removeWhitespace("\t1234 5678\n");
    t.equal(parsed, "12345678");
    t.end();

});

tap.test("lpad should pad the string with given characters", function (t) {

    var parsed = util.lpad("hello world", "** ");
    t.equal(parsed, "** hello world");
    t.end();

});

tap.test("lpad should pad given number with given characters", function (t) {
    var parsed = util.lpad(42, "---- ");
    t.equal(parsed, "---- 42");
    t.end();
});


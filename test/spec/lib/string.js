import test from "ava";
import util from "../../../lib/string";

test("removeWhitespace should remove whitespace characters", t => {
    var parsed = util.removeWhitespace("\t1234 5678\n");
    t.deepEqual(parsed, "12345678");
});

test("lpad should return the same string if no padding was provided", t => {
    var parsed = util.lpad("hello");
    t.deepEqual(parsed, "hello");
});

test("lpad should pad the string with given characters", t => {
    var parsed = util.lpad("hello world", "** ");
    t.deepEqual(parsed, "** hello world");
});

test("lpad should pad given number with given characters", t => {
    var parsed = util.lpad(42, "---- ");
    t.deepEqual(parsed, "---- 42");
});

test("lpad shouldn't add padding to empty lines", t => {
    var parsed = util.lpad("hello\n\nworld", "* ");
    t.deepEqual(parsed, "* hello\n\n* world");
});

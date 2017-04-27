import test from "ava";
import util from "../../../lib/json";

test("prettify should format JSON string", t => {
    var parsed = util.prettify('{"hello":"world"}');
    t.deepEqual(parsed, '{\n    "hello": "world"\n}');
});

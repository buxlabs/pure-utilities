const test = require("node:test");
const assert = require("node:assert");
const { collection } = require("../..");

test("append called without any arguments should return untouched collection", () => {
  assert.deepEqual(collection.append("qwe"), "qwe");
});

test("append called with argument other than string or array should return empty collection", () => {
  assert.deepEqual(collection.append({}, "abc"), []);
});

test("append for string should add argument at the end of the string", () => {
  assert.deepEqual(collection.append("qwe", "abc"), "qweabc");
});

test("append for string should add many arguments at the end of the string", () => {
  assert.deepEqual(
    collection.append("qwe", "---", "___", "***"),
    "qwe---___***"
  );
});

test("append for array should add argument at the end of the array", () => {
  assert.deepEqual(collection.append(["qwe"], "abc"), ["qwe", "abc"]);
});

test("append for array should add many arguments at the end of the array", () => {
  assert.deepEqual(collection.append(["qwe"], "---", "___", "***"), [
    "qwe",
    "---",
    "___",
    "***",
  ]);
});

test("prepend called without any arguments should return untouched collection", () => {
  assert.deepEqual(collection.prepend("qwe"), "qwe");
});

test("prepend called with argument other than string or array should return empty collection", () => {
  assert.deepEqual(collection.prepend({}, "abc"), []);
});

test("prepend for string should add argument at the beginning of the string", () => {
  assert.deepEqual(collection.prepend("qwe", "abc"), "abcqwe");
});

test("prepend for string should add many arguments at the beginning of the string", () => {
  assert.deepEqual(
    collection.prepend("qwe", "---", "___", "***"),
    "---___***qwe"
  );
});

test("prepend for array should add argument at the beginning of the array", () => {
  assert.deepEqual(collection.prepend(["qwe"], "abc"), ["abc", "qwe"]);
});

test("prepend for array should add many arguments at the beginning of the array", () => {
  assert.deepEqual(collection.prepend(["qwe"], "---", "___", "***"), [
    "---",
    "___",
    "***",
    "qwe",
  ]);
});

test("size returns length of collection/array", () => {
  assert.deepEqual(collection.size([1, 2, 3, 4, 5]), 5);
});

test("size returns length of collection/string", () => {
  assert.deepEqual(collection.size("foobar"), 6);
});

test("size returns length of collection/object", () => {
  assert.deepEqual(collection.size({ a: 1, b: 2 }), 2);
});

test("size returns length of collection/set", () => {
  assert.deepEqual(collection.size(new Set([1, 2, 3, 4, 5])), 5);
});

test("reverse should reverse collection/string of letters", () => {
  const parsed = collection.reverse("foo");
  assert.deepEqual(parsed, "oof");
});

test("reverse should reverse collection/string of numbers", () => {
  const parsed = collection.reverse("12345");
  assert.deepEqual(parsed, "54321");
});

test("reverse should reverse collection/array of numbers", () => {
  const parsed = collection.reverse([1, 2, 3, 4]);
  assert.deepEqual(parsed, [4, 3, 2, 1]);
});

test("flatten an n-dimensional array", () => {
  assert.deepEqual(
    collection.flatten([1, [2], [[3, [4, [5]]]]]),
    [1, 2, 3, 4, 5]
  );
});

test("flatten shouldn`t change flat object", () => {
  const object1 = { orderAccepted: "Your order has been accepted" };
  const result = { orderAccepted: "Your order has been accepted" };
  assert.deepEqual(collection.flatten(object1), result);
});

test("flatten should flatten the object if it has 2 levels", () => {
  const object1 = { titles: { index: "Buxus - Plants, seedlings, producer" } };
  const result = { "titles.index": "Buxus - Plants, seedlings, producer" };
  assert.deepEqual(collection.flatten(object1), result);
});

test("flatten should flatten the object if it has 3 levels", () => {
  const object1 = {
    errors: {
      404: {
        title: "Page not found",
      },
    },
  };
  const result = {
    "errors.404.title": "Page not found",
  };
  assert.deepEqual(collection.flatten(object1), result);
});

test("flatten does not override the prototype", () => {
  const before = JSON.stringify({}.__proto__);
  assert.deepEqual({}.__proto__, {});
  const object = Object.create({ __proto__: { pollutedKey: "123" } });
  const result = { pollutedKey: "123" };
  assert.deepEqual(collection.flatten(object), result);
  const after = JSON.stringify({}.__proto__);
  assert.deepEqual(before, after);
});

test("unflatten shouldn`t change unflat object", () => {
  const result = { orderAccepted: "Your order has been accepted" };
  const object1 = { orderAccepted: "Your order has been accepted" };
  assert.deepEqual(collection.unflatten(object1), result);
});

test("unflatten should unflatten the object if it has 2 levels", () => {
  const object1 = { "titles.index": "Buxus - Plants, seedlings, producer" };
  const result = {
    titles: {
      index: "Buxus - Plants, seedlings, producer",
    },
  };
  assert.deepEqual(collection.unflatten(object1), result);
});

test("unflatten should unflatten the object if it has 3 levels", () => {
  const object1 = { "errors.404.title": "Page not found" };
  const result = {
    errors: {
      404: {
        title: "Page not found",
      },
    },
  };
  const unflattened = collection.unflatten(object1);
  assert.deepEqual(unflattened, result);
  assert(!Array.isArray(unflattened.errors));
});

test("unflatten does not override the prototype", () => {
  const before = JSON.stringify({}.__proto__);
  assert.deepEqual({}.__proto__, {});
  const object = { "__proto__.pollutedKey": "123" };
  const unflattened = collection.unflatten(object);
  assert.deepEqual(unflattened.__proto__.pollutedKey, "123");
  const after = JSON.stringify({}.__proto__);
  assert.deepEqual(before, after);
});

test("occurences should return the count of occurences of the string in the array", () => {
  assert.deepEqual(collection.occurences(["foo", "foo", "bar"], "foo"), 2);
  assert.deepEqual(collection.occurences(["foo", "foo", "bar"], "f"), 2);
  assert.deepEqual(collection.occurences(["foo", "foo", "bar"], "o"), 4);
});

test("occurences should return the count of occurences of the string in the string", () => {
  assert.deepEqual(collection.occurences("foo foo bar", "foo"), 2);
  assert.deepEqual(collection.occurences("foo\nfoo\nbar", "foo"), 2);
  assert.deepEqual(collection.occurences("foo\tfoo\tbar", "foo"), 2);
  assert.deepEqual(collection.occurences("foo\nfoo\tbar", "foo"), 2);
  assert.deepEqual(collection.occurences("foo\r\nfoo\tbar", "foo"), 2);
});

test("occurences should work with special characters", () => {
  assert.deepEqual(collection.occurences("!!oo", "!"), 2);
  assert.deepEqual(collection.occurences("!!foo", "!"), 2);
  assert.deepEqual(collection.occurences("!foo bar", "foo"), 1);
});

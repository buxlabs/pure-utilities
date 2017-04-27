import test from "ava";
import util from "../../../lib/object";

test("extend should be possible to extend two objects", t => {
    var object1 = {
        "hello": "world"
    };
    var object2 = {
        "world": "hello"
    };
    var result = {
        "hello": "world",
        "world": "hello"
    };
    t.deepEqual(util.extend(object1, object2), result);
});

test("extend should be possible to extend more than two objects", t => {
    var object1 = {
        "hello": "world"
    };
    var object2 = {
        "world": "hello"
    };
    var object3 = {
        "witaj": "świecie"
    };
    var object4 = {
        "świecie": "witaj"
    };
    var result = {
        "hello": "world",
        "world": "hello",
        "witaj": "świecie",
        "świecie": "witaj"
    };
    t.deepEqual(util.extend(object1, object2, object3, object4), result);
});

test("extend should be possible to extend deeply nested objects", t => {
    var object1 = {
        pushState: true,
        exceptions: {
            suppressError: false
        },
        root: '/'
    };
    var object2 = {
        order: {
            quantity: {
                minimum: 100
            }
        }
    };
    var result = {
        pushState: true,
        exceptions: {
            suppressError: false
        },
        root: '/',
        order: {
            quantity: {
                minimum: 100
            }
        }
    };
    t.deepEqual(util.extend(object1, object2), result);
});

test("extend should be possible to extend deeply nested objects with same keys", t => {
    var object1 = {
        rest: {
            login: "/rest/login"
        }
    };
    var object2 = {
        rest: {
            logout: "/rest/logout"
        }
    };
    var result = {
        rest: {
            login: "/rest/login",
            logout: "/rest/logout"
        }
    };
    t.deepEqual(util.extend(object1, object2), result);
});

test("extend should be possible to extend multiple deeply nested objects with same keys", t => {
    var object1 = {
        rest: {
            login: "/rest/login"
        }
    };
    var object2 = {
        rest: {
            logout: "/rest/logout"
        }
    };
    var object3 = {
        rest: {
            register: "/rest/register"
        }
    };
    var result = {
        rest: {
            login: "/rest/login",
            logout: "/rest/logout",
            register: "/rest/register"
        }
    };
    t.deepEqual(util.extend(object1, object2, object3), result);
});

test("extend should copy arrays", t => {
    var object1 = {
        extensions: ["jpg", "png"]
    };
    var object2 = {
        rest: {
            logout: "/rest/logout"
        }
    };
    var expected = {
        extensions: ["jpg", "png"],
        rest: {
            logout: "/rest/logout"
        }
    };
    var result = util.extend(object1, object2);
    t.deepEqual(result, expected);
    t.truthy(Array.isArray(result.extensions));
});

test("extend should copy regexps", t => {
    var object1 = {
        regexp: /\d/g
    };
    var object2 = {
        rest: {
            logout: "/rest/logout"
        }
    };
    var expected = {
        regexp: /\d/g,
        rest: {
            logout: "/rest/logout"
        }
    };
    var result = util.extend(object1, object2);
    t.deepEqual(result, expected);
});

test("isUndefined should return true if the value is undefined", t => {
    t.truthy(util.isUndefined(void 0));
});

test("flatten shouldn't change flat object", t => {
    var object = {
        "orderAccepted": "Your order has been accepted"
    };
    var result = {
        "orderAccepted": "Your order has been accepted"
    };
    t.deepEqual(util.flatten(object), result);
});

test("flatten should flatten the object if it has 2 levels", t => {
    var object = {
        "titles": {
            "index": "Buxus - Plants, seedlings, producer"
        }
    };
    var result = {
        "titles.index": "Buxus - Plants, seedlings, producer"
    };
    t.deepEqual(util.flatten(object), result);
});

test("flatten should flatten the object if it has 3 levels", t => {
    var object = {
        "errors": {
            "404": {
                "title": "Page not found"
            }
        }
    };
    var result = {
        "errors.404.title": "Page not found"
    };
    t.deepEqual(util.flatten(object), result);
});

test("unflatten shouldn't change unflat object", t => {
    var result = {
        "orderAccepted": "Your order has been accepted"
    };
    var object = {
        "orderAccepted": "Your order has been accepted"
    };
    t.deepEqual(util.unflatten(object), result);
});

test("unflatten should unflatten the object if it has 2 levels", t => {
    var object = {
        "titles.index": "Buxus - Plants, seedlings, producer"
    };
    var result = {
        "titles": {
            "index": "Buxus - Plants, seedlings, producer"
        }
    };
    t.deepEqual(util.unflatten(object), result);
});

test("unflatten should unflatten the object if it has 3 levels", t => {
    var object = {
        "errors.404.title": "Page not found"
    };
    var result = {
        "errors": {
            "404": {
                "title": "Page not found"
            }
        }
    };
    var unflattened = util.unflatten(object);
    t.deepEqual(unflattened, result);
    t.truthy(!Array.isArray(unflattened.errors));
});

test("rename should rename the keys in given object", t => {
    var object = {
        "created_at": "2000-01-01"
    };
    var keys = {
        "created_at": "createdAt"
    };
    var result = {
        "createdAt": "2000-01-01"
    };
    t.deepEqual(util.rename(object, keys), result);
});

test("rename should ignore object's properties without match", t => {
    var object = {
        "created_at": "2000-01-01",
        "title": "Hello world!"
    };
    var keys = {
        "created_at": "createdAt"
    };
    var result = {
        "createdAt": "2000-01-01",
        "title": "Hello world!"
    };
    t.deepEqual(util.rename(object, keys), result);
});

test("rename should ignore key's properties without match", t => {
    var object = {
        "created_at": "2000-01-01",
        "title": "Hello world!"
    };
    var keys = {
        "created_at": "createdAt",
        "updated_at": "updatedAt"
    };
    var result = {
        "createdAt": "2000-01-01",
        "title": "Hello world!"
    };
    t.deepEqual(util.rename(object, keys), result);
});

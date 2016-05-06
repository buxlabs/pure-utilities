"use strict";

const tap = require("tap");
const util = require("../../../../lib/util/object");

tap.test("flatten", function (t) {

    t.plan(3);

    t.test("shouldn't change flat object", function (t) {
        var object = {
            "orderAccepted": "Your order has been accepted"
        };
        var result = {
            "orderAccepted": "Your order has been accepted"
        };
        t.deepEqual(util.flatten(object), result);
        t.end()
    });

    t.test("should flatten the object if it has 2 levels", function (t) {
        var object = {
            "titles": {
                "index": "Buxus - Plants, seedlings, producer"
            }
        };
        var result = {
            "titles.index": "Buxus - Plants, seedlings, producer"
        };
        t.deepEqual(util.flatten(object), result);
        t.end()
    });

    t.test("should flatten the object if it has 3 levels", function (t) {
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
        t.end()
    });

});

tap.test("unflatten", function (t) {

    t.plan(3);

    t.test("shouldn't change unflat object", function (t) {
        var result = {
            "orderAccepted": "Your order has been accepted"
        };
        var object = {
            "orderAccepted": "Your order has been accepted"
        };
        t.deepEqual(util.unflatten(object), result);
        t.end()
    });

    t.test("should unflatten the object if it has 2 levels", function (t) {
        var object = {
            "titles.index": "Buxus - Plants, seedlings, producer"
        };
        var result = {
            "titles": {
                "index": "Buxus - Plants, seedlings, producer"
            }
        };
        t.deepEqual(util.unflatten(object), result);
        t.end()
    });

    t.test("should unflatten the object if it has 3 levels", function (t) {
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
        t.deepEqual(util.unflatten(object), result);
        t.end()
    });

});

tap.test("rename", function (t) {

    t.plan(3);

    t.test("should rename the keys in given object", function (t) {
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
        t.end()
    });

    t.test("should ignore object's properties without match", function (t) {
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
        t.end()
    });

    t.test("should ignore key's properties without match", function (t) {
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
        t.end()
    });

});

"use strict";

module.exports = {

    /**
     * 
     * extend
     *
     * returns a new object with fields from both objects
     *
     * example:
     *
     * input
     * { "hello": "world" }, { "world": "hello" }
     *
     * output
     * { "hello": "world", "world": "hello" }
     *
     */

    extend: function () {
        var result = {};
        for (var i = 0, ilen = arguments.length; i < ilen; i += 1) {
            var object = arguments[i];
            Object.keys(object).forEach(function (key) {
                result[key] = object[key];
            });
        }
        return result;
    },

    /**
     * 
     * flatten
     *
     * parse the object and change it structure so it has only 1 level
     *
     * example:
     *
     * input
     * { "page": { "404": "Not found" }}
     *
     * output
     * { "page.404": "Not found" }
     *
     */

    flatten: function (object) {
        var key, prefix, deep, result = {};
        for (key in object) {
            if (typeof object[key] === "object") {
                deep = this.flatten(object[key]);
                for (prefix in deep) {
                    result[key + "." + prefix] = deep[prefix];
                }
            } else {
                result[key] = object[key];
            }

        }
        return result;
    },

    /**
     * 
     * unflatten
     *
     * parse the object and change it structure so it has multiple levels
     *
     * example:
     *
     * input
     * { "page.404": "Not found" }
     *
     * output
     * { "page": { "404": "Not found" }}
     *
     */

    unflatten: function (object) {
        var result = {}, current, property, parts, key, i;
        for (key in object) {
            current = result, 
            property = "_";
            parts = key.split(".");
            for (i = 0; i < parts.length; i++) {
                current = current[property] || (current[property] = {});
                property = parts[i];
            }
            current[property] = object[key];
        }
        return result["_"];
    },

    /**
     * 
     * rename
     *
     * parse the object and change the names of the keys in the first level
     *
     * example:
     *
     * input
     * { "created_at": "2000-01-01" }, { "created_at": "createdAt" }
     *
     * output
     * { "createdAt": "2000-01-01" }
     *
     */

    rename: function (object, keys) {
        var key;
        for (key in keys) {
            if (keys.hasOwnProperty(key) && object.hasOwnProperty(key)) {
                object[keys[key]] = object[key];
                delete object[key];
            }
        }

        return object;

    }

};

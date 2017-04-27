"use strict";

module.exports = {

    /**
     * 
     * prettify
     *
     * prettifies json string
     *
     * example:
     *
     * input
     * '{ "hello": "world" }'
     *
     * output
     * '{\n    "hello": "world"\n}'
     *
     */

    prettify: function (string) {
        return JSON.stringify(JSON.parse(string), null, 4);
    }

};

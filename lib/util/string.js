"use strict";

module.exports = {


    /**
     * 
     * removeWhitespace
     *
     * removes whitespace from string
     *
     * example:
     *
     * input
     * '\t1234 5678\n'
     *
     * output
     * '12345678'
     *
     */

    removeWhitespace: function (string) {
        return string.replace(/\s/g, "");
    },

    /**
     * 
     * lpad
     *
     * adds left padding to a string
     *
     * example:
     *
     * input
     * 'hello world', '** '
     *
     * output
     * '** hello world'
     *
     */

    lpad: function (value, pad) {
        if (!pad) { return value; }
        return String(value).split(/\r\n|\n/).map(function (line) {
            return line ? pad + line : line;
        }).join("\n");
    }

};

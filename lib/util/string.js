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
    }

};

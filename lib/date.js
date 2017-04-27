"use strict";

module.exports = {

    /**
     * 
     * toISOString
     *
     * parse given keys and change them to iso8601 format
     *
     * example:
     *
     * input
     * "1460303444338"
     *
     * output
     * "2016-04-10T15:50:44.338Z"
     *
     */

    toISOString (value) {
        return new Date(parseInt(value, 10)).toISOString();
    }

};

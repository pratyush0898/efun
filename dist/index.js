"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import all utility functions
var arrayFuncs = require("../js/array");
var mathFuncs = require("../js/math");
var stringFuncs = require("../js/string");
// Merge all functions into a single object
var Efun = __assign(__assign(__assign({}, arrayFuncs), mathFuncs), stringFuncs);
// Export the Efun object
exports.default = Efun;

/*
 * Функции определители
 */
var objToString = require('./objToString'),
	__isArray = require('./inline').__isArray;

exports.Function = function isFunction(func) {
        return 'function' === typeof func;
};

exports.Object = function isObject(o) {
        return 'object' === typeof o && '[object Object]' === objToString(o);
};

exports.String = function isString(s) {
        return 'string' === typeof s || '[object String]' === objToString(s);
};

exports.Array = function isArray(a) {
        return __isArray(a);
};

exports.Date = function isDate(d) {
        return 'object' === typeof d && '[object Date]' === objToString(d);
};

exports.Undef = function isUndef(val) {
        return 'undefined' === typeof val;
};

exports.Number = function isNumber(val) {
        return 'number' === typeof val || 'object' === typeof val && '[object Number]' === objToString(val);
};
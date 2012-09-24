var inl = require('./inline.js'),
	__slice = inl.__slice,
	__toString = inl.__toString;

exports.argumentsToArray = function argumentsToArray(arg) {
	return __slice.call(arg);
};

exports.objToString = function objToString(obj) {
	return __toString.call(obj);
};

exports.isFunction = function isFunction (func) {
	return 'function' === typeof func;
};
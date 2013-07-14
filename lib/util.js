var inl = require('./inline.js'),
	isObject = require('./is').Object,
	objToString = require('./objToString'),
	__slice = inl.__slice;

//Exports
exports.argumentsToArray = argumentsToArray;
exports.merge = merge;
exports.deepMerge = deepMerge;
exports.objToString = objToString;

function argumentsToArray(arg) {
	return __slice.call(arg);
}

function merge(a, b) {
	var key;
	
	if (a && b) {
		for (key in b) {
			a[key] = b[key];
		}
	}

	return a;
}


function deepMerge(a, b) {
	if (!b) return a;
	a = a || {};

	for (var key in b) {
		if (isObject(b[key])) {
			a[key] = deepMerge(a[key], b[key]);
		} else {
			a[key] = b[key];
		}
	}

	return a;
}

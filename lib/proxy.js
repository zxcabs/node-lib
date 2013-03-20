var util = require('./util.js'),
	isFunction = require('./is.js').Function,
	merge = util.merge,
	argumentsToArray = util.argumentsToArray;

function wrap(name, fn, handler) {
	return function () {
		var arg = argumentsToArray(arguments);
		
		handler.call(null, name, arg, fn);
	};
}

module.exports = function proxy(obj, handler) {
	var keys = Object.keys(obj),
		key,
		prop,
		l,
		ret = {};
	
	l = keys.length;
	
	while (l--){
		key = keys[l];
		prop = obj[key];
		
		if (isFunction(prop)) {
			ret[key] = wrap(key, prop, handler);
		}
		
		merge(ret[key], proxy(prop, handler));
	}
	
	return ret;
};
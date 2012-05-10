var util = require('./util.js');

function wrap(name, obj, handler) {
	return function () {
		var arg = util.argumentsToArray(arguments);
		handler.call(obj, name, arg);
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
		
		if (util.isFunction(prop)) {
			ret[key] = wrap(key, ret, handler);
		}
	}
	
	return ret;
};
var util = require('./util.js');

function wrap(name, fn, handler) {
	return function () {
		var arg = util.argumentsToArray(arguments);
		
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
		
		if (util.isFunction(prop)) {
			ret[key] = wrap(key, prop, handler);
		}
		
		util.merge(ret[key], proxy(prop, handler));
	}
	
	return ret;
};
var proxy = require('../lib/proxy.js');

var obj = { 
	a: function (n) { 
		return 'A = ' + n;
	},
	b: function (n, c) {
		return 'B = ' + (n + c);
	}
};

function handler(name, arg) {
	console.log('Call: ' + name + '; arg: ' + arg + '; result: ' + obj[name].apply(obj, arg));
}

var p = proxy(obj, handler);

p.a(1);
p.b(2, 3);
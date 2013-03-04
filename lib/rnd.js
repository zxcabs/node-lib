/*
 * rnd - генераторы
 */
 
var random = Math.random;
 
var create = exports.create = function create(chStr, defLen) {
	var l, fn;
	
	chStr = chStr.split('');
	defLen = (!defLen || !defLen < 0) ? 10 : defLen;
	l = chStr.length;
	
	fn = function rnd(len) {
		var s;
		
		len = (!len || len < 0) ? defLen : len;
		s = new Array(len);
		
		while (len--) {
			s[len] = chStr[random() * l | 0];
		}
		
		return s.join('');
	};
	
	return fn;
};


var rndStr = exports.rndStr = create('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');
var rndInt = exports.rndInt = create('0123456789');
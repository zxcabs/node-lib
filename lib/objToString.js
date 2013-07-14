/**
 * User: Evgeny Reznichenko
 * Date: 14.07.13
 *
 */

var inl = require('./inline'),
	__toString = inl.__toString;

module.exports = objToString;

function objToString(obj) {
	return __toString.call(obj);
}
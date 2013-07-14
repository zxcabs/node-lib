/**
 * User: Evgeny Reznichenko
 * Date: 14.07.13
 *
 */

var should = require('should'),
	util = require('../lib/util');

/**
 * Test for util
 */
describe('util', function () {
    /**
     * Test for deepMerge
     */
    describe('#deepMerge', function () {

	    it('should be deepMerge', function () {
		    var a = {
				    foo: { bar: 1 },
				    baz: 2,
				    zoo: { doo: 4 }
			    },
			    b = { foo: { fooze: 3 }};

		    var ba = util.deepMerge(b, a);

		    ba.should.be.eql({ foo: { bar: 1, fooze: 3 }, baz: 2, zoo: { doo:4 }});
	    });
    });

});

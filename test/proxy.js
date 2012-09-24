var proxy = require('../lib/proxy.js'),
	obj = {
		foo: function () {
			return 'foo';
		},
		bar: function () {
			return 'bar';
		}
	};
	
obj.bar.baz = function () {
	return 'baz';
};

describe('proxy', function () {
	describe('#first lvl deeps', function () {
		it('should name === "foo"', function () {
			var p = proxy(obj, function (name, args) {
				name.should.equal('foo');
			});
			p.foo();
		});

		it('should name === "bar"', function () {
			var p = proxy(obj, function (name, args) {
				name.should.equal('bar');
			});
			p.bar();
		});
		
		it('should args === [1,2,3]', function () {
			var p = proxy(obj, function (name, args) {
				args.should.eql([1,2,3]);
			});
			p.bar(1,2,3);
		});
		
		it('should call bar() and return "bar"', function () {
			var p = proxy(obj, function (name, args, fn) {
				fn.call(null, args).should.eql('bar');
			});
			p.bar(1,2,3);
		});
	});
	
	describe('#second lvl deeps', function () {
		it('should name === "baz"', function () {
			var p = proxy(obj, function (name, args) {
				name.should.equal('baz');
			});
			p.bar.baz();
		});
	});
	
	describe('#second lvl deeps', function () {
		it('should call bar.baz() and return "baz"', function () {
			var p = proxy(obj, function (name, args, fn) {
				fn.call(null, args).should.eql('baz');
			});
			p.bar.baz();
		});
	});
});
MOCHA = ./node_modules/.bin/mocha

test:
	@NODE_ENV=test $(MOCHA) \
			-r should \
			-R spec
			
test-proxy:
	@NODE_ENV=test $(MOCHA) ./test/proxy.js\
			-r should \
			-R spec
			
test-rnd:
	@NODE_ENV=test $(MOCHA) ./test/rnd.js\
			-r should \
			-R spec

.PHONY: test test-proxy test-rnd
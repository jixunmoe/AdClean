COMPRESS=uglifyjs --compress --mangle --unsafe 

all: build-hosts build-scripts front-end

.PHONY: clean
clean:
	rm -rf out/*
	rm -rf www/assert/*.min.js

# Assert
%.min.js:
	$(COMPRESS) --output $@ $(basename $(basename $@)).js

# AdClean lib
%.js:
	$(COMPRESS) --output $@ src/$(notdir $@)

build-hosts:
	bash build-hosts.sh

build-scripts: out/adclean.js out/loader.js

front-end: www/assert/app.min.js
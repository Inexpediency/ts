.PHONY: build
build:
	npm i
	tsc

.PHONY: run
run:
	tsc && node $(file)

.DEFAULT_GOAL := setup
.PHONY: setup

setup: #build image
	docker build . -t "series-carousel-jh:v0.1"

serve: # serve preview
	docker run -p 3000:3000 series-carousel-jh:v0.1
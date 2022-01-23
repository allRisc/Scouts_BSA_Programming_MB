#####################################################################
# File : project_guide.mk
#
# Description :
#   This file contains the build script for the project guide PDF
#####################################################################

PROJECT_GUIDE_PDFS ?= Project_Guide.pdf

all : ${PROJECT_GUIDE_PDFS}

%.pdf : src/%.tex
	@mkdir -p build
	@cd build; latexmk -silent -pdf ../$< > /dev/null
	@mv build/$*.pdf $@
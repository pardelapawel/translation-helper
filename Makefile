FIRST_PAGE = syllabus_final.pdf
COURSES_SORTED = cprog ds la db stat ds101_fine mediapsy SocSoc philethics american medivalthought modernthought Pol101 GlobaInterRel eastasia powerstructure micro IntroEco compconst FutureEurope migration natlsec integeration IntroWestHistory ModernEuroArt ItalianHistory EuroSocCul NewEur frenchart RussianClub WesternCulture CommFren French1 french2 frenchconv1 German1 english2 english1 chinese writing uni lifesci movies swim contart music bible
#COURSES_SORTED = cprog ds la db 6001x_syllabus stat ds101_fine mediapsy SocSoc philethics american medivalthought modernthought Pol101 GlobaInterRel eastasia
#COURSES_SORTED = GlobaInterRel eastasia
LOG_FILE = make.logs

all: syllabus.all.pdf

ALL_HTMLS_READY = $(addprefix ready_to_pdf_htmls/, $(filter-out 6001x_syllabus.html, $(COURSES_SORTED:=.html)))
.PRECIOUS: $(addprefix ready_to_pdf_htmls/, $(COURSES_SORTED:=.html))
.PHONY: ready
ready: $(ALL_HTMLS_READY)

define html_prepared_and_json
ready_to_pdf_htmls/%.html: $(1)/%.prepared.html $(1)/%.json | ready_to_pdf_htmls
	@echo "\e[32m[$$*]\tcreating	'$$@'\e[0m" | tee -a $(LOG_FILE)
	python3 apply_mapping.py $$^ -o $$@ --add_colour >> $(LOG_FILE)
	@echo "\e[32m[$$*]\tcreated 	'$$@'\e[0m" | tee -a $(LOG_FILE)
	@echo "\e[32m-----\e[0m" | tee -a $(LOG_FILE)
endef

define knou_html_prepared_and_json
ready_to_pdf_htmls/%.html: $(1)/%.prepared.html $(1)/%.json | ready_to_pdf_htmls
	@echo "\e[32m[$$*]\tcreating	'$$@'\e[0m" | tee -a $(LOG_FILE)
	python3 apply_mapping.py $$^ -o $$@ >> $(LOG_FILE)
	@echo "\e[32m[$$*]\tcreated 	'$$@'\e[0m" | tee -a $(LOG_FILE)
	@echo "\e[32m-----\e[0m" | tee -a $(LOG_FILE)
endef

$(foreach name,$(COURSES_SORTED),$(eval $(call html_prepared_and_json,missingfiles,$(name))))
$(foreach name,$(COURSES_SORTED),$(eval $(call html_prepared_and_json,missingfiles/checked,$(name))))
$(foreach name,$(COURSES_SORTED),$(eval $(call html_prepared_and_json,done,$(name))))
$(foreach name,$(COURSES_SORTED),$(eval $(call knou_html_prepared_and_json,done/knou,$(name))))

#if the file already exists this should not be run!
#  that's why there's 'test' there, same for `.json`s
%.prepared.html: %.html
	@echo "\e[34m[`basename $*`]\tcreating	'$@'\e[0m" | tee -a $(LOG_FILE)
	test ! -f "$@"
	cp $< $@

%.json: %.html
	@echo "\e[36m[`basename $*`]\tcreating	'$@'\e[0m" | tee -a $(LOG_FILE)
	if test ! -f "$@"; then \
		python3 knou2json.py $< -o $@ >> $(LOG_FILE);\
	else \
		echo "\e[31mI refuse to recreate '$@'. It already exists\e[0m" | tee -a $(LOG_FILE);\
	fi


pdf/%.pdf: ready_to_pdf_htmls/%.html | pdf
	@echo "\e[36m[`basename $*`]\tcreating	'$@'\e[0m" | tee -a $(LOG_FILE)
	2>/dev/null weasyprint $< $@
	@echo "\e[35m[`basename $*`]\tcreated 	'$@'\e[0m" | tee -a $(LOG_FILE)
	@echo "\e[35m===========\e[0m" | tee -a $(LOG_FILE)

pdf/6001x_syllabus.pdf: missingfiles/6001x_syllabus.pdf
	cp $< $@

pdf ready_to_pdf_htmls:
	mkdir -p $@

syllabus.all.pdf: $(FIRST_PAGE) $(addprefix pdf/, $(COURSES_SORTED:=.pdf))
	2>/dev/null pdfunite $^ $@
	@echo Full syllabus was created here: '$@'

graph: Makefile.svg

Makefile.svg: Makefile
	$(MAKE) clean
	$(MAKE) -nd all | makefile2graph | perl -ne 'BEGIN{@nodes}if(/(n\d+).*"(pdf|dummy|ready_to_pdf_htmls)"/){push @nodes, $$1;$$regex=join "|", @nodes}print unless(@nodes and /($$regex)\b/)' | dot -Tsvg -Granksep=2 -o $@

index.html:
	echo '# Syllabus\n[PDF is here](syllabus.all.pdf)\n# Graph\n[Makefile.svg](Makefile.svg)\n# Build Log\n[$(LOG_FILE)]($(LOG_FILE))\n#Links\n' | markdown > $@
	echo $(ALL_HTMLS_READY) | tr ' ' '\n' | perl -ne 'chomp;print "[`$$_`]($$_)  \n"' | markdown >> $@
	echo $(ALL_HTMLS_READY) | tr ' ' '\n' | perl -ne 'chomp;print "# `$$_`\n <iframe width=\"100%\" height=\"100%\" src=\"./$$_\"></iframe>\n"' | markdown >>$@

.PHONY: clean
clean:
	rm -rf ready_to_pdf_htmls/ pdf/ $(LOG_FILE)

.PHONY: install_dependencies make2graph python_dependencies
install_dependencies: make2graph python_dependencies pdf_dependencies

make2graph:
	git clone https://github.com/lindenb/makefile2graph.git
	cd makefile2graph && make && sudo make install

python_dependencies:
	sudo apt-get install python3-setuptools
	python3 -m pip install --upgrade pip
	pip install -r requirements.txt
	sudo python3 -m pip install -r requirements.txt
	sudo python3 -m pip install weasyprint

pdf_dependencies:
	sudo apt-get install poppler-utils graphviz markdown

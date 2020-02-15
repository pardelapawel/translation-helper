

FIRST_PAGE = missingfiles/syllabus_list.pdf
COURSES_SORTED = cprog ds la db 6001x_syllabus stat ds101_fine mediapsy SocSoc philethics american medivalthought modernthought Pol101 GlobaInterRel eastasia powerstructure micro IntroEco compconst FutureEurope migration natlsec integeration IntroWestHistory ModernEuroArt ItalianHistory EuroSocCul NewEur frenchart RussianClub WesternCulture CommFren French1 french2 frenchconv1 German1 english2 english1 chinese writing uni lifesci movies swim contart music bible
#COURSES_SORTED = cprog ds la db 6001x_syllabus stat ds101_fine mediapsy SocSoc philethics american medivalthought modernthought Pol101 GlobaInterRel eastasia
#COURSES_SORTED = GlobaInterRel eastasia

.PRECIOUS: $(addprefix ready_to_pdf_htmls/, $(COURSES_SORTED:=.html))

all: syllabus.all.pdf

ready_to_pdf_htmls/%.html: missingfiles/%.prepared.html missingfiles/%.json |ready_to_pdf_htmls
	python3 apply_mapping.py $^ -o $@ --add_colour

ready_to_pdf_htmls/%.html: missingfiles/checked/%.prepared.html missingfiles/checked/%.json | ready_to_pdf_htmls
	python3 apply_mapping.py $^ -o $@ --add_colour

#These files don't have json, but they should have apply_mapping.py run on them
#  to fix text formatting in <pre>
ready_to_pdf_htmls/%.html: missingfiles/%.prepared.html nothing.js |dummy ready_to_pdf_htmls
	python3 apply_mapping.py $^ -o $@ --add_colour

ready_to_pdf_htmls/%.html: done/%.prepared.html done/%.json | ready_to_pdf_htmls
	python3 apply_mapping.py $^ -o $@ --add_colour

#knou shouldn't have colours added
ready_to_pdf_htmls/%.html: done/knou/%.html done/knou/%.json | ready_to_pdf_htmls
	python3 apply_mapping.py $^ -o $@

#These files don't have json, but they should have apply_mapping.py run on them
#  to fix text formatting in <pre>
ready_to_pdf_htmls/%.html: done/knou/%.html nothing.js |dummy ready_to_pdf_htmls
	python3 apply_mapping.py $^ -o $@

#This exists so the above rule will be matched with lowest priority
dummy:
	@:

nothing.js:
	echo '{}' > $@

pdf/%.pdf: ready_to_pdf_htmls/%.html | pdf
	2>/dev/null weasyprint $< $@

done/%.prepared.html: done/%.html                       ; cp $< $@
done/GlobaInterRel.json: nothing.js                     ; cp $< $@
done/IntroEco.json: nothing.js                          ; cp $< $@
done/IntroWestHistory.json: nothing.js                  ; cp $< $@
done/RussianClub.json: nothing.js                       ; cp $< $@
done/WesternCulture.json: nothing.js                    ; cp $< $@
done/CommFren.json: nothing.js                          ; cp $< $@
missingfiles/%.prepared.html: missingfiles/%.html       ; cp $< $@
pdf/6001x_syllabus.pdf: missingfiles/6001x_syllabus.pdf ; cp $< $@

pdf ready_to_pdf_htmls:
	mkdir $@

syllabus.all.pdf: $(FIRST_PAGE) $(addprefix pdf/, $(COURSES_SORTED:=.pdf))
	2>/dev/null pdfunite $^ $@
	@echo Full syllabus was created here: '$@'

graph: Makefile.svg

Makefile.svg: Makefile
	$(MAKE) clean
	$(MAKE) -nd all | makefile2graph | perl -ne 'BEGIN{@nodes}if(/(n\d+).*"(pdf|dummy|ready_to_pdf_htmls)"/){push @nodes, $$1;$$regex=join "|", @nodes}print unless(@nodes and /$$regex\b/)' | dot -Tsvg -o $@


.PHONY: clean
clean:
	rm -rf ready_to_pdf_htmls/ pdf/

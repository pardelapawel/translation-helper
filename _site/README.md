# What is it? :sparkles:

2 scripts that might help with translation of syllabus.

# Dependencies

only html parser:

```bash
pip3 install -r requirements.txt
```

# How to use

## Simple generation with Makefile

The below command will create the full syllabus

```
make clean all
```


## Prepare mapping with `preprocess_page.py`
This script creates 2 files:
- an html without markers (name is based on the input file)
- a json mapping
  - an html xpath as the key
  - text as the value

not every tag is saved to the mapping file - only the ones that have `Box` in the class name

Run the script like so:

```bash
$ python3 preprocess_page.py syllabus_page.html
HTML without GTranslate saved to 'syllabus_page.prepared.html'
Translation mapping was saved to 'syllabus_page.json'
```

or all pages at once:

```bash
$ python3 preprocess_page.py *.html
HTML without GTranslate saved to 'syllabus_page.prepared.html'
Translation mapping was saved to 'syllabus_page.json'
...
```

### For KNOU use `knou2json.py`

```bash
python3 knou2json.py incase2020/page.html
```

Produces a json that's compatible with the `apply_mapping.py` script


## Correct translation _(manual work)_

Open all the `.json` files and modify the values

## Put the corrections back into the page with `apply_mapping.py`

After running:

```bash
$ python3 apply_mapping.py syllabus_page.prepared.html syllabus_page.json
Modified 239 entries
Saved modified page to 'syllabus_page.prepared.modified.html'
```

please find the modified html file with the `modified html` extension in the same directory as the input file

If one wants to run the above in a loop (for all the files) one might consider:


### Batch json applying

```bash
dirpath=done
browser=chromium
for file in $dirpath/*.prepared.html; do name=$dirpath/$(basename $file | cut -d'.' -f1); echo "[$name]"; yesno="y"; while [[ $yesno =~ "^y" ]] ; do python3 apply_mapping.py $name.prepared.html $name.json || break && $browser $name.prepared.modified.html; python3 apply_mapping.py $name.prepared.html $name.json; read "yesno?regenerate '$name' again(y to regenerate) "; done; echo ;done
```

It works on my Ubuntu18.04 with zsh

#### Expected compatibility issues
- zsh vs bash
  - `read "var?question"` command should be changed `read -p "question" var`
- browser: I use `chromum`
  - if one uses a different browser, one might consider changing it to their preferred browser

### Repetitive replacements

If there are repetitive replacements to be done, one may consider using the `always_replace.py` module.

The funciton takes a `key` which is an `xpath` and a value. Based on both (or either) the functino decides what to return.

For example, it can always return a constant value for a given path, or always replace _One_ with _1_ if it's the only text in value.


## Editing on iPad

In order to make it easier to edit `json` files on a mobile device, `txt` files were generated (with a semi-reversable method.

In order to check the _reversability_ one can run:

```bash
vimdiff $file.json <(paste -d':' <( jq 'keys_unsorted[]' $file.json) <(jq '.[]' $file.json) | sed -e 's/$/,/' -e '$s/,//' | sed -e '1 i\{' -e '$a\}' | jq '.')
```

which means this was run to generate `txt` files:

```bash
jq '.[]' $file.json > $file.txt
```

and the reverse of the above (after modifying the `txt` file) is:

```bash
paste -d':' <( jq 'keys_unsorted[]' $file.json) $file.txt | sed -e 's/$/,/' -e '$s/,//' | sed -e '1 i\{' -e '$a\}' | jq '.'
```

## Generating pdfs from htmls

After applying all `json`s to original `html`s we are left with modified `html`s in `ready_to_pdf_htmls` directory.

### Converting every html to pdf

```bash
pip3 install --user weasyprint
mkdir pdf
for filepath in ready_to_pdf_htmls/*.html; do file=$(basename $filepath | cut -f1 -d'.'); 2>&1 weasyprint $filepath pdf/$file.pdf; done
```

### Collapsing all `pdf`s into one

Order of files on command line reflects the order in the output file

```bash
cd pdf
pdfunite philethics.pdf cprog.pdf ds.pdf la.pdf stat.pdf db.pdf ds101_fine.pdf mediapsy.pdf modernthought.pdf bible.pdf chinese.pdf CommFren.pdf compconst.pdf EuroSocCul.pdf French1.pdf french2.pdf frenchart.pdf FutureEurope.pdf German1.pdf GlobaInterRel.pdf IntroEco.pdf IntroWestHistory.pdf ItalianHistory.pdf lifesci.pdf micro.pdf ModernEuroArt.pdf movies.pdf music.pdf NewEur.pdf Pol101.pdf RussianClub.pdf SocSoc.pdf swim.pdf uni.pdf WesternCulture.pdf writing.pdf syllabus.all.pdf
```

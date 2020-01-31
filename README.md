# What is it? :sparkles:

2 scripts that might help with translation of syllabus.

# Dependencies

only html parser:

```bash
pip3 install -r requirements.txt
```

# How to use

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

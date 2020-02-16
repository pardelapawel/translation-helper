import argparse
import codecs
import os.path as path
from lxml import etree
from io import StringIO, BytesIO
import json

argumentparser = argparse.ArgumentParser(description="""
For all specified files generates mapping path_in_html -> text_to_translate
        """)
argumentparser.add_argument(
        "inputfile",
        help="html input file",
        type=str)
argumentparser.add_argument(
        "-o",
        "--outputfile",
        help="where to save file",
        type=str)

options = argumentparser.parse_args()
htmlparser = etree.HTMLParser(remove_comments=True)

inputfile_path= options.inputfile
root_path, extension = path.splitext(inputfile_path)
to_translate_dict = {}
inner_html = codecs.open(inputfile_path, 'r', 'utf-8', 'ignore').read()
out_mapping_path = options.outputfile if options.outputfile else "{}.json".format(root_path, json)


page = etree.parse(StringIO(inner_html), htmlparser)

for element in page.iter():
    if element.text is None or element.text.strip() == "":
        continue
    childToRoot = page.getpath(element)
    if element.tag in ["script", "a"]:
        print("  Skipping tag '{}'\twith '{}' characters\t(not useful)".format(element.tag, len(element.text)))
        continue
    if element.text.strip().isdigit():
        print("  Skipping tag '{}'\twith '{}' characters\t(only digits)".format(element.tag, len(element.text)))
        continue
    #print(">> {} - {} - {} - {}".format(element.tag, element.text, childToRoot, page.xpath(childToRoot)[0].text))
    assert(childToRoot not in to_translate_dict), "Creating mapping failed for '{}'. Element path was not uniq enough".format(childToRoot)
    to_translate_dict[childToRoot] = element.text.strip()
json.dump(to_translate_dict, codecs.open(out_mapping_path, 'w', 'utf-8'), indent=4)
print("Translation mapping was saved to '{}'".format(out_mapping_path))
print()

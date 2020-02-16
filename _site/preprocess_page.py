import argparse
import codecs
import os.path as path
from lxml import etree
from io import StringIO, BytesIO
import json

argumentparser = argparse.ArgumentParser(description="""
For all specified files:
        1. extracts the 2nd item (using boundary markers)
        2. generates mapping path_in_html -> text_to_translate
        """)
argumentparser.add_argument(
        "inputfiles",
        nargs='+',
        help="html input file",
        type=str)
argumentparser.add_argument(
        "--start_marker",
        default="<html",
        help="use this string as a start marker")
argumentparser.add_argument(
        "--end_marker",
        default="html>",
        help="use this string as an end marker")

options = argumentparser.parse_args()
htmlparser = etree.HTMLParser()

for inputfile_path in options.inputfiles:
    root_path, extension = path.splitext(inputfile_path)
    to_translate_dict = {}
    inputfile = codecs.open(inputfile_path, 'r', 'utf-8', 'ignore').read()
    outputfile_path = "{}.prepared{}".format(root_path, extension) #extensions contains "."
    out_mapping_path = "{}.json".format(root_path, json)

    start_pos = inputfile.find(options.start_marker)
    end_pos = inputfile.find(options.end_marker, start_pos+len(options.start_marker))
    assert(start_pos > -1), "'{}' was not found as a start position"
    assert(end_pos > -1), "'{}' was not found as a start position"

    inner_html = inputfile[start_pos:end_pos+len(options.end_marker)]
    #print(inner_html)

    outputfile = codecs.open(outputfile_path, 'w', 'utf-8')
    outputfile.write(inner_html)
    print("HTML without GTranslate saved to '{}'".format(outputfile_path))


    page = etree.parse(StringIO(inner_html), htmlparser)
    boxes = page.xpath("//td[contains(@class, 'Box')]")

    for box in boxes:
        for child in box.iter():
            if child.text is None:
                continue
            childToRoot = page.getpath(child)
            #print("{} - {} - {} - {}".format(child, child.text, childToRoot, page.xpath(childToRoot)[0].text))
            assert(childToRoot not in to_translate_dict), "Creating mapping failed for '{}'. Element path was not uniq enough".format(childToRoot)
            to_translate_dict[childToRoot] = child.text
    json.dump(to_translate_dict, codecs.open(out_mapping_path, 'w', 'utf-8'), indent=4)
    print("Translation mapping was saved to '{}'".format(out_mapping_path))
    print()

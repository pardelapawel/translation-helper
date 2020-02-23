import argparse
import codecs
import os.path as path
from lxml import etree
from io import StringIO, BytesIO
import json
from always_replace import smart_replace

argumentparser = argparse.ArgumentParser(description="""
        """)
argumentparser.add_argument(
        "html_to_modify",
        help="html file to modify",
        type=str)
argumentparser.add_argument(
        "mapping_file",
        help="mapping generated by the preprocessing script (in json)",
        type=str)
argumentparser.add_argument(
        "-o",
        "--output_file",
        help="output file. if not given, 'modified' is added to the input file to create outputfile",
        type=str)
argumentparser.add_argument(
        "--add_colour",
        help="Adds css and title image to Yonsei uni htmls (don't use it on knou, it will fail)",
        action='store_true')

options = argumentparser.parse_args()
htmlparser = etree.HTMLParser()
root_path, extension = path.splitext(options.html_to_modify)
if options.output_file:
    output_filepath = options.output_file
else:
    output_filepath = "{}.modified{}".format(root_path, extension)

trans_dict = json.load(codecs.open(options.mapping_file, 'r', 'utf-8'))
#print(trans_dict)

page = etree.parse(StringIO(codecs.open(options.html_to_modify, 'r', 'utf-8', 'ignore').read()), htmlparser)

entry_num = 0
for entry_num, (key, value) in enumerate(trans_dict.items()):
    elem_to_replace = page.xpath(key)
    if elem_to_replace:
        elem_to_replace[0].text = smart_replace(key, value)
    else:
        raise ValueError("Key '{}' is empty in html. in JSON the value was: '{}'. Make sure the key is correct (typos)".format(key, value))

for pre in page.xpath("//pre"):
    assert("style" not in pre.attrib), "style was found in attrib. I would overwrite it. please report"
    pre.attrib["style"] = "white-space: pre-wrap; white-space: -moz-pre-wrap;  white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word;"

if options.add_colour:
    #this is to set the correct path to the logo image for every page
    page.xpath("/html/body/form/table[2]/tbody/tr[1]/td/img")[0].attrib["src"] = "http://ysweb.yonsei.ac.kr:8888/images/syllabus_logo.jpg"

    #this sets the proper path to the proper css - proper colouring of tables
    page.xpath("/html/head/link[2]")[0].attrib["href"] = "http://ysweb.yonsei.ac.kr:8888/css/style.css"

print("Modified {} entries".format(entry_num))

modified_page = etree.tostring(page, pretty_print=True).decode('utf-8')
ourput_file = codecs.open(output_filepath, 'w', 'utf-8')
ourput_file.write(modified_page)
print("Saved modified page to '{}'".format(output_filepath))
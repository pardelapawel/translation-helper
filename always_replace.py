import re

def smart_replace(key, value):
    if re.match("^one$", value.strip(), re.IGNORECASE):
        return "1"

    gtanslate_footer = ["Google Translate",
        "Original text",
        "Contribute a better translation",
        "Drop here!"]
    if value.strip() in gtanslate_footer:
        return ""

    end_of_doc = {
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[5]/td[2]/font/font": "A healthy society / safe society created by data scientists",
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[5]/td[3]/font/font": "Textbooks 2.3 to 2.4",
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[5]/td[4]/font/font": "44-55",
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[5]/td[5]/font/font": "lecture",
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[6]/td[2]": "\ub370\uc774\ud130 \uad6c\uc870\uc640 \uc800\uc7a5",
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[6]/td[3]": "\uad50\uc7ac 3.1 ~ 3.2",
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[6]/td[4]": "61-83",
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[6]/td[5]": "\uac15\uc758",
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[7]/td[2]": "\ub370\uc774\ud130 \ud488\uc9c8 \uad00\ub9ac",
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[7]/td[3]": "\uad50\uc7ac 4.1",
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[7]/td[4]": "93-103",
        "/html/body/div[2]/div/div[2]/div[1]/table[2]/tbody/tr[7]/td[5]": "\uac15\uc758",
        "/html/body/div[2]/div/div[2]/div[1]/h5[4]": "\ud3c9\uac00\ubc29\ubc95 \ubc0f \ucd9c\uc81c\ubc94\uc704",
        "/html/body/div[2]/div/div[2]/div[1]/table[3]/thead/tr/th[1]": "\ud3c9\uac00\uc720\ud615",
        "/html/body/div[2]/div/div[2]/div[1]/table[3]/thead/tr/th[2]": "\ud3c9\uac00\ubc29\ubc95",
        "/html/body/div[2]/div/div[2]/div[1]/table[3]/thead/tr/th[3]": "\ucd9c\uc81c\ubc94\uc704",
        "/html/body/div[2]/div/div[2]/div[1]/table[3]/thead/tr/th[4]": "\ube44\uace0",
        "/html/body/div[2]/div/div[2]/div[1]/table[3]/tbody/tr[2]/td[1]": "\ucd9c\uc11d\uc218\uc5c5",
        "/html/body/div[2]/div/div[2]/div[1]/table[3]/tbody/tr[2]/td[2]": "\uc8fc\uad00\uc2dd",
        "/html/body/div[2]/div/div[2]/div[1]/table[3]/tbody/tr[2]/td[3]": "\ucd9c\uc11d\uc218\uc5c5 \ubc94\uc704\u00a0\u00a0\u00a0\uc2dc\ud5d8\uc774 \uc544\ub2c8\ub77c \uacfc\uc81c\uc81c\ucd9c \uc785\ub2c8\ub2e4",
        "/html/body/div[2]/div/div[2]/div[1]/p[2]/b": "\uc720\uc758\uc0ac\ud56d : \uc704\uc758 \ub0b4\uc6a9\uc740 \ubcc0\uacbd\ub420 \uc218 \uc788\uc73c\ubbc0\ub85c \ud559\ubcf4\uacf5\uace0\ub97c \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",
        "/html/body/div[2]/div/div[2]/div[1]/h5[5]": "\ucc38\uace0\ubb38\ud5cc",
        "/html/body/div[2]/div/div[2]/div[1]/ul[5]/li": "\uc11c\uba85 : Doing data science / \uc800\uc790 : by Cathy O`Neil, Rachel Schutt / \ucd9c\ud310\uc0ac : O`Reilly / \ucd9c\ud310\ub144\ub3c4 : 2014",
        "/html/body/div[2]/div/div[2]/div[2]/ul/li": "\uc2dc\ud5d8\uc77c\uc815\uc758 O \ub97c \ub204\ub974\uc2dc\uba74 \uc0c1\uc138 \uc138\ubd80 \uc2dc\ud5d8\uc77c\uc815\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
        "/html/body/div[2]/div/div[2]/div[2]/table[1]/thead/tr[1]/th[1]": "\uacfc\ubaa9",
        "/html/body/div[2]/div/div[2]/div[2]/table[1]/thead/tr[1]/th[2]": "\uc2dc\ud5d8\uc77c\uc815",
        "/html/body/div[2]/div/div[2]/div[2]/table[1]/thead/tr[2]/th[1]": "\ub300\uccb4",
        "/html/body/div[2]/div/div[2]/div[2]/table[1]/thead/tr[2]/th[2]": "\uc911\uac04",
        "/html/body/div[2]/div/div[2]/div[2]/table[1]/thead/tr[2]/th[3]": "\uae30\ub9d0",
        "/html/body/div[2]/div/div[2]/div[2]/table[1]/tbody/tr/td[1]": "\ub370\uc774\ud130\uacfc\ud559\uc785\ubb38",
        "/html/body/div[2]/div/div[2]/div[2]/h4/strong": "\uc2dc\ud5d8\uc77c\uc815 -",
        "/html/body/div[2]/div/div[2]/div[2]/table[2]/caption": "\uc2dc\ud5d8\uc77c\uc815\ud45c",
        "/html/body/div[2]/div/div[2]/div[2]/table[2]/thead/tr/th[1]": "\uc9c0\uc5ed\ub300\ud559",
        "/html/body/div[2]/div/div[2]/div[2]/table[2]/thead/tr/th[2]": "\uc2dc\ud5d8\uc77c\uc815",
        "/html/body/div[2]/div/div[2]/div[2]/table[2]/thead/tr/th[3]": "\uc7a5\uc18c",
        "/html/body/div[2]/div/div[2]/div[2]/table[2]/tbody/tr/td": "\uc870\ud68c\ub41c \uc2dc\ud5d8\uc77c\uc815\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
        "/html/body/div[5]/div[2]/h1": "Original text",
        "/html/body/div[5]/div[4]/div[1]/span[1]": "Contribute a better translation",
        "/html/body/div[6]/div/div[2]": "Drop here!",

    }

    if key in end_of_doc:
        print("replacing '{}' with '{}'".format(value, end_of_doc[key]))
        return end_of_doc[key]

    replace_by_value_dict = {
        "Grades": "Credits",
        "English lesson plan information": "",
        "Syllabus in English": "Summary",
        }

    if value.strip() in replace_by_value_dict:
        print("REPLACING BY VALUE!!! '{}' -> '{}'".format(value, replace_by_value_dict[value.strip()]))
        return replace_by_value_dict[value.strip()]


    return value # return what we got as the last resort (so we don't return empty)

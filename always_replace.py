import re

def smart_replace(key, value):
    if re.match("one", value.strip(), re.IGNORECASE):
        return "1"

    return {
        "/html/body/form/table[2]/tbody/tr[3]/td[3]/font/font": "Grades",
        "/html/body/form/table[2]/tbody/tr[3]/td[3]/font/font": "Credits",
        }.get(key, value)

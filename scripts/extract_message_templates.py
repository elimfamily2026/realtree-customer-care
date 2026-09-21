import json
import re
import sys
from pathlib import Path

from docx import Document


CATEGORIES = {
    "1": "Order cancellations",
    "2": "Shipping, delivery & lost packages",
    "3": "Returns — policy & process",
    "4": "Restocking & return shipping fees",
    "5": "Item condition upon return",
    "6": "Defective or damaged products",
    "7": "Sizing & fit feedback",
    "8": "Replacement requests",
    "9": "Refunds & payment status",
    "10": "Amazon policy & order clarifications",
    "11": "Return-to-sender cases",
    "12": "Messages to Amazon Customer Service",
    "13": "Internal A-to-Z guidance",
}


def main(source: str, destination: str) -> None:
    paragraphs = [p.text.strip() for p in Document(source).paragraphs if p.text.strip()]
    heading = re.compile(r"^([0-9]+)[.]([0-9]+)\s+(.+)$")
    section = re.compile(r"^[0-9]+[.]\s+")
    starts = [(index, heading.match(text)) for index, text in enumerate(paragraphs) if heading.match(text)]
    templates = []

    for position, (start, match) in enumerate(starts):
        end = starts[position + 1][0] if position + 1 < len(starts) else len(paragraphs)
        content = []
        for text in paragraphs[start + 1:end]:
            if section.match(text):
                break
            content.append(text)

        when_to_use = ""
        if content and content[0].lower().startswith("when to use:"):
            when_to_use = content.pop(0).split(":", 1)[1].strip()

        major, minor, title = match.groups()
        templates.append({
            "id": f"amazon-{major}-{minor}",
            "code": f"{major}.{minor}",
            "category": CATEGORIES[major],
            "title": title,
            "whenToUse": when_to_use,
            "body": "\n\n".join(content).strip(),
        })

    output = (
        "export type MessageTemplate = {id:string;code:string;category:string;title:string;whenToUse:string;body:string};\n\n"
        + "export const messageTemplates: MessageTemplate[] = "
        + json.dumps(templates, ensure_ascii=False, indent=2)
        + ";\n"
    )
    Path(destination).write_text(output, encoding="utf-8")
    print(f"Extracted {len(templates)} message templates")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])

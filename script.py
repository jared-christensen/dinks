from pathlib import Path
import re

path = Path('app/(site)/sponsors/page.tsx')
text = path.read_text()

# Remove blurb for non-platinum sponsors and add placeholder for gold/premier logos.

def update_block(block, tier_name):
    entries = []
    for match in re.finditer(r"{(.*?)}", block, re.S):
        item = match.group(1)
        name = re.search(r'name: "([^"]+)"', item).group(1)
        href_match = re.search(r'href: "([^"]+)"', item)
        image_src = re.search(r'imageSrc: "([^"]+)"', item).group(1)
        sponsor = {
            'name': name,
            'tier': tier_name,
            'image': image_src,
        }
        if href_match:
            sponsor['href'] = href_match.group(1)
        entries.append(sponsor)
    return entries

platinum = update_block(re.search(r"const platinumSponsors: Sponsor\[\] = \[(.*?)\];", text, re.S).group(1), 'Platinum Court Sponsor')
premier = update_block(re.search(r"const premierSponsors: Sponsor\[\] = \[(.*?)\];", text, re.S).group(1), 'Premier Sponsor')
gold = update_block(re.search(r"const goldSponsors: Sponsor\[\] = \[(.*?)\];", text, re.S).group(1), 'Gold Sponsor')

print('Platinum', len(platinum))
print('Premier', len(premier))
print('Gold', len(gold))

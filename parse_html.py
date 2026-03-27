import re
with open('bb.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Look for button-like elements or texts like "Let's talk" or "Kontakt"
matches = re.findall(r'<a[^>]*>(?:<[^>]*>)*([^<]+)(?:<[^>]*>)*</a>', text)
print("Link Texts:", list(set(matches[:20])))

styles = re.findall(r'border-radius\s*:\s*([^;]+)', text)
from collections import Counter
print("Border Radiuses:", Counter(styles).most_common(5))

bg_colors = re.findall(r'background-color\s*:\s*([^;]+)', text)
print("Background Colors:", Counter(bg_colors).most_common(5))

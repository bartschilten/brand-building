"""Build the BLITS site preview: tokens.css from the design system's tokens.json, plus a copy of the bundle.
Run from anywhere: python3 build.py"""
import json, re, os, shutil
HERE = os.path.dirname(os.path.abspath(__file__))
DS = os.path.join(HERE, '..', 'design-system-bron', 'project')
t = json.load(open(os.path.join(DS, 'tokens.json')))
def val(v, th): return v[th] if isinstance(v, dict) else v
def cc(v):
    m = re.fullmatch(r'\{(.+)\}', v); return f'var(--{m.group(1)})' if m else v
css = ['/* BLITS — generated from design-system-bron/project/tokens.json by build.py */']
for th in ['light', 'dark']:
    sel = ':root,[data-theme="light"]' if th == 'light' else '[data-theme="dark"]'
    css.append(sel + '{' + ''.join(f'--{x["name"]}:{cc(val(x["value"], th))};' for x in t['color']['tokens']) + '}')
css.append(':root{' + ''.join(f'--{x["name"]}:{x["value"]};' for k in ('spacing', 'radius') for x in t[k]['tokens']) + ''.join(f'--font-{k}:{v};' for k, v in t['type']['families'].items()) + '}')
for f in t['type']['fonts']:
    css.append(f'@font-face{{font-family:{f["family"]};src:url({f["file"]}) format("opentype");font-weight:{f["weight"]};font-display:swap}}')
for g in t['type']['groups']:
    for s in g['styles']:
        fam = t['type']['families'][g['family']]
        css.append(f'.{s["name"]}{{font-family:{fam};font-size:{s["fontSize"]};line-height:{s["lineHeight"]};font-weight:{s["fontWeight"]};font-style:{s.get("fontStyle","normal")};letter-spacing:{s["letterSpacing"]}}}')
open(os.path.join(HERE, 'tokens.css'), 'w').write('\n'.join(css) + '\n')
for f in ('bundle.js', 'bundle.css'):
    shutil.copy(os.path.join(DS, 'components', f), os.path.join(HERE, f))
print('built tokens.css, bundle.js, bundle.css')

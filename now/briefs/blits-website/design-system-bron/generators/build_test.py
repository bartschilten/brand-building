import json,re,glob,os,sys
B='/tmp/claude-0/-home-user/87219723-8819-5e92-bb3f-14525c97a532/scratchpad/blits-ds/'
os.chdir(B+'test')
t=json.load(open(B+'project/tokens.json'))
def val(v,th): return v[th] if isinstance(v,dict) else v
def cc(v):
    m=re.fullmatch(r'\{(.+)\}',v); return f'var(--{m.group(1)})' if m else v
css=[]
for th in ['light','dark']:
    sel=':root,[data-theme="light"]' if th=='light' else '[data-theme="dark"]'
    css.append(sel+'{'+''.join(f'--{x["name"]}:{cc(val(x["value"],th))};' for x in t['color']['tokens'])+'}')
css.append(':root{'+''.join(f'--{x["name"]}:{x["value"]};' for k in('spacing','radius') for x in t[k]['tokens'])+''.join(f'--font-{k}:{v};' for k,v in t['type']['families'].items())+'}')
for f in t['type']['fonts']: css.append(f'@font-face{{font-family:{f["family"]};src:url(../project/{f["file"]});font-weight:{f["weight"]}}}')
for g in t['type']['groups']:
    for s in g['styles']:
        fam=t['type']['families'][g['family']]
        css.append(f'.{s["name"]}{{font-family:{fam};font-size:{s["fontSize"]};line-height:{s["lineHeight"]};font-weight:{s["fontWeight"]};font-style:{s.get("fontStyle","normal")};letter-spacing:{s["letterSpacing"]}}}')
open('tokens.css','w').write('\n'.join(css))
libs='<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>'
ids={'16f913919faad95f91f191b9e5cb20b8':'staand-night-pitch-green','a22e34bfe5f36cd9b4f54be45eb5a316':'staand-white','52e73398578c33ec63254c0318a84c57':'staand-soccer-green','b834a1dd81fcc0e9715469e29927b6fb':'liggend-night-pitch-green','315886cc6395f754a99771a151563548':'liggend-white','8de75f976e716a5238a91633f780a040':'liggend-soccer-green'}
tex={'aa10ef79247decedde3d769d3fe84c30':'beton','9c011f6a13d940f394bdddbecd9bdf55':'asfalt','886f08359e1f8b6620b62c2e57fc14e7':'zand','ef42e301c697fa21989961a15792cf33':'gras','863aeb498ca5ad27d4b471487a6b8475':'regenplas','14ce452a39508d9acb2afe720b6e81cc':'tartan','114d2b46127b0d1edecbbd5df9c9101b':'modder'}
names=[]
for p in sorted(glob.glob(B+'project/components/*/preview.html')):
    n=os.path.basename(os.path.dirname(p)); h=open(p).read()
    for i,nm in ids.items(): h=h.replace('/_blob/'+i,f'../logos/blits-schild-{nm}.png')
    for i,nm in tex.items(): h=h.replace('/_blob/'+i,f'../textures/blits-textuur-{nm}.jpg')
    h=h.replace('<head>','<head><link rel="stylesheet" href="tokens.css"><link rel="stylesheet" href="../project/components/bundle.css">'+libs+'<script src="../project/components/bundle.js"></script>',1)
    open(f'{n}.html','w').write(h); names.append(n)
print(' '.join(names))

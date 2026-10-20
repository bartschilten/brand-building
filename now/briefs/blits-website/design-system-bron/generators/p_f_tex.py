from common import *
from mat import *
import random
def speck(w,h,n,seed,cols,r0=.6,r1=1.6):
    r=random.Random(seed); o=f"<svg xmlns='http://www.w3.org/2000/svg' width='{w}' height='{h}'>"
    for _ in range(n): o+=f"<circle cx='{r.uniform(0,w):.0f}' cy='{r.uniform(0,h):.0f}' r='{r.uniform(r0,r1):.1f}' fill='{r.choice(cols)}' opacity='{r.uniform(.4,.9):.2f}'/>"
    return uri(o+'</svg>')
def tile(code,name,bg,blend='normal',extra='',panel=True):
    p='<div style="position:absolute;left:18px;top:18px;background:var(--ink);color:var(--surface);padding:12px 14px;z-index:3"><p class="eyebrow" style="margin:0 0 4px;font-size:10px">Texture</p><p class="display-s" style="margin:0;font-size:16px;text-transform:uppercase;color:var(--surface)">Built to be used</p></div>' if panel else ''
    return f'<div class="t" style="height:220px;background:{bg};background-blend-mode:{blend}">{extra}{p}{lab(code,name)}</div>'
T={}
T['F1']=('Beton (foto)',f"url(/_blob/aa10ef79247decedde3d769d3fe84c30) center/cover",'normal','')
T['F2']=('Asfalt (foto)',f"url(/_blob/9c011f6a13d940f394bdddbecd9bdf55) center/cover",'normal','')
T['F3']=('Zand (foto)',f"url(/_blob/886f08359e1f8b6620b62c2e57fc14e7) center/cover",'normal','')
T['F4']=('Gras (foto)',f"url(/_blob/ef42e301c697fa21989961a15792cf33) center/cover",'normal','')
T['F5']=('Modder (foto)',"url(/_blob/114d2b46127b0d1edecbbd5df9c9101b) center/cover",'normal','')
T['F6']=('Tartanbaan (foto)',"url(/_blob/14ce452a39508d9acb2afe720b6e81cc) center/cover",'normal','')
T['F7']=('Regenplas met lantaarnlicht (foto)',f"url(/_blob/863aeb498ca5ad27d4b471487a6b8475) center/cover",'normal','')
tiles=''.join(tile(c,n,bg,bl,ex) for c,(n,bg,bl,ex) in T.items())
body=f'''<h2>F · Texturen van echte materialen</h2><p class="note">Gekozen en nu allemaal echte foto's (door Bart gegenereerd): beton, asfalt, zand, gras, modder, tartanbaan (rubberen atletiekbaan) en regenplas met lantaarnlicht. Kraft is vervallen. Alleen als achtergrond, niet achter lopende tekst.</p>
<div class="g">{tiles}</div>'''
write('Textures','Analoog: keuzes',1020,body,'Optie-galerij F: ondergronden van echte materialen. Gekozen door Bart, alles echte foto\'s: F1 beton, F2 asfalt, F3 zand, F4 gras, F5 modder, F6 tartanbaan, F7 regenplas met lantaarnlicht. Vervallen: kraft, kunstgras, grind, hout, leer, filmkorrel (zit in de beelden zelf), hekwerk en tegels. Materiaalkleuren (bruin, groen, rood) zijn bewust geen merkkleuren en alleen voor achtergronden. Houd tekstcontrast boven 4,5:1: zet tekst op een `ink`-vlak of een `PlaqueCard`.\n')

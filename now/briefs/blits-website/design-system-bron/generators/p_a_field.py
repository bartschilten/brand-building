from common import *
def tile(code,name,svg,cls=''): return f'<div class="t {cls}">{svg}{lab(code,name)}</div>'
def S(inner,stroke,vb='0 0 300 210',op=1,w=3):
    return f'<svg width="100%" height="100%" viewBox="{vb}" preserveAspectRatio="xMidYMid slice" fill="none" stroke="{stroke}" stroke-width="{w}" stroke-opacity="{op}">{inner}</svg>'
foot='''<g transform="translate(150 105) scale(1.35) translate(-150 -105)"><line x1="150" y1="-40" x2="150" y2="250"/><circle cx="150" cy="105" r="50"/><circle cx="150" cy="105" r="1" stroke-width="8"/><rect x="-30" y="45" width="85" height="120"/><rect x="-30" y="75" width="40" height="60"/><path d="M55 85 A30 30 0 0 1 55 125"/></g>'''
bask='''<g transform="translate(150 105) scale(1.2) translate(-150 -105)"><rect x="90" y="-30" width="120" height="125"/><path d="M110 95 A40 40 0 0 0 190 95"/><path d="M110 95 A40 40 0 0 1 190 95" stroke-dasharray="7 7"/><path d="M30 -30 V30 A125 125 0 0 0 270 30 V-30"/><circle cx="150" cy="14" r="8"/><line x1="130" y1="2" x2="170" y2="2" stroke-width="5"/></g>'''
ticks=''.join(f'<line x1="{150+80*__import__("math").cos(a*3.14159/12):.1f}" y1="{105+80*__import__("math").sin(a*3.14159/12):.1f}" x2="{150+94*__import__("math").cos(a*3.14159/12):.1f}" y2="{105+94*__import__("math").sin(a*3.14159/12):.1f}"/>' for a in range(24))
tramp=f'<g transform="translate(150 105) scale(1.25) translate(-150 -105)"><circle cx="150" cy="105" r="94"/><circle cx="150" cy="105" r="80"/>{ticks}<line x1="150" y1="25" x2="150" y2="185" stroke-dasharray="4 8"/><line x1="70" y1="105" x2="230" y2="105" stroke-dasharray="4 8"/></g>'
lanes=''.join(f'<rect x="{-60+i*14}" y="{20+i*14}" width="{420-2*i*14}" height="{170-2*i*14}" rx="{85-i*14}"/>' for i in range(5))
track=f'<g>{lanes}<line x1="150" y1="20" x2="150" y2="90" stroke-width="4"/></g>'
def goalf(i):
    return '<defs><pattern id="net'+i+'" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0H14M0 0V14" stroke-width="1"/></pattern></defs><g transform="translate(150 105) scale(1.1) translate(-150 -105)"><rect x="40" y="42" width="220" height="120" stroke-width="6"/><rect x="46" y="48" width="208" height="108" fill="url(#net'+i+')" stroke="none" opacity=".7"/><line x1="-20" y1="162" x2="320" y2="162"/></g>'
items=[('A1','Voetbalveld',foot),('A2','Basketbalveld',bask),('A3','Trampoline van boven',tramp),('A4','Atletiekbaan',track),('A5','Doel met net',None)]
dark=''.join(tile(c,n,S(s or goalf('d'),'var(--brand)',op=.9)) for c,n,s in items)
light=''.join(tile(c+'l',n+' (licht)',S(s or goalf('l'),'var(--stuntpark-grey)',op=1),'s') for c,n,s in items)
body=f'''<h2>A · Veldlijn-achtergronden</h2><p class="note">Grote, rustige lijnen van een speelplek, afgesneden door de rand, als sectieachtergrond. Links donker (Soccer Green op Night Pitch Green), onder licht (Stuntpark Grey op Concrete Grey). Op de site staan ze met lage opacity achter tekst.</p>
<div class="g">{dark}</div><div style="height:16px"></div><div class="g">{light}</div>'''
write('FieldLines','Analoog: keuzes',720,body,'Optie-galerij A: veldlijn-achtergronden uit verschillende speelplekken (voetbalveld, basketbalveld, trampoline van boven, atletiekbaan, doel met net). Kies er één of twee; de rest vervalt. Gebruik: sectieachtergrond met lage opacity, lijnen afgesneden door de rand, nooit achter kleine tekst. Donker: `brand` op `ink`. Licht: `stuntpark-grey` op `surface`.\n')

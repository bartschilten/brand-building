from common import *
DIG={'0':["01110","10001","10011","10101","11001","10001","01110"],'1':["00100","01100","00100","00100","00100","00100","01110"],'2':["01110","10001","00001","00010","00100","01000","11111"],'3':["11110","00001","00001","01110","00001","00001","11110"],'4':["00010","00110","01010","10010","11111","00010","00010"],'5':["11111","10000","11110","00001","00001","10001","01110"],'6':["00110","01000","10000","11110","10001","10001","01110"],'7':["11111","00001","00010","00100","01000","01000","01000"],'8':["01110","10001","10001","01110","10001","10001","01110"],'9':["01110","10001","10001","01111","00001","00010","01100"],'x':["00000","10001","01010","00100","01010","10001","00000"],' ':["00000"]*7}
def dots(text,on,off,r=2.4,gap=6.2):
    x0=0;out=''
    for ch in text:
        for ry,row in enumerate(DIG[ch]):
            for rx,c in enumerate(row):
                out+=f'<circle cx="{x0+rx*gap+r}" cy="{ry*gap+r}" r="{r}" fill="{on if c=="1" else off}" {"" if c=="1" else "opacity=\".16\""}/>'
        x0+=5*gap+gap
    return out,x0-gap
d,w=dots('300x200','var(--tour-de-yellow)','var(--stuntpark-grey)')
G1f=f'<div class="t" style="height:230px"><svg style="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%)" width="{w}" height="{7*6.2}" viewBox="0 0 {w} {7*6.2}">{d}</svg><p class="eyebrow" style="position:absolute;left:0;right:0;top:152px;text-align:center;color:var(--surface);margin:0">Size in cm (voorbeeld)</p>{lab("G1","Scorebord met lichtpunten")}</div>'
def flip(ch,lab_=''):
    return f'<div style="position:relative;width:32px;height:52px;background:var(--ink);color:var(--surface);display:grid;place-items:center;font-family:var(--font-display);font-weight:900;font-size:24px;font-style:italic;outline:1px solid rgba(215,215,215,.25)"><span>{ch}</span><i style="position:absolute;left:0;right:0;top:50%;height:2px;background:var(--surface);opacity:.9;transform:translateY(-1px)"></i></div>'
G2=f'<div class="t l" style="height:230px;background:var(--surface-warm)"><div style="position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);display:flex;gap:4px;align-items:center">{"".join(flip(c) for c in "300")}<span class="display-s" style="margin:0 6px">×</span>{"".join(flip(c) for c in "200")}</div><p class="eyebrow" style="position:absolute;left:0;right:0;top:158px;text-align:center;margin:0">Size in cm (voorbeeld)</p>{lab("G2","Klapcijfers (flip-bord)")}</div>'
G3=f'<div class="t s" style="height:230px"><div style="position:absolute;inset:26px 22px 52px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px">'+''.join(f'<div style="display:flex;flex-direction:column;justify-content:flex-end;border-top:3px solid var(--ink)"><span class="display-l" style="font-size:28px;line-height:1;color:var(--surface);-webkit-text-stroke:2px var(--ink);paint-order:stroke fill;display:block;margin-top:8px">{n}</span><span class="eyebrow" style="margin-top:6px;font-size:10px;letter-spacing:.06em">{l}</span></div>' for n,l in [('300','Breedte'),('200','Hoogte'),('[00]','Garantie')])+f'</div>{lab("G3","Cijferblokken met outline")}</div>'
body=f'''<h2>G · Scorebord-cijfers voor productfeiten</h2><p class="note">Grote cijfers voor maat, gewicht, garantie. Alleen voor <b>feiten</b>, nooit voor het rangschikken van kinderen. De getallen zijn voorbeelden.</p>
<div class="g">{G1f}{G2}{G3}</div>'''
write('ScoreFacts','Analoog: keuzes',420,body,'Optie-galerij G: productfeiten als scorebord: G1 lichtpunten-bord (dot-matrix) in `tour-de-yellow`, G2 klapcijfers (flip-bord), G3 cijferblokken met outline-cijfers. Alleen echte productfeiten (maat, gewicht, garantie), nooit voor winnen of rangschikken. De cijfers in de voorbeelden zijn placeholders.\n')

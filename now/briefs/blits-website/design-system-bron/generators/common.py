import os
P='/tmp/claude-0/-home-user/87219723-8819-5e92-bb3f-14525c97a532/scratchpad/blits-ds/project/components/'
GF='https://fonts.googleapis.com/css2?family=Orbitron:wght@700..900&display=swap'
LOGO={'staand-night':'16f913919faad95f91f191b9e5cb20b8','staand-white':'a22e34bfe5f36cd9b4f54be45eb5a316','staand-green':'52e73398578c33ec63254c0318a84c57','liggend-night':'b834a1dd81fcc0e9715469e29927b6fb','liggend-white':'315886cc6395f754a99771a151563548','liggend-green':'8de75f976e716a5238a91633f780a040'}
BASE='''<link rel="preconnect" href="https://fonts.googleapis.com"><link href="'''+GF+'''" rel="stylesheet">
<style>
*{box-sizing:border-box}body{margin:0;padding:20px;background:var(--surface);color:var(--ink);font-family:var(--font-sans)}
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.g2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.t{position:relative;overflow:hidden;background:var(--ink);height:210px}
.t.l{background:var(--surface-warm)}.t.s{background:var(--surface);outline:1px solid var(--stuntpark-grey);outline-offset:-1px}
.lab{position:absolute;left:0;bottom:0;padding:7px 12px;background:var(--surface);color:var(--ink);font-family:var(--font-display);font-weight:800;font-size:11px;letter-spacing:.12em;text-transform:uppercase;z-index:5}
.lab b{color:var(--action)}
h2{font-family:var(--font-display);font-style:italic;font-weight:900;font-size:13px;letter-spacing:.15em;text-transform:uppercase;margin:0 0 10px}
.note{font-size:12px;line-height:1.5;margin:0 0 14px;max-width:70ch}
svg{display:block}
</style>'''
def write(name,group,height,body,readme,extra_head=''):
    os.makedirs(P+name,exist_ok=True)
    html=f'<!-- @dsCard group="{group}" height={height} width=960 page -->\n<!doctype html><html><head><meta charset="utf-8">{BASE}{extra_head}</head><body>{body}</body></html>'
    open(P+name+'/preview.html','w').write(html)
    open(P+name+'/README.md','w').write(readme)
CHOSEN={'J3','I1','I3','B2','E1','E6','D2','D4','G2','K3','F1','F2','F3','F4','F5','F6','F7','A1','A2','A3','A4','A5','A1l','A2l','A3l','A4l','A5l','C1','C2','C3','C4','C5','C6','H1','H2','H3'}
def lab(code,name):
    ok=code in CHOSEN
    return f'<div class="lab"><b>{code}</b> {name}'+(' <span style="background:var(--brand);color:var(--night-pitch-green);padding:2px 6px;margin-left:6px">gekozen</span>' if ok else '')+'</div>'

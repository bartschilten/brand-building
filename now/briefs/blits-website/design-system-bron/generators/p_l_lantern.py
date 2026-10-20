from common import *
from mat import *
css='''<style>
body{padding:0}
.hero{position:relative;height:460px;overflow:hidden;background:var(--ink);cursor:pointer;--cycle:9s}
.layer{position:absolute;inset:0}
@keyframes lit{0%,10%{opacity:0}11%{opacity:.95}12%{opacity:.15}14%{opacity:.85}15%{opacity:0}18%{opacity:1}19.5%{opacity:.5}21%{opacity:1}70%{opacity:1}72%{opacity:.25}74%{opacity:.95}76%{opacity:0}100%{opacity:0}}
@keyframes litSoft{0%,12%{opacity:0}30%{opacity:1}70%{opacity:1}84%{opacity:0}100%{opacity:0}}
@keyframes litText{0%,10%{opacity:.18}18%{opacity:1}21%{opacity:1}70%{opacity:1}76%{opacity:.18}100%{opacity:.18}}
.a-lit{animation:lit var(--cycle) linear infinite}.a-soft{animation:litSoft var(--cycle) ease-in-out infinite}.a-text{animation:litText var(--cycle) linear infinite}
.hero.on .a-lit,.hero.on .a-soft{animation:none;opacity:1}.hero.on .a-text{animation:none;opacity:1}
.hero.off .a-lit,.hero.off .a-soft{animation:none;opacity:0}.hero.off .a-text{animation:none;opacity:.18}
.glow{background:radial-gradient(circle at 79% 15%,rgba(243,187,49,.82),rgba(243,187,49,0) 55%)}
.cone{background:linear-gradient(to bottom,rgba(243,187,49,.42),rgba(243,187,49,.04) 90%);clip-path:polygon(78.8% 13%,52% 100%,92% 100%)}
.ground{-webkit-mask-image:radial-gradient(ellipse 52% 95% at 79% 12%,#000 20%,transparent 78%);mask-image:radial-gradient(ellipse 52% 95% at 79% 12%,#000 20%,transparent 78%);opacity:.9}
.copy{position:absolute;left:48px;top:60px;max-width:46%;z-index:6}
.copy h1{margin:12px 0 22px;font-size:64px;line-height:1;color:var(--surface);text-transform:uppercase}
.lamp{position:absolute;right:4.5%;top:12.2%;z-index:5}
.pole{position:absolute;left:79%;margin-left:-3px;top:13%;bottom:0;width:7px;background:var(--ink);box-shadow:0 0 0 1px rgba(215,215,215,.28)}
.head{position:absolute;left:79%;margin-left:-30px;top:10.5%;width:60px;height:14px;background:var(--ink);box-shadow:0 0 0 1px rgba(215,215,215,.45);z-index:5}
.bulb{position:absolute;left:79%;margin-left:-24px;top:calc(10.5% + 12px);width:48px;height:6px;background:var(--tour-de-yellow);z-index:5;box-shadow:0 0 20px 6px rgba(243,187,49,.9)}
.hint{position:absolute;right:14px;bottom:12px;z-index:7;font-family:var(--font-display);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--surface);opacity:.6}
@media (prefers-reduced-motion:reduce){.a-lit,.a-soft{animation:none;opacity:1}.a-text{animation:none;opacity:1}}
</style>'''
asph="linear-gradient(#ffd24a,#ffd24a),url(/_blob/9c011f6a13d940f394bdddbecd9bdf55) 40% 60%/cover"
lines='<svg width="100%" height="100%" viewBox="0 0 960 460" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#09cd66" stroke-width="3" stroke-opacity=".85"><circle cx="760" cy="360" r="150"/><line x1="760" y1="170" x2="760" y2="520"/><circle cx="760" cy="360" r="3" stroke-width="8"/></svg>'
body=f'''<div class="hero" id="hero">
 <div class="layer a-soft"><div class="layer glow"></div></div>
 <div class="layer a-lit"><div class="layer cone"></div></div>
 <div class="layer a-soft"><div class="layer ground" style="background:{asph};background-blend-mode:multiply;filter:brightness(1.7) contrast(1.15)"></div></div>
 <div class="pole"></div><div class="head"></div><div class="layer a-lit" style="z-index:5"><div class="bulb"></div></div>
 <div class="copy"><p class="eyebrow a-text" style="margin:0;color:var(--surface)">BLITS for professionals</p><h1 class="display-xl a-text">Outside<br>wins.</h1><button class="blits-btn blits-btn--primary" type="button">Become a dealer</button></div>
 <span class="hint">klik = licht aan / uit / automatisch</span></div>
<script>
(function(){{var h=document.getElementById('hero'),state=0;h.addEventListener('click',function(e){{if(e.target.closest('button'))return;state=(state+1)%3;h.classList.remove('on','off');if(state===1)h.classList.add('on');if(state===2)h.classList.add('off');}});}})();
</script>'''
os.makedirs(P+'LanternHero',exist_ok=True)
html=f'<!-- @dsCard group="Analoog: gekozen" height=470 width=960 page -->\n<!doctype html><html><head><meta charset="utf-8">{BASE}{css}</head><body>{body}</body></html>'
open(P+'LanternHero/preview.html','w').write(html)
open(P+'LanternHero/README.md','w').write('De hero met de lantaarnpaal (B2) en animatie, gekozen door Bart. Cyclus van 9 s: donker, het licht flikkert aan (zoals een echte lantaarn), de lichtkegel en gloed komen op, in het verlichte stuk verschijnen asfalt-textuur en de kop licht op; daarna flikkert het weer uit. Klik wisselt tussen automatisch, altijd aan en altijd uit. Alleen op Home (of een campagnepagina) gebruiken, niet op elke pagina. Onder `prefers-reduced-motion` staat het licht aan zonder animatie. De kop is `display-xl`; leesbaarheid blijft ook in het donker (kop op 18% dekking, met `surface` op `ink` contrast zodra het licht aan is).\n')

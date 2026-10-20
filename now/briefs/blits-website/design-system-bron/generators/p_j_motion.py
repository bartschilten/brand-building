from common import *
css='''<style>
.k{position:absolute;left:50%;top:104px;width:120px;height:80px;margin-left:-60px;background:var(--brand);clip-path:polygon(0 12px,12px 12px,12px 0,calc(100% - 12px) 0,calc(100% - 12px) 12px,100% 12px,100% calc(100% - 12px),calc(100% - 12px) calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,12px calc(100% - 12px),0 calc(100% - 12px))}
.floor{position:absolute;left:0;right:0;bottom:46px;height:3px;background:var(--surface)}
@keyframes j1{0%{transform:translateY(-120px);opacity:0}30%{transform:translateY(0);opacity:1}48%{transform:translateY(-10px)}64%{transform:translateY(0)}78%{transform:translateY(-3px)}100%{transform:translateY(0)}}
@keyframes j2{0%{transform:translateY(-140px);opacity:0}28%{transform:translateY(0);opacity:1}46%{transform:translateY(-26px)}62%{transform:translateY(0)}76%{transform:translateY(-9px)}88%{transform:translateY(0)}94%{transform:translateY(-2px)}100%{transform:translateY(0)}}
@keyframes j3{0%{transform:translateY(-160px) scale(1,1);opacity:0}24%{transform:translateY(0) scale(1.12,.84);opacity:1}38%{transform:translateY(-52px) scale(.94,1.1)}54%{transform:translateY(0) scale(1.08,.9)}66%{transform:translateY(-20px) scale(.97,1.04)}78%{transform:translateY(0) scale(1.03,.97)}90%{transform:translateY(-5px)}100%{transform:translateY(0) scale(1,1)}}
.run1 .k{animation:j1 1.3s cubic-bezier(.3,.7,.4,1) both}.run2 .k{animation:j2 1.5s cubic-bezier(.3,.7,.4,1) both}.run3 .k{animation:j3 1.7s cubic-bezier(.3,.7,.4,1) both}
.hint{position:absolute;right:10px;top:8px;font-family:var(--font-display);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--surface);opacity:.7;z-index:5}
@media (prefers-reduced-motion:reduce){.run1 .k,.run2 .k,.run3 .k{animation:none}}
</style>'''
def tile(n,code,name):
    return f'<div class="t run{n}" data-n="{n}" style="height:230px;cursor:pointer"><span class="hint">klik = opnieuw</span><div class="k"></div><div class="floor"></div>{lab(code,name)}</div>'
btn='''<div class="t l" style="height:230px;background:var(--surface-warm);display:grid;place-items:center"><button class="blits-btn blits-btn--primary" type="button">Press me</button>__L__</div>'''.replace('__L__',lab('J4','Knop: indrukken (scale 0,97)'))
body=f'''<h2>J · Stuiter-beweging</h2><p class="note">Eén bewegingsmotief voor het hele merk: een korte stuiter, alsof iets op een trampoline landt. Klik op een vak om het opnieuw af te spelen. Op de site gebruikt voor het openen van kaarten en hover, niet voor navigatie en nooit herhalend. Bij "minder beweging" wordt het een korte cross-fade.</p>
<div class="g4">{tile(1,"J1","Subtiel")}{tile(2,"J2","Gemiddeld")}{tile(3,"J3","Speels (squash)")}{btn}</div>
<script>
document.querySelectorAll('.t[data-n]').forEach(function(t){{var n=t.dataset.n;function run(){{t.classList.remove('run'+n);void t.offsetWidth;t.classList.add('run'+n);}}t.addEventListener('click',run);}});
</script>'''
write('BounceDemo','Analoog: keuzes',470,body,'Optie-galerij J: de stuiter als enig bewegingsmotief. J1 subtiel (past bij premium), J2 gemiddeld, J3 speels met squash and stretch. Gebruik: een kaart die opent of landt, nooit herhalend en nooit voor navigatie. Easing `ease-out`, duur onder 300 ms voor gewone interacties; deze demo duurt langer om het verschil te laten zien. Bij `prefers-reduced-motion`: korte cross-fade.\n',css)

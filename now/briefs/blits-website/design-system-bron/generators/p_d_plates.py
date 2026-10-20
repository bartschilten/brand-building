from common import *
L=lambda k:'/_blob/'+LOGO[k]
notch='clip-path:polygon(0 12px,12px 12px,12px 0,calc(100% - 12px) 0,calc(100% - 12px) 12px,100% 12px,100% calc(100% - 12px),calc(100% - 12px) calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,12px calc(100% - 12px),0 calc(100% - 12px))'
screws=lambda c='rgba(20,26,28,.7)',h='rgba(255,255,255,.85)': ','.join(f'radial-gradient(circle at {x} {y},{c} 0 2.5px,{h} 3px 5px,transparent 5.5px)' for x,y in [('22px','22px'),('calc(100% - 22px)','22px'),('22px','calc(100% - 22px)'),('calc(100% - 22px)','calc(100% - 22px)')])
alu='linear-gradient(115deg,var(--aluminium-light) 0%,var(--aluminium-mid) 38%,var(--aluminium-light) 58%,var(--aluminium-mid) 100%)'
grain='repeating-linear-gradient(90deg,rgba(255,255,255,.22) 0 1px,rgba(0,0,0,.05) 1px 2px,rgba(255,255,255,.1) 2px 4px)'
css=('''<style>
.plate{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}
.d1{width:250px;height:156px;'''+notch+''';background:'''+screws()+''','''+grain+''','''+alu+'''}
.d1 img{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);height:104px;filter:drop-shadow(0 1px 0 rgba(255,255,255,.8));opacity:.9}
.d1::before{content:"";position:absolute;inset:18px;border:1px solid rgba(44,52,55,.45);box-shadow:0 1px 0 rgba(255,255,255,.8)}
.shield{width:104px;height:118px;-webkit-mask:url(__M__) center/contain no-repeat;mask:url(__M__) center/contain no-repeat;background:'''+grain+''','''+alu+'''}
.d2w{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);filter:drop-shadow(0 2px 0 rgba(0,0,0,.6)) drop-shadow(0 -1px 0 rgba(255,255,255,.35))}
.d3{width:230px;height:150px;'''+notch+''';background:var(--brand);padding:0}
.d3 img{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);height:104px}
.d3::before{content:"";position:absolute;inset:18px;border:2px solid var(--night-pitch-green)}
.d4{width:260px;height:156px;'''+notch+''';background:'''+screws('rgba(0,0,0,.8)','rgba(215,215,215,.55)')+''',var(--ink);outline:1px solid rgba(215,215,215,.25);color:var(--brand)}
.d4 .in{position:absolute;inset:20px 36px;display:grid;grid-template-columns:auto 1fr;gap:6px 18px;align-content:center;font-family:var(--font-display);font-weight:800;font-size:11px;letter-spacing:.15em;text-transform:uppercase}
.d4 .in span:nth-child(even){text-align:right;color:var(--surface)}
.d4 .hd{grid-column:1/-1;font-size:13px;border-bottom:1px solid rgba(9,205,102,.5);padding-bottom:6px;margin-bottom:2px}
</style>''').replace('__M__',L('staand-night'))
D1=f'<div class="t l" style="height:240px"><div class="plate d1"><img src="{L("staand-night")}" alt=""></div>{lab("D1","Aluminium schildplaatje (gegraveerd)")}</div>'
D2=f'<div class="t" style="height:240px"><div class="d2w"><div class="shield"></div></div>{lab("D2","Gestanst metalen schild op donker")}</div>'
D3=f'<div class="t l" style="height:240px"><div class="plate d3"><img src="{L("staand-white")}" alt=""></div>{lab("D3","Emaille plaatje in Soccer Green")}</div>'
D4=f'<div class="t l" style="height:240px"><div class="plate d4"><div class="in"><span class="hd" style="grid-column:1/-1">BLITS · typeplaatje</span><span>Model</span><span>[MODEL]</span><span>Norm</span><span>[NORM]</span><span>Garantie</span><span>[GARANTIE]</span></div></div>{lab("D4","Chassisplaatje op donker met schroeven")}</div>'
body=f'''<h2>D · Plaatjes en schilden</h2><p class="note">Het ene fysieke merkteken (schildplaatje), vier uitvoeringen. De aluminium SpecPlate zelf zie je bij Surfaces. Alleen echte feiten op een plaatje: de waarden hieronder zijn placeholders.</p>
<div class="g2">{D1}{D2}{D3}{D4}</div>'''
write('Plates','Analoog: keuzes',700,body,'Optie-galerij D: het BLITS-schildplaatje in vier uitvoeringen: D1 geborsteld aluminium met gegraveerd schild, D2 gestanst metalen schild (logo als masker) op een donker vlak, D3 emaille in `brand` met wit logo, D4 donker chassisplaatje met schroeven en velden. Eén plaatje-systeem voor het hele merk; kies er één. Alleen echte feiten op een plaatje.\n',css)

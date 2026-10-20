from common import *
# 48x48 line icons, stroke built from pitch lines and measurements
ICONS={
 'Doel':'<path d="M6 36V14H42V36"/><path d="M6 36H42"/><path d="M14 14V36M22 14V36M30 14V36M38 14V36" stroke-width="1.4"/><path d="M6 22H42M6 29H42" stroke-width="1.4"/>',
 'Bal':'<circle cx="24" cy="24" r="16"/><path d="M24 17L31 22L28 30H20L17 22Z"/><path d="M24 17V8M31 22L40 19M28 30L33 38M20 30L15 38M17 22L8 19" stroke-width="1.8"/>',
 'Trampoline':'<ellipse cx="24" cy="16" rx="18" ry="6"/><path d="M8 20V40M40 20V40M24 22V40"/><path d="M14 20L10 32M34 20L38 32" stroke-width="1.4"/><path d="M4 40H44"/>',
 'Rebounder':'<path d="M10 8H38V36H10Z"/><path d="M10 15H38M10 22H38M10 29H38M17 8V36M24 8V36M31 8V36" stroke-width="1.2"/><path d="M14 36L8 44M34 36L40 44"/>',
 'Basket':'<rect x="9" y="5" width="30" height="20"/><rect x="18" y="12" width="12" height="9" stroke-width="2"/><path d="M15 25H33L30 32H18Z" stroke-width="2"/><path d="M24 25V44M16 44H32"/>',
 'Maat':'<rect x="5" y="17" width="38" height="14"/><path d="M11 17V25M17 17V22M23 17V25M29 17V22M35 17V25" stroke-width="2"/>',
 'Garantie':'<path d="M24 5L40 11V24C40 33 33 40 24 43C15 40 8 33 8 24V11Z"/><path d="M16 24L22 30L32 18"/>',
 'Levering':'<path d="M4 12H28V34H4Z"/><path d="M28 20H38L44 27V34H28Z"/><circle cx="14" cy="37" r="4" fill="var(--surface)"/><circle cx="36" cy="37" r="4" fill="var(--surface)"/>',
 'Montage':'<path d="M24 5L40 14V32L24 41L8 32V14Z"/><circle cx="24" cy="23" r="7"/><path d="M24 23V5M24 23L40 32M24 23L8 32" stroke-width="1.2"/>',
 'Norm':'<circle cx="24" cy="24" r="18"/><path d="M14 24L21 31L34 17"/>',
 'Weer':'<path d="M24 5C24 5 12 19 12 29C12 36 17 42 24 42C31 42 36 36 36 29C36 19 24 5 24 5Z"/><path d="M19 31C19 34 21 36 24 36" stroke-width="2"/>',
 'Doos':'<path d="M6 14L24 6L42 14V34L24 42L6 34Z"/><path d="M6 14L24 22L42 14M24 22V42"/>',
}
def icon(name,svg,color,w):
    return f'<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="{color}" stroke-width="{w}" stroke-linecap="square" stroke-linejoin="miter">{svg}</svg>'
def cell(name,svg,color,w,bg):
    return f'<div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:16px 4px;background:{bg}">{icon(name,svg,color,w)}<span class="eyebrow" style="font-size:9px;letter-spacing:.1em">{name}</span></div>'
row=lambda color,w,bg,tcolor='var(--ink)':f'<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:2px;color:{tcolor}">'+''.join(cell(n,s,color,w,bg) for n,s in ICONS.items())+'</div>'
H1=f'<div style="position:relative;padding-bottom:34px">{row("var(--ink)",2.5,"var(--surface-warm)")}{lab("H1","Lijn, 2,5 px, vierkante uiteinden")}</div>'
H2=f'<div style="position:relative;padding-bottom:34px">{row("var(--brand)",2.5,"var(--ink)","var(--surface)")}{lab("H2","Op donker in Soccer Green")}</div>'
H3=f'<div style="position:relative;padding-bottom:34px">{row("var(--ink)",4,"var(--brand)")}{lab("H3","Dikke lijn (4 px) op Soccer Green")}</div>'
body=f'''<h2>H · Lijniconen</h2><p class="note">Eén lijndikte, opgebouwd uit veldlijnen en maten (doel, bal, trampoline, rebounder, basketbalring, maat, garantie, levering, montage, norm, weer, verpakking). Geen speeltoestellen. Kies één stijl.</p>
{H1}<div style="height:12px"></div>{H2}<div style="height:12px"></div>{H3}'''
write('LineIcons','Analoog: keuzes',620,body,'Optie-galerij H: twaalf lijniconen in drie stijlen: H1 lijn 2,5 px op beige, H2 Soccer Green op donker, H3 dikke lijn 4 px op Soccer Green. Eén lijndikte en vierkante uiteinden, opgebouwd uit veldlijnen en maten. Iconen: doel, bal, trampoline, rebounder, basketbalring, maat, garantie, levering, montage, norm, weer, verpakking. Single ink: kleur via de omgeving, nooit twee kleuren in één icoon.\n')

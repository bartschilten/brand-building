import random
from urllib.parse import quote
def uri(svg): return 'url(data:image/svg+xml;utf8,'+quote(svg,safe='')+')'
def lit(base,freq,octv,seed,ss,el=40,light='#ffffff',az=235,size=300,extra='',contrast=1.0):
    """base colour multiplied by a diffuse-lit noise bump map"""
    svg=f"<svg xmlns='http://www.w3.org/2000/svg' width='{size}' height='{size}'><filter id='f' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='{freq}' numOctaves='{octv}' seed='{seed}' result='n'/><feDiffuseLighting in='n' lighting-color='{light}' surfaceScale='{ss}' diffuseConstant='{contrast}' result='l'><feDistantLight azimuth='{az}' elevation='{el}'/></feDiffuseLighting><feComposite in='l' in2='SourceGraphic' operator='arithmetic' k1='1' k2='0' k3='0' k4='0'/></filter><rect width='100%' height='100%' fill='{base}' filter='url(#f)'/>{extra}</svg>"
    return uri(svg)
def blades(w,h,n,cols,seed,l0=9,l1=20,ang=22,bg='#17421f'):
    r=random.Random(seed); out=f"<svg xmlns='http://www.w3.org/2000/svg' width='{w}' height='{h}'><rect width='100%' height='100%' fill='{bg}'/>"
    import math
    for _ in range(n):
        x=r.uniform(-5,w+5); y=r.uniform(0,h+20); L=r.uniform(l0,l1); a=math.radians(r.uniform(-ang,ang))
        c=r.choice(cols); sw=r.uniform(.9,1.8)
        out+=f"<path d='M{x:.1f} {y:.1f} q{L*math.sin(a)*.5:.1f} {-L*.5:.1f} {L*math.sin(a):.1f} {-L:.1f}' stroke='{c}' stroke-width='{sw:.1f}' fill='none' stroke-linecap='round'/>"
    return uri(out+"</svg>")
def turf(w,h,seed):
    r=random.Random(seed); out=f"<svg xmlns='http://www.w3.org/2000/svg' width='{w}' height='{h}'><rect width='100%' height='100%' fill='#1d6b30'/>"
    for row in range(0,h//6+2):
        y=row*6+3
        for xi in range(0,w//4+2):
            x=xi*4+r.uniform(-1.2,1.2)+(2 if row%2 else 0); c=r.choice(['#2f9a4a','#38a955','#2a8c42','#46b862'])
            out+=f"<path d='M{x:.1f} {y+4:.1f} q{r.uniform(-2.5,2.5):.1f} -5 {r.uniform(-3,3):.1f} -9' stroke='{c}' stroke-width='1.6' fill='none' stroke-linecap='round'/>"
    for _ in range(420):
        out+=f"<circle cx='{r.uniform(0,w):.0f}' cy='{r.uniform(0,h):.0f}' r='{r.uniform(.6,1.2):.1f}' fill='#0c0f0e' opacity='.7'/>"
    return uri(out+"</svg>")
def gravel(w,h,seed):
    r=random.Random(seed); out=f"<svg xmlns='http://www.w3.org/2000/svg' width='{w}' height='{h}'><rect width='100%' height='100%' fill='#6a655c'/>"
    cols=['#b9b2a4','#a39c8e','#8f897d','#cfc8b8','#7d786d','#c3b9a3']
    for _ in range(520):
        x=r.uniform(0,w); y=r.uniform(0,h); rx=r.uniform(4,10); ry=rx*r.uniform(.6,.95); c=r.choice(cols); a=r.uniform(0,180)
        out+=f"<ellipse cx='{x:.0f}' cy='{y:.0f}' rx='{rx:.1f}' ry='{ry:.1f}' fill='{c}' stroke='#3f3b35' stroke-width='1' transform='rotate({a:.0f} {x:.0f} {y:.0f})'/><ellipse cx='{x-rx*.25:.0f}' cy='{y-ry*.3:.0f}' rx='{rx*.4:.1f}' ry='{ry*.25:.1f}' fill='#fff' opacity='.28' transform='rotate({a:.0f} {x:.0f} {y:.0f})'/>"
    return uri(out+"</svg>")
def planks(w,h,seed):
    r=random.Random(seed); out=f"<svg xmlns='http://www.w3.org/2000/svg' width='{w}' height='{h}'><defs><filter id='g' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='0.012 0.5' numOctaves='3' seed='{seed}'/><feColorMatrix type='matrix' values='0 0 0 0 0.36  0 0 0 0 0.22  0 0 0 0 0.11  0 0 0 1.1 -0.1'/></filter></defs><rect width='100%' height='100%' fill='#9a6a3c'/><rect width='100%' height='100%' filter='url(#g)' opacity='.9'/>"
    x=0
    while x<w:
        pw=r.uniform(46,66); out+=f"<rect x='{x:.0f}' y='0' width='{pw:.0f}' height='{h}' fill='rgba({r.randint(0,40)},{r.randint(0,20)},0,.{r.randint(0,12):02d})'/><rect x='{x+pw-2:.0f}' y='0' width='3' height='{h}' fill='#2a1a0d'/><circle cx='{x+8:.0f}' cy='12' r='2' fill='#2a1a0d'/><circle cx='{x+8:.0f}' cy='{h-12}' r='2' fill='#2a1a0d'/>"
        x+=pw
    return uri(out+"</svg>")

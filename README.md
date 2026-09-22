# brand-building

Bart Schilten's persoonlijke kennisbank voor het vak van merken bouwen:
positionering, naamgeving, visuele identiteit, verhaal, distributie —
toegepast op de eigen merken van Toppy/LDD (BASTE, BLITS, Luminous, Eigen
Merk Tuininrichting).

Aparte vault van [`bartschilten/kennisbank`](https://github.com/bartschilten/kennisbank)
(het Toppy/LDD-werkbrein) — zie `CLAUDE.md` voor waarom. Zelfde patroon:
[karpathy's LLM wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f),
gebouwd op de [toppynl/me-template](https://github.com/toppynl/me-template)-scaffold.

## Layout

Zie `CLAUDE.md` voor de volledige uitleg. Kort:

```
hot.md, index.md, log.md    drielaags lezen: snapshot → catalogus → pagina's
me/                         wie Bart is, hoe hij werkt (incl. TMA)
wiki/people, brands, sources, frameworks, cases, playbooks, decisions, initiatives
.raw/transcripts/           ruwe bronmateriaal (podcasts/video's), ongewijzigd
_templates/                 paginaskeletten per entiteit-type
.claude/skills/              ingest, query, lint, context-audit, correction-capture, onboard, usecases
.claude/skills/domain/       27 brand-building-skills (arnabbagxd/brand-building-skills)
```

## Gebruik

```bash
claude
```

Zeg "onboard me" als dit de eerste keer is, of begin direct met "ingest
<bestand>" / "wat weet ik over BASTE" / roep een domain-skill aan (bv.
`brand-naming`, `brand-positioning`) voor concreet werk aan een merk.

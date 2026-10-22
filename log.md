# Log

Append-only operatielog. `grep "^## \[" log.md` voor alle entries.

## [2026-10-12] fix | reason-for-existence vindbaarder gemaakt

Bart meldde dat "de reden van bestaan niet in de kennisbank staat" — bleek
geen ontbrekende content te zijn: de BLITS-zin staat op [[blits]] §
Merkstrategie (en in [[blits-merkgids]]), maar de wikilink
[[reason-for-existence]] wijst naar de generieke frameworkpagina (Bob
Verlaat's theorie), die geen concrete verwijzing naar de BLITS-zin bevatte.
Fix: een directe verwijzing toegevoegd aan [[reason-for-existence]] §
Toepassing op eigen merken, zodat die pagina niet meer als doodlopend
aanvoelt.

## [2026-10-12] fix | vault consistentie-check vóór sessie-einde

Bart gaf aan de gesprekshistorie te gaan wissen. Volledige audit: alle
11 `decision`-pagina's, de `source`/`framework`/`playbook`/`initiative`-
pagina's gecontroleerd tegen hun frontmatter-`type` versus waar ze in
`index.md` staan. Eén fout gevonden en gefixt:
[[blits-tone-of-voice-definitief]] (type `decision`) stond abusievelijk
onder de `## source`-sectie in plaats van `## decision`. Verder geen
afwijkingen. `hot.md` was al actueel (ververst 2026-10-10, dekt alle
recente besluiten). Vault is een consistente, standalone staat voor een
nieuwe sessie.

## [2026-10-10] decision | BLITS sport-lijn productrebrand + Nano Banana-prompts

Bart leverde drie productfoto's aan (voetbaldoel, trampoline, rebounder —
huidige stand: zwart, "PLAY MORE"-tagline, oud pointed-shield-logo) en
vroeg een concrete rebrand-richting plus een prompt voor Nano Banana
(Gemini image-editing) om zelf te checken. Opgeleverd als
[[blits-sportlijn-productrebrand]]: kleur-/tekstvervanging per product
(zwart → diep olijfgroen `#1B2E21`, "PLAY MORE" → "OUTSIDE WINS." in
Archivo Black, een nieuwe koraalrode 'Golden Goal'-bies als eerste
concrete toepassing van een heritage-signifier uit
[[blits-culturele-codes-analoog-buitenspelen]]), plus drie kant-en-klare
Nano Banana-prompts (één per product). Status: voorstel, geen
productie-impact tot Bart het zelf gecheckt heeft. Verwerkt in
[[blits-launch-rollout]] fase 2A, [[blits]] Timeline, `now/actions/
blits-launch-acties.md`, `index.md`.

## [2026-10-10] now | BLITS actielijst voor Bart opgesteld

Bart vroeg concreet wat hij nu moet doen om de launchrollout
([[blits-launch-rollout]]) vooruit te helpen. Eerste bestand in
`now/actions/`: `blits-launch-acties.md` — onderverdeeld in beslissen
(jij kiest), aanleveren (ik heb iets nodig) en extern (los van mij), per
fase van de rollout. Geen wiki-wijziging, puur `now/`-status.

## [2026-10-10] ingest | BLITS go-to-market/launchplan opgezet (eerste initiative-pagina)

Derde en laatste stap van de door de assistent geprioriteerde
distributie-fase: [[blits-launch-rollout]] (eerste pagina van het
`initiative`-type in deze vault) met de `brand-launch`-skill. Geen
launch-vanaf-nul — een tweeledige uitrol: fase 2A rebrandt de bestaande
sport-lijn (timing: vóór het voorjaars-hoofdmoment), fase 2B lanceert de
speeltoestellen-lijn met de nieuwe identiteit, samenvallend met Bart's
aanstaande speelhuizen-inkoop (gemarkeerd als eerstvolgende concrete
stap). Fase 3 legt een contentcadans per doelgroep-persona vast.
`index.md`/`hot.md`/[[blits]] bijgewerkt. Hiermee is de volledige,
zelf-geprioriteerde distributie-fase (persona's → verpakking →
launchplan) doorlopen.

## [2026-10-10] ingest | BLITS verpakkingsrichting uitgewerkt (voorstel)

Tweede stap van de door de assistent geprioriteerde distributie-fase:
verpakkings-/productpresentatierichting met de `brand-packaging`-skill —
kraftkarton, kleur-/logoprincipes per lijn overgenomen uit de bestaande
productrichting, een lightweight welkomstkaart (i.p.v. het volledige
Tier 3-eigendomscertificaat), instructies in een apart, rustig register
gescheiden van marketingcopy. Status: voorstel/sturing, nog niet door Bart
bevestigd — zelfde behandeling als de eerdere speelhuizen-designrichting.
Toegevoegd aan [[blits]] § Verpakking & productpresentatie. Volgende stap:
go-to-market/launchplan.

## [2026-10-10] decision | BLITS doelgroep verdiept tot drie persona's, vervolgfase bepaald

Op Bart's verzoek ("ik wil door") zelf de volgende fase (distributie-as-vak)
geprioriteerd: verpakking & productpresentatie, dan een go-to-market/
launchplan, dan kanaalspecifieke marketing-skills. Als eerste concrete stap
de doelgroepbeschrijving verdiept met de `target-audience`-skill tot drie
persona's (sport-lijn/actieve ouder, speeltoestellen-lijn/esthetische
ouder, B2B-dealer), elk met trigger/zoekkanaal/bezwaar/BLITS-antwoord.
Toegevoegd aan [[blits]] § Doelgroep-persona's. `index.md`/`hot.md`
bijgewerkt, § Volgende stappen herschreven naar de nieuwe fase.

## [2026-10-10] decision | BLITS logo-designbriefing afgerond — alle vervolgstappen doorlopen

Laatste van de vier voorgestelde vervolgstappen (logo-vectorisatie, stem &
verhaal, merkgids) afgerond: een kant-en-klare briefing voor een externe
designer geschreven ([[blits-logo-designbriefing]]) — wat vaststaat
(silhouet, 4 kleurvarianten, Archivo Black, NL/EN-lockups), wat concreet
geleverd moet worden (vector + Pantone-match koraalrood), en wat buiten
scope blijft. `index.md`/`hot.md`/[[blits]] bijgewerkt. Hiermee is de
identiteits- en voice-fase van BLITS inhoudelijk compleet; openstaand zijn
alleen nog externe uitvoering (designer) en twee kleine bevestigingen
(aanspreekvorm EN, "medailles"-metafoor).

## [2026-10-10] ingest | BLITS merkgids samengevoegd (eerste playbook-pagina)

Bart liet de assistent zelf de volgorde van de resterende "Volgende
stappen" bepalen. Merkgids gebouwd als [[blits-merkgids]] (eerste pagina
van het `playbook`-type in deze vault): een extern deelbaar distillaat van
strategie, identiteit, kleur/typografie, heritage-tiers, tone of voice en
merkverhaal, voor een bureau/fotograaf/dealer — expliciet geen vervanging
van [[blits]] als bronwaarheid. `index.md`/`wiki/brands/blits.md` (§
Volgende stappen, Timeline) bijgewerkt. Volgende en laatste openstaande
stap: logo-designbriefing.

## [2026-10-10] decision | BLITS stem-&-verhaal-fase afgerond: voorbeeldteksten + messaging-hiërarchie

Op verzoek van Bart (ToV als Word-document opgeleverd — gedownload en in
Google Drive gezet als "BLITS Tone of Voice.docx" — daarna gevraagd door te
pakken naar de vervolgstappen in zelfgekozen volgorde): voorbeeldteksten
(campagnetekst, twee productomschrijvingen, twee Instagram-captions, EN+NL)
herschreven volgens de nieuwe ToV-regels, toegevoegd aan
[[blits-tone-of-voice-definitief]]. Daarna een messaging-hiërarchie
(kernbelofte, drie pijlers, doelgroep-invalshoeken) en een kort merkverhaal
(EN master + NL) vastgesteld, toegevoegd aan [[blits]] § Merkverhaal &
messaging-hiërarchie. Hiermee is de "stem & verhaal"-stap uit § Volgende
stappen afgerond. Volgende stap: merkgids samenvoegen (`brand-guidelines`).
`index.md`/`hot.md` bijgewerkt (significante statusverandering).

## [2026-10-10] decision | BLITS tone-of-voice ronde 1 vastgesteld

Op de scherpe vragenronde over [[blits-tone-of-voice-concept-2026]] heeft
Bart geantwoord; besluit vastgelegd in [[blits-tone-of-voice-definitief]]:
"strijders"/competitie-taal geschrapt (richting "ontdekkers", nog te
bevestigen), villain-toon teruggebracht naar de bestaande evocatieve regel
(geen schuldgevoel, 2026-09-29), Engels vastgesteld als mastertaal voor
nieuwe copy, taal blijft warm/toegankelijk — premium zit in fotografie/
verpakking/website, niet in de tekst. Eén stem voor beide lijnen bevestigd
(verschil zit in accenten, niet register). Open: aanspreekvorm in het
Engels, de "medailles"-metafoor, herschrijven van de oude voorbeeldteksten.
Verwerkt in [[blits]] (nieuwe § Tone of Voice + governance-aanvulling),
`index.md`/`hot.md` bijgewerkt (significante statusverandering: stem &
verhaal-fase gestart).

## [2026-10-10] ingest | BLITS tone-of-voice-concept aangeleverd, start stem-&-verhaal-fase

Bart leverde een eerder uitgewerkt tone-of-voice-concept aan (.docx,
origineel bewaard in
`.raw/sources/blits-tone-of-voice-concept-2026.txt`) als startpunt voor de
"stem & verhaal"-vervolgstap uit [[blits]] § Volgende stappen. Geïngest als
[[blits-tone-of-voice-concept-2026]] (source). Nog geen besluit — Bart wil
eerst een scherpe vragenronde om het concept te verbeteren/concretiseren
(o.a. "strijders" vervangen, internationalisering NL/EN, spanning met de
bestaande villain-toonregel). Vragen gesteld in de conversatie, nog niet in
de vault vastgelegd in afwachting van Bart's antwoorden.

## [2026-10-10] ingest | design-skillset toegevoegd + BLITS designkwaliteitscheck

Bart liet de skills van [emilkowalski/skills](https://github.com/emilkowalski/skills)
toevoegen. Alleen `apple-design` geïmporteerd naar `.claude/skills/design/`
(MIT-licentie bewaard) — de overige 13 skills in die repo zijn web-/app-
interactie-engineering (animatie, Swift, UI-libraries) en voegen nu niets
toe aan merk-/identiteitswerk; CLAUDE.md documenteert dit expliciet, incl.
wanneer ze alsnog relevant worden (website/configurator). Vervolgens een
designkwaliteitscheck uitgevoerd op alle BLITS-branding tot nu toe tegen
Apple's acht designprincipes — zie [[blits-apple-design-review]] (decision).
Belangrijkste bevinding: typeplaatje/Home Base-plaatje/chassis-plaatje zijn
dezelfde oplossing drie keer bedacht, samengevoegd tot één
'BLITS-schildplaatje'; de heritage-signifiers geprioriteerd in drie tiers.
Verwerkt in [[blits]] (Governance + Neo-heritage-sectie), `index.md`/
`hot.md` bijgewerkt.

## [2026-10-07] ingest | BLITS acht culturele codes van het analoge buitenspelen

Bart leverde een vervolg op het neo-heritage-onderzoek aan: acht universele
buitenspeel-rituelen (jas als doelpaal, laatste doelpunt wint, pootje over,
buutvrij, geheime boomhut, beker krijt, bandenplakker-reparatieritueel, roep
voor het eten), elk vertaald naar merk/copy én tastbaar productdesign.
Origineel bewaard in
`.raw/sources/blits-culturele-codes-analoog-buitenspelen.txt`. Geïngest als
[[blits-culturele-codes-analoog-buitenspelen]] (source), volledig
uitgewerkt (tabel) in [[neo-heritage-branding]], compact samengevat met de
twee meest speelhuis-relevante details (krijtbordje, schatvak) in [[blits]]
§ Neo-heritage en § Speeltoestellen-lijn — designrichting speelhuizen.
Status: voorgesteld, nog niet getoetst op kostprijs/haalbaarheid.
`index.md`/`hot.md` bijgewerkt.

## [2026-10-07] ingest | BLITS neo-heritage-onderzoek + kleurcorrectie + speelhuizen-designrichting

Bart leverde een extern Gemini-onderzoeksrapport aan over neo-heritage-
merkopbouw (.docx, origineel bewaard als platte tekst in
`.raw/sources/blits-heritage-neo-heritage-onderzoek-gemini.txt`).
Geïngest als [[blits-heritage-onderzoek-gemini]] (source), gedistilleerd
naar [[neo-heritage-branding]] (framework). Daarnaast: zand/crème-kleur
gecorrigeerd naar wit/crème (`#F8F4EA`, was `#F2E8D5` — Bart: "nog veel te
geel"), en designrichting gegeven voor de aanstaande speelhuizen-inkoop
(kleur/materiaal/logoplaatsing via fysiek typeplaatje/prijs). Alle drie
vastgelegd in [[blits-neo-heritage-en-kleurcorrectie]] (decision) en
verwerkt in [[blits]] (kleursectie, nieuwe secties "Neo-heritage" en
"Speeltoestellen-lijn — designrichting speelhuizen", ambitie-horizon
uitgebreid). `index.md`/`hot.md` bijgewerkt.

## [2026-09-22] onboard | Vault aangemaakt

Nieuwe vault opgezet vanuit `toppynl/me-template`, entiteit-types aangepast
voor merkbouw (person, brand, source, framework, case, playbook, decision,
initiative). Domain-skillset geïmporteerd van
`arnabbagxd/brand-building-skills` (27 skills) naar `.claude/skills/domain/`.

## [2026-09-22] ingest | 5 bronnen (podcasts/video's/post)

Geïngest: Entrepreneur Studio (Seth Godin), Elevator Talks (Bob Verlaat),
Growth for Breakfast (Oliver), The Psychology of Premium Branding, How to
Build a Brand in 7 Minutes (Gary Vaynerchuk). Transcripts opgeslagen in
`.raw/transcripts/`, gedistilleerd naar 5 `framework`-pagina's, 4
`person`-pagina's en 5 `source`-pagina's aangemaakt.

## [2026-09-22] ingest | Eigen merken overgenomen uit bartschilten/kennisbank

4 `brand`-pagina's aangemaakt (BASTE, BLITS, Luminous, Eigen Merk
Tuininrichting) op basis van de Toppy-vault, met gekoppelde frameworks per
merk. Cijfers/targets blijven in de Toppy-vault; hier alleen de
merkbouw-toepassing.

## [2026-09-22] ingest | Persoonlijke context (TMA) overgenomen

`me/about.md` opgebouwd uit `bartschilten/kennisbank`'s `me/about.md` —
Bart's profiel en TMA-talentenanalyse, verkort en toegespitst op wat
relevant is voor merkopbouw-werk.

## [2026-10-12] update | BLITS visuele identiteit (palet + fonts)

Kleuren en fonts uit `BLITS_COLORS.pdf`/`BLITS_TEXT_1.pdf` verwerkt in `wiki/brands/blits.md`; Tarmac Black vervangen door donkergroen (voorstel `#06150E`), vastgelegd als `wiki/decisions/blits-kleurenpalet-2026-10.md`. Index en hot bijgewerkt.

## [2026-10-12] ingest | Wie is BLITS? (missie/visie)

Drive-doc "Wie is BLITS?" als bron opgeslagen (`.raw/2026-10-12/`, `wiki/sources/wie-is-blits-missie-visie.md`); reden van bestaan in `wiki/brands/blits.md` gezet (correctie: stond eerder als "ontbreekt"). Night Pitch Green bevestigd; index/hot bijgewerkt.
## [2026-09-22] strategie | BLITS merkstrategie-intake

Volledige brand-strategy questionnaire doorlopen met Bart voor BLITS:
positionering, villain (brave merken-toon + schermtijd), doelgroep,
merkwaarden, persoonlijkheidssliders, concurrentieanalyse en
tagline-kandidaten vastgelegd in `wiki/brands/blits.md`. Open beslissingen:
kleurrichting, definitieve tagline, reason-for-existence-zin.

## [2026-09-24] decision | BLITS merkstrategie fase 1 vastgesteld

Vijfkoppig agent-persona-panel (advocaat vd duivel, overambitieuze
visionair, retail-realist, doelgroep-ouder, esthetisch purist) + chairman-
synthese uitgevoerd op de BLITS-intake. Op basis daarvan heeft Bart
besluiten genomen: prijs/persoonlijkheid-spanning opgelost, villain
scherpgesteld, governance-schotten en assortimentstoets vastgesteld,
tagline-richting bepaald, ambitie-horizon geparkeerd. Vastgelegd in
`wiki/decisions/blits-merkstrategie-fase-1.md`, verwerkt in
`wiki/brands/blits.md`. Kleurcombinatie en typografie/fotografie blijven
open tot visuele keuze.

## [2026-09-24] decision | BLITS kleur definitief: zwart + koraalrood

Na sparren over een sport-kleurcode-idee (collega van Bart) en een Porsche-
Instagram-referentiefoto: zwart (~95%) als basiskleur + een Porsche
Guards/Racing-Red-achtig koraalrood (~5%) als signaalaccent vastgesteld.
Categoriecode-laag (kleur per sport: basketbal, voetbal, trampoline,
volleybal) geaccepteerd in principe, kleur-per-sport-mapping nog niet
ingevuld. Vastgelegd in `wiki/decisions/blits-kleur-definitief.md`,
verwerkt in `wiki/brands/blits.md`.

## [2026-09-29] decision | BLITS merkarchitectuur: twee lijnen, gelaagde villain

Bart twijfelde over speeltoestellen (speelhuizen/schommels/zandbakken)
onder BLITS: bang voor een eendimensionaal "sportief" merk (zoals
Exit/Salta), maar ook niet het generieke Berg-model willen kopiëren.
Opgelost: villain herstructureerd (schermtijd merkbreed voor elke lijn,
brave-merken-villain alleen sport-lijn-specifiek), drie vaste merkkleuren
wit/zwart/koraalrood met andere ratio per lijn (sport ~90% zwart,
speeltoestellen ~90% wit), merk-fit toegevoegd als toetsingscriterium
naast marge/logistiek. Vastgelegd in
`wiki/decisions/blits-merkarchitectuur-lijnen.md`, verwerkt in
`wiki/brands/blits.md`.

## [2026-09-29] decision | BLITS uitvoering fase 2: tagline, typografie, fotografie

Tagline definitief "Buiten wint." (i.p.v. "Val op. Sta op.", nu sport-lijn-
subline) — claimt de merkbrede schermtijd-villain. Typografie sport-lijn
vastgesteld: Bebas Neue + Oswald. Fotografierichting speeltoestellen-lijn
bepaald op basis van Pinterest-referenties van Bart (warm, wit/naturel
hout, lifestyle-props). Sport-categoriecode-idee losgelaten op Bart's eigen
initiatief (te druk/operationeel complex). Vastgelegd in
`wiki/decisions/blits-uitvoering-fase-2.md`, verwerkt in
`wiki/brands/blits.md`.

## [2026-10-05] decision | BLITS strategiefase afgerond

Reason-for-existence definitief vastgesteld, uitgebreid met het sociale
aspect (vriendschap, omgaan met teleurstelling/verlies) op aangeven van
Bart. Typografie-inconsistentie gecorrigeerd: één merkbreed lettertypepaar
(Bebas Neue + Oswald) voor beide lijnen, de eerder voorgestelde aparte
speeltoestellen-typografie (Fraunces/Caveat/Quicksand) losgelaten —
conflicteerde met de bestaande governance-regel dat typografie een vaste
merkconstante is. Exacte kleurtint bewust gepauzeerd, geen actie nu nodig.
Vastgelegd in `wiki/decisions/blits-strategie-afgerond.md`, verwerkt in
`wiki/brands/blits.md`. Hiermee is de strategiefase van BLITS inhoudelijk
afgerond; volgende fase is identiteit (logo-check + visueel
identiteitsdocument).

## [2026-10-05] decision | BLITS identiteitsfase: logo bevestigd, 5-kleurenpalet

Logo (schild + belettering) beoordeeld en bevestigd — werkt ongewijzigd op
beide lijnen in drie kleurvarianten (zwart/wit/koraalrood). Kleurenpalet
uitgebreid van drie naar vijf kleuren: diep olijfgroen (#1B2E21, Bart's
eigen vondst) en zand/crème (~#F2E8D5) als eigen palet voor de
speeltoestellen-lijn, sluit aan bij de Pinterest-fotografierichting.
Oker/mosterdgeel voorgesteld als vijfde accent (nog niet bevestigd).
Engelse tagline-werktitel "Outside Wins." voorgesteld voor Europese
expansie. Verouderde "Play More"-lockups gesignaleerd voor herbouw.
Vastgelegd in `wiki/decisions/blits-identiteit-logo-kleurenpalet.md`,
verwerkt in `wiki/brands/blits.md` (stage: identiteit). Canvas bijgewerkt
met Kleur-bord (5 kleuren) en nieuw Logo-bord.

## [2026-10-05] decision | BLITS kleur en typografie herzien

Op het canvas, direct door Bart doorgewerkt: kleurenpalet teruggebracht van
vijf naar vier kleuren, nu écht gedeeld over beide lijnen — koraalrood,
diep olijfgroen, zand/crème, neongeel (tennisbal). Zwart geschrapt uit het
officiële palet (koerscorrectie op de "zwart blijft anker"-beslissing van
24 september); diep olijfgroen neemt die ankerrol over, ook in de
sport-lijn. Nieuw merkbreed lettertype-trio aangedragen door Bart: Archivo
Black (header), Outfit (body), Kalam (handgeschreven accent) — vervangt
Bebas Neue + Oswald. Engelse tagline "Outside Wins." definitief bevestigd.
Logo accuraat gerecolord (Python/Pillow) in de vier merkkleuren en als
assets in het canvas gezet, CSS-benaderingen vervangen door echte
kleurvarianten. Vastgelegd in
`wiki/decisions/blits-kleur-typografie-herzien.md`, verwerkt in
`wiki/brands/blits.md`.

## [2026-10-05] fix | BLITS canvas on-brand gemaakt

Canvas (merkdocument) bevatte nog generieke donkere UI-kleuren (#0e0e10
zwart-achtergronden), het Inter-lettertype en een teruggevallen oude
5-kleurenversie van het Kleur-bord — niet consistent met de net vastgestelde
merkidentiteit. Alle borden (Overzicht, Kleur, Typografie-Fotografie,
Speeltoestellen, Logo) herbouwd met de vier echte merkkleuren
(koraalrood/diep olijfgroen/zand-crème/neongeel) als paginakleuren en
Archivo Black/Outfit als paginalettertype, niet alleen als voorbeeldtekst.
Geen vault-wijziging nodig — dit was een canvas-correctie, geen
inhoudelijke beslissing.

## [2026-10-05] fix | BLITS vault consistentie-check vóór context-wissen

Op Bart's verzoek (context wordt zo gewist) de hele blits.md doorgelopen op
consistentie: Merkarchitectuur-sectie bevatte nog verouderde verwijzingen
(drie kleuren wit/zwart/koraalrood, "Val op. Sta op." als merkbrede
tagline, zwart-dominant sport-lijn) — gecorrigeerd naar de huidige,
definitieve staat (vier kleuren, olijfgroen-dominant sport-lijn, "Buiten
wint."/"Outside Wins." merkbreed). Canvas-URL
(https://claude.ai/artifact/UP2NSRLKSLh4FdgBmHXdFz) ontbrak nog volledig in
de vault — toegevoegd. Voorgestelde volgende stappen (logo vectoriseren,
stem & verhaal, merkgids samenvoegen) vastgelegd zodat ze niet verloren
gaan. hot.md ververst (datum + verouderde "nog geen beslissingen"-sectie
verwijderd, want er zijn er inmiddels zeven).

## [2026-10-12] merge | BLITS-werk van branch compassionate-tesla samengevoegd + nieuw palet geïntegreerd

Correctie op eerdere sessie-claim: de definitieve reden van bestaan (2026-10-05), tone of voice en merkverhaal stonden al in `wiki/brands/blits.md`, maar alleen op de niet-gemergede branch `claude/compassionate-tesla-ejdcex` (25 commits). Samengevoegd in `claude/stoic-edison-c9gzib`. Nieuw palet/fonts (`blits-kleurenpalet-2026-10`) vervangt `blits-kleur-typografie-herzien` (SUPERSEDED-banner); merkgids §3/§4 en BLITS-pagina bijgewerkt; Drive-bron `wie-is-blits-missie-visie` als voorloper gelabeld.

## [2026-10-12] correction | specimen-tekst is geen merktekst; palet-mapping bevestigd

Bart: "Laat ze de wereld ontdekken…" op de fontpagina is geen vastgestelde merktekst (aanname van de assistent was fout) — `wie-is-blits-missie-visie` en `blits` gecorrigeerd. Night Pitch Green vervangt olijfgroen; Beachball Volley Beige bewust.

## [2026-10-12] update | BLITS verpakkingsvoorstel herzien

§ Verpakking & productpresentatie in `wiki/brands/blits.md` herschreven op nieuw palet/fonts (brand-packaging-skill). Status voorstel; vijf aannames te bevestigen. `hot.md` bijgewerkt.

## [2026-10-12] update | BLITS verpakking: aannames beantwoord

Bart beantwoordde de vijf aannames: schap-klaar-uitvoering (wraplabel) toegevoegd, minimale tekstset (CE, breekbaar), budget laag, kraft-proefdruk. Maten/gewichten trampolines/veerhoezen uit Drive-offerte "Quote request BLITS – Toppy 2027" opgenomen (geen prijzen).

## [2026-10-12] ingest | BLITS heritage → ontwerpelementen

Nieuwe playbook `wiki/playbooks/blits-ontwerpelementen-heritage.md`: heritage-codes vertaald naar web-/grafische bouwstenen op nieuw palet/fonts. Open: spanning met toon (Laatste doelpunt wint), handschriftaccent na Kalam, afgesneden-hoek-vorm. Index en BLITS-pagina bijgewerkt.

## [2026-10-12] export | Designerpakket BLITS (5 Word-documenten)

Vijf Word-documenten voor de overdracht aan de brandmanager en de designers, samengesteld uit de BLITS-vaultpagina's: overdracht, merkfundament, huisstijl, webelementen, producten en verpakking. Bron-markdown en .docx in `now/briefs/designerpakket-2026-10-12/`. Tone of voice en heritage-verwijzingen zijn door Bart apart aangeleverd en zitten niet in dit pakket.

## [2026-10-12] update | Merkfundament aangevuld (strategiegaten)

Bij controle bleken in het designerpakket te ontbreken: context en businessdoelen, visie/missie/USP's uit 2024 (te bevestigen), tagline-onderbouwing, neo-heritage als strategische laag, merkcanvas-overzicht en hoe de strategie tot stand kwam. Toegevoegd aan `BLITS_02_Merkfundament`; open punt visie/missie toegevoegd aan de overdracht.

## [2026-10-12] ingest | BLITS True Story Canvas

True Story Canvas (Truman, 13 onderdelen) ingevuld voor BLITS uit de kennisbank: nieuwe playbook `wiki/playbooks/blits-true-story-canvas.md` en een typbaar invulformulier (Artifact). 7 ingevuld, 5 voorstel, 1 open (merkmissie). Index en BLITS-pagina bijgewerkt.

## [2026-10-14] fix | BLITS merkwaarden ontbraken in de merkgids, branch losgekoppeld van main

Bart meldde via een andere sessie dat de kernwaarden niet in de kennisbank
te vinden waren. Onderzoek: [[blits-merkgids]] miste sinds het aanmaken
(2026-10-10) de secties Merkwaarden/persoonlijkheid en Doelgroep-persona's
— de waarden stonden wél altijd op [[blits]] zelf, alleen niet in de
samengevatte merkgids. Tweede, groter probleem gevonden: de sessie werkte
op een geïsoleerde branch (`claude/compassionate-tesla-ejdcex`) die nooit
met `main` was samengevoegd op het moment van de laatste commits — inmiddels
bleek al het oudere werk daar wél in opgenomen (via merges door een andere
sessie), maar deze fix dreigde opnieuw op een losse branch te blijven staan
en dus onvindbaar te zijn, precies het scenario dat CLAUDE.md sinds
2026-10-12 beschrijft ("alles moet altijd meteen naar de kennisbank").
Opgelost: branch vanaf actuele `main` gestart, merkgids hersteld (nu ook op
het sinds 2026-10-12 geldende kleurenpalet, zie
[[blits-kleurenpalet-2026-10]]), en [[blits-sportlijn-productrebrand]]
bijgewerkt naar hetzelfde palet (stond nog op olijfgroen/koraalrood,
al gesignaleerd als "te herzien" in [[blits]] § Visuele identiteit maar nog
niet gedaan). Via PR direct naar `main` gezet.

## [2026-10-14] update | Designerpakket en True Story Canvas bijgewerkt

Na PR 8 (merkgids hersteld, sport-lijn-rebrand op nieuw palet) en nieuwe Toppy-kennisbank-info (eerste resellers Outdoorspeelgoed.nl en Speelgoed de Betuwe; creator-programma-pitch): documenten 1 (overdracht), 2 (merkfundament) en 5 (producten en verpakking) bijgewerkt; 3 en 4 inhoudelijk ongewijzigd. True Story Canvas: merkwaarden en kernwaarde uit elkaar gehaald (de merkgids noemt de vijf waarden ook "kernwaarden"), bewijs aangevuld met eerste resellers. Kernwaarde (enkelvoud) en merkvisie nog steeds niet vastgesteld door Bart.

## [2026-10-20] update | BLITS-website voor dealers gestart, open punten verwerkt

Bart startte de BLITS-dealerwebsite via Claude Design. Nieuw: initiatief [[blits-website-dealers]], besluit [[blits-open-punten-2026-10-20]], designbrief `now/briefs/blits-website/designbrief.md`. Verwerkt: "Laatste doelpunt wint" geschrapt (Golden Goal-bies heroverwogen), "you" blijft, "vuile knieën zijn medailles" blijft, merkvormen en kleurregels samen met Claude Design, logobestanden en actuele kleur-/font-pdf's in `.raw/2026-10-20/` (PLAY MORE-lockup verouderd). Handschriftaccent wacht op bevestiging. Toppy-vault: Timeline-regel.

## [2026-10-20] ingest | BLITS moodboard campagneshots

Vijf referentiebeelden van het campagne-moodboard opgeslagen in `.raw/2026-10-20/moodboard-campagne/`; beeldtaal gedistilleerd in [[blits-moodboard-campagne]] en samengevat in de designbrief. Lifestyle- en packshotbord volgen. Open: ruimere lichtregel voor campagne dan de sport-lijnregel.

## [2026-10-20] ingest | BLITS moodboard lifestyleshots

Vijf referentiebeelden van het lifestyle-moodboard (voor de productpagina) opgeslagen in `.raw/2026-10-20/moodboard-lifestyle/`; beeldtaal in [[blits-moodboard-lifestyle]] en designbrief. Gebruiksregel vastgelegd: campagne = homepage/campagnes, nooit productpagina; lifestyle = productpagina. Packshotbord volgt. Open: geldt dit bord ook voor de speeltoestellen-lijn?

## [2026-10-20] ingest | BLITS moodboard packshots

Vijf referentiebeelden van het packshot-moodboard in `.raw/2026-10-20/moodboard-packshots/`; beeldtaal in [[blits-moodboard-packshots]], designbrief en initiatief bijgewerkt. Alle drie de moodboards (campagne, lifestyle, packshots) zijn nu binnen. Open: eigen BLITS-productbeeld nodig, grote producten en macro-details.

## [2026-10-20] update | BLITS-website: logo- en handschriftbesluit

Bart: voor de website alleen de aangeleverde standaard schildlogo's (geen "Outside Wins."-lockup), en geen handschriftaccent. Verwerkt in [[blits-open-punten-2026-10-20]], [[blits-website-dealers]], designbrief, launch-acties en [[blits]]. Aan te leveren blijft: fontbestanden (TT Autonomous, Archia) en echt productbeeld.

## [2026-10-20] ingest | Archia-fontbestanden

Archia Regular, SemiBold en Bold (`.otf`, geldig als font) opgeslagen in `.raw/2026-10-20/fonts/`. TT Autonomous nog niet aangeleverd. Licentie-/webgebruik van beide fonts volgens Bart gecheckt; niet in de bestanden zelf terug te vinden.

## [2026-10-20] update | TT Autonomous komt van Adobe Fonts

Bart heeft geen TT Autonomous-bestanden, alleen de Adobe Fonts-pagina (foundry TypeType). Op Adobe Fonts is webgebruik via een Web Project (kit), er zijn geen downloads; zelf hosten is een aparte licentie bij TypeType. Of de stijl Bold Outline Italic bestaat is niet bevestigd (anders text-stroke op Bold Italic). Verwerkt in designbrief, initiatief en actielijst.

## [2026-10-20] update | BLITS-website: geen Adobe-kit, lichtregel en lifestylebord

Adobe-kit voor TT Autonomous vervalt (lukt niet): vervangend font in het design. Standaardaannames vastgelegd: lifestylebord geldt voor de sport-lijn, speeltoestellen-lijn krijgt later een eigen bord; campagnebeeld mag gouden/bewolkt licht, product/lifestyle sport-lijn hard middaglicht. Zie [[blits-open-punten-2026-10-20]].

## [2026-10-20] update | BLITS-website: eén beeldlijn, startassortiment, Apple-ontwerpregels

Bart: één beeldlijn voor sport en speeltoestellen (sport iets meer modder, speeltoestellen iets cleaner/warmer); startassortiment = alle live BLITS-producten bij Toppy (45, alleen sport-lijn, uit Toppy-data) → `now/briefs/blits-website/producten-live.md`; Apple-ontwerpregels toepassen: negen skills uit emilkowalski/skills in `.claude/skills/design/` geïmporteerd, samengevat in designbrief § 11, CLAUDE.md bijgewerkt. Besluit: [[blits-open-punten-2026-10-20]].

## [2026-10-20] update | BLITS-website: geen speeltoestellen, nieuw beeld, beeldplan

Bart: op de site en in het merkverhaal niets over speeltoestellen (generiek: buitenspeelgoed), alle beelden nieuw (huidige foto's tijdelijk). Verwerkt in designbrief, [[blits-open-punten-2026-10-20]], [[blits-website-dealers]]; voorstel voor beeldproductie in `now/briefs/blits-website/beeldplan.md`.

## [2026-10-20] update | BLITS-website: bestaande beelden en huidige productuiterlijken voor nu

Bart: eerste versie gebruikt de bestaande afbeeldingen en de huidige productuiterlijken; nieuwe beelden en nieuw productuiterlijk komen later en vervangen dan de bestanden. Beeldplan (`now/briefs/blits-website/beeldplan.md`) geparkeerd. Zie [[blits-open-punten-2026-10-20]].

## [2026-10-20] create | BLITS design system (Claude Artifact)

Eerste BLITS design system gebouwd en gepubliceerd als privé-Artifact (link in [[blits-website-dealers]]): tokens (palet, licht/donker thema), README met merkregels en scope-regel, Archia-fonts, zes omgekleurde logo-varianten, zes componenten met preview en een cover. TT Autonomous niet beschikbaar: stand-in Unbounded. Merkvormen en kleurgebruiksregels nog samen met Bart te bepalen.

## [2026-10-20] update | BLITS design system herzien na feedback

Koppen: stand-in font Archivo Expanded Black Italic i.p.v. Unbounded; kaarten met getrapte uitsnede in alle vier de hoeken; SpecPlate als geborsteld aluminium plaatje (nieuwe tokens aluminium-light/mid/engrave, enige uitzondering op 'flat'); outline-accent schoon. Open: analoge verwijzingen naar vroeger uitwerken (volgende ronde). Zie [[blits-website-dealers]].

## [2026-10-20] update | BLITS design system: kopfont Orbitron en analoge keuze-galerij

Kopfont-stand-in vervangen door Orbitron Black (past het best bij Barts voorbeelden). Analoge keuze-galerij A t/m K (veldlijnen, schemer, stoepkrijt, plaatjes, bies, texturen, scorebord-cijfers, lijniconen, scheidingslijnen, stuiter, fotobehandeling) gebouwd in het design system, per optie een code; wacht op Barts keuzes. Zie [[blits-website-dealers]].

## [2026-10-20] update | BLITS analoge keuzes verwerkt, lantaarnhero en meer texturen

Keuzes van Bart verwerkt (besluit 17 in [[blits-open-punten-2026-10-20]]); lantaarnhero B2 met animatie gebouwd (`LanternHero`); texturen uitgebreid met echte materialen (gras, kunstgras, modder, grind, tartan, hout, leer, regenplas); galerijen krijgen een 'gekozen'-markering. Eerder fout in dit besluitbestand hersteld: besluiten 10 t/m 16 stonden per ongeluk in de frontmatter, nu in de lijst. Zie [[blits-website-dealers]].

## [2026-10-20] update | Lantaarnhero goedgekeurd, texturen gekozen, texture-prompts

Groene boog uit de lantaarnhero verwijderd; zeven materiaaltexturen gekozen (beton, asfalt, kraft/zand, gras, modder, tartan, regenplas), vier vervallen; Nano Banana-prompts voor echte texturen in `now/briefs/blits-website/texture-prompts.md`. Besluit 18 in [[blits-open-punten-2026-10-20]].

## [2026-10-20] ingest | Echte texturen (Nano Banana)

Vijf getekende texturen vervangen door foto's van Bart (beton, asfalt, zand, gras, regenplas), opgeslagen in `.raw/2026-10-20/textures/` en als assets in het design system. Lantaarnhero gebruikt nu de asfaltfoto. Kraft, modder en tartanbaan nog placeholder. Besluit 19 in [[blits-open-punten-2026-10-20]].

## [2026-10-20] ingest | Modder en tartanbaan; kraft vervalt

Texturen compleet: beton, asfalt, zand, gras, modder, tartanbaan, regenplas, allemaal echte foto's (`.raw/2026-10-20/textures/`, design system). Kraft vervallen. Besluit 20 in [[blits-open-punten-2026-10-20]].

## [2026-10-20] update | Overdracht BLITS-website naar nieuwe sessie

Overdracht geschreven (`now/briefs/blits-website/overdracht-sessie.md`), bronbestanden en scripts van het design system bewaard (`now/briefs/blits-website/design-system-bron/`), gekleurde logo's en alle texturen in `.raw/2026-10-20/`. hot.md ververst. Zie [[blits-website-dealers]].

## [2026-10-20] build | BLITS-website: analoge componenten en Home-proef

Tien componenten toegevoegd aan het BLITS design system (v10: LanternHero, FieldLines, Icon, ChalkDoodle, ChalkDivider, FlipDigits, StampedShield, ChassisPlate, FilmStrip, Texture; PlaqueCard uitgebreid met media, backdrop, bies E1/E6 en J3-stuiter). Home-pagina gebouwd en als privé-Artifact gepubliceerd; bron in `now/briefs/blits-website/site/`. Zie [[blits-website-dealers]].

## [2026-10-20] update | BLITS Home-proef v2 na feedback van Bart

Campagnehero, Streetlight (lantaarn voor bakstenen muur verlicht de filmstrip), fotovakken, rustiger assortiment, inspirerende feiten, productspotlight en Find a dealer. Drie nieuwe componenten in het design system (v11: Photo, CampaignHero, Streetlight). Campagne-prompts in `now/briefs/blits-website/campagne-prompts.md`. Zie [[blits-website-dealers]].

## [2026-10-20] update | BLITS Home-proef v3

Feiten en spotlight gewisseld, feitentitel "OUTSIDE, COUNTED.", nieuw `Field`-component (design system v12) voor de dealerzoeker. Zie [[blits-website-dealers]].

## [2026-10-20] update | BLITS Home v4 na design- en merkreview

Twee review-agents (Apple-design en branding) bekeken Home v3; Bart akkoord op vrijwel alles. Besluiten 21-23 toegevoegd aan [[blits-open-punten-2026-10-20]] (geen prijzen, "toys", Home na review). Doorgevoerd in Home v4 en design system v13; samenvatting in `now/briefs/blits-website/review-home-2026-10-20.md`. Zie [[blits-website-dealers]].

## [2026-10-20] update | BLITS Home v5: laatste puntjes

Merkverhaal opnieuw opgemaakt, Arena-plaatje met garantie 5 jaar (zonder Norm en Also in), foto vult het vlak, winkelzoeker zonder losse regels. Besluit 24 in [[blits-open-punten-2026-10-20]]. Zie [[blits-website-dealers]].

## [2026-10-22] build | BLITS homepage-variant B

Nieuwe designbriefing van Bart vastgelegd (`now/briefs/blits-website/designbriefing-homepage-variant.md`). Variant B gebouwd als aparte pagina naast de bestaande Home; acht nieuwe componenten in het design system (v16). Besluit 25: handschrift mag, alleen als krijt (vervangt besluit 8). Zie [[blits-website-dealers]].

## [2026-10-22] update | BLITS variant B: producten als echte uitsnede

Productfoto's in variant B vervangen door transparante uitsneden (WebP) vóór de groene vlakken; geen multiply meer. Zie [[blits-website-dealers]].

## [2026-10-22] ingest | BLITS campagnefoto straatvoetbal

Eerste campagnefoto van Bart in `.raw/2026-10-22/campagne/`; als hero en polaroid-detail in homepage-variant B. Zie [[blits-website-dealers]].

## [2026-10-22] ingest | BLITS campagnefoto vrienden bij het hek

Tweede campagnefoto van Bart in `.raw/2026-10-22/campagne/`; bij "Kids grow up outside" in homepage-variant B, met polaroid-detail. Nike-logo's op de sneakers gesignaleerd. Zie [[blits-website-dealers]].

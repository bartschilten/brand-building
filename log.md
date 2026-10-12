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

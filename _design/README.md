# Opslag Katwoude — Design System

> *"Gewoon een container. Gewoon opslag. Tussen de weilanden."*

Dit design system ondersteunt het verhuurplatform en marketingwebsite van **Opslag Katwoude** — een nieuwe, lokale aanbieder van 24 m² zeecontainers op Langedijk 9 in Katwoude. Opening Q2 2026.

---

## Brand context

**Waar het staat.** Niet op een bedrijventerrein. Letterlijk tussen de weilanden naast Hotel Katwoude, tussen Volendam en Monnickendam. Open polderland, Markermeer aan de horizon, koeien in de wei. Geen enkele grote storage-keten (Shurgard, City Box) heeft dit — dat is de meest onderscheidende troef van het merk.

**Wat het verkoopt.** 400+ zeecontainers van 10 × 2,4 m (24 m²) voor €175/maand. Een gestandaardiseerd, transparant product.

**Hoe je het huurt.** 100% digitaal via de website: reserveren (30 min timer) → contract tekenen (DocuSeal) → betalen (Mollie, iDEAL + SEPA) → automatische onboarding per e-mail. Geen verkoopgesprekken, geen balie.

**Doelgroep.** Particulieren en ZZP'ers / kleine ondernemers in een straal van ~7 km (Volendam, Edam, Monnickendam, Purmerend). 22–67 jaar, overwegend mannen. Behoefte ontstaat vaak op een concreet moment: verhuizing, verbouwing, bedrijfsvoorraad, gereedschap, archief, seizoensopslag.

**De strategische belofte.** Dichtbij, gemak, goedkoopste. In die volgorde.

**De merkhouding.** Nuchter, stil, feitelijk, lokaal. Geen verkooppraatjes, geen uitroeptekens, geen corporate taal. Het merk past bij de plek: open, rustig, degelijk, eerlijk. **Niet** trendy, speels, hightech, urban of hip.

---

## Bronnen

Dit system is gebouwd op basis van het briefing-document van Aradon/Schurq:

- `uploads/Opslag katwoude  _ werkdoc lisanne  .txt` — strategische briefing, associaties, palet, typografie, tone of voice, beeldregie
- `uploads/Opslag Katwoude -  marketingvoorstel 2026.pdf` — marketingplan, doelgroep, kanalen, verhuurplatform-scope
- `uploads/marketingvoorstel.txt` — platte-tekst versie van de PDF

Er was **geen bestaand merk, Figma-file of codebase** — het visuele systeem is vanaf nul opgebouwd volgens de richtingen uit de briefing.

---

## Content fundamentals

De briefing is hier heel specifiek. Aanhouden.

### Stem & toon

**Nuchter, stil, feitelijk.** De taal van iemand die niets te verbergen heeft en geen moeite doet om je te overtuigen — *precies daardoor* overtuigt het. Noord-Hollands boerenland: geen poespas, doen wat je zegt.

### Taal

**Dutch-first.** Alle UI-copy en content is Nederlands. Engels mag alleen als technisch onvermijdelijk (bv. e-mailadressen, bestandsnamen). Geen Engelse leenwoorden waar een goed Nederlands alternatief is: "boeken" niet "book", "werkwijze" niet "how it works".

### Aanspreekvorm

**Je/jij.** Geen "u". Past bij lokaal, dichtbij, nuchter. Nooit "uw persoonlijke opslagspecialist".

### Ritme

**Korte zinnen. Puntjes ertussen. Elk woord krijgt lucht.** Dat ritme is de uitvoering van "ruimte" in taal.

Voorbeelden (direct uit briefing):

> 24 m². €175 per maand. Vandaag geregeld.

> Gewoon een container. Gewoon opslag.

> Naast Hotel Katwoude. Tussen de weilanden.

> Geen contracten op papier. Geen gedoe.

### Casing

**Sentence case overal.** Nooit Title Case op knoppen of koppen. ALL CAPS alleen in kleine eyebrow-labels (≤13px) met brede letter-spacing. Nooit ALL CAPS in headings.

### Interpunctie

- Korte zinnen met punten. Komma's en puntkomma's spaarzaam.
- Geen uitroeptekens. Ooit.
- Em-dashes (—) mogen voor ritme, maar spaarzaam.
- Prijzen altijd met € en zonder komma-00: **€175**, niet €175,00.
- m² met echte superscript, niet m2.

### Vermijden

- "Dé opslagoplossing van de regio!"
- "Uw persoonlijke opslagspecialist"
- "Veilig, betrouwbaar **én** flexibel"
- "NU BOEKEN!!"
- "Dé beste keuze voor …"
- Superlatieven in het algemeen
- Lijstjes van drie eigenschappen achter elkaar met "én"

### Emoji

**Geen emoji.** Ooit. Niet in UI, niet in e-mails, niet in marketing. Past niet bij de merkhouding.

### Cijfers & feiten

Feiten zijn het overtuigingsmiddel. Niet bijvoeglijke naamwoorden. Zeg "24 m²" niet "ruim". Zeg "€175/maand" niet "scherp geprijsd". Zeg "naast Hotel Katwoude" niet "gunstig gelegen".

---

## Visual foundations

### Palet — "polder bij laag licht"

Alle kleuren komen uit de omgeving: weiland, natte aarde, koolzaad, ongebleekt linnen, Markermeer. Het merk voelt alsof het hóórt waar het staat.

| Rol | Token | Hex | Gebruik |
|---|---|---|---|
| **Primair** | `--green-800` | `#2E3F2A` | Logo, headers, grote vlakken, footer. De merkkleur. |
| **Primair donker** | `--green-900` | `#1C2819` | Hover/press op groene vlakken. |
| **Anker (tekst)** | `--ink-900` | `#1F1C18` | Alle lichaamstekst. Zacht zwart, geen hard #000. |
| **Accent** | `--oker-600` | `#C9A961` | Knoppen, belangrijke CTA's, kleine markeringen. Gedempt, niet fel. |
| **Basis** | `--room-100` | `#F2ECE0` | Primaire achtergrond. Ongebleekt linnen, warm. |
| **Basis licht** | `--room-50`  | `#F8F4EB` | Cards, verhoogde panels. |
| **Ondersteunend** | `--water-600` | `#5A6F78` | Iconen, lijnen, subtiele accenten. Markermeer. |

Zie `colors_and_type.css` voor het volledige palet, inclusief tints en semantic tokens (`--fg`, `--bg`, `--border`, etc.).

**Kleurgebruik per vlak:**
- Achtergrond: altijd room (`--room-100`) of groen (`--green-800`). Nooit wit.
- Tekst op room: ink (`--ink-900`). Tekst op groen: room (`--room-50`).
- CTA's: oker op room, of oker op groen. Tekst op oker: **altijd ink** (`--ink-900`), nooit wit — oker is niet donker genoeg voor wit.
- Waterblauw is optioneel — alleen voor fijne iconografie en lijntjes. Nooit dominant.

### Typografie

**Display: DM Sans** (variable, via Google Fonts). Bold, direct, geometrische sans met een open karakter. Gezet op 700 voor hero/H2, 600 voor H3/H4. Ook gebruikt voor quotes, prijzen en eyebrow-cijfers.

**Body: Work Sans** (via Google Fonts). Rustig, humanist, leesbaar vanaf 15 px. De doelgroep loopt tot 67 jaar — leesbaarheid gaat boven stijl.

**Regels:**
- Body-tekst nooit onder 15 px op marketing, 16 px op boekingsflow.
- Display-koppen (h1/h2): `font-weight: 700`, `letter-spacing: -0.025em`, `line-height: 1.05`.
- Op elke display-kop staat precies één woord in een **oker highlight-blok** — het signatuurwoord van de zin. Zie below.
- `text-wrap: balance` op headings, `text-wrap: pretty` op body.
- Eyebrow-labels: 12–13 px, uppercase, `letter-spacing: 0.08em`, kleur oker (op groen) of ink-500 (op room).

### Huisstijl-signatuur — oker highlight-blok

Elke grote kop eindigt in een signatuurwoord, gezet in een **lichtjes scheefgezet oker blok** (`--oker-500`, `transform: skew(-2deg)`). Altijd **één** woord, meestal het laatste. Dit is onze visuele handtekening — niet facultatief op display-koppen.

```jsx
<Highlight>opslag.</Highlight>
// achtergrond: var(--oker-500)
// tekstkleur: var(--ink-900)
// skew -2° op buiten-span, skew 2° op binnen-span om tekst recht te houden
```

Zie `preview/house-style.html` voor de referentie.

**Niet gebruiken:** Montserrat, Poppins, Bebas Neue, Roboto, alle geometric display caps. Die horen bij een andere wereld.

### Spacing & layout

Ruim. Laat lucht. De openheid van het landschap is ook hier de metafoor.

- Schaal: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px (1, 2, 3, 4, 5, 6, 7, 8, 9, 10).
- Sectie-scheidingen op desktop: minimaal 96 px verticaal.
- Content-containers: 880 px voor tekst, 1120 px voor layouts, 1320 px voor hero.
- Ruim gebruik van whitespace. Eerder te veel dan te weinig.

### Responsive — mobiele schaal

Breakpoint op **768 px**. Daaronder geldt:

| Element | Desktop | Mobiel |
|---|---|---|
| Hero H1 | `clamp(48, 5.5vw, 84)` | `clamp(38, 9.5vw, 52)` |
| Sectie H2 | 48–56 | `clamp(28, 6.5vw, 38)` |
| H3 / card titles | 22–26 | 18 |
| Hero lede | 18 / 29 | 15 / 22 |
| Grids 3–4 kol | `repeat(N, 1fr)` | 1 kolom, stacked |
| Sectie padding | 96–120 | 56–72 |

De mobiele overrides zitten in een `<style>` block met `@media (max-width: 768px)` en `!important` om inline-styled grids te overschrijven. Nav verandert naar een hamburger + drawer; hero-stats stacken naar 2×2. Zie `preview/responsive-scale.html`.

### Radii

Degelijk, niet pillow-soft. Ergens tussen schuur en container.

- Cards, inputs: **6 px** (`--radius-md`).
- Grotere panels: **10 px**.
- Hero blocks: **16 px**.
- **CTA's en pill-navigatie: `999px`** — volle pill. Dit is signatuur.
- **Nooit** de 20–24 px SaaS-ronding op cards. Dat voelt verkeerd.

### Schaduw

Subtiel, warm (ink-basis, geen koele blauwe schaduw).

- `--shadow-sm` voor rust-staat van cards (bijna onzichtbaar).
- `--shadow-md` voor hovered/raised cards.
- `--shadow-lg` voor dropdowns, modals.
- Nooit glow, neon, of gekleurde shadows.

### Borders

Borders doen veel werk in dit systeem — vaker dan shadows. 1 px solid `--border` (`#DDD2BD`, zandsteen) tussen cards en inputs. Op donkere (groene) achtergronden: `--border-inverse` (`#364A32`).

### Animatie

Rustig. Geen bouncing, geen springs, geen lange elasticiteit.

- Standaard duration: 200 ms (`--dur-base`).
- Standaard easing: `cubic-bezier(0.4, 0, 0.2, 1)`.
- Fades en kleur-transitions voornamelijk. Geen grote transforms.
- Hover: kleur verschuift een tint. Press: kleur één tint donkerder, geen shrink.

### Hover & press states

- **Links:** underline kleurt van `--green-300` → `--green-800`.
- **Primary button (groen):** `--green-800` → `--green-900` op hover. Op press: dezelfde kleur, geen shrink.
- **Accent button (oker):** `--oker-600` → `--oker-700` op hover.
- **Cards (klikbaar):** shadow van `sm` → `md` + border van `--border` → `--border-strong`. Geen lift/translate.
- **Focus:** 2 px outline `--oker-600` met 2 px offset. Zichtbaar, niet schreeuwerig.

### Beeldgebruik

Dit is waar het merk wint of verliest. Uit de briefing:

**Wel:**
- Brede landschapsfoto's met containers klein in het weidse Waterland-landschap.
- Vroege ochtend of gouden uur, lage zon, lange schaduwen.
- Mist boven de weilanden, containers net zichtbaar.
- Koeien in het weiland náást het terrein.
- Detailfoto's van textuur: rijp op containerdeur, regendruppels op staal, hand op slot.
- Drone-shots die schaal tonen zonder industrieel te voelen.

**Niet:**
- Witte studio-shots van dozen.
- Mensen met duim omhoog, glimlachende families.
- Stock van binnenkanten van opslagunits.
- Harde middagzon, hoge contrasten.
- Alles wat "commercieel" oogt.

**Stijl:** natuurlijke kleuren, zachte contrasten, veel lucht in de compositie. Warm, niet koel. Licht grain mag. Zwart-wit mag voor details, niet voor landschap.

**Placeholders.** Tot echte fotografie beschikbaar is, gebruikt het systeem SVG-placeholders in `assets/` (`hero-polder-placeholder.svg`, `texture-door-placeholder.svg`). Deze zijn *expliciet als placeholder gelabeld* en moeten vervangen worden voor oplevering.

### Transparantie, blur, gradients

- **Gradients:** spaarzaam. Alleen zeer subtiel (lucht → horizon) in hero-afbeeldingen. Nooit bluish-purple, nooit dekkende product-cards.
- **Transparantie:** ja, voor mist-effecten (10–35% room op beeld) en subtiele overlays.
- **Blur:** nee. Geen glassmorphism, geen backdrop-filter-tropes. Past niet bij het merk.

### Layout-regels
- Sticky nav: **zwevende pill** top-center, donkergroene glas-achtergrond (`rgba(248,244,235,0.12)` + blur). De pagina-achtergrond is sterk (foto, groen, of room) — de nav zweeft erbovenop, niet eronder.
- Footer: groen (`--green-800`), room tekst.
- Groene secties zijn niet zeldzaam meer — hero, Werkwijze en CTA mogen allemaal groen zijn, afgewisseld met room. Ritme, niet spaarzaamheid, is de regel.
- Geen full-bleed gekleurde strepen. Geen diagonale scheidingen. Geen parallax.

---

## Components

### Pill CTA — de huisknop

De enige primaire call-to-action-vorm in het systeem. Gebruikt overal: hero, cards, footer-CTA, formulieren.

- **Vorm:** volle pill, `border-radius: 999px`.
- **Maat:** 16 px verticaal, 22–26 px horizontaal (rechts extra ruimte voor de pijl-cirkel).
- **Variant "dark"** (default): `--ink-900` achtergrond, `--room-50` tekst, `--oker-600` pijl-cirkel. Gebruik op room en op foto/groene secties.
- **Variant "accent"**: `--oker-600` achtergrond, `--ink-900` tekst, `--ink-900` pijl-cirkel met room pijl. Gebruik voor hoogste-prioriteit CTA's en bevestigingen.
- **Altijd met pijl-cirkel rechts.** De cirkel is geen icoon — het is onderdeel van de knop. Nooit weglaten.
- **Schaduw:** `0 8px 20px rgba(31,28,24,0.15)` op room. Op donkere achtergrond: geen schaduw (prop `onDark`).
- **Tekstlink-variant** (tertiair): onderstreept, `text-underline-offset: 4px`, zonder pijl. Voor "Bekijk werkwijze" en soortgelijke nevenacties.

Zie `preview/buttons.html` en `preview/house-style.html` voor de referentie.

### Pill navigation

Zwevende top-center pill met glas-achtergrond. Actieve link krijgt room-bol als achtergrond. Gebruikt op alle publieke pagina's. Op mobiel (≤ 768 px) klapt de nav in naar logo + hamburger; het menu opent in een drawer onder de pill.

### Highlight — signatuurblok op koppen

Oker skew-span om precies één woord per display-kop. Zie _Huisstijl-signatuur_ hierboven. Niet op body, niet op UI-labels.

### FAQ — gestapelde rij

Accordion-items, geen cards. Elk item is één regel met `+` rechts; bij open animeert de body via `max-height`-transitie. Geen cards met schaduw — strak, documentair.

### Quote card — social proof

Room-50 card met 5-sterren rij (oker), display-quote in 18–20 px semi-bold, byline met plaats + usecase eronder. Gebruikt in de Social Proof-sectie (tussen Propositie en Container).

### Plattegrond — SVG-kaart

Hand-getekende SVG van Katwoude met Markermeer, N247, nabije plaatsen, en onze locatie als oker marker. Niet Google Maps — een merk-passende illustratie. Zie Locatie-sectie.

### Homepage — vaste sectie-volgorde

Hero → Propositie → Social Proof → Container → Werkwijze → FAQ → Plattegrond/Locatie → CTA → Footer. Ritme van lichte room-50 basis met één donkere (green-800) sectie (Werkwijze) en één oker accent (CTA). Niet meer dan één donkere en één oker per pagina — anders wordt het druk.

### Propositie-varianten

Drie layouts voor dezelfde 4 USP's, toggle-baar via Tweaks:
- **A** — 4-koloms grid met iconen
- **B** — Groot genummerd 01–04, tekst als held
- **C** — Asymmetrisch, 1 groot + 3 klein

---

## Iconography

**Systeem:** [Lucide Icons](https://lucide.dev) (CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`).

Reden: Lucide heeft consistente 1.5 px stroke-weight, open vorm-taal, geen overdreven rondingen. Past bij de nuchterheid van het merk. **Dit is een substitutie** — er bestaat geen eigen iconenset, en de briefing specificeert geen set. Flag voor gebruiker: als er liever een eigen set komt, moet die aangeleverd worden.

**Regels:**
- Stroke: 1.5 px (Lucide default). Niet aanpassen.
- Kleur: erven van tekst (`currentColor`). Op room: `--ink-900` of `--ink-500`. Op groen: `--room-50`.
- Formaat: 16, 20, of 24 px. Niet groter in UI — icons zijn aanvullend, niet decoratief.
- Altijd met of naast tekst. Geen icon-only knoppen behalve in toolbars (en dan met tooltip).

**Geen emoji.** Zie Content Fundamentals.

**Geen unicode-symbolen als icon.** Geen ▲ ▼ ✓ × als UI-element. Gebruik het echte icon.

**Eigen brand-SVGs** in `assets/`:
- `logo.svg` — primair logo (horizontaal, voor op room)
- `logo-inverse.svg` — logo voor donkere achtergrond (groen, footer)
- `mark.svg` — beeldmerk alleen (favicon, app-icon, kleine plekken)
- `hero-polder-placeholder.svg` — hero-plaatsvervanger tot echte fotografie binnenkomt
- `texture-door-placeholder.svg` — containerdeur-detail, placeholder

---

## Index van dit systeem

### Root
- `README.md` — dit bestand
- `colors_and_type.css` — alle CSS-tokens (kleuren, type, spacing, radii, shadows, motion)
- `SKILL.md` — Claude-skill instructies zodat dit system aanroepbaar is als skill

### `assets/`
- `logo.svg`, `logo-inverse.svg`, `mark.svg`
- `hero-weiland.jpeg` — hero achtergrond (weilandfoto)
- `hero-weiland-v2.jpeg` — alternatieve hero-foto
- `containers-weiland.jpeg` — containers in het weiland, gebruikt als achtergrond op het Werkwijze-blok
- `hero-polder-placeholder.svg`, `texture-door-placeholder.svg` — SVG-placeholders (fallback)

### `preview/`
Design-systeem-kaarten die in de Design System tab verschijnen. Kleurstalen, type-specimens, knop-states, form-states, etc.

### `ui_kits/website/`
UI kit voor de marketingwebsite: Home, Werkwijze, Contact, Blog. Klik-door prototype in `index.html`, herbruikbare componenten in losse `.jsx` bestanden.

### `uploads/`
Originele briefing-documenten (niet bewerkt).

---

## Open punten / caveats

1. **Geen echte fotografie** — hero en detail-beelden zijn SVG placeholders. Volgens de briefing is fotografie cruciaal ("dit is waar je merk wint of verliest"). Aanbevolen: shoot op locatie bij gouden uur, mist, koeien erbij.
2. **Geen echte containerfoto's** — het logo en de beeldmerken gebruiken een vereenvoudigde container-silhouet. Na fotoshoot mogelijk iteratie op het beeldmerk.
3. **Iconenset is Lucide** — open substitutie, kan vervangen worden door eigen set.
4. **Fraunces & Inter via Google Fonts** — geen lokale `.ttf` files geïnstalleerd. Kan toegevoegd worden voor offline/self-hosted gebruik.
5. **Logo is v1** — de wordmark heeft een eenvoudige glyph (container op horizon). Voor een definitief logo zou een professionele logo-ontwerper erbij moeten, of een volgende design-ronde.

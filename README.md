# Website UI kit 1 

Klikbare recreatie van de Opslag Katwoude marketingwebsite + boekingsflow. Alles volgens het design system in `/colors_and_type.css` en de briefing.

## Paginas

| Route | Component | Status |
|---|---|---|
| `home` | `HomePage.jsx` | Hero, 4-propositie grid, container-prijs, werkwijze teaser, locatie |
| `werkwijze` | `WerkwijzePage.jsx` | 4 stappen volledig uitgeklapt |
| `contact` | `ContactPage.jsx` | Contactgegevens + formulier (met success-state) |
| `blog` | `BlogPages.jsx` → `BlogListPage` | Blog overzicht (3 voorbeeld-posts) |
| `blog-detail` | `BlogPages.jsx` → `BlogDetailPage` | Blog-detail met placeholder-artikel |
| `boeken` | `BoekenPage.jsx` | 4-staps boekingsflow met 30-min timer, DocuSeal placeholder, confirmatie |

## Componenten

- **`Primitives.jsx`** — `Button`, `Eyebrow`, `Section`, `Card`, `Icon` (inline Lucide-stijl SVGs). Shared building blocks.
- **`Nav.jsx`** — `Header` (sticky, logo + nav + CTA) en `Footer` (groen, 4 kolommen).
- **`Field`** — input/textarea component in `ContactPage.jsx`, herbruikt in `BoekenPage.jsx`.

## Flow

Navigatie loopt via één `App` state in `index.html`. Huidige pagina wordt in `localStorage` gezet — refresh landt je op dezelfde pagina.

## Wat werkt

- Klik-door tussen alle pagina's
- Blog-detail vanuit kaart
- Contactformulier submit → success-state
- Boekingsflow stap 1 → 2 → 3 → 4 met timer
- Hover states op cards en knoppen
- Focus states op inputs

## Wat nog ontbreekt

- Echte fotografie — alle afbeeldingen zijn SVG placeholders
- Google Maps embed op contact/home
- Echte blog-content
- Admin dashboard (buiten scope van briefing website-pagina's)
- 404, Voorwaarden, Privacy, SEO-pagina's (genoemd in briefing, niet gemockt)
- Mobiele layout — ontwerp is desktop-first; verantwoordelijkheid voor breakpoints ligt bij productie

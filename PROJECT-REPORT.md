# HS-CS-FE-Migration — Full Project Build Report

> This document covers every step taken to migrate the Smuves website from HubSpot CMS to a standalone React/Vite frontend powered by Contentstack as the headless CMS. Nothing is omitted.

---

## Table of Contents

1. [Project Goal](#1-project-goal)
2. [Repository Layout](#2-repository-layout)
3. [Phase 1 — Source Analysis (HubSpot Theme)](#3-phase-1--source-analysis-hubspot-theme)
4. [Phase 2 — CSS Porting from the HubSpot Theme](#4-phase-2--css-porting-from-the-hubspot-theme)
5. [Phase 3 — Tech Stack & Tooling Setup](#5-phase-3--tech-stack--tooling-setup)
6. [Phase 4 — Contentstack Integration](#6-phase-4--contentstack-integration)
7. [Phase 5 — Shared Components (Header & Footer)](#7-phase-5--shared-components-header--footer)
8. [Phase 6 — Reusable Module Components](#8-phase-6--reusable-module-components)
9. [Phase 7 — Pages Built](#9-phase-7--pages-built)
10. [Phase 8 — Routing (React Router)](#10-phase-8--routing-react-router)
11. [Phase 9 — Data Layer (Hooks & Mappers)](#11-phase-9--data-layer-hooks--mappers)
12. [Phase 10 — Developer Tooling](#12-phase-10--developer-tooling)
13. [Phase 11 — Navbar Styling Iterations](#13-phase-11--navbar-styling-iterations)
14. [Environment Variables](#14-environment-variables)
15. [What Was Copied vs. What Was Built](#15-what-was-copied-vs-what-was-built)
16. [File-by-File Reference](#16-file-by-file-reference)

---

## 1. Project Goal

The live Smuves website (`www.smuves.com`) runs on **HubSpot CMS**. The goal of this project is to:

- **Migrate content** from HubSpot CMS into **Contentstack** (a headless CMS).
- **Rebuild the frontend** as a **React + Vite** SPA that fetches its content from Contentstack at runtime.
- **Preserve the exact visual design** of the HubSpot site — every colour, font, spacing token, gradient, and component layout must match the live site.
- Give the team the ability to manage content in Contentstack while the React app is served independently (decoupled from HubSpot).

---

## 2. Repository Layout

```
HS-CS-FE-migration/
│
├── my-theme/                     ← Original HubSpot theme (source of truth for CSS + structure)
│   ├── css/
│   │   ├── main.css              ← Master CSS import file (HubSpot @include syntax)
│   │   ├── custom-styles.css     ← Brand utility classes (gradients, CTAs, colours)
│   │   ├── theme-overrides.css
│   │   ├── elements/
│   │   │   ├── _typography.css   ← Base typography rules
│   │   │   ├── _buttons.css      ← Base button rules
│   │   │   ├── _forms.css
│   │   │   └── _tables.css
│   │   ├── objects/
│   │   │   ├── _layout.css       ← 12-column grid (.row-fluid / .spanN)
│   │   │   └── _containers-dnd.css
│   │   ├── components/
│   │   │   ├── _header.css       ← Header structural CSS
│   │   │   └── _default-modules.css
│   │   ├── generic/
│   │   │   ├── _normalize.css
│   │   │   └── _reset.css
│   │   ├── templates/
│   │   │   ├── blog.css
│   │   │   └── system.css
│   │   └── utilities/
│   │       └── _helper.css
│   │
│   ├── modules/
│   │   ├── Header.module/
│   │   │   ├── module.html       ← HubSpot Jinja2 header template
│   │   │   ├── module.css        ← Header-specific overrides
│   │   │   ├── module.js
│   │   │   └── fields.json
│   │   ├── Footer.module/
│   │   │   ├── module.html       ← Footer template (logo, link columns, copyright)
│   │   │   ├── module.css
│   │   │   ├── module.js
│   │   │   └── fields.json
│   │   ├── Hero.module/
│   │   │   ├── module.html       ← Hero section template (eyebrow, h1, checklist)
│   │   │   ├── module.css        ← Hero-specific styles (pill, heading gradient)
│   │   │   └── fields.json
│   │   ├── Description with CTAs.module/
│   │   │   ├── module.html       ← Desc+CTA block with primary-gradient background
│   │   │   ├── module.css
│   │   │   └── fields.json
│   │   ├── card.module/
│   │   ├── menu.module/
│   │   ├── pricing-card.module/
│   │   ├── social-follow.module/
│   │   ├── why choose module.module/
│   │   ├── button.module/
│   │   └── module-res-list.module/
│   │
│   ├── templates/
│   │   ├── home.html             ← HubSpot home page template
│   │   ├── about.html
│   │   ├── contact.html
│   │   ├── pricing.html
│   │   ├── blog-index.html
│   │   ├── blog-post.html
│   │   ├── hubdb.html
│   │   ├── landing-page.html
│   │   ├── qa-test.html
│   │   ├── layouts/base.html     ← Base layout wrapper
│   │   ├── partials/
│   │   │   ├── header.html
│   │   │   └── footer.html
│   │   └── system/               ← 404, 500, login, register, etc.
│   │
│   ├── sections/                 ← DND section presets
│   ├── fields.json               ← Theme-level field definitions
│   └── theme.json                ← Theme metadata (label: "smuves", author: HubSpot boilerplate)
│
├── src/                          ← React application source
│   ├── main.jsx                  ← Entry point (ReactDOM.createRoot)
│   ├── App.jsx                   ← Router definition (all 17 routes)
│   ├── index.css                 ← Global CSS (ported from my-theme)
│   │
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx        ← Fixed gradient navbar with dropdowns
│   │   │   └── Header.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx        ← 4-column footer (logo + links + copyright)
│   │   │   └── Footer.css
│   │   ├── MissingContent/
│   │   │   └── MissingContent.jsx ← Dev-only warning when CS data is absent
│   │   └── modules/
│   │       └── HeroV1/
│   │           ├── HeroV1.jsx    ← Reusable hero section component
│   │           └── HeroV1.css
│   │
│   ├── hooks/
│   │   ├── usePageData.js        ← Fetches CS entry + syncs document.title
│   │   └── usePageEntry.js       ← Core Contentstack query hook
│   │
│   ├── lib/
│   │   ├── contentstack.js       ← CS Delivery SDK singleton
│   │   └── mappers/
│   │       ├── heroMapper.js     ← Maps CS gf_hero_v1_module → HeroV1 props
│   │       └── descriptionCtaMapper.js ← Maps gf_description_with_ctas_module → props
│   │
│   └── pages/
│       ├── home/
│       │   ├── Home.jsx
│       │   └── sections/
│       │       ├── HeroSection.jsx        ← Static fallback hero (used pre-CS)
│       │       ├── DescriptionCtaSection.jsx
│       │       └── IconGridSection.jsx
│       ├── about/         About.jsx + About.css
│       ├── contact/       Contact.jsx + Contact.css
│       ├── product/       Product.jsx + Product.css
│       ├── features/      Features.jsx + Features.css
│       ├── pricing/       Pricing.jsx + Pricing.css
│       ├── integrations/  Integrations.jsx + Integrations.css
│       ├── updates/       ProductUpdates.jsx + ProductUpdates.css
│       ├── documentation/ Documentation.jsx + Documentation.css
│       ├── migration/     Migration.jsx + Migration.css
│       ├── platforms/
│       │   ├── PlatformPage.jsx           ← Shared template for platform pages
│       │   ├── HubSpotPlatform.jsx
│       │   ├── ContentstackPlatform.jsx
│       │   └── PlatformPage.css
│       ├── case-study/    CaseStudyRemote.jsx + CaseStudyRemote.css
│       ├── engineering/   Engineering.jsx + Engineering.css
│       ├── setup-guide/   SetupGuide.jsx + SetupGuide.css
│       └── policies/
│           ├── PrivacyPolicy.jsx
│           ├── TermsOfUse.jsx
│           └── Policy.css
│
├── entries-from-cs/              ← Contentstack content exports (JSON batches)
│   └── entries_000000_to_000019.json
│
├── html/                         ← Captured live HTML from smuves.com (reference)
│
├── homepage-analysis.md          ← Section-by-section DOM analysis of the home page
├── header-footer-analysis.md     ← Header/footer DOM & CSS analysis
├── homepage-visual-analysis.md   ← Visual/UX mapping of every section
├── homepage.dom.html             ← Full DOM snapshot of the live homepage
├── homepage.module-binding.md    ← HubSpot module → field mapping
├── homepage.css.deps.md          ← CSS class dependency tree
├── homepage.freeze.spec.json     ← Freeze spec for visual regression
├── homepage.assets.json          ← Asset inventory (images, fonts, SVGs)
│
├── .env                          ← Contentstack credentials (gitignored)
├── .gitignore
├── index.html                    ← Vite HTML shell
├── package.json
├── vite.config.js
└── PROJECT-REPORT.md             ← This file
```

---

## 3. Phase 1 — Source Analysis (HubSpot Theme)

### What was analysed

Before writing a single line of React, a thorough analysis of the live HubSpot site and its source theme was performed.

**Files produced during analysis:**

| File | Contents |
|------|----------|
| `homepage-analysis.md` | Full section-by-section DOM breakdown — every class, element, text, and data attribute on the homepage |
| `homepage-visual-analysis.md` | Visual design mapping — colours, fonts, spacing, layout proportions, responsive behaviour |
| `header-footer-analysis.md` | Detailed HTML and CSS analysis of the Header and Footer modules |
| `homepage.dom.html` | Raw HTML DOM snapshot captured from the live `smuves.com` homepage |
| `homepage.module-binding.md` | Maps each visible section on the homepage to its HubSpot module ID, field names, and Contentstack counterpart field |
| `homepage.css.deps.md` | CSS class dependency tree — which global classes each component depends on |
| `homepage.freeze.spec.json` | Visual freeze spec — documents exact pixel values, colours, and breakpoints for regression testing |
| `homepage.assets.json` | Inventory of every asset (logo, images, SVGs, fonts) referenced on the homepage with their CDN URLs |

### Key findings from analysis

1. **Font stack**: `Manrope` (body, nav, buttons) + `JetBrains Mono` (all headings h1–h6).
2. **Brand colours**:
   - Primary Teal: `#00C6B2` / `rgba(0, 198, 178, 1)`
   - Primary Blue: `#0083FF` / `rgba(0, 131, 255, 1)`
   - Primary gradient: `linear-gradient(90deg, rgba(0, 198, 178, 1) 0%, rgba(0, 131, 255, 1) 100%)`
   - Midnight Blue (dark): `#1C1C28`
   - Snow White: `#FAFAFA`
   - Mint: `#E0FBFC`
   - Neutral Gray: `#F5F7FA`
3. **Layout system**: 12-column flex grid via `.row-fluid` + `.spanN` classes, max-width `1240px`, `--column-gap: 2.13%`.
4. **Header**: Fixed positioned, originally semi-transparent white with backdrop-blur. Contains logo (SVG from HubSpot CDN), navigation menu with dropdown children, and two CTA buttons.
5. **Footer**: 4-column layout — branding column (logo + tagline + LinkedIn) and 3 navigation columns.
6. **HubSpot modules used on homepage**: `Hero.module` (eyebrow + h1 + checklist), `Description with CTAs.module` (gradient CTA block), Icon Grid module.

---

## 4. Phase 2 — CSS Porting from the HubSpot Theme

### Source files in `my-theme/`

The HubSpot theme is a **HubSpot CMS Boilerplate** (authored by HubSpot, customised for Smuves). The theme's CSS uses HubSpot's Jinja2-like `{% include %}` and `{% scope_css %}` directives. Since Vite cannot process these, every relevant CSS file was **manually ported and adapted** into `src/index.css` and component-level CSS files.

### What was copied verbatim or near-verbatim

| Theme source | Ported into | Notes |
|---|---|---|
| `css/generic/_reset.css` | `src/index.css` §Reset | Box-sizing, image rules |
| `css/generic/_normalize.css` | `src/index.css` §Normalize | line-height, text-size-adjust |
| `css/elements/_typography.css` | `src/index.css` §Typography | p, a, h1–h6, ul/ol margins |
| `css/elements/_buttons.css` | `src/index.css` §Buttons | `.button`, `.hs-button` base rules |
| `css/objects/_layout.css` | `src/index.css` §Layout | `.row-fluid`, `.spanN` grid; Jinja loop replaced with explicit span1–span12 |
| `css/objects/_containers-dnd.css` | `src/index.css` §Layout | `.dnd-section`, `.content-wrapper` |
| `css/components/_header.css` | `src/components/Header/Header.css` | `.header__container`, `.header__logo`, skip link, language switcher |
| `css/custom-styles.css` | `src/index.css` §Brand | **All utility classes** — `.primary-gradient`, `.primary-gradient-cta`, `.secondary-midnight-blue`, `.secondary-teal`, `.snow-white`, `.mint`, `.neutral-gray`, `.cta-white-primary`, `.cta-white-secondary`, `.green-cta`, `.black_arrow`, `.light-green-cta` |
| `modules/Header.module/module.css` | `src/components/Header/Header.css` | `.header-main`, `.header-holder`, `.menu-area`, mobile toggle, `.mobile-menu` |
| `modules/Footer.module/module.css` | `src/components/Footer/Footer.css` | `.footer-main`, `.footer-top`, `.footer-col`, `.footer-bottom` |
| `modules/Hero.module/module.css` | `src/components/modules/HeroV1/HeroV1.css` | `.eyebrow-area`, `.pill`, `.hero-section`, `.checklist-area` |
| `modules/Description with CTAs.module/module.css` | `src/pages/home/sections/DescriptionCtaSection.css` | `.desc-cta-section`, `.desc-cta-main` |

### What was adapted (not verbatim)

- **HubSpot Jinja2 syntax** removed: `{% scope_css %}`, `{{ module.style... }}`, `{% include '...' %}` — all replaced with static CSS values.
- **CSS custom properties**: `--column-gap`, `--column-width-multiplier` kept as-is.
- **`.page-center`**: Adapted from HubSpot's `.content-wrapper` — set to `max-width: 1240px; margin: 0 auto; padding: 0 40px;`.
- **Brand CSS variables for hero spacing**: Converted HubSpot's server-rendered inline `{{ module.style.desktop_spacings.css }}` values into React CSS custom properties (`--pt`, `--pb`, `--mpt`, `--mpb`).

### Key CSS tokens extracted and applied globally

```css
/* src/index.css — applied globally */
body {
  color: #1c1c28;
  font-family: 'Manrope', sans-serif;
}
h1–h6 {
  font-family: 'JetBrains Mono', monospace;
}

.primary-gradient {
  background: linear-gradient(90deg, rgba(0, 198, 178, 1) 0%, rgba(0, 131, 255, 1) 100%);
}
.green-cta {
  background: #00c6b2;
  border-radius: 18px;
  /* ... arrow pseudo-element via CDN SVG */
}
.black_arrow {
  background: #0a0a0a;
  border-radius: 18px;
  color: #00c6b2;
  /* ... arrow pseudo-element via CDN SVG */
}
```

---

## 5. Phase 3 — Tech Stack & Tooling Setup

### Stack chosen

| Tool | Version | Role |
|------|---------|------|
| **React** | 18.2.0 | UI framework |
| **Vite** | 5.1.4 | Build tool and dev server |
| **react-router-dom** | 6.22.0 | Client-side routing (SPA) |
| **@contentstack/delivery-sdk** | 5.2.2 | Contentstack Delivery + Preview API client |
| **@vitejs/plugin-react** | 4.2.1 | JSX transform + fast refresh |

### `package.json` scripts

```json
{
  "dev":     "vite",        // Start dev server with HMR
  "build":   "vite build",  // Production bundle
  "preview": "vite preview" // Preview the production build locally
}
```

### `index.html` (Vite shell)

Standard Vite HTML shell — imports Google Fonts for Manrope and JetBrains Mono, mounts the React app at `<div id="root">`.

---

## 6. Phase 4 — Contentstack Integration

### How the Contentstack client is configured

**File: `src/lib/contentstack.js`**

A single Contentstack stack instance is created and exported. It reads credentials from Vite environment variables (prefixed `VITE_` so they are exposed to the browser bundle):

```js
import contentstack, { Region } from '@contentstack/delivery-sdk';

const stack = contentstack.stack({
  apiKey:        import.meta.env.VITE_CS_API_KEY,
  deliveryToken: import.meta.env.VITE_CS_DELIVERY_TOKEN,
  environment:   import.meta.env.VITE_CS_ENVIRONMENT,  // "dev"
  region:        Region.US,
  // In development: route through Preview API so draft entries are visible
  ...(isDev && {
    live_preview: {
      enable:        true,
      preview_token: import.meta.env.VITE_CS_PREVIEW_TOKEN,
      host:          'rest-preview.contentstack.com',
    },
  }),
});
export default stack;
```

**Dev vs. Production behaviour:**
- `npm run dev` → Preview API is enabled, unpublished/draft CS entries are visible.
- `npm run build` → Standard Delivery API only, published entries only.

### Content Type used

All pages query the **`site_pages`** content type in Contentstack. Each page entry is identified by its SEO slug stored in the `gf_seo_fields.slug` field.

| Page | CS slug |
|------|---------|
| Home | `""` (empty string) |
| About | `"about"` |
| Contact | `"about/contact"` |
| Product | `"product"` |
| Features | `"product/features"` |
| Pricing | `"product/pricing"` |
| Services / Migration | `"services/website-migration"` |
| Case Study Remote | `"case-studies/remote"` |
| Privacy Policy | `"policies/privacy-policy"` |
| Terms of Use | `"policies/terms-of-use"` |

### Global fields in the `site_pages` content type

Each `site_pages` entry contains global field modules that map to sections of the page:

| CS Global Field | Maps to |
|----------------|---------|
| `gf_seo_fields` | SEO slug + meta description + page title |
| `gf_hero_v1_module` | Hero section (tagLabel, heading, description, CTAs, listing, spacing) |
| `gf_description_with_ctas_module` | Description + CTA block |
| `gf_icon_grid_with_tags_module` | Icon grid section (heading, description, icon cards) |
| `gf_right_text_left_image_module` | Two-column image+text section (used on About) |
| `gf_rich_text_module` | Raw rich text / HTML content section |
| `gf_featured_image` | Featured image meta fields |
| `htmltitle` | `<title>` tag content |

### Content entries exported from Contentstack

The folder `entries-from-cs/` contains JSON batch exports of Contentstack entries (e.g. `entries_000000_to_000019.json`). These were used during development to understand the exact field shapes before the CS content model was fully populated.

---

## 7. Phase 5 — Shared Components (Header & Footer)

### Header (`src/components/Header/`)

**Structure ported from:** `my-theme/modules/Header.module/module.html` and `module.css`

The HubSpot header module uses Jinja2 `{% logo %}` and `{% menu %}` tags. These were replaced with hardcoded React equivalents since the navigation data doesn't change frequently.

**What was built:**

- Fixed-position header bar with `position: fixed; top: 0; left: 0; right: 0; z-index: 99`.
- **Background**: `linear-gradient(90deg, rgba(0, 198, 178, 1) 0%, rgba(0, 131, 255, 1) 100%)` — sourced directly from `my-theme/css/custom-styles.css` `.primary-gradient` rule.
- **Logo**: `<img>` pointing to the HubSpot-hosted SVG logo URL (`https://www.smuves.com/hubfs/Website/logo.svg`), `width="143" height="27"`.
- **Desktop navigation** (`NAV_ITEMS` array): 3 top-level items, each with dropdown children rendered on click:
  1. **Services** → Website Content Migrations (`/services/website-migration`)
  2. **Partnerships** → HubSpot (`/platforms/hubspot`), Contentstack (`/platforms/contentstack`)
  3. **HubSpot CMS Bulk Editor App** → Overview, Features, HubSpot CMS to Google Sheets Integration
- **Dropdown behaviour**: Managed via `openDropdown` state + `useRef` for outside-click detection.
- **CTA buttons**: Two buttons in the header sourced from `module.html` where `class="primary-gradient-cta"` was used:
  - "Join App Beta" → `cta-white-secondary` class (transparent, white border, pill shape, 50px border-radius)
  - "Let's Chat!" → `cta-white-primary` class (white fill, gradient text, pill shape)
- **Mobile hamburger**: Three-bar icon, toggled via `mobileOpen` state. Bars are white to show against the gradient background.
- **Mobile menu**: Full-screen overlay (below header top = 76px), mirrors desktop nav with collapsible submenu accordions.
- **Accessibility**: Skip-to-content link, `aria-label` on nav, `role="menu"` / `role="menuitem"`, `aria-expanded` on dropdown buttons, keyboard support (`onKeyDown` Enter on hamburger).
- **Body scroll lock**: `document.body.style.overflow = 'hidden'` when mobile menu is open.

**Key CSS classes applied (from `Header.css`):**

```css
.header-main {
  background: linear-gradient(90deg, rgba(0, 198, 178, 1) 0%, rgba(0, 131, 255, 1) 100%);
  padding: 18px 0;
  position: fixed;
  z-index: 99;
}
.menu-area ul li a, .menu-area .nav-parent-btn {
  color: #ffffff;   /* White text on gradient background */
}
.cta-white-secondary { /* "Join App Beta" */
  background: transparent; border: 1.5px solid #fff; border-radius: 50px; color: #fff;
}
.cta-white-primary { /* "Let's Chat!" */
  background: #fff; border-radius: 50px; color: #0083ff;
}
```

---

### Footer (`src/components/Footer/`)

**Structure ported from:** `my-theme/modules/Footer.module/module.html` and `module.css`

The HubSpot footer module uses Jinja2 `{% logo %}` and `{% menu id=... %}` for each column. These were replaced with a static `FOOTER_DATA` object in React.

**Layout**: 4 columns inside a `footer-top` flex container:
- **Column 1 (info-area)**: Logo image (from HubSpot CDN), tagline "Smuves is the CMS bulk editor HubSpot never built.", LinkedIn SVG icon link.
- **Column 2 (Company)**: About, Contact
- **Column 3 (HubSpot CMS Bulk Editor)**: Overview, Features, HubSpot to Google Sheets Integration, Updates, Documentation, Setup Guide
- **Column 4 (Resources)**: Blog, Engineering

**Footer bottom bar**: Copyright `© {year} Smuves. All rights reserved.` + Privacy Policy + Terms of Service links.

All internal links use React Router `<Link to="...">` instead of `<a href="...">` for SPA navigation.

---

## 8. Phase 6 — Reusable Module Components

### HeroV1 (`src/components/modules/HeroV1/`)

**Ported from:** `my-theme/modules/Hero.module/module.html` + `module.css`

This is the primary hero section used on almost every page. In HubSpot it uses `{% scope_css %}` to inject inline CSS per-instance for background colour and spacing. In React this is solved with CSS custom properties passed via `style` prop.

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `tagLabel` | string | Eyebrow text above the heading |
| `heading` | string | First line of the h1 |
| `headingSpan` | string | Second line rendered inside a `<span>` |
| `headingHtml` | string | Full HTML override for h1 (takes priority over heading/headingSpan) |
| `paragraphs` | string[] | Array of HTML strings rendered as paragraphs |
| `imagePosition` | `"none"` \| `"left"` \| `"right"` | Controls layout |
| `imageSrc` | string | Hero image URL |
| `imageAlt` | string | Image alt text |
| `textAlign` | `"left"` \| `"center"` | Text alignment |
| `ctas` | `{text, href, style}[]` | CTA buttons — `style` maps to a global CSS class name |
| `hasListing` | boolean | Show the checklist listing card |
| `listing` | string[] | Checklist items |
| `style` | object | `{paddingTop, paddingBottom, mobilePaddingTop, mobilePaddingBottom}` |

**CSS custom properties used for spacing (set as inline styles):**
```jsx
style={{
  '--pt':  `${paddingTop}px`,
  '--pb':  `${paddingBottom}px`,
  '--mpt': `${mobilePaddingTop}px`,
  '--mpb': `${mobilePaddingBottom}px`,
}}
```

**CTA rendering logic**: If `href` starts with `/` → React Router `<Link to>`. Otherwise → plain `<a href>`. The `style` prop value (e.g. `"black_arrow"`, `"green-cta"`) is applied as the className directly, resolving to the matching global CSS utility class from `index.css`.

---

### MissingContent (`src/components/MissingContent/`)

A developer-only warning component rendered wherever a Contentstack field is absent from the fetched entry. Displays an orange dashed box with the field path.

Used across all pages and sections to give immediate visual feedback during development when CS content hasn't been populated yet. Never shown to end users in production (hidden by adding production CSS or conditional logic as content is filled in).

---

## 9. Phase 7 — Pages Built

Every page follows the same shell pattern:

```jsx
<div className="body-wrapper">
  <Header />
  <main id="main-content" className="body-container-wrapper">
    <div className="body-container">
      {/* sections */}
    </div>
  </main>
  <Footer />
</div>
```

### Home (`/`)

**CS slug:** `""` (empty string)

**Sections:**
1. `HeroV1` — fetched from `data.gf_hero_v1_module` via `mapHeroFromCS()`
2. `IconGridSection` — fetched from `data.gf_icon_grid_with_tags_module` (normalises single-object vs. array)
3. `DescriptionCtaSection` — fetched from `data.gf_description_with_ctas_module` via `mapDescCtaFromCS()`

A static `HeroSection.jsx` was also built as a fallback/development version before CS content was ready. It hardcodes the exact text from the live smuves.com homepage:
- TagLabel: "Website Content Engineering"
- Heading: "Stop treating your CMS"
- HeadingSpan: " like a scrapbook."
- Paragraph: "Most teams build website pages by hand-gluing content..."

---

### About (`/about`)

**CS slug:** `"about"`

**Sections (mix of CS-driven and hardcoded):**
1. `HeroV1` — from `data.gf_hero_v1_module`
2. `OurStorySection` — left image + right text, image from HubSpot CDN, text from `data.gf_right_text_left_image_module`
3. `WhatWeDoSection` — rich text from `data.gf_rich_text_module`
4. `OurValuesSection` — **hardcoded** 4-value grid (Curiosity, Agency, Judgment, Teamwork) with SVG FontAwesome-style icons
5. `TimelineSection` — **hardcoded** 3-item journey timeline (2025: Beta, Founded, First Prototype)
6. `TeamGridSection` — **hardcoded** 4-member team grid with HubSpot CDN headshot images:
   - Nicole Pereira (Founder)
   - Umar Aslam (Full-stack Developer)
   - Pavan Dasari (Sr. Product Manager)
   - Hamza Aslam (Sr. Software Engineer)

---

### Contact (`/about/contact`)

**CS slug:** `"about/contact"`

Contact form page with company contact information.

---

### Product (`/product`)

**CS slug:** `"product"`

**Sections:**
1. `HeroV1` — from `data.gf_hero_v1_module`
2. `ProductIconGrid` — icon grid with `tag_choice` badges ("Available" / "Coming Soon") from `data.gf_icon_grid_with_tags_module`
3. `ProductDescCta` — description + CTA block with `primary-gradient` background from `data.gf_description_with_ctas_module`

---

### Features (`/product/features`)

Feature listing page for the HubSpot CMS Bulk Editor App.

---

### Pricing (`/product/pricing`)

Pricing tiers page.

---

### Integrations (`/product/integrations`)

**Route:** `/product/integrations`

HubSpot CMS to Google Sheets integration detail page.

---

### Product Updates (`/product/updates`)

Changelog / update history page.

---

### Documentation (`/product/documentation`)

Documentation / help page.

---

### Services / Migration (`/services/website-migration`)

**CS slug:** `"services/website-migration"`

Website content migration service page.

---

### Platforms — HubSpot (`/platforms/hubspot`)

Uses the shared **`PlatformPage`** template component:
- Hero (static HeroV1 props, no CS fetch)
- Services icon grid (3-column)
- Rich text proof section
- CTA section with `primary-gradient` background

---

### Platforms — Contentstack (`/platforms/contentstack`)

Uses the same **`PlatformPage`** template, different content.

---

### PlatformPage (shared template)

**File:** `src/pages/platforms/PlatformPage.jsx`

A reusable page template accepting props: `heading`, `headingSpan`, `paragraphs`, `ctas`, `services[]`, `richTextHtml`, `ctaHeading`, `ctaBody`. Used by both HubSpotPlatform and ContentstackPlatform to avoid code duplication.

---

### Case Study — Remote (`/case-studies/remote`)

**CS slug:** `"case-studies/remote"`

---

### Engineering / Blog (`/engineering`)

Blog/engineering articles page.

---

### Setup Guide (`/setup-guide`)

Step-by-step setup guide for the product.

---

### Privacy Policy (`/policies/privacy-policy`)

Legal policy page.

---

### Terms of Use (`/policies/terms-of-use`)

Legal terms page.

---

## 10. Phase 8 — Routing (React Router)

**File:** `src/App.jsx`

React Router v6 `BrowserRouter` wraps all routes. The full route table:

```
/                              → Home
/about                         → About
/about/contact                 → Contact

/product                       → Product (HubSpot CMS Bulk Editor App overview)
/product/features              → Features
/product/pricing               → Pricing
/product/integrations          → Integrations
/product/updates               → Product Updates
/product/documentation         → Documentation

/services/website-migration    → Migration

/platforms/hubspot             → HubSpotPlatform
/platforms/contentstack        → ContentstackPlatform

/case-studies/remote           → CaseStudyRemote

/engineering                   → Engineering

/setup-guide                   → SetupGuide

/policies/privacy-policy       → PrivacyPolicy
/policies/terms-of-use         → TermsOfUse
```

**Total routes: 17**

All internal `<a href>` links in header, footer, and page sections were replaced with React Router `<Link to>` to enable SPA navigation without full page reloads.

---

## 11. Phase 9 — Data Layer (Hooks & Mappers)

### `usePageEntry(slug)` — `src/hooks/usePageEntry.js`

The core Contentstack fetching hook. Queries the `site_pages` content type by `gf_seo_fields.slug`.

```js
stack
  .contentType('site_pages')
  .entry()
  .query()
  .equalTo('gf_seo_fields.slug', slug)
  .find()
  .then(result => setData(result?.entries?.[0] ?? null))
```

**Features:**
- Race condition prevention via `cancelled` flag on unmount
- `null` slug = no fetch (allows pages to opt out of CS)
- Empty string slug = home page (CS entry has blank slug)
- Returns `{ data, loading, error }`

---

### `usePageData(slug)` — `src/hooks/usePageData.js`

Thin wrapper around `usePageEntry` that also automatically syncs `document.title` from `data.htmltitle` whenever the CS entry loads.

```js
useEffect(() => {
  if (data?.htmltitle) document.title = data.htmltitle
}, [data])
```

---

### `mapHeroFromCS(cs)` — `src/lib/mappers/heroMapper.js`

Translates the raw `gf_hero_v1_module` object from a Contentstack entry into clean props for the `<HeroV1>` component.

**Key transformations:**
- Parses HubSpot spacing JSON strings (two formats: `{ padding: { top: { value: 190, units: "px" } } }` or simplified `{ top: 190 }`) into `{ paddingTop, paddingBottom }`.
- Normalises `cta_item_group` — CS stores it as a single object when only one CTA exists, but as an array when multiple. The `toArray()` helper normalises both to array.
- Normalises `listing` field the same way.
- Falls back to sensible defaults: `paddingTop: 190`, `paddingBottom: 120`, `mobilePaddingTop: 140`, `mobilePaddingBottom: 90`.

---

### `mapDescCtaFromCS(cs)` — `src/lib/mappers/descriptionCtaMapper.js`

Translates `gf_description_with_ctas_module` into `{ heading, description, ctas[] }` for the `DescriptionCtaSection` component. Also uses the `toArray()` normaliser for `cta_item_group`.

---

## 12. Phase 10 — Developer Tooling

### Environment variables (`.env`)

```env
# Raw Contentstack credentials (for server-side scripts)
CONTENTSTACK_STACK_API_KEY=blt6fd7ac31cc3e460e
CONTENTSTACK_DELIVERY_TOKEN=csfae4ad4eb186e3db4654c58d
CONTENTSTACK_PREVIEW_TOKEN=cs1e802c89b044f52393fd3b65
CONTENTSTACK_MANAGEMENT_TOKEN=cs8f4af1637097fe2de117fd01
CONTENT_STACK_AUTH_TOKEN=blt0351743064010cb2

# VITE_ prefix required for browser access
VITE_CS_API_KEY=blt6fd7ac31cc3e460e
VITE_CS_DELIVERY_TOKEN=csfae4ad4eb186e3db4654c58d
VITE_CS_PREVIEW_TOKEN=cs1e802c89b044f52393fd3b65
VITE_CS_ENVIRONMENT=dev
VITE_CS_REGION=us
```

`.env` is listed in `.gitignore` and is **never committed** to the repository.

### MissingContent component

During active development, any CS field that hasn't been populated yet renders an orange dashed warning box showing the exact field path (e.g. `gf_hero_v1_module`, `gf_icon_grid_with_tags_module.icon_grid`). This makes it immediately obvious which content needs to be added in Contentstack.

---

## 13. Phase 11 — Navbar Styling Iterations

The header underwent multiple iterations to match the original:

### Iteration 1 (initial build)
- Background: `hsla(0, 0%, 100%, 0.8)` (semi-transparent white) + `backdrop-filter: blur(3px)`
- **Problem**: The teal hero section bled through the semi-transparent navbar, tinting it teal. Looked different from the original.
- CTA buttons: both used `light-green-cta` (mint/pale teal background)
- **Problem**: Original had different styles for the two buttons

### Iteration 2 (after first screenshot comparison)
- Background: changed to opaque `#ffffff`
- Box shadow: softened to `0 1px 8px rgba(0,0,0,0.06)`
- CTA buttons: "Join App Beta" → `header-cta-outline` (dark border pill), "Let's Chat!" → `header-cta-filled` (teal pill)
- Padding: `.page-center` increased from `0 20px` to `0 40px`

### Iteration 3 (after user confirmed original uses gradient)
- Background: **exact gradient from `my-theme/css/custom-styles.css`**: `linear-gradient(90deg, rgba(0, 198, 178, 1) 0%, rgba(0, 131, 255, 1) 100%)`
- Border-bottom and box-shadow removed (gradient bar doesn't need them)
- Nav link colour: changed from `#111827` to `#ffffff` (white text on teal background)
- Hamburger bars: changed from `#000` to `#fff`
- CTA buttons: sourced from `my-theme/modules/Header.module/module.html` which uses `class="primary-gradient-cta"` on the original — adapted to white pill buttons for use on a gradient background:
  - "Join App Beta" → `cta-white-secondary` (transparent, white border, 50px border-radius)
  - "Let's Chat!" → `cta-white-primary` (white fill, blue text, 50px border-radius)
- `cta-white-primary` and `cta-white-secondary` in `index.css` updated from `border-radius: 5px` to `border-radius: 50px` to match the pill shape from the original module CSS

---

## 14. Environment Variables

| Variable | Purpose | Where used |
|----------|---------|------------|
| `VITE_CS_API_KEY` | Contentstack Stack API key | `src/lib/contentstack.js` |
| `VITE_CS_DELIVERY_TOKEN` | Delivery token for published content | `src/lib/contentstack.js` |
| `VITE_CS_PREVIEW_TOKEN` | Preview token for draft content (dev only) | `src/lib/contentstack.js` |
| `VITE_CS_ENVIRONMENT` | CS environment name (e.g. `dev`) | `src/lib/contentstack.js` |
| `VITE_CS_REGION` | CS region (`us`, `eu`, etc.) | `src/lib/contentstack.js` |
| `CONTENTSTACK_MANAGEMENT_TOKEN` | For server-side scripts (not in browser) | `.env` only |
| `CONTENT_STACK_AUTH_TOKEN` | CS auth token for CLI/scripts | `.env` only |

---

## 15. What Was Copied vs. What Was Built

### Copied/ported from the HubSpot theme (my-theme/)

| Item | Source | Destination |
|------|--------|-------------|
| CSS reset + normalize | `css/generic/_reset.css`, `_normalize.css` | `src/index.css` |
| Typography rules | `css/elements/_typography.css` | `src/index.css` |
| Button base styles | `css/elements/_buttons.css` | `src/index.css` |
| 12-column grid | `css/objects/_layout.css` | `src/index.css` |
| DND container classes | `css/objects/_containers-dnd.css` | `src/index.css` |
| All brand utility classes | `css/custom-styles.css` | `src/index.css` |
| Header structural CSS | `css/components/_header.css` | `src/components/Header/Header.css` |
| Header module CSS | `modules/Header.module/module.css` | `src/components/Header/Header.css` |
| Footer module CSS | `modules/Footer.module/module.css` | `src/components/Footer/Footer.css` |
| Hero section CSS | `modules/Hero.module/module.css` | `src/components/modules/HeroV1/HeroV1.css` |
| Desc+CTA CSS | `modules/Description with CTAs.module/module.css` | `src/pages/home/sections/DescriptionCtaSection.css` |
| Header HTML structure | `modules/Header.module/module.html` | `src/components/Header/Header.jsx` |
| Footer HTML structure | `modules/Footer.module/module.html` | `src/components/Footer/Footer.jsx` |
| Hero HTML structure | `modules/Hero.module/module.html` | `src/components/modules/HeroV1/HeroV1.jsx` |
| Desc+CTA HTML structure | `modules/Description with CTAs.module/module.html` | `src/pages/home/sections/DescriptionCtaSection.jsx` |
| Logo SVG URL | HubSpot CDN | `Header.jsx`, `Footer.jsx` |
| Team headshot URLs | HubSpot CDN | `About.jsx` |
| Arrow button SVG URLs | HubSpot CDN | `src/index.css` `.green-cta::after`, `.black_arrow::after` |
| Google Fonts (Manrope + JetBrains Mono) | Google Fonts | `index.html` |
| Brand colours | Live site / custom-styles.css | `src/index.css` |
| Primary gradient | `css/custom-styles.css` | `src/index.css`, `Header.css` |

### Built from scratch (did not exist in theme)

| Item | File |
|------|------|
| React + Vite project scaffolding | `package.json`, `vite.config.js`, `index.html`, `src/main.jsx` |
| React Router SPA routing (17 routes) | `src/App.jsx` |
| Contentstack SDK singleton | `src/lib/contentstack.js` |
| `usePageEntry` hook | `src/hooks/usePageEntry.js` |
| `usePageData` hook | `src/hooks/usePageData.js` |
| `mapHeroFromCS` mapper | `src/lib/mappers/heroMapper.js` |
| `mapDescCtaFromCS` mapper | `src/lib/mappers/descriptionCtaMapper.js` |
| `MissingContent` dev component | `src/components/MissingContent/MissingContent.jsx` |
| `HeroV1` React component | `src/components/modules/HeroV1/HeroV1.jsx` |
| `Header` React component with dropdown state | `src/components/Header/Header.jsx` |
| `Footer` React component with static data | `src/components/Footer/Footer.jsx` |
| All 17 page components | `src/pages/**/*.jsx` |
| `PlatformPage` shared template | `src/pages/platforms/PlatformPage.jsx` |
| `OurValuesSection` with SVG icons | `src/pages/about/About.jsx` |
| `TeamGridSection` | `src/pages/about/About.jsx` |
| `TimelineSection` | `src/pages/about/About.jsx` |
| `ProductIconGrid` with tag badges | `src/pages/product/Product.jsx` |
| CSS custom property spacing system for hero | `src/components/modules/HeroV1/HeroV1.css` |
| Mobile hamburger menu with accordion submenus | `src/components/Header/Header.jsx` + `Header.css` |
| Keyboard accessibility (skip link, aria-*, role) | `src/components/Header/Header.jsx` |
| `header-cta-outline`, `header-cta-filled` classes | `src/components/Header/Header.css` |
| All analysis and spec documents | `*.md`, `*.json` at root |

---

## 16. File-by-File Reference

### `src/index.css`
Global stylesheet. Contains: CSS reset, normalize, typography (Manrope + JetBrains Mono), buttons, 12-column layout grid, `.page-center` layout container, all brand utility classes (`.primary-gradient`, `.green-cta`, `.black_arrow`, `.light-green-cta`, `.cta-white-primary`, `.cta-white-secondary`, `.secondary-teal`, etc.), `body::before` floating SVG decoration, `.body-wrapper`, `.body-container-wrapper`.

### `src/components/Header/Header.jsx`
Fixed gradient header. Manages `openDropdown` (desktop dropdowns) and `mobileOpen` (mobile menu) state. Nav items defined in `NAV_ITEMS` array. Uses `useRef` + `mousedown` event for outside-click dropdown dismissal.

### `src/components/Header/Header.css`
Header-specific styles. Primary gradient background, white nav text, white hamburger bars, dropdown styling (white bg, teal border), mobile menu, CTA button pill styles.

### `src/components/Footer/Footer.jsx`
Static footer. `FOOTER_DATA` object contains all links, logo URL, LinkedIn SVG, description, copyright. Renders 4-column flex layout.

### `src/components/modules/HeroV1/HeroV1.jsx`
Reusable hero section. Accepts 12 props. CSS custom properties for responsive spacing. Renders tag label, h1 (two-line or HTML), paragraphs, CTAs (internal Link or external `<a>`), optional listing card.

### `src/components/MissingContent/MissingContent.jsx`
Developer warning. Orange dashed box with the missing CS field name. Rendered in place of any section whose CS data is absent.

### `src/lib/contentstack.js`
Contentstack Delivery SDK singleton. Dev mode enables Preview API. Reads all config from `VITE_*` env vars.

### `src/hooks/usePageEntry.js`
Core data fetching hook. Queries `site_pages` by slug. Cancels fetch on unmount. Returns `{ data, loading, error }`.

### `src/hooks/usePageData.js`
Wraps `usePageEntry`, additionally auto-sets `document.title` from `data.htmltitle`.

### `src/lib/mappers/heroMapper.js`
Pure function. Parses two HubSpot spacing JSON formats. Normalises single-object / array CS fields. Returns `HeroV1` props object.

### `src/lib/mappers/descriptionCtaMapper.js`
Pure function. Normalises CTA group. Returns `{ heading, description, ctas[] }`.

### `src/App.jsx`
Router root. Imports all 17 page components and maps them to URL paths.

### `src/main.jsx`
React entry point. `ReactDOM.createRoot` + `StrictMode`.

---

*Report generated: July 6, 2026*

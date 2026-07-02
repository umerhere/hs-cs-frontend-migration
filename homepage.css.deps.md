# homepage.css.deps.md
CSS dependency map for the HubSpot homepage (`my-theme/templates/home.html`).  
**Purpose:** Every CSS file, the selectors it contributes, which page sections those selectors affect, and all critical layout rules. Build from this — do not guess.

---

## Load Order (cascade priority, lowest → highest)

| # | File | Loaded by | Scope |
|---|------|-----------|-------|
| 1 | `css/generic/_reset.css` | `main.css` via `@include` | Global |
| 2 | `css/generic/_normalize.css` | `main.css` via `@include` | Global |
| 3 | `css/objects/_layout.css` | `main.css` via `@include` | Grid / columns |
| 4 | `css/objects/_containers-dnd.css` | `main.css` via `@include` | DND wrappers |
| 5 | `css/elements/_typography.css` | `main.css` via `@include` | All text |
| 6 | `css/elements/_buttons.css` | `main.css` via `@include` | Buttons |
| 7 | `css/elements/_forms.css` | `main.css` via `@include` | Form (hero) |
| 8 | `css/elements/_tables.css` | `main.css` via `@include` | Tables (none on homepage) |
| 9 | `css/components/_header.css` | `main.css` via `@include` | Header (legacy, partially overridden) |
| 10 | `css/components/_default-modules.css` | `main.css` via `@include` | `.hs_cos_wrapper` images, menus |
| 11 | `css/utilities/_helper.css` | `main.css` via `@include` | Screen-reader utilities |
| 12 | `css/theme-overrides.css` | `base.html` via `require_css` | Design tokens (fonts, colors, container widths) |
| 13 | `css/custom-styles.css` | `base.html` via `require_css` | Brand gradients, CTA button classes, h1 override |
| 14 | `modules/Header.module/module.css` | Injected by Header.module at render | Header component styles |
| 15 | `modules/Footer.module/module.css` | Injected by Footer.module at render | Footer component styles |
| 16 | `modules/button.module/module.html` (inline `require_css`) | Injected per button instance | Scoped button instance styles |

---

## File-by-File Selector Inventory

---

### 1. `css/generic/_reset.css`

**Affects:** Everything

| Selector | Rule | Section affected |
|----------|------|-----------------|
| `*, *:before, *:after` | `box-sizing: border-box` | All sections |

---

### 2. `css/generic/_normalize.css`

**Affects:** Everything (browser normalization baseline)

Key rules:
- `html { line-height: 1.15; -webkit-text-size-adjust: 100% }`
- `body { margin: 0 }`
- `img { border-style: none }`
- `button, input, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15 }`

---

### 3. `css/objects/_layout.css`

**Affects:** All five sections (grid columns)

#### CSS Variables
```css
:root {
  --column-gap: 2.13%;
  --column-width-multiplier: 8.333;
}
```

#### Base (mobile-first — all columns 100% width)
```css
.row-fluid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.row-fluid .span1, …, .row-fluid .span12 {
  min-height: 1px;
  width: 100%;
}
```

#### Desktop (`min-width: 768px`)
```css
.row-fluid {
  flex-wrap: nowrap;
  justify-content: space-between;
}
/* Column width formula (N = number of spans): */
.row-fluid .spanN {
  width: calc(
    var(--column-width-multiplier) * 1% * N
    - var(--column-gap) * ((12 - N) * var(--column-width-multiplier) / 100)
  );
}
```

| Class | Approximate width | Used in sections |
|-------|------------------|-----------------|
| `.span6` | ~49% | Sections 1, 2, 3 (two-column layouts) |
| `.span4` | ~32% | Section 5 (three-column layout) |
| `.span12` | 100% | Section 4 (CTA single column) |

---

### 4. `css/objects/_containers-dnd.css`

**Affects:** All sections (DND wrapper centering and column gutters)

```css
.content-wrapper {
  margin: 0 auto;
  padding: 0 1rem;
}
@media screen and (min-width: 1380px) {
  .content-wrapper { padding: 0; }
}

.dnd-section > .row-fluid {
  margin: 0 auto;
}

.dnd-section .dnd-column {
  padding: 0 1rem;          /* desktop column gutter */
}
@media (max-width: 767px) {
  .dnd-section .dnd-column {
    padding: 0;             /* mobile: gutters removed */
  }
}
```

---

### 5. `css/elements/_typography.css`

**Affects:** All text in all sections

| Selector | Rule | Notes |
|----------|------|-------|
| `body` | `line-height: 1.4; overflow-wrap: break-word` | |
| `p` | `font-size: 1rem; margin: 0 0 1.4rem` | All body text |
| `h1` – `h6` | `margin: 0 0 1.4rem` | All headings |
| `ul`, `ol` | `margin: 0 0 1.4rem` | Form lists, footer menus |
| `blockquote` | `border-left: 2px solid; margin: 0 0 1.4rem; padding-left: 0.7rem` | |
| `img` | alt-text sizing rules | Section images |

---

### 6. `css/elements/_buttons.css`

**Affects:** Section 4 (CTA button), Header CTA, form submit

```css
.button, .hs-button {
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: all 0.15s linear;
  white-space: normal;
}
.button[disabled], .hs-button[disabled] {
  background-color: #D0D0D0;
  color: #E6E6E6;
}
.no-button {
  background: none;
  border: none;
  border-radius: 0;
  color: inherit;
  padding: 0;
  margin: 0;
  transition: none;
}
```

---

### 7. `css/elements/_forms.css`

**Affects:** Section 1 (Hero — HubSpot form module)

Key rules (theme-driven values shown as tokens):
```css
.hs-form input[type="text"],
.hs-form input[type="email"],
.hs-form input[type="tel"],
.hs-form textarea,
.hs-form select {
  height: 45px;
  padding: 0 0.7rem;
  border: [theme form_border];
  background: [theme form_bg];
}
.hs-form label { color: [theme label color] }
.hs-form .hs-field-desc { color: [theme help text color] }
.hs-form input[type="submit"], .hs-form .hs-button {
  /* inherits .hs-button styles + theme button overrides */
}
```

---

### 8. `css/components/_header.css`

**Affects:** Header (legacy — partially overridden by Header.module/module.css)

Active selectors:
```css
.header { /* background set by theme-overrides */ }
.header__skip {
  /* Accessibility skip link */
  position: absolute;
  width: 1px; height: 1px;
  /* becomes visible on focus */
}
```
Note: Most rules in this file target the original commented-out header markup (`.header__navigation`, `.header__logo`, etc.). They do not match any active DOM nodes. Only `.header__skip` is actively used.

---

### 9. `css/components/_default-modules.css`

**Affects:** All sections with `@hubspot/linked_image` and menus

```css
.hs_cos_wrapper img {
  /* prevents images from overflowing */
  max-width: 100%;
  height: auto;
}
/* HubSpot menu flyout rules — active in footer and header menus */
```

---

### 10. `css/utilities/_helper.css`

**Affects:** Header skip link, any screen-reader-only text

```css
.show-for-sr {
  position: absolute;
  width: 1px; height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.show-for-sr--mobile {
  /* same, at max-width: 767px */
}
```

---

### 11. `css/theme-overrides.css`

**Affects:** All sections — provides design tokens as rendered CSS

#### Container / DND section sizing
```css
.content-wrapper {
  max-width: [theme.spacing.maximum_content_width]px;
}
.page-center {
  max-width: [theme.spacing.maximum_content_width]px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
}
.dnd-section,
.content-wrapper--vertical-spacing {
  padding: [theme.spacing.vertical_spacing]px 1rem;
}
.dnd-section > .row-fluid {
  max-width: [theme.spacing.maximum_content_width]px;
}
```

#### Typography tokens
```css
html { font-size: [body_font.size + body_font.size_unit] }
body { font-family: [body_font.font]; color: [body_font.color] }
h1 { font-family: [h1_font.font]; font-size: [h1_font.size]; color: [h1_font.color] }
h2 { font-family: [h2_font.font]; font-size: [h2_font.size]; color: [h2_font.color] }
h3 { font-family: [h3_font.font]; font-size: [h3_font.size]; color: [h3_font.color] }
a  { color: [anchor_font.color] }
a:hover { color: color_variant(anchor_font.color, -40) }
a:active { color: color_variant(anchor_font.color, 40) }
```

#### Button tokens
```css
.button, .hs-button {
  background-color: rgba([button_bg_color]);
  border: [button_border];
  border-radius: [button_corner_radius];
  padding: [button_spacing];
  font-family: [button_font.style];
  font-size: [button_font.size];
  color: [button_font.color];
  text-transform: [button_font.transform];
}
.button:hover, .hs-button:hover {
  background-color: color_variant([button_bg_color], -80);
}
.button:active, .hs-button:active {
  background-color: color_variant([button_bg_color], 80);
}
```

#### Footer token
```css
.footer {
  background: [theme footer_background];
  color: [theme footer_text_color];
}
```

---

### 12. `css/custom-styles.css`

**Affects:** Header CTA, Section 4 button, global brand utilities, h1 override

#### Background utilities
```css
.primary-gradient {
  background: linear-gradient(90deg, rgba(0,198,178,1) 0%, rgba(0,131,255,1) 100%);
}
.primary-gradient-cta {
  background: linear-gradient(90deg, rgba(0,198,178,1) 0%, rgba(0,131,255,1) 100%);
  transition: 0.3s ease-in-out;
}
.primary-gradient-cta:hover {
  background: linear-gradient(90deg, rgba(0,131,255,1) 0%, rgba(0,198,178,1) 100%);
}
.secondary-midnight-blue { background: #1C1C28; }
.secondary-teal          { background: #00C6B2; }
.snow-white              { background: #FAFAFA; }
.mint                    { background: #E0FBFC; }
.neutral-gray            { background: #F5F7FA; }
```

#### CTA button classes
```css
.cta-white-primary {
  background: #fff;
  padding: 12px 32px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 20px;
  color: #2563eb;
  border: #fff solid 1px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}
.cta-white-primary:hover  { background: #f3f4f6; }

.cta-white-secondary {
  background: transparent;
  padding: 12px 32px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  border: #fff solid 1px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}
.cta-white-secondary:hover { background: #fff; color: #2563eb; }
```

#### h1 global override
```css
h1 {
  line-height: 60px;
}
@media (max-width: 767px) {
  h1 { font-size: 48px; }
}
```

---

### 13. `modules/Header.module/module.css`

**Affects:** Header only

| Selector | Critical rules |
|----------|---------------|
| `.header-main` | `position:fixed; top:0; left:0; right:0; z-index:99; background:hsla(0,0%,100%,.8); backdrop-filter:blur(3px); border-bottom:#e5e5e5 solid 1px; box-shadow:1px 1px 10px #e5e5e5; padding:30px 0` |
| `header` | `background:none !important` — strips theme footer bg from `<header>` wrapper |
| `.header-holder` | `display:flex; justify-content:space-between; align-items:center` |
| `.menu-area ul li` | `margin:0 15px` |
| `.menu-area ul li a` | `color:#111827; font-size:16px; font-weight:400; text-decoration:none` |
| `.header-main .cta-area a` | `color:#fff; padding:10px 20px; border-radius:50px; font-size:16px; font-weight:700; transition:0.3s ease-in-out` |
| `.mobile-toggle` | `display:none` (desktop); `display:flex` at ≤991px |
| `.mobile-toggle span` | `height:3px; background:#000; border-radius:3px` (3 bars, 24×18px container) |
| `.mobile-menu` | `display:none; position:fixed; top:90px; width:100%; background:#fff; z-index:999; padding:20px; box-shadow:0 5px 10px rgba(0,0,0,0.1)` |
| `.mobile-menu-inner` | `display:flex; flex-direction:column; justify-content:center; align-items:center` |
| **@media ≤ 991px** | `.menu-area { display:none }; .header-main .cta-area { display:none }; .mobile-toggle { display:flex }` |

---

### 14. `modules/Footer.module/module.css`

**Affects:** Footer only

| Selector | Critical rules |
|----------|---------------|
| `.footer-main` | `background:#f9fafb; border-top:#e5e5e5 solid 1px; padding:1.6rem 0` |
| `.footer-top` | `display:flex; gap:1.6rem` |
| `.footer-top .footer-col` | `max-width:25%; width:100%` |
| `.footer-top .info-area img` | `max-width:40%; width:100% !important; margin-bottom:10px` |
| `.footer-top .info-area p` | `font-size:14px; margin:0` |
| `.footer-top .footer-col h4` | `font-size:16px; font-weight:600; margin-bottom:8px` |
| `.footer-top .footer-col ul li` | `display:block; width:100%` |
| `.footer-top .footer-col ul li:not(:last-child)` | `margin-bottom:4px` |
| `.footer-top .footer-col ul li a` | `color:#111827; font-size:14px; text-decoration:none; transition:0.3s ease-in-out` |
| `.footer-top .footer-col ul li a:hover` | `color:#000` |
| `.footer-bottom` | `margin-top:1.6rem; padding-top:1.6rem; border-top:#e5e5e5 solid 1px; text-align:center` |
| `.footer-bottom p` | `color:#111827; font-size:14px; margin:0` |
| **@media ≤ 991px** | `.info-area img { max-width:60% }` |
| **@media ≤ 767px** | `.footer-top { flex-wrap:wrap }; .footer-col { max-width:47% }; .info-area img { max-width:40% }` |
| **@media ≤ 575px** | `.footer-col { max-width:100%; text-align:center }; .info-area img { max-width:140px }` |

---

### 15. `modules/button.module/module.html` — inline scoped CSS

**Affects:** Section 4 (CTA button instance only)

```css
/* Scoped via HubSpot scope_css() — unique class per instance */
.button-wrapper {
  text-align: [module.styles.alignment.alignment.horizontal_align]; /* CENTER */
}
.button {
  background-color: rgba([module.styles.background_color]);
  border: [module.styles.border];
  border-radius: [module.styles.corner_radius];
  padding: [module.styles.spacing];
  font-family: [module.styles.text.font.style];
  font-size: [module.styles.text.font.size];
  color: [module.styles.text.font.color];
}
.button:hover, .button:focus {
  background-color: color_variant([bg_color], -80);
}
.button:active {
  background-color: color_variant([bg_color], 80);
}
/* Falls back to global .button styles from theme-overrides.css if module fields are empty */
```

---

## Critical Layout Rules Summary

### Breakpoints

| Breakpoint | Rule triggered |
|-----------|---------------|
| `min-width: 768px` | Grid columns go side-by-side (`.row-fluid` flex-wrap: nowrap) |
| `max-width: 767px` | All grid columns stack (100% width); DND column padding drops to 0; h1 → 48px; footer wraps 2-per-row |
| `max-width: 991px` | Header: desktop nav + CTA hidden; hamburger shown; Footer: logo max-width → 60% |
| `max-width: 575px` | Footer columns stack 1-per-row; logo → 140px fixed |
| `min-width: 1380px` | `.content-wrapper` padding drops to 0 |

### Container Widths

| Selector | Width rule |
|----------|-----------|
| `.page-center` | `max-width: [theme container]px; padding: 0 20px; margin: 0 auto` |
| `.dnd-section > .row-fluid` | `max-width: [theme container]px; margin: 0 auto` |
| `.content-wrapper` | `max-width: [theme container]px; padding: 0 1rem; margin: 0 auto` |
| Section 4 inner row | `max-width: 700px` (hardcoded) |

### Flex / Grid System

| Pattern | Where used |
|---------|-----------|
| `.row-fluid` flex wrap → nowrap at 768px | All 5 sections |
| `.dnd-column` padding `0 1rem` | All columns (removed at ≤767px) |
| `.header-holder` flex space-between | Header |
| `.footer-top` flex gap `1.6rem` | Footer |
| `.mobile-menu-inner` flex column centered | Header mobile menu |

### Section Background Colors

| Section | Background |
|---------|-----------|
| Hero Banner (1) | `#f8fafc` |
| Multi-Row Content (2) | none / white |
| Two-Column Image Left (3) | `#f8fafc` |
| Call to Action (4) | Cover image (`large-placeholder-image.png`) |
| Multi-Column Content (5) | `#f8fafc` |
| Header | `hsla(0,0%,100%,.8)` |
| Footer | `#f9fafb` |

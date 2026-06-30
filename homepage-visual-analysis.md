# Homepage Visual Reconstruction Report
**Source:** `my-theme/templates/home.html` + all included sections, modules, and CSS files  
**Purpose:** Maximum-accuracy visual reference for recreating the homepage in Next.js  
**Do not redesign. Do not modernize. Preserve exactly what is documented here.**

---

## Table of Contents

1. [Page Structure Overview](#1-page-structure-overview)
2. [Global Color Palette](#2-global-color-palette)
3. [Global Typography Scale](#3-global-typography-scale)
4. [Global Spacing System](#4-global-spacing-system)
5. [Global Grid System](#5-global-grid-system)
6. [Reusable Utility Classes](#6-reusable-utility-classes)
7. [Header](#7-header)
8. [Section 1 — Hero Banner](#8-section-1--hero-banner)
9. [Section 2 — Multi-Row Content (Text Left, Image Right)](#9-section-2--multi-row-content-text-left-image-right)
10. [Section 3 — Two-Column Image Left](#10-section-3--two-column-image-left)
11. [Section 4 — Call to Action](#11-section-4--call-to-action)
12. [Section 5 — Multi-Column Content (Three Columns)](#12-section-5--multi-column-content-three-columns)
13. [Footer](#13-footer)
14. [Visual Fidelity Requirements](#14-visual-fidelity-requirements)

---

## 1. Page Structure Overview

The page is a HubSpot CMS DND template. It extends `templates/layouts/base.html`.

**DOM structure (outermost to innermost):**

```
<html lang="...">
  <head>
    main.css         → resets + layout + typography + buttons + forms + header components
    theme-overrides.css  → theme variable overrides
    custom-styles.css    → gradient utilities + CTA button classes + h1 override
  </head>
  <body>
    <div class="body-wrapper [builtin_body_classes]">
      <header class="header">               ← Header.module
      <main id="main-content" class="body-container-wrapper">
        <div class="body-container body-container--home">   ← dnd_area
          Section 1: Hero Banner            ← hero-banner.html
          Section 2: Multi-Row Content      ← multi-row-content.html
          Section 3: Two-Column Image Left  ← inline in home.html
          Section 4: Call to Action         ← call-to-action.html
          Section 5: Multi-Column Content   ← multi-column-content.html
        </div>
      </main>
      <footer class="footer">              ← Footer.module
    </div>
    <script src="js/main.js">
  </body>
</html>
```

**CSS load order (cascade priority, lowest to highest):**
1. `css/generic/_reset.css` — box-sizing universal reset
2. `css/generic/_normalize.css` — browser normalization
3. `css/objects/_layout.css` — 12-column flex grid
4. `css/objects/_containers-dnd.css` — DND section/column containers
5. `css/elements/_typography.css` — base body/heading/paragraph rules
6. `css/elements/_buttons.css` — base button rules
7. `css/elements/_forms.css` — form rules
8. `css/elements/_tables.css` — table rules
9. `css/components/_header.css` — legacy header component (partially overridden)
10. `css/components/_default-modules.css` — menu and image wrappers
11. `css/utilities/_helper.css` — screen-reader utility classes
12. `css/theme-overrides.css` — dynamic theme variable application
13. `css/custom-styles.css` — gradient brand utilities + button classes + h1 override
14. `modules/Header.module/module.css` — scoped header module styles
15. `modules/Footer.module/module.css` — scoped footer module styles

---

## 2. Global Color Palette

All colors extracted from `css/custom-styles.css`, `modules/Header.module/module.css`, `modules/Footer.module/module.css`, `modules/Hero.module/module.css`, and `modules/Description with CTAs.module/module.css`.

### Brand Gradients

| Name | Value | Usage |
|------|-------|-------|
| Primary gradient | `linear-gradient(90deg, rgba(0,198,178,1) 0%, rgba(0,131,255,1) 100%)` | Header CTA button, Description CTA card background |
| Primary gradient (hover reverse) | `linear-gradient(90deg, rgba(0,131,255,1) 0%, rgba(0,198,178,1) 100%)` | Hover state of all `.primary-gradient-cta` elements |
| H1 span highlight gradient | `-webkit-linear-gradient(#f97316, #ef4444)` | Highlighted words inside the `<h1>` via `<span>` |

### Solid Colors

| Token name | Hex | Usage |
|-----------|-----|-------|
| Midnight blue | `#1C1C28` | `.secondary-midnight-blue` background utility |
| Teal | `#00C6B2` | `.secondary-teal` background utility |
| Snow white | `#FAFAFA` | `.snow-white` bg; desc-cta section bg (white mode) |
| Mint | `#E0FBFC` | `.mint` background utility |
| Neutral gray | `#F5F7FA` | `.neutral-gray` bg; desc-cta section bg (light mode) |
| Near-black text | `#111827` | Nav links, footer links, footer bottom text, mobile menu links |
| Medium text | `#4b5563` | Checklist text in Hero module |
| Blue CTA text | `#2563eb` | `.cta-white-primary` anchor text color |
| Blue hover CTA | `#f3f4f6` | `.cta-white-primary:hover` background |
| Green check icon | `#22c55e` | Checklist SVG stroke color |
| Eyebrow text | `#1e40af` | Eyebrow pill text color (dark navy blue) |
| Eyebrow pill bg | `#dbeafe` | Eyebrow pill background (light sky blue) |
| Orange-red span start | `#f97316` | h1 gradient span start color |
| Red span end | `#ef4444` | h1 gradient span end color |
| White | `#fff` | Header mobile menu bg, CTA button text, desc-cta headings/body |
| Section bg light | `#f8fafc` | Hero banner, two-column image-left, three-column sections |
| Header bg | `hsla(0, 0%, 100%, 0.8)` | Header translucent white (with backdrop-filter) |
| Header mobile menu | `#fff` | Mobile dropdown menu background |
| Footer bg | `#f9fafb` | Footer main background |
| Border/divider | `#e5e5e5` | Header bottom border, footer top border, footer-bottom top border |
| Shadow | `#e5e5e5` | Header box-shadow color |
| Disabled button bg | `#D0D0D0` | Disabled button background |
| Disabled button text | `#E6E6E6` | Disabled button text |
| HR divider | `#CCC` | Horizontal rule border |

---

## 3. Global Typography Scale

### Base Body

Defined in `css/elements/_typography.css` and overridden in `css/theme-overrides.css`:

| Property | Value |
|----------|-------|
| `font-size` (html) | Theme-driven (`body_font.size + body_font.size_unit`) |
| `font-size` (body) | Theme-driven, same as html |
| `line-height` (body) | `1.4` |
| `overflow-wrap` | `break-word` |
| `p font-size` | `1rem` |
| `p margin` | `0 0 1.4rem` |

### Headings (base)

All headings from `css/elements/_typography.css`:

| Element | Margin |
|---------|--------|
| h1–h6 | `0 0 1.4rem` |

### h1 Override (custom-styles.css)

| Property | Value |
|----------|-------|
| `line-height` | `60px` |
| Mobile font-size (`max-width: 767px`) | `48px` |

### Hero Module Typography

| Element | Font size | Line height | Color | Notes |
|---------|-----------|-------------|-------|-------|
| Eyebrow pill text | `14px` | `1` | `#1e40af` | Inside pill badge |
| `<h1>` | Theme-driven; mobile: `48px` | `60px` | Theme-driven | Spans inside h1 use orange→red gradient via `-webkit-background-clip: text` |
| Description `<p>` | `1rem` | `32px` | Theme-driven | Max-width: `768px`, centered |
| Checklist text | `14px` | `20px` | `#4b5563` | Each checklist item label |

### Header Typography

| Element | Font size | Font weight | Color |
|---------|-----------|-------------|-------|
| Nav links | `16px` | `400` | `#111827` |
| Mobile nav links | `16px` | `400` | `#111827` |
| CTA button text | `16px` | `700` | `#fff` |

### Footer Typography

| Element | Font size | Font weight | Color |
|---------|-----------|-------------|-------|
| Column heading (h4) | `16px` | `600` | Theme-driven (dark) |
| Column link text | `14px` | Normal | `#111827` |
| Info description (p) | `14px` | Normal | Theme-driven |
| Copyright text (p) | `14px` | Normal | `#111827` |

### Description with CTAs Module Typography

| Element | Font size | Line height | Color | Max-width |
|---------|-----------|-------------|-------|-----------|
| Heading (h2) | Theme-driven | Theme | `#fff` | none |
| Body (p) | `1rem` | `28px` | `#fff` | `672px` |

### CTA Button Typography

| Class | Font size | Line height | Color |
|-------|-----------|-------------|-------|
| `.cta-white-primary` | `14px` | `20px` | `#2563eb` |
| `.cta-white-secondary` | `14px` | `20px` | `#fff` |

### Logo Company Name Fallback

| Property | Value |
|----------|-------|
| `font-size` | `1.167rem` |
| `margin-top` | `0.7rem` |

### Blockquote

| Property | Value |
|----------|-------|
| `border-left` | `2px solid` (color: theme secondary) |
| `margin` | `0 0 1.4rem` |
| `padding-left` | `0.7rem` |

### Anchors

- `cursor: pointer`
- Color and hover: theme-driven
- Hover: `color_variant(anchor_font.color, -40)` (darkened 40%)
- Active: `color_variant(anchor_font.color, 40)` (lightened 40%)

---

## 4. Global Spacing System

### Container / DND Section Padding

From `css/theme-overrides.css`:

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

From `css/objects/_containers-dnd.css`:

```css
.content-wrapper {
  margin: 0 auto;
  padding: 0 1rem;
}

@media screen and (min-width: 1380px) {
  .content-wrapper {
    padding: 0;
  }
}

.dnd-section > .row-fluid {
  margin: 0 auto;
}

.dnd-section .dnd-column {
  padding: 0 1rem;
}

@media (max-width: 767px) {
  .dnd-section .dnd-column {
    padding: 0;
  }
}
```

### Module-Level Spacing

| Module | Desktop Padding | Mobile Padding |
|--------|----------------|----------------|
| Hero.module | `40px 0 20px 0` | `40px 0 20px 0` |
| Description with CTAs | `70px 0` (top/bottom) | `50px 0` (top/bottom) |
| Desc CTA inner card | `48px 48px` | `48px 30px` |

### Call to Action Section Padding

| Breakpoint | Padding |
|-----------|---------|
| Desktop | `top: 140px, right: 20px, bottom: 160px, left: 20px` |
| Mobile | `top: 80px, right: 20px, bottom: 80px, left: 20px` |

### Call to Action — Inner Row Padding

| Breakpoint | Row bottom padding (text row) |
|-----------|-------------------------------|
| Desktop | `bottom: 40px` |
| Mobile | `0` |

### Typography Spacing

| Element | Bottom margin |
|---------|---------------|
| `p` | `1.4rem` |
| `h1`–`h6` | `1.4rem` |
| `ul`, `ol` | `1.4rem` |
| `blockquote` | `1.4rem` |
| Footer info description (p) | `0` (reset) |
| Desc-CTA heading (h2) | `16px` |
| Desc-CTA description (p) | `32px` (margin-bottom) |
| Hero description (p) | `32px` (margin-bottom) |
| Eyebrow area | `0 auto 24px` (bottom: 24px) |

---

## 5. Global Grid System

From `css/objects/_layout.css`:

### Grid Variables

```css
:root {
  --column-gap: 2.13%;
  --column-width-multiplier: 8.333;
}
```

### Base: Mobile First (all spans = 100% width)

```css
.row-fluid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

/* All .span1 through .span12 */
.row-fluid .spanN {
  min-height: 1px;
  width: 100%; /* stacks vertically */
}
```

### Desktop (`min-width: 768px`)

```css
.row-fluid {
  flex-wrap: nowrap;
  justify-content: space-between;
}

/* Column width formula: */
.row-fluid .spanN {
  width: calc(
    var(--column-width-multiplier) * 1% * N
    - var(--column-gap) * ((12 - N) * var(--column-width-multiplier) / 100)
  );
}
```

### Column widths used on this homepage

| Grid spans | Approximate % of container |
|-----------|---------------------------|
| `span6` (6/12 = 50%) | ~49% each side |
| `span4` (4/12 = 33.3%) | ~32% each of three columns |

### DND Column Gutters

| Breakpoint | Column padding |
|-----------|----------------|
| Desktop | `padding: 0 1rem` on each `.dnd-column` |
| Mobile (`max-width: 767px`) | `padding: 0` |

---

## 6. Reusable Utility Classes

From `css/custom-styles.css`:

### Background Utilities

| Class | Value |
|-------|-------|
| `.primary-gradient` | `background: linear-gradient(90deg, rgba(0,198,178,1) 0%, rgba(0,131,255,1) 100%)` |
| `.primary-gradient-cta` | Same gradient + `transition: 0.3s ease-in-out` |
| `.primary-gradient-cta:hover` | Reversed gradient |
| `.secondary-midnight-blue` | `background: #1C1C28` |
| `.secondary-teal` | `background: #00C6B2` |
| `.snow-white` | `background: #FAFAFA` |
| `.mint` | `background: #E0FBFC` |
| `.neutral-gray` | `background: #F5F7FA` |

### Button Utilities

| Class | Background | Padding | Border-radius | Font size | Color | Border |
|-------|-----------|---------|---------------|-----------|-------|--------|
| `.cta-white-primary` | `#fff` | `12px 32px` | `5px` | `14px` | `#2563eb` | `#fff solid 1px` |
| `.cta-white-primary:hover` | `#f3f4f6` | — | — | — | — | — |
| `.cta-white-secondary` | `transparent` | `12px 32px` | `5px` | `14px` | `#fff` | `#fff solid 1px` |
| `.cta-white-secondary:hover` | `#fff` | — | — | — | `#2563eb` | — |

Both button utilities: `transition: 0.3s ease-in-out`, `text-decoration: none`, `line-height: 20px`

### Screen Reader Utilities

From `css/utilities/_helper.css`:

| Class | Behavior |
|-------|---------|
| `.show-for-sr` | Visually hidden but accessible (1×1px clip trick) |
| `.show-for-sr--mobile` | Same, but only at `max-width: 767px` |

### Base Button Behaviors

From `css/elements/_buttons.css`:

| Property | Value |
|----------|-------|
| `cursor` | `pointer` |
| `display` | `inline-block` |
| `text-align` | `center` |
| `transition` | `all 0.15s linear` |
| `white-space` | `normal` |

### No-button Reset (`.no-button`)

Strips all button styles. Background none, no border, no radius, no color, no padding, no margin, no transition.

---

## 7. Header

### Source Files

- `templates/partials/header.html` — wrapper `<header class="header">`
- `modules/Header.module/module.html` — actual content
- `modules/Header.module/module.css` — scoped styles
- `css/components/_header.css` — global legacy header styles (partially active)

### Visual Appearance

The header is **fixed**, **translucent white**, with a frosted-glass effect. It spans the full viewport width and sits above all page content.

| Property | Value |
|----------|-------|
| Position | `fixed` |
| Top | `0` |
| Left / Right | `0` |
| Z-index | `99` |
| Background | `hsla(0, 0%, 100%, 0.8)` — 80% opacity white |
| Backdrop filter | `blur(3px)` — frosted glass |
| Border bottom | `#e5e5e5 solid 1px` |
| Box shadow | `1px 1px 10px #e5e5e5` |
| Padding | `30px 0` (top/bottom) |
| Inner container | `.page-center` — centered, `padding: 0 20px`, `max-width: theme container width` |

### DOM Structure

```
<header class="header">
  <a href="#main-content" class="header__skip">   ← skip to content (accessibility)
  <div class="header-main">                        ← Header.module root
    <div class="page-center">
      <div class="header-holder">                 ← flex row, space-between, align center
        <div class="logo">                        ← logo image
        <div class="menu-area">                   ← desktop navigation
        <div class="cta-area">                    ← desktop CTA button (conditional)
        <div class="mobile-toggle" id="mobileToggle">  ← hamburger (mobile only)
        <div class="mobile-menu" id="mobileMenu">      ← mobile dropdown (hidden by default)
          <div class="mobile-menu-inner">
            <div class="menu-clone">              ← cloned nav for mobile
            <div class="cta-clone">              ← cloned CTA for mobile
```

### Logo Placement

| Property | Value |
|----------|-------|
| Position | Far left of header |
| Default width | `150px` |
| Default height | `25px` |
| Image | From HubSpot CDN (branded logo PNG) |
| Alt text | `"logo"` |
| Loading | `eager` implied |
| Suppress company name | `true` |

### Navigation Placement

| Property | Value |
|----------|-------|
| Position | Center-right area of header row |
| Type | Horizontal flex menu |
| Item spacing | `margin: 0 15px` on each `li` |
| Link styles | `color: #111827`, `text-decoration: none`, `font-weight: 400`, `font-size: 16px` |
| Active link indicator | `background-color: nav_font_color` (underscore/bar) |
| Hover | `color: color_variant(nav_font_color, -40)` — darkened |
| Active state | `color: color_variant(nav_font_color, 40)` — lightened |

### CTA Placement

| Property | Value |
|----------|-------|
| Position | Far right of header, after navigation |
| Default text | `"Login To Our Website"` |
| Class | `.primary-gradient-cta` |
| Background | `linear-gradient(90deg, rgba(0,198,178,1) 0%, rgba(0,131,255,1) 100%)` |
| Hover background | Reversed gradient |
| Padding | `10px 20px` |
| Color | `#fff` |
| Border-radius | `50px` (fully rounded / pill shape) |
| Font size | `16px` |
| Font weight | `700` |
| Text decoration | `none` |
| Transition | `0.3s ease-in-out` |

### Mobile Behavior

**Breakpoint:** `max-width: 991px`

| Event | Effect |
|-------|--------|
| At ≤ 991px | `.menu-area` and `.header-main .cta-area` are `display: none` |
| At ≤ 991px | `.mobile-toggle` becomes `display: flex` |
| Hamburger icon | 3 spans (`height: 3px`, `background: #000`, `border-radius: 3px`) in a `24×18px` container |
| Mobile menu | `position: fixed`, `top: 90px`, full-width, `background: #fff`, `z-index: 999`, `padding: 20px` |
| Mobile menu inner | Flex column, `justify-content: center`, `align-items: center` |
| Mobile nav list items | Flex column, `margin-bottom: 20px`, `font-size: 16px`, `color: #111827` |
| Mobile CTA | `padding: 12px 30px`, `border-radius: 50px`, gradient background |
| Box shadow (mobile menu) | `0 5px 10px rgba(0,0,0,0.1)` |

---

## 8. Section 1 — Hero Banner

**Source:** `my-theme/sections/hero-banner.html`  
**DND section background:** `#f8fafc`  
**Vertical alignment:** `MIDDLE`

### Layout Structure

Two columns, side by side:

```
┌────────────────────────────┬────────────────────────────┐
│  Left Column (6/12)        │  Right Column (6/12)       │
│  Linked image              │  Row 1: Rich text (h1 + p) │
│  max 605×451px             │  Row 2: HubSpot Form       │
└────────────────────────────┴────────────────────────────┘
```

### Columns

| Column | Grid offset | Grid width | Content |
|--------|------------|------------|---------|
| Left | 0 | 6 spans | `@hubspot/linked_image` |
| Right | 6 | 6 spans | Two rows: rich_text (row 1) + form (row 2) |

### Left Column — Image

| Property | Value |
|----------|-------|
| Module | `@hubspot/linked_image` |
| Max height | `451px` |
| Max width | `605px` |
| Size type | `auto_custom_max` |
| Loading | `disabled` (eager load — first LCP image) |
| Default src | `../images/grayscale-mountain.png` |
| Alt | `"Stock placeholder image with grayscale geometrical mountain landscape"` |

### Right Column — Row 1: Rich Text

Default content:

```html
<h1>This is your main headline.</h1>
<p>Use this space to tell everyone about what you have to offer.</p>
```

| Property | Value |
|----------|-------|
| h1 font-size | Theme-driven |
| h1 line-height | `60px` (custom-styles.css override) |
| Mobile h1 font-size | `48px` |
| p font-size | `1rem` |
| p margin-bottom | `1.4rem` |

### Right Column — Row 2: HubSpot Form

- Standard HubSpot form module
- Styles controlled by `theme-overrides.css` form variables
- Form background: theme-driven
- Input height: `45px`
- Input padding: `0 0.7rem`
- Submit button: inherits `.hs-button` styles (theme-driven gradient)

### Section Background

| Property | Value |
|----------|-------|
| Background color | `#f8fafc` |
| Vertical alignment | `MIDDLE` (columns align to center vertically) |

### Responsive Behavior

| Breakpoint | Behavior |
|-----------|---------|
| `min-width: 768px` | Two columns side by side (flex, no-wrap) |
| `max-width: 767px` | Each column stacks to 100% width, flex-wrap |
| DND columns | Padding drops from `0 1rem` to `0` at ≤767px |

---

## 9. Section 2 — Multi-Row Content (Text Left, Image Right)

**Source:** `my-theme/sections/multi-row-content.html`  
**DND section background:** No explicit background (renders white / inherited)  
**Vertical alignment:** `MIDDLE`

### Layout Structure

Two columns, side by side:

```
┌──────────────────────────────┬──────────────────────────────┐
│  Left Column (6/12)          │  Right Column (6/12)         │
│  Rich Text (h2 + p)          │  Linked image                │
│                              │  max 605×451px               │
└──────────────────────────────┴──────────────────────────────┘
```

### Columns

| Column | Grid offset | Grid width | Content |
|--------|------------|------------|---------|
| Left | 0 | 6 spans | `@hubspot/rich_text` |
| Right | 6 | 6 spans | `@hubspot/linked_image` |

### Left Column — Rich Text

Default content:

```html
<h2>Provide more details here.</h2>
<p>Use text and images to tell your company's story. Explain what makes your product or service extraordinary.</p>
```

### Right Column — Image

| Property | Value |
|----------|-------|
| Max height | `451px` |
| Max width | `605px` |
| Size type | `auto_custom_max` |
| Loading | `disabled` (eager) |
| Default src | `../images/grayscale-mountain.png` |

### Responsive Behavior

Same as Section 1: columns stack at `max-width: 767px`.

---

## 10. Section 3 — Two-Column Image Left

**Source:** Inline in `my-theme/templates/home.html` (lines 28–53)  
**DND section background:** `#f8fafc`  
**Vertical alignment:** `MIDDLE`

### Layout Structure

Two columns, side by side. Image is on the left; text is on the right.

```
┌────────────────────────────┬────────────────────────────┐
│  Left Column (6/12)        │  Right Column (6/12)       │
│  Linked image              │  Rich Text (h2 + p)        │
│  max 605×451px             │                            │
└────────────────────────────┴────────────────────────────┘
```

### Columns

| Column | Grid offset | Grid width | Content |
|--------|------------|------------|---------|
| Left | 0 | 6 spans | `@hubspot/linked_image` |
| Right | 6 | 6 spans | `@hubspot/rich_text` |

### Left Column — Image

| Property | Value |
|----------|-------|
| Max height | `451px` |
| Max width | `605px` |
| Size type | `auto_custom_max` |
| Loading | `lazy` |
| Default src | `../images/grayscale-mountain.png` |
| Alt | `"Stock placeholder image with grayscale geometrical mountain landscape"` |

### Right Column — Rich Text

Default content:

```html
<h2>Provide more details here.</h2>
<p>Use text and images to tell your company's story. Explain what makes your product or service extraordinary.</p>
```

### Section Background

| Property | Value |
|----------|-------|
| Background color | `#f8fafc` |

### Responsive Behavior

Same as Sections 1 and 2: columns stack at `max-width: 767px`.

---

## 11. Section 4 — Call to Action

**Source:** `my-theme/sections/call-to-action.html`  
**Background:** Full-width cover image  
**Vertical alignment:** `MIDDLE`

### Layout Structure

Single centered column, constrained max-width:

```
┌─────────────────────────────────────────────────────┐
│  [Background image — cover, centered]               │
│                                                     │
│         ┌──────────────────────────────┐            │
│         │  Row 1: Centered rich text   │            │
│         │  (h2 + p), max-width 700px   │            │
│         ├──────────────────────────────┤            │
│         │  Row 2: Button (centered)    │            │
│         └──────────────────────────────┘            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Section Properties

| Property | Value |
|----------|-------|
| Background image | `../images/large-placeholder-image.png` |
| Background position | `MIDDLE_CENTER` |
| Background size | `cover` |
| Content max-width | `700px` |

### Section Padding

| Breakpoint | Top | Right | Bottom | Left |
|-----------|-----|-------|--------|------|
| Desktop | `140px` | `20px` | `160px` | `20px` |
| Mobile (`max-width: 767px`) | `80px` | `20px` | `80px` | `20px` |

### Row 1 — Rich Text

| Property | Value |
|----------|-------|
| Desktop row bottom padding | `40px` |
| Mobile row bottom padding | `0` |
| Text alignment | `center` |
| Default content | `<div style="text-align: center"><h2>Provide an excerpt here</h2><p>Use text and images to tell your company's story...</p></div>` |

### Row 2 — Button Module

| Property | Value |
|----------|-------|
| Default button text | `"Get started"` |
| Horizontal alignment | `CENTER` |
| Module | `../modules/button` |

#### Button Module Rendering (`.button` class)

The button module renders an `<a>` tag inside `.button-wrapper`:

```html
<div class="button-wrapper" style="text-align: center;">
  <a class="button" href="...">Get started</a>
</div>
```

| Property | Source |
|----------|--------|
| Background | Theme button bg color (`button_bg_color`) |
| Border | Theme button border (`button_border`) |
| Border radius | Theme button corner radius (`button_corner_radius`) |
| Padding | Theme button spacing (`button_spacing`) |
| Font | Theme button font (`button_font.style`, `.size`, `.color`) |
| Text transform | Theme button text transform |
| Hover bg | `color_variant(-80%)` of button background |
| Active bg | `color_variant(+80%)` of button background |
| Transition | `all 0.15s linear` |

---

## 12. Section 5 — Multi-Column Content (Three Columns)

**Source:** `my-theme/sections/multi-column-content.html`  
**DND section background:** `#f8fafc`  
**Vertical alignment:** `MIDDLE`

### Layout Structure

Three equal columns:

```
┌──────────────────┬──────────────────┬──────────────────┐
│  Column 1 (4/12) │  Column 2 (4/12) │  Column 3 (4/12) │
│  Row 1: Image    │  Row 1: Image    │  Row 1: Image    │
│  Row 2: h3 + p   │  Row 2: h3 + p   │  Row 2: h3 + p   │
└──────────────────┴──────────────────┴──────────────────┘
```

### Columns

| Column | Grid offset | Grid width | Content (Row 1) | Content (Row 2) |
|--------|------------|------------|-----------------|-----------------|
| 1 | 0 | 4 spans | `@hubspot/linked_image` | `@hubspot/rich_text` |
| 2 | 4 | 4 spans | `@hubspot/linked_image` | `@hubspot/rich_text` |
| 3 | 8 | 4 spans | `@hubspot/linked_image` | `@hubspot/rich_text` |

### Images (all three)

| Property | Value |
|----------|-------|
| Max height | `451px` |
| Max width | `605px` |
| Size type | `auto_custom_max` |
| Loading | `lazy` |
| Default src | `../images/grayscale-mountain.png` |

### Rich Text Default Content

| Column | Default content |
|--------|-----------------|
| Column 1 | `<h3>Feature one</h3><p>Use text and images…</p>` |
| Column 2 | `<h3>Feature two</h3><p>Use text and images…</p>` |
| Column 3 | `<h3>Feature three</h3><p>Use text and images…</p>` |

### Section Background

| Property | Value |
|----------|-------|
| Background color | `#f8fafc` |

### Responsive Behavior

| Breakpoint | Behavior |
|-----------|---------|
| `min-width: 768px` | Three columns side by side (flex, no-wrap) |
| `max-width: 767px` | All three stack to 100% width |

---

## 13. Footer

### Source Files

- `templates/partials/footer.html` — wrapper `<footer class="footer">`
- `modules/Footer.module/module.html` — actual content
- `modules/Footer.module/module.css` — scoped styles
- `css/theme-overrides.css` — `.footer` background (theme-driven) and text color overrides

### Visual Appearance

A light gray horizontal footer band separated from the page by a top border line.

| Property | Value |
|----------|-------|
| Background | `#f9fafb` |
| Border top | `#e5e5e5 solid 1px` |
| Padding | `1.6rem 0` (top and bottom) |
| Inner container | `.page-center` — centered, `padding: 0 20px`, max-width: theme container width |

### DOM Structure

```
<footer class="footer">
  <div class="footer-main">
    <div class="page-center">
      <div class="footer-top">               ← flex row, 4 equal columns
        <div class="footer-col info-area">   ← logo + description
        <div class="footer-col">             ← link column 1 (heading + menu)
        <div class="footer-col">             ← link column 2 (heading + menu)
        <div class="footer-col">             ← link column 3 (heading + menu)
      </div>
      <div class="footer-bottom">            ← copyright text, centered
    </div>
  </div>
</footer>
```

### Footer Top Layout

| Property | Value |
|----------|-------|
| Display | `flex` |
| Gap | `1.6rem` |
| Each column | `max-width: 25%`, `width: 100%` |

### Info Area Column

| Element | Property | Value |
|---------|----------|-------|
| Logo image | Max-width | `40%` of info column |
| Logo image | Width | `100% !important` |
| Logo image | Margin-bottom | `10px` |
| Logo image default | Size | `150×25px` |
| Logo image default | Alt | `"logo"` |
| Logo image default src | | HubSpot CDN PNG |
| Description `<p>` | Font-size | `14px` |
| Description `<p>` | Margin | `0` (reset) |
| Default description | | `"The safest way to backup and manage your HubSpot content."` |

### Link Columns (3 columns, repeating)

| Element | Property | Value |
|---------|----------|-------|
| Column heading (`h4`) | Font-size | `16px` |
| Column heading | Font-weight | `600` |
| Column heading | Margin-bottom | `8px` |
| Default heading text | | `"Product"` |
| List items (`li`) | Display | `block`, `width: 100%` |
| Between list items | Margin-bottom | `4px` |
| Links (`a`) | Color | `#111827` |
| Links | Text-decoration | `none` |
| Links | Font-size | `14px` |
| Links hover | Color | `#000` |
| Links | Transition | `0.3s ease-in-out` |
| Min columns | 1 | (configurable: 1–3) |
| Default columns | 3 | |

### Footer Bottom

| Property | Value |
|----------|-------|
| Display | Block |
| Margin-top | `1.6rem` |
| Padding-top | `1.6rem` |
| Border-top | `#e5e5e5 solid 1px` |
| Text-align | `center` |
| Copyright `p` color | `#111827` |
| Copyright `p` font-size | `14px` |
| Copyright `p` margin | `0` |
| Default copyright text | `"© {{ year }} Smuves. All rights reserved."` |

### Logo Placement (Footer)

| Property | Value |
|----------|-------|
| Position | Top-left of info-area column (first column) |
| Above | Description text |
| Loading | Controlled by `loading` field |

### Footer Responsive Behavior

| Breakpoint | Behavior |
|-----------|---------|
| `max-width: 991px` | Info-area logo max-width increases to `60%` |
| `max-width: 767px` | Footer-top wraps (`flex-wrap: wrap`); each column becomes `max-width: 47%` (2 per row) |
| `max-width: 767px` | Info-area logo max-width becomes `40%` again |
| `max-width: 575px` | Each column becomes `max-width: 100%` (1 per row); text-align: `center` |
| `max-width: 575px` | Info-area logo max-width: `140px` (fixed) |

---

## 14. Visual Fidelity Requirements

The following specifications **must be preserved exactly** when recreating this homepage in Next.js. No redesign, no simplification, no modernization.

---

### F-1: Fixed Translucent Header

The header must be `position: fixed`, `top: 0`, spanning full viewport width. It must use a **translucent white** background (`hsla(0, 0%, 100%, 0.8)`) with `backdrop-filter: blur(3px)` to create the frosted glass effect. The 1px `#e5e5e5` bottom border and `1px 1px 10px #e5e5e5` box-shadow must be reproduced.

The header has **30px vertical padding** (`padding: 30px 0`) and an inner centered container (`.page-center`) with `padding: 0 20px`.

---

### F-2: Header Three-Zone Layout

The header inner row must use **flexbox, space-between, center-aligned**:

```
[Logo]    [Navigation links]    [CTA Pill Button]
```

These three zones must be horizontally separated with space-between. The logo is left-anchored, navigation is in the middle-right, and the CTA pill is at the far right.

---

### F-3: Header CTA Pill Button

The CTA button is a **fully rounded pill** (`border-radius: 50px`). It must use the **brand gradient** (`linear-gradient(90deg, rgba(0,198,178,1) 0%, rgba(0,131,255,1) 100%)`), with white text (`#fff`), `16px/700` weight font, `10px 20px` padding, and the gradient must **reverse on hover** (teal→blue becomes blue→teal). Transition: `0.3s ease-in-out`.

---

### F-4: Mobile Header Breakpoint at 991px

At `max-width: 991px` (NOT 768px), the desktop nav and CTA disappear. A **hamburger icon** appears (3 spans, `24×18px` container, `3px` span height, black background, `border-radius: 3px`). The mobile menu slides in as a fixed panel (`top: 90px`) with `background: #fff`, `z-index: 999`, and `0 5px 10px rgba(0,0,0,0.1)` shadow. Mobile menu items are centered column flex.

---

### F-5: Section Background Alternation Pattern

The sections alternate between white and light gray (`#f8fafc`):

| Section | Background |
|---------|-----------|
| Hero Banner | `#f8fafc` |
| Multi-Row Content | White (no explicit bg) |
| Two-Column Image Left | `#f8fafc` |
| Call to Action | Full background image (cover) |
| Multi-Column (3-col) | `#f8fafc` |

This alternation creates a visual rhythm. **Do not consolidate or remove it.**

---

### F-6: 12-Column Grid with CSS Variables

The grid uses the exact formula with `--column-gap: 2.13%` and `--column-width-multiplier: 8.333`. The column widths are computed, not fixed pixel values. All two-column sections use `6/12` splits. The three-column section uses `4/12` splits.

DND column gutters: `padding: 0 1rem` on each column at desktop; `padding: 0` at mobile.

---

### F-7: Hero Banner Two-Column Split

The hero section is exactly: **image on the left (6/12), rich text + form on the right (6/12)**. Both columns align vertically to the middle. The image must not be lazy-loaded (it is the LCP element: `loading: disabled`). The form occupies its own row inside the right column, below the heading and body text.

---

### F-8: Multi-Row Content — Mirror of Hero

This section flips the hero: **rich text on the left (6/12), image on the right (6/12)**. No background color (renders on white). Both columns are vertically centered.

---

### F-9: Call to Action — Full Background Image

The CTA section has a **full-width cover background image** (not a color band). The inner content is constrained to `max-width: 700px` and centered. Desktop vertical padding is asymmetric: `140px top, 160px bottom`. Mobile: `80px top, 80px bottom`. The text row has `40px bottom padding` on desktop, `0` on mobile.

---

### F-10: Three-Column Feature Section

Three fully equal columns (`4/12` each), each with an image on top and `h3` + paragraph below. Background is `#f8fafc`. On mobile all three stack to 100%.

---

### F-11: Footer 4-Column Layout with Strict Max-Width

The footer-top row is a **4-column flex row** with `1.6rem` gap. Each column must be `max-width: 25%, width: 100%`. Column 1 (info-area) contains the logo image (constrained to 40% of its column width with a `10px` bottom margin) plus a 14px description paragraph. Columns 2–4 each contain a bold `16px/600` heading followed by a list of `14px` links.

---

### F-12: Footer Bottom Divider + Copyright

The footer-bottom section is separated by a `#e5e5e5 1px` top border with `1.6rem` margin-top and `1.6rem` padding-top. Copyright text is centered, `14px`, `#111827`, zero margin.

---

### F-13: Footer Responsive Cascade

Three distinct breakpoints must be applied (not just one):
- `≤ 991px`: logo max-width in info area → `60%`
- `≤ 767px`: columns wrap to 2-per-row (`max-width: 47%`); logo → `40%`
- `≤ 575px`: columns stack to 1-per-row (`max-width: 100%`, `text-align: center`); logo → fixed `140px`

---

### F-14: Brand Gradient Classes Must Exist Globally

The following classes must be available as global CSS:

- `.primary-gradient` — gradient background, no transition
- `.primary-gradient-cta` — gradient background + hover reverse + `transition: 0.3s ease-in-out`
- `.cta-white-primary` — white bg, `#2563eb` text, `5px` radius, `12px 32px` padding, `14px` font, 1px white border
- `.cta-white-secondary` — transparent bg, `#fff` text, `5px` radius, `12px 32px` padding, `14px` font, 1px white border
- `.cta-white-secondary:hover` — white bg, `#2563eb` text

---

### F-15: h1 Line-Height and Mobile Font-Size

The `h1` element must have `line-height: 60px` globally (from `custom-styles.css`). At `max-width: 767px`, the `h1` must be `font-size: 48px`. These are global overrides applied on top of theme-driven sizes.

---

### F-16: Hero Module — Eyebrow Pill Badge

When the Hero module is used, the eyebrow area renders a centered pill badge above the heading:

- Pill background: `#dbeafe` (light blue)
- Pill text color: `#1e40af` (dark navy)
- Pill padding: `8px 16px`
- Pill border-radius: `50px` (pill shape)
- Contains: SVG icon (`16×16px`) + text string
- Font size: `14px`, `line-height: 1`
- Margin below pill: `24px`

---

### F-17: h1 Highlighted Span Gradient

Within the `h1`, any `<span>` must receive the orange-to-red gradient as text fill:

```css
background: -webkit-linear-gradient(#f97316, #ef4444);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

This is decorative emphasis, not a class — it must apply to `<span>` inside `.hero-section .heading-area h1`.

---

### F-18: Description with CTAs Module — Gradient Card

The "Description with CTAs" module wraps its content in a `.desc-cta-main` card that uses `.primary-gradient` as its background. The card has:

- `padding: 48px` (desktop), `padding: 48px 30px` (mobile `≤767px`)
- `border-radius: 16px`
- `text-align: center`
- Heading (`h2`): `color: #fff`, `margin-bottom: 16px`
- Body (`p`): `color: #fff`, `line-height: 28px`, `max-width: 672px`, centered, `margin: 0 auto 32px`
- CTA area: flex row, `justify-content: center`, `gap: 16px`; wraps on mobile

The section surrounding this card has its own background: `#FAFAFA` (white mode) or `#F5F7FA` (light mode), with `70px` top/bottom padding (desktop) and `50px` (mobile).

---

### F-19: Checklist Area in Hero

When the Hero module's checklist is rendered:

- `.checklist-area`: flex row, `justify-content: center`, `gap: 16px`
- On mobile (`≤767px`): `flex-wrap: wrap`; each item becomes `width: 100%`, `justify-content: center`
- Each checklist item: flex row, `align-items: center`, `gap: 8px`
- SVG check icon: `16×16px`, stroke `#22c55e` (green)
- Item text: `font-size: 14px`, `line-height: 20px`, `color: #4b5563`

---

### F-20: Box-Sizing Universal Reset

```css
*, *:before, *:after {
  box-sizing: border-box;
}
```

This applies universally and must not be removed.

---

*End of Report*

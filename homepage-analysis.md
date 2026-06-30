# Homepage Analysis — HubSpot Theme (`my-theme`)

---

## 1. Homepage Template

**File path:** `my-theme/templates/home.html`

**Template type:** `page`  
**Label:** Home  
**Available for new content:** Yes  
**Screenshot preview:** `my-theme/images/template-previews/home.png`

**Template inheritance chain:**

```
my-theme/templates/home.html
  └── extends my-theme/templates/layouts/base.html
        ├── global_partial: my-theme/templates/partials/header.html
        └── global_partial: my-theme/templates/partials/footer.html
```

The homepage defines a single `dnd_area` named `"dnd_area"` with class `body-container body-container--home`. Inside that area it includes four sections — three via `include_dnd_partial` and one defined inline.

---

## 2. Included Sections

The homepage includes **five content sections** in this order:

| # | Label | Source | Type |
|---|-------|--------|------|
| 1 | Hero Banner | `my-theme/sections/hero-banner.html` | `include_dnd_partial` |
| 2 | Multi-row Content (text left, image right) | `my-theme/sections/multi-row-content.html` | `include_dnd_partial` |
| 3 | Two-column Image Left (inline) | Defined directly in `home.html` lines 28–53 | Inline `dnd_section` |
| 4 | Call to Action | `my-theme/sections/call-to-action.html` | `include_dnd_partial` |
| 5 | Multi-column Content | `my-theme/sections/multi-column-content.html` | `include_dnd_partial` |

---

## 3. Global Partials

Both partials are registered as `templateType: global_partial` and are included by the base layout, not the homepage template directly. They appear on every page that extends `base.html`.

### 3.1 Header

**File path:** `my-theme/templates/partials/header.html`  
**Label:** Website header

- Renders a `<header class="header">` element.
- Contains an accessibility skip-link (`<a href="#main-content" class="header__skip">`).
- **Currently active:** loads the external module `/smuves/modules/Header` via `{% module "module_17530987383087" path="/smuves/modules/Header" %}`. This module is **not** part of the `my-theme` folder; it is a separate Contentstack/Smuves module deployed independently.
- **Commented out (original HubSpot markup):** a full header layout including `@hubspot/logo`, `@hubspot/search_input`, `../../modules/menu` (the theme's `menu.module`), language switcher toggles, and mobile toggle buttons. This block is wrapped in a HubL comment `{# ... #}` and is not rendered.
- Contains a `dnd_area` named `"header-bottom"` (class `content-wrapper`) for an optional bottom-header drag-and-drop zone. This area is currently empty.

### 3.2 Footer

**File path:** `my-theme/templates/partials/footer.html`  
**Label:** Footer

- Renders a `<footer class="footer">` element.
- **Currently active:** loads the external module `/smuves/modules/Footer` via `{% module "module_175310695988211" path="/smuves/modules/Footer" %}`. This module is **not** part of `my-theme`.
- **Commented out (original HubSpot markup):** a `dnd_area` named `"footer"` containing a `social-follow` custom module (`../../modules/social-follow`) and a `@hubspot/rich_text` copyright notice.

---

## 4. Custom Modules

### 4.1 Modules used by homepage sections

#### `button.module`

**File path:** `my-theme/modules/button.module/`  
**Used in:** `my-theme/sections/call-to-action.html`  
**Referenced as:** `../modules/button`

**Purpose:** Renders a single CTA anchor styled as a button. Supports configurable link URL, link target, nofollow, button text, and full style overrides (font, background color, border, corner radius, spacing, horizontal alignment).

**Files:**

| File | Content |
|------|---------|
| `module.html` | HubL template. Injects scoped CSS via `require_css`. Renders `<div class="button-wrapper"><a class="button">...</a></div>`. |
| `fields.json` | Defines: `link` (link field), `button_text` (required text field), `styles` group (text font, background color, border, corner radius, spacing, alignment). |
| `module.css` | Empty. All styling is handled inline in `module.html` via `require_css`. |
| `module.js` | Empty. No JavaScript. |
| `meta.json` | Module metadata. |

**Layout:** A single `div.button-wrapper` whose `text-align` is driven by `styles.alignment.alignment.horizontal_align`. Inside it, an `<a class="button">` with configurable background, border, radius, font, and spacing. Hover/active states use color variants of the background.

---

### 4.2 External Smuves modules (referenced, not defined in this theme)

These modules are referenced in the partials but their source files are **outside** `my-theme`:

| Module path | Referenced in | Notes |
|-------------|--------------|-------|
| `/smuves/modules/Header` | `partials/header.html` | Custom Contentstack/Smuves header component |
| `/smuves/modules/Footer` | `partials/footer.html` | Custom Contentstack/Smuves footer component |

---

### 4.3 Other custom modules in `my-theme` (not used by homepage sections)

These modules exist in the theme but are **not directly referenced** by the homepage or its active partials:

| Module | Path | Notes |
|--------|------|-------|
| `Header.module` | `my-theme/modules/Header.module/` | Not referenced in active markup (original header is commented out) |
| `Footer.module` | `my-theme/modules/Footer.module/` | Not referenced in active markup (original footer is commented out) |
| `menu.module` | `my-theme/modules/menu.module/` | Commented out in header partial |
| `social-follow.module` | `my-theme/modules/social-follow.module/` | Commented out in footer partial |
| `Hero.module` | `my-theme/modules/Hero.module/` | Not used on homepage |
| `card.module` | `my-theme/modules/card.module/` | Not used on homepage |
| `pricing-card.module` | `my-theme/modules/pricing-card.module/` | Not used on homepage |
| `Description with CTAs.module` | `my-theme/modules/Description with CTAs.module/` | Not used on homepage |
| `why choose module.module` | `my-theme/modules/why choose module.module/` | Not used on homepage |
| `reservations_list.module` | `my-theme/modules/reservations_list.module/` | Not used on homepage |
| `module-res-list.module` | `my-theme/modules/module-res-list.module/` | Not used on homepage |

---

## 5. Built-in HubSpot Modules

These are platform-provided modules referenced with the `@hubspot/` prefix. No local files exist for them — HubSpot renders them from its CDN.

| Module path | Used in | Purpose |
|-------------|---------|---------|
| `@hubspot/linked_image` | hero-banner, multi-row-content, multi-column-content, inline section | Renders a responsive image with an optional hyperlink |
| `@hubspot/rich_text` | hero-banner, multi-row-content, call-to-action, multi-column-content, inline section | WYSIWYG rich text block |
| `@hubspot/form` | hero-banner | Embeds a HubSpot form |

---

## 6. Section-by-Section Breakdown

---

### Section 1 — Hero Banner

**File path:** `my-theme/sections/hero-banner.html`  
**Template type:** `section`  
**Label:** Hero banner  
**Description (from frontmatter):** "Full size background image section separated in two columns. Left column has heading and text and right column has a form."  
**Screenshot:** `my-theme/images/section-previews/hero-banner.png`

**Purpose:** The primary above-the-fold section. Establishes the page's main heading (h1) and provides a lead-capture form.

**Layout description:**

- One `dnd_section` with a light background (`#f8fafc` default) and vertical middle alignment.
- Split into two 6-column halves (12-column grid):
  - **Left column (offset 0, width 6):** A single `@hubspot/linked_image` module displaying a placeholder image (max 605×451 px, lazy load disabled for above-the-fold priority). Image is configurable via `context.image`.
  - **Right column (offset 6, width 6):** A `dnd_column` containing two stacked rows:
    - **Row 1:** `@hubspot/rich_text` — default contains an `<h1>` headline and intro paragraph. Content is configurable via `context.content`.
    - **Row 2:** `@hubspot/form` — an empty HubSpot form embed (no default values; form must be selected in the editor).

**Referenced modules:**

| Module | Type |
|--------|------|
| `@hubspot/linked_image` | Built-in HubSpot |
| `@hubspot/rich_text` | Built-in HubSpot |
| `@hubspot/form` | Built-in HubSpot |

**Context variables accepted:** `background_color`, `image`, `image_alt`, `image_loading`, `image_height`, `image_width`, `content`

---

### Section 2 — Multi-row Content

**File path:** `my-theme/sections/multi-row-content.html`  
**Template type:** `section`  
**Label:** Multi-row content  
**Description (from frontmatter):** "Section separated in two columns. Left column has text and right column has an image."  
**Screenshot:** `my-theme/images/section-previews/multi-row-content.png`

**Purpose:** A two-column text + image section. Mirrors the layout of the inline section below it but with text on the left, providing visual rhythm through alternating column order.

**Layout description:**

- One `dnd_section` with no explicit background color (inherits white) and vertical middle alignment.
- Split into two 6-column halves:
  - **Left column (offset 0, width 6):** `@hubspot/rich_text` — default contains an `<h2>` and paragraph. Configurable via `context.content`.
  - **Right column (offset 6, width 6):** `@hubspot/linked_image` — same placeholder image as hero (max 605×451 px). Configurable via `context.image`.

**Referenced modules:**

| Module | Type |
|--------|------|
| `@hubspot/rich_text` | Built-in HubSpot |
| `@hubspot/linked_image` | Built-in HubSpot |

**Context variables accepted:** `content`, `image`, `image_alt`, `image_loading`, `image_height`, `image_width`

---

### Section 3 — Two-column Image Left (Inline)

**File path:** Defined inline in `my-theme/templates/home.html` (lines 28–53)  
**Template type:** Inline `dnd_section` (not an external section file)  
**Label:** (none — no comment label)

**Purpose:** A companion to Section 2, flipping the column order so the image is on the left and text on the right. Creates visual alternation with Section 2.

**Layout description:**

- One `dnd_section` with background `#f8fafc` and vertical middle alignment.
- Split into two 6-column halves:
  - **Left column (offset 0, width 6):** `@hubspot/linked_image` — same grayscale mountain placeholder image (max 605×451 px, lazy load). Image source is hard-coded via `get_asset_url("../images/grayscale-mountain.png")`.
  - **Right column (offset 6, width 6):** `@hubspot/rich_text` — default HTML is `<h2>Provide more details here.</h2><p>...</p>`. Hard-coded default, not using a context variable.

**Referenced modules:**

| Module | Type |
|--------|------|
| `@hubspot/linked_image` | Built-in HubSpot |
| `@hubspot/rich_text` | Built-in HubSpot |

**Note:** Because this section is inline (not a reusable section file), it cannot be reused on other templates via `include_dnd_partial`.

---

### Section 4 — Call to Action

**File path:** `my-theme/sections/call-to-action.html`  
**Template type:** `section`  
**Label:** Call to action  
**Description (from frontmatter):** "Full size background image section with middle centered heading, text, and button."  
**Screenshot:** `my-theme/images/section-previews/call-to-action.png`

**Purpose:** A high-impact CTA strip with a full-bleed background image, centered heading and body copy, and a theme-styled button linking to a configurable URL.

**Layout description:**

- One `dnd_section` with:
  - Full-bleed background image (center/cover, default: `my-theme/images/large-placeholder-image.png`). Configurable via `context.background_image`.
  - Max content width: 700 px default (configurable via `context.max_width`).
  - Generous padding: 140 px top / 160 px bottom (desktop); 80 px top / 80 px bottom (mobile).
  - Vertical middle alignment.
- Single centered column containing two stacked rows:
  - **Row 1** (bottom padding 40 px desktop, 0 mobile): `@hubspot/rich_text` — centered `<h2>` and paragraph. Configurable via `context.content`.
  - **Row 2:** Custom `button.module` — default text "Get started", horizontal alignment CENTER. Button text configurable via `context.button_text`.

**Referenced modules:**

| Module | Type |
|--------|------|
| `@hubspot/rich_text` | Built-in HubSpot |
| `button.module` (`../modules/button`) | Custom theme module |

**Context variables accepted:** `background_image`, `max_width`, `content`, `button_text`

---

### Section 5 — Multi-column Content

**File path:** `my-theme/sections/multi-column-content.html`  
**Template type:** `section`  
**Label:** Multi-column content  
**Description (from frontmatter):** "Full size background color section separated in three columns with an image and text in each."  
**Screenshot:** `my-theme/images/section-previews/multi-column-content.png`

**Purpose:** A three-up feature grid. Intended to highlight three distinct features, services, or selling points, each with an image and explanatory text.

**Layout description:**

- One `dnd_section` with background `#f8fafc` default (configurable via `context.background_color`) and vertical middle alignment.
- Three 4-column panels side by side (12-column grid):
  - **Column 1 (offset 0, width 4):**
    - Row 1: `@hubspot/linked_image` — default "Feature one" placeholder image (lazy load, max 605×451 px). Configurable via `context.column_one_image`.
    - Row 2: `@hubspot/rich_text` — default `<h3>Feature one</h3><p>...</p>`. Configurable via `context.column_one_content`.
  - **Column 2 (offset 4, width 4):**
    - Row 1: `@hubspot/linked_image` — default "Feature two" placeholder image. Configurable via `context.column_two_image`.
    - Row 2: `@hubspot/rich_text` — default `<h3>Feature two</h3><p>...</p>`. Configurable via `context.column_two_content`.
  - **Column 3 (offset 8, width 4):**
    - Row 1: `@hubspot/linked_image` — default "Feature three" placeholder image. Configurable via `context.column_three_image`.
    - Row 2: `@hubspot/rich_text` — default `<h3>Feature three</h3><p>...</p>`. Configurable via `context.column_three_content`.

**Referenced modules:**

| Module | Type |
|--------|------|
| `@hubspot/linked_image` | Built-in HubSpot |
| `@hubspot/rich_text` | Built-in HubSpot |

**Context variables accepted:** `background_color`, `column_one_image`, `column_one_image_alt`, `column_one_image_loading`, `column_one_image_height`, `column_one_image_width`, `column_one_content`, and equivalent for columns two and three.

---

## 7. CSS Dependencies

All CSS is loaded by the base layout (`my-theme/templates/layouts/base.html`). There is no template-specific CSS for the homepage.

### 7.1 Load order (as rendered in `<head>`)

1. `my-theme/css/main.css` — compiled entry point; loaded via `require_css`
2. `my-theme/css/theme-overrides.css` — theme-variable-driven overrides; loaded via `require_css`
3. `my-theme/css/custom-styles.css` — project-specific brand classes; loaded via `require_css`
4. HubSpot `standard_header_includes` — platform CSS (forms, menus, etc.)
5. `my-theme/modules/button.module/module.html` injects scoped button CSS inline via `require_css` at render time

---

### 7.2 `main.css` — sub-file dependency tree

`my-theme/css/main.css` uses HubL `include` directives to pull in the following files in this exact order:

| Layer | File | Purpose |
|-------|------|---------|
| Generic | `my-theme/css/generic/_reset.css` | Universal `box-sizing: border-box` reset |
| Generic | `my-theme/css/generic/_normalize.css` | normalize.css v8.0.1 — cross-browser baseline |
| Objects | `my-theme/css/objects/_layout.css` | 12-column flexbox grid (`.row-fluid .spanN`), responsive breakpoint at 768 px |
| Objects | `my-theme/css/objects/_containers-dnd.css` | `.content-wrapper` centering, `.dnd-section` row centering, column padding |
| Elements | `my-theme/css/elements/_typography.css` | Body line-height, paragraph/heading margins, blockquote, image alt, CJK word-break |
| Elements | `my-theme/css/elements/_buttons.css` | `.button`, `.hs-button` base styles (cursor, display, transition); disabled and `.no-button` variants |
| Elements | `my-theme/css/elements/_forms.css` | HubSpot form inputs, labels, help text, date picker, submit button |
| Elements | `my-theme/css/elements/_tables.css` | Table, `td`, `th` base styles |
| Components | `my-theme/css/components/_header.css` | Header container, logo, search bar, language switcher, mobile toggles, navigation skip link |
| Components | `my-theme/css/components/_default-modules.css` | HubSpot menu/flyout styles; `hs_cos_wrapper` image sizing |
| Utilities | `my-theme/css/utilities/_helper.css` | `.show-for-sr` (screen-reader-only visibility class) |

---

### 7.3 `theme-overrides.css` — detailed description

**File path:** `my-theme/css/theme-overrides.css`

This file imports `my-theme/css/tools/_macros.css` (a HubL macro file providing the `color()` helper — not a served CSS file). It then uses HubL variables sourced from `theme.*` settings to generate dynamic CSS covering:

| Section | What it controls |
|---------|-----------------|
| Containers | `max-width` of `.content-wrapper` and `.dnd-section > .row-fluid`; `dnd-section` padding |
| Typography | `html` font-size; `body`, `p`, `a`, `h1`–`h6` font family/color/size/transform — all driven by theme font settings |
| Buttons | `button`, `.button`, `.hs-button` background, border, radius, spacing, font; hover/active color variants |
| Forms | Form background, title styling, label/help text colors, field borders, placeholder colors, submit button |
| Tables | Header, body, footer background and font colors; cell spacing and borders |
| Header | `.header` background; `.menu__link` nav colors; dropdown colors, borders, backgrounds; mobile nav colors |
| Footer | `.footer` background; footer text color |
| Blog | Blog post padding; blog link colors; comment link colors |
| System pages | Search results heading style |
| Modules | Blog listing link styles; pagination; `.card__price` (pricing card); `.social-links__icon` (social follow) |

---

### 7.4 `custom-styles.css` — detailed description

**File path:** `my-theme/css/custom-styles.css`

Contains project-specific utility classes and brand overrides. These are static (no HubL variables):

| Class / rule | Purpose |
|---|---|
| `.primary-gradient` | Teal-to-blue linear gradient background |
| `.primary-gradient-cta` | Same gradient with a 0.3 s ease-in-out transition; reverses gradient on hover |
| `.secondary-midnight-blue` | Dark navy background (`#1C1C28`) |
| `.secondary-teal` | Teal background (`#00C6B2`) |
| `.snow-white` | Off-white background (`#FAFAFA`) |
| `.mint` | Mint green background (`#E0FBFC`) |
| `.neutral-gray` | Light gray background (`#F5F7FA`) |
| `.cta-white-primary` | White-filled button style (blue text, white border) with hover to light gray |
| `.cta-white-secondary` | Transparent/outlined button style (white border, white text) with hover to white fill |
| `h1` override | `line-height: 60px`; mobile (`max-width: 767px`): `font-size: 48px` |

---

### 7.5 `button.module` — inline CSS (injected via `require_css`)

**File path:** `my-theme/modules/button.module/module.html` (CSS is inline, not a separate file)

Scoped per module instance using `scope_css`. Styles:

- `.button-wrapper` — `text-align` set from `module.styles.alignment.alignment.horizontal_align`
- `.button` — background color (rgba), border, border-radius, font, spacing from module fields
- `.button:hover`, `.button:focus` — background color darkened by `color_variant(..., -80)`
- `.button:active` — background color lightened by `color_variant(..., 80)`

All values are conditional on whether the field has a value set; falls back to the global button styles from `theme-overrides.css` if module-level fields are empty.

---

## 8. JS Dependencies

### 8.1 Load order (as rendered before `</body>`)

1. `my-theme/js/main.js` — loaded via `require_js` in `base.html`
2. HubSpot `standard_footer_includes` — platform JavaScript (forms, tracking, etc.)

---

### 8.2 `main.js` — detailed description

**File path:** `my-theme/js/main.js`

A single vanilla JavaScript IIFE (immediately invoked function expression). No dependencies or frameworks.

**Functionality:**

| Function | Purpose |
|----------|---------|
| `domReady(callback)` | Fires callback when DOM is ready; handles both `DOMContentLoaded` and already-loaded states |
| `toggleNav()` | Shows/hides the mobile navigation panel (`.header__navigation`). Toggles `.hide` on all toggle elements and `.open` on the nav and nav toggle. Shows the close button. |
| `toggleLang()` | Same pattern for the language switcher panel (`.header__language-switcher`) |
| `toggleSearch()` | Same pattern for the search field panel (`.header__search`) |
| `closeAll()` | Removes all `.hide` and `.open` classes; hides the close button. Called by the close toggle. |
| `toggleDisabled()` | On the email subscription page: disables all subscription checkboxes when the global unsubscribe checkbox is checked |

**Elements targeted:**

- `.header__navigation` — mobile nav panel
- `.header__language-switcher` — language switcher panel
- `.header__search` — search panel
- `.header--toggle` (all) — toggle buttons
- `.header__navigation--toggle` — hamburger button
- `.header__language-switcher--toggle` — globe button
- `.header__search--toggle` — search icon button
- `.header__close--toggle` — close (X) button
- `input[name="globalunsub"]` — email unsubscribe checkbox

**Note:** This JS targets the original commented-out header markup. Since the header partial now uses the external `/smuves/modules/Header` module and the original HubSpot header markup is commented out, the mobile nav toggle functions in `main.js` will have no matching DOM elements to operate on. They fail silently (null checks prevent errors).

---

### 8.3 `button.module/module.js`

**File path:** `my-theme/modules/button.module/module.js`  
**Content:** Empty. The button module has no JavaScript behaviour.

---

## 9. Summary Table

### CSS files affecting the homepage

| File | Loaded by | Purpose |
|------|-----------|---------|
| `my-theme/css/main.css` | `base.html` via `require_css` | CSS entry point; includes all sub-files |
| `my-theme/css/generic/_reset.css` | `main.css` | Box-sizing reset |
| `my-theme/css/generic/_normalize.css` | `main.css` | Cross-browser normalization |
| `my-theme/css/objects/_layout.css` | `main.css` | 12-column flex grid |
| `my-theme/css/objects/_containers-dnd.css` | `main.css` | DND section containers and column padding |
| `my-theme/css/elements/_typography.css` | `main.css` | Base type styles |
| `my-theme/css/elements/_buttons.css` | `main.css` | Base button styles |
| `my-theme/css/elements/_forms.css` | `main.css` | Base form styles |
| `my-theme/css/elements/_tables.css` | `main.css` | Base table styles |
| `my-theme/css/components/_header.css` | `main.css` | Header layout, logo, search, mobile nav |
| `my-theme/css/components/_default-modules.css` | `main.css` | Menu flyout and image styles |
| `my-theme/css/utilities/_helper.css` | `main.css` | Screen-reader utility class |
| `my-theme/css/theme-overrides.css` | `base.html` via `require_css` | Theme-variable-driven design tokens |
| `my-theme/css/custom-styles.css` | `base.html` via `require_css` | Brand utility classes |
| `my-theme/css/tools/_macros.css` | `theme-overrides.css` via `import` | HubL color macro (not a served CSS file) |
| `button.module` inline CSS | Injected by `module.html` at render time | Scoped button instance styles |

### JS files affecting the homepage

| File | Loaded by | Purpose |
|------|-----------|---------|
| `my-theme/js/main.js` | `base.html` via `require_js` | Mobile header toggle logic |
| `button.module/module.js` | N/A (empty) | No behaviour |
| HubSpot `standard_footer_includes` | `base.html` | Platform JS (forms, analytics, etc.) |
| HubSpot `standard_header_includes` | `base.html` | Platform meta/CSS injections |

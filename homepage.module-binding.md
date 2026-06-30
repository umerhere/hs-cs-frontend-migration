# homepage.module-binding.md
Module-to-DOM Mapping for `my-theme/templates/home.html`  
**Purpose:** Explicit bridge between each logical content module and the exact DOM nodes it produces. Use this to prevent React from "redesigning" layout — every React component must produce the DOM path shown here.

---

## Page Skeleton (module → DOM path reference)

```
<body class="body-wrapper">
  └── <header class="header">                          → Header module
        └── <div class="header-main">
              └── <div class="page-center">
                    └── <div class="header-holder">
                          ├── <div class="logo">        → Header: logo
                          ├── <div class="menu-area">   → Header: nav links
                          ├── <div class="cta-area">    → Header: CTA button
                          ├── <div class="mobile-toggle" id="mobileToggle">
                          └── <div class="mobile-menu" id="mobileMenu">
                                └── <div class="mobile-menu-inner">
                                      ├── <div class="menu-clone">
                                      └── <div class="cta-clone">
  └── <main id="main-content" class="body-container-wrapper">
        └── <div class="body-container body-container--home">
              ├── Section 1 — Hero Banner
              ├── Section 2 — Multi-Row Content
              ├── Section 3 — Two-Column Image Left
              ├── Section 4 — Call to Action
              └── Section 5 — Multi-Column Content
  └── <footer class="footer">                          → Footer module
        └── <div class="footer-main">
              └── <div class="page-center">
                    ├── <div class="footer-top">
                    │     ├── <div class="footer-col info-area">
                    │     ├── <div class="footer-col">
                    │     ├── <div class="footer-col">
                    │     └── <div class="footer-col">
                    └── <div class="footer-bottom">
```

---

## Module Bindings

---

### HEADER — `my-theme/modules/Header.module/`

| Sub-element | DOM path | CSS class / id | React prop |
|-------------|----------|----------------|-----------|
| Module root | `header.header > div.header-main` | `.header-main` | `<Header>` root |
| Inner container | `.header-main > div.page-center` | `.page-center` | layout wrapper |
| Flex row | `.page-center > div.header-holder` | `.header-holder` | flex row |
| **Logo** | `.header-holder > div.logo > a > img` | `.logo` | `headerData.logo.url` |
| **Nav links (desktop)** | `.header-holder > div.menu-area > ul > li > a` | `.menu-area` | `headerData.navigation_links.link[]` |
| **CTA button (desktop)** | `.header-holder > div.cta-area > a.primary-gradient-cta` | `.cta-area` | `module.cta_text` / `module.cta_link` |
| **Hamburger toggle** | `.header-holder > div.mobile-toggle#mobileToggle > span × 3` | `#mobileToggle` | `isOpen` state |
| **Mobile menu panel** | `.header-holder > div.mobile-menu#mobileMenu` | `#mobileMenu` | slides on toggle |
| Mobile menu inner | `#mobileMenu > div.mobile-menu-inner` | `.mobile-menu-inner` | flex column |
| Mobile nav (clone) | `.mobile-menu-inner > div.menu-clone > ul > li > a` | `.menu-clone` | same data as `.menu-area` |
| Mobile CTA (clone) | `.mobile-menu-inner > div.cta-clone > a.primary-gradient-cta` | `.cta-clone` | same data as `.cta-area` |

**Active link indicator:** `a` inside `.menu-area` whose href matches `location.pathname` receives active styling.

---

### SECTION 1 — Hero Banner (`hero-banner.html`)

**DND path:** `div.body-container > div.dnd-section[bg=#f8fafc] > div.row-fluid`

| Module | DOM path | DOM classes |
|--------|----------|-------------|
| **Section wrapper** | `div.dnd-section` | `.dnd-section` → `style="background-color:#f8fafc"` |
| **Grid row** | `div.dnd-section > div.row-fluid` | `.row-fluid` |
| **Left column** | `.row-fluid > div.dnd-column.span6` (first child) | `.dnd-column .span6` |
| `@hubspot/linked_image` (hero image) | `.span6:nth-child(1) > div.dnd-row > div.hs_cos_wrapper_type_linked_image > img` | `.hs_cos_wrapper` |
| **Right column** | `.row-fluid > div.dnd-column.span6` (second child) | `.dnd-column .span6` |
| `@hubspot/rich_text` (h1 + p) | `.span6:nth-child(2) > div.dnd-row:nth-child(1) > div.hs_cos_wrapper_type_rich_text > h1, p` | `.hs_cos_wrapper` |
| `@hubspot/form` | `.span6:nth-child(2) > div.dnd-row:nth-child(2) > div.hs_cos_wrapper_type_form` | `.hs_cos_wrapper` |

**React component:** `<HeroBanner>`  
**Content props:** `background_color`, `image`, `image_alt`, `image_loading`, `content` (h1 + p HTML)

---

### SECTION 2 — Multi-Row Content (`multi-row-content.html`)

**DND path:** `div.body-container > div.dnd-section[no bg] > div.row-fluid`

| Module | DOM path | DOM classes |
|--------|----------|-------------|
| **Section wrapper** | `div.dnd-section` | `.dnd-section` (no background-color attr) |
| **Grid row** | `div.row-fluid` | `.row-fluid` |
| **Left column** | `.row-fluid > div.dnd-column.span6` (first child) | `.dnd-column .span6` |
| `@hubspot/rich_text` (h2 + p) | `.span6:nth-child(1) > div.dnd-row > div.hs_cos_wrapper_type_rich_text > h2, p` | `.hs_cos_wrapper` |
| **Right column** | `.row-fluid > div.dnd-column.span6` (second child) | `.dnd-column .span6` |
| `@hubspot/linked_image` | `.span6:nth-child(2) > div.dnd-row > div.hs_cos_wrapper_type_linked_image > img` | `.hs_cos_wrapper` |

**React component:** `<MultiRowContent>`  
**Content props:** `content` (h2 + p HTML), `image`, `image_alt`

---

### SECTION 3 — Two-Column Image Left (inline in `home.html`)

**DND path:** `div.body-container > div.dnd-section[bg=#f8fafc] > div.row-fluid`

| Module | DOM path | DOM classes |
|--------|----------|-------------|
| **Section wrapper** | `div.dnd-section` | `.dnd-section` → `style="background-color:#f8fafc"` |
| **Grid row** | `div.row-fluid` | `.row-fluid` |
| **Left column** | `.row-fluid > div.dnd-column.span6` (first child) | `.dnd-column .span6` |
| `@hubspot/linked_image` | `.span6:nth-child(1) > div.dnd-row > div.hs_cos_wrapper_type_linked_image > img` | `.hs_cos_wrapper` |
| **Right column** | `.row-fluid > div.dnd-column.span6` (second child) | `.dnd-column .span6` |
| `@hubspot/rich_text` (h2 + p) | `.span6:nth-child(2) > div.dnd-row > div.hs_cos_wrapper_type_rich_text > h2, p` | `.hs_cos_wrapper` |

**React component:** `<TwoColumnImageLeft>`  
**Content props:** `image` (hardcoded: `grayscale-mountain.png`), `image_alt`, `content` (h2 + p HTML)  
**Note:** This section is inline — not a reusable partial. Image src is hardcoded, not a field.

---

### SECTION 4 — Call to Action (`call-to-action.html`)

**DND path:** `div.body-container > div.dnd-section[bg-image] > div.row-fluid`

| Module | DOM path | DOM classes |
|--------|----------|-------------|
| **Section wrapper** | `div.dnd-section` | `.dnd-section` → `style="background-image:url(...);background-size:cover;padding:140px 20px 160px"` |
| **Grid row** | `div.row-fluid` | `.row-fluid` → `style="max-width:700px"` |
| **Single column** | `.row-fluid > div.dnd-column.span12` | `.dnd-column .span12` |
| `@hubspot/rich_text` (h2 + p centered) | `.span12 > div.dnd-row:nth-child(1) > div.hs_cos_wrapper_type_rich_text > div[text-align:center] > h2, p` | `.hs_cos_wrapper` |
| `button.module` wrapper | `.span12 > div.dnd-row:nth-child(2) > div.hs_cos_wrapper_type_module > div.button-wrapper` | `.button-wrapper` |
| `button.module` anchor | `div.button-wrapper > a.button` | `.button` |

**React component:** `<CallToAction>`  
**Content props:** `background_image`, `max_width` (700px), `content` (h2 + p HTML), `button_text` ("Get started"), `button_href`

---

### SECTION 5 — Multi-Column Content (`multi-column-content.html`)

**DND path:** `div.body-container > div.dnd-section[bg=#f8fafc] > div.row-fluid`

| Module | DOM path | DOM classes |
|--------|----------|-------------|
| **Section wrapper** | `div.dnd-section` | `.dnd-section` → `style="background-color:#f8fafc"` |
| **Grid row** | `div.row-fluid` | `.row-fluid` |
| **Column 1** | `.row-fluid > div.dnd-column.span4` (1st) | `.dnd-column .span4` |
| `@hubspot/linked_image` col 1 | `.span4:nth-child(1) > div.dnd-row:nth-child(1) > … > img` | `.hs_cos_wrapper` |
| `@hubspot/rich_text` col 1 | `.span4:nth-child(1) > div.dnd-row:nth-child(2) > … > h3, p` | `.hs_cos_wrapper` |
| **Column 2** | `.row-fluid > div.dnd-column.span4` (2nd) | `.dnd-column .span4` |
| `@hubspot/linked_image` col 2 | `.span4:nth-child(2) > div.dnd-row:nth-child(1) > … > img` | `.hs_cos_wrapper` |
| `@hubspot/rich_text` col 2 | `.span4:nth-child(2) > div.dnd-row:nth-child(2) > … > h3, p` | `.hs_cos_wrapper` |
| **Column 3** | `.row-fluid > div.dnd-column.span4` (3rd) | `.dnd-column .span4` |
| `@hubspot/linked_image` col 3 | `.span4:nth-child(3) > div.dnd-row:nth-child(1) > … > img` | `.hs_cos_wrapper` |
| `@hubspot/rich_text` col 3 | `.span4:nth-child(3) > div.dnd-row:nth-child(2) > … > h3, p` | `.hs_cos_wrapper` |

**React component:** `<MultiColumnContent>`  
**Content props:** `background_color`, `column_one_image`, `column_one_content`, `column_two_image`, `column_two_content`, `column_three_image`, `column_three_content`

---

### FOOTER — `my-theme/modules/Footer.module/`

| Sub-element | DOM path | CSS class | React prop |
|-------------|----------|-----------|-----------|
| Module root | `footer.footer > div.footer-main` | `.footer-main` | `<Footer>` root |
| Inner container | `.footer-main > div.page-center` | `.page-center` | layout wrapper |
| Top flex row | `.page-center > div.footer-top` | `.footer-top` | |
| **Info area** | `.footer-top > div.footer-col.info-area` | `.footer-col .info-area` | col 1 |
| Footer logo | `.info-area > img` | — | `footer_top.info_area.logo` |
| Footer description | `.info-area > p` | — | `footer_top.info_area.description` |
| **Link column 1** | `.footer-top > div.footer-col:nth-child(2)` | `.footer-col` | `footer_links_column[0]` |
| Column heading | `.footer-col:nth-child(2) > h4` | — | `heading` field |
| Column links | `.footer-col:nth-child(2) > ul > li > a` | — | `footer_menu` (menu `193127183697`) |
| **Link column 2** | `.footer-top > div.footer-col:nth-child(3)` | `.footer-col` | `footer_links_column[1]` |
| **Link column 3** | `.footer-top > div.footer-col:nth-child(4)` | `.footer-col` | `footer_links_column[2]` |
| **Copyright** | `.page-center > div.footer-bottom > p` | `.footer-bottom` | `copyright` richtext field |

---

## React Component → DOM Node Map (Concise Reference)

| React Component | Root DOM node | Key child nodes |
|----------------|---------------|----------------|
| `<Header>` | `header.header > div.header-main > div.page-center > div.header-holder` | `.logo`, `.menu-area`, `.cta-area`, `#mobileToggle`, `#mobileMenu` |
| `<HeroBanner>` | `div.dnd-section[bg:#f8fafc] > div.row-fluid` | `.span6` (img), `.span6` (h1 + form) |
| `<MultiRowContent>` | `div.dnd-section > div.row-fluid` | `.span6` (h2+p), `.span6` (img) |
| `<TwoColumnImageLeft>` | `div.dnd-section[bg:#f8fafc] > div.row-fluid` | `.span6` (img), `.span6` (h2+p) |
| `<CallToAction>` | `div.dnd-section[bg-image] > div.row-fluid[max-width:700px] > div.span12` | `.dnd-row` (text), `.dnd-row > .button-wrapper > a.button` |
| `<MultiColumnContent>` | `div.dnd-section[bg:#f8fafc] > div.row-fluid` | 3× `.span4` (img + h3+p) |
| `<Footer>` | `footer.footer > div.footer-main > div.page-center` | `.footer-top` (4 cols), `.footer-bottom` (copyright) |

---

## DOM Nesting Rules (Do Not Break)

1. Every `dnd-section` must contain exactly one `row-fluid` as its direct child.
2. Every `row-fluid` must contain `dnd-column spanN` children — never naked content.
3. Every `dnd-column` must contain one or more `dnd-row` children — never naked content.
4. Module content lives inside `dnd-row`, never directly in `dnd-column`.
5. `.button-wrapper` must always be the parent of `.button` — never render `a.button` standalone.
6. `.header-holder` must always be inside `.page-center` which must always be inside `.header-main`.
7. `.footer-top` must always be a sibling of `.footer-bottom` inside `.page-center`.

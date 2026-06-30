# Header & Footer Analysis

## Important Clarification: Two Parallel Systems

This codebase contains **two separate systems** that each have their own header and footer. They do not share code or data.

| System | Context | Header source | Footer source |
|--------|---------|---------------|---------------|
| **HubSpot CMS** | `my-theme/` — HubSpot Design Manager theme | `my-theme/modules/Header.module/` | `my-theme/modules/Footer.module/` |
| **React app** | `src/` — Contentstack-powered React SPA | `src/components/header/Header.tsx` | `src/components/footer/Footer.tsx` |

The `homepage-analysis.md` documents the HubSpot CMS homepage (`my-theme/templates/home.html`). The module paths `/smuves/modules/Header` and `/smuves/modules/Footer` are **absolute HubSpot Design Manager paths** pointing to the modules in `my-theme/modules/Header.module/` and `my-theme/modules/Footer.module/` respectively.

Both systems are analysed below.

---

## System 1 — HubSpot CMS Header & Footer

### Where the path `/smuves/modules/Header` resolves

The partial `my-theme/templates/partials/header.html` contains:

```
{% module "module_17530987383087" path="/smuves/modules/Header", label="Header" %}
```

The module at that HubSpot Design Manager path is **`my-theme/modules/Header.module/`** (module_id `193118438771`). All four source files for this module exist in the repo.

Similarly, `/smuves/modules/Footer` resolves to **`my-theme/modules/Footer.module/`** (module_id `193121814403`).

---

## 1. Rendered Header — `my-theme/modules/Header.module/`

### 1.1 File inventory

| File | Content |
|------|---------|
| `module.html` | HubL template — markup and logic |
| `fields.json` | Field definitions and default values |
| `module.css` | Module-scoped stylesheet |
| `module.js` | jQuery behaviour script |
| `meta.json` | HubSpot module metadata |

### 1.2 HTML structure

```
div.header-main
  div.page-center
    div.header-holder
      div.logo               ← Logo (HubSpot {% logo %} tag)
      div.menu-area          ← Desktop nav ({% menu %})
      div.cta-area           ← CTA button (conditional on module.cta_text)
      div.mobile-toggle      ← Hamburger icon (3× span)
      div.mobile-menu        ← Off-canvas mobile panel
        div.mobile-menu-inner
          div.menu-clone     ← Duplicate of desktop menu
          div.cta-clone      ← Duplicate of CTA button
```

### 1.3 Logo

| Property | Value |
|----------|-------|
| Field type | `logo` (HubSpot built-in) |
| Default image URL | `https://2661279.fs1.hubspotusercontent-na1.net/hubfs/2661279/Smuves/logo.png` |
| Alt text | `logo` |
| Width | 150 px |
| Height | 25 px |
| `override_inherited_src` | `true` — ignores any brand-kit logo |
| `suppress_company_name` | `true` — text company name is hidden |
| Field locked | Yes — editors cannot change it in the HubSpot editor |

### 1.4 Navigation links

| Property | Value |
|----------|-------|
| Rendered via | HubSpot `{% menu id="{{ module.menu }}" %}` tag |
| Default HubSpot menu ID | `193111680407` |
| Field locked | Yes |
| Link text/URLs | Stored in HubSpot portal menu `193111680407` — **not defined in this repository** |
| Desktop display | Horizontal list (`div.menu-area ul li`), 15 px horizontal margin per item |
| Mobile display | Vertical list inside `.mobile-menu .menu-clone`, each item 20 px bottom margin |
| Link color | `#111827` (near-black), 16 px, weight 400, no underline |

The menu is duplicated: once inside `div.menu-area` (desktop only, hidden via CSS at ≤ 991 px) and once inside `div.mobile-menu .menu-clone` (shown when hamburger is toggled).

### 1.5 CTA button

| Property | Value |
|----------|-------|
| Condition | Only rendered if `module.cta_text` is non-empty |
| Default text | `Login To Our Website` |
| Default link href | Empty string (must be set in HubSpot editor) |
| Link target | `_blank` if `open_in_new_tab` is true (default: false) |
| CSS class | `primary-gradient-cta` |
| Visual style | Teal-to-blue linear gradient (`rgba(0,198,178,1)` → `rgba(0,131,255,1)`), reverses on hover; pill shape (border-radius 50 px); white text, 16 px, weight 700; 10 px/20 px padding |
| Field locked | Yes |
| Supported link types | EXTERNAL, CONTENT, FILE, EMAIL_ADDRESS, BLOG, CALL_TO_ACTION, PHONE_NUMBER, WHATSAPP_NUMBER, PAYMENT |
| Duplicate | Cloned inside `.mobile-menu .cta-clone` for mobile display |

The `primary-gradient-cta` class is defined in `my-theme/css/custom-styles.css` (not in the module itself).

### 1.6 CSS — `module.css`

| Rule | Effect |
|------|--------|
| `.header-main` | Fixed position (`position: fixed; top: 0; left: 0; right: 0`); `z-index: 99`; semi-transparent white background (`hsla(0,0%,100%,.8)`); 30 px top/bottom padding; light gray bottom border (`#e5e5e5`); drop shadow; `backdrop-filter: blur(3px)` (glassmorphism) |
| `header` | `background: none !important` — strips any theme-level background set on the `<header>` wrapper element |
| `.header-holder` | Flexbox row, `justify-content: space-between`, `align-items: center` |
| `.menu-area ul li` | 15 px horizontal margin |
| `.menu-area ul li a` | `#111827`, 16 px, weight 400, no underline |
| `.header-main .cta-area a` | White text (`#fff`), 10 px/20 px padding, border-radius 50 px, 16 px, weight 700, 0.3 s ease-in-out transition |
| `.mobile-toggle` | `display: none` by default; 3 horizontal `span` bars (3 px height, black) |
| `.mobile-menu` | `display: none` by default; `position: fixed; top: 90px`; full-width; white background; `z-index: 999`; box-shadow |
| **Breakpoint ≤ 991 px** | `.menu-area` and `.header-main .cta-area` hidden; `.mobile-toggle` switches to `display: flex` |

### 1.7 JavaScript — `module.js`

Uses **jQuery** (`$`). Two blocks:

**On DOM ready (`$(document).ready`):**
1. Reads the rendered height of `.header-main` and applies it as `margin-top` on `body` — compensates for the fixed header.
2. Binds a `click` handler to `#mobileToggle`:
   - Calls `$('#mobileMenu').slideToggle()` — shows/hides the mobile panel with a slide animation.
   - Toggles the `.active` class on the toggle button.

**On window resize (`$(window).on('resize')`):**
1. Recalculates header height and updates `body.margin-top`.
2. If viewport width > 991 px, forces `#mobileMenu` to `hide()` and removes `.active` from `#mobileToggle` (prevents a stuck-open mobile menu on desktop resize).

### 1.8 HubSpot data dependencies

| Dependency | Type | Value | In repo? |
|------------|------|-------|----------|
| HubSpot menu `193111680407` | HubSpot portal menu | Navigation links (text + URLs) | No — lives in HubSpot portal |
| Logo field default | HubFS file | `https://2661279.fs1.hubspotusercontent-na1.net/hubfs/2661279/Smuves/logo.png` | No — lives in HubSpot File Manager |
| `primary-gradient-cta` CSS class | Theme CSS | Defined in `my-theme/css/custom-styles.css` | Yes |
| `page-center` CSS class | Theme CSS | Defined in `my-theme/css/theme-overrides.css` | Yes |
| jQuery | External library | Required by `module.js` | Injected by HubSpot platform via `standard_footer_includes` |

---

## 2. Rendered Footer — `my-theme/modules/Footer.module/`

### 2.1 File inventory

| File | Content |
|------|---------|
| `module.html` | HubL template |
| `fields.json` | Field definitions and defaults |
| `module.css` | Module-scoped stylesheet |
| `module.js` | Empty |
| `meta.json` | HubSpot module metadata |

### 2.2 HTML structure

```
div.footer-main
  div.page-center
    div.footer-top
      div.footer-col.info-area      ← Logo + description (column 1)
      div.footer-col                ← Link column (repeated 1–3×)
        h4                          ← Column heading
        {% menu %}                  ← Menu links
    div.footer-bottom               ← Copyright text
```

### 2.3 Logo (footer info area)

| Property | Value |
|----------|-------|
| Field path | `footer_top.info_area.logo` |
| Default image URL | `https://2661279.fs1.hubspotusercontent-na1.net/hubfs/2661279/Smuves/logo.png` |
| Alt text | `logo` |
| Width | 150 px |
| Height | 25 px |
| `override_inherited_src` | `true` |
| `suppress_company_name` | `true` |
| Field locked | `info_area` group is unlocked; logo sub-field is unlocked |

The footer logo uses the same Smuves logo PNG as the header.

### 2.4 Footer description

| Property | Value |
|----------|-------|
| Field path | `footer_top.info_area.description` |
| Field type | `richtext` |
| Default value | `<p>The safest way to backup and manage your HubSpot content.</p>` |
| Rendered position | Immediately below the logo in the info area column |

### 2.5 Footer link columns

The footer renders **1 to 3 link columns** (default: 3) as a repeatable group field (`footer_links_column`, `occurrence.default = 3`).

Each column has:

| Sub-field | Field type | Default value |
|-----------|-----------|---------------|
| `heading` | `text` | `"Product"` |
| `footer_menu` | `menu` | HubSpot menu ID `193127183697` |

In the default configuration, all three columns share the same heading ("Product") and the same menu ID (`193127183697`). The actual link labels and URLs for this menu are **stored in the HubSpot portal** and are not in this repository.

### 2.6 Social links

There are **no social links** in the active footer module. The original HubSpot footer (`social-follow.module`) is entirely commented out in `footer.html`. The Footer.module does not include any social link fields or markup.

### 2.7 Copyright

| Property | Value |
|----------|-------|
| Field name | `copyright` |
| Field type | `richtext` |
| Field locked | Yes |
| Default value | `<p>© {{ year }} Smuves. All rights reserved.</p>` |
| Rendered position | Inside `div.footer-bottom`, centered, below the link columns |
| `{{ year }}` | HubSpot platform variable — renders the current 4-digit year at request time |

### 2.8 CSS — `module.css`

| Rule | Effect |
|------|--------|
| `.footer-main` | Light gray background (`#f9fafb`), `border-top: #e5e5e5 solid 1px`, `padding: 1.6rem 0` |
| `.footer-top` | Flexbox row, `gap: 1.6rem` |
| `.footer-top .footer-col` | `max-width: 25%; width: 100%` |
| `.footer-top .info-area img` | `max-width: 40%`, `width: 100% !important`, `margin-bottom: 10px` |
| `.footer-top .info-area p` | `font-size: 14px; margin: 0` |
| `.footer-top .footer-col h4` | `font-size: 16px; font-weight: 600; margin-bottom: 8px` |
| `.footer-top .footer-col ul li` | `display: block; width: 100%` |
| `.footer-top .footer-col ul li:not(:last-child)` | `margin-bottom: 4px` |
| `.footer-top .footer-col ul li a` | `color: #111827`, 14 px, no underline, 0.3 s ease-in-out hover |
| `.footer-top .footer-col ul li a:hover` | `color: #000` |
| `.footer-bottom` | `margin-top: 1.6rem`, `padding-top: 1.6rem`, centered text, `border-top: #e5e5e5 solid 1px` |
| `.footer-bottom p` | `color: #111827; font-size: 14px; margin: 0` |
| **Breakpoint ≤ 991 px** | Info area image max-width increases to 60% |
| **Breakpoint ≤ 767 px** | `.footer-top` wraps; each column goes to `max-width: 47%`; info image back to 40% |
| **Breakpoint ≤ 575 px** | Each column goes full-width (`max-width: 100%`), centered text; info image fixed at 140 px |

### 2.9 JavaScript — `module.js`

Empty. The footer module has no JavaScript.

### 2.10 HubSpot data dependencies

| Dependency | Type | Value | In repo? |
|------------|------|-------|----------|
| HubSpot menu `193127183697` | HubSpot portal menu | Footer link columns (text + URLs) | No — lives in HubSpot portal |
| Logo field default | HubFS file | `https://2661279.fs1.hubspotusercontent-na1.net/hubfs/2661279/Smuves/logo.png` | No — lives in HubSpot File Manager |
| `{{ year }}` | HubSpot platform variable | Current 4-digit year | N/A — platform-provided |
| `page-center` CSS class | Theme CSS | Defined in `my-theme/css/theme-overrides.css` | Yes |

---

## System 2 — React App Header & Footer

These components are entirely separate from the HubSpot CMS theme and are rendered by the React SPA (`src/routes/index.tsx`).

### Entry point

```
src/routes/index.tsx
  <Header />   →  src/components/header/Header.tsx
  <Footer />   →  src/components/footer/Footer.tsx
```

Both components read from the Redux store (`state.main.headerData` / `state.main.footerData`), which is populated on app load by `fetchInitialData()` in `src/api/index.ts`.

---

### React Header — `src/components/header/Header.tsx`

**Data source:** Contentstack CMS content type `"header"` (constant `CONTENT_TYPES.HEADER`)

**Data fetch:** `fetchHeaderData()` → `getEntry("header")` → Contentstack SDK → dispatches `setHeaderData(data[0][0])`

**Redux state shape (`THeaderData`):**

| Field | Type | Description |
|-------|------|-------------|
| `website_title` | `string` | Page/site title |
| `logo.url` | `string` | Logo image URL |
| `navigation_links.link[]` | `{ href: string; title: string }[]` | Array of nav link objects |

**Rendered elements:**

| Element | Driven by |
|---------|-----------|
| Logo `<img>` | `headerData.logo.url` |
| Navigation links | `headerData.navigation_links.link[]` — mapped to `<Link>` components |
| Active link highlight | `location.pathname === link.href` — adds `.active` class |
| Mobile toggle | Local `isOpen` state — toggles `.open` class on `div.header` and `.active` on `<nav>` |

**Navigation links content:** Defined in Contentstack CMS under the `"header"` content type entry. Not stored in this repository — requires a live Contentstack stack with the correct API key, delivery token, and environment variables (`VITE_CONTENTSTACK_API_KEY`, `VITE_CONTENTSTACK_DELIVERY_TOKEN`, `VITE_CONTENTSTACK_ENVIRONMENT`, `VITE_CONTENTSTACK_REGION`).

**No CTA button:** The React Header component does not render a CTA button. Only logo + nav links.

---

### React Footer — `src/components/footer/Footer.tsx`

**Data source:** Contentstack CMS content type `"footer"` (constant `CONTENT_TYPES.FOOTER`)

**Data fetch:** `fetchFooterData()` → `getEntry("footer")` → Contentstack SDK → dispatches `setFooterData(data[0][0])`

**Redux state shape (`TFooterData`):**

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | Entry title |
| `navigation_links.title` | `string` | Heading above the nav link list |
| `navigation_links.link[]` | `TLink[]` | Footer navigation links |
| `information_section.logo.url` | `string` | Footer logo image URL |
| `information_section.descrption` | `string` | Footer description text (note: field name is a typo — `descrption`) |
| `information_section.timings` | `string` | Operating hours |
| `information_section.holiday` | `string` | Holiday hours |
| `copyright` | `string` | Copyright line |

**Rendered elements (conditional):**

| Element | Condition | Driven by |
|---------|-----------|-----------|
| Navigation heading `<h1>` | `navigation_links` truthy | `navigation_links.title` |
| Footer nav links | `navigation_links` truthy | `navigation_links.link[]` — mapped to `<Link>` components |
| Footer logo `<img>` | `information_section` truthy | `information_section.logo.url` |
| Description `<p>` | `information_section` truthy | `information_section.descrption` |
| Hours heading `<h3>` | `information_section` truthy | Hard-coded text "Hours" |
| Timings `<p>` | `information_section` truthy | `information_section.timings` |
| Holiday `<p>` | `information_section` truthy | `information_section.holiday` |
| Copyright `<h2>` | Always | `copyright` |

**Footer columns:** The React footer renders as a **single-column** layout (one `div.footer-link` + one `div.footer-info`). It does not have a multi-column structure like the HubSpot Footer module.

**Social links:** No social links in the React footer component.

**Contentstack dependencies:**

| Variable | Purpose |
|----------|---------|
| `VITE_CONTENTSTACK_API_KEY` | Identifies the Contentstack stack |
| `VITE_CONTENTSTACK_DELIVERY_TOKEN` | Read-only delivery token |
| `VITE_CONTENTSTACK_ENVIRONMENT` | Publishing environment (e.g. `production`) |
| `VITE_CONTENTSTACK_REGION` | Data center region (`US`, `EU`, `AZURE_NA`, `AZURE_EU`, `GCP_NA`) |

All four are read from `.env` via `import.meta.env` in `src/sdk/utils.ts`. They are not committed to the repository.

---

## 3. Summary: What Is Actually Rendered

### On the HubSpot CMS homepage (`my-theme/templates/home.html`)

| Component | Source file | Data origin |
|-----------|-------------|-------------|
| Header | `my-theme/modules/Header.module/module.html` | Logo: HubFS CDN. Nav: HubSpot portal menu `193111680407`. CTA: editable in HubSpot portal. |
| Footer | `my-theme/modules/Footer.module/module.html` | Logo: HubFS CDN. Link columns: HubSpot portal menu `193127183697`. Copyright: HubL `{{ year }}` + static text. |

### On the React SPA (`src/routes/index.tsx`)

| Component | Source file | Data origin |
|-----------|-------------|-------------|
| Header | `src/components/header/Header.tsx` | Contentstack CMS — content type `"header"` |
| Footer | `src/components/footer/Footer.tsx` | Contentstack CMS — content type `"footer"` |

### Key differences

| Feature | HubSpot Header module | React Header component |
|---------|----------------------|----------------------|
| Logo | Smuves logo PNG (HubFS), 150×25 px | `logo.url` from Contentstack |
| Navigation | HubSpot menu (portal ID `193111680407`) | `navigation_links.link[]` from Contentstack |
| CTA button | Yes — "Login To Our Website", gradient pill | No |
| Mobile nav | jQuery slide toggle at ≤ 991 px | React state toggle (`isOpen`) |
| Active link | HubSpot platform (automatic) | `location.pathname === link.href` |

| Feature | HubSpot Footer module | React Footer component |
|---------|----------------------|----------------------|
| Logo | Smuves logo PNG (HubFS), 150×25 px | `information_section.logo.url` from Contentstack |
| Description | "The safest way to backup and manage your HubSpot content." | `information_section.descrption` from Contentstack |
| Columns | 1 info col + up to 3 link cols (HubSpot menus) | 1 link group + 1 info group |
| Social links | None (original `social-follow` is commented out) | None |
| Copyright | `© {{ year }} Smuves. All rights reserved.` (HubL year) | `copyright` field from Contentstack |
| Operating hours | Not present | `timings` and `holiday` fields from Contentstack |
| JavaScript | None | React state — no separate JS file |

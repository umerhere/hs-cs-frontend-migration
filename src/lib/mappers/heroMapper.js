/**
 * mapHeroFromCS(gf_hero_v1_module)
 *
 * Translates a Contentstack `gf_hero_v1_module` global-field object into props
 * for the <HeroV1> React component.
 *
 * Actual CS field shape (from export):
 * {
 *   tag_label        text          → tagLabel
 *   heading          text          → heading (first line)
 *   heading_second_line text       → headingSpan (second line, rendered in <span>)
 *   description      richtext HTML → paragraphs: [description]
 *   cta_item_group   group (single object OR array)
 *     cta_text       text
 *     cta_style      text  ("black_arrow" | "green-cta" | etc.)
 *     cta_popup      boolean
 *   listing          group (single object OR array)
 *     text_field     text
 *   style
 *     section_bg           text
 *     desktop_spacings     text (JSON string)
 *     mobile_spacings      text (JSON string)
 * }
 */

const SPACING_DEFAULTS = {
  paddingTop: 190,
  paddingBottom: 120,
  mobilePaddingTop: 140,
  mobilePaddingBottom: 90,
}

/**
 * Parses a CS text field that holds a HubSpot spacing JSON string.
 * Handles: { "padding": { "top": { "value": 190, "units": "px" }, "bottom": {...} } }
 * and simplified: { "top": 190, "bottom": 120 }
 */
function parseSpacing(raw) {
  if (!raw) return null
  try {
    const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw
    if (parsed?.padding) {
      return {
        top: Number(parsed.padding.top?.value ?? 0),
        bottom: Number(parsed.padding.bottom?.value ?? 0),
      }
    }
    return { top: Number(parsed.top ?? 0), bottom: Number(parsed.bottom ?? 0) }
  } catch {
    return null
  }
}

/**
 * Normalises a CS group field that could be a single object or an array.
 * Always returns an array (empty if input is null/undefined/empty).
 */
function toArray(val) {
  if (!val) return []
  return Array.isArray(val) ? val : [val]
}

/**
 * @param {object|null} cs  – the `gf_hero_v1_module` object from a CS entry
 * @returns {object|null}   – props for <HeroV1>, or null if cs is falsy
 */
export function mapHeroFromCS(cs) {
  if (!cs) return null

  // ── Spacing ─────────────────────────────────────────────────────────────────
  const desktop = parseSpacing(cs.style?.desktop_spacings)
  const mobile  = parseSpacing(cs.style?.mobile_spacings)

  const style = {
    paddingTop:          desktop?.top    ?? SPACING_DEFAULTS.paddingTop,
    paddingBottom:       desktop?.bottom ?? SPACING_DEFAULTS.paddingBottom,
    mobilePaddingTop:    mobile?.top     ?? SPACING_DEFAULTS.mobilePaddingTop,
    mobilePaddingBottom: mobile?.bottom  ?? SPACING_DEFAULTS.mobilePaddingBottom,
  }

  // ── CTAs ─────────────────────────────────────────────────────────────────────
  const ctas = toArray(cs.cta_item_group)
    .filter((c) => c.cta_text)
    .map((c) => ({
      text:  c.cta_text ?? '',
      href:  c.cta_link?.url?.href || '#',
      style: c.cta_style ?? 'green-cta',
    }))

  // ── Listing ──────────────────────────────────────────────────────────────────
  // CS stores listing.text_field (single object) or [{text_field}] (array)
  const listing = toArray(cs.listing)
    .map((item) => item.text_field)
    .filter(Boolean)

  return {
    tagLabel:    cs.tag_label ?? '',
    heading:     cs.heading ?? '',
    headingSpan: cs.heading_second_line ? ` ${cs.heading_second_line}` : '',
    paragraphs:  cs.description ? [cs.description] : [],
    imagePosition: 'none',
    textAlign:   'left',
    hasListing:  listing.length > 0,
    listing,
    ctas,
    style,
  }
}

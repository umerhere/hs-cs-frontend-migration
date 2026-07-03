/**
 * mapDescCtaFromCS(gf_description_with_ctas_module)
 *
 * Maps the `gf_description_with_ctas_module` Contentstack global field
 * to props used by DescriptionCta section components.
 *
 * Actual CS field shape:
 * {
 *   heading          text
 *   description      richtext HTML
 *   cta_item_group   group — single object OR array:
 *     cta_text       text
 *     cta_style      text  ("green-cta" | "black_arrow" | etc.)
 *     cta_popup      boolean
 *     cta_link       group  (optional, often missing in CS export)
 *       url: { href }
 * }
 */

function toArray(val) {
  if (!val) return []
  return Array.isArray(val) ? val : [val]
}

export function mapDescCtaFromCS(cs) {
  if (!cs) return null

  const ctas = toArray(cs.cta_item_group)
    .filter((c) => c.cta_text)
    .map((c) => ({
      text:  c.cta_text ?? '',
      href:  c.cta_link?.url?.href || '#',
      style: c.cta_style ?? 'green-cta',
    }))

  return {
    heading:     cs.heading ?? '',
    description: cs.description ?? '',
    ctas,
  }
}

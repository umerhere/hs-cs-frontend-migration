/**
 * usePageData(slug)
 *
 * Fetches the site_pages entry for the given slug and syncs
 * document.title automatically whenever CS returns a value.
 *
 * Returns { data, loading, error }
 * `data` is the raw Contentstack entry — all global fields you've
 * added to the site_pages content type are accessible as nested objects.
 *
 * Slug → CS entry mapping:
 *   "product"                    → /product
 *   "about"                      → /about
 *   "about/contact"              → /about/contact
 *   "product/features"           → /product/features
 *   "product/pricing"            → /product/pricing
 *   "services/website-migration" → /services/website-migration
 *   "case-studies/remote"        → /case-studies/remote
 *   "policies/privacy-policy"    → /policies/privacy-policy
 *   "policies/terms-of-use"      → /policies/terms-of-use
 */
import { useEffect } from 'react'
import { usePageEntry } from './usePageEntry.js'

export function usePageData(slug) {
  const { data, loading, error } = usePageEntry(slug)

  useEffect(() => {
    if (data?.htmltitle) document.title = data.htmltitle
  }, [data])

  return { data, loading, error }
}

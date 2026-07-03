/**
 * usePageEntry(slug)
 *
 * Fetches a single `site_pages` entry from Contentstack by its
 * `gf_seo_fields.slug` value.
 *
 * Returns { data, loading, error }
 *
 * `data` shape (matches the CS entry fields you've set up so far):
 * {
 *   uid:             string
 *   title:           string          – entry title, e.g. "About"
 *   htmltitle:       string          – <title> tag value
 *   gf_seo_fields: {
 *     name:            string
 *     slug:            string
 *     meta_description: string
 *   }
 *   gf_featured_image: {
 *     featured_image:          string  – asset UID (resolve via CS Assets API if needed)
 *     featured_image_alt_text: string
 *     use_featured_image:      boolean
 *   }
 *   // ── add more fields here as you build out the CS content model ──
 * }
 *
 * Usage:
 *   const { data, loading, error } = usePageEntry('about');
 */

import { useState, useEffect } from 'react';
import stack from '../lib/contentstack';

export function usePageEntry(slug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use null/undefined as "no fetch" sentinel — empty string is the home page slug
    if (slug === null || slug === undefined) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    stack
      .contentType('site_pages')
      .entry()
      .query()
      .equalTo('gf_seo_fields.slug', slug)
      .find()
      .then((result) => {
        if (cancelled) return;
        const entry = result?.entries?.[0] ?? null;
        setData(entry);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('[usePageEntry] CS fetch error:', err);
        setError(err);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { data, loading, error };
}

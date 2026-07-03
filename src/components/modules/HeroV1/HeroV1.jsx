import { Link } from 'react-router-dom'
import './HeroV1.css'

/**
 * HeroV1 — reusable hero section used across multiple pages.
 * Props mirror the HubSpot layoutSections params for module_id 236276624085.
 *
 * @param {string}  tagLabel       - eyebrow label (e.g. "Website Content Engineering")
 * @param {string}  heading        - first line of h1
 * @param {string}  headingSpan    - second line inside <span>
 * @param {string}  headingHtml    - full h1 inner HTML (overrides heading/headingSpan when provided)
 * @param {Array}   paragraphs     - array of {html} strings for <p> tags
 * @param {string}  imagePosition  - "none" | "left" | "right"
 * @param {string}  imageSrc       - URL of hero image
 * @param {string}  imageAlt       - alt text for hero image
 * @param {string}  textAlign      - "left" | "right" | "center"
 * @param {Array}   ctas           - [{text, href, style}]
 * @param {boolean} hasListing     - show the floating listing card
 * @param {Array}   listing        - [{text}] items in the listing card
 * @param {Object}  style          - {paddingTop, paddingBottom, mobilePaddingTop, mobilePaddingBottom}
 */
export default function HeroV1({
  tagLabel,
  heading,
  headingSpan,
  headingHtml,
  paragraphs = [],
  imagePosition = 'none',
  imageSrc,
  imageAlt = '',
  textAlign = 'left',
  ctas = [],
  hasListing = false,
  listing = [],
  style = {},
}) {
  const {
    paddingTop = 190,
    paddingBottom = 120,
    mobilePaddingTop = 140,
    mobilePaddingBottom = 90,
  } = style

  const sectionClass = `herov1-section${hasListing ? ' listing' : ''}`
  const mainClass = `herov1-main ${textAlign}`

  console.log("umar listing", listing);
  return (
    <section
      className={sectionClass}
      style={{
        '--pt': `${paddingTop}px`,
        '--pb': `${paddingBottom}px`,
        '--mpt': `${mobilePaddingTop}px`,
        '--mpb': `${mobilePaddingBottom}px`,
      }}
    >
      <div className={`page-center ${imagePosition}`}>
        <div className={mainClass}>
          <div className="herov1-header">
            {tagLabel && <p className="top-label">{tagLabel}</p>}

            {headingHtml ? (
              <h1 dangerouslySetInnerHTML={{ __html: headingHtml }} />
            ) : (
              <h1>
                {heading}
                {headingSpan && <span>{headingSpan}</span>}
              </h1>
            )}

            {paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          {ctas.length > 0 && (
            <div className="cta-area">
              {ctas.map((cta) =>
                cta.href && cta.href.startsWith('/') ? (
                  <Link key={cta.text} to={cta.href} className={cta.style}>
                    {cta.text}
                  </Link>
                ) : (
                  <a key={cta.text} href={cta.href} className={cta.style}>
                    {cta.text}
                  </a>
                )
              )}
            </div>
          )}

          {hasListing && listing.length > 0 && (
            <div className="hero-listing">
              <ul>
                {listing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Image — hidden when imagePosition=none */}
        <div className="herov1-img" aria-hidden={imagePosition === 'none'}>
          {imageSrc && imagePosition !== 'none' && (
            <img src={imageSrc} alt={imageAlt} loading="lazy" style={{ maxWidth: '100%', height: 'auto' }} />
          )}
        </div>
      </div>
    </section>
  )
}

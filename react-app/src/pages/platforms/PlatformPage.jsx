/**
 * Shared template for Platform pages (HubSpot, Contentstack).
 * Props: title, headingSpan, tagLabel, paragraphs, ctas, services, richTextHtml, ctaHeading, ctaBody
 */
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import './PlatformPage.css'

export default function PlatformPage({
  heading,
  headingSpan,
  paragraphs = [],
  ctas = [],
  services = [],
  richTextHtml,
  ctaHeading,
  ctaBody,
}) {
  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1
            heading={heading}
            headingSpan={headingSpan}
            paragraphs={paragraphs}
            imagePosition="none"
            textAlign="left"
            ctas={ctas}
            style={{ paddingTop: 190, paddingBottom: 140, mobilePaddingTop: 190, mobilePaddingBottom: 90 }}
          />

          {/* Services icon grid */}
          {services.length > 0 && (
            <section className="icon-grid-section platform-services">
              <div className="page-center">
                <div className="icon-grid-main">
                  <div className="icon-grid three_column">
                    {services.map((s) => (
                      <div className="icon-grid-inner" key={s.title}>
                        <div className="icon-tag">
                          <span className="hs_cos_wrapper_type_icon">
                            <svg viewBox={s.viewBox} aria-hidden="true" width="21" height="21" fill="currentColor">
                              <path d={s.iconPath} />
                            </svg>
                          </span>
                        </div>
                        <h3>{s.title}</h3>
                        <p>{s.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Rich text / proof */}
          {richTextHtml && (
            <section className="richtext-section platform-richtext">
              <div className="page-center" dangerouslySetInnerHTML={{ __html: richTextHtml }} />
            </section>
          )}

          {/* CTA */}
          {ctaHeading && (
            <section className="desc-cta-section platform-cta">
              <div className="page-center">
                <div className="desc-cta-main primary-gradient">
                  <h2>{ctaHeading}</h2>
                  {ctaBody && <p>{ctaBody}</p>}
                  <div className="cta-area">
                    <Link to="/about/contact" className="green-cta">Let&rsquo;s Chat!</Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

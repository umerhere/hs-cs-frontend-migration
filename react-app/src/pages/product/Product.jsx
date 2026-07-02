import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import IconGridSection from '../home/sections/IconGridSection.jsx'
import DescriptionCtaSection from '../home/sections/DescriptionCtaSection.jsx'
import './Product.css'

const PRODUCT_FEATURES = [
  {
    title: 'Bulk CMS Editing',
    body: 'Update pages, blogs, posts, authors, tags, and redirects.',
    badge: 'available',
    iconPath: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z',
    viewBox: '0 0 512 512',
  },
  {
    title: 'Instant Sync',
    body: 'Push updates straight into HubSpot CMS with one click.',
    badge: 'available',
    iconPath: 'M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z',
    viewBox: '0 0 384 512',
  },
  {
    title: 'Activity Logs',
    body: 'Track edits and keep a clear audit trail.',
    badge: 'available',
    iconPath: 'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v128zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v224zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v64z',
    viewBox: '0 0 448 512',
  },
]

function ProductIconGrid() {
  return (
    <section className="icnon-grid-section product-features-grid">
      <div className="page-center">
        <div className="icnon-grid-main">
          <div className="icnon-grid-header">
            <h2>Built for content teams, not just developers.</h2>
            <p>Powerful tools designed to make bulk CMS management simple, safe, and efficient.</p>
          </div>
          <div className="icon-grid">
            {PRODUCT_FEATURES.map((card) => (
              <div className="icon-grid-inner" key={card.title}>
                <div className="icon-tag">
                  <span className="icon-svg">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox={card.viewBox} aria-hidden="true" width="21" height="21" fill="currentColor">
                      <path d={card.iconPath} />
                    </svg>
                  </span>
                  {card.badge === 'available' && <span className="available">Available</span>}
                  {card.badge === 'soon' && <span className="soon">Coming Soon</span>}
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductDescCta() {
  return (
    <section className="desc-cta-section product-desc-cta">
      <div className="page-center">
        <div className="desc-cta-main primary-gradient">
          <h2>Scale content, not <span style={{ color: '#00c6b2' }}>chaos</span>.</h2>
          <p>Join the teams using Smuves to simplify HubSpot content updates and save hours every week.</p>
          <div className="cta-area">
            <a href="#" className="green-cta openPopup">Join Beta!</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Product() {
  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1
            tagLabel="Now in Beta"
            heading="Bulk edit HubSpot CMS"
            headingSpan=" in seconds, not hours."
            paragraphs={['Smuves is the headless website data editor for HubSpot websites.']}
            imagePosition="none"
            textAlign="left"
            ctas={[{ text: 'Join Beta', href: '#', style: 'black_arrow openPopup' }]}
            hasListing={true}
            listing={[
              'See real time content counts',
              'Audit all available CMS content',
              'Update page settings in bulk',
              'Sync Google Sheets to HubSpot',
            ]}
            style={{ paddingTop: 190, paddingBottom: 120, mobilePaddingTop: 140, mobilePaddingBottom: 90 }}
          />
          <ProductIconGrid />
          <ProductDescCta />
        </div>
      </main>
      <Footer />
    </div>
  )
}

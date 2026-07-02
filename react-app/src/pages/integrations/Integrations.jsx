import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import './Integrations.css'

const INTEGRATION_FEATURES = [
  {
    title: 'One-Click Integration',
    body: 'Simple connection setup that gets you up and running with HubSpot and Google Sheets in minutes.',
    iconPath: 'M105.6 83.2v86.177a115.52 115.52 0 0 0-22.4-2.176c-47.914 0-83.2 35.072-83.2 92 0 45.314 48.537 57.002 78.784 75.707 12.413 7.735 23.317 16.994 33.253 25.851l.146.131.148.129C129.807 376.338 136 384.236 136 391.2v2.679c-4.952 5.747-8 13.536-8 22.12v64c0 17.673 12.894 32 28.8 32h230.4c15.906 0 28.8-14.327 28.8-32v-64c0-8.584-3.048-16.373-8-22.12V391.2c0-28.688 40-67.137 40-127.2v-21.299c0-62.542-38.658-98.8-91.145-99.94-17.813-12.482-40.785-18.491-62.791-15.985A93.148 93.148 0 0 0 272 118.847V83.2C272 37.765 234.416 0 188.8 0c-45.099 0-83.2 38.101-83.2 83.2z',
    viewBox: '0 0 448 512',
  },
  {
    title: 'Lightning Fast',
    body: 'Quick export and import operations that handle your content efficiently with minimal waiting time.',
    iconPath: 'M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z',
    viewBox: '0 0 320 512',
  },
  {
    title: 'Complete Activity Logs',
    body: 'Easy compliance and troubleshooting with detailed activity logs that track successes and errors.',
    iconPath: 'M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z',
    viewBox: '0 0 576 512',
  },
]

export default function Integrations() {
  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1
            heading="HubSpot & Google"
            headingSpan=" Sheets Integration"
            paragraphs={['Effortlessly sync between Google Sheets and HubSpot CMS']}
            imagePosition="none"
            textAlign="left"
            style={{ paddingTop: 190, paddingBottom: 140, mobilePaddingTop: 190, mobilePaddingBottom: 90 }}
          />

          {/* How it works panel */}
          <section className="panel-section integrations-panel">
            <div className="page-center">
              <div className="panel-main">
                <div className="panel-inner right">
                  <div className="panel-content">
                    <div className="panel-inner-content">
                      <div className="panel-inner-heading">
                        <h2>Export HubSpot to Google Sheets</h2>
                      </div>
                    </div>
                    <p><strong>Get your HubSpot data into a spreadsheet in seconds</strong></p>
                    <p>Select any content type from HubSpot — pages, blogs, posts, authors, tags — and export it directly to Google Sheets with one click. Clean columns, no formatting issues, ready to edit.</p>
                    <div className="panel-boxes">
                      <div className="panel-boxes-contwnt">
                        <h4>Select &amp; Export</h4>
                        <p>Choose your content type, configure your columns, and push to Google Sheets instantly.</p>
                      </div>
                    </div>
                  </div>
                  <div className="panel-image">
                    <img src="https://www.smuves.com/hs-fs/hubfs/Website/1.png?width=636&height=636" alt="HubSpot export to Google Sheets" loading="lazy" style={{ maxWidth: '100%', height: 'auto', borderRadius: 12 }} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose section */}
          <section className="icon-grid-section integrations-why">
            <div className="page-center">
              <div className="icon-grid-main">
                <div className="icon-grid-header">
                  <h2>Why Choose Smuves Integrations?</h2>
                  <p>Built for reliability, designed for scale, and optimized for your content editing workflow</p>
                </div>
                <div className="icon-grid three_column">
                  {INTEGRATION_FEATURES.map((f) => (
                    <div className="icon-grid-inner" key={f.title}>
                      <div className="icon-tag">
                        <span className="hs_cos_wrapper_type_icon">
                          <svg viewBox={f.viewBox} aria-hidden="true" width="21" height="21" fill="currentColor">
                            <path d={f.iconPath} />
                          </svg>
                        </span>
                      </div>
                      <h4>{f.title}</h4>
                      <p>{f.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="desc-cta-section integrations-cta">
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
        </div>
      </main>
      <Footer />
    </div>
  )
}

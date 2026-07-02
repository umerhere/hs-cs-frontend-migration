import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import './ProductUpdates.css'

const UPDATES = [
  {
    date: 'May 19, 2026',
    type: 'Feature',
    title: 'Bot Protection and Platform Stability',
    body: 'We have added Cloudflare Turnstile captcha verification and request throttling to reduce automated bot activity. Production infrastructure has been synced with all required database tables, edge functions, RLS policies, and RPCs. Multiple bug fixes across payment upgrades/cancellations, find and replace, export logging, fetch job reconciliation, and filter behavior have been resolved.',
  },
  {
    date: 'May 12, 2026',
    type: 'Improvement',
    title: 'Performance & Reliability Improvements',
    body: 'Significant improvements to export performance for large datasets. Streaming chunked exports now handle 100,000+ records without memory issues. Improved error handling and retry logic for HubSpot API rate limits.',
  },
  {
    date: 'April 2, 2026',
    type: 'Feature',
    title: 'Google Sheets Two-Way Sync',
    body: 'Export your HubSpot content to Google Sheets and push changes back directly. Update page titles, meta descriptions, and other fields in bulk through the familiar spreadsheet interface.',
  },
  {
    date: 'March 31, 2026',
    type: 'Feature',
    title: 'Multi-Portal Dashboard',
    body: 'Connect multiple HubSpot portals and manage them all from a single Smuves dashboard. Switch between portals instantly and maintain separate activity logs for each connection.',
  },
  {
    date: 'March 31, 2026',
    type: 'Feature',
    title: 'Advanced Find & Replace',
    body: 'New find and replace engine supports regex patterns, case-sensitive matching, and preview mode. Review all matches before applying changes to ensure accuracy across thousands of records.',
  },
  {
    date: 'November 24, 2025',
    type: 'Feature',
    title: 'Activity Logs',
    body: 'Every bulk operation is now logged with a full audit trail including affected records, field changes, timestamps, and user attribution. Search and filter your operation history at any time.',
  },
  {
    date: 'November 17, 2025',
    type: 'Improvement',
    title: 'HubDB Table Support',
    body: 'Smuves now supports HubDB tables in addition to CMS pages. Fetch, edit, and sync HubDB rows in bulk using the same interface.',
  },
  {
    date: 'November 10, 2025',
    type: 'Feature',
    title: 'Bulk Redirect Management',
    body: 'Create, update, and delete URL redirects in bulk. Import a CSV of old and new URLs or generate redirects directly from page slug changes.',
  },
]

const CAL_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4"/><path d="M16 2v4"/>
    <rect width="18" height="18" x="3" y="4" rx="2"/>
    <path d="M3 10h18"/>
  </svg>
)

const TYPE_COLORS = {
  Feature: '#00c6b2',
  Improvement: '#0083ff',
  Fix: '#f54a00',
}

export default function ProductUpdates() {
  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1
            heading="Product"
            headingSpan=" Updates"
            paragraphs={['Stay updated with the latest features and improvements to Smuves.']}
            imagePosition="none"
            textAlign="left"
            style={{ paddingTop: 190, paddingBottom: 140, mobilePaddingTop: 190, mobilePaddingBottom: 90 }}
          />
          <section className="product-section updates-section">
            <div className="page-center">
              <div className="product-section-wrapper">
                {UPDATES.map((update, i) => (
                  <div className="product-inner" key={i}>
                    <div className="product-icon feature">
                      <img src="https://www.smuves.com/hubfs/Website/circle1.svg" alt="" width={42} height={42} loading="lazy" />
                    </div>
                    <div className="product-content">
                      <div className="product-date">
                        <span className="update-meta">
                          {CAL_ICON} {update.date}
                          <span className="product-topic" style={{ background: TYPE_COLORS[update.type] || '#00c6b2' }}>
                            {update.type}
                          </span>
                        </span>
                      </div>
                      <h4>{update.title}</h4>
                      <p>{update.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

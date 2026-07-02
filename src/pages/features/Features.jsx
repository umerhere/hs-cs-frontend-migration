import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import './Features.css'

const PANELS = [
  {
    side: 'right',
    icon: 'https://www.smuves.com/hubfs/Website/icon-Jan-20-2026-12-57-25-5030-PM.svg',
    iconAlt: 'Bulk editing feature icon',
    title: 'Bulk Editing',
    subtitle: 'Edit thousands of records in minutes',
    body: 'Transform your HubSpot CMS operations with powerful bulk editing capabilities. Make large-scale content changes safely and efficiently.',
    img: 'https://www.smuves.com/hs-fs/hubfs/Website/4.png?width=562&height=559',
    imgAlt: 'Smuves bulk editing interface',
    boxes: [
      {
        icon: 'https://www.smuves.com/hubfs/Website/icon-3.svg',
        title: 'Content Management',
        body: 'Bulk update page titles, meta descriptions, on-page content fields, and URL redirects across your HubSpot CMS in minutes.',
      },
      {
        icon: 'https://www.smuves.com/hubfs/Website/icon-4.svg',
        title: 'CMS Operations',
        body: 'Manage blog posts, landing pages, and website pages at scale with a single, unified view. Update content fields and publishing status across hundreds of CMS assets simultaneously.',
      },
    ],
  },
  {
    side: 'left',
    icon: 'https://www.smuves.com/hubfs/Website/icon%20B.svg',
    iconAlt: 'Find and replace feature icon',
    title: 'Find & Replace',
    subtitle: 'Intelligent content transformation',
    body: 'Search and replace text across all your HubSpot content with ease. Update URLs, correct typos, or modify repeated content across thousands of pages and blog posts in one operation.',
    img: 'https://www.smuves.com/hs-fs/hubfs/Website/1.png?width=636&height=636',
    imgAlt: 'Smuves bulk editing interface for HubSpot CMS pages',
    boxes: [
      {
        icon: 'https://www.smuves.com/hubfs/Website/icon.svg',
        title: 'Bulk Text Search',
        body: 'Search across thousands of records in your HubSpot CMS. Find text in pages, blog posts, and other properties instantly.',
      },
      {
        icon: 'https://www.smuves.com/hubfs/Website/icon-1.svg',
        title: 'Preview Before Apply',
        body: 'See exactly what will change before executing. Review matches, exclude specific items, and ensure accuracy before making changes.',
      },
    ],
  },
  {
    side: 'right',
    icon: 'https://www.smuves.com/hubfs/Website/icon-1-1.svg',
    iconAlt: 'Activity logs feature icon',
    title: 'Activity Logs',
    subtitle: 'Complete audit trail of all changes',
    body: 'Never lose track of what changed, when, and by whom. Our comprehensive logging system provides complete visibility into all bulk operations with detailed tracking and searchable history.',
    img: 'https://www.smuves.com/hs-fs/hubfs/Website/2.png?width=666&height=434',
    imgAlt: 'Activity logs interface',
    boxes: [
      {
        icon: 'https://www.smuves.com/hubfs/Website/icon-5.svg',
        title: 'Detailed Tracking',
        body: 'Every operation is recorded with timestamps, affected records, and change details for complete accountability.',
      },
      {
        icon: 'https://www.smuves.com/hubfs/Website/icon.svg',
        title: 'Searchable History',
        body: 'Quickly find past operations, filter by date or user, and understand the full history of your content changes.',
      },
    ],
  },
  {
    side: 'left',
    icon: 'https://www.smuves.com/hubfs/Website/icon-2-1.svg',
    iconAlt: 'Multi-portal management feature icon',
    title: 'Multi Portal Connections',
    subtitle: 'Manage all your HubSpot portals in one place',
    body: 'Connect and manage multiple HubSpot portals from a single dashboard. Perfect for agencies, multi-brand companies, or teams managing multiple clients. Switch between portals instantly and maintain consistent workflows across all accounts.',
    img: 'https://www.smuves.com/hs-fs/hubfs/Website/3.png?width=659&height=654',
    imgAlt: 'Multi-portal management interface',
    boxes: [
      {
        icon: 'https://www.smuves.com/hubfs/Website/icon-1.svg',
        title: 'Preview Before Apply',
        body: 'See exactly what will change before executing. Review matches, exclude specific items, and ensure accuracy before making changes.',
      },
      {
        icon: 'https://www.smuves.com/hubfs/Website/icon-2.svg',
        title: 'Double Confirmation',
        body: 'Safety first! Multiple confirmation steps ensure you never accidentally replace the wrong content. Preview and verify before every operation.',
      },
    ],
  },
]

function PanelSection({ panel, bg }) {
  return (
    <section className="panel-section" style={{ background: bg }}>
      <div className="page-center">
        <div className="panel-main">
          <div className={`panel-inner ${panel.side}`}>
            <div className="panel-content">
              <div className="panel-inner-content">
                <img src={panel.icon} alt={panel.iconAlt} width={43} height={43} />
                <div className="panel-inner-heading">
                  <h2>{panel.title}</h2>
                </div>
              </div>
              <p><strong>{panel.subtitle}</strong></p>
              <p>{panel.body}</p>
              {panel.boxes.map((box) => (
                <div className="panel-boxes" key={box.title}>
                  <div className="panel-boxes-contwnt">
                    <h4>
                      <span><img src={box.icon} alt="" width={26} height={26} loading="lazy" /></span>
                      {box.title}
                    </h4>
                    <p>{box.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="panel-image">
              <img src={panel.img} alt={panel.imgAlt} loading="lazy" style={{ maxWidth: '100%', height: 'auto', borderRadius: 12 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesDescCta() {
  return (
    <section className="desc-cta-section features-cta">
      <div className="page-center">
        <div className="desc-cta-main primary-gradient">
          <h2>Ready to transform your<span style={{ color: '#00c6b2' }}> HubSpot workflow?</span></h2>
          <p>Join teams saving hours every week with Smuves bulk editing tools.</p>
          <div className="cta-area">
            <a href="#" className="green-cta openPopup">Join Beta!</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Features() {
  const bgs = ['#ffffff', '#F5F7FA', '#ffffff', '#F5F7FA']
  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1
            heading="Smuves"
            headingSpan=" Features"
            paragraphs={['Discover how Smuves transforms complex HubSpot operations into simple, safe, and scalable processes. Every feature is designed to save you time while protecting your data.']}
            imagePosition="none"
            textAlign="left"
            style={{ paddingTop: 190, paddingBottom: 140, mobilePaddingTop: 190, mobilePaddingBottom: 90 }}
          />
          {PANELS.map((panel, i) => (
            <PanelSection key={panel.title} panel={panel} bg={bgs[i]} />
          ))}
          <FeaturesDescCta />
        </div>
      </main>
      <Footer />
    </div>
  )
}

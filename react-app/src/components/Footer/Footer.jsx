import './Footer.css'

const FOOTER_DATA = {
  logo: {
    src: 'https://www.smuves.com/hs-fs/hubfs/Logo%20main%20%E2%80%93%20Horizontal%20%E2%80%93%20transparent.png?width=150&height=25&name=Logo%20main%20%E2%80%93%20Horizontal%20%E2%80%93%20transparent.png',
    alt: 'Smuves Logo',
    width: 150,
    height: 25,
  },
  description: 'Smuves is the CMS bulk editor HubSpot never built.',
  social: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/smuves',
      icon: (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" width="18" height="18" fill="currentColor">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
      ),
    },
  ],
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'About', href: 'https://www.smuves.com/about' },
        { label: 'Contact', href: 'https://www.smuves.com/about/contact' },
      ],
    },
    {
      heading: 'HubSpot CMS Bulk Editor',
      links: [
        { label: 'Overview', href: 'https://www.smuves.com/product' },
        { label: 'Features', href: 'https://www.smuves.com/product/features' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { label: 'Website Content Migrations', href: 'https://www.smuves.com/services/website-migration' },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Smuves. All rights reserved.`,
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="page-center">
          <div className="footer-top">

            {/* Column 1: Logo + description + socials */}
            <div className="footer-col info-area">
              <a href="/">
                <img
                  src={FOOTER_DATA.logo.src}
                  alt={FOOTER_DATA.logo.alt}
                  width={FOOTER_DATA.logo.width}
                  height={FOOTER_DATA.logo.height}
                />
              </a>
              <p>{FOOTER_DATA.description}</p>

              <ul className="social-links">
                {FOOTER_DATA.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Link columns */}
            {FOOTER_DATA.columns.map((col) => (
              <div className="footer-col" key={col.heading}>
                <h6>{col.heading}</h6>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          <div className="footer-bottom">
            <p>{FOOTER_DATA.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

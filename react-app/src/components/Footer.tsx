import { Link } from 'react-router-dom';
import './Footer.css';

const LOGO_URL =
  'https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Logos/logotype%20%E2%80%93%20transparent%20%E2%80%93%20full%20%E2%80%93%201.png';

const LINKEDIN_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LINK_COLUMNS = [
  {
    heading: 'Company',
    links: [
      { text: 'About', href: '/about' },
      { text: 'Contact', href: '/about/contact' },
    ],
  },
  {
    heading: 'HubSpot CMS Bulk Editor',
    links: [
      { text: 'Overview', href: '/product' },
      { text: 'Features', href: '/product/features' },
      { text: 'Pricing', href: '/product/pricing' },
      { text: 'Google Sheets Integration', href: '/product/integrations' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { text: 'Website Migration', href: '/services/website-migration' },
      { text: 'HubSpot Platform', href: '/platforms/hubspot' },
      { text: 'Contentstack', href: '/platforms/contentstack' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="page-center">

          <div className="footer-top">
            <div className="footer-col footer-info-col">
              <Link to="/">
                <img src={LOGO_URL} alt="Smuves" height={28} style={{ maxHeight: 28, width: 'auto', marginBottom: 12 }} />
              </Link>
              <p>Smuves is the CMS bulk editor<br />HubSpot never built.</p>
              <a href="https://www.linkedin.com/company/smuves" className="footer-social-link" aria-label="LinkedIn">
                {LINKEDIN_ICON}
              </a>
            </div>

            {LINK_COLUMNS.map((col) => (
              <div className="footer-col" key={col.heading}>
                <h4>{col.heading}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.text}>
                      <Link to={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p>© {year} Smuves. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/policies/privacy-policy">Privacy Policy</Link>
              <Link to="/policies/terms-of-use">Terms of Use</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

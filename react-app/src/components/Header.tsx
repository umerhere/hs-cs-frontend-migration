import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const LOGO_URL =
  'https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Logos/logotype%20%E2%80%93%20transparent%20%E2%80%93%20full%20%E2%80%93%201.png';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Services', href: '/services/website-migration',
    children: [
      { label: 'Website Migration', href: '/services/website-migration' },
    ],
  },
  {
    label: 'Partnerships', href: '#',
    children: [
      { label: 'HubSpot', href: '/platforms/hubspot' },
      { label: 'Contentstack', href: '/platforms/contentstack' },
    ],
  },
  {
    label: 'HubSpot CMS Bulk Editor', href: '/product',
    children: [
      { label: 'Overview', href: '/product' },
      { label: 'Features', href: '/product/features' },
      { label: 'Pricing', href: '/product/pricing' },
      { label: 'Google Sheets Integration', href: '/product/integrations' },
    ],
  },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <header className="header">
      <div className="header-main">
        <div className="page-center">
          <div className="header-holder">

            {/* Logo */}
            <div className="logo">
              <Link to="/">
                <img src={LOGO_URL} alt="Smuves" height={28} loading="eager" style={{ maxHeight: 28, width: 'auto' }} />
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="menu-area" aria-label="Main navigation">
              <ul>
                {NAV_ITEMS.map((item, i) => (
                  <li
                    key={item.label}
                    className={`nav-item${item.children ? ' has-dropdown' : ''}${openDropdown === i ? ' open' : ''}`}
                    onMouseEnter={() => item.children && setOpenDropdown(i)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link to={item.href}>
                      {item.label}
                      {item.children && (
                        <svg className="dropdown-chevron" viewBox="0 0 10 6" fill="none">
                          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </Link>
                    {item.children && openDropdown === i && (
                      <ul className="dropdown">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link to={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTAs */}
            <div className="cta-area">
              <Link to="/product" className="cta-join-beta">Join App Beta</Link>
              <Link to="/about/contact" className="primary-gradient-cta cta-lets-chat">Let's Chat!</Link>
            </div>

            {/* Hamburger */}
            <div
              className="mobile-toggle"
              onClick={() => setMobileOpen((p) => !p)}
              role="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            <div className="menu-clone">
              <ul>
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                    {item.children && (
                      <ul style={{ paddingLeft: 16, marginTop: 8 }}>
                        {item.children.map((c) => (
                          <li key={c.label}><Link to={c.href} onClick={() => setMobileOpen(false)} style={{ fontSize: 14 }}>{c.label}</Link></li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cta-clone">
              <Link to="/product" className="cta-join-beta" onClick={() => setMobileOpen(false)}>Join App Beta</Link>
              <Link to="/about/contact" className="primary-gradient-cta cta-lets-chat" onClick={() => setMobileOpen(false)}>Let's Chat!</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

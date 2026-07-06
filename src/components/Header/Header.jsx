import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const NAV_ITEMS = [
  {
    label: 'Services',
    href: null,
    children: [
      { label: 'Website Content Migrations', href: '/services/website-migration' },
    ],
  },
  {
    label: 'Partnerships',
    href: null,
    children: [
      { label: 'HubSpot', href: '/platforms/hubspot' },
      { label: 'Contentstack', href: '/platforms/contentstack' },
    ],
  },
  {
    label: 'HubSpot CMS Bulk Editor App',
    href: null,
    children: [
      { label: 'Overview', href: '/product' },
      { label: 'Features', href: '/product/features' },
      { label: 'HubSpot CMS to Google Sheets Integration', href: '/product/integrations' },
    ],
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    function handleOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function toggleDropdown(idx) {
    setOpenDropdown(prev => prev === idx ? null : idx)
  }

  return (
    <header className="header">
      <a href="#main-content" className="header__skip">Skip to content</a>

      <div className="header-main">
        <div className="page-center">
          <div className="header-holder">

            {/* Logo */}
            <div className="logo">
              <Link to="/">
                <img
                  src="https://www.smuves.com/hubfs/Website/logo.svg"
                  alt="Smuves logo"
                  width="143"
                  height="27"
                  loading="eager"
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="menu-area" ref={navRef} aria-label="Primary Navigation">
              <ul role="menu">
                {NAV_ITEMS.map((item, idx) => (
                  <li
                    key={item.label}
                    className={`hs-menu-item hs-menu-depth-1${item.children ? ' hs-item-has-children' : ''}`}
                    role="none"
                  >
                    {item.children ? (
                      <>
                        <button
                          className="nav-parent-btn"
                          aria-haspopup="true"
                          aria-expanded={openDropdown === idx}
                          onClick={() => toggleDropdown(idx)}
                        >
                          {item.label}
                          <span className="nav-chevron" aria-hidden="true">{openDropdown === idx ? '▴' : '▾'}</span>
                        </button>
                        {openDropdown === idx && (
                          <ul role="menu" className="hs-menu-children-wrapper">
                            {item.children.map(child => (
                              <li key={child.label} className="hs-menu-item hs-menu-depth-2" role="none">
                                <Link to={child.href} role="menuitem" onClick={() => setOpenDropdown(null)}>{child.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <a href={item.href} role="menuitem">{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTAs */}
            <div className="cta-area">
              <a href="#" className="cta-white-secondary openPopup">Join App Beta</a>
              <Link to="/about/contact" className="cta-white-primary">Let's Chat!</Link>
            </div>

            {/* Mobile hamburger */}
            <div
              className={`mobile-toggle${mobileOpen ? ' is-open' : ''}`}
              id="mobileToggle"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle mobile menu"
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setMobileOpen(v => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' is-open' : ''}`} id="mobileMenu">
        <div className="mobile-menu-inner">
          <nav className="menu-clone" aria-label="Mobile Navigation">
            <ul role="menu">
              {NAV_ITEMS.map((item, idx) => (
                <li key={item.label} className="mobile-nav-item" role="none">
                  {item.children ? (
                    <>
                      <button
                        className="mobile-nav-parent"
                        onClick={() => toggleDropdown('m' + idx)}
                        aria-expanded={openDropdown === 'm' + idx}
                      >
                        {item.label}
                        <span className="nav-chevron" aria-hidden="true">▾</span>
                      </button>
                      {openDropdown === 'm' + idx && (
                        <ul className="mobile-submenu" role="menu">
                          {item.children.map(child => (
                            <li key={child.label} role="none">
                              <Link to={child.href} role="menuitem" onClick={() => setMobileOpen(false)}>
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a href={item.href} role="menuitem" onClick={() => setMobileOpen(false)}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="cta-clone">
            <a href="#" className="cta-white-secondary openPopup">Join App Beta</a>
            <Link to="/about/contact" className="cta-white-primary" onClick={() => setMobileOpen(false)}>
              Let's Chat!
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

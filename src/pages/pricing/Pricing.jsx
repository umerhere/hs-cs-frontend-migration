import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import { usePageData } from '../../hooks/usePageData.js'
import { mapHeroFromCS } from '../../lib/mappers/heroMapper.js'
import './Pricing.css'

const HERO_FALLBACK = {
  heading: 'HubSpot CMS Bulk Editor',
  headingSpan: ' Pricing',
  paragraphs: ['From solo marketers to enterprise teams, we have a plan that scales with your needs.'],
  imagePosition: 'none',
  textAlign: 'left',
  style: { paddingTop: 190, paddingBottom: 140, mobilePaddingTop: 190, mobilePaddingBottom: 90 },
}

const CHECK_ICON = (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true" width="21" height="21">
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
)

const TIERS = [
  {
    name: 'Free',
    limit1: 'Bulk Fetch 100 records',
    limit2: 'Bulk Edit 50 records',
    price: '$0',
    period: 'Per month',
    tagline: 'Perfect for small teams and simple edits',
    popular: false,
    features: [
      'Single platform connection',
      'Content type counts',
      'HubSpot Integration',
      'Google Sheets Integration',
      'Fetch content types one at a time',
      'Filter, search, sort records',
      'Find and replace (non-module fields)',
      'Execution Logs',
    ],
    cta: 'Get Started Free',
    ctaHref: '#',
  },
  {
    name: 'Pro',
    limit1: 'Bulk Fetch 1,000 records',
    limit2: 'Bulk Edit 500 records',
    price: '$99',
    period: 'Per month',
    tagline: 'Perfect for larger websites or frequent edits',
    popular: true,
    features: [
      'Everything in Free',
      'Multiple platform connections',
      'Fetch all content types at once',
      'Advanced find & replace',
      'Priority support',
      'Activity audit logs',
      'Team collaboration tools',
      'Bulk publish/unpublish',
    ],
    cta: 'Start Pro Trial',
    ctaHref: '#',
  },
  {
    name: 'Enterprise',
    limit1: 'Bulk Fetch 50,000 records',
    limit2: 'Bulk Edit 10,000 records',
    price: '$249',
    period: 'Per month',
    tagline: 'Perfect for agencies or mega websites',
    popular: false,
    features: [
      'Everything in Pro',
      'Multi-platform connection',
      'Fetch all content types at once',
      'Custom integrations',
      'Dedicated account manager',
      'SLA support',
      'Custom reporting',
      'Onboarding assistance',
    ],
    cta: 'Contact Sales',
    ctaHref: '/about/contact',
  },
]

function PricingCard({ tier }) {
  return (
    <div className={`pricing-inner${tier.popular ? ' popular' : ''}`}>
      {tier.popular && <p className="most_popular">Most Popular</p>}
      <div className="pricing-content">
        <h6>{tier.name}</h6>
        <p>{tier.limit1}</p>
        <p>{tier.limit2}</p>
        <h2>{tier.price}<span>{tier.period}</span></h2>
        <p>{tier.tagline}</p>
        <ul>
          {tier.features.map((f) => (
            <li key={f}>{CHECK_ICON} {f}</li>
          ))}
        </ul>
        {tier.ctaHref && tier.ctaHref.startsWith('/') ? (
          <Link to={tier.ctaHref} className="white-cta">{tier.cta}</Link>
        ) : (
          <a href={tier.ctaHref} className="white-cta">{tier.cta}</a>
        )}
      </div>
    </div>
  )
}

export default function Pricing() {
  const { data } = usePageData('product/pricing')
  const heroProps = mapHeroFromCS(data?.gf_hero_v1_module) ?? HERO_FALLBACK

  // CS: gf_pricing_card[] — each item matches the TIERS shape
  const tiers = Array.isArray(data?.gf_pricing_card) && data.gf_pricing_card.length
    ? data.gf_pricing_card.map((t) => ({
        name:     t.tier     ?? '',
        price:    t.price    ?? '',
        period:   t.timeframe ?? 'Per month',
        tagline:  t.description ?? '',
        popular:  t.popular ?? false,
        features: Array.isArray(t.features) ? t.features : [],
        cta:      t.button_text ?? 'Get Started',
        ctaHref:  t.button_link?.url?.href ?? '#',
      }))
    : TIERS

  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1 {...heroProps} />
          <section className="pricing-section">
            <div className="page-center">
              <div className="pricing-section-wrapper">
                {tiers.map((tier) => <PricingCard key={tier.name} tier={tier} />)}
              </div>
            </div>
          </section>

          <section className="desc-cta-section pricing-cta">
            <div className="page-center">
              <div className="desc-cta-main primary-gradient">
                <h2>Not sure which plan is right for you?</h2>
                <p>Talk to our team and we&rsquo;ll help you find the right fit.</p>
                <div className="cta-area">
                  <Link to="/about/contact" className="green-cta">Contact Sales</Link>
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

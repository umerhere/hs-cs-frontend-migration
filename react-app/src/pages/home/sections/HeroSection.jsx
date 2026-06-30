import './HeroSection.css'

const heroData = {
  tagLabel: 'Website Content Engineering',
  heading: 'Stop treating your CMS',
  headingSecondLine: ' like a scrapbook.',
  description:
    'Most teams build website pages by hand-gluing content into \u201cblobs\u201d that can\u2019t be moved, searched, or scaled. We engineer the automated schemas and ETL pipes to turn your manual mess into <strong>structured, movable content data.</strong>\u00a0',
  cta: {
    text: "Let's Chat!",
    href: 'https://www.smuves.com/about/contact',
    style: 'black_arrow',
  },
  listing: [
    'Liquidate Years of Technical Debt',
    'Standardize Fragmented Website Data',
    'Unlock Total System Portability',
  ],
}

export default function HeroSection() {
  return (
    <section className="herov1-section listing">
      <div className="page-center none">
        <div className="herov1-main left">
          <div className="herov1-header">
            <p className="top-label">{heroData.tagLabel}</p>
            <h1>
              {heroData.heading}
              <span>{heroData.headingSecondLine}</span>
            </h1>
            <p dangerouslySetInnerHTML={{ __html: heroData.description }} />
          </div>

          <div className="cta-area">
            <a href={heroData.cta.href} className={heroData.cta.style}>
              {heroData.cta.text}
            </a>
          </div>

          <div className="hero-listing">
            <ul>
              {heroData.listing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* herov1-img is hidden (page-center.none) per live CSS */}
        <div className="herov1-img" aria-hidden="true"></div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import './DescriptionCtaSection.css'

const FALLBACK = {
  heading: 'Your content is great...<br/>but your architecture is a disaster.',
  description: "Let\u2019s be real: your current build is a monolithic mess of broken links and \u201cwe\u2019ll fix it later\u201d promises. \u201cLater\u201d is now.\n\nWe build the custom ETL engines that turn your content chaos into a structured asset. No black-box scripts, no broken metadata, and zero \u201cOops, we lost the JP blog\u201d moments.\u00a0",
  ctas: [{ text: "Let's Fix it Now!", href: '/about/contact', style: 'green-cta' }],
}

export default function DescriptionCtaSection({ data }) {
  const heading     = data?.heading     || FALLBACK.heading
  const description = data?.description || FALLBACK.description
  const ctas        = data?.ctas?.length ? data.ctas : FALLBACK.ctas

  return (
    <section className="desc-cta-section">
      <div className="page-center">
        <div className="desc-cta-main primary-gradient">
          <h2 dangerouslySetInnerHTML={{ __html: heading }} />
          <p>{description}</p>
          <div className="cta-area">
            {ctas.map((cta) =>
              cta.href?.startsWith('/') ? (
                <Link key={cta.text} to={cta.href} className={cta.style}>{cta.text}</Link>
              ) : (
                <a key={cta.text} href={cta.href} className={cta.style}>{cta.text}</a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

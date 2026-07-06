import { Link } from 'react-router-dom'
import MissingContent from '../../../components/MissingContent/MissingContent.jsx'
import './DescriptionCtaSection.css'

export default function DescriptionCtaSection({ data, loading }) {
  if (loading) return null

  if (!data) {
    return (
      <section className="desc-cta-section">
        <div className="page-center">
          <MissingContent field="gf_description_with_ctas_module" />
        </div>
      </section>
    )
  }

  const { heading, description, ctas = [] } = data

  return (
    <section className="desc-cta-section">
      <div className="page-center">
        <div className="desc-cta-main">
          {heading
            ? <h2 dangerouslySetInnerHTML={{ __html: heading }} />
            : <MissingContent field="gf_description_with_ctas_module.heading" />
          }
          {description
            ? <div dangerouslySetInnerHTML={{ __html: description }} />
            : <MissingContent field="gf_description_with_ctas_module.description" />
          }
          <div className="cta-area">
            {ctas.length > 0
              ? ctas.map((cta) =>
                  cta.href?.startsWith('/') ? (
                    <Link key={cta.text} to={cta.href} className={cta.style}>{cta.text}</Link>
                  ) : (
                    <a key={cta.text} href={cta.href} className={cta.style}>{cta.text}</a>
                  )
                )
              : <MissingContent field="gf_description_with_ctas_module.cta_item_group" />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

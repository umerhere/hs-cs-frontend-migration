import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import MissingContent from '../../components/MissingContent/MissingContent.jsx'
import { usePageData } from '../../hooks/usePageData.js'
import { mapHeroFromCS } from '../../lib/mappers/heroMapper.js'
import { mapDescCtaFromCS } from '../../lib/mappers/descriptionCtaMapper.js'
import { Link } from 'react-router-dom'
import './Product.css'

function ProductIconGrid({ data, loading }) {
  if (loading) return null

  if (!data) {
    return (
      <section className="icnon-grid-section product-features-grid">
        <div className="page-center">
          <MissingContent field="gf_icon_grid_with_tags_module" />
        </div>
      </section>
    )
  }

  const rawGrid = data.icon_grid
  const csCards = rawGrid ? (Array.isArray(rawGrid) ? rawGrid : [rawGrid]) : []

  return (
    <section className="icnon-grid-section product-features-grid">
      <div className="page-center">
        <div className="icnon-grid-main">
          <div className="icnon-grid-header">
            {data.heading
              ? <h2>{data.heading}</h2>
              : <MissingContent field="gf_icon_grid_with_tags_module.heading" />
            }
            {data.description
              ? <p>{data.description}</p>
              : <MissingContent field="gf_icon_grid_with_tags_module.description" />
            }
          </div>
          <div className="icon-grid">
            {csCards.length > 0
              ? csCards.map((card, i) => (
                  <div className="icon-grid-inner" key={i}>
                    <div className="icon-tag">
                      <span className="icon-svg">
                        {card.icon_svg
                          ? <span dangerouslySetInnerHTML={{ __html: card.icon_svg }} />
                          : null
                        }
                      </span>
                      {card.tag_choice === 'available' && <span className="available">Available</span>}
                      {card.tag_choice === 'soon' && <span className="soon">Coming Soon</span>}
                    </div>
                    {card.text
                      ? <div dangerouslySetInnerHTML={{ __html: card.text }} />
                      : <MissingContent field={`gf_icon_grid_with_tags_module.icon_grid[${i}].text`} />
                    }
                  </div>
                ))
              : <MissingContent field="gf_icon_grid_with_tags_module.icon_grid" />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductDescCta({ data, loading }) {
  if (loading) return null

  if (!data) {
    return (
      <section className="desc-cta-section product-desc-cta">
        <div className="page-center">
          <MissingContent field="gf_description_with_ctas_module" />
        </div>
      </section>
    )
  }

  const { heading, description, ctas = [] } = data

  return (
    <section className="desc-cta-section product-desc-cta">
      <div className="page-center">
        <div className="desc-cta-main primary-gradient">
          {heading
            ? <h2 dangerouslySetInnerHTML={{ __html: heading }} />
            : <MissingContent field="gf_description_with_ctas_module.heading" />
          }
          {description
            ? <p>{description}</p>
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

export default function Product() {
  const { data, loading } = usePageData('product')

  const heroProps = mapHeroFromCS(data?.gf_hero_v1_module)
  const descCta   = mapDescCtaFromCS(data?.gf_description_with_ctas_module)

  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          {!loading && (heroProps
            ? <HeroV1 {...heroProps} />
            : <MissingContent field="gf_hero_v1_module" />
          )}
          <ProductIconGrid data={data?.gf_icon_grid_with_tags_module} loading={loading} />
          <ProductDescCta data={descCta} loading={loading} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

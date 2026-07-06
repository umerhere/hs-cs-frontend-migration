import MissingContent from '../../../components/MissingContent/MissingContent.jsx'
import './IconGridSection.css'

export default function IconGridSection({ data, loading }) {
  if (loading) return null

  if (!data) {
    return (
      <section className="icnon-grid-section">
        <div className="page-center">
          <MissingContent field="gf_icon_grid_with_tags_module" />
        </div>
      </section>
    )
  }

  // Normalise icon_grid to array (CS exports it as single object when multiple:false)
  const rawGrid = data.icon_grid
  const csCards = rawGrid ? (Array.isArray(rawGrid) ? rawGrid : [rawGrid]) : []

  return (
    <section className="icnon-grid-section">
      <div className="page-center">
        <div className="icnon-grid-main">
          <div className="icnon-grid-header">
            {data.heading
              ? <h2 dangerouslySetInnerHTML={{ __html: data.heading }} />
              : <MissingContent field="gf_icon_grid_with_tags_module.heading" />
            }
            {data.description
              ? <div dangerouslySetInnerHTML={{ __html: data.description }} />
              : <MissingContent field="gf_icon_grid_with_tags_module.description" />
            }
          </div>

          <div className="icon-grid">
            {csCards.length > 0
              ? csCards.map((card, i) => (
                  <div className="icon-grid-inner" key={i}>
                    <div dangerouslySetInnerHTML={{ __html: card.text ?? '' }} />
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

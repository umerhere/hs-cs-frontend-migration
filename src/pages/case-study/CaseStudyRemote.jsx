import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import MissingContent from '../../components/MissingContent/MissingContent.jsx'
import { usePageData } from '../../hooks/usePageData.js'
import { mapHeroFromCS } from '../../lib/mappers/heroMapper.js'
import './CaseStudyRemote.css'

export default function CaseStudyRemote() {
  const { data, loading } = usePageData('case-studies/remote')

  const heroProps = mapHeroFromCS(data?.gf_hero_v1_module)
  const bodyHtml  = data?.gf_rich_text_module?.content ?? null

  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          {!loading && (heroProps
            ? <HeroV1 {...heroProps} />
            : <MissingContent field="gf_hero_v1_module" />
          )}
          {!loading && (
            <section className="richtext-section case-study-content">
              <div className="page-center">
                {bodyHtml
                  ? <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
                  : <MissingContent field="gf_rich_text_module.content" />
                }
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

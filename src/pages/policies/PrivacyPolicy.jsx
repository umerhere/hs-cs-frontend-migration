import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import MissingContent from '../../components/MissingContent/MissingContent.jsx'
import { usePageData } from '../../hooks/usePageData.js'
import { mapHeroFromCS } from '../../lib/mappers/heroMapper.js'
import './Policy.css'

export default function PrivacyPolicy() {
  const { data, loading } = usePageData('policies/privacy-policy')
  const heroProps = mapHeroFromCS(data?.gf_hero_v1_module)
  const bodyHtml  = data?.gf_policy_content_module?.add?.content ?? null

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
            <section className="richtext-section policy-content">
              <div className="page-center">
                {bodyHtml
                  ? <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
                  : <MissingContent field="gf_policy_content_module.add.content" />
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

import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import IconGridSection from './sections/IconGridSection.jsx'
import DescriptionCtaSection from './sections/DescriptionCtaSection.jsx'
import MissingContent from '../../components/MissingContent/MissingContent.jsx'
import { usePageData } from '../../hooks/usePageData.js'
import { mapHeroFromCS } from '../../lib/mappers/heroMapper.js'
import { mapDescCtaFromCS } from '../../lib/mappers/descriptionCtaMapper.js'

export default function Home() {
  // Home page has an empty slug ("") in Contentstack
  const { data, loading } = usePageData('')

  const heroProps = mapHeroFromCS(data?.gf_hero_v1_module)
  const descCta   = mapDescCtaFromCS(data?.gf_description_with_ctas_module)

  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container body-container--home">
          {!loading && (heroProps
            ? <HeroV1 {...heroProps} />
            : <MissingContent field="gf_hero_v1_module" />
          )}
          <IconGridSection data={data?.gf_icon_grid_with_tags_module} loading={loading} />
          <DescriptionCtaSection data={descCta} loading={loading} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

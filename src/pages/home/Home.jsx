import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import IconGridSection from './sections/IconGridSection.jsx'
import DescriptionCtaSection from './sections/DescriptionCtaSection.jsx'
import { usePageData } from '../../hooks/usePageData.js'
import { mapHeroFromCS } from '../../lib/mappers/heroMapper.js'
import { mapDescCtaFromCS } from '../../lib/mappers/descriptionCtaMapper.js'

const HERO_FALLBACK = {
  tagLabel:   'Website Content Engineering',
  heading:    'Stop treating your CMS',
  headingSpan: ' like a scrapbook.',
  paragraphs: ['123456umar Most teams build website pages by hand-gluing content into \u201cblobs\u201d that can\u2019t be moved, searched, or scaled. We engineer the automated schemas and ETL pipes to turn your manual mess into <strong>structured, movable content data.</strong>\u00a0'],
  imagePosition: 'none',
  textAlign:  'left',
  ctas:       [{ text: "Let's Chat!", href: '/about/contact', style: 'black_arrow' }],
  hasListing: true,
  listing:    [],
  style:      { paddingTop: 190, paddingBottom: 120, mobilePaddingTop: 140, mobilePaddingBottom: 90 },
}

export default function Home() {
  // Home page has an empty slug ("") in Contentstack
  const { data } = usePageData('')

  const heroProps  = mapHeroFromCS(data?.gf_hero_v1_module) ?? HERO_FALLBACK
  const descCta    = mapDescCtaFromCS(data?.gf_description_with_ctas_module)

  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container body-container--home">
          <HeroV1 {...heroProps} />
          <IconGridSection data={data?.gf_icon_grid_with_tags_module} />
          <DescriptionCtaSection data={descCta} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

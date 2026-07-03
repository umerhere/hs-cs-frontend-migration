import HeroV1 from '../../../components/modules/HeroV1/HeroV1.jsx'

export default function HeroSection() {
  return (
    <HeroV1
      tagLabel="Website Content Engineering"
      heading="Stop treating your CMS"
      headingSpan=" like a scrapbook."
      paragraphs={[
        'Most teams build website pages by hand-gluing content into \u201cblobs\u201d that can\u2019t be moved, searched, or scaled. We engineer the automated schemas and ETL pipes to turn your manual mess into <strong>structured, movable content data.</strong>\u00a0',
      ]}
      imagePosition="none"
      textAlign="left"
      ctas={[{ text: "Let's Chat!", href: '/about/contact', style: 'black_arrow' }]}
      hasListing={true}
      listing={[
        
      ]}
      style={{ paddingTop: 190, paddingBottom: 120, mobilePaddingTop: 140, mobilePaddingBottom: 90 }}
    />
  )
}

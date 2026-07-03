import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import { usePageData } from '../../hooks/usePageData.js'
import { mapHeroFromCS } from '../../lib/mappers/heroMapper.js'
import './CaseStudyRemote.css'

const HERO_FALLBACK = {
  tagLabel:    'CASE STUDY',
  heading:     'Remote.com',
  headingSpan: ' Website Migration',
  paragraphs:  ['From HubSpot to Contentstack'],
  imagePosition: 'none',
  textAlign:   'left',
  style:       { paddingTop: 190, paddingBottom: 140, mobilePaddingTop: 190, mobilePaddingBottom: 90 },
}

const CASE_STUDY_HTML = `
  <h2>The Client</h2>
  <p>Remote.com is an all-in-one HR and payroll platform that helps companies hire, manage, and pay teams across the globe.</p>
  <p>Their website operates in 25+ languages, with content spanning marketing pages, a high-volume blog, product documentation, pricing, and resource hubs. The entire digital presence was built on HubSpot CMS.</p>

  <h2>The Challenge</h2>
  <p>Remote decided to move their website from HubSpot to Contentstack, a headless CMS better suited for their multi-language, composable content strategy.</p>
  <p>The problem was that nobody could tell them what the journey would actually involve. The site had accumulated 65,000+ entries across 75 content types, over 166 modules, 45 database tables, and 25+ languages.</p>
  <p>Components had been duplicated across teams. Similar modules existed in multiple slightly different versions. Over 20 internal stakeholders each owned different parts of one website.</p>
  <p>What they needed was a plan, and validation that the move could be programmatic.</p>

  <h2>The Approach</h2>
  <h3>Audit</h3>
  <p>Using proprietary audit tooling, Smuves scanned the entire portal and produced a structured inventory of every content type, module, template, language, asset, and entry. The audit mapped relationships between components and pages, surfacing overlaps and redundancies that years of hypergrowth had obscured.</p>

  <h3>Analysis</h3>
  <p>The team reviewed all 166 modules with Remote's stakeholders and classified each one. Some were migrated as-is. Others were retired with documented replacements. The most complex group were modules that needed to be consolidated.</p>
  <p>The analysis process identified overlaps, compared structures, and designed a single consolidated version for each in the new platform.</p>

  <h3>Architecture</h3>
  <p>With a clear picture of what was worth keeping, the team designed how everything would live in Contentstack. This meant defining reusable field groups, setting up relational structures between content types, extracting shared elements like color schemes and call-to-action patterns into standalone components, and building an SEO framework applied consistently across all page rendering content types.</p>
  <p>The localization strategy required particular care, mapping which content types had full, partial, or no language coverage.</p>

  <h3>Transformation</h3>
  <p>Before any migration script could be written, content transformation rules were documented covering how data would change as it moved between platforms.</p>

  <h3>Migration</h3>
  <p>After all was planned, the Smuves ETL was customized to programmatically extract HubSpot content, transform it, and load it into Contentstack — without the need for a developer on the client side.</p>
  <p>Pages, blogs, posts, authors, tags, assets, and HubDB tables became Contentstack content types. Relationships were preserved — authors and tags were correctly assigned to their respective blog posts. Assets were linked via Contentstack ID, removing any issues with missing visuals and media. Localized entries were created seamlessly in the background.</p>
  <p>After all entries were created, the team swept through all module and rich text links and connected them to entries.</p>

  <h2>The Result</h2>
  <p>With the content movement able to be done programmatically, the Remote.com team could then focus on the next steps of building out their front end layer to complete their transition from a monolithic system to headless.</p>
`

export default function CaseStudyRemote() {
  const { data } = usePageData('case-studies/remote')

  const heroProps  = mapHeroFromCS(data?.gf_hero_v1_module) ?? HERO_FALLBACK
  // CS: gf_rich_text_module.content — full rich text body of the case study
  const bodyHtml   = data?.gf_rich_text_module?.content || CASE_STUDY_HTML

  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1 {...heroProps} />
          <section className="richtext-section case-study-content">
            <div className="page-center" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import { usePageData } from '../../hooks/usePageData.js'
import { mapHeroFromCS } from '../../lib/mappers/heroMapper.js'
import './Migration.css'

const HERO_FALLBACK = {
  tagLabel:    'Programmatic Website Migrations',
  headingHtml: 'Make the Escape<br><span> from Legacy CMS.</span>',
  paragraphs:  ['<strong>Stop migrating your technical debt.</strong> We engineer the automated transition from bloated legacy monoliths to modern, headless architectures with 100% data integrity and zero \u201cwait, where did that page go?\u201d moments.'],
  imagePosition: 'none',
  textAlign:   'left',
  ctas: [
    { text: 'Join App Beta', href: '#', style: 'light-green-cta openPopup' },
    { text: "Let's Chat!", href: '/about/contact', style: 'light-green-cta' },
  ],
  style: { paddingTop: 190, paddingBottom: 120, mobilePaddingTop: 140, mobilePaddingBottom: 90 },
}

function QuoteSection() {
  return (
    <section className="richtext-section migration-quote">
      <div className="page-center">
        <blockquote>
          <p>&ldquo;Most agencies treat migration like a manual data entry internship. That&rsquo;s how metadata vanishes, relational links break, and your &lsquo;Content Freeze&rsquo; lasts for a literal season. We treat content as a data engineering problem. We don&rsquo;t just move your mess; we reform it into a masterpiece.&rdquo;</p>
        </blockquote>
        <p style={{ textAlign: 'right' }}>&mdash; Nicole Pereira, CEO</p>
      </div>
    </section>
  )
}

function HowWeDoItSection() {
  return (
    <section className="richtext-section migration-process">
      <div className="page-center">
        <h6>How We Do It</h6>

        <h2><span>1.</span> Structural Discovery (The &ldquo;Exorcism&rdquo;)</h2>
        <p>Before we move a single line of code, we have to see what we&rsquo;re dealing with. We don&rsquo;t just &ldquo;import&rdquo; your old database; we re-engineer the destination.</p>
        <ul>
          <li><strong>Legacy Architecture Audit:</strong> We poke around your current database dependencies to find the &ldquo;data debt&rdquo; and monolithic bottlenecks that have been slowing you down for years.</li>
          <li><strong>Relational Mapping:</strong> We take those rigid, page-based legacy blobs and break them down into clean, modular, relational schemas. It&rsquo;s built for high-scale performance, not just &ldquo;staying alive.&rdquo;</li>
        </ul>

        <h2><span>2.</span> Automated Transformation (The &ldquo;Power-Wash&rdquo;)</h2>
        <p>Once the blueprint is set, our proprietary ETL engines start scrubbing. Think of it as a deep-clean for your entire digital history.</p>
        <ul>
          <li><strong>Path Normalization:</strong> We programmatically hunt down absolute legacy links and turn them into relative, headless-ready paths. Your SEO survives; your broken links don&rsquo;t.</li>
          <li><strong>Design Token Alignment:</strong> We strip out the hard-coded CSS and inline &ldquo;style crimes&rdquo; from your old content, mapping everything to your modern design tokens.</li>
          <li><strong>Asset Logic Syncing:</strong> We rebuild the &ldquo;glue&rdquo; between your content and your media assets. Lottie files, images, and documents are all re-linked correctly.</li>
        </ul>

        <h2><span>3.</span> Verified Data Migration (The &ldquo;Handoff&rdquo;)</h2>
        <p>We don&rsquo;t just dump data. We run validation checks to ensure every record, relationship, and asset arrived correctly.</p>
        <ul>
          <li><strong>Entry Reconciliation:</strong> We compare source and destination counts per content type to confirm zero data loss.</li>
          <li><strong>Relational Integrity Checks:</strong> We verify that cross-references, author assignments, and tag relationships held through the move.</li>
          <li><strong>Post-Migration Report:</strong> You get a full audit trail of everything that moved, what changed, and what was deliberately left behind.</li>
        </ul>
      </div>
    </section>
  )
}

function MigrationCTA() {
  return (
    <section className="desc-cta-section migration-cta">
      <div className="page-center">
        <div className="desc-cta-main primary-gradient">
          <h2>Don&rsquo;t migrate your mess into a new system.</h2>
          <p>A new CMS won&rsquo;t fix a broken structure. It will just give you a faster way to scale it.</p>
          <p>We start with an audit, identify what&rsquo;s worth keeping, restructure what isn&rsquo;t, and build the pipelines to move everything cleanly.</p>
          <p>No manual copy-paste. No late-night surprises. No starting over in six months.</p>
          <div className="cta-area">
            <Link to="/about/contact" className="green-cta">Let&rsquo;s get your content moving. the right way</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Migration() {
  const { data } = usePageData('services/website-migration')
  const heroProps = mapHeroFromCS(data?.gf_hero_v1_module) ?? HERO_FALLBACK

  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1 {...heroProps} />
          <QuoteSection />
          <HowWeDoItSection />
          <MigrationCTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}

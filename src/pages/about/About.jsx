import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import MissingContent from '../../components/MissingContent/MissingContent.jsx'
import { usePageData } from '../../hooks/usePageData.js'
import { mapHeroFromCS } from '../../lib/mappers/heroMapper.js'
import './About.css'

/* ── Our Story (Left Text + Right Image) ─────────────────────── */
function OurStorySection({ html }) {
  return (
    <section className="left-right about-our-story">
      <div className="page-center">
        <div className="heading-area"></div>
        <div className="checklist-area">
          <div className="checklist-image">
            <img
              src="https://www.smuves.com/hs-fs/hubfs/AI-Generated%20Media/Images/Create%20a%20general%20technology%20image%20which%20indicates%20Top%20Tools%20for%20HubSpot%20Backups%20dont%20include%20nay%20text%20or%20numbers%20i%20need%20just%20graphics.png?width=1024&height=1024"
              alt="HubSpot CMS Bulk Editing"
              loading="lazy"
              width={600}
              height={600}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: 12 }}
            />
          </div>
          <div className="checklist-text">
            {html
              ? <div dangerouslySetInnerHTML={{ __html: html }} />
              : <MissingContent field="gf_right_text_left_image_module.checklist_area.content" />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Rich Text (What We Do / What We Believe) ────────────────── */
function WhatWeDoSection({ html }) {
  return (
    <section className="richtext-section about-what-we-do">
      <div className="page-center">
        {html
          ? <div dangerouslySetInnerHTML={{ __html: html }} />
          : <MissingContent field="gf_rich_text_module.content" />
        }
      </div>
    </section>
  )
}

/* ── Our Values (Left content right grid) ────────────────────── */
const VALUES = [
  {
    title: 'Curiosity',
    desc: 'We question how things are done and look for better ways to solve them.\u00a0',
    iconPath: 'M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z',
    viewBox: '0 0 512 512',
  },
  {
    title: 'Agency',
    desc: 'We take responsibility for outcomes, not just tasks. We don\u2019t wait to be told what to fix.\u00a0',
    iconPath: 'M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67C57.53 236.57 46.55 206.85 46.46 175.86c-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z',
    viewBox: '0 0 352 512',
  },
  {
    title: 'Judgment',
    desc: 'We make thoughtful decisions, especially when things aren\u2019t obvious. Not everything is a rule \u2014 some things require experience.\u00a0',
    iconPath: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
    viewBox: '0 0 512 512',
  },
  {
    title: 'Teamwork',
    desc: 'We work closely, communicate clearly, and build with others \u2014 not in isolation.\u00a0',
    iconPath: 'M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z',
    viewBox: '0 0 640 512',
  },
]

function OurValuesSection() {
  return (
    <section className="icon-grid-section about-values">
      <div className="page-center">
        <div className="icon-grid-main-outer">
          <div className="icon-grid-main">
            <div className="icon-grid-header">
              <h2>Our Values</h2>
              <p>&nbsp;We keep this simple and practical.</p>
            </div>
            <div className="icon-grid four_column">
              {VALUES.map((v) => (
                <div className="icon-grid-inner normal" key={v.title}>
                  <div className="icon-tag">
                    <span className="hs_cos_wrapper_type_icon">
                      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox={v.viewBox} aria-hidden="true" width="21" height="21" fill="currentColor">
                        <path d={v.iconPath} />
                      </svg>
                    </span>
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Timeline (Our Journey) ──────────────────────────────────── */
const TIMELINE_ITEMS = [
  { marker: '25', year: '2025', title: 'Beta Launch', desc: 'Launched our beta program with 100+ early adopters' },
  { marker: '25', year: '2025', title: 'Founded', desc: 'Started building Smuves to solve HubSpot data management challenges' },
  { marker: '25', year: '2025', title: 'First Prototype', desc: 'Developed the initial bulk editing prototype' },
]

function TimelineSection() {
  return (
    <section className="timeline-section about-timeline">
      <div className="page-center">
        <div className="timeline-main">
          <div className="timeline-header">
            <h2>Our Journey</h2>
            <p>Key milestones in building Smuves</p>
          </div>
          <div className="timeline">
            {TIMELINE_ITEMS.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-marker">{item.marker}</div>
                <div className="timeline-content">
                  <span className="year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Team Grid ───────────────────────────────────────────────── */
const TEAM = [
  {
    name: 'Nicole Pereira',
    role: 'Founder',
    fun: 'Coffee, Chocolate, & Video Games!',
    img: 'https://www.smuves.com/hs-fs/hubfs/Headshots/Nicole%20Pereira%20Headshot.png?width=600&height=600',
    alt: 'Nicole Pereira Headshot',
  },
  {
    name: 'Umar Aslam',
    role: 'Full-stack Developer',
    fun: 'Football for life',
    img: 'https://www.smuves.com/hs-fs/hubfs/Headshots/Umar%20Aslam%20Headshot.png?width=600&height=600',
    alt: 'Umar Aslam Headshot',
  },
  {
    name: 'Pavan Dasari',
    role: 'Sr. Product Manager',
    fun: 'Product guy by day, playlist curator by night',
    img: 'https://www.smuves.com/hs-fs/hubfs/Headshots/Pavan%20Dasari%20headshot.png?width=600&height=600',
    alt: 'Pavan Dasari headshot',
  },
  {
    name: 'Hamza Aslam',
    role: 'Sr. Software Engineer',
    fun: 'Makes things, breaks things',
    img: 'https://www.smuves.com/hs-fs/hubfs/Headshots/16.png?width=600&height=600',
    alt: 'Hamza Aslam Headshot',
  },
]

function TeamGridSection() {
  return (
    <section className="image-grid-section about-team">
      <div className="page-center">
        <div className="image-grid-main">
          <div className="image-grid-header">
            <h2>Meet the Team</h2>
            <p>The engineers behind the scenes.</p>
            <p>The ones building the systems, testing the edge cases, and making sure your content doesn&rsquo;t fall apart when it moves.</p>
            <p>So your team doesn&rsquo;t have to.</p>
          </div>
          <div className="image-grid">
            {TEAM.map((member) => (
              <div className="image-grid-inner" key={member.name}>
                <div className="image-tag">
                  <img src={member.img} alt={member.alt} loading="lazy" />
                </div>
                <h5>{member.name}</h5>
                <h6>{member.role}</h6>
                <p>{member.fun}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Page assembly ───────────────────────────────────────────── */
export default function About() {
  const { data, loading } = usePageData('about')
  const heroProps = mapHeroFromCS(data?.gf_hero_v1_module)

  const ourStoryHtml = data?.gf_right_text_left_image_module?.checklist_area?.content ?? null
  const whatWeDoHtml = data?.gf_rich_text_module?.content ?? null

  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          {!loading && (heroProps
            ? <HeroV1 {...heroProps} />
            : <MissingContent field="gf_hero_v1_module" />
          )}
          <OurStorySection html={ourStoryHtml} />
          <WhatWeDoSection html={whatWeDoHtml} />
          <OurValuesSection />
          <TimelineSection />
          <TeamGridSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

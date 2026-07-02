import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import './Engineering.css'

const BLOG_POSTS = [
  {
    title: 'How Smuves Exports 100,000 Records Without Running Out of Memory',
    excerpt: 'Exporting 2,000 HubSpot records from Smuves used to work fine. Exporting 20,000 would crash the worker. Exporting 100,000 was not even worth attempting. The edge cases kept stacking up. This is how we fixed it.',
    author: 'Umar Aslam',
    authorHref: 'https://www.smuves.com/blog/author/umar-aslam',
    date: 'June 30, 2026',
    href: 'https://www.smuves.com/blog/how-smuves-exports-100000-records-without-running-out-of-memory',
    featured: true,
  },
  {
    title: 'How Smuves Made Search 200 Times Faster with Typesense',
    excerpt: 'Our original search was getting slow at scale. We switched to Typesense and the difference was staggering — here is what we learned and how we implemented it.',
    author: 'Smuves',
    authorHref: 'https://www.smuves.com/blog/author/smuves',
    date: 'April 17, 2026',
    href: 'https://www.smuves.com/blog/how-smuves-made-search-200-times-faster-with-typesense',
    featured: false,
  },
]

const CAL_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 2v4"/><path d="M16 2v4"/>
    <rect width="18" height="18" x="3" y="4" rx="2"/>
    <path d="M3 10h18"/>
  </svg>
)
const CLOCK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 6v6l4 2"/>
    <circle cx="12" cy="12" r="10"/>
  </svg>
)

export default function Engineering() {
  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1
            heading="Smuves"
            headingSpan=" Engineering"
            paragraphs={['Deep dives into HubSpot CMS and the engineering behind content tools that actually scale.']}
            imagePosition="none"
            textAlign="left"
            style={{ paddingTop: 109, paddingBottom: 109, mobilePaddingTop: 109, mobilePaddingBottom: 109 }}
          />
          <section className="blog-listing engineering-listing">
            <div className="page-center">
              <div className="blog-grid">
                {BLOG_POSTS.map((post) => (
                  <div className={`blog-card${post.featured ? ' featured' : ''} no-image`} key={post.href}>
                    <div className="blog-card-inner">
                      <div className="card-content">
                        <a href={post.href}><h2>{post.title}</h2></a>
                        <p>{post.excerpt}</p>
                        <div className="blog-details">
                          <span className="blog-author">
                            <a href={post.authorHref} rel="author">{post.author}</a>
                          </span>
                          <span className="blog-date">
                            {CAL_ICON} {post.date}
                          </span>
                          <span className="blog-read-time">
                            {CLOCK_ICON} 5 min read
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

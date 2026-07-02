import './IconGridSection.css'

const iconGridData = {
  heading: 'We don\u2019t do \u201cCreative.\u201d<br/>We do Engineering.',
  description: [
    'Other agencies want to redesign your brand. We just want to move your website data... perfectly.',
    'We\u2019re the technical \u201cforce multiplier\u201d for in-house dev teams and design-heavy agencies who have the vision handled but need the raw horsepower to execute a high-stakes migration.',
  ],
  cards: [
    {
      icon: (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
          <g id="Search1_layer">
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </g>
        </svg>
      ),
      title: 'Content Audit',
      body: '<strong>Most website migrations fail because nobody checked the crawlspace.</strong> We find where the legacy bodies are buried and build a roadmap that actually holds up.\u00a0',
    },
    {
      icon: (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
          <g id="Layer_Group2_layer">
            <path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
          </g>
        </svg>
      ),
      title: 'Content Architecture',
      body: '<strong>Manual cleanup is a soul-crushing waste of time.</strong> We build ETL engines to programmatically relink, restructure, and sanitize your content entries for good.\u00a0',
    },
    {
      icon: (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" aria-hidden="true">
          <g id="Code3_layer">
            <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.2-46.6c4.1-4.4 3.8-11.3-.7-15.3L163.2 256l44.3-81.4c4.4-4 4.8-10.8.7-15.3l-43.2-46.6c-4.6-5-12.4-4.8-16.8.4l-72.2 82.4c-3.6 4.1-3.6 10.2 0 14.3L149 247.3c4.4 5.2 12.2 5.4 16.8.4l-.9-48.4zm292.2.4l72.2-82.4c3.6-4.1 3.6-10.2 0-14.3L475 247.3c-4.4-5.2-12.2-5.4-16.8-.4l-43.2 46.6c-4.1 4.4-3.8 11.3.7 15.3L476.8 256l-44.3 81.4c-4.4 4-4.8 10.8-.7 15.3l43.2 46.6c4.6 5 12.4 4.8 16.8-.4z" />
          </g>
        </svg>
      ),
      title: 'Content Migration',
      body: '<strong>Stop \u201clifting and shifting\u201d your technical debt.</strong> We move high-value content datasets to modern stacks with zero data loss and zero \u201cwhere did that page go?\u201d moments.\u00a0',
    },
  ],
}

export default function IconGridSection() {
  return (
    <section className="icnon-grid-section">
      <div className="page-center">
        <div className="icnon-grid-main">
          <div className="icnon-grid-header">
            <h2 dangerouslySetInnerHTML={{ __html: iconGridData.heading }} />
            {iconGridData.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="icon-grid">
            {iconGridData.cards.map((card) => (
              <div className="icon-grid-inner" key={card.title}>
                <div className="icon-tag">
                  <span className="icon-svg">{card.icon}</span>
                  <span className="tag-label" style={{ display: 'none' }}></span>
                </div>
                <h3>{card.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: card.body }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

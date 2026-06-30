import './HeroV1.css';

export interface HeroV1Props {
  tagLabel?: string;
  heading: string;
  headingSecondLine?: string;
  description?: string;
  listing?: string[];
  ctaText?: string;
  ctaHref?: string;
  showCodeArt?: boolean;
}

const CHECK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" />
  </svg>
);

const ARROW_NE = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>
);

const ZAP_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
);

export default function HeroV1({
  tagLabel,
  heading,
  headingSecondLine,
  description,
  listing = [],
  ctaText,
  ctaHref = '#',
  showCodeArt = false,
}: HeroV1Props) {
  return (
    <section className="hero-v1-section">
      <div className="page-center">
        <div className={`hero-v1__layout${showCodeArt ? ' hero-v1__layout--two-col' : ''}`}>

          <div className="hero-v1__left">
            {tagLabel && (
              <div className="hero-v1__eyebrow-area">
                <div className="hero-v1__pill">{ZAP_SVG}<span>{tagLabel}</span></div>
              </div>
            )}

            <div className="hero-v1__heading-area">
              <h1>
                {heading}
                {headingSecondLine && <><br /><em>{headingSecondLine}</em></>}
              </h1>
              {description && (
                <div
                  className="hero-v1__description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
              {ctaText && (
                <div className="hero-v1__cta-row">
                  <a href={ctaHref} className="black_arrow">{ctaText}</a>
                </div>
              )}
            </div>

            {listing.length > 0 && (
              <div className="hero-v1__checklist-card">
                <div className="hero-v1__checklist-card-arrow">{ARROW_NE}</div>
                <ul>
                  {listing.map((item) => (
                    <li key={item}>
                      <span className="hero-v1__check-icon">{CHECK_ICON}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {showCodeArt && (
            <div className="hero-v1__right" aria-hidden="true">
              <div className="hero-v1__code-art">
                <span className="code-brace-left">{'{'}</span>
                <div className="code-inner">
                  <span className="code-prompt">&gt; _</span>
                  <span className="code-dash">—</span>
                </div>
                <span className="code-brace-right">{'}'}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

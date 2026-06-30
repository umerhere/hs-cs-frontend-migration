import './DescriptionWithCTAs.css';

interface DescriptionWithCTAsProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function DescriptionWithCTAs({
  heading = "Your content is great...\nbut your architecture is a disaster.",
  description = '<p>Let\'s be real: your current build is a monolithic mess of broken links and "we\'ll fix it later" promises. "Later" is now.</p><p>We build the custom ETL engines that turn your content chaos into a structured asset. No black-box scripts, no broken metadata, and zero "Oops, we lost the JP blog" moments.</p>',
  ctaText = "Let's Fix it Now!",
  ctaHref = '/about/contact',
}: DescriptionWithCTAsProps) {
  const headingLines = heading.split('\n');
  return (
    <section className="desc-cta-section">
      <div className="page-center">
        <div className="desc-cta-inner">
          <h2>
            {headingLines.map((line, i) => (
              <span key={i}>{line}{i < headingLines.length - 1 && <br />}</span>
            ))}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className="desc-cta-inner__cta-area">
            <a href={ctaHref} className="green-cta">{ctaText}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import './Panel.css';

interface BoxedItem { heading: string; text: string; }
interface PanelProps {
  heading: string;
  secondLine?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  boxedItems?: BoxedItem[];
  colorChoice?: string;
}

export default function Panel({ heading, secondLine, description, imageSrc, imageAlt, imagePosition = 'right', boxedItems = [], colorChoice = 'blue' }: PanelProps) {
  const isReversed = imagePosition === 'left';
  return (
    <section className={`panel-section panel-section--${colorChoice}`}>
      <div className="page-center">
        <div className={`panel-layout${isReversed ? ' panel-layout--reversed' : ''}`}>
          <div className="panel-text">
            <h2>{heading}</h2>
            {secondLine && <p className="panel-second-line">{secondLine}</p>}
            {description && <div className="panel-desc" dangerouslySetInnerHTML={{ __html: description }} />}
            {boxedItems.length > 0 && (
              <div className="panel-boxes">
                {boxedItems.map((b, i) => (
                  <div key={i} className="panel-box">
                    <h4>{b.heading}</h4>
                    <p>{b.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {imageSrc && (
            <div className="panel-image">
              <img src={imageSrc} alt={imageAlt || heading} loading="lazy" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import './Timeline.css';
interface TimelineItem { year: string; heading: string; text: string; }
interface TimelineProps { heading?: string; description?: string; items: TimelineItem[]; }
export default function Timeline({ heading = 'Our Journey', description, items }: TimelineProps) {
  return (
    <section className="timeline-section">
      <div className="page-center">
        <div className="timeline-header">
          <h2>{heading}</h2>
          {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
        </div>
        <div className="timeline-list">
          {items.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-connector"><div className="timeline-dot" /></div>
              <div className="timeline-content">
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FaSearch, FaLayerGroup, FaCode, FaTable, FaUpload, FaChartBar } from 'react-icons/fa';
import './IconGrid.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  search: <FaSearch />,
  layers: <FaLayerGroup />,
  code: <FaCode />,
  table: <FaTable />,
  upload: <FaUpload />,
  chart: <FaChartBar />,
};

const DEFAULT_ITEMS = [
  {
    iconName: 'search',
    heading: 'Content Audit',
    body: '<strong>Most website migrations fail because nobody checked the crawlspace.</strong> We find where the legacy bodies are buried and build a roadmap that actually holds up.',
  },
  {
    iconName: 'layers',
    heading: 'Content Architecture',
    body: '<strong>Manual cleanup is a soul-crushing waste of time.</strong> We build ETL engines to programmatically relink, restructure, and sanitize your content entries for good.',
  },
  {
    iconName: 'code',
    heading: 'Content Migration',
    body: '<strong>Stop "lifting and shifting" your technical debt.</strong> We move high-value content datasets to modern stacks with zero data loss and zero "where did that page go?" moments.',
  },
];

interface IconGridItem { iconName: string; heading: string; body: string; }
interface IconGridProps {
  heading?: string;
  description?: string;
  items?: IconGridItem[];
}

export default function IconGrid({ heading, description, items }: IconGridProps) {
  const cards = items ?? DEFAULT_ITEMS;
  return (
    <section className="icon-grid-section">
      <div className="page-center">
        <div className="icon-grid__header">
          {heading ? (
            <>
              <h2 dangerouslySetInnerHTML={{ __html: heading }} />
              {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
            </>
          ) : (
            <>
              <h2>
                We don't do "Creative."<br />
                We do Engineering.
              </h2>
              <p>
                Other agencies want to redesign your brand. We just want to move your website
                data... perfectly.
              </p>
              <p>
                We're the technical "force multiplier" for in-house dev teams and design-heavy
                agencies who have the vision handled but need the raw horsepower to execute a
                high-stakes migration.
              </p>
            </>
          )}
        </div>

        <div className="icon-grid__grid">
          {cards.map((item, i) => (
            <div className="icon-grid__card" key={i}>
              <div className="icon-grid__icon">{ICON_MAP[item.iconName] ?? <FaCode />}</div>
              <h3 className="icon-grid__card-heading">{item.heading}</h3>
              <p className="icon-grid__card-body" dangerouslySetInnerHTML={{ __html: item.body }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

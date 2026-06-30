import './MultiColumnContent.css';

interface Column {
  image: { src: string; alt: string };
  heading: string;
  body: string;
}

const COLUMNS: Column[] = [
  {
    image: {
      src: '/images/grayscale-mountain.png',
      alt: '',
    },
    heading: 'Feature one',
    body: "Use text and images to tell your company's story. Explain what makes your product or service extraordinary.",
  },
  {
    image: {
      src: '/images/grayscale-mountain.png',
      alt: '',
    },
    heading: 'Feature two',
    body: "Use text and images to tell your company's story. Explain what makes your product or service extraordinary.",
  },
  {
    image: {
      src: '/images/grayscale-mountain.png',
      alt: '',
    },
    heading: 'Feature three',
    body: "Use text and images to tell your company's story. Explain what makes your product or service extraordinary.",
  },
];

export default function MultiColumnContent() {
  return (
    <div
      className="dnd-section multi-col-section"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <div className="row-fluid">
        {COLUMNS.map((col, i) => (
          <div className="dnd-column span4" key={i}>

            {/* Row 1 — image */}
            <div className="dnd-row">
              <div className="hs_cos_wrapper_type_linked_image">
                <img
                  src={col.image.src}
                  alt={col.image.alt}
                  style={{ maxWidth: 605, maxHeight: 451, width: '100%', height: 'auto' }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Row 2 — rich text */}
            <div className="dnd-row">
              <div className="hs_cos_wrapper_type_rich_text">
                <h3>{col.heading}</h3>
                <p>{col.body}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

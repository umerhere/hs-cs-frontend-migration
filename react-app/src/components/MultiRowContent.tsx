import './MultiRowContent.css';

export default function MultiRowContent() {
  return (
    <div className="dnd-section multi-row-section valign-middle">
      <div className="row-fluid">

        {/* Left column — rich text (span6) */}
        <div className="dnd-column span6">
          <div className="dnd-row">
            <div className="hs_cos_wrapper_type_rich_text">
              <h2>Provide more details here.</h2>
              <p>
                Use text and images to tell your company's story. Explain what
                makes your product or service extraordinary.
              </p>
            </div>
          </div>
        </div>

        {/* Right column — image (span6) */}
        <div className="dnd-column span6">
          <div className="dnd-row">
            <div className="hs_cos_wrapper_type_linked_image">
              <img
                src="/images/grayscale-mountain.png"
                alt="Stock placeholder image with grayscale geometrical mountain landscape"
                style={{ maxWidth: 605, maxHeight: 451, width: '100%', height: 'auto' }}
                loading="eager"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

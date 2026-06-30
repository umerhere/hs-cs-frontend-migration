import './CallToAction.css';

export default function CallToAction() {
  return (
    <div
      className="dnd-section cta-section"
      style={{
        backgroundImage: 'url(/images/large-placeholder-image.png)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className="row-fluid">
        <div className="dnd-column span12">

          {/* Text row — pb:40px desktop, 0 mobile */}
          <div className="dnd-row cta-section__text-row">
            <div className="hs_cos_wrapper_type_rich_text">
              <div style={{ textAlign: 'center' }}>
                <h2>Provide an excerpt here</h2>
                <p>
                  Use text and images to tell your company's story. Explain what
                  makes your product or service extraordinary.
                </p>
              </div>
            </div>
          </div>

          {/* Button row */}
          <div className="dnd-row">
            <div className="hs_cos_wrapper_type_module">
              <div className="button-wrapper">
                <a href="#" className="button">
                  Get started
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

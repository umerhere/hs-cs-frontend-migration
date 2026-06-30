import './HeroBanner.css';

export default function HeroBanner() {
  return (
    <div
      className="dnd-section hero-banner-section valign-middle"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <div className="row-fluid">

        {/* Left column — image (span6) */}
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

        {/* Right column — rich text + form (span6) */}
        <div className="dnd-column span6">

          {/* Row 1 — rich text */}
          <div className="dnd-row">
            <div className="hs_cos_wrapper_type_rich_text">
              <h1>This is your main headline.</h1>
              <p>Use this space to tell everyone about what you have to offer.</p>
            </div>
          </div>

          {/* Row 2 — form placeholder */}
          <div className="dnd-row">
            <div className="hs_cos_wrapper_type_form hero-banner-section__form">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="hero-form"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="hero-form__input"
                />
                <button type="submit" className="button hero-form__submit primary-gradient-cta">
                  Get started
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

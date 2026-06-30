import './GlobalCTA.css';

export default function GlobalCTA() {
  return (
    <section className="global-cta-section">
      <div className="page-center">
        <div className="global-cta-inner primary-gradient">
          <h2>Ready to take control of your website content?</h2>
          <p>Join hundreds of teams already using Smuves to manage, migrate, and modernize their HubSpot content.</p>
          <div className="global-cta-buttons">
            <a href="/about/contact" className="cta-white-primary">Let's Chat!</a>
            <a href="/product" className="cta-white-secondary">See the Product</a>
          </div>
        </div>
      </div>
    </section>
  );
}

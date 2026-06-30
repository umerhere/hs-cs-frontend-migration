import './PricingCards.css';

interface BulletPoint { text_field: string; enabled: boolean; icon_cross?: object; }
interface PricingTier {
  heading: string;
  price: string;
  price_line: string;
  description: string;
  button_text: string;
  most_popular: boolean;
  per_month: boolean;
  bullet_points: BulletPoint[];
}

interface PricingCardsProps { tiers: PricingTier[]; }

export default function PricingCards({ tiers }: PricingCardsProps) {
  return (
    <section className="pricing-section">
      <div className="page-center">
        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div key={tier.heading} className={`pricing-card${tier.most_popular ? ' pricing-card--popular' : ''}`}>
              {tier.most_popular && <div className="pricing-badge">Most Popular</div>}
              <div className="pricing-card__top">
                <h3>{tier.heading}</h3>
                <div className="pricing-price">
                  <span className="pricing-price__amount">{tier.price}</span>
                  {tier.per_month && <span className="pricing-price__period">/mo</span>}
                </div>
                <p className="pricing-price-line">{tier.price_line}</p>
                <div className="pricing-desc" dangerouslySetInnerHTML={{ __html: tier.description }} />
              </div>
              <a href="#" className={tier.most_popular ? 'green-cta pricing-cta' : 'pricing-cta pricing-cta--outline'}>
                {tier.button_text}
              </a>
              <ul className="pricing-features">
                {tier.bullet_points.map((bp, i) => (
                  <li key={i} className={bp.icon_cross ? 'pricing-features__item--cross' : ''}>
                    <span className="pricing-features__icon">
                      {bp.icon_cross ? '✕' : '✓'}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: bp.text_field }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

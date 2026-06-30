import { useState } from 'react';
import './FAQ.css';

interface FAQItem { question: string; answer: string; }

interface FAQProps {
  heading?: string;
  description?: string;
  items: FAQItem[];
}

export default function FAQ({ heading = 'Frequently Asked Questions', description, items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="faq-section">
      <div className="page-center">
        <div className="faq-header">
          <h2>{heading}</h2>
          {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.question}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open === i ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {open === i && (
                <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.answer }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

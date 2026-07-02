import { useState } from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import './Contact.css'

const FAQS = [
  {
    q: "How does Smuves integrate with HubSpot?",
    a: "Smuves uses HubSpot's CMS APIs to securely connect to your CMS data. We handle authentication and data retrieval without requiring any code changes on your end.",
  },
  {
    q: "What's included in the app beta program?",
    a: "Beta users get free access to all features, priority support, and the ability to influence our product roadmap with feedback.",
  },
]

function ContactFormSection() {
  const [form, setForm] = useState({ firstname: '', lastname: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact-section">
      <div className="page-center">
        <div className="contact-main">
          <div className="contact-header"></div>
          <div className="contact">
            <div className="contact-inner">
              <h3>Send us a Message</h3>
              {submitted ? (
                <p className="success-msg">Thanks! We'll be in touch within 24 hours.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstname">First name</label>
                      <input id="firstname" name="firstname" type="text" className="hs-input" placeholder="First name" value={form.firstname} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastname">Last name</label>
                      <input id="lastname" name="lastname" type="text" className="hs-input" placeholder="Last name" value={form.lastname} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" className="hs-input" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" className="hs-input" placeholder="How can we help?" rows={5} value={form.message} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="green-cta">Send Message</button>
                </form>
              )}
              <p className="below-text">We typically respond within 24 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SupportSection() {
  return (
    <section className="support-section">
      <div className="page-center">
        <div className="support-main">
          <div className="support-header">
            <h2>Other Ways to Reach Us</h2>
          </div>
          <div className="support">
            <div className="support-inner">
              <div className="support-inner2">
                <div className="support-icon">
                  <span className="hs_cos_wrapper_type_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="21" height="21" fill="currentColor"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6.6 338.65L338 274.78l-16.75 16.75c-13.97 13.97-36.55 13.97-50.52 0L254 274.78 134.6 402.65A15.94 15.94 0 0 1 123 408H48c-8.84 0-16-7.16-16-16v-16.91l108.74-108.86c-5.35-14.52-2.85-31.44 7.51-41.79l16.75-16.75L54.61 101.8C56.31 100.64 58.32 100 60.5 100H451.5c2.18 0 4.19.64 5.89 1.8L347 208.69c10.36 10.35 12.86 27.27 7.51 41.79L463 359.34V392c0 8.84-7.16 16-16 16h-75c-4.21 0-8.28-1.68-11.28-4.67z"/></svg>
                  </span>
                </div>
                <div className="support-text">
                  <h4 style={{ margin: 0 }}>Email Support</h4>
                  <p>Get help via email&nbsp;</p>
                </div>
              </div>
              <div className="support-inner2">
                <div className="support-icon">
                  <span className="hs_cos_wrapper_type_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="21" height="21" fill="currentColor"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>
                  </span>
                </div>
                <div className="support-text">
                  <h5>24/7</h5>
                  <div className="support-email mobile">
                    <a href="mailto:support@smuves.com">support@smuves.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="support-email desktop">
              <a href="mailto:support@smuves.com">support@smuves.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section className="FAQ-section">
      <div className="page-center">
        <div className="FAQ-main">
          <div className="FAQ-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions.</p>
          </div>
          <div className="FAQ">
            {FAQS.map((item, i) => (
              <div className={`FAQ-inner${open === i ? ' active' : ''}`} key={i} onClick={() => setOpen(open === i ? null : i)}>
                <h4 className="faq-question">
                  {item.q}
                  <span className="faq-toggle">{open === i ? '−' : '+'}</span>
                </h4>
                <div className="faq-answer" style={{ maxHeight: open === i ? 200 : 0, opacity: open === i ? 1 : 0 }}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1
            heading="Contact &"
            headingSpan=" Support"
            paragraphs={["Need help or have questions? We're here to support you every step of the way."]}
            imagePosition="none"
            textAlign="left"
            style={{ paddingTop: 190, paddingBottom: 140, mobilePaddingTop: 190, mobilePaddingBottom: 90 }}
          />
          <ContactFormSection />
          <SupportSection />
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

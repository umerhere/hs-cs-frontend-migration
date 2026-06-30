import './ContactForm.css';
export default function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="page-center">
        <div className="contact-form-wrapper">
          <form onSubmit={(e) => e.preventDefault()} className="contact-form">
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label>First Name</label>
                <input type="text" placeholder="Nicole" />
              </div>
              <div className="contact-form__field">
                <label>Last Name</label>
                <input type="text" placeholder="Pereira" />
              </div>
            </div>
            <div className="contact-form__field">
              <label>Email</label>
              <input type="email" placeholder="hello@smuves.com" />
            </div>
            <div className="contact-form__field">
              <label>Company</label>
              <input type="text" placeholder="Smuves" />
            </div>
            <div className="contact-form__field">
              <label>Message</label>
              <textarea rows={5} placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="green-cta contact-form__submit">Send Message</button>
          </form>
          <div className="contact-form__success-note">
            We'll get back to you as fast as our digital legs will carry us!
          </div>
        </div>
      </div>
    </section>
  );
}

import Layout from '../../layouts/Layout';
import HeroV1 from '../../components/HeroV1';
import ContactForm from '../../sections/ContactForm';
import FAQ from '../../sections/FAQ';

const FAQ_ITEMS = [
  { question: 'How does Smuves integrate with HubSpot?', answer: '<p>Smuves uses HubSpot\'s CMS APIs to securely connect to your CMS data.</p>' },
  { question: 'What is included in your support plans?', answer: '<p>All plans include email support. Pro and Enterprise plans include priority support with faster response times.</p>' },
  { question: 'How quickly will I get a response?', answer: '<p>We typically respond within 1 business day. Enterprise customers get priority response times.</p>' },
];

export default function ContactPage() {
  return (
    <Layout>
      <HeroV1
        heading="Contact &"
        headingSecondLine="Support"
        description="<p>Need help or have questions? We're here to support you every step of the way.</p>"
      />
      <ContactForm />
      <section style={{ background: '#F5F7FA', padding: '70px 0' }}>
        <div className="page-center" style={{ textAlign: 'center' }}>
          <h2 style={{ fontWeight: 700, color: '#111827', marginBottom: 32 }}>Other Ways to Reach Us</h2>
          <div style={{ display: 'inline-block', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '24px 32px', textAlign: 'left' }}>
            <h4 style={{ margin: '0 0 8px', fontWeight: 700 }}>Email Support</h4>
            <p style={{ margin: 0, color: '#6b7280' }}>Get help via email — <a href="mailto:support@smuves.com" style={{ color: '#00C6B2' }}>support@smuves.com</a></p>
          </div>
        </div>
      </section>
      <FAQ heading="Frequently Asked Questions" description="<p>Quick answers to common questions.</p>" items={FAQ_ITEMS} />
    </Layout>
  );
}

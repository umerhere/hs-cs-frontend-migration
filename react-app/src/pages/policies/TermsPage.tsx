import Layout from '../../layouts/Layout';
import HeroV1 from '../../components/HeroV1';
import RichText from '../../sections/RichText';

const TERMS_CONTENT = `<h2>Terms of Use</h2>
<p>Last updated: April 2026</p>
<h3>Acceptance of Terms</h3>
<p>By accessing and using Smuves, you accept and agree to be bound by these Terms of Use.</p>
<h3>Use of Service</h3>
<p>You may use Smuves only for lawful purposes and in accordance with these Terms. You agree not to use Smuves in any way that violates applicable law or regulation.</p>
<h3>Intellectual Property</h3>
<p>The Smuves platform and its original content, features, and functionality are owned by Smuves and are protected by international copyright, trademark, and other intellectual property laws.</p>
<h3>Limitation of Liability</h3>
<p>In no event shall Smuves be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
<h3>Contact Us</h3>
<p>For questions about these Terms, contact us at <a href="mailto:legal@smuves.com">legal@smuves.com</a>.</p>`;

export default function TermsPage() {
  return (
    <Layout>
      <HeroV1 heading="Terms" headingSecondLine="of Use" />
      <RichText content={TERMS_CONTENT} />
    </Layout>
  );
}

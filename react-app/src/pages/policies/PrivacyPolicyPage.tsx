import Layout from '../../layouts/Layout';
import HeroV1 from '../../components/HeroV1';
import RichText from '../../sections/RichText';

const POLICY_CONTENT = `<h2>Privacy Policy</h2>
<p>Last updated: April 2026</p>
<h3>Information We Collect</h3>
<p>We collect information you provide directly to us, such as when you create an account, contact us for support, or use our services.</p>
<h3>How We Use Your Information</h3>
<p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
<h3>Information Sharing</h3>
<p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform.</p>
<h3>Data Security</h3>
<p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
<h3>Contact Us</h3>
<p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@smuves.com">privacy@smuves.com</a>.</p>`;

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <HeroV1 heading="Privacy" headingSecondLine="Policy" />
      <RichText content={POLICY_CONTENT} />
    </Layout>
  );
}

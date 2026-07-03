import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import { usePageData } from '../../hooks/usePageData.js'
import { mapHeroFromCS } from '../../lib/mappers/heroMapper.js'
import './Policy.css'

const HERO_FALLBACK = {
  heading: 'Privacy',
  headingSpan: ' Policy',
  paragraphs: ['How we collect, use, and protect your information.'],
  imagePosition: 'none',
  textAlign: 'left',
  style: { paddingTop: 190, paddingBottom: 140, mobilePaddingTop: 190, mobilePaddingBottom: 90 },
}

const CONTENT = `
<h6>Last updated: May 2026</h6>

<h2><span>1.</span> Overview</h2>
<p>This Privacy Policy explains how <strong>Studio Glos LLC</strong>, dba <strong>Smuves</strong> ("we", "us", or "our") collects, uses, and protects information when you use Smuves (the "Service"). It covers two different kinds of data: information about you as a user of the Service, and the data inside the accounts you connect to the Service, such as your HubSpot portal. These are treated differently, as explained below.</p>

<h2><span>2.</span> What Information We Collect</h2>
<p>For the following information, we act as the data controller. We collect:</p>
<ul>
  <li><strong>Account Data:</strong> name, email, and password (stored hashed)</li>
  <li><strong>Usage Data:</strong> IP address, browser type, device information, and how you interact with the Service</li>
  <li><strong>Cookies and similar technologies:</strong> For authentication, session handling, and analytics</li>
  <li><strong>Support Data:</strong> Information you provide when you contact us</li>
</ul>

<h2><span>3.</span> Data in Your Connected Accounts</h2>
<p>When you connect a platform such as HubSpot, you authorize the Service to access data in that account through OAuth, within the scopes you approve. This may include your CMS content, pages, blog posts, templates, forms, and related records, which can contain personal data belonging to you or to your own customers.</p>
<p>We access and process this data only to provide the Service to you and on your instructions. For this data we act as a data processor, and you are the controller. We do not use it for our own purposes, and we do not sell it.</p>

<h2><span>4.</span> How We Use Your Information</h2>
<p>We use your data to:</p>
<ul>
  <li>Provide, operate, and improve the Service</li>
  <li>Respond to support requests</li>
  <li>Send system and account notifications</li>
  <li>Understand usage trends and keep the Service reliable</li>
  <li>Comply with legal obligations</li>
</ul>

<h2><span>5.</span> Legal Basis (GDPR)</h2>
<p>Where the GDPR applies, we process personal data based on:</p>
<ul>
  <li>Your <strong>consent</strong> (for example, cookies or marketing)</li>
  <li><strong>Contractual necessity</strong> (for example, managing your account)</li>
  <li><strong>Legitimate interests</strong> (for example, improving and securing the product)</li>
  <li><strong>Legal obligation</strong></li>
</ul>

<h2><span>6.</span> Service Providers and Sub-Processors</h2>
<p>We share data with trusted third parties that help us run the Service, including hosting and infrastructure providers, search and data processing providers, payment processing through Lemon Squeezy (Merchant of Record), and analytics providers such as Google Analytics.</p>

<h2><span>7.</span> Data Retention</h2>
<p>We retain your data for as long as your account is active or as needed to provide the Service. You may request deletion of your account and associated data at any time by contacting support@smuves.com. We will honor deletion requests within 30 days.</p>

<h2><span>8.</span> Your Rights</h2>
<p>Depending on your jurisdiction, you may have rights including access, correction, deletion, portability, and objection to processing. To exercise these rights, contact us at <a href="mailto:support@smuves.com" style="color:#00c6b2">support@smuves.com</a>.</p>

<h2><span>9.</span> Security</h2>
<p>We implement reasonable technical and organizational measures to protect your data. However, no method of transmission over the internet is completely secure.</p>

<h2><span>10.</span> Contact</h2>
<p>For questions about this Privacy Policy, contact us at <a href="mailto:support@smuves.com" style="color:#00c6b2">support@smuves.com</a>.</p>
`

export default function PrivacyPolicy() {
  const { data } = usePageData('policies/privacy-policy')
  const heroProps = mapHeroFromCS(data?.gf_hero_v1_module) ?? HERO_FALLBACK
  // CS: gf_policy_content_module.add.content — rich text body of the policy
  const bodyHtml  = data?.gf_policy_content_module?.add?.content || CONTENT

  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1 {...heroProps} />
          <section className="richtext-section policy-content">
            <div className="page-center" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

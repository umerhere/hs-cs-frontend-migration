import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import { usePageData } from '../../hooks/usePageData.js'
import { mapHeroFromCS } from '../../lib/mappers/heroMapper.js'
import './Policy.css'

const HERO_FALLBACK = {
  heading: 'Terms',
  headingSpan: ' of Use',
  paragraphs: ['Please read these terms carefully before using Smuves.'],
  imagePosition: 'none',
  textAlign: 'left',
  style: { paddingTop: 190, paddingBottom: 140, mobilePaddingTop: 190, mobilePaddingBottom: 90 },
}

const CONTENT = `
<h6>Last updated: May 2026</h6>

<h2><span>1.</span> Introduction</h2>
<p>Welcome to <strong>Smuves</strong>, operated by <strong>Studio Glos LLC</strong> ("Smuves", "we", "us", or "our"). By accessing or using our web application, website, and related services (the "Service"), you agree to be bound by these Terms of Use and our Privacy Policy. If you are using the Service on behalf of a company or other entity, you confirm that you have the authority to bind that entity. If you do not agree to these terms, please do not use the Service.</p>

<h2><span>2.</span> The Service</h2>
<p>Smuves provides tools for working with HubSpot CMS and related platforms, including bulk content editing, content audits, and content migrations. The Service connects to your HubSpot account and other platforms you authorize and acts on the content and data in those accounts based on your instructions. Features, limits, and availability may change over time.</p>

<h2><span>3.</span> Eligibility and Accounts</h2>
<p>You must be at least 18 years old and able to enter into a binding contract to use the Service. You are responsible for safeguarding your login credentials and for all activity that happens under your account. Notify us immediately at <a href="mailto:support@smuves.com" style="color:#00c6b2">support@smuves.com</a> if you become aware of any unauthorized use of your account.</p>

<h2><span>4.</span> Acceptable Use</h2>
<p>You agree to use the Service only for lawful purposes and in line with these terms. You must not:</p>
<ul>
  <li>Use the Service in any way that violates applicable laws or regulations</li>
  <li>Reverse engineer, decompile, or attempt to extract the source code of the Service</li>
  <li>Interfere with or disrupt the integrity, security, or performance of the Service</li>
  <li>Use automated tools to access the Service in ways not permitted by these terms</li>
  <li>Resell or sublicense access to the Service without our written permission</li>
</ul>

<h2><span>5.</span> Your Data and Content</h2>
<p>You retain ownership of any content or data you bring into the Service. By using the Service, you grant us a limited license to access and process your content solely to provide the Service to you. We do not claim any ownership over your data.</p>

<h2><span>6.</span> Billing and Payments</h2>
<p>Paid plans are billed in advance on a monthly or annual basis. Payments are processed through Lemon Squeezy, which acts as Merchant of Record. Refund requests are handled on a case-by-case basis within 14 days of purchase for new subscribers.</p>

<h2><span>7.</span> Termination</h2>
<p>We may suspend or terminate your access to the Service at any time if you breach these terms or engage in conduct we determine to be harmful to other users or the Service. You may cancel your account at any time through the account settings.</p>

<h2><span>8.</span> Disclaimer of Warranties</h2>
<p>The Service is provided "as is" without warranties of any kind. We do not guarantee that the Service will be uninterrupted, error-free, or meet your specific requirements.</p>

<h2><span>9.</span> Limitation of Liability</h2>
<p>To the extent permitted by law, Smuves and Studio Glos LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.</p>

<h2><span>10.</span> Governing Law</h2>
<p>These terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law provisions.</p>

<h2><span>11.</span> Contact</h2>
<p>Questions about these terms? Contact us at <a href="mailto:support@smuves.com" style="color:#00c6b2">support@smuves.com</a>.</p>
`

export default function TermsOfUse() {
  const { data } = usePageData('policies/terms-of-use')
  const heroProps = mapHeroFromCS(data?.gf_hero_v1_module) ?? HERO_FALLBACK
  // CS: gf_policy_content_module.add.content — rich text body of the terms
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

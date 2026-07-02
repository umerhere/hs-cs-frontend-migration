import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import './SetupGuide.css'

const CONTENT = `
<h1>How to Set Up the Smuves HubSpot App</h1>
<h4>This guide explains how to connect Smuves to your HubSpot account, fetch your CMS content, and start bulk editing.</h4>
<p>With the Smuves HubSpot app, you can pull all your CMS content into a single dashboard and make bulk changes across pages, blog posts, redirects, HubDB tables, and more. Instead of editing content one page at a time inside HubSpot, you can search, filter, update, and replace content across your entire site at once.</p>
<hr />

<h4>Step 1: Install the Smuves app from the HubSpot Marketplace</h4>
<p>Start by opening the Smuves app listing on the HubSpot App Marketplace.</p>
<p>Click <strong>Connect app</strong>. HubSpot will ask you to choose the HubSpot account where you want to install Smuves. Select the correct account and continue.</p>
<p><img src="https://www.smuves.com/hs-fs/hubfs/image-png-May-15-2026-03-02-51-5413-AM.png?width=628&height=383" alt="HubSpot marketplace install" style="width:100%;max-width:628px;height:auto;border-radius:8px;display:block;margin:20px auto;" /></p>
<p>After selecting the account, review the requested permissions and approve the connection. Smuves requests access to your CMS content (pages, blog posts, landing pages, redirects, and HubDB tables) so it can read and write content on your behalf.</p>
<hr />

<h4>Step 2: Complete the connection</h4>
<p>After you approve the HubSpot permissions, Smuves will complete the OAuth authentication process.</p>
<p>Once the connection is successful, you will be redirected to the Smuves dashboard. Your HubSpot portal now appears as a connected platform.</p>
<p><img src="https://www.smuves.com/hs-fs/hubfs/image-png-May-15-2026-03-04-56-3992-AM.png?width=628&height=319" alt="Smuves dashboard connected" style="width:100%;max-width:628px;height:auto;border-radius:8px;display:block;margin:20px auto;" /></p>
<hr />

<h4>Step 3: Fetch your content</h4>
<p>From the dashboard, select your connected HubSpot portal and choose the content type you want to work with (pages, blog posts, landing pages, etc.).</p>
<p>Click <strong>Fetch</strong> to load your content into the Smuves interface. Depending on the size of your portal, this may take a moment.</p>
<hr />

<h4>Step 4: Search, filter, and bulk edit</h4>
<p>Once your content is loaded, you can:</p>
<ul>
  <li>Search for specific text across all records</li>
  <li>Filter by status, date, author, or any other field</li>
  <li>Select multiple records and update fields in bulk</li>
  <li>Use Find &amp; Replace to change text across thousands of pages at once</li>
  <li>Preview all changes before applying them</li>
</ul>
<p>When you're ready to apply changes, Smuves will push them directly to HubSpot via the API. Your changes appear in HubSpot immediately after sync.</p>
<hr />

<h4>Need Help?</h4>
<p>If you run into any issues during setup, contact us at <a href="mailto:support@smuves.com" style="color:#00c6b2">support@smuves.com</a>. We typically respond within 24 hours.</p>
`

export default function SetupGuide() {
  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1
            heading="Smuves Setup Guide for"
            headingSpan=" HubSpot"
            paragraphs={['Everything you need to install, configure, and start using the Smuves HubSpot integration — from first connection to daily use.']}
            imagePosition="none"
            textAlign="center"
            style={{ paddingTop: 190, paddingBottom: 140, mobilePaddingTop: 190, mobilePaddingBottom: 90 }}
          />
          <section className="richtext-section setup-content">
            <div className="page-center" dangerouslySetInnerHTML={{ __html: CONTENT }} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroV1 from '../../components/modules/HeroV1/HeroV1.jsx'
import './Documentation.css'

const CONTENT = `
<h2><strong>What Smuves Does</strong></h2>
<p>Smuves is a content engineering platform that connects to your HubSpot CMS and lets you manage website content in bulk. Instead of editing pages one by one inside HubSpot, Smuves pulls your entire content dataset into a searchable, filterable data table where you can make changes across hundreds or thousands of records at once.</p>
<p>With the Smuves and HubSpot integration, you can:</p>
<ul>
  <li>Fetch and browse all your CMS content types (pages, blog posts, landing pages, authors, tags, redirects, HubDB tables) in one place</li>
  <li>Search, sort, and filter across all records instantly</li>
  <li>Bulk edit multiple fields across multiple records at once</li>
  <li>Find and replace text across your entire content library</li>
  <li>Export content data to CSV or Google Sheets for review</li>
  <li>Import changes back to HubSpot with a single action</li>
  <li>View detailed activity logs of every change made</li>
</ul>
<p>Smuves only works with CMS content. It does not modify CRM objects like contacts, companies, or deals.</p>

<h2><strong>Prerequisites</strong></h2>
<p>Before you install Smuves, make sure you have the following:</p>
<ul>
  <li>A HubSpot account with CMS Hub (Starter, Professional, or Enterprise). Smuves works with all CMS Hub tiers.</li>
  <li>Super Admin permissions in your HubSpot account, or at minimum, permissions to install apps and access CMS content.</li>
  <li>A modern web browser (Chrome, Firefox, Edge, or Safari). Smuves runs entirely in the browser.</li>
</ul>
<p>You do not need any coding knowledge, API credentials, or developer tools to use Smuves.</p>

<h2><strong>Step 1: Create Your Smuves Account</strong></h2>
<ol>
  <li>Go to <a href="https://app.smuves.com" style="color:#00c6b2">app.smuves.com</a> to open the signup screen.</li>
  <li>You will see three tabs: <strong>Magic Link</strong>, <strong>Sign Up</strong>, and <strong>Sign In</strong>.</li>
  <li>Use any of the following to create your account:
    <ul>
      <li><strong>Magic Link:</strong> Enter your email and click the link sent to you.</li>
      <li><strong>Sign Up:</strong> Enter your email and create a password.</li>
      <li><strong>Google:</strong> Sign in with your Google account.</li>
    </ul>
  </li>
</ol>

<h2><strong>Step 2: Connect Your HubSpot Portal</strong></h2>
<p>After logging in, go to <strong>Settings &gt; Connections</strong> and click <strong>Add HubSpot Portal</strong>. You will be redirected to the HubSpot OAuth flow. Select the portal you want to connect and approve the permissions.</p>
<p>Once connected, your portal will appear in the Connections panel. You can connect multiple portals on Pro and Enterprise plans.</p>

<h2><strong>Step 3: Fetch Your Content</strong></h2>
<p>Select your connected portal from the sidebar, then choose a content type from the dropdown (Pages, Blog Posts, Landing Pages, Authors, Tags, Redirects, or HubDB Tables). Click <strong>Fetch</strong> to load your records.</p>

<h2><strong>Step 4: Bulk Edit</strong></h2>
<p>Once records are loaded, you can:</p>
<ul>
  <li>Check boxes to select individual records or use <strong>Select All</strong></li>
  <li>Click <strong>Bulk Edit</strong> to open the editing panel</li>
  <li>Choose which field to update and enter the new value</li>
  <li>Click <strong>Apply</strong> to push changes to HubSpot</li>
</ul>

<h2><strong>Step 5: Find &amp; Replace</strong></h2>
<p>Use the <strong>Find &amp; Replace</strong> tool to search for a text string across all records of a content type and replace it with a new value. You can preview all matches before applying.</p>

<h2><strong>Rate Limits</strong></h2>
<p>Smuves respects HubSpot's API rate limits automatically. If you are updating a very large number of records, Smuves will queue and batch the requests to avoid hitting limits.</p>

<h2><strong>Support</strong></h2>
<p>If you have questions or run into issues, contact us at <a href="mailto:support@smuves.com" style="color:#00c6b2">support@smuves.com</a>.</p>
`

export default function Documentation() {
  return (
    <div className="body-wrapper">
      <Header />
      <main id="main-content" className="body-container-wrapper">
        <div className="body-container">
          <HeroV1
            heading="Smuves"
            headingSpan=" Documentation"
            paragraphs={['Everything you need to know about using Smuves with HubSpot.']}
            imagePosition="none"
            textAlign="left"
            style={{ paddingTop: 190, paddingBottom: 140, mobilePaddingTop: 190, mobilePaddingBottom: 90 }}
          />
          <section className="richtext-section docs-content">
            <div className="page-center" dangerouslySetInnerHTML={{ __html: CONTENT }} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import Layout from '../../layouts/Layout';
import HeroV1 from '../../components/HeroV1';
import Panel from '../../sections/Panel';
import GlobalCTA from '../../sections/GlobalCTA';

export default function FeaturesPage() {
  return (
    <Layout>
      <HeroV1
        heading="Smuves"
        headingSecondLine="Features"
        description="<p>Discover how Smuves transforms complex HubSpot operations into simple, safe, and scalable processes. Every feature is designed to save you time while protecting your data.</p>"
      />
      <Panel
        heading="Bulk Editing"
        secondLine="Edit thousands of records in minutes"
        description="Transform your HubSpot CMS operations with powerful bulk editing capabilities. Make large-scale content changes safely and efficiently."
        imageSrc="https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Website/1.png"
        imageAlt="Smuves bulk editing interface"
        imagePosition="right"
        colorChoice="blue"
        boxedItems={[
          { heading: 'Content Management', text: 'Bulk update page titles, meta descriptions, on-page content fields, and URL redirects across your HubSpot CMS.' },
          { heading: 'CMS Operations', text: 'Manage blog posts, landing pages, and website pages at scale with a single, unified view.' },
        ]}
      />
      <Panel
        heading="Find & Replace"
        secondLine="Search and update any field at scale"
        description="Locate any piece of content across your entire HubSpot portal and replace it in bulk — without manual page-by-page edits."
        imageSrc="https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Website/2.png"
        imageAlt="Find and replace interface"
        imagePosition="left"
        colorChoice="purple"
        boxedItems={[]}
      />
      <Panel
        heading="Content Auditing"
        secondLine="Know exactly what's in your CMS"
        description="Get a complete picture of all content across your HubSpot portal — pages, blogs, redirects, and more — in one structured view."
        imageSrc="https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Website/1.png"
        imageAlt="Content audit interface"
        imagePosition="right"
        colorChoice="green"
        boxedItems={[]}
      />
      <Panel
        heading="Google Sheets Sync"
        secondLine="Edit in Sheets, publish to HubSpot"
        description="Pull HubSpot content into Google Sheets, make edits in a familiar spreadsheet interface, and push changes back with one click."
        imageSrc="https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Website/2.png"
        imageAlt="Google Sheets sync"
        imagePosition="left"
        colorChoice="blue"
        boxedItems={[]}
      />
      <GlobalCTA />
    </Layout>
  );
}

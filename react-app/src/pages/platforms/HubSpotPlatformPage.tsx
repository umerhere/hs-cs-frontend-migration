import Layout from '../../layouts/Layout';
import HeroV1 from '../../components/HeroV1';
import IconGrid from '../../components/IconGrid';
import Panel from '../../sections/Panel';
import GlobalCTA from '../../sections/GlobalCTA';

export default function HubSpotPlatformPage() {
  return (
    <Layout>
      <HeroV1
        heading="HubSpot CMS"
        headingSecondLine="Platform"
        description="<p>The only tool purpose-built for bulk managing HubSpot CMS content at scale.</p>"
      />
      <IconGrid
        heading="Everything HubSpot, handled in bulk."
        description="<p>From pages to blogs to redirects, Smuves gives you a unified view of your entire HubSpot portal.</p>"
        items={[
          { iconName: 'search', heading: 'Find Anything', body: 'Search and filter across all HubSpot content types from a single interface.' },
          { iconName: 'layers', heading: 'Manage at Scale', body: 'Update hundreds of records simultaneously with audit logs and rollback.' },
          { iconName: 'code', heading: 'API-Powered', body: 'Connects directly to HubSpot APIs for real-time, secure data access.' },
        ]}
      />
      <Panel
        heading="Bulk CMS Editing"
        description="Update page titles, meta descriptions, content fields, and publishing status across your entire HubSpot website — without a single manual edit."
        imageSrc="https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Website/1.png"
        imageAlt="HubSpot bulk editing"
        imagePosition="right"
        colorChoice="blue"
        boxedItems={[]}
      />
      <GlobalCTA />
    </Layout>
  );
}

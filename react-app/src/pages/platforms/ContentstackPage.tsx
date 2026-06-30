import Layout from '../../layouts/Layout';
import HeroV1 from '../../components/HeroV1';
import Panel from '../../sections/Panel';
import GlobalCTA from '../../sections/GlobalCTA';

export default function ContentstackPage() {
  return (
    <Layout>
      <HeroV1
        heading="Contentstack"
        headingSecondLine="Platform"
        description="<p>Migrate to, from, or within Contentstack with zero data loss and full structural integrity.</p>"
      />
      <Panel
        heading="HubSpot to Contentstack Migrations"
        description="We engineer the complete migration pipeline — auditing your HubSpot content structure, mapping it to Contentstack's content model, and executing the transfer programmatically."
        imageSrc="https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Website/1.png"
        imageAlt="Contentstack migration"
        imagePosition="right"
        colorChoice="blue"
        boxedItems={[
          { heading: 'Content Modeling', text: 'Map your existing content types to Contentstack content types with full field-level control.' },
          { heading: 'Automated Transfer', text: 'Programmatic migration with validation, rollback, and detailed execution logs.' },
        ]}
      />
      <Panel
        heading="Structured from Day One"
        description="We don't just copy-paste. We restructure your content to fit Contentstack's composable architecture correctly."
        imageSrc="https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Website/2.png"
        imageAlt="Structured content"
        imagePosition="left"
        colorChoice="normal"
        boxedItems={[]}
      />
      <GlobalCTA />
    </Layout>
  );
}

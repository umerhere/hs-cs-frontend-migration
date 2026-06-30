import Layout from '../../layouts/Layout';
import HeroV1 from '../../components/HeroV1';
import Panel from '../../sections/Panel';
import GlobalCTA from '../../sections/GlobalCTA';

export default function IntegrationsPage() {
  return (
    <Layout>
      <HeroV1
        heading="HubSpot & Google"
        headingSecondLine="Sheets Integration"
        description="<p>Effortlessly sync between Google Sheets and HubSpot CMS. Edit content in a familiar spreadsheet interface and push changes directly to your portal.</p>"
      />
      <Panel
        heading="Export HubSpot to Google Sheets"
        description="Pull any content type from HubSpot — pages, blogs, contacts — directly into a clean Google Sheet. Filter, sort, and review your data before making any changes."
        imageSrc="https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Website/1.png"
        imageAlt="Export to Google Sheets"
        imagePosition="right"
        colorChoice="blue"
        boxedItems={[
          { heading: 'Real-time Sync', text: 'Changes in Sheets are validated before being pushed to HubSpot.' },
          { heading: 'Column Mapping', text: 'Map any HubSpot property to a sheet column for full control.' },
        ]}
      />
      <Panel
        heading="Push Changes Back to HubSpot"
        description="After editing in Google Sheets, push updates directly to HubSpot with one click. Smuves validates every row before writing to protect your data."
        imageSrc="https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Website/2.png"
        imageAlt="Push to HubSpot"
        imagePosition="left"
        colorChoice="normal"
        boxedItems={[]}
      />
      <GlobalCTA />
    </Layout>
  );
}

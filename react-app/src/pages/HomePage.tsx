import Layout from '../layouts/Layout';
import HeroV1 from '../components/HeroV1';
import IconGrid from '../components/IconGrid';
import DescriptionWithCTAs from '../components/DescriptionWithCTAs';

export default function HomePage() {
  return (
    <Layout>
      <HeroV1
        tagLabel="Now in Beta"
        heading="Bulk edit your"
        headingSecondLine="HubSpot CMS."
        description="<p>Smuves is the headless website data editor. Edit thousands of records across your HubSpot portal in minutes — not hours.</p>"
        listing={[
          'See real time content counts',
          'Audit all available CMS content',
          'Update page settings in bulk',
          'Sync Google Sheets to HubSpot',
        ]}
        ctaText="Join App Beta"
        showCodeArt={true}
      />
      <IconGrid />
      <DescriptionWithCTAs />
    </Layout>
  );
}

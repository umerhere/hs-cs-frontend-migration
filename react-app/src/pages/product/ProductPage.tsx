import Layout from '../../layouts/Layout';
import HeroV1 from '../../components/HeroV1';
import IconGrid from '../../components/IconGrid';
import GlobalCTA from '../../sections/GlobalCTA';

const PRODUCT_ICON_ITEMS = [
  { icon: 'table', heading: 'Bulk CMS Editing', body: 'Update pages, blogs, posts, authors, tags, and redirects.' },
  { icon: 'upload', heading: 'Instant Sync', body: 'Push updates straight into HubSpot CMS with one click.' },
  { icon: 'chart', heading: 'Activity Logs', body: 'Track edits and keep a clear audit trail.' },
];

export default function ProductPage() {
  return (
    <Layout>
      <HeroV1
        tagLabel="Now in Beta"
        heading="Bulk edit HubSpot CMS"
        headingSecondLine="in seconds, not hours."
        description="<p>Smuves is the headless website data editor for HubSpot websites.</p>"
        listing={[
          'See real time content counts',
          'Audit all available CMS content',
          'Update page settings in bulk',
          'Sync Google Sheets to HubSpot',
        ]}
        ctaText="Join Beta"
        showCodeArt={true}
      />
      <IconGrid
        heading="Built for content teams, not just developers."
        description="<p>Powerful tools designed to make bulk CMS management simple, safe, and efficient.</p>"
        items={[
          { iconName: 'table', heading: 'Bulk CMS Editing', body: 'Update pages, blogs, posts, authors, tags, and redirects.' },
          { iconName: 'upload', heading: 'Instant Sync', body: 'Push updates straight into HubSpot CMS with one click.' },
          { iconName: 'chart', heading: 'Activity Logs', body: 'Track edits and keep a clear audit trail.' },
        ]}
      />
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="page-center" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: '#00C6B2', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px' }}>Demo Video</p>
          <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.25rem)', fontWeight: 700, color: '#111827', margin: '0 0 16px' }}>How does Smuves work?</h2>
          <p style={{ color: '#6b7280', maxWidth: 520, margin: '0 auto 32px' }}>Check out our demo video and see how Smuves helps you bulk edit your HubSpot Website without any coding!</p>
          <div style={{ background: '#F5F7FA', borderRadius: 12, aspectRatio: '16/9', maxWidth: 720, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: 14 }}>
            Video embed placeholder
          </div>
        </div>
      </section>
      <GlobalCTA />
    </Layout>
  );
}

import Layout from '../../layouts/Layout';
import HeroV1 from '../../components/HeroV1';
import RichText from '../../sections/RichText';
import TeamGrid from '../../sections/TeamGrid';
import Timeline from '../../sections/Timeline';

const TEAM = [
  { name: 'Nicole Pereira', position: 'Founder', bio: 'Coffee, Chocolate, & Video Games!', imageSrc: 'https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Headshots/Nicole%20Pereira%20Headshot.png', imageAlt: 'Nicole Pereira' },
  { name: 'Umar Aslam', position: 'Full-stack Developer', bio: 'Football for life', imageSrc: 'https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Headshots/Umar%20Aslam%20Headshot.png', imageAlt: 'Umar Aslam' },
  { name: 'Pavan Dasari', position: 'Sr. Product Manager', bio: 'Product guy by day, playlist curator by night', imageSrc: 'https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Headshots/Pavan%20Dasari%20headshot.png', imageAlt: 'Pavan Dasari' },
  { name: 'Hamza Aslam', position: 'Sr. Software Engineer', bio: 'Makes things, breaks things', imageSrc: 'https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Headshots/16.png', imageAlt: 'Hamza Aslam' },
];

const TIMELINE_ITEMS = [
  { year: '2025', heading: 'Beta Launch', text: 'Launched our beta program with 100+ early adopters' },
  { year: '2025', heading: 'Founded', text: 'Started building Smuves to solve HubSpot data management challenges' },
  { year: '2025', heading: 'First Prototype', text: 'Developed the initial bulk editing prototype' },
];

export default function AboutPage() {
  return (
    <Layout>
      <HeroV1
        heading="About"
        headingSecondLine="Smuves"
        description="<p><strong>Website Content Engineering. Built for teams that need their data to actually move.</strong></p><p>We help companies take control of their website content dataset. Not just edit it. Not just redesign it.</p><p>Structure it, clean it, and move it between systems without breaking everything along the way.</p>"
      />
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="page-center" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h2>Our Story</h2>
            <p style={{ color: '#374151', lineHeight: 1.8 }}>Smuves didn't start as an agency. It started as a problem.</p>
            <p style={{ color: '#374151', lineHeight: 1.8 }}>During a large-scale migration project — tens of thousands of pages, thousands of blog posts, and dozens of languages — it became clear how fragile most website content actually is.</p>
            <p style={{ color: '#374151', lineHeight: 1.8 }}>So we built a way to fix it. What used to take weeks could now be done in hours. But once you can see and edit your content like data, you start to realize: you can move it.</p>
          </div>
          <img src="https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/AI-Generated%20Media/Images/Create%20a%20general%20technology%20image%20which%20indicates%20Top%20Tools%20for%20HubSpot%20Backups%20dont%20include%20nay%20text%20or%20numbers%20i%20need%20just%20graphics.png" alt="HubSpot CMS Bulk Editing" style={{ width: '100%', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} loading="lazy" />
        </div>
      </section>
      <RichText content="<h2><strong>What We Do Now</strong></h2><p>Today, Smuves sits at the intersection of <strong>tooling and services</strong>. Our platform exposes your website content dataset so it can be searched, edited, and updated in bulk. Our services go deeper — designing content architecture, building custom ETLs, and programmatically migrating content between systems like HubSpot and Contentstack.</p><h2><strong>What We Believe</strong></h2><p>Most websites aren't limited by design. They're limited by how their content is structured. When content is locked into pages, tied to templates, or scattered across systems — updates take longer, migrations get expensive, and teams work around the system instead of with it.</p><p>We believe your content should behave like a real asset. <strong>Structured. Searchable. Portable.</strong></p>" />
      <Timeline heading="Our Journey" description="<p>Key milestones in building Smuves</p>" items={TIMELINE_ITEMS} />
      <TeamGrid heading="Meet the Team" description="<p>The engineers behind the scenes. The ones building the systems, testing the edge cases, and making sure your content doesn't fall apart when it moves.</p>" members={TEAM} />
    </Layout>
  );
}

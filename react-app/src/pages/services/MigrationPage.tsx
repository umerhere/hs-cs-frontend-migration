import Layout from '../../layouts/Layout';
import HeroV1 from '../../components/HeroV1';
import RichText from '../../sections/RichText';
import Panel from '../../sections/Panel';
import DescriptionWithCTAs from '../../components/DescriptionWithCTAs';

export default function MigrationPage() {
  return (
    <Layout>
      <HeroV1
        tagLabel="Programmatic Website Migrations"
        heading="Make the Escape"
        headingSecondLine="from Legacy CMS."
        description="<p><strong>Stop migrating your technical debt.</strong> We engineer the automated transition from bloated legacy monoliths to modern, headless architectures with 100% data integrity and zero 'wait, where did that page go?' moments.</p>"
        ctaText="Let's Chat!"
        showCodeArt={true}
      />
      <RichText content="<h2>Why Most Migrations Fail</h2><p>Most agencies treat migration like a manual data entry internship. That's how metadata vanishes, relational links break, and your 'Content Freeze' lasts for a literal season. We treat content as a dataset — because that's what it is.</p><p>We audit first. We map every content type, every relationship, every field. We build a transformation engine before we move a single record. The result: structured, clean content in your new system. Not a copy of the mess you had before.</p>" />
      <Panel
        heading="Your vision, without the friction"
        description="Because we handle the data layer, your team can focus on what actually matters — design, messaging, and performance. No rebuilding content by hand. No guessing what broke."
        imageSrc="https://243118690.fs1.hubspotusercontent-na2.net/hubfs/243118690/Website/2.png"
        imageAlt="Migration workflow"
        imagePosition="left"
        colorChoice="blue"
        boxedItems={[]}
      />
      <DescriptionWithCTAs
        heading="Don't migrate your mess into a new system."
        description="<p>A new CMS won't fix a broken structure. It will just give you a faster way to scale it.</p><p>We start with an audit, identify what's worth keeping, restructure what isn't, and build the pipeline that moves it cleanly.</p>"
        ctaText="Let's Fix it Now!"
      />
    </Layout>
  );
}

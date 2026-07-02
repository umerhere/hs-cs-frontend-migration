import PlatformPage from './PlatformPage.jsx'

const SERVICES = [
  {
    title: 'Content Auditing',
    body: 'Before anything changes, we surface what\'s really there. We audit your portal and turn scattered pages, modules, and assets into a clear, structured content dataset. No surprises halfway through.',
    iconPath: 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z',
    viewBox: '0 0 512 512',
  },
  {
    title: 'Content Architecture',
    body: 'We design your HubSpot environment before anything moves — themes, templates, modules, HubDB tables, assets, and localization. If the structure isn\'t right, nothing downstream will be either.',
    iconPath: 'M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z',
    viewBox: '0 0 512 512',
  },
  {
    title: 'Content Migration',
    body: 'We map your existing HubSpot model and move it programmatically through our ETL. Not a flat export — a fully relational, validated migration with zero data loss and zero broken links.',
    iconPath: 'M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32V64h160v160c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H32C14.3 0 0 14.3 0 32v192zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v160H288V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v192c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V288z',
    viewBox: '0 0 512 512',
  },
]

const RICH_TEXT = `
  <h2>Why HubSpot Teams Choose Smuves</h2>
  <p>Most HubSpot migrations fail because they treat it like a copy-paste job. They export the old structure, rebuild the templates, and import the content — and then spend the next six months fixing broken links, missing metadata, and mysteriously vanished blog posts.</p>
  <p>We treat your HubSpot portal as a data engineering problem.</p>
  <p>Before we move a single page, we audit what's actually there, build the destination architecture to spec, write the ETL to transform your content programmatically, and validate every record after it lands.</p>
  <p>The result is a migration that's reproducible, auditable, and actually finished when we say it is.</p>
`

export default function HubSpotPlatform() {
  return (
    <PlatformPage
      heading="HubSpot"
      headingSpan=" Migration Partner"
      paragraphs={[
        "Smuves is a HubSpot app partner focused on one thing — managing, restructuring, and moving website content datasets at scale.",
        "We don't rebuild pages by hand. We don't \"lift and shift\" technical debt. <strong>We engineer the systems that make your content usable, structured, and scalable inside HubSpot.</strong>",
      ]}
      ctas={[{ text: "Let's Chat!", href: '/about/contact', style: 'black_arrow' }]}
      services={SERVICES}
      richTextHtml={RICH_TEXT}
      ctaHeading="Ready to make HubSpot work the way it should?"
      ctaBody="We'll audit your current setup, build the architecture, and migrate your content without the chaos."
    />
  )
}

import PlatformPage from './PlatformPage.jsx'

const SERVICES = [
  {
    title: 'Content Auditing',
    body: "Before anything moves, we surface what's really there. We audit your source platform and turn scattered pages, modules, and assets into a structured content inventory.",
    iconPath: 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z',
    viewBox: '0 0 512 512',
  },
  {
    title: 'Content Architecture',
    body: 'We design your Contentstack structure before a single entry moves — global fields, content types, references, and taxonomies — so the destination is built for how you actually work.',
    iconPath: 'M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z',
    viewBox: '0 0 512 512',
  },
  {
    title: 'Content Migration',
    body: 'We map your existing model and move it programmatically through our ETL. Not a flat export — a fully relational, validated migration into Contentstack with zero data loss.',
    iconPath: 'M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32V64h160v160c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H32C14.3 0 0 14.3 0 32v192zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v160H288V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v192c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V288z',
    viewBox: '0 0 512 512',
  },
]

const RICH_TEXT = `
  <h2>Why Contentstack Teams Choose Smuves</h2>
  <p>Contentstack is purpose-built for teams who need composable, headless architecture. But getting your content <em>into</em> Contentstack — especially from a monolithic legacy CMS — is where most migrations fall apart.</p>
  <p>We've built the tooling and the process to make that journey programmatic.</p>
  <p>We audit your current environment, design your Contentstack content model, write the ETL to extract and transform every entry, and load it with full relational integrity intact. Languages, references, assets, and metadata all arrive exactly where they should.</p>
  <p>No export dumps. No manual copy-paste. No &ldquo;we'll fix it in post.&rdquo;</p>
`

export default function ContentstackPlatform() {
  return (
    <PlatformPage
      heading="Contentstack"
      headingSpan=" Migration Partner"
      paragraphs={[
        "Smuves is a Contentstack partner focused on one thing — moving and restructuring website content datasets at scale.",
        "We don't redesign your site. We don't rebuild content by hand. <strong>We engineer the systems that take what you have — and make it work where you're going.</strong>",
      ]}
      ctas={[{ text: "Let's Chat!", href: '/about/contact', style: 'black_arrow' }]}
      services={SERVICES}
      richTextHtml={RICH_TEXT}
      ctaHeading="Ready to move to Contentstack the right way?"
      ctaBody="We'll audit your current CMS, design the Contentstack model, and migrate everything programmatically."
    />
  )
}

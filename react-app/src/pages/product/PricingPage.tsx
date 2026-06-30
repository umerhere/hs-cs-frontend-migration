import Layout from '../../layouts/Layout';
import HeroV1 from '../../components/HeroV1';
import PricingCards from '../../sections/PricingCards';
import FAQ from '../../sections/FAQ';
import GlobalCTA from '../../sections/GlobalCTA';

const TIERS = [
  {
    heading: 'Free', price: '$0', price_line: 'Perfect for small teams and simple edits',
    description: '<p>Bulk Fetch 100 records</p><p>Bulk Edit 50 records</p>',
    button_text: 'Get Started Free', most_popular: false, per_month: true,
    bullet_points: [
      { text_field: 'Single platform connection', enabled: true },
      { text_field: 'Content type counts', enabled: true },
      { text_field: 'HubSpot Integration', enabled: true },
      { text_field: 'Google Sheets Integration', enabled: true },
      { text_field: 'Fetch content types one at a time', enabled: true, icon_cross: {} },
      { text_field: 'Filter, search, sort records', enabled: true, icon_cross: {} },
      { text_field: 'Find and replace (non-module fields)', enabled: true, icon_cross: {} },
      { text_field: 'Execution Logs', enabled: true, icon_cross: {} },
    ],
  },
  {
    heading: 'Pro', price: '$99', price_line: 'Perfect for larger websites or frequent edits',
    description: '<p>Bulk Fetch 1,000 records</p><p>Bulk edit 500 records</p>',
    button_text: 'Get Started Free', most_popular: true, per_month: true,
    bullet_points: [{ text_field: '<b>Everything in Free</b>', enabled: true }],
  },
  {
    heading: 'Enterprise', price: '$249', price_line: 'Perfect for agencies or mega websites',
    description: '<p>Bulk Fetch 50,000 records</p><p>Bulk edit 10,000 records</p>',
    button_text: 'Get Started Free', most_popular: false, per_month: true,
    bullet_points: [
      { text_field: '<b>Everything in Pro</b>', enabled: true },
      { text_field: 'Multi-platform connection', enabled: true },
      { text_field: 'Fetch all content types at once', enabled: true },
    ],
  },
];

const FAQ_ITEMS = [
  { question: 'Who is Smuves built for?', answer: '<p>Smuves is built for content teams, marketing operations teams, agencies, and freelancers who work with website content at scale.</p>' },
  { question: 'How does Smuves integrate with HubSpot?', answer: '<p>Smuves uses HubSpot\'s CMS APIs to securely connect to your CMS data.</p>' },
  { question: 'Can I use Smuves for CMS migrations?', answer: '<p>Yes. Smuves supports migration planning and execution through custom quoted projects.</p>' },
  { question: 'What HubSpot content types can Smuves manage?', answer: '<p>Smuves can let you fetch, filter, search, sort, and bulk edit: Website pages, Landing Pages, Blog Posts, Campaigns, Authors, Tags, URL Redirects, Domains, and Files.</p>' },
];

export default function PricingPage() {
  return (
    <Layout>
      <HeroV1
        heading="HubSpot CMS Bulk Editor"
        headingSecondLine="Pricing"
        description="<p>From solo marketers to enterprise teams, we have a plan that scales with your needs.</p>"
      />
      <PricingCards tiers={TIERS} />
      <FAQ heading="Frequently Asked Questions" description="<p>Quick answers to common questions.</p>" items={FAQ_ITEMS} />
      <GlobalCTA />
    </Layout>
  );
}

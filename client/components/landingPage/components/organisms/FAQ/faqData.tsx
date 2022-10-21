import React from 'react';

type IFAQ = {
  title: string;
  content: any;
};

const DevelopmentPrice = () => (
  <>
    <p>
      <i>The Starter</i> plan fees apply in-full regardless of whether you’re in production or not. <i>The Pro</i> and{' '}
      <i>Enterprise</i> plans are discounted if not used in production. Please note: the customer must request
      development-use-only discount approval in advance.
    </p>
  </>
);
const MissingFeature = () => (
  <>
    <p>
      Ten-to-twenty years ago, commerce platforms competed on feature-grid comparisons and more was always better. That
      approach is good for sales presentations, but bad for building cutting-edge frontends and integrating complex
      backends. A so-so feature that only partly covers the requirement can slow a team down more than no feature at
      all.
    </p>
    <p>
      Modern commerce platforms like Saleor bring a strong set of core commerce features. But rather than competing on a
      feature-grid, we compete on how easily a team may extend Saleor to cover their requirements perfectly.
    </p>
  </>
);
const Charge = () => (
  <>
    <p>
      No. Saleor Commerce Cloud doesn’t take a % of your sales volume (GMV). We want to be fairly paid, but we don’t aim
      to become revenue partners in your business.
    </p>
    <p>
      We charge a small per order fee that decreases as you grow. Smaller brands should find Saleor Cloud pricing
      accessible, which means they can skip basic, templated platforms and set themselves up best for the future.
    </p>
    <p>
      Larger brands will find our dev-first approach flows through to our business model – fair pricing, easily
      understood plans and self-signup all backed by our open source commitment. Evaluating Saleor should be a breeze
      for developers comparing enterprise-grade software.
    </p>
  </>
);
const ChargeOrders = () => (
  <p>
    Not for most brands. It’s true that brands with extremely low average order values may find per order pricing
    costly, but the vast majority will find Saleor Cloud’s pricing advantageous.
  </p>
);
const OSS = () => (
  <>
    <p>
      Saleor Cloud is managed hosting for Saleor OSS plus support and a suite of developer tools. The versions of Saleor
      core are the same.
    </p>
  </>
);
const Switch = () => (
  <ul>
    <li>
      <b>OSS → Cloud:</b> Yes. If you run a vanilla Saleor OSS build version compatible with Saleor Cloud, then the
      answer is: Yes! If you run a different version, you may need to update your storefront to a version compatible
      with the Cloud API and migrate data. If you have more questions please contact us{' '}
      <a href="https://saleor.typeform.com/request-demo">here</a>.
    </li>
    <li>
      <b>Cloud → OSS:</b> Yes. We maintain the compatibility of the Cloud API with Saleor OSS. All you will need to
      handle is the data migration out of the Cloud.
    </li>
  </ul>
);
const Customization = () => (
  <>
    <p>
      Best practice for extending Saleor is building Apps which communicate with Saleor using the GraphQL API, pub/sub,
      and webhooks. Extending Saleor in this way means core files are untouched, which benefits security and lowers
      maintenance costs.
    </p>
    <p>
      Please see the{' '}
      <a href="https://docs.saleor.io/docs/3.x/developer/extending/apps/key-concepts">Saleor Developer&apos;s Guide</a>{' '}
      and <a href="https://github.com/saleor/saleor-cli">CLI</a> to learn more.
    </p>
  </>
);
const Migration = () => (
  <p>
    We&apos;re experienced with migrations from Shopify Plus, Magento and other e-commerce platforms in the most
    efficient way possible. For a migration quote please reach out{' '}
    <a href="https://saleor.typeform.com/request-demo">here</a>.
  </p>
);
const Launch = () => (
  <>
    <p>
      Saleor is a commerce dashboard and an API. Project length depends on time spent integrating Saleor’s API with your
      storefront(s) and services. On average, we see teams spend 5 to 10 months on their replatform. We’ve seen simple
      projects launched in 3 months and really complex ones take 18 months.
    </p>
    <p>
      Once live, brands tend to stick with new platforms for 7+ years. We think some of our competitors’ “go headless in
      90 days” marketing campaigns are wrongheaded for complex, modern commerce.
    </p>
  </>
);

const HQ = () => (
  <p>
    Our HQ is in Wroclaw, Poland, one of Europe’s top tech hubs. We also have an office in Amsterdam and we’re currently
    building out sales, marketing and customer success teams in the US and will open a small San Francisco office in
    2023. Our support team has US and European coverage and speaks perfect English.
  </p>
);

export const faqData: IFAQ[] = [
  {
    title: 'Do I have to pay full price during development?',
    content: DevelopmentPrice,
  },
  {
    title: 'Some e-commerce platforms charge a percentage of sales as a fee. Are there similar charges with Saleor?',
    content: Charge,
  },
  {
    title: 'Isn’t charging per order just another form of revenue share?',
    content: ChargeOrders,
  },
  {
    title: 'How do the versions of Saleor differ Cloud vs OSS?',
    content: OSS,
  },
  {
    title: 'Can I switch between Saleor Cloud and Saleor OSS?',
    content: Switch,
  },
  {
    title: 'How would I make customizations to my site if on Saleor Cloud?',
    content: Customization,
  },
  {
    title: 'Saleor’s missing a feature that Platform X provides. Why should I go with Saleor?',
    content: MissingFeature,
  },
  {
    title: 'How much does a migration from my current platform cost?',
    content: Migration,
  },
  {
    title: 'How quickly can I launch a new Saleor site?',
    content: Launch,
  },
  {
    title: 'Where is Saleor HQ?',
    content: HQ,
  },
];

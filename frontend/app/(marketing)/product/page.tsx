import { SystemHero } from '../../sharedComponents/sections/SystemHero';
import { FeatureGrid } from '../../sharedComponents/sections/FeatureGrid';

export default function ProductPage() {
  return (
    <div className="bg-background-primary">
      <SystemHero />

      <div className="container mx-auto py-20 pb-32">
        <FeatureGrid
          title="Core Capabilities"
          columns={2}
          features={[
            { title: 'Custom Domains', description: 'Connect your own domain name in seconds.', icon: 'home' },
            { title: 'SEO Optimization', description: 'Rank higher with automatic meta tags and sitemaps.', icon: 'search' },
            { title: 'Privacy Controls', description: 'Password protect your work or make it public.', icon: 'hidden' },
            { title: 'Collaboration', description: 'Invite team members to edit and review.', icon: 'user' },
          ]}
        />
      </div>
    </div>
  );
}

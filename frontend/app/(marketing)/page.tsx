
import { InteractiveHero } from '@/app/sharedComponents/sections/InteractiveHero';
import { FeatureGrid } from '@/app/sharedComponents/sections/FeatureGrid';
import { SystemCTA } from '@/app/sharedComponents/sections/SystemCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0">
      <InteractiveHero
        titlePrefix="Portfolio Intelligence for   "
        dynamicPhrases={["Designers.", "Engineers.", "Strategists.", "Your Brand."]}
        titleSuffix=""
        subtitle="A precision-engineered platform for high-impact professionals. Build, manage, and scale your digital identity with systematic clarity."
        primaryAction={{ label: 'Get Started', href: '/signup' }}
        secondaryAction={{ label: 'View Demo', href: '/portfolio' }}
      />

      <FeatureGrid
        title="Everything You Need"
        columns={3}
        features={[
          { title: 'Beautiful Templates', description: 'Choose from dozens of professionally designed templates.', icon: 'visible' },
          { title: 'Fast Performance', description: 'Built on Next.js for blazing fast load times and SEO.', icon: 'check' },
          { title: 'Analytics Included', description: 'Track views and engagement with built-in analytics.', icon: 'search' },
        ]}
      />

      <SystemCTA
        title="Ready to Build Your Brand?"
        description="Join thousands of professionals who trust Atlas to power their digital presence."
        primaryAction={{ label: 'Start Free Trial', href: '/signup' }}
        secondaryAction={{ label: 'Contact Sales', href: '/contact' }}
      />
    </div>
  );
}

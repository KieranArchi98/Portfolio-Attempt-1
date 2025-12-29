
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
        title="Technical Domains"
        columns={3}
        features={[
          {
            title: "Full-Stack Engineering",
            description: "End-to-end development of modern web and mobile applications focused on scalability and fluid UX.",
            icon: "home"
          },
          {
            title: "Network Architecture",
            description: "Designing and managing complex home lab environments, secure routing, and infrastructure protocols.",
            icon: "hidden"
          },
          {
            title: "Technical Operations",
            description: "Specialized support and systematic maintenance for high-performance digital environments.",
            icon: "search"
          }
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

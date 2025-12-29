
import { PricingTable } from '@/app/sharedComponents/sections/PricingTable';
import { CTA } from '@/app/sharedComponents/sections/CTA';

export default function PricingPage() {
  return (
    <div className="bg-background-secondary/30">
      <PricingTable
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your stage of growth."
        plans={[
          {
            name: 'Starter',
            price: '$0',
            description: 'Perfect for students and hobbyists.',
            features: ['1 Project', 'Basic Analytics', 'Community Support'],
            cta: 'Start for Free'
          },
          {
            name: 'Pro',
            price: '$12',
            description: 'For serious freelancers and job seekers.',
            features: ['Unlimited Projects', 'Custom Domain', 'Advanced Analytics', 'Priority Support'],
            isPopular: true,
            cta: 'Go Pro'
          },
          {
            name: 'Team',
            price: '$49',
            description: 'Collaborate with your agency or team.',
            features: ['5 Team Members', 'Shared Library', 'SSO via Google', 'Dedicated Manager'],
            cta: 'Contact Sales'
          }
        ]}
      />
      <CTA
        title="Not sure yet?"
        description="Start with our free plan and upgrade anytime."
        primaryAction={{ label: 'Create Free Account', href: '/signup' }}
      />
    </div>
  );
}

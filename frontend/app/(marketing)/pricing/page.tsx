
import { PricingTable } from '@/app/sharedComponents/sections/PricingTable';
import { PricingCTA } from '@/app/sharedComponents/sections/PricingCTA';

export default function PricingPage() {
  return (
    <div className="bg-background-primary">
      <PricingTable
        icon="settings"
        title="Services"
        subtitle="Operational baselines for professional engagement and technical consultation."
        plans={[
          {
            name: 'Consultation',
            price: '£0',
            description: 'Initial architectural review and project scope discussion.',
            features: [
              'Technical Assessment',
              'Project Feasibility',
              'Roadmap Generation'
            ],
            cta: 'Initialize Meeting'
          },
          {
            name: 'Development',
            price: '£75',
            description: 'Full-stack engineering and custom application deployment.',
            features: [
              'Custom Web/App UI',
              'Performance Optimization',
              'Infrastructure Scaling',
              'Priority Support'
            ],
            isPopular: true,
            cta: 'Start Project'
          },
          {
            name: 'Infrastructure',
            price: '£150',
            description: 'Advanced networking, home-lab setups, and server architecture.',
            features: [
              'Network Hardening',
              'Server Virtualization',
              'Security Auditing',
              'Direct Protocol Access'
            ],
            cta: 'Request Architecture'
          }
        ]}
      />
      <PricingCTA
        title="Initialize Your Portfolio Node"
        description="Select your service baseline and authorize the deployment of your technical vision through my professional infrastructure."
        primaryAction={{ label: 'Authorize Deployment', href: '/signup' }}
      />
    </div>
  );
}

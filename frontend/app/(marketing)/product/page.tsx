import { ProductHero } from '../../sharedComponents/sections/ProductHero';
import { FeatureGrid } from '../../sharedComponents/sections/FeatureGrid';

export default function ProductPage() {
  return (
    <div className="bg-background-primary">
      <ProductHero
        sectionTag="SERVICE: PORTFOLIO_OVERVIEW"
        title="Software Development & Technical Support"
        description="Comprehensive technical solutions for modern infrastructure. Providing high-performance software engineering, specialized tech support, and systematic digital maintenance for professionals."
      />

      <FeatureGrid
        title="Portfolio Verticals"
        columns={2}
        features={[
          {
            title: 'Web Development',
            description: 'High-performance, responsive interfaces built with Next.js and modern styling systems.',
            icon: 'home'
          },
          {
            title: 'Mobile Applications',
            description: 'Native and cross-platform mobile solutions focusing on fluid UX and reliable logic.',
            icon: 'search'
          },
          {
            title: 'Network Architecture',
            description: 'Custom home lab configurations, routing protocols, and secure infrastructure management.',
            icon: 'hidden'
          },
          {
            title: 'AI & Machine Learning',
            description: 'Leveraging modern LLMs and neural patterns to build intelligent, context-aware digital solutions.',
            icon: 'user'
          },
        ]}
      />
    </div>
  );
}

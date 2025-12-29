import { ContentBlock } from '@/app/sharedComponents/sections/ContentBlock';
import { Card } from '@/app/sharedComponents/ui/Card';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { DocsHeaderIcon } from '@/app/sharedComponents/ui/DocsHeaderIcon';

export default function DocsAPIPage() {
  return (
    <div className="space-y-8">

      <ContentBlock content={
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <DocsHeaderIcon name="projects" size={48} />
            <div>
              <h1 className="text-4xl font-bold text-foreground-primary mb-2">API Reference</h1>
              <p className="text-xl text-foreground-secondary">
                Complete reference for all components, utilities, and APIs.
              </p><br></br>
            </div>
          </div>
          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="code" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Core Components</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground-primary mb-3">Hero Component</h3>
                <p className="text-foreground-secondary mb-3">
                  Main landing section for pages with title, subtitle, and call-to-action buttons.
                </p>
                <Card className="bg-background-muted p-4">
                  <code className="text-sm text-foreground-primary whitespace-pre">
                    {`<Hero
  title="Your Title"
  subtitle="Your subtitle text"
  primaryAction={{ label: 'Get Started', href: '/signup' }}
  secondaryAction={{ label: 'Learn More', href: '/docs' }}
  align="center"
  icon="visible"
/>`}
                  </code>
                </Card>
                <div className="mt-3">
                  <h4 className="font-semibold text-foreground-primary mb-2">Props:</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li><code className="bg-background-muted px-2 py-1 rounded">title</code> (string, required) - Main heading text</li>
                    <li><code className="bg-background-muted px-2 py-1 rounded">subtitle</code> (string, required) - Supporting text</li>
                    <li><code className="bg-background-muted px-2 py-1 rounded">primaryAction</code> (object, required) - Primary CTA button</li>
                    <li><code className="bg-background-muted px-2 py-1 rounded">secondaryAction</code> (object, optional) - Secondary CTA button</li>
                    <li><code className="bg-background-muted px-2 py-1 rounded">align</code> ('left' | 'center', optional) - Text alignment</li>
                    <li><code className="bg-background-muted px-2 py-1 rounded">icon</code> (IconName, optional) - Icon to display</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground-primary mb-3">Card Component</h3>
                <p className="text-foreground-secondary mb-3">
                  Versatile container component with multiple variants and hover effects.
                </p>
                <Card className="bg-background-muted p-4">
                  <code className="text-sm text-foreground-primary whitespace-pre">
                    {`<Card
  variant="bordered"
  padding="lg"
  interactive={true}
  className="custom-class"
>
  Your content here
</Card>`}
                  </code>
                </Card>
                <div className="mt-3">
                  <h4 className="font-semibold text-foreground-primary mb-2">Props:</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li><code className="bg-background-muted px-2 py-1 rounded">variant</code> ('flat' | 'bordered' | 'elevated') - Visual style</li>
                    <li><code className="bg-background-muted px-2 py-1 rounded">padding</code> ('sm' | 'md' | 'lg' | 'xl') - Internal spacing</li>
                    <li><code className="bg-background-muted px-2 py-1 rounded">interactive</code> (boolean) - Enable hover effects</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground-primary mb-3">Button Component</h3>
                <p className="text-foreground-secondary mb-3">
                  Customizable button with multiple variants and sizes.
                </p>
                <Card className="bg-background-muted p-4">
                  <code className="text-sm text-foreground-primary whitespace-pre">
                    {`<Button
  variant="primary"
  size="lg"
  onClick={handleClick}
>
  Click Me
</Button>`}
                  </code>
                </Card>
                <div className="mt-3">
                  <h4 className="font-semibold text-foreground-primary mb-2">Variants:</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li><code className="bg-background-muted px-2 py-1 rounded">primary</code> - Brand colored button</li>
                    <li><code className="bg-background-muted px-2 py-1 rounded">secondary</code> - Muted style</li>
                    <li><code className="bg-background-muted px-2 py-1 rounded">outline</code> - Bordered button</li>
                    <li><code className="bg-background-muted px-2 py-1 rounded">ghost</code> - Minimal style</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="settings" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Utility Functions</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground-primary mb-2">cn() - Class Name Merger</h3>
                <p className="text-sm text-foreground-secondary mb-2">
                  Combines Tailwind classes intelligently, resolving conflicts.
                </p>
                <Card className="bg-background-muted p-3">
                  <code className="text-sm text-foreground-primary">
                    cn('px-4 py-2', 'px-6') // Result: 'px-6 py-2'
                  </code>
                </Card>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="info" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Design Tokens</h2>
            </div>
            <p className="text-foreground-secondary mb-4">
              All design tokens are defined in <code className="bg-background-muted px-2 py-1 rounded">app/styles/tokens.css</code>
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground-primary mb-2">Colors</h3>
                <ul className="text-sm text-foreground-secondary space-y-1">
                  <li><code className="bg-background-muted px-2 py-1 rounded">--color-brand-primary</code></li>
                  <li><code className="bg-background-muted px-2 py-1 rounded">--color-foreground-primary</code></li>
                  <li><code className="bg-background-muted px-2 py-1 rounded">--color-background-primary</code></li>
                </ul>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold text-foreground-primary mb-2">Spacing</h3>
                <ul className="text-sm text-foreground-secondary space-y-1">
                  <li><code className="bg-background-muted px-2 py-1 rounded">--spacing-xs</code> to <code className="bg-background-muted px-2 py-1 rounded">--spacing-6xl</code></li>
                  <li><code className="bg-background-muted px-2 py-1 rounded">--container-padding</code></li>
                  <li><code className="bg-background-muted px-2 py-1 rounded">--section-spacing</code></li>
                </ul>
              </Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="visible" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Animation Utilities</h2>
            </div>
            <p className="text-foreground-secondary mb-4">
              The platform uses Framer Motion for animations. Common patterns:
            </p>
            <Card className="bg-background-muted p-4">
              <code className="text-sm text-foreground-primary whitespace-pre">
                {`const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

<motion.div {...fadeInUp}>
  Content
</motion.div>`}
              </code>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="file" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">TypeScript Types</h2>
            </div>
            <p className="text-foreground-secondary mb-4">
              Key TypeScript interfaces and types used throughout the application:
            </p>
            <Card className="bg-background-muted p-4">
              <code className="text-sm text-foreground-primary whitespace-pre">
                {`interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

type IconName = 'code' | 'visible' | 'settings' | ...;`}
              </code>
            </Card>
          </section>
        </div>
      } />
    </div>
  );
}

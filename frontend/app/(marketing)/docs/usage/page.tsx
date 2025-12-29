import { ContentBlock } from '@/app/sharedComponents/sections/ContentBlock';
import { Card } from '@/app/sharedComponents/ui/Card';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { DocsHeaderIcon } from '@/app/sharedComponents/ui/DocsHeaderIcon';

export default function DocsUsagePage() {
  return (
    <div className="space-y-8">

      <ContentBlock content={
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <DocsHeaderIcon name="dashboard" size={48} />
            <div>
              <h1 className="text-4xl font-bold text-foreground-primary mb-2">Usage Guide</h1>
              <p className="text-xl text-foreground-secondary">
                Learn how to customize and manage your portfolio effectively.
              </p><br></br>
            </div>
          </div>
          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="file" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Project Structure</h2>
            </div>
            <p className="text-foreground-secondary mb-4">
              Understanding the folder structure will help you navigate and customize your portfolio:
            </p>
            <Card className="bg-background-muted p-4">
              <code className="text-sm text-foreground-primary whitespace-pre">
                {`portfolio-platform/
├── app/                    # Next.js app directory
│   ├── (marketing)/       # Public pages
│   ├── (auth)/           # Authentication pages
│   ├── (app)/            # Protected app pages
│   └── sharedComponents/ # Reusable components
├── public/               # Static assets
├── styles/              # Global styles
└── prisma/              # Database schema`}
              </code>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="code" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Adding Projects</h2>
            </div>
            <p className="text-foreground-secondary mb-4">
              To add your projects to the portfolio page:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-foreground-secondary">
              <li>
                <strong>Navigate to the portfolio page:</strong>
                <Card className="bg-background-muted p-3 mt-2">
                  <code className="text-sm">app/(marketing)/portfolio/page.tsx</code>
                </Card>
              </li>
              <li>
                <strong>Update the projects array:</strong>
                <Card className="bg-background-muted p-3 mt-2">
                  <code className="text-sm text-foreground-primary whitespace-pre">
                    {`const projects: Project[] = [
  {
    id: '1',
    name: 'Your Project Name',
    description: 'Short description',
    longDescription: 'Detailed description...',
    technologies: ['React', 'Node.js'],
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...'
  }
];`}
                  </code>
                </Card>
              </li>
              <li>
                <strong>Add project images:</strong> Place images in the <code className="bg-background-muted px-2 py-1 rounded">public/</code> folder and reference them in the image field.
              </li>
            </ol>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="settings" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Customizing Styles</h2>
            </div>
            <p className="text-foreground-secondary mb-4">
              The platform uses a design token system for easy customization:
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-foreground-primary mb-2">Colors</h3>
                <p className="text-sm text-foreground-secondary mb-2">
                  Edit <code className="bg-background-muted px-2 py-1 rounded">app/styles/tokens.css</code> to change the color scheme:
                </p>
                <Card className="bg-background-muted p-3">
                  <code className="text-sm text-foreground-primary">
                    --color-brand-primary: #3b82f6;<br />
                    --color-brand-secondary: #8b5cf6;
                  </code>
                </Card>
              </div>
              <div>
                <h3 className="font-semibold text-foreground-primary mb-2">Typography</h3>
                <p className="text-sm text-foreground-secondary mb-2">
                  Customize fonts in <code className="bg-background-muted px-2 py-1 rounded">app/layout.tsx</code>:
                </p>
                <Card className="bg-background-muted p-3">
                  <code className="text-sm text-foreground-primary">
                    const geistSans = Geist(&#123; subsets: ["latin"] &#125;);
                  </code>
                </Card>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="dashboard" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Managing Content</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground-primary mb-2">Hero Section</h3>
                <p className="text-sm text-foreground-secondary">
                  Edit the hero content in <code className="bg-background-muted px-1 rounded">app/(marketing)/page.tsx</code>
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold text-foreground-primary mb-2">About Section</h3>
                <p className="text-sm text-foreground-secondary">
                  Update your bio and skills in the feature grid components
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold text-foreground-primary mb-2">Blog Posts</h3>
                <p className="text-sm text-foreground-secondary">
                  Add blog posts in <code className="bg-background-muted px-1 rounded">app/(marketing)/blog/</code>
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold text-foreground-primary mb-2">Navigation</h3>
                <p className="text-sm text-foreground-secondary">
                  Customize the header in <code className="bg-background-muted px-1 rounded">app/sharedComponents/layout/Header.tsx</code>
                </p>
              </Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="check" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Best Practices</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
              <li><strong>Optimize images:</strong> Use WebP format and compress images before uploading</li>
              <li><strong>Keep descriptions concise:</strong> Short, impactful descriptions work best</li>
              <li><strong>Update regularly:</strong> Add new projects and blog posts to keep content fresh</li>
              <li><strong>Test responsiveness:</strong> Check your portfolio on different screen sizes</li>
              <li><strong>Use analytics:</strong> Track visitor behavior to improve your portfolio</li>
            </ul>
          </section>
        </div>
      } />
    </div>
  );
}

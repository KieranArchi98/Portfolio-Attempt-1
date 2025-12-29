import { ContentBlock } from '@/app/sharedComponents/sections/ContentBlock';
import { Card } from '@/app/sharedComponents/ui/Card';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { DocsHeaderIcon } from '@/app/sharedComponents/ui/DocsHeaderIcon';

export default function DocsIntroPage() {
  return (
    <div className="space-y-8">


      <ContentBlock content={
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <DocsHeaderIcon name="docs" size={48} />
            <div>
              <h1 className="text-4xl font-bold text-foreground-primary mb-2">Introduction</h1>
              <p className="text-xl text-foreground-secondary">
                Welcome to the comprehensive documentation for building and managing your professional portfolio.
              </p><br></br>
            </div>
          </div>
          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="info" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">What is Portfolio Platform?</h2>
            </div>
            <p className="text-foreground-secondary leading-relaxed">
              Portfolio Platform is a modern, full-featured solution for creatives, developers, and professionals
              to showcase their work. Built with Next.js and designed for performance, it provides everything you
              need to create a stunning online presence.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="settings" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Key Features</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Icon name="visible" size={24} className="text-brand-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground-primary mb-1">Beautiful Templates</h3>
                    <p className="text-sm text-foreground-secondary">Pre-designed, customizable templates to get started quickly</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Icon name="code" size={24} className="text-brand-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground-primary mb-1">Developer Friendly</h3>
                    <p className="text-sm text-foreground-secondary">Built with modern tech stack and best practices</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Icon name="settings" size={24} className="text-brand-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground-primary mb-1">Fully Customizable</h3>
                    <p className="text-sm text-foreground-secondary">Tailor every aspect to match your personal brand</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Icon name="dashboard" size={24} className="text-brand-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground-primary mb-1">Analytics Dashboard</h3>
                    <p className="text-sm text-foreground-secondary">Track visitor engagement and portfolio performance</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="user" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Who Is This For?</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
              <li><strong>Developers</strong> - Showcase your projects, skills, and open-source contributions</li>
              <li><strong>Designers</strong> - Display your creative work with beautiful image galleries</li>
              <li><strong>Freelancers</strong> - Build credibility and attract new clients</li>
              <li><strong>Job Seekers</strong> - Stand out from the competition with a professional portfolio</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="arrowRight" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Getting Started</h2>
            </div>
            <p className="text-foreground-secondary leading-relaxed mb-4">
              Ready to build your portfolio? Follow these simple steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-foreground-secondary">
              <li>Check out the <a href="/docs/installation" className="text-brand-primary hover:underline">Installation Guide</a> to set up your environment</li>
              <li>Learn the basics in the <a href="/docs/usage" className="text-brand-primary hover:underline">Usage Documentation</a></li>
              <li>Explore advanced features in the <a href="/docs/api" className="text-brand-primary hover:underline">API Reference</a></li>
            </ol>
          </section>
        </div>
      } />
    </div>
  );
}

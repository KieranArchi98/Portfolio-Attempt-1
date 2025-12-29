import { ContentBlock } from '@/app/sharedComponents/sections/ContentBlock';
import { Card } from '@/app/sharedComponents/ui/Card';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { DocsHeaderIcon } from '@/app/sharedComponents/ui/DocsHeaderIcon';

export default function DocsInstallationPage() {
  return (
    <div className="space-y-8">

      <ContentBlock content={
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <DocsHeaderIcon name="file" size={48} />
            <div>
              <h1 className="text-4xl font-bold text-foreground-primary mb-2">Installation</h1>
              <p className="text-xl text-foreground-secondary">
                Get your development environment set up and running in minutes.
              </p><br></br>
            </div>
          </div>
          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="check" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Prerequisites</h2>
            </div>
            <p className="text-foreground-secondary mb-4">
              Before you begin, ensure you have the following installed on your system:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
              <li><strong>Node.js</strong> - Version 18.0 or higher</li>
              <li><strong>npm</strong> or <strong>yarn</strong> - Package manager</li>
              <li><strong>Git</strong> - For version control</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="download" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Quick Start</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground-primary mb-2">1. Clone the Repository</h3>
                <Card className="bg-background-muted p-4">
                  <code className="text-sm text-foreground-primary">
                    git clone https://github.com/yourusername/portfolio-platform.git<br />
                    cd portfolio-platform
                  </code>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground-primary mb-2">2. Install Dependencies</h3>
                <Card className="bg-background-muted p-4">
                  <code className="text-sm text-foreground-primary">
                    npm install<br />
                    # or<br />
                    yarn install
                  </code>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground-primary mb-2">3. Set Up Environment Variables</h3>
                <p className="text-foreground-secondary mb-2">Create a <code className="bg-background-muted px-2 py-1 rounded">.env.local</code> file in the root directory:</p>
                <Card className="bg-background-muted p-4">
                  <code className="text-sm text-foreground-primary">
                    DATABASE_URL="your_database_url"<br />
                    NEXTAUTH_SECRET="your_secret_key"<br />
                    NEXTAUTH_URL="http://localhost:3000"
                  </code>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground-primary mb-2">4. Run Database Migrations</h3>
                <Card className="bg-background-muted p-4">
                  <code className="text-sm text-foreground-primary">
                    npx prisma migrate dev
                  </code>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground-primary mb-2">5. Start the Development Server</h3>
                <Card className="bg-background-muted p-4">
                  <code className="text-sm text-foreground-primary">
                    npm run dev<br />
                    # or<br />
                    yarn dev
                  </code>
                </Card>
                <p className="text-foreground-secondary mt-2">
                  Open <a href="http://localhost:3000" className="text-brand-primary hover:underline">http://localhost:3000</a> in your browser to see your portfolio.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="visible" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Deployment</h2>
            </div>
            <p className="text-foreground-secondary mb-4">
              Deploy your portfolio to production with these popular platforms:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground-primary mb-2">Vercel (Recommended)</h3>
                <p className="text-sm text-foreground-secondary mb-3">
                  The easiest way to deploy Next.js applications.
                </p>
                <Card className="bg-background-muted p-3">
                  <code className="text-xs text-foreground-primary">
                    vercel deploy
                  </code>
                </Card>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold text-foreground-primary mb-2">Netlify</h3>
                <p className="text-sm text-foreground-secondary mb-3">
                  Great alternative with continuous deployment.
                </p>
                <Card className="bg-background-muted p-3">
                  <code className="text-xs text-foreground-primary">
                    netlify deploy --prod
                  </code>
                </Card>
              </Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Icon name="alert" size={28} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-foreground-primary">Troubleshooting</h2>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-foreground-primary">Port already in use?</h3>
                <p className="text-sm text-foreground-secondary">
                  Change the port by running: <code className="bg-background-muted px-2 py-1 rounded">PORT=3001 npm run dev</code>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground-primary">Module not found errors?</h3>
                <p className="text-sm text-foreground-secondary">
                  Try deleting <code className="bg-background-muted px-2 py-1 rounded">node_modules</code> and <code className="bg-background-muted px-2 py-1 rounded">.next</code>, then run <code className="bg-background-muted px-2 py-1 rounded">npm install</code> again.
                </p>
              </div>
            </div>
          </section>
        </div>
      } />
    </div>
  );
}

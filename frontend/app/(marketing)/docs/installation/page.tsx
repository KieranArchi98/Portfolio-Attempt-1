import { ContentBlock } from '@/app/sharedComponents/sections/ContentBlock';
import { Card } from '@/app/sharedComponents/ui/Card';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { DocsHeaderIcon } from '@/app/sharedComponents/ui/DocsHeaderIcon';

export default function DocsInstallationPage() {
  return (
    <div className="space-y-8">

      <ContentBlock content={
        <div className="space-y-6 text-foreground-secondary leading-relaxed font-mono lowercase">
          <div className="flex items-center gap-4 mb-8">
            <DocsHeaderIcon name="file" size={48} />
            <div>
              <h1 className="text-4xl font-black text-foreground-primary tracking-tighter uppercase mb-2">
                Deployment <span className="text-brand-primary">Protocols</span>
              </h1>
              <p className="text-sm border-l-2 border-brand-primary pl-4 py-1 italic opacity-80">
                Automated CI/CD Pipelines, Infrastructure as Code, and Security Verification.
              </p>
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="check" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">Provisioning Requirements</h2>
            </div>
            <p>
              Before initializing deployment, ensure the target environment meets the following baseline metrics:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="p-3 bg-background-secondary/20 rounded-lg border border-white/5">
                <span className="text-brand-primary font-bold block mb-1">Runtime</span> Node.js 18.x +
              </li>
              <li className="p-3 bg-background-secondary/20 rounded-lg border border-white/5">
                <span className="text-brand-primary font-bold block mb-1">Engine</span> PNPM/NPM v10+
              </li>
              <li className="p-3 bg-background-secondary/20 rounded-lg border border-white/5">
                <span className="text-brand-primary font-bold block mb-1">Compute</span> Docker Engine v24+
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="download" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">System Initialization</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground-primary mb-3 uppercase tracking-widest">01. Source Acquisition</h3>
                <Card className="bg-background-muted p-4 border-l-4 border-brand-primary">
                  <code className="text-xs text-foreground-primary whitespace-pre">
                    git clone https://github.com/KieranArchi98/Atlas-Portfolio.git<br />
                    cd Atlas-Portfolio/frontend
                  </code>
                </Card>
              </div>

              <div>
                <h3 className="text-sm font-bold text-foreground-primary mb-3 uppercase tracking-widest">02. Dependency Synchronization</h3>
                <Card className="bg-background-muted p-4 border-l-4 border-brand-primary">
                  <code className="text-xs text-foreground-primary">
                    npm install --frozen-lockfile
                  </code>
                </Card>
              </div>

              <div>
                <h3 className="text-sm font-bold text-foreground-primary mb-3 uppercase tracking-widest">03. Telemetry Configuration</h3>
                <p className="text-xs mb-3">Initialize environment variables for the Gemini AI monitoring hooks:</p>
                <Card className="bg-background-muted p-4 border-l-4 border-brand-primary">
                  <code className="text-xs text-foreground-primary whitespace-pre">
                    GEMINI_API_KEY="your_api_hook"<br />
                    TELEMETRY_PORT=3000<br />
                    CI_ENV="production"
                  </code>
                </Card>
              </div>
            </div>
          </section>

          <section className="p-6 bg-background-secondary/10 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="visible" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">Gemini AI Pipeline</h2>
            </div>
            <p className="text-xs mb-6 italic opacity-70">
              The Gemini AI CI/CD engine handles automated testing, security scanning, and containerized deployment.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <span className="text-brand-primary font-black uppercase tracking-widest">Phase A: Validation</span>
                <p>Automated Jest and PyTest cycles with coverage reporting integrated into the terminal HUD.</p>
              </div>
              <div className="space-y-2">
                <span className="text-brand-primary font-black uppercase tracking-widest">Phase B: Distribution</span>
                <p>Multi-stage Docker builds optimized for edge computing and low-latency response times.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="alert" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">Integrity Verification</h2>
            </div>
            <div className="space-y-3 p-4 bg-brand-primary/5 rounded-xl text-xs">
              <p className="font-bold text-foreground-primary">Mismatch in hydration?</p>
              <p>Verify that the server and client clocks are synchronized within the Mission Control NTP pool.</p>
              <p className="font-bold text-foreground-primary mt-4">Pipeline timeout?</p>
              <p>Increase the Gemini AI observation window by adjusting the <code className="bg-background-muted px-1">WAIT_MS</code> token in the build config.</p>
            </div>
          </section>
        </div>
      } />
    </div>
  );
}

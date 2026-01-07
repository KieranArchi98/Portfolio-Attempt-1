import { ContentBlock } from '@/app/sharedComponents/sections/ContentBlock';
import { Card } from '@/app/sharedComponents/ui/Card';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { DocsHeaderIcon } from '@/app/sharedComponents/ui/DocsHeaderIcon';

export default function DocsUsagePage() {
  return (
    <div className="space-y-8">

      <ContentBlock content={
        <div className="space-y-6 text-foreground-secondary leading-relaxed font-mono lowercase">
          <div className="flex items-center gap-4 mb-8">
            <DocsHeaderIcon name="dashboard" size={48} />
            <div>
              <h1 className="text-4xl font-black text-foreground-primary tracking-tighter uppercase mb-2">
                Operations <span className="text-brand-primary">Manual</span>
              </h1>
              <p className="text-sm border-l-2 border-brand-primary pl-4 py-1 italic opacity-80">
                Instructional Sets for Network Diagnostics, CLI Automation, and Agentic Flow.
              </p>
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="file" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">System Hierarchy</h2>
            </div>
            <p>
              Navigation through the Atlas file system is structured according to modular separation of concerns:
            </p>
            <Card className="bg-background-muted p-4 border-l-4 border-brand-primary overflow-x-auto text-[10px] md:text-xs">
              <code className="text-foreground-primary whitespace-pre">
                {`Atlas-Portfolio/
├── core/                # Python-based diagnostic engines
├── cli/                 # PowerShell automation toolkits
├── frontend/            # High-fidelity React application
└── pipelines/           # Gemini AI CI/CD orchestration`}
              </code>
            </Card>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="code" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">Diagnostic Procedures</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-background-secondary/20 rounded-xl border border-white/5">
                <h3 className="text-xs font-bold text-brand-primary mb-2 uppercase tracking-widest">NetDoctor Execution</h3>
                <p className="text-xs mb-3">To initiate a high-fidelity network scan using the NetDoctor engine:</p>
                <Card className="bg-background-muted p-3">
                  <code className="text-xs text-foreground-primary">python core/netdoctor.py --target 192.168.1.0/24 --mode intensive</code>
                </Card>
              </div>

              <div className="p-4 bg-background-secondary/20 rounded-xl border border-white/5">
                <h3 className="text-xs font-bold text-brand-primary mb-2 uppercase tracking-widest">PowerShell CLI Interaction</h3>
                <p className="text-xs mb-3">Synchronize AD/DC environment metrics via the automated CLI toolkit:</p>
                <Card className="bg-background-muted p-3">
                  <code className="text-xs text-foreground-primary">./cli/AtlasToolkit.ps1 -SyncDomain -Verbose</code>
                </Card>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="settings" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">Agentic Logic (Konnect)</h2>
            </div>
            <p className="text-xs">
              The Konnect engine orchestrates proactive AI agents based on environmental triggers detected by the telemetry layer.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4 bg-background-secondary/30">
                <h4 className="font-bold text-foreground-primary uppercase text-[10px] mb-2 tracking-widest">Trigger Mapping</h4>
                <p className="text-[10px] leading-relaxed italic opacity-70">"Detect network anomaly -&gt; Initiate Scapy diagnostic -&gt; Relay results to Gemini LLM for analysis."</p>
              </Card>
              <Card className="p-4 bg-background-secondary/30">
                <h4 className="font-bold text-foreground-primary uppercase text-[10px] mb-2 tracking-widest">Knowledge Ingestion</h4>
                <p className="text-[10px] leading-relaxed italic opacity-70">Persistent memory layers allow agents to retain context across multi-stage operational cycles.</p>
              </Card>
            </div>
          </section>

          <section className="p-6 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="check" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">Operational Compliance</h2>
            </div>
            <ul className="space-y-2 text-xs opacity-80">
              <li className="flex gap-2"><span>[01]</span> Always verify interface connectivity before initializing Scapy scripts.</li>
              <li className="flex gap-2"><span>[02]</span> Monitor terminal telemetry during Gemini AI build cycles.</li>
              <li className="flex gap-2"><span>[03]</span> Ensure AD/DC credentials are stored in the secure Mission Control vault.</li>
            </ul>
          </section>
        </div>
      } />
    </div>
  );
}

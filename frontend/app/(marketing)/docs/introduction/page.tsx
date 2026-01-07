import { ContentBlock } from '@/app/sharedComponents/sections/ContentBlock';
import { Card } from '@/app/sharedComponents/ui/Card';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { DocsHeaderIcon } from '@/app/sharedComponents/ui/DocsHeaderIcon';

export default function DocsIntroPage() {
  return (
    <div className="space-y-8">


      <ContentBlock content={
        <div className="space-y-6 text-foreground-secondary leading-relaxed font-mono lowercase">
          <div className="flex items-center gap-4 mb-8">
            <DocsHeaderIcon name="docs" size={48} />
            <div>
              <h1 className="text-4xl font-black text-foreground-primary tracking-tighter uppercase mb-2">
                Technical <span className="text-brand-primary">Overview</span>
              </h1>
              <p className="text-sm border-l-2 border-brand-primary pl-4 py-1 italic opacity-80">
                Mission Control: Integrated Systems, Autonomous Logic, and Digital Telemetry.
              </p>
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="info" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">System Philosophy</h2>
            </div>
            <p>
              The Atlas Ecosystem is built on the principle of <span className="text-brand-primary font-bold">Resilient Autonomy</span>. Every project, from LangChain orchestrators to network diagnostics, is a component of a unified "Mission Control" layer designed for high-fidelity technical operations.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="settings" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">Core Modules</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-5 bg-background-secondary/30 border-white/5">
                <div className="flex items-start gap-4">
                  <Icon name="code" size={20} className="text-brand-primary shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground-primary uppercase text-xs mb-2">Agentic Orchestration</h3>
                    <p className="text-xs leading-5">Autonomous LangChain coordination (Konnect) with real-time RAG integration and stateful persistence.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 bg-background-secondary/30 border-white/5">
                <div className="flex items-start gap-4">
                  <Icon name="dashboard" size={20} className="text-brand-primary shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground-primary uppercase text-xs mb-2">Diagnostic Telemetry</h3>
                    <p className="text-xs leading-5">Python-based network troubleshooting (NetDoctor) featuring real-time Scapy analysis and protocol verification.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 bg-background-secondary/30 border-white/5">
                <div className="flex items-start gap-4">
                  <Icon name="visible" size={20} className="text-brand-primary shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground-primary uppercase text-xs mb-2">Infrastructure CI/CD</h3>
                    <p className="text-xs leading-5">Automated DevOps pipelines (Gemini AI) with integrated security auditing and performance telemetry.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 bg-background-secondary/30 border-white/5">
                <div className="flex items-start gap-4">
                  <Icon name="settings" size={20} className="text-brand-primary shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground-primary uppercase text-xs mb-2">Automation Toolkits</h3>
                    <p className="text-xs leading-5">High-performance PowerShell modules and CLI utilities for enterprise-grade Windows environment management.</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="p-6 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="user" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">Tech Stack Signature</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Next.js 15', 'TypeScript 5', 'Framer Motion', 'Tailwind CSS', 'Python/Scapy', 'PowerShell Core', 'LangChain'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-background-secondary rounded text-[10px] font-black uppercase text-brand-primary/80 border border-brand-primary/20">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Icon name="arrowRight" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">Operational Procedures</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/docs/installation" className="group p-4 bg-background-secondary/20 rounded-xl border border-white/5 hover:border-brand-primary/40 transition-all">
                <span className="text-[10px] font-black uppercase text-brand-primary mb-2 block tracking-widest">Protocol 01</span>
                <span className="text-sm font-bold block text-foreground-primary group-hover:text-brand-primary transition-colors">Deployment Protocols</span>
              </a>
              <a href="/docs/usage" className="group p-4 bg-background-secondary/20 rounded-xl border border-white/5 hover:border-brand-primary/40 transition-all">
                <span className="text-[10px] font-black uppercase text-brand-primary mb-2 block tracking-widest">Protocol 02</span>
                <span className="text-sm font-bold block text-foreground-primary group-hover:text-brand-primary transition-colors">Operations Manual</span>
              </a>
              <a href="/docs/api" className="group p-4 bg-background-secondary/20 rounded-xl border border-white/5 hover:border-brand-primary/40 transition-all">
                <span className="text-[10px] font-black uppercase text-brand-primary mb-2 block tracking-widest">Protocol 03</span>
                <span className="text-sm font-bold block text-foreground-primary group-hover:text-brand-primary transition-colors">Core Architecture</span>
              </a>
            </div>
          </section>
        </div>
      } />
    </div>
  );
}

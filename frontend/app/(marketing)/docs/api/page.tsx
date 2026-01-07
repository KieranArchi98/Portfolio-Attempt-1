import { ContentBlock } from '@/app/sharedComponents/sections/ContentBlock';
import { Card } from '@/app/sharedComponents/ui/Card';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { DocsHeaderIcon } from '@/app/sharedComponents/ui/DocsHeaderIcon';

export default function DocsAPIPage() {
  return (
    <div className="space-y-8">

      <ContentBlock content={
        <div className="space-y-6 text-foreground-secondary leading-relaxed font-mono lowercase">
          <div className="flex items-center gap-4 mb-8">
            <DocsHeaderIcon name="projects" size={48} />
            <div>
              <h1 className="text-4xl font-black text-foreground-primary tracking-tighter uppercase mb-2">
                Core <span className="text-brand-primary">Architecture</span>
              </h1>
              <p className="text-sm border-l-2 border-brand-primary pl-4 py-1 italic opacity-80">
                Design Systems, Interaction Logic, and AI Communication Protocols.
              </p>
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="code" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">Design Token: Digital Telemetry</h2>
            </div>
            <p>
              The visual layer is governed by a technical design system mapped to real-world infrastructure aesthetics.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4 bg-background-secondary/30">
                <h4 className="font-bold text-brand-primary uppercase text-[10px] mb-2 tracking-widest">Brand Primary</h4>
                <code className="text-[10px] text-foreground-primary">--color-brand-primary: hsl(221, 83%, 53%)</code>
                <p className="text-[9px] mt-2 opacity-60 italic">"The signal highlight across the Mission Control interface."</p>
              </Card>
              <Card className="p-4 bg-background-secondary/30">
                <h4 className="font-bold text-brand-primary uppercase text-[10px] mb-2 tracking-widest">Tech Background</h4>
                <code className="text-[10px] text-foreground-primary">--color-background-primary: hsl(222, 47%, 11%)</code>
                <p className="text-[9px] mt-2 opacity-60 italic">"The deep-space void for high-contrast telemetry display."</p>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="visible" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">3D Interaction Layer</h2>
            </div>
            <p className="text-xs">
              Project engagement is enhanced via a high-fidelity 3D tilt engine (ProjectCard3D) integrated with Framer Motion.
            </p>
            <Card className="bg-background-muted p-4 border-l-4 border-brand-primary">
              <code className="text-xs text-foreground-primary whitespace-pre">
                {`const tiltEffect = {
  rotateX: useTransform(y, [0, height], [15, -15]),
  rotateY: useTransform(x, [0, width], [-15, 15]),
  preserve3d: true
};`}
              </code>
            </Card>
          </section>

          <section className="p-6 bg-background-secondary/10 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="settings" size={24} className="text-brand-primary" />
              <h2 className="text-xl font-bold text-foreground-primary uppercase tracking-tight">Communication Protocols</h2>
            </div>
            <div className="space-y-4 text-xs">
              <div className="border-b border-white/5 pb-4">
                <span className="text-brand-primary font-black uppercase tracking-widest block mb-1">RAG Data Ingestion</span>
                <p>Vector embeddings (Gemini AI) are synchronized via a secure transmission layer to the Konnect orchestration engine.</p>
              </div>
              <div>
                <span className="text-brand-primary font-black uppercase tracking-widest block mb-1">Telemetry Broadcast</span>
                <p>Real-time metrics from the NetDoctor Python core are streamed to the frontend via high-frequency state updates.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4 text-xs opacity-60">
            <div className="flex items-center gap-3">
              <Icon name="info" size={20} />
              <span className="font-bold uppercase tracking-widest">Protocol Version: 1.0.4-LTS</span>
            </div>
            <p>This architecture is designed for vertical scalability and horizontal component integration across the Atlas ecosystem.</p>
          </section>
        </div>
      } />
    </div>
  );
}


import { Sidebar } from '@/app/sharedComponents/layout/Sidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background-primary relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Content Container - centered with max width */}
      <div className="relative z-10 w-[92%] xl:w-[88%] 2xl:w-[85%] max-w-[1600px] mx-auto pt-32 md:pt-40 px-6 pb-20">
        <div className="relative flex flex-col lg:flex-row gap-4 items-start">
          <Sidebar type="docs" />

          <main className="flex-1 w-full lg:w-auto lg:ml-[19rem]">
            <div className="bg-white backdrop-blur-xl border border-white/20 rounded-3xl p-8 pt-32 lg:p-12 shadow-sm min-h-[50vh]">
              <article className="prose prose-slate max-w-none">
                {children}
              </article>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

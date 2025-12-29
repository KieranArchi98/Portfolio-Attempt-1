
import { Sidebar } from '@/app/sharedComponents/layout/Sidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
      {/* Note: Docs is inside Marketing layout? No, route groups in app/ are siblings. 
           Wait, folder-structure.json:
           (marketing) { pages: docs { layout.tsx ... } }
           So DocsLayout is NESTED inside MarketingLayout (because docs is inside marketing config).
           If docs is in `(marketing)/docs`, then it inherits `(marketing)/layout.tsx`!
           (marketing)/layout.tsx already has Header/Footer.
           So `DocsLayout` should ONLY add the Sidebar and content wrapper.
       */}
      <Sidebar type="docs" />
      <main className="flex-1 p-8 md:p-12 overflow-y-auto w-full">
        <article className="prose prose-slate max-w-none w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto">
          {children}
        </article>
      </main>
    </div>
  );
}

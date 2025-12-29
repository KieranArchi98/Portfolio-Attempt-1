
import { Sidebar } from '@/app/sharedComponents/layout/Sidebar';
import { Header } from '@/app/sharedComponents/layout/Header';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background-secondary font-sans">
      <Sidebar type="app" />
      <div className="flex-1 flex flex-col">
        {/* App usually has a different header or simplified one, but reusing main Header for now per layout definitions */}
        <Header />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}


import { Header } from '@/app/sharedComponents/layout/Header';
import { Footer } from '@/app/sharedComponents/layout/Footer';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background-primary font-sans">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <div className="prose prose-slate max-w-none">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

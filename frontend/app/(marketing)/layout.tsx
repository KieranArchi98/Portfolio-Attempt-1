
import { Header } from '@/app/sharedComponents/layout/Header';
import { Footer } from '@/app/sharedComponents/layout/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background-primary text-foreground-primary font-sans">
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

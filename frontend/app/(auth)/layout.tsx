import Link from 'next/link';
import { BrandingLogo } from '@/app/sharedComponents/ui/BrandingLogo';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-muted p-6 md:p-12 font-sans">
      <div className="w-full md:w-[85%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] space-y-8">
        <div className="flex justify-center">
          <Link href="/" className="flex justify-center">
            <BrandingLogo size={256} />
          </Link>
        </div>
        <div className="bg-background-primary p-10 md:p-14 lg:p-20 rounded-2xl shadow-xl border border-border-default">
          {children}
        </div>
      </div>
    </div>
  );
}

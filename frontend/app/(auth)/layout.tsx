import Link from 'next/link';
import { BrandingLogo } from '@/app/sharedComponents/ui/BrandingLogo';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-background-muted p-6 pt-10 font-sans">
      <div className="w-full md:w-[85%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] space-y-4">
        <div className="flex justify-center">
          <Link href="/" className="inline-flex">
            <BrandingLogo size={256} />
          </Link>
        </div>
        <div className="bg-background-primary p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl border border-border-default">
          {children}
        </div>
      </div>
    </div>
  );
}

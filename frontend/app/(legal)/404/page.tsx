
import { Button } from '@/app/sharedComponents/ui/Button';
import Link from 'next/link';

export default function Page404() {
  return (
    <div className="text-center py-20 space-y-6">
      <h1 className="text-6xl font-bold text-brand-primary">404</h1>
      <h2 className="text-2xl font-semibold text-foreground-primary">Page not found</h2>
      <p className="text-foreground-muted max-w-md mx-auto">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed or relocated.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost">Contact Support</Button>
        </Link>
      </div>
    </div>
  );
}

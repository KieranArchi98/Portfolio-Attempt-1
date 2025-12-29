
import { Button } from '@/app/sharedComponents/ui/Button';
import { Input } from '@/app/sharedComponents/ui/Input';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-foreground-primary">Welcome back</h1>
        <p className="text-sm text-foreground-muted">Enter your credentials to access your account</p>
      </div>

      <form className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="name@example.com"
          leftIcon="user"
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          leftIcon="hidden" // or lock if available
        />
        <Button className="w-full" size="lg">Sign In</Button>
      </form>

      <div className="text-center text-sm text-foreground-secondary">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-brand-primary hover:underline font-medium">
          Sign up
        </Link>
      </div>
    </div>
  );
}

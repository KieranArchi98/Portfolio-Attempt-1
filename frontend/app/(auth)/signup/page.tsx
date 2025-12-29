
import { Button } from '@/app/sharedComponents/ui/Button';
import { Input } from '@/app/sharedComponents/ui/Input';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-foreground-primary">Create an account</h1>
        <p className="text-sm text-foreground-muted">Start building your portfolio today</p>
      </div>

      <form className="space-y-3">
        <Input
          label="Full Name"
          placeholder="John Doe"
        />
        <Input
          label="Email"
          type="email"
          placeholder="name@example.com"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          helperText="Must be at least 8 characters"
        />
        <Button className="w-full" size="lg">Create Account</Button>
      </form>

      <div className="text-center text-sm text-foreground-secondary">
        Already have an account?{' '}
        <Link href="/login" className="text-brand-primary hover:underline font-medium">
          Sign in
        </Link>
      </div>
    </div>
  );
}

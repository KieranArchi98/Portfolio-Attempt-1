
import { ContentBlock } from '@/app/sharedComponents/sections/ContentBlock';

export default function TermsPage() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4 text-center mb-10">
        <h1 className="text-4xl font-bold text-foreground-primary">Terms of Service</h1>
        <p className="text-foreground-muted mt-4">Last updated: December 2025</p>
      </div>
      <ContentBlock content={
        <div className="space-y-6 text-foreground-secondary">
          <p>Welcome to Portfolio. By using our website, you agree to these terms.</p>
          <h3 className="text-xl font-bold text-foreground-primary">1. Usage</h3>
          <p>You agree to use our platform for lawful purposes only.</p>
          <h3 className="text-xl font-bold text-foreground-primary">2. Content</h3>
          <p>You retain ownership of all content you post to the platform.</p>
          <h3 className="text-xl font-bold text-foreground-primary">3. Termination</h3>
          <p>We reserve the right to terminate accounts that violate our policies.</p>
        </div>
      } />
    </div>
  );
}

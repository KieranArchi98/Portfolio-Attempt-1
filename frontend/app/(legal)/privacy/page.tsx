
import { ContentBlock } from '@/app/sharedComponents/sections/ContentBlock';

export default function PrivacyPage() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4 text-center mb-10">
        <h1 className="text-4xl font-bold text-foreground-primary">Privacy Policy</h1>
        <p className="text-foreground-muted mt-4">Last updated: December 2025</p>
      </div>
      <ContentBlock content={
        <div className="space-y-6 text-foreground-secondary">
          <p>Your privacy is important to us.</p>
          <h3 className="text-xl font-bold text-foreground-primary">Data Collection</h3>
          <p>We collect only the information necessary to provide our service.</p>
          <h3 className="text-xl font-bold text-foreground-primary">Cookies</h3>
          <p>We use cookies to improve your experience on our site.</p>
        </div>
      } />
    </div>
  );
}

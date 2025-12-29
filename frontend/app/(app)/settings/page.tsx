
"use client";
import { Button } from '@/app/sharedComponents/ui/Button';
import { Input } from '@/app/sharedComponents/ui/Input';
import { Card } from '@/app/sharedComponents/ui/Card';
import { useToast } from '@/app/sharedComponents/ui/Toast';

export default function SettingsPage() {
  const { showToast } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    /* Mock save */
    showToast('Settings saved successfully', 'success');
  };

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground-primary">Settings</h1>
        <p className="text-foreground-secondary">Manage your account preferences</p>
      </div>

      <Card variant="bordered">
        <form onSubmit={handleSave} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b border-border-muted pb-2">Profile</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="First Name" defaultValue="Jane" />
              <Input label="Last Name" defaultValue="Doe" />
            </div>
            <Input label="Email" type="email" defaultValue="jane@example.com" />
            <Input label="Bio" placeholder="Tell us about yourself" />
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </Card>

      <Card variant="bordered" className="border-semantic-error/20 bg-semantic-error/5">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-semantic-error">Danger Zone</h2>
          <p className="text-sm text-foreground-secondary">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button variant="destructive">Delete Account</Button>
        </div>
      </Card>
    </div>
  );
}


import { Card } from '@/app/sharedComponents/ui/Card';
import { Button } from '@/app/sharedComponents/ui/Button';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground-primary">Dashboard</h1>
        <Button>New Project</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="bordered">
          <h3 className="text-foreground-secondary font-medium text-sm">Total Views</h3>
          <p className="text-3xl font-bold text-foreground-primary mt-2">1,234</p>
        </Card>
        <Card variant="bordered">
          <h3 className="text-foreground-secondary font-medium text-sm">Active Projects</h3>
          <p className="text-3xl font-bold text-foreground-primary mt-2">8</p>
        </Card>
        <Card variant="bordered">
          <h3 className="text-foreground-secondary font-medium text-sm">Messages</h3>
          <p className="text-3xl font-bold text-foreground-primary mt-2">3</p>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground-primary">Recent Activity</h2>
        <Card className="min-h-[200px] flex items-center justify-center text-foreground-muted">
          No recent activity
        </Card>
      </div>
    </div>
  );
}

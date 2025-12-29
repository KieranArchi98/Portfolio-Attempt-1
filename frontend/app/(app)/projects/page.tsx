
import { Card } from '@/app/sharedComponents/ui/Card';
import { Button } from '@/app/sharedComponents/ui/Button';
import { List } from '@/app/sharedComponents/ui/List';

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: 'Personal Portfolio v1', description: 'Updated 2 days ago', icon: 'visible' as const },
    { id: 2, title: 'E-commerce Mockup', description: 'Updated 5 days ago' },
    { id: 3, title: 'Client Proposal', description: 'Updated 1 week ago' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground-primary">Projects</h1>
        <Button>Create Project</Button>
      </div>

      <Card variant="bordered">
        <List
          items={projects}
          variant="unordered"
        />
      </Card>
    </div>
  );
}

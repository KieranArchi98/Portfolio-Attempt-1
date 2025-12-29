
import { Card } from '@/app/sharedComponents/ui/Card';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    { slug: 'building-a-portfolio', title: 'How to Build a Winning Portfolio', date: 'Oct 12, 2025', excerpt: 'Tips and tricks for showcasing your best work.' },
    { slug: 'design-trends-2025', title: 'Top Design Trends of 2025', date: 'Sep 28, 2025', excerpt: 'What is hot in the creative world right now.' },
    { slug: 'networking-101', title: 'Networking for Introverts', date: 'Sep 15, 2025', excerpt: 'Connect with meaningful people without the stress.' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Icon name="file" size={48} className="text-brand-primary" />
          <h1 className="text-4xl font-bold text-foreground-primary">My Blog</h1>
        </div>
        <p className="text-foreground-muted">Insights, tutorials, and news from the team.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card interactive className="h-full">
              <div className="mb-4">
                <span className="text-xs font-semibold text-brand-primary uppercase tracking-wide">Article</span>
              </div>
              <h3 className="text-xl font-bold text-foreground-primary mb-2">{post.title}</h3>
              <p className="text-foreground-secondary mb-4 line-clamp-2">{post.excerpt}</p>
              <span className="text-sm text-foreground-muted">{post.date}</span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

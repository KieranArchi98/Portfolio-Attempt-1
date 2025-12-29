import { Card } from '@/app/sharedComponents/ui/Card';
import { AnimatedRitualIcon } from '@/app/sharedComponents/ui/AnimatedRitualIcon';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      slug: 'the-rise-of-agentic-systems',
      title: 'The Rise of Agentic Systems',
      date: 'Dec 24, 2025',
      excerpt: 'Exploring the shift from static dashboards to proactive agentic environments. An introduction to the philosophy behind Konnect.'
    },
    {
      slug: 'automating-network-diagnostics',
      title: 'Automating Network Diagnostics',
      date: 'Nov 18, 2025',
      excerpt: 'Leveraging Python and Scapy to build rapid troubleshooting utilities. A technical deep-dive into the NetDoctor architecture.'
    },
    {
      slug: 'scripting-the-infrastructure',
      title: 'Scripting the Infrastructure',
      date: 'Oct 05, 2025',
      excerpt: 'Building robust, reusable PowerShell toolkits for modern Windows environments. Strategies for low-maintenance sysadmin automation.'
    },
  ];

  return (
    <div className="pt-10 pb-20 lg:pt-14 lg:pb-28 relative overflow-hidden bg-background-primary">
      <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 space-y-8 w-full">
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            <AnimatedRitualIcon
              name="docs"
              size={64}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-primary tracking-tighter uppercase font-mono">
              Blog
            </h1>
          </div>
          <p className="text-base md:text-lg lg:text-xl font-mono opacity-60 w-full text-center lowercase tracking-tight">
            Transmissions, technical deep-dives, and system architecture logs.
          </p>
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
    </div>
  );
}

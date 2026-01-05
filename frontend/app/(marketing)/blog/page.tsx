"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/app/sharedComponents/ui/Icon';

export default function BlogPage() {
  const posts = [
    {
      slug: 'the-rise-of-agentic-systems',
      title: 'The Rise of Agentic Systems',
      date: 'Dec 24, 2025',
      category: 'Architecture',
      excerpt: 'Exploring the shift from static dashboards to proactive agentic environments. An introduction to the philosophy behind Konnect.'
    },
    {
      slug: 'automating-network-diagnostics',
      title: 'Automating Network Diagnostics',
      date: 'Nov 18, 2025',
      category: 'Engineering',
      excerpt: 'Leveraging Python and Scapy to build rapid troubleshooting utilities. A technical deep-dive into the NetDoctor architecture.'
    },
    {
      slug: 'scripting-the-infrastructure',
      title: 'Scripting the Infrastructure',
      date: 'Oct 05, 2025',
      category: 'Automation',
      excerpt: 'Building robust, reusable PowerShell toolkits for modern Windows environments. Strategies for low-maintenance sysadmin automation.'
    },
  ];

  return (
    <div className="pt-20 pb-32 relative overflow-hidden bg-background-primary min-h-screen">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Section: Persona Sidebar / Mobile Header */}
          <div className="xl:col-span-4 xl:sticky xl:top-32 h-fit space-y-8">
            <div className="flex xl:flex-col items-center xl:items-start gap-6 xl:gap-8">
              {/* Avatar Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="relative shrink-0"
              >
                <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full" />
                <div className="relative w-20 h-20 md:w-32 md:h-32 xl:w-48 xl:h-48 rounded-full p-1 border border-white/10 backdrop-blur-3xl overflow-hidden bg-background-secondary/30 shadow-2xl">
                  <img
                    src="/projects/avatar-kieran.png"
                    alt="Kieran"
                    className="w-full h-full object-cover rounded-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-brand-primary rounded-full border-4 border-background-primary flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                </div>
              </motion.div>

              {/* Text / Speech Bubble */}
              <div className="space-y-4 flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-2xl md:text-3xl xl:text-5xl font-black text-foreground-primary tracking-tighter uppercase font-mono text-center xl:text-left">
                    Kieran<span className="text-brand-primary">.log</span>
                  </h1>
                  <p className="text-[10px] font-black uppercase tracking-widest text-foreground-muted/50 font-mono mt-1 text-center xl:text-left">
                    Principal Systems Architect
                  </p>
                </motion.div>

                {/* Speech Bubble */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative bg-background-secondary/50 border border-border-default p-4 md:p-6 rounded-2xl md:rounded-3xl backdrop-blur-xl group"
                >
                  {/* Bubble Tail */}
                  <div className="absolute -left-2 top-6 xl:top-8 w-4 h-4 bg-background-secondary border-l border-b border-border-default rotate-45 hidden xl:block" />
                  <div className="absolute left-6 xl:left-8 -top-2 w-4 h-4 bg-background-secondary border-l border-t border-border-default rotate-45 xl:hidden" />

                  <p className="text-xs md:text-sm font-mono text-foreground-secondary leading-relaxed lowercase">
                    Transmitting technical deep-dives on <span className="text-brand-primary font-bold">agentic design</span> and resilient infrastructure. Stay synchronized.
                  </p>

                  <div className="mt-4 flex gap-4 opacity-40 group-hover:opacity-100 transition-opacity justify-center xl:justify-start">
                    <Icon name="github" size={14} className="hover:text-brand-primary cursor-pointer" />
                    <Icon name="linkedin" size={14} className="hover:text-brand-primary cursor-pointer" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Section: Blog Grid */}
          <div className="xl:col-span-8 flex flex-col gap-8">
            <AnimatePresence>
              {posts.map((post, idx) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div className="relative overflow-hidden p-8 md:p-10 rounded-[2.5rem] bg-background-secondary/20 border border-border-default/50 backdrop-blur-md hover:border-brand-primary/40 transition-all duration-700 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)]">

                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-4 md:max-w-[70%]">
                          <div className="flex items-center gap-4">
                            <span className="text-[10px] font-black font-mono uppercase tracking-widest text-brand-primary px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                              {post.category}
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-foreground-muted italic">
                              {post.date}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground-primary tracking-tight group-hover:text-brand-primary transition-colors duration-500">
                            {post.title}
                          </h2>
                          <p className="text-sm text-foreground-secondary/70 leading-relaxed font-mono lowercase line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="hidden md:flex flex-col items-center gap-3">
                          <div className="w-12 h-12 rounded-full border border-border-default flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
                            <Icon name="arrowRight" size={20} />
                          </div>
                          <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-40 transition-opacity">Read</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Pagination / "More" Placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex justify-center p-12 border-t border-border-default/20 mt-8"
            >
              <button className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground-muted hover:text-brand-primary transition-colors">
                End of Transmission
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/app/sharedComponents/ui/Icon';

const PersonaVisualizer = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Background Hex Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] scale-150 rotate-12" viewBox="0 0 100 100">
        <pattern id="hexGrid" width="10" height="17.32" patternUnits="userSpaceOnUse" overflow="visible">
          <path d="M5 0 L10 2.88 L10 8.66 L5 11.54 L0 8.66 L0 2.88 Z" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
      </svg>

      {/* Main Persona SVG */}
      <svg className="w-full h-full opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110" viewBox="0 0 200 200">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Human Silhouette - Technical Blueprint Style */}
        <g className="text-brand-primary" filter="url(#glow)">
          {/* Shoulders & Chest */}
          <path
            d="M 40 180 C 40 140 70 110 100 110 C 130 110 160 140 160 180"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className="opacity-40"
          />
          {/* Head Structure */}
          <circle
            cx="100"
            cy="70"
            r="28"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="opacity-60"
          />
          <circle
            cx="100"
            cy="70"
            r="22"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="4 2"
            className="opacity-30"
          />

          {/* Neural Interface / Focus Points */}
          <g className="animate-pulse">
            <circle cx="100" cy="65" r="2" fill="currentColor" />
            <circle cx="85" cy="75" r="1.5" fill="currentColor" opacity="0.5" />
            <circle cx="115" cy="75" r="1.5" fill="currentColor" opacity="0.5" />
          </g>

          {/* Internal Circuits */}
          <path
            d="M 85 75 Q 100 85 115 75 M 100 70 L 100 110"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
          />
        </g>

        {/* Rotating Telemetry Rings */}
        <g className="opacity-20 transition-opacity duration-500 group-hover:opacity-60">
          <circle cx="100" cy="70" r="45" stroke="currentColor" fill="none" strokeWidth="0.5" strokeDasharray="10 5">
            <animateTransform attributeName="transform" type="rotate" from="0 100 70" to="360 100 70" dur="20s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="70" r="52" stroke="currentColor" fill="none" strokeWidth="0.2" strokeDasharray="1 4">
            <animateTransform attributeName="transform" type="rotate" from="360 100 70" to="0 100 70" dur="30s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Scanning Laser HUD */}
        <g className="text-brand-primary opacity-40">
          <line x1="40" y1="0" x2="160" y2="0" stroke="currentColor" strokeWidth="0.5">
            <animate attributeName="y1" values="40;160;40" dur="3s" repeatCount="indefinite" />
            <animate attributeName="y2" values="40;160;40" dur="3s" repeatCount="indefinite" />
          </line>
          {/* HUD Brackets */}
          <path d="M 30 50 L 30 30 L 50 30" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 170 50 L 170 30 L 150 30" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 30 150 L 30 170 L 50 170" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 170 150 L 170 170 L 150 170" stroke="currentColor" strokeWidth="1" fill="none" />
        </g>

        {/* Data Stream Particles */}
        {[...Array(6)].map((_, i) => (
          <circle key={i} r="1" fill="currentColor" className="text-brand-primary">
            <animate
              attributeName="cx"
              values={`${80 + Math.random() * 40};${80 + Math.random() * 40}`}
              dur={`${2 + i}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="110;180"
              dur={`${2 + i}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur={`${2 + i}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default function BlogPage() {
  const posts = [
    {
      slug: 'cosmic-miner-react-game-engine',
      title: 'Cosmic Miner: React as a Game Engine',
      date: 'Jan 05, 2026',
      category: 'Development',
      excerpt: 'Exploring state management, performance optimizations, and the challenges of building an idle clicker game using React.'
    },
    {
      slug: 'konnect-agentic-orchestration',
      title: 'Konnect: The Logic of Agentic Systems',
      date: 'Dec 28, 2025',
      category: 'AI Architecture',
      excerpt: 'How I built Konnect to handle proactive LangChain agent coordination and seamless RAG knowledge base integration.'
    },
    {
      slug: 'building-an-immersive-portfolio',
      title: 'Building a "Mission Control" Portfolio',
      date: 'Jan 07, 2026',
      category: 'Design',
      excerpt: 'A deep-dive into the technical stack behind this portfolio, from Digital Telemetry backgrounds to code-driven visual assets.'
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
                className="relative shrink-0 group"
              >
                <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full" />
                <div className="relative w-20 h-20 md:w-32 md:h-32 xl:w-48 xl:h-48 rounded-full p-1 border border-white/10 backdrop-blur-3xl overflow-hidden bg-background-secondary/30 shadow-2xl flex items-center justify-center">
                  <PersonaVisualizer />
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
                    Dev<span className="text-brand-primary"> Blog</span>
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
                    A personal account of what I&apos;m doing and what I&apos;m learning in the world of <span className="text-brand-primary font-bold">systems architecture</span> and AI.
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

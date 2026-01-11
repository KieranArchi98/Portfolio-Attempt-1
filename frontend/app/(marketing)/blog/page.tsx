"use client";

import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
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
      <svg className="w-full h-full opacity-80 transition-all duration-700 group-hover:opacity-100" viewBox="0 0 200 200">
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

const DataPacket = ({ delay = 0 }) => (
  <motion.div
    initial={{ y: "100%", opacity: 0 }}
    animate={{ y: "-100%", opacity: [0, 1, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: delay,
      ease: "linear"
    }}
    className="absolute left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gradient-to-t from-transparent via-brand-primary to-transparent"
  />
);

const TimelineNode = ({ active, date }: { active: boolean; date: string }) => (
  <div className="relative flex items-center justify-center">
    <motion.div
      animate={active ? {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      } : { scale: 1, opacity: 0.1 }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute w-12 h-12 rounded-full border border-brand-primary/50"
    />
    <motion.div
      animate={active ? { scale: 1.1, backgroundColor: "var(--color-brand-primary)" } : { scale: 1, backgroundColor: "var(--color-border-default)" }}
      className="relative w-3 h-3 rounded-full border-2 border-background-primary z-10 transition-colors duration-500"
    />
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 40 }}
          exit={{ opacity: 0, x: 20 }}
          className="absolute left-0 whitespace-nowrap hidden lg:block"
        >
          <span className="text-[10px] font-black font-mono text-brand-primary uppercase tracking-[0.2em]">
            {date}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function BlogPage() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const posts = [
    {
      slug: 'building-an-immersive-portfolio',
      title: 'Building a "Mission Control" Portfolio',
      date: 'Jan 07, 2026',
      category: 'Design',
      excerpt: 'A deep-dive into the technical stack behind this portfolio, from Digital Telemetry backgrounds to code-driven visual assets.'
    },
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
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      const index = Math.round(v * (posts.length - 1));
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, posts.length]);

  return (
    <div ref={sectionRef} className="pt-64 pb-48 relative bg-background-primary min-h-screen overflow-visible">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-24">

          {/* Left: Persona Sidebar */}
          <div className="xl:col-span-4 xl:sticky xl:top-32 h-fit space-y-6">
            {/* 2-column layout on medium and smaller screens */}
            <div className="grid grid-cols-2 xl:grid-cols-1 gap-6 xl:gap-8 items-start">
              {/* Avatar Column */}
              <div className="flex flex-col items-center xl:items-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative w-full aspect-square max-w-[200px] rounded-3xl p-1 border border-white/10 backdrop-blur-3xl overflow-hidden bg-background-secondary/20 shadow-2xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                >
                  <PersonaVisualizer />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent" />
                </motion.div>

                <div className="mt-6 xl:hidden">
                  <h1 className="text-3xl font-black text-foreground-primary tracking-tighter uppercase font-mono leading-none">
                    Dev<span className="text-brand-primary block">Ledger</span>
                  </h1>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-primary/40 font-mono mt-2">
                    Systems Architecture & AI
                  </p>
                </div>
              </div>

              {/* Text/Description Column */}
              <div className="space-y-6">
                <div className="hidden xl:block xl:mb-4">
                  <h1 className="text-4xl md:text-6xl font-black text-foreground-primary tracking-tighter uppercase font-mono leading-none">
                    Dev<span className="text-brand-primary block">Ledger</span>
                  </h1>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40 font-mono mt-4">
                    Systems Architecture & AI
                  </p>
                </div>

                {/* Speech Bubble Description */}
                <div className="relative p-6 bg-background-secondary/30 border border-border-default rounded-2xl backdrop-blur-xl group">
                  {/* Speech bubble tail - pointing to avatar on xl screens */}
                  <div className="hidden xl:block absolute -left-3 top-8 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-border-default" />
                  <div className="hidden xl:block absolute -left-[11px] top-[33px] w-0 h-0 border-t-[11px] border-t-transparent border-b-[11px] border-b-transparent border-r-[11px] border-r-background-secondary/30" />

                  <p className="text-xs font-mono text-foreground-secondary leading-relaxed lowercase">
                    Tracking the evolution of technical systems, design patterns, and agentic intelligence. most recent updates at the top of the stream.
                  </p>
                  <div className="mt-6 flex gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                    <Icon name="github" size={16} className="hover:text-brand-primary cursor-pointer" />
                    <Icon name="linkedin" size={16} className="hover:text-brand-primary cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Timeline & Posts */}
          <div className="xl:col-span-8 relative">
            {/* Ultra-Interactive Holographic Progress Bar */}
            <div className="absolute right-0 lg:right-8 top-0 bottom-0 w-[6px] overflow-visible hidden sm:block">
              {/* Outer glow container */}
              <div className="absolute inset-0 -left-2 -right-2">
                {/* Pulsing outer glow */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-brand-primary/10 blur-xl rounded-full"
                />
              </div>

              {/* Main track */}
              <div className="absolute inset-0 bg-gradient-to-b from-border-default/20 via-border-default/10 to-border-default/20 rounded-full overflow-hidden">
                {/* Animated background pattern */}
                <motion.div
                  animate={{ y: ["0%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(var(--color-brand-primary-rgb),0.05)_50%,transparent_100%)] bg-[length:100%_50px]"
                />
              </div>

              {/* Progress fill with holographic effect */}
              <motion.div
                style={{ scaleY, originY: 0 }}
                className="absolute inset-0 rounded-full overflow-hidden"
              >
                {/* Multi-layer gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-brand-primary/80 to-brand-primary/60" />

                {/* Holographic shimmer */}
                <motion.div
                  animate={{
                    y: ["-200%", "200%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent"
                />

                {/* Energy pulse waves */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: ["0%", "100%"],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: "easeInOut"
                    }}
                    className="absolute left-0 right-0 h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent blur-sm"
                  />
                ))}

                {/* Glowing top cap */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-0 left-0 right-0 h-2 bg-white/60 blur-sm"
                />
              </motion.div>

              {/* Particle system */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{
                    y: ["-100%", "-200%"],
                    opacity: [0, 1, 0],
                    x: [0, (i % 2 === 0 ? 4 : -4), 0]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "linear"
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full shadow-[0_0_8px_rgba(var(--color-brand-primary-rgb),0.8)]"
                />
              ))}

              {/* Interactive hover glow */}
              <motion.div
                whileHover={{ scale: 1.5, opacity: 0.8 }}
                className="absolute inset-0 bg-brand-primary/0 hover:bg-brand-primary/20 rounded-full transition-all duration-300 blur-md"
              />

              {/* Data packets with trails */}
              <DataPacket delay={0} />
              <DataPacket delay={1.5} />
              <DataPacket delay={3} />
            </div>

            <div className="flex flex-col gap-24 lg:gap-32">
              {posts.map((post, idx) => (
                <div key={post.slug} className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
                  {/* Blog Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className={`relative p-8 md:p-12 rounded-[2rem] bg-background-secondary/10 border transition-all duration-700 backdrop-blur-md ${activeIndex === idx ? 'border-brand-primary/40 shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)] bg-background-secondary/30' : 'border-border-default/40'}`}>
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Icon name="arrowRight" size={24} className="text-brand-primary -rotate-45" />
                        </div>

                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <span className="text-[10px] font-black font-mono uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-md">
                              {post.category}
                            </span>
                            <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-[0.2em] lg:hidden">
                              {post.date}
                            </span>
                          </div>

                          <h2 className="text-3xl md:text-4xl font-black text-foreground-primary tracking-tight group-hover:text-brand-primary transition-colors">
                            {post.title}
                          </h2>

                          <p className="text-sm md:text-base text-foreground-secondary/70 leading-relaxed font-mono font-medium line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="pt-6 flex items-center gap-2 group-hover:gap-4 transition-all text-xs font-black uppercase tracking-[0.3em] text-foreground-muted group-hover:text-brand-primary">
                            <span>Initialize Protocol</span>
                            <Icon name="arrowRight" size={14} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Timeline Intersection Node */}
                  <div className="hidden sm:flex items-center justify-end">
                    <TimelineNode active={activeIndex === idx} date={post.date} />
                  </div>
                </div>
              ))}
            </div>

            {/* End of Line Indicator */}
            <div className="mt-32 flex flex-col items-center lg:items-end lg:pr-4">
              <div className="w-1 h-1 rounded-full bg-border-default mb-4" />
              <p className="text-[10px] font-black font-mono uppercase tracking-[0.5em] text-foreground-muted">
                End of Stream
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

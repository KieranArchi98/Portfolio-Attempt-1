"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface SystemCTAProps {
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
}

export function SystemCTA({ title, description, primaryAction }: SystemCTAProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    // Generate stable random values only on client
    const streams = mounted ? Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        duration: 15 + Math.random() * 10,
        delay: i * 2,
        content: Array.from({ length: 20 }).map(() => `INIT_BRAND[${Math.random().toString(36).substring(7)}] `).join("")
    })) : [];

    return (
        <section className="py-32 relative overflow-hidden bg-background-primary">
            {/* Background Data Stream (Very Subtle) */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden"
                style={{ fontFamily: 'var(--font-mono)' }}
            >
                {streams.map((stream) => (
                    <motion.div
                        key={stream.id}
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                            duration: stream.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: stream.delay
                        }}
                        className="whitespace-nowrap text-[10px] py-1"
                    >
                        {stream.content}
                    </motion.div>
                ))}
            </div>

            {/* Corner Bracket Frame */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-12 left-1/2 -translate-x-[45%] w-[80%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />
                <div className="absolute bottom-12 left-1/2 -translate-x-[45%] w-[80%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

                <div className="absolute top-12 left-[10%] w-4 h-4 border-t border-l border-border-default" />
                <div className="absolute top-12 right-[10%] w-4 h-4 border-t border-r border-border-default" />
                <div className="absolute bottom-12 left-[10%] w-4 h-4 border-b border-l border-border-default" />
                <div className="absolute bottom-12 right-[10%] w-4 h-4 border-b border-r border-border-default" />
            </div>

            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-12">

                    {/* Top Metadata Tag */}
                    <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.3em] text-brand-primary uppercase opacity-50">
                        <span className="block w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                        [ SYSTEM_READY_FOR_HANDOFF ]
                    </div>

                    <div className="w-full space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground-primary leading-[1] font-mono"
                        >
                            {title.toUpperCase()}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-lg md:text-xl text-foreground-secondary leading-relaxed opacity-60 font-mono tracking-tight lowercase"
                        >
                            {description}
                        </motion.p>
                    </div>

                    {/* The Command Prompt Link (Replacing Buttons) */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="pt-6"
                    >
                        <Link
                            href={primaryAction.href}
                            className="group relative inline-flex items-center gap-4 py-4 px-8 border border-brand-primary/20 bg-brand-primary/5 rounded-full overflow-hidden transition-all duration-300 hover:border-brand-primary/50 hover:bg-brand-primary/10"
                        >
                            <span className="font-mono text-xl md:text-2xl text-brand-primary tracking-tighter flex items-center gap-2">
                                <span className="opacity-50">&gt;</span>
                                {primaryAction.label.toUpperCase()}
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-3 h-6 bg-brand-primary"
                                />
                            </span>

                            {/* Hover light effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </Link>
                    </motion.div>

                    {/* Bottom Status metadata */}
                    <div className="flex gap-12 font-mono text-[8px] text-foreground-muted uppercase tracking-[0.4em] pt-8 opacity-30">
                        <span>NODE: INITIALIZE_v2.0</span>
                        <span className="hidden sm:inline">AUTH: SECURE_BY_DESIGN</span>
                        <span>RES: HIGH_FIDELITY</span>
                    </div>

                </div>
            </div>
        </section>
    );
}

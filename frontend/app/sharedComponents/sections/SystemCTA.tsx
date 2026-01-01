"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface SystemCTAProps {
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
}

export function SystemCTA({ title, description, primaryAction, secondaryAction }: SystemCTAProps) {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-background-primary">
            {/* Top Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent opacity-40" />

            {/* Use percentage-based width like other sections */}
            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-6 relative z-10">
                {/* Container Card with Tech Aesthetic */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-2xl border border-border-default/30 bg-background-muted/30 p-10 md:p-14"
                >
                    {/* Tech grid background */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(37, 99, 235, 0.1) 25%, rgba(37, 99, 235, 0.1) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.1) 75%, rgba(37, 99, 235, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(37, 99, 235, 0.1) 25%, rgba(37, 99, 235, 0.1) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.1) 75%, rgba(37, 99, 235, 0.1) 76%, transparent 77%, transparent)`,
                            backgroundSize: '30px 30px'
                        }}
                    />

                    {/* Gradient glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.05] via-transparent to-brand-primary/[0.05] pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">

                        {/* Left: Text Content with Tech Theme */}
                        <div className="flex-1 text-center lg:text-left space-y-5">
                            {/* Tech metadata tag */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-foreground-muted uppercase opacity-60"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                                [ DEPLOY_READY ]
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-primary leading-tight font-mono tracking-tight"
                            >
                                {title}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-base md:text-lg text-foreground-secondary leading-relaxed opacity-70 font-mono tracking-tight"
                            >
                                {description}
                            </motion.p>
                        </div>

                        {/* Right: CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col gap-4 lg:min-w-fit w-full sm:w-auto lg:w-auto"
                        >
                            {/* Primary Button with Tech Style */}
                            <Link href={primaryAction.href}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative inline-flex items-center gap-3 py-4 px-8 border border-brand-primary/30 bg-brand-primary/10 rounded-lg transition-all duration-300 hover:border-brand-primary/50 hover:bg-brand-primary/15 w-full justify-center"
                                >
                                    <span className="font-mono text-lg text-brand-primary tracking-tight flex items-center gap-3">
                                        <span className="opacity-50">&gt;</span>
                                        {primaryAction.label}
                                        <span className="inline-block w-2 h-5 bg-brand-primary group-hover:animate-pulse" />
                                    </span>
                                </motion.div>
                            </Link>

                            {/* Secondary Link */}
                            {secondaryAction && (
                                <Link
                                    href={secondaryAction.href}
                                    className="text-foreground-muted hover:text-brand-primary transition-colors text-center font-mono text-sm tracking-wide uppercase opacity-60 hover:opacity-100"
                                >
                                    {secondaryAction.label} →
                                </Link>
                            )}
                        </motion.div>
                    </div>

                    {/* Tech corner brackets */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-brand-primary/20" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-brand-primary/20" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-brand-primary/20" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-brand-primary/20" />
                </motion.div>
            </div>
        </section>
    );
}

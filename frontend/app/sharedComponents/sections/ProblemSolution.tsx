"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from '../ui/Icon';

export function ProblemSolution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // TIMELINE:
    // 0.0 - 0.4: Stage 1 (Fragmented)
    // 0.4 - 0.7: Stage 2 (Agitation)
    // 0.7 - 1.0: Stage 3 (Unified)

    // Opacity Transforms for Text (Left Column)
    const text1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.7], [0, 1, 1, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

    // Visual Transforms (Right Column)
    // Stage 1: Fragmented
    const stage1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const stage1Scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

    // Stage 2: Agitation
    const stage2Opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.75], [0, 1, 1, 0]);
    const stage2Scale = useTransform(scrollYProgress, [0.3, 0.45, 0.75], [0.8, 1, 1.1]);

    // Stage 3: Unified
    const stage3Opacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
    const stage3Scale = useTransform(scrollYProgress, [0.7, 0.85], [0.9, 1]);
    const solutionGlow = useTransform(scrollYProgress, [0.75, 1], [0, 1]);


    return (
        <section ref={containerRef} className="relative h-[250vh] w-full bg-background-primary">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row">

                {/* --- LEFT COLUMN: NARRATIVE (40%) --- */}
                <div className="w-full lg:w-[40vw] h-[40vh] lg:h-full flex items-center justify-center relative p-6 lg:p-0 z-20 pointer-events-none">
                    <div className="relative w-full lg:w-[30vw] text-left">
                        {/* Text 1 */}
                        <motion.div style={{ opacity: text1Opacity }} className="absolute inset-0 top-1/2 -translate-y-1/2">
                            <h2 className="text-4xl lg:text-7xl font-bold text-foreground-primary mb-6 tracking-tight">Fragmented Identity</h2>
                            <p className="text-xl lg:text-3xl text-foreground-secondary/80 leading-relaxed font-light">
                                Your professional life is scattered. GitHub, Dribbble, Resumes—disconnected and static.
                            </p>
                        </motion.div>

                        {/* Text 2 */}
                        <motion.div style={{ opacity: text2Opacity }} className="absolute inset-0 top-1/2 -translate-y-1/2">
                            <h2 className="text-4xl lg:text-7xl font-bold text-foreground-primary mb-6 tracking-tight text-red-500">Maintenance Hell</h2>
                            <p className="text-xl lg:text-3xl text-foreground-secondary/80 leading-relaxed font-light">
                                Every update is a chore. Broken builds, outdated links, and wasted weekends wrestling with config.
                            </p>
                        </motion.div>

                        {/* Text 3 */}
                        <motion.div style={{ opacity: text3Opacity }} className="absolute inset-0 top-1/2 -translate-y-1/2">
                            <h2 className="text-4xl lg:text-7xl font-bold text-brand-primary mb-6 tracking-tight">Unified Intelligence</h2>
                            <p className="text-xl lg:text-3xl text-foreground-secondary/80 leading-relaxed font-light">
                                One source of truth. Atlas automatically syncs, builds, and broadcasts your professional identity.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN: VISUALS (60%) --- */}
                <div className="w-full lg:w-[60vw] h-[60vh] lg:h-full relative overflow-hidden bg-surface-secondary/30">
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />


                    {/* VISUAL 1: CHAOS (No Container, Floating) */}
                    <motion.div
                        style={{ opacity: stage1Opacity, scale: stage1Scale }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="relative w-full h-full">
                            <motion.div
                                animate={{ x: [0, -40, 0], y: [0, 20, 0], rotate: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/3 left-1/4"
                            >
                                <div className="p-6 bg-white shadow-xl rounded-2xl border border-border-default transform rotate-[-6deg]">
                                    <Icon name="file" className="w-20 h-20 text-foreground-muted" />
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ x: [0, 50, 0], y: [0, -30, 0], rotate: [0, 15, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-1/4 right-1/4"
                            >
                                <div className="p-8 bg-white shadow-xl rounded-2xl border border-border-default transform rotate-[12deg]">
                                    <Icon name="image" className="w-24 h-24 text-foreground-muted" />
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ x: [0, 20, 0], y: [0, 60, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-1/3 right-1/3"
                            >
                                <div className="p-5 bg-white shadow-xl rounded-2xl border border-border-default transform rotate-[-3deg]">
                                    <Icon name="code" className="w-16 h-16 text-foreground-muted" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>


                    {/* VISUAL 2: ERROR (Large Background Element) */}
                    <motion.div
                        style={{ opacity: stage2Opacity, scale: stage2Scale }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Icon name="alert-circle" className="w-[50vmin] h-[50vmin] text-red-100 opacity-50" />
                            <div className="absolute flex flex-col items-center">
                                <div className="bg-red-500 text-white font-mono text-2xl font-bold px-8 py-4 rounded-lg shadow-2xl animate-pulse">
                                    DEPLOY_FAILED
                                </div>
                                <div className="mt-4 font-mono text-red-500 opacity-70">
                                    Exit Code 1
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* VISUAL 3: SOLUTION (Dashboard/Interface) */}
                    <motion.div
                        style={{ opacity: stage3Opacity, scale: stage3Scale }}
                        className="absolute inset-0 flex items-center justify-center p-8 lg:p-20"
                    >
                        {/* The Unified Dashboard */}
                        <div className="relative w-full h-full max-h-[600px] bg-surface-primary rounded-3xl shadow-2xl border border-border-subtle overflow-hidden flex flex-col">
                            {/* Header */}
                            <div className="h-16 border-b border-border-subtle flex items-center px-6 gap-4 bg-muted/20">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 h-2 bg-border-subtle rounded-full max-w-[200px]" />
                            </div>

                            {/* Body */}
                            <div className="flex-1 p-8 grid grid-cols-2 gap-6 bg-dot-pattern">
                                <motion.div
                                    style={{ opacity: solutionGlow }}
                                    className="absolute inset-0 bg-brand-primary/5 pointer-events-none"
                                />

                                <div className="col-span-1 bg-surface-secondary rounded-xl p-6 border border-border-subtle flex flex-col gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                        <Icon name="github" size={24} />
                                    </div>
                                    <div className="h-3 bg-border-subtle rounded w-3/4" />
                                    <div className="h-3 bg-border-subtle rounded w-1/2" />
                                </div>
                                <div className="col-span-1 bg-surface-secondary rounded-xl p-6 border border-border-subtle flex flex-col gap-4">
                                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600">
                                        <Icon name="dribbble" size={24} />
                                    </div>
                                    <div className="h-3 bg-border-subtle rounded w-3/4" />
                                    <div className="h-3 bg-border-subtle rounded w-1/2" />
                                </div>
                                <div className="col-span-2 bg-surface-secondary rounded-xl p-6 border border-border-subtle flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <Icon name="check" size={20} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="h-3 bg-border-subtle rounded w-32" />
                                            <div className="h-2 bg-border-subtle rounded w-20" />
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-lg">
                                        PUBLISHED
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

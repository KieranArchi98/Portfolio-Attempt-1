"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

interface SystemCTAProps {
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
}

export function SystemCTA({ title, description, primaryAction, secondaryAction }: SystemCTAProps) {
    return (
        <section className="py-10 lg:py-14 relative overflow-hidden bg-background-primary flex items-center min-h-[60vh]">

            <div className="w-[94%] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- RIGHT COLUMN: ISOMETRIC SAAS VISUAL --- */}
                    {/* Visual First: Left on Desktop, Top on Mobile */}
                    <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center perspective-1000">
                        {/* Background Decorative Grid */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--brand-primary) 1px, transparent 0)', backgroundSize: '32px 32px', transform: 'rotateX(55deg) rotateZ(-15deg) scale(1.5)' }} />

                        {/* The Platform Container */}
                        <motion.div
                            initial={{ opacity: 0, rotateX: 60, scale: 0.8 }}
                            whileInView={{ opacity: 1, rotateX: 55, rotateZ: -15, scale: 1 }}
                            animate={{
                                rotateZ: [-15, -13, -15],
                                y: [0, -15, 0]
                            }}
                            viewport={{ once: true }}
                            transition={{
                                default: { duration: 1.2, ease: "easeOut" },
                                rotateZ: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="relative w-full max-w-lg aspect-square"
                        >
                            {/* Base Plate - Deeper & Sharper */}
                            <div className="absolute inset-0 bg-surface-secondary/40 backdrop-blur-xl rounded-[2.5rem] border border-brand-primary/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform translate-z-[0px]" />
                            <div className="absolute inset-4 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-[2rem] border border-white/5 transform translate-z-[1px]" />

                            {/* Floating Architecture Layers with Glassmorphism */}

                            {/* Layer 1: Database Cluster (Bottom Left) */}
                            <motion.div
                                whileHover={{ scale: 1.1, z: 100 }}
                                animate={{
                                    z: [25, 45, 25],
                                    rotateZ: [0, 3, 0]
                                }}
                                transition={{
                                    default: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                                    scale: { duration: 0.3 },
                                    z: { duration: 0.3 }
                                }}
                                className="absolute bottom-12 left-12 w-36 h-36 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center cursor-pointer group z-20"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Icon name="server" size={44} className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                <div className="absolute -right-4 -top-4 px-3 py-1 bg-blue-500/20 backdrop-blur-md text-blue-300 text-[10px] font-bold rounded-full border border-blue-500/30 shadow-lg tracking-wider">DATAMAP</div>
                            </motion.div>

                            {/* Layer 2: API Gateway (Top Right) */}
                            <motion.div
                                whileHover={{ scale: 1.1, z: 120 }}
                                animate={{
                                    z: [45, 65, 45],
                                    rotateZ: [0, -4, 0]
                                }}
                                transition={{
                                    default: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 },
                                    scale: { duration: 0.3 },
                                    z: { duration: 0.3 }
                                }}
                                className="absolute top-12 right-12 w-36 h-36 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center cursor-pointer group z-20"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Icon name="globe" size={44} className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                <div className="absolute -left-4 -bottom-4 px-3 py-1 bg-purple-500/20 backdrop-blur-md text-purple-300 text-[10px] font-bold rounded-full border border-purple-500/30 shadow-lg tracking-wider">GATEWAY</div>
                            </motion.div>

                            {/* Layer 3: Central Dashboard (Highest) */}
                            <motion.div
                                whileHover={{ scale: 1.08, z: 150 }}
                                animate={{
                                    z: [80, 110, 80],
                                    scale: [1, 1.03, 1]
                                }}
                                transition={{
                                    default: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                                    scale: { duration: 0.3 },
                                    z: { duration: 0.3 }
                                }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-40 bg-surface-primary/60 backdrop-blur-2xl rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col overflow-hidden group z-30 pointer-events-auto cursor-pointer"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Dashboard Mock UI */}
                                <div className="h-8 bg-black/20 border-b border-white/5 flex items-center px-3 gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                                    <div className="ml-auto w-12 h-1 bg-white/10 rounded-full" />
                                </div>
                                <div className="flex-1 p-4 grid grid-cols-2 gap-3">
                                    <div className="bg-brand-primary/20 rounded-lg h-full animate-pulse border border-brand-primary/10 shadow-inner" />
                                    <div className="space-y-2">
                                        <div className="bg-white/5 rounded h-6 w-full" />
                                        <div className="bg-white/5 rounded h-6 w-3/4" />
                                    </div>
                                    <div className="col-span-2 bg-gradient-to-r from-brand-primary/5 to-transparent rounded-lg h-full border border-white/5" />
                                </div>
                                <div className="absolute -top-6 right-2 px-3 py-1 bg-brand-primary shadow-[0_0_20px_rgba(var(--brand-primary-rgb),0.4)] text-white text-[10px] font-bold rounded-full border border-white/20 tracking-wider">SYSTEM_CORE</div>
                            </motion.div>

                            {/* Enhanced Data Stream Animations (SVG) */}
                            <div className="absolute inset-0 pointer-events-none overflow-visible" style={{ transformStyle: "preserve-3d" }}>
                                <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ transform: "translateZ(30px)" }}>
                                    <motion.circle
                                        cx="20%" cy="80%" r="2" fill="var(--brand-primary)"
                                        animate={{
                                            cx: ["20%", "50%", "80%"],
                                            cy: ["80%", "50%", "20%"],
                                            opacity: [0, 1, 0],
                                            r: [2, 4, 2]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.circle
                                        cx="80%" cy="20%" r="2" fill="var(--brand-primary)"
                                        animate={{
                                            cx: ["80%", "50%", "20%"],
                                            cy: ["20%", "50%", "80%"],
                                            opacity: [0, 1, 0],
                                            r: [2, 4, 2]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                                    />
                                </svg>

                                <motion.div
                                    className="absolute top-1/2 left-1/2 w-full h-full border border-dashed border-brand-primary/20 rounded-full"
                                    style={{ transform: "translate(-50%, -50%) rotateX(90deg) translateZ(-20px)" }}
                                    animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                    transition={{
                                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>


                    {/* --- LEFT COLUMN: CONTENT (Typography & Actions) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-left space-y-8 lg:pl-10 relative"
                    >
                        {/* Decorative Background Glow Behind Text */}

                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary/80 font-mono text-[10px] uppercase tracking-[0.2em]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                            </span>
                            System Sync Active
                        </div>

                        {/* Title - Gradient & Sharp */}
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-foreground-primary">
                            <span className="block">Ready to</span>
                            <span className="block bg-gradient-to-r from-foreground-primary via-foreground-primary to-brand-primary bg-clip-text text-transparent relative inline-block">
                                Scale Up?
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none -z-10" />
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-2xl text-foreground-secondary/70 leading-relaxed font-light w-[90%]">
                            {description}
                        </p>

                        {/* Actions - Left Aligned */}
                        <div className="flex flex-col sm:flex-row items-start gap-6 pt-6">
                            <Link href={primaryAction.href} className="w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(var(--brand-primary-rgb), 0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative w-full sm:w-auto px-10 py-5 bg-foreground-primary text-background-primary rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-4 overflow-hidden"
                                >
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                    {primaryAction.label}
                                    <Icon name="arrowRight" size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                                </motion.button>
                            </Link>

                            {secondaryAction && (
                                <Link href={secondaryAction.href} className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ backgroundColor: "rgba(var(--foreground-primary-rgb), 0.05)", borderColor: "rgba(var(--foreground-primary-rgb), 0.3)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-10 py-5 bg-transparent text-foreground-primary border border-white/10 rounded-2xl font-medium text-xl transition-all duration-300"
                                    >
                                        {secondaryAction.label}
                                    </motion.button>
                                </Link>
                            )}
                        </div>

                        {/* Subtle Infrastructure Signature */}
                        <div className="pt-12 flex items-center gap-4 border-t border-white/5 opacity-30">
                            <div className="font-mono text-[10px] uppercase tracking-widest">Protocol v4.0.2</div>
                            <div className="h-px w-12 bg-white/20" />
                            <div className="font-mono text-[10px] uppercase tracking-widest">Region: Global-Edge</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background-primary to-transparent pointer-events-none" />

        </section>
    );
}

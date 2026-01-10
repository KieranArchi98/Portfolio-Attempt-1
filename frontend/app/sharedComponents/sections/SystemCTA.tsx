"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';
import { useMemo } from 'react';

interface SystemCTAProps {
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
}

const NeuralBackground = () => {
    // Generate consistent random values using useMemo to avoid hydration mismatch
    const particles = useMemo(() =>
        Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x1: (i * 7.3) % 100,
            y1: (i * 11.7) % 100,
            x2: ((i * 7.3) + 50) % 100,
            y2: ((i * 11.7) + 50) % 100,
            duration: 10 + (i * 0.67) % 10
        }))
        , []);

    const paths = useMemo(() =>
        Array.from({ length: 6 }, (_, i) => {
            const seed = i * 13.7;
            return {
                id: i,
                d1: `M ${(seed * 3.1) % 100} ${(seed * 5.7) % 100} Q ${(seed * 7.3) % 100} ${(seed * 2.9) % 100} ${(seed * 11.1) % 100} ${(seed * 4.3) % 100}`,
                d2: `M ${(seed * 4.7) % 100} ${(seed * 8.3) % 100} Q ${(seed * 6.1) % 100} ${(seed * 9.7) % 100} ${(seed * 3.3) % 100} ${(seed * 7.9) % 100}`
            };
        })
        , []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <div key={particle.id} className="absolute inset-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.2, 0],
                            scale: [0, 1.2, 0],
                            x: [`${particle.x1}%`, `${particle.x2}%`],
                            y: [`${particle.y1}%`, `${particle.y2}%`]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-1 h-1 bg-brand-primary/20 rounded-full shadow-[0_0_10px_var(--color-brand-primary)]"
                    />
                </div>
            ))}
            <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
                <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="var(--brand-primary)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d1}
                        stroke="url(#lineGrad)"
                        strokeWidth="1"
                        fill="none"
                        animate={{
                            d: [path.d1, path.d2]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        vectorEffect="non-scaling-stroke"
                    />
                ))}
            </svg>
        </div>
    );
};


export function SystemCTA({ title, description, primaryAction, secondaryAction }: SystemCTAProps) {
    return (
        <section className="py-20 lg:py-32 relative overflow-hidden bg-white flex items-center min-h-[80vh]">
            {/* Background "Atmospheric Void" */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(var(--brand-primary-rgb),0.08),transparent_70%)]" />

                {/* Neural Network Background Particles - Added */}
                <NeuralBackground />

                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--brand-primary) 1px, transparent 0)', backgroundSize: '64px 64px' }}
                />
            </div>

            <div className="w-[94%] mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- RIGHT COLUMN: ISOMETRIC SAAS VISUAL --- */}
                    {/* Visual First: Left on Desktop, Top on Mobile */}
                    <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center perspective-1000">
                        {/* Background Decorative Grid - Multi-layered */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--brand-primary) 1.5px, transparent 0)', backgroundSize: '48px 48px', transform: 'rotateX(55deg) rotateZ(-15deg) scale(2)' }} />
                        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                            style={{ backgroundImage: 'linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)', backgroundSize: '16px 16px', transform: 'rotateX(55deg) rotateZ(-15deg) scale(2)' }} />

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
                            {/* Central Flux Core - Added */}
                            <motion.div
                                animate={{
                                    opacity: [0.3, 0.7, 0.3],
                                    scale: [0.8, 1.2, 0.8]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px]"
                            />

                            {/* Energy Flux Lines - Added */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
                                {/* Flow to Database */}
                                <motion.path
                                    d="M250 250 L100 400"
                                    stroke="var(--brand-primary)"
                                    strokeWidth="1"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: [0, 0.2, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                />
                                {/* Flow to Gateway */}
                                <motion.path
                                    d="M250 250 L400 100"
                                    stroke="var(--brand-primary)"
                                    strokeWidth="1"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: [0, 0.2, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                />
                            </svg>
                            {/* Base Plate - Deeper & Sharper with Glow */}
                            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-brand-primary/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] transform translate-z-[0px]">
                                <motion.div
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_40px_rgba(var(--brand-primary-rgb),0.1)]"
                                />
                            </div>
                            <div className="absolute inset-4 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-[2rem] border border-gray-200/50 transform translate-z-[1px]" />

                            {/* Scanner Pulse */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent z-40 blur-[1px] transform translate-z-[50px]"
                            />

                            {/* Holographic Scanlines - Added */}
                            <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden rounded-[2.5rem] z-50">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
                            </div>

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
                                className="absolute bottom-12 left-12 w-36 h-36 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 flex items-center justify-center cursor-pointer group z-20"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Icon name="server" size={44} className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                <div className="absolute -right-4 -top-4 px-3 py-1 bg-blue-500/20 backdrop-blur-md text-blue-300 text-[10px] font-bold rounded-full border border-blue-500/30 shadow-lg tracking-wider">DATAMAP</div>

                                {/* Technical Callout */}
                                <div className="absolute -bottom-8 left-0 font-mono text-[8px] text-blue-400/60 uppercase tracking-tighter whitespace-nowrap">
                                    latency: 1.4ms
                                </div>
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
                                className="absolute top-12 right-12 w-36 h-36 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 flex items-center justify-center cursor-pointer group z-20"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Icon name="globe" size={44} className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                <div className="absolute -left-4 -bottom-4 px-3 py-1 bg-purple-500/20 backdrop-blur-md text-purple-300 text-[10px] font-bold rounded-full border border-purple-500/30 shadow-lg tracking-wider">GATEWAY</div>

                                {/* Technical Callout */}
                                <div className="absolute -top-8 right-0 font-mono text-[8px] text-purple-400/60 uppercase tracking-tighter whitespace-nowrap">
                                    requests: 124k/s
                                </div>
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
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-40 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-200 flex flex-col overflow-hidden group z-30 pointer-events-auto cursor-pointer"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Dashboard Mock UI */}
                                <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                                    <div className="ml-auto w-12 h-1 bg-gray-300 rounded-full" />
                                </div>
                                <div className="flex-1 p-4 grid grid-cols-2 gap-3">
                                    <div className="bg-brand-primary/20 rounded-lg h-full animate-pulse border border-brand-primary/10 shadow-inner" />
                                    <div className="space-y-2">
                                        <div className="bg-gray-100 rounded h-6 w-full" />
                                        <div className="bg-gray-100 rounded h-6 w-3/4" />
                                    </div>
                                    <div className="col-span-2 bg-gradient-to-r from-brand-primary/5 to-transparent rounded-lg h-full border border-gray-200" />
                                </div>
                                <div className="absolute -top-6 right-2 px-3 py-1 bg-brand-primary shadow-[0_0_20px_rgba(var(--brand-primary-rgb),0.4)] text-white text-[10px] font-bold rounded-full border border-white/20 tracking-wider">HARMONIC_CORE</div>

                                {/* "Sync" Glow Pulse */}
                                <motion.div
                                    animate={{ opacity: [0, 0.4, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-brand-primary/5 pointer-events-none"
                                />
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
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-mono text-[10px] uppercase tracking-[0.2em]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                            </span>
                            System Sync Active
                        </div>

                        {/* Title - Gradient & Sharp */}
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-gray-900">
                            <span className="block">Ready to</span>
                            <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-brand-primary bg-clip-text text-transparent relative inline-block">
                                Scale Up?
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-light w-[90%]">
                            {description}
                        </p>

                        {/* Actions - Left Aligned */}
                        <div className="flex flex-col sm:flex-row items-start gap-6 pt-6">
                            <Link href={primaryAction.href} className="w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(var(--brand-primary-rgb), 0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative w-full sm:w-auto px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-4 overflow-hidden"
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
                                        whileHover={{ backgroundColor: "rgba(0,0,0,0.05)", borderColor: "rgba(0,0,0,0.3)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-10 py-5 bg-transparent text-gray-900 border border-gray-300 rounded-2xl font-medium text-xl transition-all duration-300"
                                    >
                                        {secondaryAction.label}
                                    </motion.button>
                                </Link>
                            )}
                        </div>

                        {/* Subtle Infrastructure Signature */}
                        <div className="pt-12 flex items-center gap-4 border-t border-gray-200 opacity-30">
                            <div className="font-mono text-[10px] uppercase tracking-widest text-gray-600">Protocol v4.0.2</div>
                            <div className="h-px w-12 bg-gray-400" />
                            <div className="font-mono text-[10px] uppercase tracking-widest text-gray-600">Region: Global-Edge</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        </section>
    );
}

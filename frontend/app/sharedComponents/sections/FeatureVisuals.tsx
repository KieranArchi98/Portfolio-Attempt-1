"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

/**
 * Full-Stack Engineering Visual
 * Sophisticated 3D Isometric Stack with floating data layers.
 */
export function StackVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            <div className="relative w-64 h-64 transform-gpu rotate-x-[60deg] rotate-z-[-45deg]" style={{ transformStyle: "preserve-3d" }}>
                {/* Connection lines between layers */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20" style={{ transform: "translateZ(0px)" }}>
                    <div className="w-0.5 h-48 bg-brand-primary/40 blur-[1px]" style={{ transform: "rotateX(-90deg) translateZ(24px)" }} />
                </div>

                {/* Bottom Layer: Database / Infrastructure */}
                <motion.div
                    animate={{ z: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl border border-border-default flex items-center justify-center"
                    style={{ transform: "translateZ(-40px)" }}
                >
                    <div className="absolute inset-2 border border-blue-500/10 rounded-xl bg-blue-50/10" />
                    <Icon name="server" size={48} className="text-blue-500/20" />
                    <div className="absolute bottom-4 right-4 text-[8px] font-mono font-bold text-blue-500/40">DB_CLUSTER.01</div>
                </motion.div>

                {/* Middle Layer: Logic / API Gateway */}
                <motion.div
                    animate={{ z: [20, 40, 20] }}
                    whileHover={{ z: 60, scale: 1.05 }}
                    transition={{
                        default: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                        z: { duration: 0.3 },
                        scale: { duration: 0.3 }
                    }}
                    className="absolute inset-0 bg-white/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-2xl border border-purple-500/20 flex items-center justify-center group/layer"
                    style={{ transform: "translateZ(0px)" }}
                >
                    <div className="absolute inset-2 border border-purple-500/10 rounded-xl group-hover/layer:border-purple-500/30 transition-colors" />
                    <div className="flex gap-2">
                        {[0, 1, 2].map(i => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0.3, 1, 0.3], scaleY: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                className="w-1.5 h-12 bg-purple-500 rounded-full"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Top Layer: Frontend / UX */}
                <motion.div
                    animate={{ z: [80, 100, 80] }}
                    whileHover={{ z: 140, scale: 1.02 }}
                    transition={{
                        default: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                        z: { duration: 0.3 },
                        scale: { duration: 0.3 }
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-primary-hover shadow-[0_40px_80px_rgba(37,99,235,0.25)] rounded-2xl flex items-center justify-center group/layer"
                    style={{ transform: "translateZ(50px)" }}
                >
                    <div className="absolute inset-2 border border-white/20 rounded-xl group-hover/layer:border-white/40 transition-colors" />
                    <Icon name="code" size={64} className="text-white drop-shadow-2xl" />

                    {/* Floating Pulse Rings */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [1, 1.4, 1.8], opacity: [0, 0.4, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                        className="absolute w-full h-full border border-white/40 rounded-2xl"
                    />
                </motion.div>
            </div>
        </div>
    );
}

/**
 * Network Architecture Visual
 * Global Node concept with pulsing connections and orbital metadata.
 */
export function NetworkVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center group/visual">
            {/* Ambient Background Glow */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute w-[400px] h-[400px] bg-cyan-500 blur-[100px] rounded-full"
            />

            <div className="relative w-72 h-72">
                {/* Main Core Node */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                        default: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 0.3 },
                        rotate: { duration: 0.3 }
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-[0_0_60px_-10px_rgba(6,182,212,0.5)] border border-cyan-500/20 flex items-center justify-center z-20 group-hover/visual:shadow-[0_0_80px_-5px_rgba(6,182,212,0.7)] transition-shadow duration-500"
                >
                    <div className="w-14 h-14 bg-cyan-500/10 rounded-full animate-pulse flex items-center justify-center">
                        <Icon name="server" size={28} className="text-cyan-600" />
                    </div>
                </motion.div>

                {/* Orbital Clusters */}
                {[0, 1, 2, 3].map((idx) => {
                    const angle = (idx * 90) * (Math.PI / 180);
                    const radius = 110;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <div key={idx} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                            {/* Connection Path */}
                            <svg className="absolute inset-0 w-full h-full overflow-visible">
                                <motion.line
                                    x1="50%" y1="50%"
                                    x2={`calc(50% + ${x}px)`}
                                    y2={`calc(50% + ${y}px)`}
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-cyan-500/20 group-hover/visual:text-cyan-500/40 transition-colors duration-500"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: idx * 0.5 }}
                                />
                                {/* Pulsing Data Particle */}
                                <motion.circle
                                    r="2.5" fill="#06b6d4"
                                    animate={{
                                        cx: ["50%", `calc(50% + ${x}px)`, "50%"],
                                        cy: ["50%", `calc(50% + ${y}px)`, "50%"],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.7 }}
                                />
                            </svg>

                            {/* Satellite Node */}
                            <motion.div
                                initial={{ x: 0, y: 0 }}
                                animate={{ x, y }}
                                whileHover={{ scale: 1.2 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-crosshair"
                            >
                                <div className="w-10 h-10 bg-white rounded-lg border border-border-default shadow-xl flex items-center justify-center group-hover/visual:border-cyan-500/30 transition-colors">
                                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
                                </div>
                                <div className="mt-2 text-[8px] font-mono text-center font-bold text-foreground-muted whitespace-nowrap group-hover/visual:text-cyan-600 transition-colors">
                                    NODE_0{idx + 1}
                                </div>
                            </motion.div>
                        </div>
                    );
                })}

                {/* Spinning Orbital Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-dashed border-cyan-500/10 rounded-full group-hover/visual:border-cyan-500/30 transition-colors duration-500"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-8 border border-cyan-500/5 rounded-full group-hover/visual:border-cyan-500/20 transition-colors duration-500"
                />
            </div>
        </div>
    );
}

/**
 * Technical Operations Visual
 * Real-time monitoring dashboard with live metrics and grid systems.
 */
export function OpsVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 bg-white/50 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-inner overflow-hidden group/visual">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(var(--color-border-default) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-default) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            <div className="relative w-full h-full flex flex-col gap-6">
                {/* Top Metrics Row */}
                <div className="grid grid-cols-3 gap-6 h-32">
                    {[
                        { label: 'CPU LOAD', val: '24%', color: 'text-brand-primary' },
                        { label: 'MEMORY', val: '62GB', color: 'text-purple-500' },
                        { label: 'LATENCY', val: '4ms', color: 'text-cyan-500' }
                    ].map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,1)' }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/80 border border-border-default rounded-2xl p-4 shadow-sm flex flex-col justify-between cursor-pointer group/stat"
                        >
                            <span className="text-[8px] font-mono font-bold text-foreground-muted uppercase tracking-widest">{m.label}</span>
                            <div className={`text-2xl font-bold ${m.color}`}>{m.val}</div>
                            <div className="w-full h-1 bg-surface-secondary rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full bg-current ${m.color}`}
                                    animate={{ width: ["20%", "80%", "40%"] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Main Activity Monitor */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="flex-1 bg-white border border-border-default rounded-[2rem] p-6 shadow-sm overflow-hidden flex flex-col group/monitor"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-mono font-bold text-foreground-primary">LIVE_SYSTEM_TELEMETRY</span>
                        </div>
                        <Icon name="settings" size={16} className="text-foreground-muted animate-spin-slow group-hover/monitor:text-brand-primary transition-colors" />
                    </div>

                    {/* Scrolling Log / Grid */}
                    <div className="flex-1 relative space-y-4">
                        {[0, 1, 2, 3].map(i => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ x: 5, backgroundColor: 'var(--color-brand-primary-subtle)', color: 'var(--color-brand-primary)' }}
                                transition={{ repeat: Infinity, duration: 4, delay: i * 1 }}
                                className="h-6 flex items-center gap-4 text-[10px] font-mono border-b border-border-muted/50 pb-2 px-2 rounded transition-colors"
                            >
                                <span className="font-bold">POSX_{100 + i}</span>
                                <span className="text-foreground-muted uppercase group-hover:text-inherit">Execution confirmed: [OK]</span>
                                <div className="ml-auto w-12 h-1.5 bg-green-500/10 rounded-full overflow-hidden">
                                    <div className="w-3/4 h-full bg-green-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export function FeatureVisual({ variant }: { variant?: string }) {
    if (variant === 'stack') return <StackVisual />;
    if (variant === 'network') return <NetworkVisual />;
    if (variant === 'ops') return <OpsVisual />;

    // Fallback if no variant matches
    return (
        <div className="w-full h-full bg-white/50 backdrop-blur-xl rounded-full border border-white flex items-center justify-center shadow-2xl">
            <Icon name="settings" size={120} className="text-brand-primary opacity-50" />
        </div>
    );
}

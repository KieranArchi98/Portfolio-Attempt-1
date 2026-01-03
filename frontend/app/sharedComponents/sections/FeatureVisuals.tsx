"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

export function StackVisual() {
    return (
        <div className="relative w-full h-40 preserve-3d perspective-1000 flex items-center justify-center">
            {/* Base */}
            <motion.div
                className="absolute w-24 h-24 bg-surface-secondary rounded-xl border border-border-default shadow-lg flex items-center justify-center opacity-40"
                style={{ transform: "rotateX(60deg) rotateZ(-45deg) translateZ(-40px)" }}
            />
            {/* Layer 1: Database */}
            <motion.div
                className="absolute w-24 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-blue-500/30 shadow-lg flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-10px]"
                style={{ transform: "rotateX(60deg) rotateZ(-45deg) translateZ(0px)" }}
            >
                <Icon name="file" className="text-blue-400 rotate-45 transform -skew-x-12" />
            </motion.div>
            {/* Layer 2: API */}
            <motion.div
                className="absolute w-24 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-purple-500/30 shadow-lg flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-25px] delay-75"
                style={{ transform: "rotateX(60deg) rotateZ(-45deg) translateZ(30px)" }}
            >
                <Icon name="code" className="text-purple-400 rotate-45 transform -skew-x-12" />
            </motion.div>
            {/* Layer 3: Frontend */}
            <motion.div
                className="absolute w-24 h-24 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 backdrop-blur-md rounded-xl border border-brand-primary/50 shadow-xl flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-40px] delay-150"
                style={{ transform: "rotateX(60deg) rotateZ(-45deg) translateZ(60px)" }}
            >
                <Icon name="image" className="text-brand-primary rotate-45 transform -skew-x-12" />
            </motion.div>
        </div>
    );
}

export function NetworkVisual() {
    return (
        <div className="relative w-full h-40 flex items-center justify-center">
            <div className="relative w-32 h-32 animate-spin-slow">
                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4] z-10" />

                {/* Satellite Nodes */}
                {[0, 120, 240].map((deg, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-full h-full origin-center"
                        style={{ rotate: deg }}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg" />
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
                    </motion.div>
                ))}

                {/* Orbit Rings */}
                <div className="absolute inset-0 border border-cyan-500/20 rounded-full transform rotate-x-60" />
                <div className="absolute inset-4 border border-blue-500/20 rounded-full transform rotate-y-60" />
            </div>
        </div>
    );
}

export function OpsVisual() {
    return (
        <div className="relative w-full h-40 flex items-center justify-center">
            <div className="relative w-40 h-24 bg-surface-secondary/50 rounded-lg border border-border-default transform skew-y-6 rotate-[-5deg] overflow-hidden shadow-lg group-hover:rotate-0 transition-all duration-500">
                {/* Header */}
                <div className="h-6 bg-muted/50 border-b border-border-default flex items-center px-2 gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                {/* Content */}
                <div className="p-3 grid grid-cols-3 gap-2">
                    <div className="col-span-2 h-8 bg-green-500/10 rounded border border-green-500/20 flex items-center justify-center">
                        <div className="w-full h-1 bg-green-500/50 mx-2 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-green-500"
                                animate={{ width: ["0%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 h-8 bg-blue-500/10 rounded border border-blue-500/20" />
                    <div className="col-span-1 h-8 bg-purple-500/10 rounded border border-purple-500/20" />
                    <div className="col-span-2 h-8 bg-orange-500/10 rounded border border-orange-500/20" />
                </div>
            </div>

            {/* Floating Gear */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 text-foreground-muted opacity-20"
            >
                <Icon name="settings" size={48} />
            </motion.div>
        </div>
    );
}

export function FeatureVisual({ variant }: { variant?: string }) {
    if (variant === 'stack') return <StackVisual />;
    if (variant === 'network') return <NetworkVisual />;
    if (variant === 'ops') return <OpsVisual />;
    return null;
}

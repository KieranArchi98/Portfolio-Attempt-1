"use client";

import { motion } from 'framer-motion';

const CONTAINER_CLASS = "h-full w-4 md:w-6 relative flex flex-col justify-end items-center overflow-hidden rounded-full bg-surface-secondary/20";

export function UptimeVisual() {
    return (
        <div className={CONTAINER_CLASS}>
            {/* Segments lighting up from bottom */}
            {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="w-full h-2 mb-1 bg-green-500 rounded-sm"
                    initial={{ opacity: 0.2 }}
                    whileInView={{ opacity: [0.2, 1, 0.2] }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 3,
                        delay: (5 - i) * 0.2, // Bottom to top
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />
            ))}
        </div>
    );
}

export function ModulesVisual() {
    return (
        <div className={CONTAINER_CLASS}>
            {/* Stacking Blocks */}
            <motion.div className="relative w-full h-full">
                {Array.from({ length: 4 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bottom-0 w-full bg-blue-500 rounded-[2px] border border-white/10"
                        style={{ height: '20%' }}
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: -(i * 14), opacity: 1 }} // Stacking vertically with spacing
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            damping: 12,
                            delay: i * 0.5
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export function ClientVisual() {
    return (
        <div className={CONTAINER_CLASS}>
            {/* Expanding Network/Node line */}
            <motion.div
                className="w-1 bg-purple-500/30 h-full relative"
            >
                <motion.div
                    className="absolute bottom-0 w-full bg-purple-500"
                    initial={{ height: "0%" }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                {[20, 50, 80].map((pct, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                        style={{ bottom: `${pct}%` }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + (i * 0.3), type: "spring" }}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export function PerformanceVisual() {
    return (
        <div className={CONTAINER_CLASS}>
            {/* Rising Thermometer / Speed Gauge */}
            <div className="w-full h-full bg-gradient-to-t from-orange-500 via-yellow-400 to-red-500 opacity-20 absolute" />

            <motion.div
                className="w-full bg-gradient-to-t from-orange-500 via-yellow-400 to-red-500"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Particles rising */}
            {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ bottom: 0, opacity: 0 }}
                    whileInView={{ bottom: "100%", opacity: [0, 1, 0] }}
                    transition={{
                        duration: 2 + (i * 0.5),
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "linear"
                    }}
                    style={{ left: `${15 + (i * 18)}%` }}
                />
            ))}
        </div>
    );
}

export function MetricVisual({ variant }: { variant: string }) {
    switch (variant) {
        case 'uptime': return <UptimeVisual />;
        case 'modules': return <ModulesVisual />;
        case 'clients': return <ClientVisual />;
        case 'performance': return <PerformanceVisual />;
        default: return <UptimeVisual />;
    }
}

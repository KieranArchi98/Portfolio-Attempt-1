"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

interface Certification {
    name: string;
    issuer: string;
    year: string;
    icon: string; // Placeholder for now, typically would be an image path
    color: string;
}

const CERTS: Certification[] = [
    { name: "Comptia A+", issuer: "Computing Technology Industry Association", year: "2024", icon: "settings", color: "#E53935" }, // Red
    { name: "Comptia Network+", issuer: "Computing Technology Industry Association", year: "2025", icon: "globe", color: "#32D296" }, // Green
    { name: "CCNA", issuer: "Cisco Certified Network Associate", year: "2025", icon: "server", color: "#1BA0D7" }, // Blue
];

export function Certifications() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Particles (Deterministic) */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-brand-primary/20 rounded-full"
                        initial={{
                            // Deterministic positions to prevent hydration mismatch
                            left: `${(i * 7) % 100}%`,
                            top: `${(i * 13) % 100}%`,
                            scale: 0
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{
                            duration: 3 + (i % 3),
                            repeat: Infinity,
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Organic Cluster Layout - Centered */}
                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
                    {CERTS.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative flex flex-col items-center justify-center"
                        >
                            {/* Glowing Orbit */}
                            <div className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                style={{ backgroundColor: cert.color }}
                            />

                            {/* Icon Container (No Card) */}
                            <div className="relative z-10 p-6 rounded-full bg-white/50 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-gray-100 group-hover:border-transparent transition-all duration-500">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                                    style={{ color: cert.color }}
                                >
                                    <Icon name={cert.icon as any} size={48} />
                                </motion.div>
                            </div>

                            {/* Minimal Label - Always Visible */}
                            <div className="absolute -bottom-20 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 text-center min-w-[150px]">
                                <div className="text-sm font-bold text-gray-900 whitespace-nowrap">{cert.name}</div>
                                <div className="text-[10px] text-gray-500">{cert.issuer}</div>
                            </div>

                            {/* Connecting Lines/Particles (Decorative) */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 w-32 h-32 border border-dashed border-gray-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>

    );
}

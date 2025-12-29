"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

interface SystemHeroProps {
    openingPhrase?: string;
    dynamicTerms?: string[];
    accentColor?: string;
}

const TypingText = ({ text, delay = 0.08 }: { text: string; delay?: number }) => {
    return (
        <span className="inline-block">
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: i * delay,
                        duration: 0.1,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
};

export function SystemHero({
    openingPhrase = "Precision engineered for",
    dynamicTerms = ["Architecture.", "Infrastructure.", "Governance.", "Autonomy."],
    accentColor = "var(--color-brand-primary)"
}: SystemHeroProps) {
    const [index, setIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (isComplete) return;

        const cycleTimer = setTimeout(() => {
            if (index < dynamicTerms.length - 1) {
                setIndex(prev => prev + 1);
            } else {
                setIsComplete(true);
            }
        }, 3500); // Slower cycle for a more deliberate feel

        return () => clearTimeout(cycleTimer);
    }, [index, dynamicTerms.length, isComplete]);

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background-primary pt-10">
            {/* Background Grid */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, var(--color-border-default) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--color-border-default) 1px, transparent 1px)
                    `,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 90%)',
                }}
            />

            {/* Noise Overlay (SVG fractalNoise) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* Ambient Light Movement */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none blur-[120px]"
                animate={{
                    x: ["-10%", "10%", "5%", "-5%"],
                    y: ["-5%", "10%", "5%", "-10%"],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, var(--color-brand-primary-subtle) 0%, transparent 70%)',
                        opacity: 0.5
                    }}
                />
            </motion.div>

            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto relative z-10 px-4">
                <div className="w-full text-center space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground-primary leading-[1.1]">
                            <span className="opacity-95 block mb-2">{openingPhrase}</span>
                            <span className="inline-block min-w-[300px] md:min-w-[500px]">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={dynamicTerms[index]}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, transition: { duration: 0.6 } }}
                                        style={{ color: accentColor }}
                                        className="font-mono tracking-tighter"
                                    >
                                        <TypingText text={dynamicTerms[index]} />
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 2 }}
                        className="text-xl md:text-2xl text-foreground-secondary max-w-2xl mx-auto font-light leading-relaxed opacity-80"
                    >
                        A systematic approach to building resilient digital infrastructure,
                        optimized for long-term consistency and autonomy.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1.5 }}
                        className="flex flex-wrap items-center justify-center gap-6 pt-4"
                    >
                        <Button size="lg" variant="primary" className="px-8 shadow-2xl">
                            Initialize System
                        </Button>
                        <Button size="lg" variant="outline" className="px-8 bg-white/50 backdrop-blur-sm">
                            View Manifest
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background-primary via-background-primary/50 to-transparent z-10" />
        </section>
    );
}

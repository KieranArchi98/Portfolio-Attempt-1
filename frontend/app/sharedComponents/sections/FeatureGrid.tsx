"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon, IconName } from '../ui/Icon';
import { FeatureVisual } from './FeatureVisuals';

interface Feature {
    title: string;
    description: string;
    icon: IconName;
    imageUrl?: string;
    variant?: string;
}

interface FeatureGridProps {
    title?: string;
    features: Feature[];
    columns?: 2 | 3 | 4;
    visualComponent?: React.ComponentType<{ variant?: string }>;
}

/**
 * FeatureGrid Navigation Explorer
 * Transforms the feature grid into an interactive navigation-based showcase.
 */
export function FeatureGrid({ title, features, visualComponent: CustomVisual }: FeatureGridProps) {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <section className="py-10 lg:py-14 relative overflow-hidden bg-white">

            <div className="w-[94%] mx-auto px-4 md:px-8 relative z-10">
                {title && (
                    <div className="text-center mb-16 md:mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-extrabold text-foreground-primary tracking-tighter"
                        >
                            {title}
                        </motion.h2>
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start min-h-[600px]">
                    {/* --- NAVIGATION SIDEBAR / TOP BAR --- */}
                    <div className="w-full lg:w-[400px] flex flex-row lg:flex-col gap-3 lg:gap-4 relative z-20">
                        <div className="hidden lg:block mb-6 px-4">
                            <span className="text-[10px] font-mono font-bold text-brand-primary tracking-[0.3em] uppercase">Architecture::Explorer</span>
                        </div>

                        {features.map((feature, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`group relative flex-1 text-left p-4 lg:p-8 rounded-[1.25rem] lg:rounded-[2rem] transition-all duration-500 overflow-hidden ${activeIndex === idx
                                    ? 'bg-white'
                                    : 'bg-transparent hover:bg-background-secondary/50'
                                    }`}
                            >
                                <div className="flex items-center justify-between relative z-10 gap-3">
                                    <div className="space-y-0.5 lg:space-y-1 min-w-0">
                                        <div className={`text-[9px] lg:text-[10px] font-mono font-bold transition-colors duration-500 ${activeIndex === idx ? 'text-brand-primary' : 'text-foreground-muted'}`}>
                                            MOD_{String(idx + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className={`text-sm lg:text-2xl font-bold transition-colors duration-500 whitespace-nowrap overflow-hidden text-ellipsis ${activeIndex === idx ? 'text-foreground-primary' : 'text-foreground-primary/40'}`}>
                                            {feature.title.split(' ')[0]}<span className="hidden md:inline"> {feature.title.split(' ').slice(1).join(' ')}</span>
                                        </h3>
                                    </div>
                                    <div className={`shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl flex items-center justify-center transition-all duration-500 ${activeIndex === idx
                                        ? 'bg-brand-primary text-white scale-110'
                                        : 'bg-surface-secondary text-foreground-muted group-hover:bg-brand-primary/10 group-hover:text-brand-primary'
                                        }`}>
                                        <Icon name={feature.icon} size={18} className="lg:hidden" />
                                        <Icon name={feature.icon} size={20} className="hidden lg:inline-block" />
                                    </div>
                                </div>

                                {activeIndex === idx && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute bottom-0 left-0 w-1 lg:w-1.5 h-[60%] bg-brand-primary rounded-r-full top-1/2 -translate-y-1/2"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* --- CONTENT STAGE --- */}
                    <div className="flex-1 w-full bg-white rounded-[3rem] overflow-hidden min-h-[600px] flex flex-col group/visual">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex-1 flex flex-col lg:flex-row h-full"
                            >
                                <div className="w-full lg:w-1/2 bg-white lg:border-r border-border-muted/20 relative overflow-hidden p-6 lg:p-12 flex items-center justify-center min-h-[400px] lg:min-h-full">
                                    <div className="absolute inset-0 opacity-20"
                                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-border-default) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                                    <div className="relative z-10 w-full aspect-square max-w-[450px] flex items-center justify-center scale-110 lg:scale-125 transition-transform duration-700">
                                        {features[activeIndex].variant ? (
                                            CustomVisual ? <CustomVisual variant={features[activeIndex].variant} /> : <FeatureVisual variant={features[activeIndex].variant} />
                                        ) : (
                                            <div className="w-full h-full bg-white/50 backdrop-blur-xl rounded-full border border-white flex items-center justify-center shadow-2xl">
                                                <Icon name={features[activeIndex].icon} size={120} className="text-brand-primary opacity-50" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Content Panel */}
                                <div className="flex-1 p-12 md:p-16 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Active System Protocol</span>
                                    </div>

                                    <motion.h4
                                        className="text-3xl md:text-5xl font-bold text-foreground-primary mb-8"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {features[activeIndex].title}
                                    </motion.h4>

                                    <motion.p
                                        className="text-lg md:text-xl text-foreground-secondary leading-relaxed font-light mb-12"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {features[activeIndex].description}
                                    </motion.p>

                                    <motion.div
                                        className="grid grid-cols-2 gap-8 pt-8 border-t border-border-muted"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div className="space-y-1">
                                            <div className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest">Efficiency</div>
                                            <div className="text-2xl font-bold text-foreground-primary">99.9%</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest">Uptime</div>
                                            <div className="text-2xl font-bold text-foreground-primary">24/7</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

        </section>
    );
}

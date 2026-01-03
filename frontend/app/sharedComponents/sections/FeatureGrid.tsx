"use client";

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Icon, IconName } from '../ui/Icon';
import { FeatureVisual } from './FeatureVisuals';

interface Feature {
    title: string;
    description: string;
    icon: IconName;
    imageUrl?: string;
    variant?: 'stack' | 'network' | 'ops';
}

interface FeatureGridProps {
    title?: string;
    features: Feature[];
    columns?: 2 | 3 | 4;
}

/**
 * feature grid section
 * Displays a grid of feature cards with modern, sophisticated styling.
 */
export function FeatureGrid({ title, features, columns = 3 }: FeatureGridProps) {
    const gridCols = {
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-2 lg:grid-cols-4'
    };

    return (
        <section className="py-24 relative overflow-hidden bg-background-primary">
            {/* Top Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent opacity-20 z-30" />

            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-4 md:px-6 relative z-10">
                {title && (
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-foreground-primary tracking-tight"
                        >
                            {title}
                        </motion.h2>
                    </div>
                )}

                <div className={`grid gap-6 md:gap-8 ${gridCols[columns]}`}>
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <Card
                                variant="bordered"
                                className="relative flex flex-col h-full gap-6 p-8 overflow-hidden bg-background-muted/30 border border-border-default/30 hover:border-brand-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-brand-primary/5 hover:-translate-y-1"
                            >
                                {/* Gradient accent line */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-primary/0 via-brand-primary/50 to-brand-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Subtle grid pattern */}
                                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                                    style={{
                                        backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(37, 99, 235, 0.05) 25%, rgba(37, 99, 235, 0.05) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.05) 75%, rgba(37, 99, 235, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(37, 99, 235, 0.05) 25%, rgba(37, 99, 235, 0.05) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.05) 75%, rgba(37, 99, 235, 0.05) 76%, transparent 77%, transparent)`,
                                        backgroundSize: '20px 20px'
                                    }}
                                />

                                {/* Index number */}
                                <div className="absolute top-6 right-6 font-mono text-5xl font-bold text-brand-primary/[0.06] group-hover:text-brand-primary/[0.12] transition-colors duration-500">
                                    {String(idx + 1).padStart(2, '0')}
                                </div>

                                {feature.imageUrl || feature.variant ? (
                                    <div className="relative w-full h-48 mb-6 rounded-2xl overflow-visible group-hover:scale-105 transition-transform duration-500">
                                        {feature.imageUrl ? (
                                            <img
                                                src={feature.imageUrl}
                                                alt={feature.title}
                                                className="w-full h-full object-cover rounded-2xl"
                                            />
                                        ) : (
                                            <FeatureVisual variant={feature.variant} />
                                        )}
                                    </div>
                                ) : (
                                    /* Icon with gradient background */
                                    <motion.div
                                        className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 flex items-center justify-center text-brand-primary shadow-lg shadow-brand-primary/10 group-hover:shadow-brand-primary/20 transition-all duration-500"
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                                        <Icon name={feature.icon} size={28} className="relative z-10" />
                                    </motion.div>
                                )}

                                {/* Content */}
                                <div className="space-y-3 relative z-10">
                                    <h3 className="text-2xl font-bold text-foreground-primary group-hover:text-brand-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-foreground-secondary leading-relaxed opacity-80">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Bottom accent bar */}
                                <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Transition Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent opacity-20" />
        </section>
    );
}

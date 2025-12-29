"use client";

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Icon, IconName } from '../ui/Icon';

interface Feature {
    title: string;
    description: string;
    icon: IconName;
}

interface FeatureGridProps {
    title?: string;
    features: Feature[];
    columns?: 2 | 3 | 4;
}

/**
 * feature grid section
 * Displays a grid of feature cards.
 */
export function FeatureGrid({ title, features, columns = 3 }: FeatureGridProps) {
    const gridCols = {
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-2 lg:grid-cols-4'
    };

    return (
        <section className="py-24 relative overflow-hidden bg-background-primary">
            {/* Top Divider (matches Hero bottom) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent opacity-40 z-30" />

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
                        >
                            <Card variant="bordered" className="flex flex-col h-full gap-4 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-background-muted/50 border-border-default/50">
                                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-inner">
                                    <Icon name={feature.icon} size={24} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-foreground-primary">{feature.title}</h3>
                                    <p className="text-foreground-secondary leading-relaxed opacity-80">{feature.description}</p>
                                </div>
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
"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface ProductHeroProps {
    sectionTag?: string;
    title: string;
    description: string;
    primaryAction?: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
}

export function ProductHero({
    sectionTag = "SYSTEM_MANIFEST: CAPABILITY_01",
    title,
    description,
}: ProductHeroProps) {
    return (
        <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden bg-background-primary">
            {/* Standardized Top Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent opacity-40 z-30" />

            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-6 relative z-10">
                <div className="flex flex-col items-start text-left space-y-8">

                    {/* Metadata Breadcrumb */}
                    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-foreground-muted uppercase opacity-60">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40" />
                        {sectionTag}
                    </div>

                    <div className="flex gap-8 items-start w-full">
                        {/* Vertical Focus Bar */}
                        <div className="w-1.5 h-auto self-stretch bg-gradient-to-b from-brand-primary via-brand-primary/50 to-transparent rounded-full opacity-80" />

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 space-y-6"
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground-primary leading-[1.05]">
                                {title}
                            </h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="text-base md:text-lg text-foreground-secondary font-mono tracking-tight lowercase opacity-60"
                            >
                                {description}
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Actions */}
                    {/* Removed primaryAction and secondaryAction buttons and their motion wrapper */}
                </div>
            </div>

            {/* Subtle Bottom Transition Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-secondary/10 to-transparent pointer-events-none" />
            {/* Subtle Bottom Divider Fade */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent opacity-20" />
        </section>
    );
}

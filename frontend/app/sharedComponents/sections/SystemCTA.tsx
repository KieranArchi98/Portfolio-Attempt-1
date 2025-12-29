"use client";

import Link from 'next/link';

interface SystemCTAProps {
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
}

export function SystemCTA({ title, description, primaryAction }: SystemCTAProps) {
    return (
        <section className="py-32 relative overflow-hidden bg-background-primary">
            {/* Simple Top Divider (standardized across sections) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent opacity-40 z-30" />

            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-10">

                    {/* Minimal Metadata Tag */}
                    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-foreground-muted uppercase opacity-60">
                        [ SYSTEM_READY ]
                    </div>

                    <div className="w-full space-y-6">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground-primary leading-[1] font-mono">
                            {title.toUpperCase()}
                        </h2>

                        <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed opacity-70 font-mono tracking-tight lowercase">
                            {description}
                        </p>
                    </div>

                    {/* The Command Prompt Link */}
                    <div className="pt-4">
                        <Link
                            href={primaryAction.href}
                            className="group relative inline-flex items-center gap-4 py-4 px-10 border border-brand-primary/20 bg-brand-primary/5 rounded-full transition-all duration-300 hover:border-brand-primary/40 hover:bg-brand-primary/10"
                        >
                            <span className="font-mono text-xl md:text-2xl text-brand-primary tracking-tighter flex items-center gap-2">
                                <span className="opacity-50">&gt;</span>
                                {primaryAction.label.toUpperCase()}
                                <span className="inline-block w-3 h-6 bg-brand-primary" />
                            </span>
                        </Link>
                    </div>

                    {/* Minimal Bottom Metadata */}
                    <div className="flex gap-8 font-mono text-[9px] text-foreground-muted uppercase tracking-widest pt-8 opacity-40">
                        <span>NODE: v2.0</span>
                        <span>RES: FIDELITY</span>
                    </div>

                </div>
            </div>
        </section>
    );
}

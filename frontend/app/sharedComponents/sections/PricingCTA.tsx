"use client";

import Link from 'next/link';

interface PricingCTAProps {
    title?: string;
    description?: string;
    primaryAction?: { label: string; href: string };
}

export function PricingCTA({
    title = "Finalize your configuration",
    description = "Select your operational baseline and authorize the deployment of your digital infrastructure.",
    primaryAction = { label: "Authorize Infrastructure", href: "/signup" }
}: PricingCTAProps) {
    return (
        <section className="py-40 relative overflow-hidden bg-background-primary">
            {/* Standardized Top Divider (Synchronization bridge) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-border-default to-transparent opacity-20 z-30" />

            {/* Background Architectural Grid (Subtle) */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(var(--color-brand-primary) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="w-full md:w-[98%] lg:w-[95%] xl:w-[92%] 2xl:w-[90%] mx-auto px-6 relative z-10">
                <div className="relative border border-border-default/30 bg-background-secondary/10 p-12 md:p-24 rounded-[2rem] overflow-hidden group">

                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-primary/40 rounded-tl-xl" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-primary/40 rounded-tr-xl" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-primary/40 rounded-bl-xl" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-primary/40 rounded-br-xl" />

                    {/* Metadata HUD */}
                    <div className="absolute top-6 left-12 right-12 flex justify-between items-center font-mono text-[9px] text-foreground-muted tracking-[0.3em] uppercase opacity-60">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                            [ PROTOCOL: AUTH_INIT ]
                        </div>
                        <div className="hidden md:block">[ DEBT: ZERO_LIABILITY ]</div>
                        <div>REF_ID: #8037-P</div>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-12 w-full mx-auto">
                        <div className="space-y-6 w-full">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground-primary leading-[1] font-mono">
                                {title.toUpperCase()}
                            </h2>
                            <p className="text-lg md:text-xl text-foreground-secondary opacity-70 font-mono tracking-tight lowercase mx-auto">
                                {description}
                            </p>
                        </div>

                        {/* Central Command Prompt */}
                        <div className="pt-4">
                            <Link
                                href={primaryAction.href}
                                className="group relative inline-flex items-center gap-4 py-5 px-12 border border-brand-primary/30 bg-brand-primary/5 rounded-full transition-all duration-300 hover:border-brand-primary/60 hover:bg-brand-primary/10 hover:shadow-[0_0_40px_rgba(var(--color-brand-primary-rgb),0.1)]"
                            >
                                <span className="font-mono text-2xl md:text-3xl text-brand-primary tracking-tighter flex items-center gap-3">
                                    <span className="opacity-40">&gt;</span>
                                    {primaryAction.label.toUpperCase()}
                                    <span className="inline-block w-4 h-8 bg-brand-primary animate-[blink_1s_infinite]" />
                                </span>
                            </Link>
                        </div>

                        {/* Bottom Metadata */}
                        <div className="pt-8 flex gap-12 font-mono text-[8px] text-foreground-muted uppercase tracking-[0.4em] opacity-40">
                            <span>VER: 2.0.4</span>
                            <span className="hidden sm:inline">NODES: DISTRIBUTED</span>
                            <span>STATUS: LIVE</span>
                        </div>
                    </div>

                    {/* Subtle Scanning Line Animation */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent absolute top-0 animate-[scan_8s_linear_infinite]" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes scan {
                    from { transform: translateY(-100%); }
                    to { transform: translateY(1000%); }
                }
            `}</style>
        </section>
    );
}


"use client";
import { Button } from '../ui/Button';

interface CTAProps {
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
}

/**
 * call to action section
 * Standalone block to drive conversion.
 */
export function CTA({ title, description, primaryAction, secondaryAction }: CTAProps) {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-brand-primary rounded-3xl p-8 md:p-12 text-center text-white shadow-xl overflow-hidden relative">
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            {title}
                        </h2>
                        <p className="text-brand-primary-subtle text-lg md:text-xl">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-brand-primary hover:bg-white/90"
                                onClick={() => window.location.href = primaryAction.href}
                            >
                                {primaryAction.label}
                            </Button>
                            {secondaryAction && (
                                <Button
                                    variant="ghost" /* Need custom ghost for dark bg? or just outline */
                                    className="text-white hover:bg-white/10 hover:text-white border border-white/20"
                                    size="lg"
                                    onClick={() => window.location.href = secondaryAction.href}
                                >
                                    {secondaryAction.label}
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
            </div>
        </section>
    );
}
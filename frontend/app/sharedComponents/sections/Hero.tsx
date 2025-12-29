
"use client";
import { Button } from '../ui/Button';
import { Image } from '../ui/Image';
import { Icon, IconName } from '../ui/Icon';

interface HeroProps {
    title: string;
    subtitle: string;
    primaryAction: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
    imageSrc?: string;
    align?: 'left' | 'center';
    icon?: IconName;
}

/**
 * hero section
 * Major landing component.
 */
export function Hero({ title, subtitle, primaryAction, secondaryAction, imageSrc, align = 'center', icon }: HeroProps) {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className={`flex flex-col gap-8 w-full max-w-none ${align === 'center' ? 'text-center items-center' : 'items-start'}`}>
                    <div className="space-y-6">
                        <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
                            {icon && <Icon name={icon} size={56} className="text-brand-primary" />}
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground-primary leading-[1.1]">
                                {title}
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed font-light">
                            {subtitle}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button size="lg" onClick={() => window.location.href = primaryAction.href}>
                            {primaryAction.label}
                        </Button>
                        {secondaryAction && (
                            <Button variant="secondary" size="lg" onClick={() => window.location.href = secondaryAction.href}>
                                {secondaryAction.label}
                            </Button>
                        )}
                    </div>
                </div>

                {imageSrc && (
                    <div className="mt-16 relative w-full max-w-5xl mx-auto rounded-xl shadow-2xl border border-border-muted overflow-hidden bg-background-secondary p-1">
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={1200}
                            height={675}
                            variant="rounded"
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
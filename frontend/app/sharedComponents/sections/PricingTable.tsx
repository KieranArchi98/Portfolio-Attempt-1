"use client";
import { AnimatedRitualIcon } from '../ui/AnimatedRitualIcon';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { List } from '../ui/List';
import { motion } from 'framer-motion';
import { IconName } from '../ui/Icon';

interface Plan {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    cta: string;
}

interface PricingTableProps {
    title: string;
    subtitle?: string;
    plans: Plan[];
    icon?: IconName;
}

/**
 * pricing table section
 * Comparison of pricing plans with animations.
 */
export function PricingTable({ title, subtitle, plans, icon }: PricingTableProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    } as any;

    return (
        <section className="pt-10 pb-20 lg:pt-14 lg:pb-28 relative overflow-hidden bg-background-primary">
            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center mb-16 space-y-8 w-full">
                    <div className="flex flex-col items-center justify-center gap-6 w-full">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-primary tracking-tighter uppercase font-mono">
                            {title}
                        </h2>
                    </div>
                    {subtitle && (
                        <p className="text-base md:text-lg lg:text-xl font-mono opacity-60 w-full text-center lowercase tracking-tight">
                            {subtitle}
                        </p>
                    )}
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8 w-full items-start"
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            variants={itemVariants}
                            className="h-full flex"
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <Card
                                variant={plan.isPopular ? 'bordered' : 'flat'}
                                className={`relative flex flex-col gap-8 w-full transition-all duration-300 ${plan.isPopular
                                    ? 'border-brand-primary shadow-2xl ring-1 ring-brand-primary/20 z-10 md:-mt-4 md:mb-4 bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]'
                                    : 'bg-background-secondary border-transparent hover:bg-background-secondary/80 hover:shadow-xl hover:border-border-default/50'
                                    }`}
                                padding="xl"
                            >
                                {plan.isPopular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div>
                                    <h3 className="text-xl font-bold text-foreground-primary mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-bold text-foreground-primary tracking-tight">{plan.price}</span>
                                        <span className="text-foreground-muted font-medium">/month</span>
                                    </div>
                                    <p className="text-foreground-secondary mt-4 leading-relaxed">{plan.description}</p>
                                </div>

                                <div className="space-y-4 flex-1">
                                    <div className="h-px w-full bg-border-muted" />
                                    <List
                                        variant="icon"
                                        items={plan.features.map(f => ({ id: f, title: f, icon: 'check' }))}
                                        className="gap-4"
                                    />
                                </div>

                                <Button
                                    variant={plan.isPopular ? 'primary' : 'outline'}
                                    className="w-full"
                                    size="lg"
                                >
                                    {plan.cta}
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
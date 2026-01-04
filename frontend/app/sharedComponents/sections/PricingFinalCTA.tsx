"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

export function PricingFinalCTA() {
    return (
        <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary relative overflow-hidden border-t border-border-default/40">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.03),transparent_50%)]" />

            <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
                <div className="w-full text-center space-y-12">

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground-primary tracking-tight">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg md:text-xl text-foreground-secondary w-full leading-relaxed">
                            Choose the service tier that fits your needs. All plans include direct communication,
                            transparent pricing, and professional delivery.
                        </p>
                    </motion.div>

                    {/* Quick Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {[
                            { icon: "check", title: "No Hidden Fees", desc: "Transparent pricing" },
                            { icon: "user", title: "Direct Contact", desc: "Work with me directly" },
                            { icon: "docs", title: "Flexible Terms", desc: "Project or hourly rates" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-surface-primary border border-border-default rounded-xl p-6 hover:border-brand-primary/30 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4 mx-auto">
                                    <Icon name={item.icon as any} className="text-brand-primary" size={20} />
                                </div>
                                <h3 className="font-semibold text-foreground-primary mb-1">{item.title}</h3>
                                <p className="text-sm text-foreground-secondary">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-primary/90 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 group">
                            SCHEDULE CONSULTATION
                            <Icon name="arrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-border-default text-foreground-primary font-semibold rounded-lg hover:border-brand-primary/50 hover:bg-surface-secondary transition-colors">
                            VIEW PORTFOLIO
                        </button>
                    </motion.div>

                    {/* Footer Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-sm text-foreground-muted flex items-center justify-center gap-2 pt-8 border-t border-border-default/40"
                    >
                        <Icon name="info" size={16} className="text-brand-primary" />
                        Questions? Reach out anytime for a free project assessment.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

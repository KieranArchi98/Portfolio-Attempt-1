"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../ui/Icon';

const FAQS = [
    {
        question: "What happens after I purchase?",
        answer: "We schedule an immediate onboarding call to define scope. Following that, you'll receive access to a private repository and a shared project board to track progress."
    },
    {
        question: "Can I host the application myself?",
        answer: "Absolutely. You receive full source code and Docker containers. You can deploy to AWS, Vercel, DigitalOcean, or your own bare-metal hardware."
    },
    {
        question: "Do you offer ongoing maintenance?",
        answer: "Yes. While the codebase is handed over fully functional, I offer retainer packages for updates, security patches, and feature additions."
    },
    {
        question: "Is the design customizable?",
        answer: "Everything is built with modular components and Tailwind CSS. Changing the theme, colors, or typography is a matter of updating a single configuration file."
    }
];

export function PricingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-background-secondary/30 relative border-t border-border-default/40">
            <div className="container mx-auto px-6 max-w-3xl">

                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary">
                        Common Queries
                    </h2>
                    <div className="w-12 h-1 bg-brand-primary mx-auto rounded-full" />
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                        <div key={idx} className="bg-background-primary border border-border-default rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-secondary/20 transition-colors"
                            >
                                <span className="font-semibold text-foreground-primary text-lg">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === idx ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-foreground-secondary"
                                >
                                    <Icon name="arrowRight" size={20} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-foreground-secondary leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/app/sharedComponents/ui/Button';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandingLogo } from '@/app/sharedComponents/ui/BrandingLogo';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/product', label: 'Product' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/portfolio', label: 'Projects' },
        { href: '/docs', label: 'Docs' },
        { href: '/blog', label: 'Blog' },
    ];

    const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

    // Handle scroll effect for pill compression
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileMenuOpen]);

    return (
        <React.Fragment>
            {/* 
              Floating Pill Container 
              - Centered, fixed at top
              - Responsive width adjustment
              - Glassmorphism effects
            */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute top-4 min-[1000px]:top-6 left-1/2 -translate-x-1/2 z-[100] w-[94%] min-[1000px]:w-[92%] lg:w-[90%] max-w-[1800px] transition-all duration-300`}
            >
                <div
                    className={`
                        relative flex items-center justify-between px-6 min-[1000px]:px-12
                        transition-all duration-300 ease-out
                        ${scrolled ? 'py-3 bg-white/70 backdrop-blur-xl border-white/20 shadow-lg' : 'py-5 bg-white/40 backdrop-blur-md border-white/10 shadow-sm'}
                        border rounded-full
                    `}
                >
                    {/* Logo Section */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="relative z-50 flex items-center gap-2 group">
                            <BrandingLogo size={scrolled ? 110 : 140} withHover className="transition-all duration-300" />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered in free space if possible, but here pushing right relative to logo */}
                    <nav className="hidden min-[1000px]:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 text-lg font-medium transition-colors group ${active ? 'text-brand-primary' : 'text-gray-600 hover:text-gray-900'}`}
                                >
                                    {active && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-brand-primary/5 rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                    {/* Hover glow effect */}
                                    {!active && (
                                        <div className="absolute inset-0 rounded-full bg-gray-50 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 -z-10" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Actions Section */}
                    <div className="flex items-center gap-3">
                        <Link href="/login" className="hidden min-[1000px]:block text-lg font-medium text-gray-600 hover:text-gray-900 px-3 py-2 transition-colors">
                            Log in
                        </Link>
                        <Link href="/signup" className="hidden min-[1000px]:inline-flex">
                            <Button
                                variant="primary"
                                size="sm"
                                className={`rounded-full ${scrolled ? 'h-10 px-6' : 'h-12 px-8'}`}
                            >
                                Get Started
                            </Button>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="min-[950px]:hidden relative z-50 p-2 text-gray-800 hover:bg-black/5 rounded-full transition-colors"
                            aria-label="Toggle menu"
                        >
                            <motion.div
                                animate={mobileMenuOpen ? "open" : "closed"}
                                className="w-6 h-6 flex flex-col justify-center gap-1.5"
                            >
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: 45, y: 6 }
                                    }}
                                    className="w-full h-0.5 bg-current rounded-full origin-center"
                                />
                                <motion.span
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 }
                                    }}
                                    className="w-full h-0.5 bg-current rounded-full"
                                />
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: -45, y: -6 }
                                    }}
                                    className="w-full h-0.5 bg-current rounded-full origin-center"
                                />
                            </motion.div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Full Screen Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-white z-40 min-[1000px]:hidden flex flex-col pt-52 px-8"
                    >
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,0,0,0.03)_0%,transparent_50%)] pointer-events-none" />

                        <nav className="flex flex-col gap-6 relative z-10 items-end">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-4xl font-bold tracking-tight flex items-center gap-4 flex-row-reverse ${isActive(link.href) ? 'text-brand-primary' : 'text-gray-900'}`}
                                    >
                                        <span className="text-sm font-mono font-normal text-gray-400">0{i + 1}</span>
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-auto mb-12 flex flex-col gap-4"
                        >
                            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="secondary" className="w-full justify-center h-12 text-lg">Log in</Button>
                            </Link>
                            <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="primary" className="w-full justify-center h-12 text-lg">Get Started</Button>
                            </Link>

                            <div className="mt-8 flex justify-between text-sm text-gray-400 font-mono uppercase tracking-widest">
                                <span>© 2026</span>
                                <span>Atlas Systems</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
}
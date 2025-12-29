"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/app/sharedComponents/ui/Button';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandingLogo } from '@/app/sharedComponents/ui/BrandingLogo';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/product', label: 'Product' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/portfolio', label: 'Projects' },
        { href: '/docs', label: 'Docs' },
        { href: '/blog', label: 'Blog' },
    ];

    const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

    return (
        <header className="w-full border-b border-border-default bg-background-primary sticky top-0 z-[100]">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2">
                        <BrandingLogo size={120} withHover />
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${isActive(link.href)
                                    ? 'text-brand-primary'
                                    : 'text-foreground-secondary hover:text-foreground-primary'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="hidden md:block text-sm font-medium text-foreground-secondary hover:text-foreground-primary">
                        Log in
                    </Link>
                    <Link href="/signup" className="hidden md:inline-flex">
                        <Button variant="primary" size="sm">Get Started</Button>
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-foreground-secondary hover:text-foreground-primary"
                        aria-label="Toggle menu"
                    >
                        <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                            style={{ top: '64px' }}
                        />

                        {/* Slide-in Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-16 bottom-0 w-[280px] bg-background-primary border-l border-border-default shadow-2xl md:hidden overflow-y-auto"
                        >
                            <nav className="flex flex-col p-6 gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive(link.href)
                                            ? 'bg-brand-primary/10 text-brand-primary'
                                            : 'text-foreground-secondary hover:bg-background-muted hover:text-foreground-primary'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="h-px bg-border-default my-4" />
                                <Link
                                    href="/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 rounded-lg text-sm font-medium text-foreground-secondary hover:bg-background-muted hover:text-foreground-primary transition-all"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/signup"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Button variant="primary" className="w-full">Get Started</Button>
                                </Link>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
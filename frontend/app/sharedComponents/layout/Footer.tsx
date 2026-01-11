"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandingLogo } from '@/app/sharedComponents/ui/BrandingLogo';
import { Button } from '@/app/sharedComponents/ui/Button';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { motion } from 'framer-motion';

export function Footer() {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href + '/'));

    const getLinkClass = (href: string) =>
        `text-sm transition-all duration-300 hover:translate-x-1 ${isActive(href)
            ? 'text-brand-primary font-medium'
            : 'text-gray-500 hover:text-gray-900'
        }`;

    return (
        <footer className="w-full bg-white/60 backdrop-blur-md pt-0 pb-10 border-t border-gray-200/50 relative z-10 mt-20">
            <div className="w-[92%] mx-auto px-6">

                {/* Brand & Newsletter Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-10 items-end">
                    <div className="space-y-2">
                        <Link href="/" className="inline-block group">
                            <BrandingLogo size={180} withHover className="text-gray-900" />
                        </Link>
                        <p className="text-gray-500 w-[90%] md:w-[80%] text-lg leading-relaxed">
                            Pioneering the next generation of digital infrastructure and intelligent systems.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {['github', 'linkedin', 'twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 group"
                                >
                                    <Icon name={social as any} size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-end space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Stay updated</h3>
                        <div className="flex gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all"
                            />
                            <Button variant="primary" className="px-8 rounded-xl">Subscribe</Button>
                        </div>
                        <p className="text-xs text-gray-400">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates.
                        </p>
                    </div>
                </div>

                <div className="h-px bg-gray-200 w-full mb-16" />

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-gray-900 mb-2">Platform</h4>
                        <Link href="/product" className={getLinkClass('/product')}>Product</Link>
                        <Link href="/pricing" className={getLinkClass('/pricing')}>Pricing</Link>
                        <Link href="/features" className={getLinkClass('/features')}>Features</Link>
                        <Link href="/roadmap" className={getLinkClass('/roadmap')}>Roadmap</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-gray-900 mb-2">Resources</h4>
                        <Link href="/docs" className={getLinkClass('/docs')}>Documentation</Link>
                        <Link href="/blog" className={getLinkClass('/blog')}>Blog</Link>
                        <Link href="/changelog" className={getLinkClass('/changelog')}>Changelog</Link>
                        <Link href="/help" className={getLinkClass('/help')}>Help Center</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-gray-900 mb-2">Company</h4>
                        <Link href="/about" className={getLinkClass('/about')}>About</Link>
                        <Link href="/careers" className={getLinkClass('/careers')}>Careers</Link>
                        <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>
                        <Link href="/partners" className={getLinkClass('/partners')}>Partners</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-gray-900 mb-2">Legal</h4>
                        <Link href="/privacy" className={getLinkClass('/privacy')}>Privacy</Link>
                        <Link href="/terms" className={getLinkClass('/terms')}>Terms</Link>
                        <Link href="/security" className={getLinkClass('/security')}>Security</Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 font-mono">
                        © {new Date().getFullYear()} ATLAS. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-gray-600">All systems normal</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandingLogo } from '@/app/sharedComponents/ui/BrandingLogo';

export function Footer() {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href + '/'));

    const getLinkClass = (href: string) =>
        `text-sm transition-colors ${isActive(href)
            ? 'text-brand-primary font-medium'
            : 'text-foreground-secondary hover:text-foreground-primary'
        }`;

    return (
        <footer className="w-full border-t border-border-default bg-background-muted py-12">
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <div className="flex items-center gap-2">
                        <BrandingLogo size={120} />
                    </div>
                    <p className="text-sm text-foreground-muted">Building the future of digital portfolios.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-foreground-primary mb-2">Company</h4>
                    <Link href="/" className={getLinkClass('/')}>Home</Link>
                    <Link href="/product" className={getLinkClass('/product')}>Product</Link>
                    <Link href="/pricing" className={getLinkClass('/pricing')}>Pricing</Link>
                    <Link href="/portfolio" className={getLinkClass('/portfolio')}>Projects</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-foreground-primary mb-2">Resources</h4>
                    <Link href="/docs" className={getLinkClass('/docs')}>Documentation</Link>
                    <Link href="/blog" className={getLinkClass('/blog')}>Blog</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-foreground-primary mb-2">Legal</h4>
                    <Link href="/terms" className={getLinkClass('/terms')}>Terms</Link>
                    <Link href="/privacy" className={getLinkClass('/privacy')}>Privacy</Link>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border-muted text-center text-sm text-foreground-muted">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
            </div>
        </footer>
    );
}
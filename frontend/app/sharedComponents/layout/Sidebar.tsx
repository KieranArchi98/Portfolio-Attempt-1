"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon, IconName } from '../ui/Icon';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mapping from navigation-pages.json "icon" (HiOutline...) to our IconName
const ICON_MAP: Record<string, IconName> = {
    "HiOutlineViewGrid": "dashboard",
    "HiOutlineFolder": "projects",
    "HiOutlineCog": "settings",
    "HiOutlineDocumentText": "file",
    "HiOutlineDownload": "download",
    "HiOutlinePlay": "cplay",
    "HiOutlineCode": "code",
};

export function Sidebar({ type = 'app' }: { type?: 'app' | 'docs' }) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const appItems = [
        { label: 'Dashboard', href: '/dashboard', icon: 'HiOutlineViewGrid' },
        { label: 'Projects', href: '/projects', icon: 'HiOutlineFolder' },
        { label: 'Settings', href: '/settings', icon: 'HiOutlineCog' },
    ];

    const docsItems = [
        {
            label: "System Fundamentals",
            children: [
                { label: "Technical Overview", href: "/docs/introduction", icon: "HiOutlineDocumentText" },
                { label: "Deployment Protocols", href: "/docs/installation", icon: "HiOutlineDownload" }
            ]
        },
        {
            label: "Operation & Logic",
            children: [
                { label: "Operations Manual", href: "/docs/usage", icon: "HiOutlinePlay" },
                { label: "Core Architecture", href: "/docs/api", icon: "HiOutlineCode" }
            ]
        }
    ];

    const renderItem = (item: { label: string, href: string, icon: string }) => {
        const isActive = pathname === item.href;
        const iconName = ICON_MAP[item.icon] || 'info';

        return (
            <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={twMerge(clsx(
                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 group",
                    isActive
                        ? "bg-brand-primary/10 text-brand-primary"
                        : "text-foreground-secondary hover:bg-background-muted hover:text-foreground-primary"
                ))}
            >
                <Icon name={iconName} size={20} className={isActive ? "text-brand-primary" : "text-foreground-muted group-hover:text-foreground-primary"} />
                {item.label}
            </Link>
        );
    };

    // Mobile dropdown for docs
    const MobileDocsNav = () => {
        const allDocsLinks = docsItems.flatMap(group => group.children);
        const currentPage = allDocsLinks.find(item => item.href === pathname);

        return (
            <div className="lg:hidden absolute top-[74px] left-4 right-4 z-40">
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md rounded-lg border border-border-default shadow-sm"
                >
                    <div className="flex items-center gap-2">
                        <Icon name="docs" size={20} />
                        <span className="font-medium">{currentPage?.label || 'Select Page'}</span>
                    </div>
                    <Icon name={mobileMenuOpen ? "close" : "menu"} size={20} />
                </button>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 bg-white/95 backdrop-blur-md border border-border-default rounded-lg shadow-lg overflow-hidden"
                        >
                            <nav className="p-2 flex flex-col gap-1">
                                {docsItems.map((group, idx) => (
                                    <div key={idx} className="py-2">
                                        <h3 className="px-3 text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-1">
                                            {group.label}
                                        </h3>
                                        {group.children.map(renderItem)}
                                    </div>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <>
            {type === 'docs' && <MobileDocsNav />}

            <aside className={clsx(
                "hidden lg:flex flex-col p-6 overflow-y-auto bg-white/80 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300",
                type === 'docs'
                    ? "absolute top-24 left-0 w-72 rounded-3xl h-fit max-h-[calc(100vh-10rem)] shrink-0" // Absolute within container, 100px lower
                    : "w-64 h-[calc(100vh-64px)] border-r border-border-default sticky top-16" // Default App style
            )}>
                <div className="mb-8 px-2">
                    <span className="font-bold text-xl text-brand-primary flex items-center gap-2 font-mono tracking-tight">
                        <Icon name={type === 'app' ? 'dashboard' : 'docs'} size={24} />
                        {type === 'app' ? 'App' : 'DOCS_v2'}
                    </span>
                    {type === 'docs' && (
                        <div className="mt-2 h-1 w-full bg-gradient-to-r from-brand-primary/50 to-transparent rounded-full" />
                    )}
                </div>

                <nav className="flex flex-col gap-6">
                    {type === 'app' && (
                        <div className="flex flex-col gap-1">
                            {appItems.map(renderItem)}
                        </div>
                    )}

                    {type === 'docs' && docsItems.map((group, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                            <h3 className="px-3 text-[10px] font-black font-mono text-foreground-muted uppercase tracking-[0.2em]">
                                {group.label}
                            </h3>
                            <div className="flex flex-col gap-1">
                                {group.children.map(renderItem)}
                            </div>
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
}
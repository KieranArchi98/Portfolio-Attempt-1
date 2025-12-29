"use client";

import { motion } from 'framer-motion';
import NextImage from 'next/image';
import logoAsset from '@/app/assets/logo.png';

interface BrandingLogoProps {
    className?: string;
    size?: number;
    withHover?: boolean;
    animated?: boolean;
}

export function BrandingLogo({
    className = "",
    size = 32,
    withHover = false,
    animated = false
}: BrandingLogoProps) {
    const animationProps = animated ? {
        animate: {
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0, -2, 0],
        },
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
        }
    } : {};

    const hoverProps = withHover ? {
        whileHover: {
            scale: 1.05,
            y: -2
        },
        transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 10
        }
    } : {};

    return (
        <motion.div
            className={`relative flex items-center justify-center cursor-pointer ${className}`}
            {...animationProps}
            {...hoverProps}
            style={{ width: size, height: size }}
        >
            <NextImage
                src={logoAsset}
                alt="Logo"
                width={size}
                height={size}
                priority
                className="object-contain transition-all duration-300"
            />
        </motion.div>
    );
}

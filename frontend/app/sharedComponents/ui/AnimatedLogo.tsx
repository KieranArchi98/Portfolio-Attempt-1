"use client";

import { motion } from 'framer-motion';
import NextImage from 'next/image';

interface AnimatedLogoProps {
    className?: string;
    size?: number;
}

export function AnimatedLogo({ className = "", size = 32 }: AnimatedLogoProps) {
    return (
        <motion.div
            className={`relative flex items-center justify-center ${className}`}
            animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{ width: size, height: size }}
        >
            <NextImage
                src="/logo.png"
                alt="Logo"
                width={size}
                height={size}
                priority
                className="object-contain"
            />
        </motion.div>
    );
}

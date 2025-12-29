
"use client";
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';

interface ImageProps extends NextImageProps {
    variant?: 'default' | 'rounded' | 'circle';
    withOverlay?: boolean;
}

/**
 * atomic image component
 * Wrapper around Next.js Image with styling and loading state.
 */
export function Image({
    variant = 'default',
    withOverlay,
    className = '',
    alt,
    ...props
}: ImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    const radii = {
        default: 'rounded-none',
        rounded: 'rounded-xl',
        circle: 'rounded-full aspect-square object-cover'
    };

    return (
        <div className={`relative overflow-hidden ${radii[variant]} ${className} bg-background-secondary`}>
            <NextImage
                alt={alt}
                className={`
          duration-700 ease-in-out
          ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105 blur-lg'} 
          ${radii[variant]}
        `}
                onLoad={() => setIsLoaded(true)}
                {...props}
            />
            {withOverlay && (
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
            )}
        </div>
    );
}
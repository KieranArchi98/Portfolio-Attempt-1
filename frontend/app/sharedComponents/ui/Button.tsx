
"use client";
import { forwardRef } from 'react';
import { Icon, IconName } from './Icon';
import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    leftIcon?: IconName;
    rightIcon?: IconName;
    isLoading?: boolean;
}

/**
 * atomic button component
 * Implements design system variants, sizes, and micro-interactions.
 * Uses tailwind-merge for class safety.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    isLoading,
    className = '',
    disabled,
    ...props
}, ref) => {

    const baseStyles = cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        "active:scale-[0.98] motion-reduce:active:scale-100", // Micro-interaction: Press scale
        "hover:-translate-y-0.5 motion-reduce:hover:translate-y-0" // Micro-interaction: Subtle lift (optional, maybe too much for buttons? sticking to scale for consistency)
        // Actually, buttons usually don't lift, cards do. I'll remove lift for buttons, keep scale.
    );

    // Refined base styles
    const finalBaseStyles = cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1",
        "disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        "hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0 transition-all"
    );

    const variants = {
        primary: "bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm hover:shadow-md active:shadow-sm",
        secondary: "bg-background-secondary text-foreground-primary hover:bg-background-muted border border-border-default shadow-sm hover:shadow active:shadow-sm",
        ghost: "hover:bg-background-muted hover:text-foreground-primary text-foreground-secondary",
        destructive: "bg-semantic-error text-white hover:opacity-90 shadow-sm hover:shadow-md active:shadow-sm",
        outline: "border border-border-default bg-transparent hover:bg-background-secondary text-foreground-primary hover:shadow-sm active:shadow-none"
    };

    const sizes = {
        sm: "h-8 px-3 text-xs gap-1.5",
        md: "h-10 px-4 py-2 text-sm gap-2",
        lg: "h-12 px-6 text-base gap-2.5"
    };

    const iconSize = size === 'sm' ? 14 : size === 'md' ? 18 : 20;

    return (
        <button
            ref={ref}
            className={cn(finalBaseStyles, variants[variant], sizes[size], className)}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading && (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current motion-reduce:animate-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
            {!isLoading && leftIcon && <Icon name={leftIcon} size={iconSize} />}
            {children}
            {!isLoading && rightIcon && <Icon name={rightIcon} size={iconSize} />}
        </button>
    );
});

Button.displayName = 'Button';
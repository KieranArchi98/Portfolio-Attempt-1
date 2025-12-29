
import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'default' | 'bordered' | 'flat';
    interactive?: boolean;
}

/**
 * atomic card component
 * Surface for grouping content. Supports hover lift if interactive.
 */
export function Card({
    children,
    padding = 'lg',
    variant = 'bordered',
    interactive = false, // Explicit opt-in for interaction
    className = '',
    ...props
}: CardProps) {

    const paddings = {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6',
        xl: 'p-8'
    };

    const variants = {
        default: 'bg-background-primary shadow-lg border-transparent',
        bordered: 'bg-background-primary border border-border-default shadow-sm hover:border-border-muted',
        flat: 'bg-background-secondary border-transparent'
    };

    return (
        <div
            className={cn(
                "rounded-xl transition-all duration-300",
                variants[variant],
                paddings[padding],
                interactive && "hover:-translate-y-1 hover:shadow-lg cursor-pointer motion-reduce:hover:translate-y-0",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
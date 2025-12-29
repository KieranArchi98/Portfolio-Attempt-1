
"use client";
import { forwardRef, useId } from 'react';
import { Icon, IconName } from './Icon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    leftIcon?: IconName;
    rightIcon?: IconName;
    helperText?: string;
}

/**
 * atomic input field
 * Includes label, error message, helper text, and icon support.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    error,
    leftIcon,
    rightIcon,
    helperText,
    className = '',
    id,
    ...props
}, ref) => {
    const generatedId = useId();
    const inputId = id || props.name || generatedId;

    return (
        <div className={`flex flex-col gap-1.5 w-full ${className}`}>
            {label && (
                <label htmlFor={inputId} className="text-sm font-medium text-foreground-primary">
                    {label}
                </label>
            )}
            <div className="relative flex items-center">
                {leftIcon && (
                    <div className="absolute left-3 text-foreground-muted">
                        <Icon name={leftIcon} size={18} />
                    </div>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={`
            flex h-10 w-full rounded-md border bg-background-primary px-3 py-2 text-sm text-foreground-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all
            ${leftIcon ? 'pl-10' : ''} 
            ${rightIcon ? 'pr-10' : ''}
            ${error
                            ? 'border-semantic-error focus-visible:ring-semantic-error'
                            : 'border-border-default focus-visible:ring-brand-primary'
                        }
          `}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                    {...props}
                />
                {rightIcon && (
                    <div className="absolute right-3 text-foreground-muted">
                        <Icon name={rightIcon} size={18} />
                    </div>
                )}
            </div>
            {error && (
                <span id={`${inputId}-error`} className="text-xs text-semantic-error pt-1 animate-in slide-in-from-top-1 fade-in">
                    {error}
                </span>
            )}
            {!error && helperText && (
                <span id={`${inputId}-helper`} className="text-xs text-foreground-muted">
                    {helperText}
                </span>
            )}
        </div>
    );
});

Input.displayName = 'Input';
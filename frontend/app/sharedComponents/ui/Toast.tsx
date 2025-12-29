
"use client";
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'framer-motion';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextValue {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const showToast = useCallback((message: string, type: ToastType = 'info') => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        // Auto dismiss
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 4000);
    }, []);

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {mounted && createPortal(
                <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
                    <AnimatePresence>
                        {toasts.map((toast) => (
                            <motion.div
                                key={toast.id}
                                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                className="pointer-events-auto"
                            >
                                <ToastItem toast={toast} onClose={() => removeToast(toast.id)} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
}

function ToastItem({ toast, onClose }: { toast: Toast, onClose: () => void }) {
    const variants = {
        success: 'bg-semantic-success text-white',
        error: 'bg-semantic-error text-white',
        info: 'bg-foreground-primary text-white' // Inverse for info
    };

    const icons = {
        success: 'check',
        error: 'alert',
        info: 'info'
    };

    return (
        <div className={`${variants[toast.type]} px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]`}>
            <Icon name={icons[toast.type] as any} size={20} />
            <span className="flex-1 text-sm font-medium">{toast.message}</span>
            <button onClick={onClose} className="opacity-70 hover:opacity-100 transition-opacity">
                <Icon name="close" size={16} />
            </button>
        </div>
    );
}

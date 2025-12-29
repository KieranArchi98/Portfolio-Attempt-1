
import { Icon, IconName } from './Icon';

interface ListProps {
    items: Array<{
        id: string | number;
        title: string;
        description?: string;
        icon?: IconName;
    }>;
    variant?: 'ordered' | 'unordered' | 'icon';
    className?: string;
}

/**
 * atomic list component
 * Displays a list of items with optional icons and descriptions.
 */
export function List({ items, variant = 'unordered', className = '' }: ListProps) {
    const ListTag = variant === 'ordered' ? 'ol' : 'ul';

    return (
        <ListTag className={`flex flex-col gap-2 ${className}`}>
            {items.map((item, index) => (
                <li key={item.id} className="flex gap-3 items-start">
                    {variant === 'ordered' && (
                        <span className="flex items-center justify-center font-mono text-sm text-foreground-muted w-6 h-6 rounded-full bg-background-muted shrink-0 mt-0.5">
                            {index + 1}
                        </span>
                    )}
                    {variant === 'icon' && item.icon && (
                        <span className="shrink-0 mt-1 text-brand-primary">
                            <Icon name={item.icon} size={20} />
                        </span>
                    )}
                    {variant !== 'ordered' && variant !== 'icon' && (
                        <span className="w-1.5 h-1.5 bg-foreground-muted rounded-full mt-2.5 shrink-0" />
                    )}

                    <div className="flex flex-col">
                        <span className="text-foreground-primary font-medium text-sm leading-6">
                            {item.title}
                        </span>
                        {item.description && (
                            <span className="text-foreground-muted text-xs">
                                {item.description}
                            </span>
                        )}
                    </div>
                </li>
            ))}
        </ListTag>
    );
}
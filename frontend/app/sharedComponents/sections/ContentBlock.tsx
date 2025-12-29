
interface ContentBlockProps {
    content: React.ReactNode; // Or HTML string if needed
    align?: 'left' | 'center';
}

/**
 * generic content section
 * Wrapper for rich text content.
 */
export function ContentBlock({ content, align = 'left' }: ContentBlockProps) {
    return (
        <section className="py-16">
            <div className={`container mx-auto px-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
                <div className="prose prose-lg prose-slate max-w-none md:max-w-4xl">
                    {content}
                </div>
            </div>
        </section>
    );
}
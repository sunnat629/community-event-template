import {LucideIcon} from "lucide-react";
import {cn} from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    icon?: LucideIcon;
    badge?: {
        text: string;
        icon?: LucideIcon;
    };
    className?: string;
    children?: React.ReactNode;
}

/**
 * Page Header Component for Pro Mode
 * Provides consistent header styling across all dedicated pages
 */
export const PageHeader = ({
                               title,
                               subtitle,
                               description,
                               icon: Icon,
                               badge,
                               className,
                               children
                           }: PageHeaderProps) => {
    return (
        <div className={cn("text-center mb-12 sm:mb-16 animate-fade-in-up", className)}>
            {/* Badge */}
            {badge && (
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 hover:scale-105 transition-transform duration-300">
                    {badge.icon && <badge.icon className="w-4 h-4 text-primary animate-pulse"/>}
                    <span className="text-sm font-semibold text-primary">{badge.text}</span>
                </div>
            )}

            {/* Title */}
            <div className="flex items-center justify-center gap-4 mb-6">
                {Icon && (
                    <div
                        className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-hero items-center justify-center shadow-glow animate-float">
                        <Icon className="w-8 h-8 text-white"/>
                    </div>
                )}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-hero">
                    {title}
                </h1>
            </div>

            {/* Subtitle */}
            {subtitle && (
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
                    {subtitle}
                </p>
            )}

            {/* Description */}
            {description && (
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            )}

            {/* Custom children (filters, actions, etc.) */}
            {children && (
                <div className="mt-8">
                    {children}
                </div>
            )}
        </div>
    );
};

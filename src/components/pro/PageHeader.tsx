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
    backgroundImage?: string;        // Background image URL
    overlayOpacity?: number;         // Overlay opacity (0-100), default: 88
    blurAmount?: number;             // Backdrop blur amount (0-10), default: 1
    className?: string;
    children?: React.ReactNode;
}

/**
 * Page Header Component for Pro Mode
 * Provides consistent hero-style header with gradient background and optional image across all dedicated pages
 * Fixed height for consistency: py-20 sm:py-24 lg:py-32 (matches agenda page)
 */
export const PageHeader = ({
                               title,
                               subtitle,
                               description,
                               icon: Icon,
                               badge,
                               backgroundImage,
                               overlayOpacity = 88,
                               blurAmount = 1,
                               className,
                               children
                           }: PageHeaderProps) => {
    return (
        <div className={cn(
            "relative overflow-hidden",
            // FIXED HEIGHT - Consistent across all pages (same as agenda)
            "py-20 sm:py-24 lg:py-32",
            // Min height for very small screens
            "min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]",
            className
        )}>
            {/* Background Image (if provided) */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 hover:scale-105"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            )}

            {/* Hero-style gradient overlay - Using inline styles for dynamic opacity */}
            <div
                className={cn(
                    "absolute inset-0 z-0",
                    !backgroundImage && "bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90"
                )}
                style={backgroundImage ? {
                    background: `linear-gradient(to bottom right, 
                        rgba(2, 86, 155, ${overlayOpacity / 100}), 
                        rgba(2, 86, 155, ${Math.max(overlayOpacity - 15, 50) / 100}), 
                        rgba(19, 185, 253, ${Math.max(overlayOpacity - 10, 55) / 100}))`
                } : undefined}
            />

            {/* Backdrop blur for depth (only with image) - Now dynamic */}
            {backgroundImage && blurAmount > 0 && (
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backdropFilter: `blur(${blurAmount}px)`,
                        WebkitBackdropFilter: `blur(${blurAmount}px)`
                    }}
                />
            )}

            {/* Animated background elements (only without image) */}
            {!backgroundImage && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div
                        className="absolute top-10 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"/>
                    <div
                        className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-float"
                        style={{animationDelay: '1s'}}/>
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="text-center animate-fade-in-up text-white w-full">
                    {/* Badge */}
                    {badge && (
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 hover:scale-105 transition-transform duration-300">
                            {badge.icon && <badge.icon className="w-4 h-4 text-white animate-pulse"/>}
                            <span className="text-sm font-semibold text-white">{badge.text}</span>
                        </div>
                    )}

                    {/* Title with Icon */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        {Icon && (
                            <div
                                className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm items-center justify-center shadow-glow animate-float border border-white/20">
                                <Icon className="w-8 h-8 text-white"/>
                            </div>
                        )}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                            {title}
                        </h1>
                    </div>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
                            {subtitle}
                        </p>
                    )}

                    {/* Description */}
                    {description && (
                        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
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
            </div>
        </div>
    );
};

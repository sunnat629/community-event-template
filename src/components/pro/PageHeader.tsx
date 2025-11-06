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
 * Provides consistent hero-style header with gradient background across all dedicated pages
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
        <div className={cn("relative py-20 sm:py-24 lg:py-32 overflow-hidden", className)}>
            {/* Hero-style gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90 z-0"/>

            {/* Animated background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"/>
                <div
                    className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-float"
                    style={{animationDelay: '1s'}}/>
            </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up text-white">
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

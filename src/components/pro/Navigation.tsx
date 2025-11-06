import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Menu, X, Home, Users, Calendar, Award, MapPin, UsersRound} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

/**
 * Navigation Component - Pro Mode Only
 * Sticky header with logo, links, and mobile menu
 */
export const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Navigation items
    const navItems = [
        {label: "Home", href: "/", icon: Home},
        {label: "Speakers", href: "/speakers", icon: Users},
        {label: "Schedule", href: "/agenda", icon: Calendar},
        {label: "Sponsors", href: "/sponsors", icon: Award, disabled: true}, // TODO: Enable when page is ready
        {label: "Venue", href: "/venue", icon: MapPin, disabled: true}, // TODO: Enable when page is ready
        {label: "Team", href: "/team", icon: UsersRound, disabled: true}, // TODO: Enable when page is ready
    ];

    // Check if route is active
    const isActive = (href: string) => {
        if (href === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(href);
    };

    // Close mobile menu when clicking a link
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Brand */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 group"
                        onClick={handleLinkClick}
                    >
                        <div
                            className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                            <span className="text-white font-bold text-xl">F</span>
                        </div>
                        <div className="hidden sm:block">
                            <div className="font-bold text-lg bg-clip-text text-transparent bg-gradient-hero">
                                Flutter Guild
                            </div>
                            <div className="text-xs text-muted-foreground -mt-1">
                                Connect 2025
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.href);

                            if (item.disabled) {
                                return (
                                    <div
                                        key={item.href}
                                        className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground/50 cursor-not-allowed flex items-center gap-2"
                                        title="Coming soon"
                                    >
                                        <Icon className="w-4 h-4"/>
                                        {item.label}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
                                        active
                                            ? "bg-gradient-hero text-white shadow-md"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    )}
                                >
                                    <Icon className="w-4 h-4"/>
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <Button
                            size="sm"
                            className="bg-gradient-hero text-white hover:shadow-glow"
                        >
                            Register Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6"/>
                        ) : (
                            <Menu className="w-6 h-6"/>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="px-4 py-4 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.href);

                            if (item.disabled) {
                                return (
                                    <div
                                        key={item.href}
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground/50 cursor-not-allowed"
                                    >
                                        <Icon className="w-5 h-5"/>
                                        <span className="font-medium">{item.label}</span>
                                        <span className="ml-auto text-xs bg-muted px-2 py-1 rounded">Soon</span>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    onClick={handleLinkClick}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200",
                                        active
                                            ? "bg-gradient-hero text-white shadow-md"
                                            : "text-foreground hover:bg-muted"
                                    )}
                                >
                                    <Icon className="w-5 h-5"/>
                                    {item.label}
                                </Link>
                            );
                        })}

                        {/* Mobile CTA */}
                        <div className="pt-4 border-t border-border mt-4">
                            <Button
                                className="w-full bg-gradient-hero text-white hover:shadow-glow"
                                size="lg"
                            >
                                Register Now
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

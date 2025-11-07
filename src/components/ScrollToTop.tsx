import {useEffect} from "react";
import {useLocation} from "react-router-dom";

/**
 * ScrollToTop Component
 * Automatically scrolls to top when navigating between routes
 * This is a standard UX pattern for SPAs
 */
export function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        // Scroll to top when pathname changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" // Use "smooth" for smooth scrolling, "instant" for immediate
        });
    }, [pathname]);

    return null; // This component doesn't render anything
}

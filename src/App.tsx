import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Index from "./pages/Index";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SpeakersPage from "./pages/speakers/index";
import SpeakerDetailPage from "./pages/speakers/[id]";
import AgendaPage from "./pages/agenda/index";
import SessionDetailPage from "./pages/agenda/[sessionId]";
import {ModeToggle} from "@/components/pro/ModeToggle";
import {Navigation} from "@/components/pro/Navigation";
import {ScrollToTop} from "@/components/ScrollToTop";
import SponsorsPage from "./pages/sponsors/index";
import SponsorDetailPage from "./pages/sponsors/[id]";
import VenuePage from "./pages/venue/index";
import TeamPage from "./pages/team/index";
import {getSiteTitle, siteConfig} from "@/content";

const queryClient = new QueryClient();

/**
 * Demo Pro Mode Component
 * Enables Pro mode and redirects to home
 * Accessible at: /demo/pro (for production testing)
 */
const DemoProMode = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Enable Pro mode
        localStorage.setItem('eventMode', 'pro');
        // Redirect to home
        navigate('/');
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Enabling Pro Mode...</h1>
                <p className="text-muted-foreground">Redirecting to home page</p>
            </div>
        </div>
    );
};

/**
 * Demo Lite Mode Component
 * Enables Lite mode and redirects to home
 * Accessible at: /demo/lite (for production testing)
 */
const DemoLiteMode = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Enable Lite mode
        localStorage.setItem('eventMode', 'lite');
        // Redirect to home
        navigate('/');
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Enabling Lite Mode...</h1>
                <p className="text-muted-foreground">Redirecting to home page</p>
            </div>
        </div>
    );
};

const App = () => {
    // Check mode from localStorage (defaults to 'lite')
    const eventMode = (localStorage.getItem('eventMode') as 'lite' | 'pro') || 'lite';
    const isProMode = eventMode === 'pro';

    // Apply Android theme class to document root
    useEffect(() => {
        const androidTheme = localStorage.getItem('androidTheme') === 'true';
        if (androidTheme) {
            document.documentElement.classList.add('android-theme');
        } else {
            document.documentElement.classList.remove('android-theme');
        }
    }, []);

    // Dynamically set the document title and meta tags from siteConfig
    useEffect(() => {
        document.title = getSiteTitle();

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', siteConfig.siteDescription);
        }

        // Update OG title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', getSiteTitle());
        }

        // Update OG description
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', siteConfig.siteDescription);
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster/>
                <Sonner/>

                {/* Mode Toggle - DEV ONLY (hidden in production) */}
                {process.env.NODE_ENV !== 'production' && <ModeToggle/>}

                <BrowserRouter>
                    {/* Scroll to top on route change */}
                    <ScrollToTop/>

                    {/* Navigation - Only show in Pro Mode */}
                    {isProMode && <Navigation/>}

                    <Routes>
                        {/* Root route - show different page based on mode */}
                        <Route path="/" element={isProMode ? <Home/> : <Index/>}/>

                        {/* Pro Mode Routes - Only accessible when needed */}
                        <Route path="/speakers" element={<SpeakersPage/>}/>
                        <Route path="/speakers/:id" element={<SpeakerDetailPage/>}/>
                        <Route path="/agenda" element={<AgendaPage/>}/>
                        <Route path="/agenda/:sessionId" element={<SessionDetailPage/>}/>
                        <Route path="/sponsors" element={<SponsorsPage/>}/>
                        <Route path="/sponsors/:id" element={<SponsorDetailPage/>}/>
                        <Route path="/venue" element={<VenuePage/>}/>
                        <Route path="/team" element={<TeamPage/>}/>

                        {/* Demo Routes - For production testing */}
                        <Route path="/demo/pro" element={<DemoProMode/>}/>
                        <Route path="/demo/lite" element={<DemoLiteMode/>}/>

                        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;

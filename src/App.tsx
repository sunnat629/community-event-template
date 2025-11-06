import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Routes, Route} from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => {
    // Check mode from localStorage (defaults to 'lite')
    const eventMode = (localStorage.getItem('eventMode') as 'lite' | 'pro') || 'lite';
    const isProMode = eventMode === 'pro';

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster/>
                <Sonner/>

                {/* Mode Toggle - DEV ONLY */}
                <ModeToggle/>

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

                        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;

import {useState, useEffect} from "react";
import {Settings, Zap, Rocket, Calendar, List} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Badge} from "@/components/ui/badge";

/**
 * Mode Toggle Component - DEV ONLY
 * Allows switching between lite and pro modes for testing
 * Also controls event configuration (days, tracks)
 */
export const ModeToggle = () => {
    const [currentMode, setCurrentMode] = useState<'lite' | 'pro'>(() => {
        return (localStorage.getItem('eventMode') as 'lite' | 'pro') || 'lite';
    });

    const [eventDays, setEventDays] = useState<1 | 2 | 3>(() => {
        return (parseInt(localStorage.getItem('eventDays') || '1') as 1 | 2 | 3);
    });

    const [eventTracks, setEventTracks] = useState<1 | 2 | 3>(() => {
        return (parseInt(localStorage.getItem('eventTracks') || '1') as 1 | 2 | 3);
    });

    useEffect(() => {
        localStorage.setItem('eventMode', currentMode);
        localStorage.setItem('eventDays', eventDays.toString());
        localStorage.setItem('eventTracks', eventTracks.toString());
    }, [currentMode, eventDays, eventTracks]);

    const handleModeChange = (mode: 'lite' | 'pro') => {
        setCurrentMode(mode);
        localStorage.setItem('eventMode', mode);
        window.location.href = '/';
    };

    const handleDaysChange = (days: 1 | 2 | 3) => {
        setEventDays(days);
        localStorage.setItem('eventDays', days.toString());
        // Reload agenda page if on it
        if (window.location.pathname.includes('/agenda')) {
            window.location.reload();
        }
    };

    const handleTracksChange = (tracks: 1 | 2 | 3) => {
        setEventTracks(tracks);
        localStorage.setItem('eventTracks', tracks.toString());
        // Reload agenda page if on it
        if (window.location.pathname.includes('/agenda')) {
            window.location.reload();
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="lg"
                        className="shadow-2xl border-2 bg-background/95 backdrop-blur-sm hover:scale-105 transition-transform"
                    >
                        <Settings className="w-5 h-5 mr-2 animate-spin-slow"/>
                        <span className="font-semibold">
              {currentMode === 'lite' ? 'Lite Mode' : 'Pro Mode'}
            </span>
              <Badge
                  variant={currentMode === 'lite' ? 'secondary' : 'default'}
                  className="ml-2"
              >
                  DEV
              </Badge>
          </Button>
        </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Event Architecture Mode</DropdownMenuLabel>
              <DropdownMenuSeparator/>

              {/* Lite Mode Option */}
              <DropdownMenuItem
                  onClick={() => handleModeChange('lite')}
                  className="flex flex-col items-start gap-2 p-4 cursor-pointer"
              >
                  <div className="flex items-center gap-2 w-full">
                      <Zap className="w-5 h-5 text-secondary"/>
                      <span className="font-bold text-lg">Lite Mode</span>
                      {currentMode === 'lite' && (
                          <Badge variant="secondary" className="ml-auto">Active</Badge>
                      )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                      Single-page architecture for small events (3-6 hours, 5-10 speakers)
                  </p>
                  <div className="flex gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">Single Page</Badge>
                      <Badge variant="outline" className="text-xs">Fast Setup</Badge>
                      <Badge variant="outline" className="text-xs">Mobile First</Badge>
                  </div>
              </DropdownMenuItem>

            <DropdownMenuSeparator/>

            {/* Pro Mode Option */}
            <DropdownMenuItem
                onClick={() => handleModeChange('pro')}
                className="flex flex-col items-start gap-2 p-4 cursor-pointer"
            >
                <div className="flex items-center gap-2 w-full">
                    <Rocket className="w-5 h-5 text-primary"/>
                    <span className="font-bold text-lg">Pro Mode</span>
                    {currentMode === 'pro' && (
                        <Badge variant="default" className="ml-auto">Active</Badge>
                    )}
                </div>
                <p className="text-sm text-muted-foreground">
                    Multi-route architecture for large conferences (multi-day, 20+ speakers)
                </p>
                <div className="flex gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Multi Route</Badge>
                    <Badge variant="outline" className="text-xs">Scalable</Badge>
                    <Badge variant="outline" className="text-xs">SEO Ready</Badge>
                </div>
            </DropdownMenuItem>

            {/* Pro Mode Configuration */}
            {currentMode === 'pro' && (
                <>
                    <DropdownMenuSeparator/>
                    <DropdownMenuLabel className="text-xs text-muted-foreground">
                        Pro Mode Configuration
                    </DropdownMenuLabel>

                    {/* Event Days */}
                    <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-primary"/>
                            <span className="text-sm font-semibold">Event Days</span>
                        </div>
                        <div className="flex gap-2">
                            {[1, 2, 3].map((days) => (
                                <Button
                                    key={days}
                                    size="sm"
                                    variant={eventDays === days ? 'default' : 'outline'}
                                    onClick={() => handleDaysChange(days as 1 | 2 | 3)}
                                    className="flex-1"
                    >
                        {days} Day{days > 1 ? 's' : ''}
                    </Button>
                  ))}
                </div>
              </div>

                {/* Parallel Tracks */}
                <div className="p-4 space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                        <List className="w-4 h-4 text-primary"/>
                        <span className="text-sm font-semibold">Parallel Tracks</span>
                    </div>
                    <div className="flex gap-2">
                        {[1, 2, 3].map((tracks) => (
                            <Button
                                key={tracks}
                                size="sm"
                                variant={eventTracks === tracks ? 'default' : 'outline'}
                                onClick={() => handleTracksChange(tracks as 1 | 2 | 3)}
                                className="flex-1"
                            >
                                {tracks} Track{tracks > 1 ? 's' : ''}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="px-4 pb-2 text-xs text-muted-foreground">
                    💡 Changes apply to Agenda page
                </div>
            </>
          )}

            <DropdownMenuSeparator/>

            <div className="p-2 text-xs text-muted-foreground text-center">
                🧪 This toggle is for development & testing only
            </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

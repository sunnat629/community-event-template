import {Heart, ExternalLink, Github, Twitter, Linkedin} from "lucide-react";
import {siteConfig, getThemeConfig} from "@/content";

export const Footer = () => {
    const themeConfig = getThemeConfig();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-b from-card/50 to-muted/30 border-t border-border/50">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-gradient-subtle opacity-50 pointer-events-none"/>

            <div className="relative section-container py-16">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold mb-3 text-foreground">
                                <span className="bg-clip-text text-transparent bg-gradient-hero">
                                    {themeConfig.eventTitle}
                                </span>
                            </h3>
                            <p className="text-xl font-medium text-primary mb-2">
                                {themeConfig.eventTagline}
              </p>
                <p className="text-base text-muted-foreground">
                    {siteConfig.eventYear}
                </p>
            </div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                  Join Bangladesh's premier tech community event. Connect with passionate developers,
                  learn from industry experts, and build the future together.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                  <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110 hover:text-primary-foreground group"
                      aria-label="Twitter"
                  >
                      <Twitter className="w-5 h-5"/>
                  </a>
                  <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110 hover:text-primary-foreground group"
                      aria-label="LinkedIn"
                  >
                      <Linkedin className="w-5 h-5"/>
                  </a>
                  <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110 hover:text-primary-foreground group"
                      aria-label="GitHub"
                  >
                      <Github className="w-5 h-5"/>
                  </a>
              </div>
          </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
                <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
                <ul className="space-y-3">
              <li>
                <a
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">About Event</span>
                </a>
              </li>
              <li>
                <a
                    href="#speakers-partners"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Speakers</span>
                </a>
              </li>
              <li>
                <a
                    href="#event-details"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Schedule</span>
                </a>
              </li>
              <li>
                <a
                    href="#organizers"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Organizers</span>
                </a>
              </li>
            </ul>
          </div>

            {/* Resources Column */}
            <div className="space-y-4">
                <h4 className="text-lg font-bold text-foreground mb-6">Resources</h4>
                <ul className="space-y-3">
              <li>
                <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Notion Page</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100"/>
                </a>
              </li>
              <li>
                <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Sponsor Deck</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100"/>
                </a>
              </li>
              <li>
                <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Code of Conduct</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100"/>
                </a>
              </li>
                <li>
                    <a
                        href="https://github.com/sunnat629/community-event-template"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">Open Source</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100"/>
                    </a>
                </li>
            </ul>
          </div>
        </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                  {/* Left: Copyright & Organizer */}
                  <div className="text-center md:text-left">
                      <p className="text-sm text-muted-foreground mb-1">
                {new Date().getFullYear()} {themeConfig.eventTitle}. All rights reserved.
              </p>
                <p className="text-sm text-muted-foreground">
                    Organized by <span
                    className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">{siteConfig.organizerName}</span>
                </p>
            </div>

              {/* Right: Made with love */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse"/> for the tech community
              </span>
                  <span className="hidden md:inline-block w-px h-4 bg-border"/>
                  <a
                      href="https://github.com/sunnat629/community-event-template"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                      <Github className="w-4 h-4"/>
                      <span>Open Source Template</span>
                  </a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

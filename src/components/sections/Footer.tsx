import { Heart, ExternalLink } from "lucide-react";
import {siteConfig, getThemeConfig} from "@/content";

export const Footer = () => {
    const themeConfig = getThemeConfig();

    return (
      <footer className="bg-card border-t border-border">
          <div className="section-container section-padding">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                  {/* Brand Section */}
                  <div className="space-y-4">
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-hero">
                          {themeConfig.eventTitle}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                          {themeConfig.eventTagline}
            </p>
              <p className="text-sm text-muted-foreground">
                  {siteConfig.eventYear}
              </p>
          </div>

          {/* Quick Links */}
            <div className="space-y-4">
                <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
                <ul className="space-y-3">
              <li>
                <a 
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#event-details"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
                >
                  Event Details
                </a>
              </li>
              <li>
                <a 
                  href="#speakers-partners"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
                >
                  Speakers & Partners
                </a>
              </li>
              <li>
                <a 
                  href="#organizers"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
                >
                  Organizers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
            <div className="space-y-4">
                <h4 className="text-lg font-bold text-foreground">Resources</h4>
                <ul className="space-y-3">
              <li>
                <a 
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Notion Page
                    <ExternalLink className="w-3.5 h-3.5"/>
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Sponsor Deck
                    <ExternalLink className="w-3.5 h-3.5"/>
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Code of Conduct
                    <ExternalLink className="w-3.5 h-3.5"/>
                </a>
              </li>
            </ul>
          </div>
        </div>

          {/* Divider */}
          <div className="border-t border-border mb-8"/>

          {/* Bottom Section - Better aligned and centered */}
          <div className="space-y-4 text-center">
              <p className="text-muted-foreground text-base">
                  Organized by <span className="font-semibold text-foreground">{siteConfig.organizerName}</span>
          </p>

            <p className="text-muted-foreground flex items-center justify-center gap-2 text-base">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse"/> for the tech community
          </p>

            <p className="text-sm text-muted-foreground font-medium">
                Let's build something amazing together.
          </p>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground pt-4">
                {new Date().getFullYear()} {themeConfig.eventTitle}. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

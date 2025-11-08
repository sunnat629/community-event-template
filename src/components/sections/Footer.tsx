import { Heart, ExternalLink } from "lucide-react";
import {siteConfig} from "@/content";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">{siteConfig.eventTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {siteConfig.eventTagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#event-details" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Event Details
                </a>
              </li>
              <li>
                <a 
                  href="#speakers-partners" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Speakers & Partners
                </a>
              </li>
              <li>
                <a 
                  href="#organizers" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Organizers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Notion Page
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Sponsor Deck
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Code of Conduct
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Organized by <span className="font-semibold text-foreground">Sunnat629 Labs</span>
          </p>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for the Flutter community
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Let's build something beautiful together.
          </p>
        </div>
      </div>
    </footer>
  );
};

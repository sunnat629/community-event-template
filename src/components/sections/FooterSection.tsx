import {Heart, ExternalLink, Github} from "lucide-react";
import {attribution} from "@/content";
import {Link} from "react-router-dom";

export const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-gradient-to-br from-primary/95 via-primary to-secondary text-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"/>

            <div className="section-container relative z-10 py-12">
                {/* Main Footer - Single Row Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Left: Branding */}
                    <div>
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-secondary/90 bg-clip-text text-transparent">
                            Flutter Guild 2026
                        </h3>
                        <p className="text-white/70 text-sm">
                            Code. Connect. Create.
                        </p>
                    </div>

                    {/* Center: Quick Links */}
                    <div className="text-center">
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/speakers" className="text-white/70 hover:text-white transition-colors text-sm">
                                Speakers
                            </Link>
                            <Link to="/agenda" className="text-white/70 hover:text-white transition-colors text-sm">
                                Agenda
                            </Link>
                            <Link to="/sponsors" className="text-white/70 hover:text-white transition-colors text-sm">
                                Sponsors
                            </Link>
                            <Link to="/venue" className="text-white/70 hover:text-white transition-colors text-sm">
                                Venue
                            </Link>
                            <Link to="/team" className="text-white/70 hover:text-white transition-colors text-sm">
                                Team
                            </Link>
                        </div>
                    </div>

                    {/* Right: Resources */}
                    <div className="text-center lg:text-right">
                        <div className="flex flex-wrap justify-center lg:justify-end gap-4">
                            <a href="#"
                               className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1">
                                Notion <ExternalLink className="w-3 h-3"/>
                            </a>
                            <a href="#"
                               className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1">
                                Sponsor Deck <ExternalLink className="w-3 h-3"/>
                            </a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                                Code of Conduct
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-8"/>

                {/* Bottom: Attribution & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    {/* Left: Copyright & Organizer */}
                    <div className="text-center md:text-left">
                        <p className="text-white/60 text-xs mb-1">
                            © {currentYear} Flutter Guild Connect. All rights reserved.
                        </p>
                        <p className="text-white/50 text-xs">
                            Organized by{" "}
                            <a
                                href={attribution.creator.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                {attribution.creator.name}
                            </a>
                        </p>
                    </div>

                    {/* Right: Template Attribution */}
                    <div className="flex items-center gap-4 text-xs text-white/50">
                        <a
                            href={attribution.template.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-white/70 transition-colors"
                        >
                            <Github className="w-3.5 h-3.5"/>
                            Open Source Template
                        </a>
                        <span className="flex items-center gap-1">
                            <Heart className="w-3.5 h-3.5 text-red-400"/>
                            Made with love
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
import {Heart, ExternalLink, Github} from "lucide-react";
import {attribution} from "@/content";

export const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-gradient-to-br from-primary/95 via-primary to-secondary text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"/>

            <div className="section-container relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
                    <div className="lg:col-span-2">
                        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-secondary/90 bg-clip-text text-transparent">
                            Flutter Guild 2026
                        </h3>
                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                            Code. Connect. Create.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            Join us at Bangladesh's premier Flutter community event where passionate developers connect,
                            learn from industry experts, and build the future together.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
                            </li>
                            <li><a href="#speakers" className="text-white/70 hover:text-white transition-colors">Event
                                Details</a></li>
                            <li><a href="#speakers-partners"
                                   className="text-white/70 hover:text-white transition-colors">Speakers & Partners</a>
                            </li>
                            <li><a href="#organizers"
                                   className="text-white/70 hover:text-white transition-colors">Organizers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4 text-white">Resources</h4>
                        <ul className="space-y-3">
                            <li><a href="#"
                                   className="text-white/70 hover:text-white transition-colors flex items-center gap-2">Notion
                                Page <ExternalLink className="w-4 h-4"/></a></li>
                            <li><a href="#"
                                   className="text-white/70 hover:text-white transition-colors flex items-center gap-2">Sponsor
                                Deck <ExternalLink className="w-4 h-4"/></a></li>
                            <li><a href="#"
                                   className="text-white/70 hover:text-white transition-colors flex items-center gap-2">Code
                                of Conduct <ExternalLink className="w-4 h-4"/></a></li>
                        </ul>
                    </div>
                </div>

                {/* Attribution Section - Always visible for open-source users */}
                <div className="border-t-2 border-white/20 py-8">
                    <div className="text-center space-y-4">
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-white/90 text-lg font-medium">
                                Organized by{" "}
                                <a
                                    href={attribution.creator.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-white hover:text-secondary transition-colors hover:underline"
                                >
                                    {attribution.creator.name}
                                </a>
                            </p>
                            <p className="text-white/70 text-sm max-w-md">
                                {attribution.creator.tagline}
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-white/80">
                            <Heart className="w-5 h-5 text-red-400"/>
                            <span>{attribution.message}</span>
                        </div>

                        <div className="pt-4">
                            <p className="text-white/60 text-sm mb-2">
                                Let's build something beautiful together.
                            </p>
                            <a
                                href={attribution.template.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm hover:underline"
                            >
                                <Github className="w-4 h-4"/>
                                {attribution.template.name} - Open Source Template
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-6 pb-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60 text-sm">
                            © {currentYear} Flutter Guild Connect. All rights reserved.
                        </p>
                        <p className="text-white/50 text-xs">
                            Template by{" "}
                            <a
                                href={attribution.creator.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white/70 transition-colors"
                            >
                                {attribution.creator.name}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
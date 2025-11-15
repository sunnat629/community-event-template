import {Button} from "@/components/ui/button";
import {ArrowRight, Mail, Mic, Briefcase, Github} from "lucide-react";
import {SectionWrapper} from "@/components/ui/SectionWrapper";

export const CTASection = () => {
    const githubUrl = "https://github.com/sunnat629/community-event-template";

    return (
        <SectionWrapper id="cta" theme="accent">
            <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Get Involved</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Join us in building something beautiful together
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Contribute Card */}
                <div
                    className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 card-hover shadow-lg">
                    <div
                        className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 shadow-glow">
                        <Github className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Contribute to the Project</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        Help improve this template by contributing on GitHub. Star the repo, fork it, or submit a pull
                        request!
                    </p>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full bg-gradient-hero hover:shadow-glow-lg"
                        >
                            View on GitHub
                            <ArrowRight className="ml-2 w-5 h-5"/>
                        </Button>
                    </a>
                </div>

                {/* Speakers Card */}
                <div
                    className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 card-hover shadow-lg">
                    <div
                        className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 shadow-glow">
                        <Mic className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Submit a Feature</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        Have an idea for improving the template? Open an issue or discussion on GitHub.
                    </p>
                    <a href={`${githubUrl}/issues`} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full bg-gradient-hero hover:shadow-glow-lg"
                        >
                            Open an Issue
                            <ArrowRight className="ml-2 w-5 h-5"/>
                        </Button>
                    </a>
                </div>

                {/* Sponsors Card */}
                <div
                    className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 card-hover shadow-lg">
                    <div
                        className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 shadow-glow">
                        <Briefcase className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Create Your Own Theme</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        Help expand our theme collection by contributing a new theme for your favorite technology
                        platform.
                    </p>
                    <a href={`${githubUrl}/blob/main/docs/THEME_SYSTEM_ARCHITECTURE.md`} target="_blank"
                       rel="noopener noreferrer" className="w-full">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full bg-gradient-hero hover:shadow-glow-lg"
                        >
                            Theme Documentation
                            <ArrowRight className="ml-2 w-5 h-5"/>
                        </Button>
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};
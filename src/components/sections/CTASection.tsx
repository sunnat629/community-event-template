import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Mic, Briefcase } from "lucide-react";
import {SectionWrapper} from "@/components/ui/SectionWrapper";

export const CTASection = () => {
  return (
      <SectionWrapper id="cta" theme="accent">
          <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Get Involved</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Join us in building something beautiful together
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Register Card */}
              <div
                  className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 card-hover shadow-lg">
                  <div
                      className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 shadow-glow">
                      <Mail className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Attend as Participant</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                      Reserve your spot at Bangladesh's premier Flutter event.
                      Early bird registration opens soon!
          </p>
            <Button
                variant="default"
                size="lg"
                className="w-full bg-gradient-hero hover:shadow-glow-lg"
            >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5"/>
            </Button>
        </div>

          {/* Speakers Card */}
          <div
              className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 card-hover shadow-lg">
              <div
                  className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 shadow-glow">
                  <Mic className="w-8 h-8 text-white"/>
          </div>
            <h3 className="text-2xl font-bold mb-4">Speak at the Event</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
                Share your expertise and inspire the community. Submit your
                talk proposal today!
            </p>
            <Button
                variant="default"
                size="lg"
                className="w-full bg-gradient-hero hover:shadow-glow-lg"
            >
                Submit a Talk
                <ArrowRight className="ml-2 w-5 h-5"/>
            </Button>
        </div>

          {/* Sponsors Card */}
          <div
              className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 card-hover shadow-lg">
              <div
                  className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 shadow-glow">
                  <Briefcase className="w-8 h-8 text-white"/>
          </div>
            <h3 className="text-2xl font-bold mb-4">Partner with Us</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
                Support the Flutter community and showcase your brand to
                hundreds of developers.
            </p>
            <Button
                variant="default"
                size="lg"
                className="w-full bg-gradient-hero hover:shadow-glow-lg"
            >
                Become a Sponsor
                <ArrowRight className="ml-2 w-5 h-5"/>
            </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

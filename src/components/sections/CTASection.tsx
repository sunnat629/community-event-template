import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Mic, Briefcase } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero text-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join us in building something beautiful together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Register Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 card-hover">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Attend as Participant</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Reserve your spot at Bangladesh's premier Flutter event. 
              Early bird registration opens soon!
            </p>
            <Button 
              variant="hero-secondary" 
              size="lg" 
              className="w-full"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Speakers Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 card-hover">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Mic className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Speak at the Event</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Share your expertise and inspire the community. Submit your 
              talk proposal today!
            </p>
            <Button 
              variant="hero-secondary" 
              size="lg" 
              className="w-full"
            >
              Submit a Talk
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Sponsors Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 card-hover">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Partner with Us</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Support the Flutter community and showcase your brand to 
              hundreds of developers.
            </p>
            <Button 
              variant="hero-secondary" 
              size="lg" 
              className="w-full"
            >
              Become a Sponsor
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Mic, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SpeakersPartnersSection = () => {
  const partners = [
    "Brain Station 23",
    "DSI",
    "Cheq",
  ];

  return (
    <section id="speakers-partners" className="section-padding">
      <div className="section-container">
        {/* Speakers */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Featured Speakers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from the best minds in Flutter development
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border text-center">
            <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Mic className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Coming Soon</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're in conversation with amazing Flutter experts, Google Developer Experts, 
              and community leaders. Stay tuned for speaker announcements!
            </p>
            <Button variant="hero" size="lg">
              Submit Your Talk
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Partners & Sponsors */}
        <div>
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Partners & Sponsors</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Supporting the Flutter community in Bangladesh
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partners.map((partner, index) => (
              <div 
                key={partner}
                className="card-hover bg-card rounded-xl p-8 shadow-md border border-border flex items-center justify-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold">{partner}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-subtle rounded-2xl p-8 sm:p-12 text-center border border-border">
            <h3 className="text-2xl font-bold mb-4">Interested in Sponsoring?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us in building Bangladesh's Flutter community. Multiple sponsorship packages 
              available to fit your goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                View Sponsor Deck
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Mic, Sparkles, Building2, Star, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featuredSpeakers = [
  {
    name: "Dr. Sarah Chen",
    title: "Google Developer Expert - Flutter",
    topic: "The Future of Flutter: 2025 and Beyond",
    image: "👩‍💻",
    featured: true
  },
  {
    name: "Mohammed Rahman",
    title: "Senior Flutter Architect, Brain Station 23",
    topic: "Scalable Architecture Patterns",
    image: "👨‍💼",
    featured: true
  },
  {
    name: "Priya Sharma",
    title: "Lead Mobile Developer, DSI",
    topic: "Advanced State Management with Riverpod",
    image: "👩‍🔬",
    featured: true
  }
];

const otherSpeakers = [
  {
    name: "Ashik Ahmed",
    title: "Flutter Community Leader",
    topic: "Building Real-time Apps",
    image: "👨‍🎓"
  },
  {
    name: "Nusrat Jahan",
    title: "Mobile App Security Expert",
    topic: "Securing Flutter Applications",
    image: "👩‍💼"
  },
  {
    name: "Tanvir Hasan",
    title: "Firebase Integration Specialist",
    topic: "Cloud-first Flutter Apps",
    image: "👨‍🔧"
  },
  {
    name: "Fatema Khatun",
    title: "UX Designer & Flutter Dev",
    topic: "Design Systems in Flutter",
    image: "👩‍🎨"
  },
  {
    name: "Rakib Islam",
    title: "Performance Optimization Lead",
    topic: "Flutter Performance Deep Dive",
    image: "👨‍💻"
  },
  {
    name: "Sadia Rahman",
    title: "Testing & Quality Expert",
    topic: "Testing Strategies for Flutter",
    image: "👩‍🔬"
  }
];

const partners = [
  { name: "Brain Station 23", role: "Venue Partner", icon: Building2 },
  { name: "DSI", role: "Platinum Sponsor", icon: Award },
  { name: "Cheq", role: "Gold Sponsor", icon: Star },
  { name: "Flutter Bangladesh", role: "Community Partner", icon: Users }
];

export const SpeakersPartnersSection = () => {
  return (
    <section id="speakers-partners" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Featured Speakers */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Featured Speakers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry experts and thought leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredSpeakers.map((speaker, index) => (
              <div 
                key={speaker.name}
                className="card-hover card-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="glass-card h-full border-2 hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center text-6xl shadow-glow pulse-glow">
                      {speaker.image}
                    </div>
                    <CardTitle className="text-2xl mb-2">{speaker.name}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">
                      {speaker.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-gradient-subtle rounded-xl p-4 border border-border">
                      <p className="font-semibold text-sm text-muted-foreground mb-1">Speaking on:</p>
                      <p className="text-foreground font-medium">{speaker.topic}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Other Speakers */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">More Amazing Speakers</h3>
            <p className="text-lg text-muted-foreground">
              Technical sessions, workshops, and lightning talks
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {otherSpeakers.map((speaker, index) => (
              <div 
                key={speaker.name}
                className="card-hover"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card className="glass-card h-full hover:border-secondary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center text-3xl shadow-md">
                        {speaker.image}
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">{speaker.name}</CardTitle>
                        <CardDescription className="text-sm">{speaker.title}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Topic:</span> {speaker.topic}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="premium" size="lg" className="btn-glow">
              Submit Your Talk Proposal
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div 
                  key={partner.name}
                  className="card-hover card-glow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="glass-card h-full text-center hover:border-primary/30 transition-all duration-300">
                    <CardHeader>
                      <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{partner.name}</CardTitle>
                      <CardDescription className="text-sm font-semibold text-primary">
                        {partner.role}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center border-2 border-border/50 card-glow">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Become a Sponsor</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join us in building Bangladesh's Flutter community. Multiple sponsorship tiers 
                available with exclusive benefits and brand visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="premium" size="lg" className="btn-glow">
                  View Sponsor Package
                </Button>
                <Button variant="glass" size="lg">
                  Contact Sponsorship Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

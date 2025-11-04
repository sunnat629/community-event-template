import { Heart, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {organizers} from "@/content";

export const OrganizersSection = () => {
  return (
    <section id="organizers" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Organized By</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Brought to you by passionate Flutter community leaders
          </p>
        </div>

          {/* Co-Organizers - Dynamic from content file */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {organizers.map((organizer, index) => {
                  const Icon = organizer.icon;
                  return (
                      <div
                          key={organizer.name}
                          className="bg-card rounded-2xl p-8 shadow-xl border-2 border-primary/20 text-center card-hover"
                          style={{animationDelay: `${index * 100}ms`}}
                      >
                          <div
                              className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                              <Icon className="w-10 h-10 text-white"/>
                </div>
                  <h3 className="text-2xl font-bold mb-3">{organizer.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                    {organizer.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Volunteer CTA */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Want to help make Flutter Guild 2025 amazing? We're looking for passionate 
            volunteers to join our organizing team. It's a great way to give back to the 
            community and gain valuable experience.
          </p>
          <Button variant="hero" size="lg">
            Become a Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
};

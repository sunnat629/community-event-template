import { Heart, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {organizers} from "@/content";

export const OrganizersSection = () => {
  return (
      <section id="organizers" className="section-padding bg-gradient-subtle relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"/>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
               style={{animationDelay: "1s"}}/>

          <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
            <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 hover:scale-105 transition-transform duration-300">
                <Users className="w-4 h-4 text-primary animate-pulse"/>
                <span className="text-sm font-semibold text-primary">Community Leaders</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero pb-2 leading-tight">
                Organized By
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                          className="group animate-fade-in-up bg-card rounded-2xl p-8 shadow-xl border-2 border-primary/20 hover:border-primary/40 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
                          style={{animationDelay: `${index * 150}ms`}}
                      >
                          {/* Shine effect */}
                          <div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"/>

                          <div className="relative z-10">
                              <div
                                  className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                  <Icon className="w-10 h-10 text-white"/>
                              </div>
                              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{organizer.name}</h3>
                              <p className="text-muted-foreground leading-relaxed">
                                  {organizer.description}
                              </p>
                          </div>
                      </div>
                  );
              })}
          </div>

        {/* Volunteer CTA */}
          <div
              className="animate-fade-in-up bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-2 border-primary/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group"
              style={{animationDelay: "300ms"}}>
              {/* Animated gradient orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
                   style={{animationDuration: "3s"}}/>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse"
                   style={{animationDuration: "4s", animationDelay: "1s"}}/>

              <div className="relative z-10">
                  <div
                      className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Heart className="w-8 h-8 text-white animate-pulse"/>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                      Want to help make Flutter Guild 2025 amazing? We're looking for passionate
                      volunteers to join our organizing team. It's a great way to give back to the
                      community and gain valuable experience.
                  </p>
                  <Button
                      variant="default"
                      size="lg"
                      className="bg-gradient-hero text-white hover:shadow-glow-lg hover:scale-110 transition-all duration-300 border-0"
                  >
                      Become a Volunteer
                      <Heart className="ml-2 w-5 h-5"/>
                  </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

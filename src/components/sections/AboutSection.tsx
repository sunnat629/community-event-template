import { Users, Heart, Zap } from "lucide-react";
import {SectionWrapper} from "@/components/ui/SectionWrapper";
import {siteConfig} from "@/content";

export const AboutSection = () => {
  return (
      <SectionWrapper id="about" theme="blue-tint">
          <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  About <span className="gradient-text">{siteConfig.eventTitle}</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {siteConfig.eventTitle} is more than just a conference—it's a movement. We're building Bangladesh's
                  most vibrant Flutter community, where developers of all levels come together to learn,
                  share, and create amazing things.
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              <div className="card-hover bg-card p-8 rounded-xl shadow-md text-center">
                  <div
                      className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Connect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                      Network with fellow Flutter enthusiasts, make lasting connections, and find your tribe
                      in Bangladesh's growing tech community.
          </p>
        </div>

          <div className="card-hover bg-card p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white"/>
          </div>
            <h3 className="text-2xl font-bold mb-4">Learn</h3>
            <p className="text-muted-foreground leading-relaxed">
                Gain insights from industry leaders, explore cutting-edge techniques, and level up
                your Flutter skills through hands-on workshops.
            </p>
        </div>

          <div className="card-hover bg-card p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-2xl font-bold mb-4">Create</h3>
              <p className="text-muted-foreground leading-relaxed">
                  Transform ideas into reality, collaborate on exciting projects, and push the boundaries
                  of what's possible with Flutter.
          </p>
        </div>
      </div>

        <div className="mt-16 bg-primary/5 border border-primary/10 rounded-2xl p-8 sm:p-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                To empower Bangladesh's Flutter community by creating inclusive spaces for learning,
                collaboration, and innovation. We believe in the power of community-driven growth and
                are committed to making Flutter accessible to everyone—from curious beginners to
                seasoned professionals.
            </p>
        </div>
    </SectionWrapper>
  );
};

import { Button } from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import {heroContent, getThemeConfig} from "@/content";

export const HeroSection = () => {
    const themeConfig = getThemeConfig();

    return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Theme-Aware Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
          {/* Dynamic gradient overlay based on theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
      </div>

        {/* Animated Background Elements - Theme Colors */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-float"
               style={{animationDelay: '1s'}}/>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
               style={{animationDelay: '2s'}}/>
      </div>

        {/* Content - Better Aligned */}
        <div className="relative z-10 section-container py-20">
            <div className="max-w-5xl mx-auto text-center">
                <div className="animate-fade-in-up space-y-8">
                    {/* Main Title - Theme-aware */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white">
                        {themeConfig.eventTitle}
                    </h1>

                    {/* Subtitle - Theme-aware */}
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 max-w-3xl mx-auto">
                        {themeConfig.eventTagline}
                    </p>

                    {/* Description */}
                    <p className="text-lg sm:text-xl lg:text-2xl text-white/85 max-w-4xl mx-auto leading-relaxed px-4">
              {heroContent.description}
            </p>

              {/* Event Info - Better Spacing */}
              <div
                  className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center pt-4 text-lg text-white/95">
              {heroContent.eventInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                      <div key={index} className="flex items-center gap-3 group">
                          <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"/>
                          <span className="font-medium">{info.text}</span>
                      </div>
                  );
              })}
            </div>

              {/* CTA Buttons - Better Aligned */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8">
              {heroContent.buttons.map((button, index) => (
                  <Button
                      key={index}
                      variant={button.variant}
                      size="lg"
                      className="text-lg px-10 py-7 h-auto min-w-[200px] font-semibold shadow-2xl hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
                  >
                      {button.text}
                      {button.isPrimary && <ArrowRight className="ml-2 w-5 h-5"/>}
                  </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* Scroll Indicator - Better Positioned */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div
                className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 hover:border-white transition-colors cursor-pointer">
                <div className="w-1.5 h-3 bg-white/60 rounded-full"/>
        </div>
      </div>
    </section>
  );
};

import {
    Mic,
    Sparkles,
    Building2,
    Star,
    Award,
    Users,
    Mail,
    Linkedin,
    Twitter,
    User,
    ChevronRight,
    ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {useState} from "react";
import {featuredSpeakers, otherSpeakers, Speaker} from "@/content";
import {partners} from "@/content";

// Speaker details interface
// Removed empty interface

export const SpeakersPartnersSection = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
    const [isSpeakerDialogOpen, setIsSpeakerDialogOpen] = useState(false);

    const openSpeakerDialog = (speaker: Speaker) => {
        setSelectedSpeaker(speaker);
        setIsSpeakerDialogOpen(true);
    };

  return (
      <section id="speakers-partners" className="section-padding relative overflow-hidden bg-gradient-subtle">
          {/* Enhanced background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"/>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
               style={{animationDelay: "1s"}}/>
          <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl animate-pulse"
              style={{animationDuration: "4s"}}/>
      
      <div className="section-container relative z-10">
        {/* Featured Speakers */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
              <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 hover:scale-105 transition-transform duration-300">
                  <Mic className="w-4 h-4 text-primary animate-pulse"/>
                  <span className="text-sm font-semibold text-primary">Industry Experts</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
                  Featured Speakers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Learn from industry experts and thought leaders shaping the Flutter ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredSpeakers.map((speaker, index) => (
              <div 
                key={speaker.name}
                className="group animate-fade-in-up cursor-pointer"
                style={{animationDelay: `${index * 150}ms`}}
                onClick={() => openSpeakerDialog(speaker)}
              >
                  <div className="relative">
                      {/* Main card with enhanced hover effects */}
                      <div
                          className="glass-card rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-card to-primary/5 overflow-hidden group">
                          {/* Shine effect */}
                          <div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>

                          {/* Avatar with glow */}
                          <div className="relative mb-6">
                              <div
                                  className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:border-primary/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                  <img
                                      src={speaker.image}
                                      alt={speaker.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                              </div>
                              {/* Floating glow ring */}
                              <div
                                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"/>

                              {/* Badge for company */}
                              {speaker.company && (
                                  <div
                                      className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 px-4 py-1.5 bg-gradient-hero text-white text-xs font-bold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-4">
                                      {speaker.company}
                                  </div>
                              )}
                    </div>

                      {/* Content */}
                      <div className="text-center relative z-10">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2">
                              {speaker.name}
                              <ChevronRight
                                  className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"/>
                          </h3>
                          <p className="text-primary font-semibold mb-4 text-base">
                              {speaker.title}
                          </p>

                          {/* Topic card */}
                          <div
                              className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                              <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">Speaking
                                  on:</p>
                              <p className="text-foreground font-semibold text-sm leading-relaxed">{speaker.topic}</p>
                          </div>

                          {/* Social icons - appear on hover */}
                          {speaker.social && (
                              <div
                                  className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                                  {speaker.social.twitter && (
                                      <div
                                          className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                                          <Twitter className="w-4 h-4"/>
                                      </div>
                                  )}
                                  {speaker.social.linkedin && (
                                      <div
                                          className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                                          <Linkedin className="w-4 h-4"/>
                                      </div>
                                  )}
                                  {speaker.social.email && (
                                      <div
                                          className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                                          <Mail className="w-4 h-4"/>
                                      </div>
                                  )}
                              </div>
                          )}

                          {/* Click hint */}
                          <p className="text-xs text-muted-foreground mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Click to view profile
                          </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* Other Speakers - Redesigned */}
        <div className="mb-24">
            <div className="text-center mb-12 animate-fade-in-up">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">More Amazing Speakers</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Technical sessions, workshops, and lightning talks from community experts
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {otherSpeakers.map((speaker, index) => (
              <div 
                key={speaker.name}
                className="group animate-fade-in-up cursor-pointer"
                style={{animationDelay: `${index * 80}ms`}}
                onClick={() => openSpeakerDialog(speaker)}
              >
                  <div
                      className="glass-card rounded-2xl p-6 border-2 border-border hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-br from-card to-secondary/5 overflow-hidden relative">
                      {/* Shine effect */}
                      <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"/>

                      <div className="flex items-start gap-4 mb-4 relative z-10">
                          {/* Avatar */}
                          <div className="relative flex-shrink-0">
                              <div
                                  className="w-20 h-20 rounded-xl overflow-hidden border-2 border-secondary/30 shadow-lg group-hover:border-secondary/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                  <img
                                      src={speaker.image}
                                      alt={speaker.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                      </div>
                        {/* Online indicator */}
                        <div
                            className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card animate-pulse"/>
                    </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-bold mb-1 group-hover:text-secondary transition-colors duration-300 flex items-center gap-1">
                              {speaker.name}
                              <ChevronRight
                                  className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"/>
                          </h4>
                          <p className="text-sm text-muted-foreground font-medium mb-2">{speaker.title}</p>
                      </div>
                  </div>

                    {/* Topic */}
                    <div
                        className="bg-gradient-subtle rounded-lg p-3 border border-border/50 group-hover:border-secondary/30 transition-all duration-300 relative z-10">
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Topic:</p>
                        <p className="text-sm text-foreground font-medium">{speaker.topic}</p>
                    </div>

                    {/* Social icons - compact */}
                    {speaker.social && (
                        <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            {speaker.social.twitter && (
                                <div
                                    className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-200">
                                    <Twitter className="w-3 h-3"/>
                                </div>
                            )}
                            {speaker.social.linkedin && (
                                <div
                                    className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-200">
                                    <Linkedin className="w-3 h-3"/>
                                </div>
                            )}
                        </div>
                    )}
                </div>
              </div>
            ))}
          </div>

            <div className="text-center animate-fade-in-up">
                <Button variant="premium" size="lg"
                        className="btn-glow hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              Submit Your Talk Proposal
                <Sparkles className="ml-2 w-5 h-5 animate-pulse"/>
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
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                    <div
                        className="glass-card h-full text-center hover:border-primary/30 transition-all duration-300 p-8 rounded-2xl border-2 border-border hover:scale-105 hover:-translate-y-1 hover:shadow-xl group">
                        <div
                            className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            <Icon className="w-10 h-10 text-white"/>
                        </div>
                        <h4 className="text-xl font-bold mb-2">{partner.name}</h4>
                        <p className="text-sm font-semibold text-primary">{partner.role}</p>
                    </div>
                </div>
              );
            })}
          </div>

            <div
                className="glass-card rounded-3xl p-8 sm:p-12 text-center border-2 border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Become a Sponsor</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join us in building Bangladesh's Flutter community. Multiple sponsorship tiers 
                available with exclusive benefits and brand visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="premium" size="lg" className="btn-glow hover:scale-110 transition-all duration-300">
                  View Sponsor Package
                    <ExternalLink className="ml-2 w-4 h-4"/>
                </Button>
                  <Button variant="glass" size="lg" className="hover:scale-105 transition-all duration-300">
                  Contact Sponsorship Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Speaker Details Dialog */}
        <Dialog open={isSpeakerDialogOpen} onOpenChange={setIsSpeakerDialogOpen}>
            <DialogContent className="max-w-lg animate-scale-in max-h-[90vh] overflow-y-auto">
                {selectedSpeaker && (
                    <>
                        <DialogHeader>
                            <div className="flex flex-col items-center text-center mb-6">
                                {/* Speaker avatar with glow effect */}
                                <div className="relative mb-6">
                                    <div
                                        className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-float">
                                        <img
                                            src={selectedSpeaker.image}
                                            alt={selectedSpeaker.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div
                                        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl animate-pulse"/>
                                </div>

                                <DialogTitle className="text-3xl mb-2">{selectedSpeaker.name}</DialogTitle>
                                <p className="text-primary font-semibold text-lg">{selectedSpeaker.title}</p>
                                {selectedSpeaker.company && (
                                    <p className="text-muted-foreground text-sm mt-1">@ {selectedSpeaker.company}</p>
                                )}
                            </div>
                        </DialogHeader>

                        <DialogDescription className="text-base text-foreground space-y-6">
                            {/* Speaking topic */}
                            <div className="p-4 rounded-xl bg-gradient-subtle border-2 border-primary/20">
                                <p className="text-sm text-muted-foreground mb-1">Speaking on:</p>
                                <p className="font-bold text-lg text-foreground">{selectedSpeaker.topic}</p>
                            </div>

                            {/* Bio */}
                            {selectedSpeaker.bio && (
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-foreground">About</h4>
                                    <p className="text-muted-foreground leading-relaxed">{selectedSpeaker.bio}</p>
                                </div>
                            )}

                            {/* Social links */}
                            {selectedSpeaker.social && Object.keys(selectedSpeaker.social).length > 0 && (
                                <div>
                                    <h4 className="font-bold text-lg mb-3 text-foreground">Connect</h4>
                                    <div className="flex gap-3">
                                        {selectedSpeaker.social.twitter && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="flex-1"
                                                onClick={() => window.open(selectedSpeaker.social!.twitter, '_blank')}
                                            >
                                                <Twitter className="w-4 h-4 mr-2"/>
                                                Twitter
                                            </Button>
                                        )}
                                        {selectedSpeaker.social.linkedin && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="flex-1"
                                                onClick={() => window.open(selectedSpeaker.social!.linkedin, '_blank')}
                                            >
                                                <Linkedin className="w-4 h-4 mr-2"/>
                                                LinkedIn
                                            </Button>
                                        )}
                                        {selectedSpeaker.social.email && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="flex-1"
                                                onClick={() => window.location.href = `mailto:${selectedSpeaker.social!.email}`}
                                            >
                                                <Mail className="w-4 h-4 mr-2"/>
                                                Email
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Action button */}
                            <Button
                                className="w-full bg-gradient-hero text-white hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
                                size="lg">
                                <User className="w-4 h-4 mr-2"/>
                                View Full Profile
                            </Button>
                        </DialogDescription>
                    </>
                )}
            </DialogContent>
        </Dialog>
    </section>
  );
};

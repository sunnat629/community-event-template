import {Heart, Users, Twitter, Linkedin, Github, Mail, Globe, Facebook, Instagram, Youtube} from "lucide-react";
import {Button} from "@/components/ui/button";
import {mainOrganizer, coOrganizers, organizerTeam, siteConfig} from "@/content";
import {useState} from "react";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import type {OrganizerTeamMember} from "@/content";
import {SectionWrapper} from "@/components/ui/SectionWrapper";

export const OrganizersSection = () => {
    const [selectedMember, setSelectedMember] = useState<OrganizerTeamMember | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openMemberDialog = (member: OrganizerTeamMember) => {
        setSelectedMember(member);
        setIsDialogOpen(true);
    };

    return (
        <SectionWrapper theme="gradient-multi">
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

                {/* Main Organizer - Larger prominent card with logo */}
                <div className="max-w-3xl mx-auto mb-8">
                    <div
                        className="group animate-fade-in-up bg-card rounded-3xl p-12 shadow-2xl border-4 border-primary/30 hover:border-primary/50 text-center transition-all duration-300 hover:shadow-[0_20px_60px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-2 relative overflow-hidden"
                    >
                        {/* Shine effect */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"/>

                        <div className="relative z-10">
                            {/* Logo */}
                            <div className="mb-6 mx-auto w-full max-w-md">
                                <div
                                    className="bg-white/90 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                    <img
                                        src={mainOrganizer.logo}
                                        alt={`${mainOrganizer.name} logo`}
                                        className="w-full h-32 object-contain"
                                    />
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{mainOrganizer.name}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                {mainOrganizer.description}
                            </p>

                            {/* Website and Social Media Links */}
                            <div className="flex flex-wrap justify-center gap-3 mt-6">
                                {mainOrganizer.social?.website && (
                                    <button
                                        onClick={() => window.open(mainOrganizer.social!.website, '_blank')}
                                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                    >
                                        <Globe className="w-5 h-5"/>
                                    </button>
                                )}
                                {mainOrganizer.social?.facebook && (
                                    <button
                                        onClick={() => window.open(mainOrganizer.social!.facebook, '_blank')}
                                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                    >
                                        <Facebook className="w-5 h-5"/>
                                    </button>
                                )}
                                {mainOrganizer.social?.twitter && (
                                    <button
                                        onClick={() => window.open(mainOrganizer.social!.twitter, '_blank')}
                                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                    >
                                        <Twitter className="w-5 h-5"/>
                                    </button>
                                )}
                                {mainOrganizer.social?.linkedin && (
                                    <button
                                        onClick={() => window.open(mainOrganizer.social!.linkedin, '_blank')}
                                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                    >
                                        <Linkedin className="w-5 h-5"/>
                                    </button>
                                )}
                                {mainOrganizer.social?.instagram && (
                                    <button
                                        onClick={() => window.open(mainOrganizer.social!.instagram, '_blank')}
                                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                    >
                                        <Instagram className="w-5 h-5"/>
                                    </button>
                                )}
                                {mainOrganizer.social?.youtube && (
                                    <button
                                        onClick={() => window.open(mainOrganizer.social!.youtube, '_blank')}
                                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                    >
                                        <Youtube className="w-5 h-5"/>
                                    </button>
                                )}
                                {mainOrganizer.social?.github && (
                                    <button
                                        onClick={() => window.open(mainOrganizer.social!.github, '_blank')}
                                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                    >
                                        <Github className="w-5 h-5"/>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Co-Organizers - Smaller cards with logos */}
                {coOrganizers.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-muted-foreground text-center">In Partnership
                            With</h3>
                        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                            {coOrganizers.map((organizer, index) => (
                                <div
                                    key={organizer.name}
                                    className="group animate-fade-in-up bg-card rounded-2xl p-6 shadow-lg border-2 border-primary/15 hover:border-primary/30 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden w-full md:w-[calc(50%-12px)] max-w-md"
                                    style={{animationDelay: `${index * 150}ms`}}
                                >
                                    {/* Shine effect */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"/>

                                    <div className="relative z-10">
                                        {/* Logo */}
                                        <div className="mb-4 mx-auto">
                                            <div
                                                className="bg-white/90 rounded-xl p-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                                                <img
                                                    src={organizer.logo}
                                                    alt={`${organizer.name} logo`}
                                                    className="w-full h-24 object-contain"
                                                />
                                            </div>
                                        </div>

                                        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{organizer.name}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            {organizer.description}
                                        </p>

                                        {/* Website and Social Media Links */}
                                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                                            {organizer.social?.website && (
                                                <button
                                                    onClick={() => window.open(organizer.social!.website, '_blank')}
                                                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                                >
                                                    <Globe className="w-4 h-4"/>
                                                </button>
                                            )}
                                            {organizer.social?.facebook && (
                                                <button
                                                    onClick={() => window.open(organizer.social!.facebook, '_blank')}
                                                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                                >
                                                    <Facebook className="w-4 h-4"/>
                                                </button>
                                            )}
                                            {organizer.social?.twitter && (
                                                <button
                                                    onClick={() => window.open(organizer.social!.twitter, '_blank')}
                                                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                                >
                                                    <Twitter className="w-4 h-4"/>
                                                </button>
                                            )}
                                            {organizer.social?.linkedin && (
                                                <button
                                                    onClick={() => window.open(organizer.social!.linkedin, '_blank')}
                                                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                                >
                                                    <Linkedin className="w-4 h-4"/>
                                                </button>
                                            )}
                                            {organizer.social?.instagram && (
                                                <button
                                                    onClick={() => window.open(organizer.social!.instagram, '_blank')}
                                                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                                >
                                                    <Instagram className="w-4 h-4"/>
                                                </button>
                                            )}
                                            {organizer.social?.youtube && (
                                                <button
                                                    onClick={() => window.open(organizer.social!.youtube, '_blank')}
                                                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                                >
                                                    <Youtube className="w-4 h-4"/>
                                                </button>
                                            )}
                                            {organizer.social?.github && (
                                                <button
                                                    onClick={() => window.open(organizer.social!.github, '_blank')}
                                                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                                >
                                                    <Github className="w-4 h-4"/>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Organizer Team Section */}
                <div className="mb-16">
                    <div className="text-center mb-12 animate-fade-in-up">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Organizing Team</h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Leading the vision and execution of {siteConfig.eventTitle}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-items-center">
                        {organizerTeam.map((member, index) => (
                            <div
                                key={member.username}
                                className="animate-fade-in-up"
                                style={{animationDelay: `${index * 80}ms`}}
                            >
                                <button
                                    type="button"
                                    onClick={() => openMemberDialog(member)}
                                    className="w-full text-left group"
                                >
                                    <div
                                        className="glass-card rounded-2xl p-6 border-2 border-border hover:border-primary/40 transition-all duration-300 shadow-lg bg-gradient-to-br from-card to-primary/5 relative overflow-hidden h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
                                    >
                                        {/* Shine effect */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"/>

                                        <div className="relative z-10 text-center">
                                            {/* Avatar with Flutter-themed glow effect */}
                                            <div className="relative inline-block mb-4">
                                                <div
                                                    className="absolute inset-0 bg-gradient-hero rounded-full blur-md opacity-50 animate-pulse"/>
                                                <div
                                                    className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-transparent bg-gradient-hero p-[3px] group-hover:scale-110 transition-transform duration-300">
                                                    <div className="w-full h-full rounded-full overflow-hidden bg-card">
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Member Info */}
                                            <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                                                {member.name}
                                            </h4>
                                            <p className="text-sm text-primary font-semibold mb-1">
                                                {member.username}
                                            </p>

                                            {/* Team Role Badge */}
                                            <div
                                                className="inline-block px-3 py-1 bg-gradient-hero text-white text-xs font-bold rounded-full mb-3">
                                                {member.teamRole}
                                            </div>

                                            {/* Professional Info */}
                                            <div
                                                className="bg-gradient-subtle rounded-lg p-3 mb-3 border border-border/50">
                                                <p className="text-sm font-semibold text-foreground mb-1">
                                                    {member.designation}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    @ {member.company}
                                                </p>
                                            </div>

                                            {/* Social Media Icons */}
                                            <div
                                                className="flex justify-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                                {member.social.twitter && (
                                                    <div
                                                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.open(member.social.twitter, '_blank');
                                                        }}
                                                    >
                                                        <Twitter className="w-4 h-4"/>
                                                    </div>
                                                )}
                                                {member.social.linkedin && (
                                                    <div
                                                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.open(member.social.linkedin, '_blank');
                                                        }}
                                                    >
                                                        <Linkedin className="w-4 h-4"/>
                                                    </div>
                                                )}
                                                {member.social.github && (
                                                    <div
                                                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.open(member.social.github, '_blank');
                                                        }}
                                                    >
                                                        <Github className="w-4 h-4"/>
                                                    </div>
                                                )}
                                                {member.social.email && (
                                                    <div
                                                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.location.href = `mailto:${member.social.email}`;
                                                        }}
                                                    >
                                                        <Mail className="w-4 h-4"/>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Click hint */}
                                            <p className="text-xs text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Click to view profile
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Volunteer CTA */}
                <div
                    className="animate-fade-in-up bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-2 border-primary/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group"
                    style={{animationDelay: "300ms"}}>
                    {/* Animated gradient orbs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
                         style={{animationDuration: "3s"}}/>
                    <div
                        className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse"
                        style={{animationDuration: "4s", animationDelay: "1s"}}/>

                    <div className="relative z-10">
                        <div
                            className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Heart className="w-8 h-8 text-white animate-pulse"/>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                            Want to help make {siteConfig.eventTitle} amazing? We're looking for passionate
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

            {/* Team Member Details Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-lg animate-scale-in max-h-[90vh] overflow-y-auto">
                    {selectedMember && (
                        <>
                            <DialogHeader>
                                <div className="flex flex-col items-center text-center mb-6">
                                    {/* Member avatar with Flutter-themed glow effect */}
                                    <div className="relative mb-6">
                                        <div
                                            className="absolute inset-0 bg-gradient-hero rounded-full blur-xl opacity-50 animate-pulse"/>
                                        <div
                                            className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-transparent bg-gradient-hero p-1">
                                            <div className="w-full h-full rounded-full overflow-hidden bg-card">
                                                <img
                                                    src={selectedMember.image}
                                                    alt={selectedMember.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <DialogTitle className="text-3xl mb-2">{selectedMember.name}</DialogTitle>
                                    <p className="text-primary font-bold text-lg">{selectedMember.username}</p>
                                    <div
                                        className="mt-2 px-4 py-1.5 bg-gradient-hero text-white text-sm font-bold rounded-full">
                                        {selectedMember.teamRole}
                                    </div>
                                </div>
                            </DialogHeader>

                            <DialogDescription className="text-base text-foreground space-y-6">
                                {/* Professional Info */}
                                <div className="p-4 rounded-xl bg-gradient-subtle border-2 border-primary/20">
                                    <p className="text-sm text-muted-foreground mb-1">Professional Role:</p>
                                    <p className="font-bold text-lg text-foreground">{selectedMember.designation}</p>
                                    <p className="text-muted-foreground mt-1">@ {selectedMember.company}</p>
                                </div>

                                {/* Bio */}
                                {selectedMember.bio && (
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-foreground">About</h4>
                                        <p className="text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
                                    </div>
                                )}

                                {/* Social links */}
                                <div>
                                    <h4 className="font-bold text-lg mb-3 text-foreground">Connect</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {selectedMember.social.twitter && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => window.open(selectedMember.social.twitter, '_blank')}
                                            >
                                                <Twitter className="w-4 h-4 mr-2"/>
                                                Twitter
                                            </Button>
                                        )}
                                        {selectedMember.social.linkedin && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => window.open(selectedMember.social.linkedin, '_blank')}
                                            >
                                                <Linkedin className="w-4 h-4 mr-2"/>
                                                LinkedIn
                                            </Button>
                                        )}
                                        {selectedMember.social.github && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => window.open(selectedMember.social.github, '_blank')}
                                            >
                                                <Github className="w-4 h-4 mr-2"/>
                                                GitHub
                                            </Button>
                                        )}
                                        {selectedMember.social.email && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => {
                                                    if (selectedMember.social.email) {
                                                        window.location.href = `mailto:${selectedMember.social.email}`;
                                                    }
                                                }}
                                            >
                                                <Mail className="w-4 h-4 mr-2"/>
                                                Email
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                {/* Action button */}
                                <Button
                                    className="w-full bg-gradient-hero text-white hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
                                    size="lg"
                                    onClick={() => selectedMember.social.linkedin && window.open(selectedMember.social.linkedin, '_blank')}
                                >
                                    View Full Profile
                                </Button>
                            </DialogDescription>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </SectionWrapper>
    );
};

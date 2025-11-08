import React from "react";
import {PageHeader} from "@/components/pro/PageHeader";
import {FooterSection} from "@/components/sections/FooterSection";
import {UsersRound, Twitter, Linkedin, Mail, Heart} from "lucide-react";
import {motion} from "motion/react";
import {teamMembers, tierConfig} from "@/content/team";
import {Button} from "@/components/ui/button";
import {siteConfig, heroBackgrounds} from "@/content";

export default function TeamPage() {
    const organizers = teamMembers.filter(m => m.tier === 'organizer');
    const committee = teamMembers.filter(m => m.tier === 'committee');
    const volunteers = teamMembers.filter(m => m.tier === 'volunteer');

    // Animation variants
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5},
        },
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <PageHeader
                title="Meet the Team"
                subtitle={`The amazing people making ${siteConfig.eventTitle} possible`}
                icon={UsersRound}
                backgroundImage={heroBackgrounds.team.image}
                overlayOpacity={heroBackgrounds.team.overlayOpacity}
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Organizers Section */}
                {organizers.length > 0 && (
                    <motion.div
                        className="mb-20"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="text-center mb-12">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-300 mb-4">
                                {React.createElement(tierConfig.organizer.icon, {className: `w-5 h-5 ${tierConfig.organizer.color}`})}
                                <span className={`font-bold ${tierConfig.organizer.color}`}>
                                    {tierConfig.organizer.label}
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Organizing Team</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Leading the vision and execution of {siteConfig.eventTitle}
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                            {organizers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="glass-card rounded-3xl p-8 border-2 border-border hover:border-yellow-400 hover:shadow-2xl transition-all group w-full max-w-md"
                                >
                                    {/* Avatar */}
                                    <div className="relative w-32 h-32 mx-auto mb-6">
                                        <div
                                            className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl group-hover:scale-105 transition-transform">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div
                                            className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                                            {React.createElement(tierConfig.organizer.icon, {className: "w-5 h-5 text-white"})}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                        <p className="text-yellow-600 font-semibold mb-1">{member.role}</p>
                                        <p className="text-sm text-muted-foreground mb-4">{member.title}</p>

                                        {member.bio && (
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                                {member.bio}
                                            </p>
                                        )}

                                        {/* Social Links */}
                                        {member.social && (
                                            <div className="flex justify-center gap-2">
                                                {member.social.twitter && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="gap-2"
                                                        onClick={() => window.open(member.social!.twitter, '_blank')}
                                                    >
                                                        <Twitter className="w-4 h-4"/>
                                                    </Button>
                                                )}
                                                {member.social.linkedin && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="gap-2"
                                                        onClick={() => window.open(member.social!.linkedin, '_blank')}
                                                    >
                                                        <Linkedin className="w-4 h-4"/>
                                                    </Button>
                                                )}
                                                {member.social.email && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="gap-2"
                                                        onClick={() => window.location.href = `mailto:${member.social!.email}`}
                                                    >
                                                        <Mail className="w-4 h-4"/>
                                                    </Button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Committee Members Section */}
                {committee.length > 0 && (
                    <motion.div
                        className="mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, margin: "-100px"}}
                        variants={containerVariants}
                    >
                        <div className="text-center mb-12">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 mb-4">
                                {React.createElement(tierConfig.committee.icon, {className: `w-5 h-5 ${tierConfig.committee.color}`})}
                                <span className={`font-bold ${tierConfig.committee.color}`}>
                                    {tierConfig.committee.label}
                                </span>
                            </div>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Specialized teams handling technical, logistics, marketing, and sponsorships
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {committee.map((member, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="glass-card rounded-2xl p-6 border-2 border-border hover:border-blue-400 hover:shadow-lg transition-all group"
                                >
                                    {/* Avatar */}
                                    <div className="relative w-24 h-24 mx-auto mb-4">
                                        <div
                                            className="w-24 h-24 rounded-full overflow-hidden border-3 border-blue-400 shadow-lg group-hover:scale-105 transition-transform">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="text-center">
                                        <h4 className="font-bold mb-1">{member.name}</h4>
                                        <p className="text-sm text-blue-600 font-semibold mb-1">{member.title}</p>

                                        {member.bio && (
                                            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                                                {member.bio}
                                            </p>
                                        )}

                                        {/* Social Links - Icons only */}
                                        {member.social && (
                                            <div className="flex justify-center gap-2">
                                                {member.social.twitter && (
                                                    <button
                                                        onClick={() => window.open(member.social!.twitter, '_blank')}
                                                        className="w-8 h-8 rounded-full border border-border hover:border-primary bg-background hover:bg-primary hover:text-white transition-all"
                                                    >
                                                        <Twitter className="w-4 h-4 mx-auto"/>
                                                    </button>
                                                )}
                                                {member.social.linkedin && (
                                                    <button
                                                        onClick={() => window.open(member.social!.linkedin, '_blank')}
                                                        className="w-8 h-8 rounded-full border border-border hover:border-primary bg-background hover:bg-primary hover:text-white transition-all"
                                                    >
                                                        <Linkedin className="w-4 h-4 mx-auto"/>
                                                    </button>
                                                )}
                                                {member.social.email && (
                                                    <button
                                                        onClick={() => window.location.href = `mailto:${member.social!.email}`}
                                                        className="w-8 h-8 rounded-full border border-border hover:border-primary bg-background hover:bg-primary hover:text-white transition-all"
                                                    >
                                                        <Mail className="w-4 h-4 mx-auto"/>
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Volunteers Section */}
                {volunteers.length > 0 && (
                    <motion.div
                        className="mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, margin: "-100px"}}
                        variants={containerVariants}
                    >
                        <div className="text-center mb-12">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-300 mb-4">
                                {React.createElement(tierConfig.volunteer.icon, {className: `w-5 h-5 ${tierConfig.volunteer.color}`})}
                                <span className={`font-bold ${tierConfig.volunteer.color}`}>
                                    {tierConfig.volunteer.label}
                                </span>
                            </div>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Dedicated volunteers ensuring a smooth experience for all attendees
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {volunteers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="glass-card rounded-xl p-4 border-2 border-border hover:border-pink-400 hover:shadow-lg transition-all text-center group"
                                >
                                    <div
                                        className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-pink-400 shadow-md group-hover:scale-105 transition-transform">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h5 className="font-semibold text-sm mb-1">{member.name}</h5>
                                    <p className="text-xs text-pink-600 font-medium">{member.title}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Join CTA */}
                <motion.div
                    className="glass-card rounded-3xl p-12 border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 text-center"
                    initial={{opacity: 0, scale: 0.95}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                >
                    <Heart className="w-16 h-16 text-primary mx-auto mb-4"/>
                    <h2 className="text-3xl font-bold mb-4">Want to Join the Team?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We're always looking for passionate community members to help organize future events.
                        Get in touch if you'd like to contribute!
                    </p>
                    <Button size="lg" className="bg-gradient-hero hover:opacity-90">
                        <Mail className="w-5 h-5 mr-2"/>
                        Contact Us
                    </Button>
                </motion.div>
            </div>

            {/* Footer */}
            <FooterSection/>
        </div>
    );
}

import {useParams, Link, useNavigate} from "react-router-dom";
import {ChevronLeft, Globe, Linkedin, Facebook, Award, CheckCircle2, Sparkles, Building2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {partners} from "@/content/partners";
import {FooterSection} from "@/components/sections/FooterSection";
import {motion} from "motion/react";
import {Crown, Award as AwardIcon, Medal, Users, Globe as GlobeIcon} from "lucide-react";

// Tier icons
const tierIcons = {
    platinum: Crown,
    gold: AwardIcon,
    silver: Medal,
    bronze: Medal,
    community: Users,
    media: GlobeIcon,
};

// Tier colors matching the SponsorCard
const tierColors = {
    platinum: {
        gradient: "from-slate-300 via-slate-100 to-slate-300",
        badge: "bg-gradient-to-r from-slate-400 to-slate-500 text-white",
        border: "border-slate-300",
        glow: "shadow-slate-200",
    },
    gold: {
        gradient: "from-yellow-200 via-amber-100 to-yellow-200",
        badge: "bg-gradient-to-r from-yellow-500 to-amber-600 text-white",
        border: "border-yellow-300",
        glow: "shadow-yellow-200",
    },
    silver: {
        gradient: "from-slate-200 via-gray-100 to-slate-200",
        badge: "bg-gradient-to-r from-slate-400 to-gray-500 text-white",
        border: "border-slate-200",
        glow: "shadow-slate-100",
    },
    bronze: {
        gradient: "from-orange-200 via-amber-100 to-orange-200",
        badge: "bg-gradient-to-r from-orange-600 to-amber-700 text-white",
        border: "border-orange-200",
        glow: "shadow-orange-100",
    },
    community: {
        gradient: "from-blue-100 via-indigo-50 to-purple-100",
        badge: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
        border: "border-blue-200",
        glow: "shadow-blue-100",
    },
    media: {
        gradient: "from-cyan-100 via-teal-50 to-emerald-100",
        badge: "bg-gradient-to-r from-cyan-500 to-teal-600 text-white",
        border: "border-cyan-200",
        glow: "shadow-cyan-100",
    },
};

export default function SponsorDetailPage() {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Convert URL slug back to sponsor name
    const sponsorName = id?.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    // Find the sponsor
    const sponsor = partners.find(s => s.name === sponsorName);

    if (!sponsor) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Sponsor Not Found</h1>
                    <p className="text-muted-foreground mb-8">
                        The sponsor you're looking for doesn't exist.
                    </p>
                    <Button onClick={() => navigate('/sponsors')}>
                        <ChevronLeft className="w-4 h-4 mr-2"/>
                        Back to Sponsors
                    </Button>
                </div>
            </div>
        );
    }

    const TierIcon = tierIcons[sponsor.tier];
    const colors = tierColors[sponsor.tier];

    // Find related sponsors (same tier or random)
    const relatedSponsors = partners
        .filter(s => s.name !== sponsor.name && (s.tier === sponsor.tier))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-background">
            {/* Sticky Back Button */}
            <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        to="/sponsors"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4"/>
                        Back to Sponsors
                    </Link>
                </div>
            </div>

            {/* Hero Section with Logo */}
            <div className="relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-30`}
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col items-center text-center">
                        {/* Logo Container */}
                        <motion.div
                            className={`w-64 h-64 rounded-3xl bg-white shadow-2xl overflow-hidden mb-8 border-4 ${colors.border} ${colors.glow}`}
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{type: "spring", stiffness: 200, damping: 20}}
                        >
                            <div className="w-full h-full flex items-center justify-center p-8">
                                <img
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} logo`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Tier Badge */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2}}
                        >
                            <Badge
                                className={`${colors.badge} border-0 flex items-center gap-2 px-4 py-2 text-base shadow-lg mb-4`}>
                                <TierIcon className="w-5 h-5"/>
                                <span className="capitalize font-bold">{sponsor.tier} Partner</span>
                            </Badge>
                        </motion.div>

                        {/* Company Name & Role */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3}}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                                {sponsor.name}
                            </h1>
                            <p className="text-xl sm:text-2xl text-primary font-semibold mb-6">
                                {sponsor.role}
                            </p>
                            <p className="text-lg text-muted-foreground max-w-3xl">
                                {sponsor.shortDescription}
                            </p>
                        </motion.div>

                        {/* Social Links */}
                        {(sponsor.website || sponsor.linkedin || sponsor.facebook) && (
                            <motion.div
                                className="flex flex-wrap gap-3 mt-8"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.4}}
                            >
                                {sponsor.website && (
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="gap-2"
                                        onClick={() => window.open(sponsor.website, '_blank')}
                                    >
                                        <Globe className="w-5 h-5"/>
                                        Visit Website
                                    </Button>
                                )}
                                {sponsor.linkedin && (
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="gap-2"
                                        onClick={() => window.open(sponsor.linkedin, '_blank')}
                                    >
                                        <Linkedin className="w-5 h-5"/>
                                        LinkedIn
                                    </Button>
                                )}
                                {sponsor.facebook && (
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="gap-2"
                                        onClick={() => window.open(sponsor.facebook, '_blank')}
                                    >
                                        <Facebook className="w-5 h-5"/>
                                        Facebook
                                    </Button>
                                )}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Section */}
                        <motion.div
                            className="glass-card rounded-3xl p-8 border-2 border-border"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5}}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Building2 className="w-6 h-6 text-primary"/>
                                <h2 className="text-3xl font-bold">About {sponsor.name}</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {sponsor.description}
                            </p>
                        </motion.div>

                        {/* Partnership Benefits */}
                        {sponsor.benefits && sponsor.benefits.length > 0 && (
                            <motion.div
                                className={`glass-card rounded-3xl p-8 border-2 ${colors.border} bg-gradient-to-br ${colors.gradient} bg-opacity-5`}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.6}}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <Award className="w-6 h-6 text-primary"/>
                                    <h2 className="text-3xl font-bold">Partnership Benefits</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {sponsor.benefits.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-3 p-4 rounded-xl bg-white/50 backdrop-blur border border-border/50"
                                            initial={{opacity: 0, x: -20}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{delay: 0.7 + index * 0.1}}
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                                            <span className="text-foreground font-medium">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Thank You Card */}
                        <motion.div
                            className="glass-card rounded-3xl p-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 text-center"
                            initial={{opacity: 0, scale: 0.95}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{delay: 0.8}}
                        >
                            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4"/>
                            <h3 className="text-2xl font-bold mb-2">
                                Thank You for Supporting Our Community!
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                {sponsor.name} is helping make Flutter Guild Connect 2025 possible.
                            </p>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Info Card */}
                        <motion.div
                            className={`glass-card rounded-2xl p-6 border-2 ${colors.border} bg-gradient-to-br ${colors.gradient} bg-opacity-10`}
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 0.5}}
                        >
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                <TierIcon className="w-5 h-5"/>
                                Partnership Details
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-muted-foreground">Tier</p>
                                    <p className="font-semibold capitalize">{sponsor.tier}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Role</p>
                                    <p className="font-semibold">{sponsor.role}</p>
                                </div>
                                {sponsor.benefits && (
                                    <div>
                                        <p className="text-sm text-muted-foreground">Benefits</p>
                                        <p className="font-semibold">{sponsor.benefits.length} included</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Related Sponsors */}
                        {relatedSponsors.length > 0 && (
                            <motion.div
                                className="glass-card rounded-2xl p-6 border-2 border-border"
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 0.6}}
                            >
                                <h3 className="font-bold text-xl mb-4">More {sponsor.tier} Partners</h3>
                                <div className="space-y-4">
                                    {relatedSponsors.map((related, index) => {
                                        const relatedSlug = related.name.toLowerCase().replace(/\s+/g, '-');
                                        return (
                                            <Link
                                                key={index}
                                                to={`/sponsors/${relatedSlug}`}
                                                className="flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-primary/50 bg-background hover:bg-muted/50 transition-all duration-200 group"
                                            >
                                                <div
                                                    className="w-16 h-16 rounded-lg bg-white border border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                                                    <img
                                                        src={related.logo}
                                                        alt={related.name}
                                                        className="w-full h-full object-contain p-2"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold group-hover:text-primary transition-colors truncate">
                                                        {related.name}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground truncate">
                                                        {related.role}
                                                    </p>
                                                </div>
                                                <ChevronLeft
                                                    className="w-5 h-5 rotate-180 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"/>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}

                        {/* CTA Card */}
                        <motion.div
                            className="glass-card rounded-2xl p-6 border-2 border-primary/20 bg-gradient-hero text-white text-center"
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 0.7}}
                        >
                            <h3 className="font-bold text-xl mb-2">Interested in Sponsoring?</h3>
                            <p className="text-white/90 mb-4 text-sm">
                                Join us in supporting the Flutter community
                            </p>
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full"
                            >
                                View Sponsorship Packages
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <FooterSection/>
        </div>
    );
}

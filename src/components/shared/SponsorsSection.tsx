import {SponsorCard} from "./SponsorCard";
import {Partner, partners} from "@/content/partners";
import {motion} from "motion/react";
import {useNavigate} from "react-router-dom";

export function SponsorsSection() {
    const navigate = useNavigate();

    // Group sponsors by tier
    const platinumSponsors = partners.filter(s => s.tier === "platinum");
    const goldSponsors = partners.filter(s => s.tier === "gold");
    const silverSponsors = partners.filter(s => s.tier === "silver");
    const bronzeSponsors = partners.filter(s => s.tier === "bronze");
    const communitySponsors = partners.filter(s => s.tier === "community");
    const mediaSponsors = partners.filter(s => s.tier === "media");

    // Handle sponsor click - navigate to detail page
    const handleSponsorClick = (sponsor: Partner) => {
        const slug = sponsor.name.toLowerCase().replace(/\s+/g, '-');
        navigate(`/sponsors/${slug}`);
    };

    // Animation variants for stagger effect
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <div className="space-y-12">
            {/* Premium Tier - Platinum & Gold */}
            <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Platinum Sponsors - 3 per row */}
                {platinumSponsors.length > 0 && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        <motion.h3
                            className="mb-6 text-slate-900 text-2xl font-bold"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                        >
                            Platinum Sponsors
                        </motion.h3>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            variants={containerVariants}
                        >
                            {platinumSponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={sponsor.name}
                                    sponsor={sponsor}
                                    size="large"
                                    onClick={() => handleSponsorClick(sponsor)}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}

                {/* Gold Sponsors - 3 per row */}
                {goldSponsors.length > 0 && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.3}}
                    >
                        <motion.h3
                            className="mb-6 text-slate-900 text-2xl font-bold"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                        >
                            Gold Sponsors
                        </motion.h3>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            variants={containerVariants}
                        >
                            {goldSponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={sponsor.name}
                                    sponsor={sponsor}
                                    size="large"
                                    onClick={() => handleSponsorClick(sponsor)}
                                    index={index + platinumSponsors.length}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>

            {/* Secondary Tiers - Silver, Bronze, Community, Media */}
            <motion.div
                className="space-y-6"
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.4}}
            >
                {/* Silver Sponsors */}
                {silverSponsors.length > 0 && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.5}}
                    >
                        <motion.h3
                            className="mb-4 text-slate-700 text-xl font-bold"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                        >
                            Silver Sponsors
                        </motion.h3>
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {silverSponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={sponsor.name}
                                    sponsor={sponsor}
                                    size="small"
                                    onClick={() => handleSponsorClick(sponsor)}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}

                {/* Bronze Sponsors */}
                {bronzeSponsors.length > 0 && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.6}}
                    >
                        <motion.h3
                            className="mb-4 text-slate-700 text-xl font-bold"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                        >
                            Bronze Sponsors
                        </motion.h3>
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {bronzeSponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={sponsor.name}
                                    sponsor={sponsor}
                                    size="small"
                                    onClick={() => handleSponsorClick(sponsor)}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}

                {/* Community Partners */}
                {communitySponsors.length > 0 && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.7}}
                    >
                        <motion.h3
                            className="mb-4 text-slate-700 text-xl font-bold"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                        >
                            Community Partners
                        </motion.h3>
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {communitySponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={sponsor.name}
                                    sponsor={sponsor}
                                    size="small"
                                    onClick={() => handleSponsorClick(sponsor)}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}

                {/* Media Partners */}
                {mediaSponsors.length > 0 && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.8}}
                    >
                        <motion.h3
                            className="mb-4 text-slate-700 text-xl font-bold"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                        >
                            Media Partners
                        </motion.h3>
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {mediaSponsors.map((sponsor, index) => (
                                <SponsorCard
                                    key={sponsor.name}
                                    sponsor={sponsor}
                                    size="small"
                                    onClick={() => handleSponsorClick(sponsor)}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>

        </div>
    );
}

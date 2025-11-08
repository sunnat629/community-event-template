import {Partner} from "@/content/partners";
import {Crown, Award, Medal, Users, Globe} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {motion} from "motion/react";
import {useState} from "react";

interface SponsorCardProps {
    sponsor: Partner;
    size: "large" | "small";
    onClick: () => void;
    index: number;
}

// Tier configuration matching the reference design
const tierConfig = {
    platinum: {
        icon: Crown,
        color: "from-slate-300 via-slate-100 to-slate-300",
        badgeColor: "bg-gradient-to-r from-slate-400 to-slate-500 text-white",
        borderColor: "border-slate-300",
        glowColor: "shadow-slate-200",
        hoverGlow: "group-hover:shadow-slate-300/50",
    },
    gold: {
        icon: Award,
        color: "from-yellow-200 via-amber-100 to-yellow-200",
        badgeColor: "bg-gradient-to-r from-yellow-500 to-amber-600 text-white",
        borderColor: "border-yellow-300",
        glowColor: "shadow-yellow-200",
        hoverGlow: "group-hover:shadow-yellow-300/60",
    },
    silver: {
        icon: Medal,
        color: "from-slate-200 via-gray-100 to-slate-200",
        badgeColor: "bg-gradient-to-r from-slate-400 to-gray-500 text-white",
        borderColor: "border-slate-200",
        glowColor: "shadow-slate-100",
        hoverGlow: "group-hover:shadow-slate-200/50",
    },
    bronze: {
        icon: Medal,
        color: "from-orange-200 via-amber-100 to-orange-200",
        badgeColor: "bg-gradient-to-r from-orange-600 to-amber-700 text-white",
        borderColor: "border-orange-200",
        glowColor: "shadow-orange-100",
        hoverGlow: "group-hover:shadow-orange-200/50",
    },
    community: {
        icon: Users,
        color: "from-blue-100 via-indigo-50 to-purple-100",
        badgeColor: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
        borderColor: "border-blue-200",
        glowColor: "shadow-blue-100",
        hoverGlow: "group-hover:shadow-blue-200/50",
    },
    media: {
        icon: Globe,
        color: "from-cyan-100 via-teal-50 to-emerald-100",
        badgeColor: "bg-gradient-to-r from-cyan-500 to-teal-600 text-white",
        borderColor: "border-cyan-200",
        glowColor: "shadow-cyan-100",
        hoverGlow: "group-hover:shadow-cyan-200/50",
    },
};

export function SponsorCard({sponsor, size, onClick, index}: SponsorCardProps) {
    const config = tierConfig[sponsor.tier];
    const Icon = config.icon;
    const isLarge = size === "large";
    const [isHovered, setIsHovered] = useState(false);

    // Animation variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
            },
        },
    };

    return (
        <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-50px"}}
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{
                scale: 1.05,
                y: -8,
                transition: {type: "spring", stiffness: 400, damping: 25},
            }}
            whileTap={{scale: 0.98}}
            className={`
                group relative overflow-hidden rounded-2xl border-2 bg-white
                ${config.borderColor} ${config.glowColor} ${config.hoverGlow}
                ${isLarge ? "p-8 shadow-lg hover:shadow-2xl" : "p-6 shadow-md hover:shadow-xl"}
                w-full text-left transition-shadow duration-300
            `}
        >
            {/* Animated Background Gradient */}
            <motion.div
                className={`
                    absolute inset-0 bg-gradient-to-br opacity-30
                    ${config.color}
                `}
                animate={{
                    opacity: isHovered ? 0.5 : 0.3,
                }}
                transition={{duration: 0.3}}
            />

            {/* Shimmer Effect on Hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                animate={{
                    x: isHovered ? ["0%", "200%"] : "0%",
                    opacity: isHovered ? [0, 0.3, 0] : 0,
                }}
                transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Particles for Premium Tiers */}
            {isLarge && (
                <>
                    <motion.div
                        className="absolute top-10 left-10 w-2 h-2 bg-white/40 rounded-full"
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-10 right-10 w-3 h-3 bg-white/30 rounded-full"
                        animate={{
                            y: [0, 20, 0],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                </>
            )}

            {/* Premium Badge for Large Cards - Positioned at top, behind logo */}
            {isLarge && (
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
                    initial={{opacity: 0, scale: 0, y: -20}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        delay: index * 0.1 + 0.3,
                    }}
                >
                    <motion.div
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5}}
                    >
                        <Badge
                            className={`${config.badgeColor} border-0 flex items-center gap-1.5 shadow-lg px-4 py-1.5 rounded-b-lg rounded-t-none`}>
                            <motion.div
                                animate={{rotate: isHovered ? 360 : 0}}
                                transition={{duration: 0.6}}
                            >
                                <Icon className="w-3.5 h-3.5"/>
                            </motion.div>
                            <span className="capitalize font-bold">{sponsor.tier}</span>
                        </Badge>
                    </motion.div>
                </motion.div>
            )}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">

                {/* Logo Container - Portrait aspect ratio for better layout */}
                <motion.div
                    className={`
                        bg-white rounded-xl shadow-md overflow-hidden mb-4
                        ${isLarge ? "w-full aspect-[3/4]" : "w-32 h-32"}
                        flex items-center justify-center relative
                    `}
                    whileHover={{
                        rotate: [0, -5, 5, -5, 0],
                        scale: 1.05,
                    }}
                    transition={{duration: 0.5}}
                >
                    {/* Glow effect behind logo */}
                    <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0`}
                        animate={{
                            opacity: isHovered ? 0.2 : 0,
                        }}
                        transition={{duration: 0.3}}
                    />
                    <motion.img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className={`w-full h-full object-contain relative z-10 ${isLarge ? "p-6" : "p-4"}`}
                        initial={{scale: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{type: "spring", stiffness: 300, damping: 20}}
                    />
                </motion.div>

                {/* Company Name */}
                <motion.h3
                    className={`text-slate-900 mb-2 ${isLarge ? "text-2xl" : "text-lg"} font-bold`}
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{duration: 0.2}}
                >
                    {sponsor.name}
                </motion.h3>

                {/* Short Description for Large Cards */}
                {isLarge && (
                    <motion.p
                        className="text-slate-600 line-clamp-2 mb-4 text-sm"
                        initial={{opacity: 0.8}}
                        animate={{opacity: isHovered ? 1 : 0.8}}
                        transition={{duration: 0.3}}
                    >
                        {sponsor.shortDescription}
                    </motion.p>
                )}

                {/* Tier Badge for Small Cards */}
                {!isLarge && (
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{delay: index * 0.05 + 0.2}}
                    >
                        <Badge className={`${config.badgeColor} border-0 flex items-center gap-1`}>
                            <Icon className="w-3 h-3"/>
                            <span className="capitalize text-xs">{sponsor.tier}</span>
                        </Badge>
                    </motion.div>
                )}

                {/* Hover Indicator */}
                <motion.div
                    className={`
                        mt-4 text-slate-500 text-sm flex items-center gap-1
                        ${isLarge ? "" : "text-xs"}
                    `}
                    initial={{opacity: 0, y: 10}}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10,
                    }}
                    transition={{duration: 0.2}}
                >
                    <span>Click to learn more</span>
                    <motion.span
                        animate={{x: isHovered ? [0, 5, 0] : 0}}
                        transition={{duration: 0.8, repeat: Infinity}}
                    >
                        →
                    </motion.span>
                </motion.div>
            </div>

            {/* Pulsing Ring Effect on Hover */}
            <motion.div
                className={`absolute inset-0 rounded-2xl border-2 ${config.borderColor}`}
                initial={{opacity: 0, scale: 1}}
                animate={{
                    opacity: isHovered ? [0.5, 0] : 0,
                    scale: isHovered ? [1, 1.05] : 1,
                }}
                transition={{
                    duration: 1,
                    repeat: isHovered ? Infinity : 0,
                }}
            />
        </motion.button>
    );
}

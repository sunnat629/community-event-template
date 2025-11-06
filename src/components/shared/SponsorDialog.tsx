import {Partner} from "@/content/partners";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Globe, Linkedin, Facebook, Mail} from "lucide-react";
import {motion} from "motion/react";

interface SponsorDialogProps {
    sponsor: Partner | null;
    open: boolean;
    onClose: () => void;
}

export function SponsorDialog({sponsor, open, onClose}: SponsorDialogProps) {
    if (!sponsor) return null;

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex flex-col items-center text-center mb-6">
                        {/* Sponsor Logo */}
                        <motion.div
                            className="relative mb-6 w-full"
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.3}}
                        >
                            <div
                                className="w-full max-w-md mx-auto h-48 rounded-2xl overflow-hidden bg-white shadow-2xl border-2 border-slate-200 flex items-center justify-center p-8">
                                <motion.img
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} logo`}
                                    className="max-w-full max-h-full w-auto h-auto object-contain"
                                    initial={{scale: 0.8}}
                                    animate={{scale: 1}}
                                    transition={{type: "spring", stiffness: 200, damping: 20}}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.1}}
                        >
                            <DialogTitle className="text-3xl mb-2">{sponsor.name}</DialogTitle>
                            <p className="text-primary font-bold text-xl capitalize">{sponsor.role}</p>
                            <p className="text-muted-foreground text-sm mt-1 capitalize">
                                {sponsor.tier} Partner
                            </p>
                        </motion.div>
                    </div>
                </DialogHeader>

                <DialogDescription className="text-base text-foreground space-y-6">
                    {/* Description */}
                    {sponsor.description && (
                        <motion.div
                            className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2}}
                        >
                            <h4 className="font-bold text-lg mb-3 text-foreground">About</h4>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                {sponsor.description}
                            </p>
                        </motion.div>
                    )}

                    {/* Benefits */}
                    {sponsor.benefits && sponsor.benefits.length > 0 && (
                        <motion.div
                            className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3}}
                        >
                            <h4 className="font-bold text-lg mb-3 text-foreground">Partnership Benefits</h4>
                            <ul className="space-y-2 text-muted-foreground">
                                {sponsor.benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-2"
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: 0.4 + index * 0.1}}
                                    >
                                        <span className="text-primary mt-1 font-bold">✓</span>
                                        <span>{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Connect Links */}
                    {(sponsor.website || sponsor.linkedin || sponsor.facebook) && (
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5}}
                        >
                            <h4 className="font-bold text-lg mb-3 text-foreground text-center">Connect</h4>
                            <div className="flex flex-wrap justify-center gap-3">
                                {sponsor.website && (
                                    <motion.div
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                    >
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(sponsor.website, '_blank')}
                                        >
                                            <Globe className="w-4 h-4 mr-2"/>
                                            Website
                                        </Button>
                                    </motion.div>
                                )}
                                {sponsor.linkedin && (
                                    <motion.div
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                    >
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(sponsor.linkedin, '_blank')}
                                        >
                                            <Linkedin className="w-4 h-4 mr-2"/>
                                            LinkedIn
                                        </Button>
                                    </motion.div>
                                )}
                                {sponsor.facebook && (
                                    <motion.div
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                    >
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(sponsor.facebook, '_blank')}
                                        >
                                            <Facebook className="w-4 h-4 mr-2"/>
                                            Facebook
                                        </Button>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Thank You Message */}
                    <motion.div
                        className="text-center p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20"
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{delay: 0.6}}
                    >
                        <p className="text-foreground font-semibold text-lg">
                            Thank you for supporting our community! 🎉
                        </p>
                    </motion.div>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
}

import {useCallback, useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {SpeakerCard} from "@/components/shared/SpeakerCard";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {motion} from "motion/react";
import type {Speaker} from "@/types";

interface FeaturedSpeakersCarouselProps {
    speakers: Speaker[];
}

/**
 * Featured Speakers Carousel Component
 * Horizontal auto-rotating carousel with smooth animations
 */
export const FeaturedSpeakersCarousel = ({speakers}: FeaturedSpeakersCarouselProps) => {
    // Initialize Embla Carousel with autoplay plugin
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            skipSnaps: false,
            dragFree: false,
        },
        [
            Autoplay({
                delay: 4000, // 4 seconds per slide
                stopOnInteraction: true, // Stop on user interaction
                stopOnMouseEnter: true, // Pause on hover
            })
        ]
    );

    // Navigation handlers
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Keyboard navigation
    useEffect(() => {
        if (!emblaApi) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") scrollPrev();
            if (event.key === "ArrowRight") scrollNext();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [emblaApi, scrollPrev, scrollNext]);

    return (
        <div className="relative">
            {/* Wrapper with extra padding for hover effects (scale 1.05 + translate -2px) */}
            <div className="py-12 px-6">
                {/* Carousel Container - must have overflow-hidden */}
                <div className="overflow-hidden -mx-6" ref={emblaRef}>
                    <div className="flex gap-6 px-6">
                        {speakers.map((speaker, index) => {
                            const speakerSlug = speaker.name.toLowerCase().replace(/\s+/g, '-');
                            return (
                                <motion.div
                                    key={speaker.name}
                                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] px-2"
                                    initial={{opacity: 0, scale: 0.9}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.5, delay: index * 0.1}}
                                >
                                    <Link to={`/speakers/${speakerSlug}`}>
                                        <SpeakerCard
                                            speaker={speaker}
                                            variant="featured"
                                            onClick={() => {
                                            }}
                                        />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
                {/* Previous Button */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollPrev}
                    className="w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                >
                    <ChevronLeft className="w-5 h-5"/>
                </Button>

                {/* Next Button */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollNext}
                    className="w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                >
                    <ChevronRight className="w-5 h-5"/>
                </Button>
            </div>
        </div>
    );
};

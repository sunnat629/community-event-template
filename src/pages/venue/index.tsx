import {PageHeader} from "@/components/pro/PageHeader";
import {FooterSection} from "@/components/sections/FooterSection";
import {
    MapPin,
    Navigation,
    Phone,
    Mail,
    Clock,
    Wifi,
    Coffee,
    Utensils,
    ParkingCircle,
    Accessibility,
    Building2,
    Info
} from "lucide-react";
import {motion} from "motion/react";

export default function VenuePage() {
    const facilities = [
        {icon: Wifi, label: "High-Speed WiFi", description: "Free WiFi throughout the venue"},
        {icon: Coffee, label: "Coffee Lounge", description: "Complimentary coffee & refreshments"},
        {icon: Utensils, label: "Food Court", description: "Multiple dining options available"},
        {icon: ParkingCircle, label: "Parking", description: "Free parking for 500+ vehicles"},
        {icon: Accessibility, label: "Accessible", description: "Wheelchair accessible facilities"},
        {icon: Building2, label: "Modern Halls", description: "State-of-the-art conference rooms"},
    ];

    const directions = [
        {
            title: "By Car",
            description: "Take Gulshan Avenue, turn right at Gulshan-2 Circle. The venue is on the left after 500m.",
            icon: Navigation,
        },
        {
            title: "By Public Transport",
            description: "Take bus routes: 25, 30, or 45. Get off at Brain Station 23 stop.",
            icon: Navigation,
        },
        {
            title: "By Ride-sharing",
            description: "Search 'Brain Station 23' in Uber, Pathao, or Obhai. Main entrance on Road 113.",
            icon: Navigation,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <PageHeader
                title="Event Venue"
                subtitle="Brain Station 23 - Dhaka's Premier Tech Hub"
                icon={MapPin}
                gradient="gradient-hero"
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Venue Overview */}
                <motion.div
                    className="grid lg:grid-cols-2 gap-8 mb-16"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    {/* Location Details Card */}
                    <div className="glass-card rounded-3xl p-8 border-2 border-border">
                        <div className="flex items-center gap-3 mb-6">
                            <Building2 className="w-8 h-8 text-primary"/>
                            <h2 className="text-3xl font-bold">Venue Details</h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-primary">Brain Station 23</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    A leading software and IT solutions company providing world-class technology
                                    services.
                                    Our modern facility offers the perfect environment for tech conferences and
                                    networking.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
                                <div>
                                    <p className="font-semibold mb-1">Address</p>
                                    <p className="text-muted-foreground">
                                        Plot 1/A, Road 113<br/>
                                        Gulshan-2, Dhaka-1212<br/>
                                        Bangladesh
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
                                <div>
                                    <p className="font-semibold mb-1">Phone</p>
                                    <p className="text-muted-foreground">+880 1234-567890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
                                <div>
                                    <p className="font-semibold mb-1">Email</p>
                                    <p className="text-muted-foreground">venue@flutterguild.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
                                <div>
                                    <p className="font-semibold mb-1">Event Hours</p>
                                    <p className="text-muted-foreground">
                                        Day 1-3: 9:00 AM - 6:00 PM<br/>
                                        Registration: 8:30 AM onwards
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Card */}
                    <div className="glass-card rounded-3xl overflow-hidden border-2 border-border">
                        <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-primary"/>
                                Location Map
                            </h3>
                        </div>
                        {/* Embedded Google Map */}
                        <div className="relative w-full h-[400px] bg-muted">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.090426088194!2d90.41450731543302!3d23.780916293538985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1f6c0f5c9%3A0x1e8e8e8e8e8e8e8e!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Venue Location Map"
                            />
                        </div>
                        <div className="p-6">
                            <a
                                href="https://maps.google.com/?q=Gulshan+2+Dhaka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                            >
                                <Navigation className="w-4 h-4"/>
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Directions */}
                <motion.div
                    className="mb-16"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">How to Get Here</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {directions.map((direction, index) => (
                            <motion.div
                                key={index}
                                className="glass-card rounded-2xl p-6 border-2 border-border hover:border-primary/50 transition-colors"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.3 + index * 0.1}}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <direction.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{direction.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{direction.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Facilities */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.4}}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Venue Facilities</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facilities.map((facility, index) => (
                            <motion.div
                                key={index}
                                className="glass-card rounded-2xl p-6 border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                                initial={{opacity: 0, scale: 0.95}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.4, delay: 0.5 + index * 0.1}}
                                whileHover={{scale: 1.02}}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <facility.icon className="w-6 h-6 text-white"/>
                                </div>
                                <h3 className="text-lg font-bold mb-2">{facility.label}</h3>
                                <p className="text-muted-foreground text-sm">{facility.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Important Info */}
                <motion.div
                    className="mt-16 glass-card rounded-3xl p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.6}}
                >
                    <div className="flex items-start gap-4">
                        <Info className="w-6 h-6 text-primary mt-1 flex-shrink-0"/>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Important Information</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Please arrive 30 minutes early for registration on Day 1</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Valid ID required for entry. Bring your registration confirmation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Parking is available on a first-come, first-served basis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Lunch and refreshments will be provided daily</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>The venue is fully air-conditioned. Dress comfortably</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <FooterSection/>
        </div>
    );
}

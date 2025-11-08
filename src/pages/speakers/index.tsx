import {useState, useMemo} from "react";
import {Users, Search, Building2, Filter as FilterIcon} from "lucide-react";
import {PageHeader} from "@/components/pro/PageHeader";
import {SpeakerCard} from "@/components/shared/SpeakerCard";
import {FooterSection} from "@/components/sections/FooterSection";
import {featuredSpeakers, otherSpeakers, heroBackgrounds} from "@/content";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {useNavigate} from "react-router-dom";

/**
 * Speakers Page - Pro Mode
 * Dedicated page for all speakers with search and filtering
 */
const SpeakersPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [companyFilter, setCompanyFilter] = useState("all");
    const [sortBy, setSortBy] = useState("name");

    // Combine all speakers
    const allSpeakers = useMemo(() => {
        return [...featuredSpeakers, ...otherSpeakers];
    }, []);

    // Get unique companies for filter
    const companies = useMemo(() => {
        const uniqueCompanies = new Set(
            allSpeakers
                .map((s) => s.company)
                .filter((c): c is string => Boolean(c))
        );
        return Array.from(uniqueCompanies).sort();
    }, [allSpeakers]);

    // Filter and sort speakers
    const filteredSpeakers = useMemo(() => {
        let filtered = allSpeakers;

        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (speaker) =>
                    speaker.name.toLowerCase().includes(query) ||
                    speaker.title.toLowerCase().includes(query) ||
                    speaker.topic.toLowerCase().includes(query) ||
                    speaker.company?.toLowerCase().includes(query)
            );
        }

        // Company filter
        if (companyFilter !== "all") {
            filtered = filtered.filter((speaker) => speaker.company === companyFilter);
        }

        // Sort - Featured first, then by selected sort option
        filtered = [...filtered].sort((a, b) => {
            // Featured speakers always come first
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;

            // Then sort by selected option
            if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            } else if (sortBy === "company") {
                return (a.company || "").localeCompare(b.company || "");
            }
            return 0;
        });

        return filtered;
    }, [allSpeakers, searchQuery, companyFilter, sortBy]);

    const navigate = useNavigate();

    // Handle speaker click - navigate to detail page
    const handleSpeakerClick = (speaker: typeof allSpeakers[0]) => {
        // Convert speaker name to URL-friendly slug
        const slug = speaker.name.toLowerCase().replace(/\s+/g, '-');
        navigate(`/speakers/${slug}`);
    };

    // Clear all filters
    const clearFilters = () => {
        setSearchQuery("");
        setCompanyFilter("all");
        setSortBy("name");
    };

    const hasActiveFilters = searchQuery || companyFilter !== "all" || sortBy !== "name";

    return (
        <div className="min-h-screen bg-background">
            {/* Page Header - Now has hero-style background built-in */}
            <PageHeader
                title={`${allSpeakers.length}+ Expert Speakers`}
                subtitle="Learn from industry leaders and community experts"
                description="Connect with speakers shaping the future of technology"
                icon={Users}
                badge={{
                    text: "Industry Experts",
                    icon: Users,
                }}
                backgroundImage={heroBackgrounds.speakers.image}
                overlayOpacity={heroBackgrounds.speakers.overlayOpacity}
            />

            {/* Filters Section */}
            <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        {/* Search */}
                        <div className="relative flex-1 w-full sm:max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
                            <Input
                                type="search"
                                placeholder="Search speakers, companies, topics..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 w-full"
                            />
                        </div>

                        {/* Company Filter */}
                        <Select value={companyFilter} onValueChange={setCompanyFilter}>
                            <SelectTrigger className="w-full sm:w-48">
                                <Building2 className="w-4 h-4 mr-2"/>
                                <SelectValue placeholder="All Companies"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Companies</SelectItem>
                                {companies.map((company) => (
                                    <SelectItem key={company} value={company}>
                                        {company}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Sort By */}
                        <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger className="w-full sm:w-40">
                                <FilterIcon className="w-4 h-4 mr-2"/>
                                <SelectValue placeholder="Sort by"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="name">Name (A-Z)</SelectItem>
                                <SelectItem value="company">Company</SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Clear Filters */}
                        {hasActiveFilters && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={clearFilters}
                                className="w-full sm:w-auto"
                            >
                                Clear Filters
                            </Button>
                        )}
                    </div>

                    {/* Results count */}
                    <div className="mt-3 text-sm text-muted-foreground">
                        Showing {filteredSpeakers.length} of {allSpeakers.length} speakers
                        {searchQuery && ` for "${searchQuery}"`}
                    </div>
                </div>
            </section>

            {/* Speakers Grid */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {filteredSpeakers.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredSpeakers.map((speaker, index) => (
                                <div
                                    key={speaker.name}
                                    className="animate-fade-in-up"
                                    style={{animationDelay: `${index * 50}ms`}}
                                >
                                    <SpeakerCard
                                        speaker={speaker}
                                        variant="compact"
                                        onClick={() => handleSpeakerClick(speaker)}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Empty state
                        <div className="text-center py-16">
                            <div
                                className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                                <Users className="w-10 h-10 text-muted-foreground"/>
                            </div>
                            <h3 className="text-xl font-bold mb-2">No speakers found</h3>
                            <p className="text-muted-foreground mb-6">
                                Try adjusting your search or filters
                            </p>
                            <Button onClick={clearFilters}>Clear All Filters</Button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
                <div className="max-w-4xl mx-auto text-center">
                    <div
                        className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-primary/20 hover:border-primary/30 transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-4">Want to Speak at Our Event?</h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We're always looking for passionate speakers to share their knowledge with the community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-hero text-white hover:shadow-glow">
                                Submit Talk Proposal
                            </Button>
                            <Button size="lg" variant="outline">
                                View Speaker Guidelines
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <FooterSection/>
        </div>
    );
};

export default SpeakersPage;

import { Search, Check, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import EpisodeCard from "@/components/EpisodeCard";
import HostChipsContainer from "@/components/HostChipsContainer";
import EpisodeSelectionDialog from "@/components/EpisodeSelectionDialog";
import DynamicHeadline from "@/components/DynamicHeadline";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearchQuery, setActiveSearchQuery] = useState("");
  const [selectedHosts, setSelectedHosts] = useState<string[]>([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedEpisodes, setSelectedEpisodes] = useState<number[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Placeholder data - this would come from your API
  const hosts = [
    {
      id: "sarah123",
      name: "Tech Talks with Sarah",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      id: "entre101",
      name: "Entrepreneur Daily",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: "marketing2025",
      name: "Marketing Insights 2025",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    },
    {
      id: "aiweekly",
      name: "AI Weekly Digest",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      id: "startupstories",
      name: "Startup Success Stories",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
    {
      id: "futuretech",
      name: "Future Tech Today",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      id: "businessinsights",
      name: "Business Insights Daily",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      id: "digitalnomad",
      name: "Digital Nomad Life",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    },
    {
      id: "productivity",
      name: "Productivity Hacks",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    },
    {
      id: "innovation",
      name: "Innovation Station",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      id: "leadership",
      name: "Leadership Lessons",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
    },
    {
      id: "remotework",
      name: "Remote Work Revolution",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    }
  ];

  const episodes = [
    {
      id: 1,
      title: "The Future of AI",
      host: "Tech Talks with Sarah",
      hostId: "sarah123",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      summary: "A fascinating discussion about artificial intelligence and its impact on society.",
      date: "2025-04-20",
      keyTakeaways: [
        "Unexpected challenges led Isaac French from a suspended listing to a $7 million exit after a $2.3 million investment! *(0.0 sec)*",
        "Isaac grew his social media from 5,000 to 150,000 followers, driving 80% of bookings for his micro-resort! *(22.7 sec)*",
        "With compelling stories on Twitter, Isaac's content reached 100 million views, showcasing storytelling's power! *(37.9 sec)*",
        "Learn the 'secret sauce' of virality—maximize shareability in your storytelling to boost brand outreach! *(58.2 sec)*"
      ]
    },
    {
      id: 2,
      title: "Startup Success Stories",
      host: "Entrepreneur Daily",
      hostId: "entre101",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      summary: "Learn from successful entrepreneurs about their journey to the top.",
      date: "2025-04-19",
      keyTakeaways: [
        "Building businesses with family creates trust and shared goals, multiplying success beyond what individuals can achieve! *(512.1 sec)*",
        "The family refurbished historic buildings in Deary, creating community spaces that reflect shared investment and pride! *(366.2 sec)*",
        "Surround yourself with like-minded individuals for support; community fuels resilience and growth in entrepreneurship! *(4194.8 sec)*",
        "Isaac's transparency in storytelling builds audience bonds, sharing both triumphs and trials from his entrepreneurial journey! *(3405.0 sec)*"
      ]
    },
    {
      id: 3,
      title: "Digital Marketing Trends 2025",
      host: "Tech Talks with Sarah",
      hostId: "sarah123",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      summary: "Exploring the latest trends and strategies in digital marketing.",
      date: "2025-04-18",
      keyTakeaways: [
        "After losing Airbnb listings, Isaac shifted to direct bookings, highlighting the importance of owning customer data! *(731.1 sec)*",
        "Isaac's Twitter threads showcase storytelling growth, attracting followers and converting them into loyal subscribers! *(2955.0 sec)*",
        "Engaging content attracts customers and funds future projects, highlighting the compounding effect in hospitality! *(3616.9 sec)*",
        "Personalized touches and high-quality design can turn guest experiences into deep connections and loyalty! *(1442.7 sec)*"
      ]
    },
    {
      id: 4,
      title: "Sustainable Business Practices",
      host: "Entrepreneur Daily",
      hostId: "entre101",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      summary: "How businesses can implement sustainable practices while maintaining profitability.",
      date: "2025-04-17",
      keyTakeaways: [
        "Isaac designed Live Oak Lake for beauty and experience, with every detail planned to create breathtaking moments! *(549.5 sec)*",
        "Elevating design aesthetics improves how businesses feel to customers—taste and design are crucial for success! *(1672.9 sec)*",
        "Personalized touches and high-quality design can turn guest experiences into deep connections and loyalty! *(1442.7 sec)*",
        "The family refurbished historic buildings in Deary, creating community spaces that reflect shared investment and pride! *(366.2 sec)*"
      ]
    }
  ];

  const toggleHost = (hostId: string) => {
    setSelectedHosts(prev =>
      prev.includes(hostId)
        ? prev.filter(id => id !== hostId)
        : [...prev, hostId]
    );
  };

  const toggleEpisodeSelection = (episodeId: number) => {
    setSelectedEpisodes(prev =>
      prev.includes(episodeId)
        ? prev.filter(id => id !== episodeId)
        : [...prev, episodeId]
    );
  };

  const resetSelectionState = () => {
    setIsSelectionMode(false);
    setSelectedEpisodes([]);
  };

  const handleExitSelection = () => {
    resetSelectionState();
  };

  const filteredEpisodes = episodes.filter(episode => {
    const matchesSearch = episode.title.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
                         episode.summary.toLowerCase().includes(activeSearchQuery.toLowerCase());
    const matchesHost = selectedHosts.length === 0 || selectedHosts.includes(episode.hostId);
    return matchesSearch && matchesHost;
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-background">
      <div className="flex flex-col items-center mb-12">
        <DynamicHeadline />
        <div className="w-full max-w-xl space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="What are you interested in?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setActiveSearchQuery(searchQuery);
                  }
                }}
                className="w-full pl-10 pr-4 py-2 text-gray-900 rounded-lg border-2 border-black-400 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 transition-all duration-300">
              {!isSelectionMode ? (
                <Button
                  variant="outline"
                  onClick={() => setIsSelectionMode(true)}
                  className="flex items-center gap-2 whitespace-nowrap border-2"
                >
                  <Check className="h-4 w-4" />
                  Select
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={handleExitSelection}
                    className="flex items-center gap-2 whitespace-nowrap border-2"
                  >
                    <X className="h-4 w-4" />
                    Exit Selection
                  </Button>
                  {selectedEpisodes.length > 0 && (
                    <Button
                      onClick={() => setIsDialogOpen(true)}
                      className="flex items-center gap-2 whitespace-nowrap border-2"
                    >
                      <Check className="h-4 w-4" />
                      Confirm ({selectedEpisodes.length})
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
          <HostChipsContainer
            hosts={hosts}
            selectedHosts={selectedHosts}
            onHostToggle={toggleHost}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEpisodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            isSelectable={isSelectionMode}
            isSelected={selectedEpisodes.includes(episode.id)}
            onSelect={() => toggleEpisodeSelection(episode.id)}
          />
        ))}
      </div>

      <EpisodeSelectionDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        selectedCount={selectedEpisodes.length}
        data_sample={episodes}
      />
    </div>
  );
};

export default Index;

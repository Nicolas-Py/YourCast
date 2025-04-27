import { Search, Check, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import EpisodeCard from "@/components/EpisodeCard";
import HostChipsContainer from "@/components/HostChipsContainer";
import EpisodeSelectionDialog from "@/components/EpisodeSelectionDialog";
import DynamicHeadline from "@/components/DynamicHeadline";
import { Episode } from "@/components/EpisodeCard";
import axios from "axios";
const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHosts, setSelectedHosts] = useState<string[]>([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedEpisodes, setSelectedEpisodes] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

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
    },
  ];

  const toggleHost = (hostId: string) => {
    setSelectedHosts((prev) =>
      prev.includes(hostId)
        ? prev.filter((id) => id !== hostId)
        : [...prev, hostId]
    );
  };

  const toggleEpisodeSelection = (episodeId: string) => {
    setSelectedEpisodes((prev) =>
      prev.includes(episodeId)
        ? prev.filter((id) => id !== episodeId)
        : [...prev, episodeId]
    );
    console.log(selectedEpisodes);
  };

  const resetSelectionState = () => {
    setIsSelectionMode(false);
    setSelectedEpisodes([]);
  };

  const handleExitSelection = () => {
    resetSelectionState();
  };

  async function searchBulletpoints(query, limit = 10) {
    try {
      const response = await axios.get("http://localhost:8000/search", {
        params: {
          query: query,
          limit: limit,
        },
      });
      console.log(response.data.results);
      setEpisodes(response.data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
      throw error;
    }
  }

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
                  if (e.key === "Enter") {
                    searchBulletpoints(searchQuery);
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

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {episodes.map((episode) => (
          <div key={episode.id} className="mb-6 break-inside-avoid">
            <EpisodeCard
              episode={episode}
              isSelectable={isSelectionMode}
              isSelected={selectedEpisodes.includes(episode.id)}
              onSelect={() => toggleEpisodeSelection(episode.id)}
            />
          </div>
        ))}
      </div>

      <EpisodeSelectionDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        selectedCount={selectedEpisodes.length}
        data_sample={selectedEpisodes.map((id) => episodes.find((episode) => episode.id === id))}
      />
    </div>
  );
};

export default Index;


import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import EpisodeCard from "@/components/EpisodeCard";
import HostChip from "@/components/HostChip";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHosts, setSelectedHosts] = useState<string[]>([]);

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
    },
    {
      id: 2,
      title: "Startup Success Stories",
      host: "Entrepreneur Daily",
      hostId: "entre101",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      summary: "Learn from successful entrepreneurs about their journey to the top.",
      date: "2025-04-19",
    },
  ];

  const toggleHost = (hostId: string) => {
    setSelectedHosts(prev =>
      prev.includes(hostId)
        ? prev.filter(id => id !== hostId)
        : [...prev, hostId]
    );
  };

  const filteredEpisodes = episodes.filter(episode => {
    const matchesSearch = episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         episode.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesHost = selectedHosts.length === 0 || selectedHosts.includes(episode.hostId);
    return matchesSearch && matchesHost;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Discover Podcasts</h1>
        <div className="w-full max-w-xl space-y-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search episodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-gray-900 rounded-lg border border-gray-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          <div className="flex flex-wrap gap-2">
            {hosts.map((host) => (
              <HostChip
                key={host.id}
                host={host}
                isSelected={selectedHosts.includes(host.id)}
                onClick={() => toggleHost(host.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEpisodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default Index;

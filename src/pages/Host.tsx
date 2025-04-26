
import { useParams } from "react-router-dom";
import EpisodeCard from "@/components/EpisodeCard";

const Host = () => {
  const { id } = useParams();

  // Placeholder data - would come from your API
  const host = {
    id: "sarah123",
    name: "Tech Talks with Sarah",
    episodes: [
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
        id: 3,
        title: "Machine Learning Basics",
        host: "Tech Talks with Sarah",
        hostId: "sarah123",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        summary: "An introduction to machine learning concepts and applications.",
        date: "2025-04-18",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{host.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {host.episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default Host;

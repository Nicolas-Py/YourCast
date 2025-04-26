import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Episode = () => {
  const { id } = useParams();

  // Placeholder data - would come from your API
  const episode = {
    id: 1,
    title: "The Future of AI",
    host: "Tech Talks with Sarah",
    hostId: "sarah123",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    summary: "A fascinating discussion about artificial intelligence and its impact on society.",
    date: "2025-04-20",
    aiSummary: "In this episode, we explore the rapidly evolving landscape of artificial intelligence and its implications for society. The discussion covers ethical considerations, practical applications, and future predictions.",
    bulletPoints: [
      "Introduction to current AI trends",
      "Discussion of ethical implications",
      "Real-world applications in various industries",
      "Future predictions and potential impacts",
      "Recommendations for staying informed"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={episode.image} 
          alt={episode.title} 
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{episode.title}</h1>
              <p className="text-blue-600 hover:text-blue-800">
                <Link to={`/host/${episode.hostId}`} className="hover:underline">
                  {episode.host}
                </Link>
              </p>
              <p className="text-gray-500 text-sm">{new Date(episode.date).toLocaleDateString()}</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <BookmarkPlus className="h-5 w-5" />
              Save Episode
            </Button>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Summary</h2>
            <p className="text-gray-700 leading-relaxed">{episode.aiSummary}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Key Points</h2>
            <ul className="list-disc pl-5 space-y-2">
              {episode.bulletPoints.map((point, index) => (
                <li key={index} className="text-gray-700">{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;

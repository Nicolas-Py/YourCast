import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { SpotifyIcon, ApplePodcastsIcon, GooglePodcastsIcon, YouTubeIcon } from "@/components/PlatformIcons";

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
    ],
    category: "Technology",
    platformLinks: {
      spotify: "https://spotify.com/episode/123",
      apple: "https://apple.com/episode/123",
      youtube: "https://youtube.com/episode/123",
      google: "https://google.com/episode/123"
    },
    similarEpisodes: [
      {
        id: 2,
        title: "AI Ethics in Practice",
        thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        teaser: "Exploring real-world ethical challenges in AI implementation."
      },
      {
        id: 3,
        title: "Machine Learning Fundamentals",
        thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        teaser: "A beginner's guide to understanding machine learning concepts."
      },
      {
        id: 4,
        title: "The Future of Work with AI",
        thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        teaser: "How AI is reshaping the workplace and job market."
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <div className="flex justify-between items-start mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Episode Summary</h2>
              <p className="text-gray-700 leading-relaxed">{episode.aiSummary}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Key Takeaways</h2>
              <ul className="list-disc pl-5 space-y-2">
                {episode.bulletPoints.map((point, index) => (
                  <li key={index} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">Listen On</h2>
              <div className="flex gap-4">
                <a href={episode.platformLinks.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                  <SpotifyIcon />
                </a>
                <a href={episode.platformLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                  <YouTubeIcon />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Category</h2>
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                {episode.category}
              </span>
            </div>
          </div>
        </div>

        {/* Similar Episodes Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Similar Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {episode.similarEpisodes.map((similar) => (
              <Link 
                to={`/episode/${similar.id}`} 
                key={similar.id}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={similar.thumbnail} 
                    alt={similar.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {similar.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {similar.teaser}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;

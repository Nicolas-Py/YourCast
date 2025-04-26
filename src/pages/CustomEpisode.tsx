import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";
import AudioPlayer from "@/components/AudioPlayer";
import { useEffect, useState } from "react";

const CustomEpisode = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generatePodcast = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://4a43-2001-4ca0-0-f233-4c6b-473c-197a-9a61.ngrok-free.app/generate-podcast', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ episodes }),
        });

        if (!response.ok) {
          throw new Error('Failed to generate podcast');
        }

        const data = await response.json();
        // Handle the response data here
        console.log('Generated podcast data:', data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error generating podcast:', err);
      } finally {
        setIsLoading(false);
      }
    };

    generatePodcast();
  }, []);

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
    audioUrl: "https://example.com/audio.mp3",
    duration: "45:30",
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
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Banner Image */}
        <div className="relative w-full h-[400px]">
          <img 
            src={episode.image} 
            alt={episode.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-4xl font-bold mb-2 serif-headline">{episode.title}</h1>
            <p className="text-blue-200 hover:text-blue-100">
              <Link to={`/host/${episode.hostId}`} className="hover:underline">
                {episode.host}
              </Link>
            </p>
            <p className="text-gray-200 text-sm">{new Date(episode.date).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="p-6">
          {/* Audio Player Section */}
          <AudioPlayer 
            defaultAudioUrl={episode.audioUrl}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 serif-headline">Episode Summary</h2>
                <p className="text-gray-700 leading-relaxed">{episode.aiSummary}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 serif-headline">Key Takeaways</h2>
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
                <h2 className="text-xl font-semibold mb-3 serif-headline">Category</h2>
                <span className="inline-block border-2 border-black px-4 py-2 rounded-full text-sm font-medium">
                  {episode.category}
                </span>
              </div>
            </div>
          </div>

          {/* Similar Episodes Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 serif-headline">Similar Episodes</h2>
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
    </div>
  );
};

export default CustomEpisode; 
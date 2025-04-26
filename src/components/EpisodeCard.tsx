
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Circle } from "lucide-react";

interface Episode {
  id: number;
  title: string;
  host: string;
  hostId: string;
  image: string;
  summary: string;
  date: string;
}

const EpisodeCard = ({ episode }: { episode: Episode }) => {
  return (
    <Link to={`/episode/${episode.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
        <div className="absolute top-4 right-4 z-10">
          <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
            <AvatarImage 
              src={episode.image} 
              alt={`${episode.title} logo`} 
            />
            <AvatarFallback>
              <Circle className="h-6 w-6 text-gray-300" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{episode.title}</h3>
          <Link 
            to={`/host/${episode.hostId}`}
            className="text-sm text-blue-600 hover:text-blue-800 mb-2 block"
            onClick={(e) => e.stopPropagation()}
          >
            {episode.host}
          </Link>
          <p className="text-gray-600 text-sm line-clamp-2">{episode.summary}</p>
          <p className="text-gray-500 text-xs mt-2">{new Date(episode.date).toLocaleDateString()}</p>
        </div>
      </Card>
    </Link>
  );
};

export default EpisodeCard;

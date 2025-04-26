import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Circle, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Episode {
  id: number;
  title: string;
  host: string;
  hostId: string;
  image: string;
  summary: string;
  date: string;
}

interface EpisodeCardProps {
  episode: Episode;
  isSelected?: boolean;
  onSelect?: () => void;
  isSelectable?: boolean;
}

const EpisodeCard = ({ episode, isSelected, onSelect, isSelectable }: EpisodeCardProps) => {
  const cardContent = (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        isSelectable && "cursor-pointer hover:scale-[1.02]",
        isSelected && "ring-2 ring-primary ring-offset-2"
      )}
      onClick={isSelectable ? onSelect : undefined}
    >
      {isSelected && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 animate-shimmer" />
      )}
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <img
            src={episode.image}
            alt={episode.title}
            className="w-full h-full object-cover"
          />
          {isSelected && (
            <div className="absolute top-2 right-2 bg-primary/90 text-white p-1 rounded-full">
              <Check className="h-4 w-4" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{episode.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{episode.host}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{episode.summary}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <p className="text-xs text-gray-400">{episode.date}</p>
      </CardFooter>
    </Card>
  );

  // Only wrap in Link when not in selection mode
  if (isSelectable) {
    return cardContent;
  }

  return (
    <Link to={`/episode/${episode.id}`}>
      {cardContent}
    </Link>
  );
};

export default EpisodeCard;

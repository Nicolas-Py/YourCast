
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Circle } from "lucide-react";

interface HostChipProps {
  host: {
    id: string;
    name: string;
    image: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

const HostChip = ({ host, isSelected, onClick }: HostChipProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-2 py-1 rounded-full border transition-all duration-300 hover:border-purple-500 ${
        isSelected ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:bg-purple-50'
      }`}
    >
      <Avatar className="w-8 h-8">
        <AvatarImage src={host.image} alt={host.name} />
        <AvatarFallback>
          <Circle className="h-4 w-4 text-gray-300" />
        </AvatarFallback>
      </Avatar>
      <span>
        {host.name}
      </span>
    </button>
  );
};

export default HostChip;

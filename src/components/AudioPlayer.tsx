import { useRef, useState } from "react";

interface AudioPlayerProps {
  defaultAudioUrl?: string;
}

const AudioPlayer = ({ defaultAudioUrl }: AudioPlayerProps) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="mb-8 bg-gray-50 rounded-lg p-6">
      <div className="flex flex-col gap-4">
        <audio
          ref={audioRef}
          src={audioUrl || defaultAudioUrl}
          controls
          className="w-full"
        />
      </div>
    </div>
  );
};

export default AudioPlayer; 
import { useRef, useState } from "react";

interface AudioPlayerProps {
  defaultAudioUrl?: string;
}

const AudioPlayer = ({ defaultAudioUrl }: AudioPlayerProps) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAudioUrl(URL.createObjectURL(file));
  };

  return (
    <div className="mb-8 bg-gray-50 rounded-lg p-6">
      <div className="flex flex-col gap-4">
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-primary file:text-white
            hover:file:bg-primary/90"
        />
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
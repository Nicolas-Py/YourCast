import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import WaveAnimation from './WaveAnimation';

interface EpisodeSelectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedCount: number;
}

const EpisodeSelectionDialog = ({ isOpen, onClose, onConfirm, selectedCount }: EpisodeSelectionDialogProps) => {
  const [length, setLength] = useState<string>("precise");
  const [tone, setTone] = useState<string>("neutral");
  const [style, setStyle] = useState<string>("single");

  const [isAnimating, setIsAnimating] = useState(false);
  const [waveIndex, setWaveIndex] = useState(0);

  const handleWaveChange = () => {
    setWaveIndex((prev) => (prev + 1) % 7); // 7 is the number of wave patterns
  };

  const handleSelectionChange = (setter: (value: string) => void, value: string) => {
    setter(value);
    handleWaveChange();
  };

  const handleGenerateAudio = () => {
    setIsAnimating(true);
    // onConfirm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="relative min-h-[200px]">
        <div className="absolute inset-0 overflow-hidden -mx-6">
            <WaveAnimation 
              isAnimating={isAnimating}
              currentWaveIndex={waveIndex}
              onWaveChange={handleWaveChange}
              className="w-full h-full"
            />
          </div>
          <div className="relative z-10 pt-8">
            <DialogTitle>Confirm Selection</DialogTitle>
            <DialogDescription>
              You have selected {selectedCount} episode{selectedCount !== 1 ? 's' : ''}. Please select your preferences below.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label>Length</Label>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={length === "precise" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSelectionChange(setLength, "precise")}
                className="rounded-full"
              >
                Precise
              </Button>
              <Button
                variant={length === "elaborate" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSelectionChange(setLength, "elaborate")}
                className="rounded-full"
              >
                Elaborate
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tone</Label>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={tone === "neutral" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSelectionChange(setTone, "neutral")}
                className="rounded-full"
              >
                Neutral
              </Button>
              <Button
                variant={tone === "funny" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSelectionChange(setTone, "funny")}
                className="rounded-full"
              >
                Funny
              </Button>
              <Button
                variant={tone === "professional" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSelectionChange(setTone, "professional")}
                className="rounded-full"
              >
                Professional
              </Button>
              <Button
                variant={tone === "easy" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSelectionChange(setTone, "easy")}
                className="rounded-full"
              >
                Easy Language
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Style</Label>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={style === "single" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSelectionChange(setStyle, "single")}
                className="rounded-full"
              >
                Single Reader
              </Button>
              <Button
                variant={style === "conversation" ? "default" : "outline"}
                size="sm"
                onClick={() => handleSelectionChange(setStyle, "conversation")}
                className="rounded-full"
              >
                Conversation
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Button>
          <Button onClick={handleGenerateAudio}>
            <Check className="mr-2 h-4 w-4" />
            Generate Audio
          </Button>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EpisodeSelectionDialog; 
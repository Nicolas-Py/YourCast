import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface EpisodeSelectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedCount: number;
}

const WaveAnimation = ({ isConfirming }: { isConfirming: boolean }) => {
  return (
    <div className="relative h-20 w-full overflow-hidden">
      <svg
        className={cn(
          "absolute w-full h-full",
          isConfirming ? "animate-wave-confirm" : "animate-wave"
        )}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          className={cn(
            "transition-colors duration-300",
            isConfirming ? "fill-primary" : "fill-muted"
          )}
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

const EpisodeSelectionDialog = ({ isOpen, onClose, onConfirm, selectedCount }: EpisodeSelectionDialogProps) => {
  const [length, setLength] = useState<string>("precise");
  const [tone, setTone] = useState<string>("neutral");
  const [style, setStyle] = useState<string>("single");
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = () => {
    setIsConfirming(true);
    setTimeout(() => {
      onConfirm();
      setIsConfirming(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0">
        <WaveAnimation isConfirming={isConfirming} />
        <div className="px-6">
          <DialogHeader>
            <DialogTitle>Confirm Selection</DialogTitle>
            <DialogDescription>
              You have selected {selectedCount} episode{selectedCount !== 1 ? 's' : ''}. Please select your preferences below.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label>Length</Label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={length === "precise" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLength("precise")}
                  className="rounded-full"
                >
                  Precise
                </Button>
                <Button
                  variant={length === "elaborate" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLength("elaborate")}
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
                  onClick={() => setTone("neutral")}
                  className="rounded-full"
                >
                  Neutral
                </Button>
                <Button
                  variant={tone === "funny" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTone("funny")}
                  className="rounded-full"
                >
                  Funny
                </Button>
                <Button
                  variant={tone === "professional" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTone("professional")}
                  className="rounded-full"
                >
                  Professional
                </Button>
                <Button
                  variant={tone === "easy" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTone("easy")}
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
                  onClick={() => setStyle("single")}
                  className="rounded-full"
                >
                  Single Reader
                </Button>
                <Button
                  variant={style === "conversation" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStyle("conversation")}
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
            <Button onClick={handleConfirm} disabled={isConfirming}>
              <Check className="mr-2 h-4 w-4" />
              Generate Audio
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EpisodeSelectionDialog; 
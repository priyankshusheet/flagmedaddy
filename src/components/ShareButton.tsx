
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Share } from 'lucide-react';
import { TraitResult } from './TraitAnalyzer';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  result: TraitResult;
}

export const ShareButton = ({ result }: ShareButtonProps) => {
  const [isSharing, setIsSharing] = useState(false);
  const { toast } = useToast();

  const handleShare = async () => {
    setIsSharing(true);
    
    const shareText = `🚩 FLAG CHECKER 🟩\n\n"${result.input}"\n\n${result.isRedFlag ? '🚩 RED FLAG!' : '🟩 GREEN FLAG!'}\n\n${result.explanation}\n\nCheck your traits at lovable.dev!`;
    
    try {
      if (navigator.share) {
        // Use native sharing if available (mobile)
        await navigator.share({
          title: 'Flag Checker Result',
          text: shareText,
        });
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(shareText);
        toast({
          title: "Copied to clipboard!",
          description: "Share this savage verdict with your friends 😈",
        });
      }
    } catch (error) {
      // Manual fallback options
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
      window.open(twitterUrl, '_blank');
    }
    
    setIsSharing(false);
  };

  return (
    <Button
      onClick={handleShare}
      disabled={isSharing}
      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
    >
      <Share className="w-4 h-4 mr-2" />
      {isSharing ? 'SHARING...' : 'SHARE THE SAVAGE TRUTH'}
    </Button>
  );
};

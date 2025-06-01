
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Twitter } from 'lucide-react';
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
    
    const shareText = `🚩 Is It a Red Flag? 🟩\n\n"${result.input}"\n\n${result.isRedFlag ? '🚩 RED FLAG!' : '🟩 GREEN FLAG!'}\n\n${result.explanation}\n\nCheck your traits too!`;
    
    try {
      if (navigator.share) {
        // Use native sharing if available (mobile)
        await navigator.share({
          title: 'Is It a Red Flag? Result',
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
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
      <Button
        onClick={handleShare}
        disabled={isSharing}
        className="bg-electric-purple hover:bg-purple-hover text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
      >
        {isSharing ? 'Sharing...' : 'Share the Savage Truth'}
      </Button>
      
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="border-medium-gray text-medium-gray hover:text-almost-black dark:hover:text-white transition-colors rounded-lg"
          onClick={() => {
            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`🚩 Is It a Red Flag? 🟩\n\n"${result.input}"\n\n${result.isRedFlag ? '🚩 RED FLAG!' : '🟩 GREEN FLAG!'}\n\nCheck your traits too!`)}`;
            window.open(twitterUrl, '_blank');
          }}
        >
          <Twitter className="w-4 h-4" />
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          className="border-medium-gray text-medium-gray hover:text-almost-black dark:hover:text-white transition-colors rounded-lg"
          onClick={() => {
            const instagramUrl = 'https://www.instagram.com/';
            window.open(instagramUrl, '_blank');
          }}
        >
          <Instagram className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

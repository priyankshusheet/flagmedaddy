
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResultCard } from './ResultCard';
import { HistoryLog } from './HistoryLog';
import { analyzeTraits } from '@/utils/traitDatabase';
import { Dice6 } from 'lucide-react';

export interface TraitResult {
  input: string;
  isRedFlag: boolean;
  explanation: string;
  timestamp: Date;
}

export const TraitAnalyzer = () => {
  const [input, setInput] = useState('');
  const [currentResult, setCurrentResult] = useState<TraitResult | null>(null);
  const [history, setHistory] = useState<TraitResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (!input.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis delay for dramatic effect
    setTimeout(() => {
      const result = analyzeTraits(input.trim());
      const traitResult: TraitResult = {
        input: input.trim(),
        isRedFlag: result.isRedFlag,
        explanation: result.explanation,
        timestamp: new Date()
      };
      
      setCurrentResult(traitResult);
      setHistory(prev => [traitResult, ...prev.slice(0, 6)]); // Keep only last 7 items
      setInput('');
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleRandomTrait = () => {
    const randomTraits = [
      "Never says please or thank you",
      "Always on their phone during dates",
      "Remembers your coffee order",
      "Talks to waiters rudely",
      "Pays for first date without making it weird",
      "Still follows all their exes on social media",
      "Makes their bed every morning",
      "Doesn't tip service workers",
      "Asks about your day and actually listens",
      "Shows up 30 minutes late without texting"
    ];
    
    const randomTrait = randomTraits[Math.floor(Math.random() * randomTraits.length)];
    setInput(randomTrait);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isAnalyzing) {
      handleAnalyze();
    }
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 border border-soft-gray dark:border-gray-700">
        <div className="space-y-4">
          <div className="space-y-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a trait, behavior, or situation..."
              className="text-lg py-6 px-4 rounded-xl border-2 border-soft-gray dark:border-gray-600 bg-white dark:bg-gray-700 text-almost-black dark:text-white placeholder:text-medium-gray focus:border-electric-purple focus:ring-2 focus:ring-electric-purple/20 transition-all duration-200"
              disabled={isAnalyzing}
            />
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAnalyze}
                disabled={!input.trim() || isAnalyzing}
                className="flex-1 bg-electric-purple hover:bg-purple-hover text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-50"
              >
                {isAnalyzing ? "Checking..." : "Check"}
              </Button>
              
              <Button
                onClick={handleRandomTrait}
                variant="outline"
                className="border-2 border-surprise-purple text-surprise-purple hover:bg-surprise-purple hover:text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                disabled={isAnalyzing}
              >
                <Dice6 className="w-5 h-5 mr-2" />
                Surprise Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Result Section */}
      {currentResult && (
        <div className="animate-fade-in">
          <ResultCard result={currentResult} />
        </div>
      )}

      {/* History Section */}
      {history.length > 0 && (
        <div className="animate-fade-in">
          <HistoryLog history={history} onClearHistory={() => setHistory([])} />
        </div>
      )}
    </div>
  );
};

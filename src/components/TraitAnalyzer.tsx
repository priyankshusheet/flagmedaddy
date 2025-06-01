
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResultCard } from './ResultCard';
import { HistoryLog } from './HistoryLog';
import { analyzeTraits } from '@/utils/traitDatabase';
import { Shuffle } from 'lucide-react';

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
      setHistory(prev => [traitResult, ...prev]);
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
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Input Section */}
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border-4 border-gray-100">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter any trait, behavior, or situation..."
              className="flex-1 text-lg py-6 px-4 rounded-xl border-2 focus:border-purple-400"
              disabled={isAnalyzing}
            />
            <Button
              onClick={handleAnalyze}
              disabled={!input.trim() || isAnalyzing}
              className="bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 text-white font-bold py-6 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
            >
              {isAnalyzing ? "🔍 ANALYZING..." : "🚩 CHECK FLAG 🟩"}
            </Button>
          </div>
          
          <Button
            onClick={handleRandomTrait}
            variant="outline"
            className="w-full md:w-auto border-2 border-purple-300 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-6 rounded-xl"
            disabled={isAnalyzing}
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Random Trait
          </Button>
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
          <HistoryLog history={history} />
        </div>
      )}
    </div>
  );
};

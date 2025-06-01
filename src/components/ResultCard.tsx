
import { TraitResult } from './TraitAnalyzer';
import { ShareButton } from './ShareButton';

interface ResultCardProps {
  result: TraitResult;
}

export const ResultCard = ({ result }: ResultCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-soft-gray dark:border-gray-700">
      <div className="text-center space-y-6">
        {/* Flag Icon with bounce animation */}
        <div className="text-8xl animate-bounce-in">
          {result.isRedFlag ? '🚩' : '🟩'}
        </div>
        
        {/* Verdict */}
        <div className={`text-3xl font-bold ${
          result.isRedFlag ? 'text-red-flag' : 'text-green-flag'
        }`}>
          {result.isRedFlag ? 'RED FLAG!' : 'GREEN FLAG!'}
        </div>
        
        {/* Input Display */}
        <div className="bg-off-white dark:bg-gray-700 rounded-2xl p-4 border border-soft-gray dark:border-gray-600">
          <p className="text-app-result text-almost-black dark:text-white font-semibold">
            "{result.input}"
          </p>
        </div>
        
        {/* Savage Explanation with typing effect styling */}
        <div className={`text-lg font-medium leading-relaxed italic ${
          result.isRedFlag ? 'text-red-flag' : 'text-green-flag'
        }`}>
          {result.explanation}
        </div>
        
        {/* Share Button */}
        <ShareButton result={result} />
      </div>
    </div>
  );
};

import { TraitResult } from './TraitAnalyzer';
import { ShareButton } from './ShareButton';

interface ResultCardProps {
  result: TraitResult;
}

export const ResultCard = ({ result }: ResultCardProps) => {
  return (
    <div className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-4 transition-all duration-500 animate-bounce-in ${
      result.isRedFlag 
        ? 'border-red-flag shadow-red-flag/30 hover:shadow-red-flag/50' 
        : 'border-green-flag shadow-green-flag/30 hover:shadow-green-flag/50'
    }`}>
      <div className="text-center space-y-6">
        {/* Flag Icon with enhanced animation */}
        <div className={`text-8xl transition-all duration-300 ${
          result.isRedFlag ? 'animate-pulse animate-bounce' : 'animate-spin animate-bounce'
        }`}>
          {result.isRedFlag ? '🚩' : '🟩'}
        </div>
        
        {/* Verdict with gradient */}
        <div className={`text-4xl font-black tracking-tight ${
          result.isRedFlag 
            ? 'bg-gradient-to-r from-red-flag via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse' 
            : 'bg-gradient-to-r from-green-flag via-emerald-400 to-lime-400 bg-clip-text text-transparent animate-pulse'
        }`}>
          {result.isRedFlag ? 'RED FLAG!' : 'GREEN FLAG!'}
        </div>
        
        {/* Input Display with glow effect */}
        <div className={`rounded-2xl p-4 border-2 transition-all duration-300 ${
          result.isRedFlag 
            ? 'bg-red-50 dark:bg-red-900/20 border-red-flag/30 shadow-red-flag/20' 
            : 'bg-green-50 dark:bg-green-900/20 border-green-flag/30 shadow-green-flag/20'
        }`}>
          <p className="text-app-result text-almost-black dark:text-white font-bold animate-fade-in">
            "{result.input}"
          </p>
        </div>
        
        {/* Savage Explanation with typing effect styling */}
        <div className={`text-xl font-bold leading-relaxed italic transition-all duration-300 ${
          result.isRedFlag 
            ? 'text-red-flag animate-pulse' 
            : 'text-green-flag animate-pulse'
        }`}>
          {result.explanation}
        </div>
        
        {/* Share Button */}
        <div className="animate-fade-in animation-delay-500">
          <ShareButton result={result} />
        </div>
      </div>
    </div>
  );
};

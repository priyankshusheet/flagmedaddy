
import { TraitResult } from './TraitAnalyzer';
import { ShareButton } from './ShareButton';

interface ResultCardProps {
  result: TraitResult;
}

export const ResultCard = ({ result }: ResultCardProps) => {
  return (
    <div className={`rounded-3xl shadow-2xl p-6 md:p-8 border-4 transform transition-all duration-500 ${
      result.isRedFlag 
        ? 'bg-gradient-to-br from-red-50 to-red-100 border-red-300' 
        : 'bg-gradient-to-br from-green-50 to-green-100 border-green-300'
    }`}>
      <div className="text-center space-y-6">
        {/* Flag Icon */}
        <div className="text-8xl md:text-9xl animate-scale-in">
          {result.isRedFlag ? '🚩' : '🟩'}
        </div>
        
        {/* Verdict */}
        <div className={`text-3xl md:text-4xl font-black ${
          result.isRedFlag ? 'text-red-600' : 'text-green-600'
        }`}>
          {result.isRedFlag ? 'RED FLAG!' : 'GREEN FLAG!'}
        </div>
        
        {/* Input Display */}
        <div className="bg-white/80 rounded-2xl p-4 border-2 border-gray-200">
          <p className="text-lg md:text-xl font-semibold text-gray-800">
            "{result.input}"
          </p>
        </div>
        
        {/* Savage Explanation */}
        <div className={`text-lg md:text-xl font-bold leading-relaxed ${
          result.isRedFlag ? 'text-red-700' : 'text-green-700'
        }`}>
          {result.explanation}
        </div>
        
        {/* Share Button */}
        <ShareButton result={result} />
      </div>
    </div>
  );
};


import { TraitResult } from './TraitAnalyzer';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HistoryLogProps {
  history: TraitResult[];
  onClearHistory: () => void;
}

export const HistoryLog = ({ history, onClearHistory }: HistoryLogProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 border border-soft-gray dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-almost-black dark:text-white">
          Recent Checks
        </h2>
        <Button
          onClick={onClearHistory}
          variant="ghost"
          size="sm"
          className="text-medium-gray hover:text-almost-black dark:hover:text-white transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {history.map((result, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-md animate-slide-in-right ${
              result.isRedFlag
                ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/20'
                : 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/20'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start space-x-3">
              <span className="text-2xl flex-shrink-0">
                {result.isRedFlag ? '🚩' : '🟩'}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-almost-black dark:text-white text-sm truncate">
                  "{result.input}"
                </p>
                <p className={`text-xs mt-1 ${
                  result.isRedFlag ? 'text-red-flag' : 'text-green-flag'
                }`}>
                  {result.explanation.slice(0, 80)}
                  {result.explanation.length > 80 ? '...' : ''}
                </p>
              </div>
              <span className="text-xs text-medium-gray flex-shrink-0">
                {result.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

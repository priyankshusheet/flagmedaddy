
import { TraitResult } from './TraitAnalyzer';

interface HistoryLogProps {
  history: TraitResult[];
}

export const HistoryLog = ({ history }: HistoryLogProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border-4 border-gray-100">
      <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-6 text-center">
        📋 SESSION HISTORY
      </h2>
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {history.map((result, index) => (
          <div
            key={index}
            className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:shadow-md ${
              result.isRedFlag
                ? 'bg-red-50 border-red-200 hover:bg-red-100'
                : 'bg-green-50 border-green-200 hover:bg-green-100'
            }`}
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">
                  {result.isRedFlag ? '🚩' : '🟩'}
                </span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">
                    "{result.input}"
                  </p>
                  <p className={`text-xs md:text-sm font-medium ${
                    result.isRedFlag ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {result.explanation}
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                {result.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

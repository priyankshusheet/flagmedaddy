
import { TraitAnalyzer } from '@/components/TraitAnalyzer';

const Index = () => {
  return (
    <div className="min-h-screen bg-off-white dark:bg-charcoal transition-colors duration-300">
      <div className="container mx-auto px-5 py-8 max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-app-title text-almost-black dark:text-white mb-2 tracking-tight">
            Is It a Red Flag? <span className="text-2xl">🚩🟩</span>
          </h1>
          <p className="text-app-subtitle text-medium-gray dark:text-gray-300">
            Enter a trait, find out if it's 🚩 or 🟩 — with savage reasons
          </p>
        </div>
        <TraitAnalyzer />
      </div>
    </div>
  );
};

export default Index;

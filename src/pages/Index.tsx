
import { TraitAnalyzer } from '@/components/TraitAnalyzer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent mb-4">
            🚩 FLAG CHECKER 🟩
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Get the savage truth about any trait, behavior, or situation
          </p>
        </div>
        <TraitAnalyzer />
      </div>
    </div>
  );
};

export default Index;

import { TraitAnalyzer } from '@/components/TraitAnalyzer';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white via-pink-50 to-purple-50 dark:from-charcoal dark:via-gray-900 dark:to-purple-900 transition-all duration-500">
      <div className="container mx-auto px-5 py-8 max-w-lg relative">
        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4">
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="sm"
            className="bg-white/80 dark:bg-gray-800/80 border-2 border-electric-purple/30 hover:border-electric-purple hover:scale-110 transition-all duration-200"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-electric-purple" />
            ) : (
              <Sun className="w-4 h-4 text-yellow-400" />
            )}
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-app-title bg-gradient-to-r from-electric-purple via-pink-500 to-red-flag bg-clip-text text-transparent mb-2 tracking-tight animate-pulse">
            Is It a Red Flag? <span className="text-4xl animate-bounce inline-block">🚩🟩</span>
          </h1>
          <p className="text-app-subtitle text-medium-gray dark:text-gray-300 animate-fade-in">
            Enter a trait, find out if it's 🚩 or 🟩 — with savage reasons
          </p>
        </div>
        <TraitAnalyzer />
      </div>
    </div>
  );
};

export default Index;

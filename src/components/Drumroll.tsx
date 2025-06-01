
import { useEffect, useState } from 'react';

interface DrumrollProps {
  isActive: boolean;
  onComplete: () => void;
}

export const Drumroll = ({ isActive, onComplete }: DrumrollProps) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (isActive) {
      let dotCount = 0;
      const interval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        setDots('.'.repeat(dotCount));
      }, 300);

      const timer = setTimeout(() => {
        clearInterval(interval);
        onComplete();
      }, 1500);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-40">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-bounce">🥁</div>
        <div className="text-3xl font-bold text-white animate-pulse">
          Drumroll{dots}
        </div>
        <div className="text-lg text-gray-300 mt-2">
          Preparing your savage verdict...
        </div>
      </div>
    </div>
  );
};

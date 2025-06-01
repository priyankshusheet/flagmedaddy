
import { useEffect, useState } from 'react';

interface EmojiBurstProps {
  isActive: boolean;
  isRedFlag: boolean;
  onComplete: () => void;
}

export const EmojiBurst = ({ isActive, isRedFlag, onComplete }: EmojiBurstProps) => {
  const [emojis, setEmojis] = useState<Array<{ id: number; emoji: string; x: number; y: number; delay: number }>>([]);

  const redFlagEmojis = ['🚩', '‼️', '🚨', '🆘', '⚠️', '😈', '😭'];
  const greenFlagEmojis = ['🥰', '😍', '😇', '🥳', '😘', '🤩', '🎉'];

  useEffect(() => {
    if (isActive) {
      const emojiArray = isRedFlag ? redFlagEmojis : greenFlagEmojis;
      const newEmojis = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        emoji: emojiArray[Math.floor(Math.random() * emojiArray.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 0.5
      }));
      setEmojis(newEmojis);

      const timer = setTimeout(() => {
        setEmojis([]);
        onComplete();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isActive, isRedFlag]);

  if (!isActive || emojis.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className={`absolute text-4xl animate-bounce ${
            isRedFlag ? 'animate-pulse' : 'animate-spin'
          }`}
          style={{
            left: `${emoji.x}%`,
            top: `${emoji.y}%`,
            animationDelay: `${emoji.delay}s`,
            animationDuration: isRedFlag ? '0.5s' : '1s'
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
};


class SoundManager {
  private audioContext: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  private async initAudio() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  async playDrumroll() {
    await this.initAudio();
    if (!this.audioContext) return;

    // Create drumroll sound effect
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Drumroll parameters
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(80, this.audioContext.currentTime);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, this.audioContext.currentTime);

    // Tremolo effect for drumroll
    const tremolo = this.audioContext.createOscillator();
    const tremoloGain = this.audioContext.createGain();
    tremolo.frequency.setValueAtTime(15, this.audioContext.currentTime);
    tremolo.connect(tremoloGain);
    tremoloGain.connect(gainNode.gain);
    tremoloGain.gain.setValueAtTime(0.3, this.audioContext.currentTime);

    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 1.5);

    oscillator.start();
    tremolo.start();
    oscillator.stop(this.audioContext.currentTime + 1.5);
    tremolo.stop(this.audioContext.currentTime + 1.5);
  }

  async playRedFlagSound() {
    await this.initAudio();
    if (!this.audioContext) return;

    // Create danger/alarm sound
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
    oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime + 0.2);

    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);

    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.3);

    // Vibration
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }
  }

  async playGreenFlagSound() {
    await this.initAudio();
    if (!this.audioContext) return;

    // Create celebration sound
    const oscillator1 = this.audioContext.createOscillator();
    const oscillator2 = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator1.type = 'sine';
    oscillator2.type = 'sine';
    
    // Happy chord progression
    oscillator1.frequency.setValueAtTime(523, this.audioContext.currentTime); // C
    oscillator2.frequency.setValueAtTime(659, this.audioContext.currentTime); // E
    oscillator1.frequency.setValueAtTime(784, this.audioContext.currentTime + 0.2); // G
    oscillator2.frequency.setValueAtTime(1047, this.audioContext.currentTime + 0.2); // C

    gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);

    oscillator1.start();
    oscillator2.start();
    oscillator1.stop(this.audioContext.currentTime + 0.5);
    oscillator2.stop(this.audioContext.currentTime + 0.5);

    // Gentle vibration
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 100]);
    }
  }
}

export const soundManager = new SoundManager();

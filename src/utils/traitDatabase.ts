
interface TraitAnalysis {
  isRedFlag: boolean;
  explanation: string;
}

const redFlagTraits: { [key: string]: string } = {
  // Communication red flags
  "never apologizes": "Accountability? Never heard of her.",
  "always interrupts": "Main character syndrome detected.",
  "doesn't listen": "Why have a conversation when you can just wait for your turn to speak? Revolutionary communication strategy! 🙄",
  "interrupts you constantly": "Main character syndrome detected.",
  
  // Dating red flags
  "still talks to exes": "It's not emotional maturity, it's emotional damage.",
  "still talks to their ex": "It's not emotional maturity, it's emotional damage.",
  "doesn't pay on dates": "Chivalry isn't dead, but apparently your wallet is. At least be upfront about your financial situation, love. 💳",
  "always on phone": "Dating you or their notifications?",
  "always on their phone": "Dating you or their notifications?",
  "shows up late": "They respect your time... just not enough.",
  "always late": "They respect your time... just not enough.",
  "ghosted you once": "If Casper's in the chat, you're not.",
  "cancels plans last minute": "You're Plan B, not priority.",
  "refuses to define the relationship": "Undefined = uninterested.",
  "never makes the first move": "This ain't a one-person show.",
  "texts only at night": "You're not a priority, you're a pastime.",
  
  // Personality red flags
  "never admits fault": "Accountability called, but it went straight to voicemail. This is giving emotional toddler vibes. 👶",
  "gossips constantly": "If they'll gossip TO you, they'll gossip ABOUT you. Today's tea could be tomorrow's drama, hun. ☕",
  "jealous of friends": "Imagine being threatened by your partner having other people who care about them. Insecurity is NOT cute. 😒",
  "gets jealous easily": "Possessive, not passionate. 🚨",
  "gets mad when you hang out with friends": "Insecurity isn't cute.",
  "controls what you wear": "Last time I checked, you're not their dress-up doll. This screams 'I have trust issues' energy. 👗",
  "hates all their exes": "Spoiler alert: You're next on the list.",
  "owns a gym selfie account": "You're dating a bicep, not a person.",
  "posts everything on instagram": "This relationship has a social media manager.",
  "follows 10k people on ig": "Community manager or flirt?",
  "hogs the playlist": "It's a dictatorship, not a duet.",
  "has a backup plan person": "You're not their Plan A, B, or C.",
  "claps when the plane lands": "Do we really need to say more?",
  
  // Service and respect red flags
  "bad tipper": "If you can't tip properly, you can't afford to eat out. Period. This is giving broke AND inconsiderate energy. 💸",
  "rude to waiters": "How you treat people who can't fight back says EVERYTHING about your character. Yikes on bikes! 😬",
  "never tips at restaurants": "If they're stingy with money, imagine the emotional investment.",
  
  // Hygiene red flags
  "bad hygiene": "Basic cleanliness is literally the bare minimum. If you can't maintain that, what else are you neglecting? 🚿",
  "dirty car": "Your car is a reflection of how you handle responsibilities. This chaos-mobile is not inspiring confidence, babe. 🚗",
  "messy room": "Living in organized chaos? Sure. Living in actual chaos? That's a cry for help disguised as a lifestyle choice. 🏠"
};

const greenFlagTraits: { [key: string]: string } = {
  // Communication green flags
  "good listener": "Actually paying attention when someone speaks? Revolutionary! This is how adults are supposed to communicate. 🎯",
  "apologizes when wrong": "Accountability looks SO good on you! Finally, someone who knows that ego and growth can't coexist. ✨",
  "communicates clearly": "Clear communication? In THIS economy? You've hit the jackpot with this one, bestie! 📢",
  "remembers details": "They actually listen AND remember? Stop everything - we found a real one! This is premium human behavior. 🧠",
  "laughs at your jokes": "Even the bad ones. That's real love.",
  "says we when making plans": "Teamwork makes the dream work.",
  
  // Dating green flags
  "pays without drama": "Splitting or treating without making it weird? This is what emotional maturity looks like, folks! 💳",
  "plans thoughtful dates": "Effort in dating? In 2024? They're either a keeper or they're trying to sell you something. Let's hope it's the first! 🌹",
  "plans surprise dates": "Effort = ❤️",
  "respects boundaries": "Understanding that 'no' is a complete sentence? Chef's kiss to this basic human decency! 👏",
  "introduces you to friends": "They're not hiding you like a dirty secret? Congratulations, you've found someone who's actually proud to know you! 👥",
  "texts back instantly": "They're either really into you, or really bored. Either way, you win.",
  "texts good morning every day": "Consistency? Say less.",
  "gives you their hoodie": "If they give you warmth, they're worth it.",
  "knows your coffee order": "A barista in the streets, a sweetheart in the sheets.",
  "brings you coffee unasked": "Love language = caffeine.",
  "lends you their charger": "Battery and heart saver.",
  "sends you memes": "Nothing says love like a perfectly timed meme.",
  "texts you after seeing a meme": "Thinking of you = major green.",
  "makes you laugh when you're sad": "Built-in serotonin dispenser.",
  "supports your dreams": "Someone cheering you on from the sidelines = elite.",
  "loves the same shows as you": "Binge buddies for life.",
  
  // Personality green flags
  "has hobbies": "A personality outside of their relationship status? Groundbreaking! This is what a well-rounded human looks like. 🎨",
  "kind to animals": "If dogs trust them, so can you. Animals have better judgment than most humans anyway! 🐕",
  "tips well": "Understanding that service workers deserve respect AND money? This person gets how society works! 💰",
  "has close friendships": "Maintaining long-term friendships shows they can commit to relationships without drama. Green flag energy! 👯",
  "goes to therapy": "Working on themselves? Rare. Keep 'em.",
  "has no social media": "Mysterious and mentally stable. A unicorn, basically.",
  "calls their mom every day": "If they treat their mom right, you're probably next.",
  "writes poetry": "Sensitive, deep, probably won't forget your birthday.",
  "cries during movies": "Empathy unlocked.",
  
  // Life skills green flags
  "cooks well": "Can feed themselves without ordering takeout every night? This is basically adulting at its finest! 🍳",
  "exercises regularly": "Taking care of their body shows they can take care of responsibilities. Self-care is NOT selfish! 💪",
  "reads books": "Books? In this TikTok world? They're out here expanding their mind while others scroll endlessly. Respect! 📚",
  "reads books for fun": "Brains and vibes? 🧠✨",
  "saves money": "Financial responsibility? They're thinking about the future instead of just living for today. Marry this one! 💎"
};

export const analyzeTraits = (input: string): TraitAnalysis => {
  const normalizedInput = input.toLowerCase().trim();
  
  // Check red flags first
  for (const [trait, explanation] of Object.entries(redFlagTraits)) {
    if (normalizedInput.includes(trait) || 
        trait.split(' ').every(word => normalizedInput.includes(word))) {
      return { isRedFlag: true, explanation };
    }
  }
  
  // Check green flags
  for (const [trait, explanation] of Object.entries(greenFlagTraits)) {
    if (normalizedInput.includes(trait) || 
        trait.split(' ').every(word => normalizedInput.includes(word))) {
      return { isRedFlag: false, explanation };
    }
  }
  
  // Fallback analysis based on keywords
  const redFlagKeywords = [
    'late', 'rude', 'mean', 'aggressive', 'controlling', 'jealous', 'cheats', 'lies', 
    'steals', 'dirty', 'messy', 'lazy', 'selfish', 'arrogant', 'narcissistic', 
    'manipulative', 'toxic', 'dramatic', 'needy', 'clingy', 'possessive', 'abusive',
    'doesn\'t', 'never', 'always ignores', 'refuses', 'won\'t', 'can\'t be bothered',
    'interrupts', 'ghosts', 'cancels', 'hogs', 'backup', 'claps', 'follows thousands'
  ];
  
  const greenFlagKeywords = [
    'kind', 'thoughtful', 'caring', 'respectful', 'honest', 'loyal', 'funny', 
    'smart', 'ambitious', 'responsible', 'clean', 'organized', 'helpful', 
    'supportive', 'understanding', 'patient', 'generous', 'polite', 'punctual',
    'remembers', 'listens', 'communicates', 'pays', 'tips', 'exercises', 'reads',
    'texts back', 'good morning', 'hoodie', 'coffee', 'charger', 'memes', 'laugh',
    'therapy', 'poetry', 'books', 'mom', 'dreams', 'shows', 'surprise'
  ];
  
  const hasRedFlagKeywords = redFlagKeywords.some(keyword => 
    normalizedInput.includes(keyword)
  );
  
  const hasGreenFlagKeywords = greenFlagKeywords.some(keyword => 
    normalizedInput.includes(keyword)
  );
  
  if (hasRedFlagKeywords && !hasGreenFlagKeywords) {
    return {
      isRedFlag: true,
      explanation: "This is giving major red flag vibes. Trust your gut - if it feels off, it probably is! 🚨"
    };
  }
  
  if (hasGreenFlagKeywords && !hasRedFlagKeywords) {
    return {
      isRedFlag: false,
      explanation: "This sounds like green flag behavior! Finally, someone who knows how to human properly! 🌟"
    };
  }
  
  // Random assignment with savage explanations for ambiguous cases
  const isRedFlag = Math.random() < 0.4; // Slightly favor green flags for positivity
  
  if (isRedFlag) {
    const randomRedExplanations = [
      "This is sus behavior. My intuition is rarely wrong, and it's screaming red flag right now! 🚩",
      "Something about this gives me the ick. Can't put my finger on it, but trust me on this one! 😬",
      "This has red flag potential written all over it. Proceed with caution, bestie! ⚠️",
      "My red flag radar is beeping. This might not be the vibe you want in your life! 📡"
    ];
    return {
      isRedFlag: true,
      explanation: randomRedExplanations[Math.floor(Math.random() * randomRedExplanations.length)]
    };
  } else {
    const randomGreenExplanations = [
      "This actually sounds pretty decent! Sometimes the bar is in hell, but this clears it! ✅",
      "Not terrible! In today's dating world, this counts as a win. Take what you can get! 🎉",
      "This passes the vibe check! It's giving green flag energy, even if it's basic decency! 💚",
      "Surprisingly wholesome behavior! This person might actually have their life together! 🌱"
    ];
    return {
      isRedFlag: false,
      explanation: randomGreenExplanations[Math.floor(Math.random() * randomGreenExplanations.length)]
    };
  }
};

export const scenarios = [
  {
    id: 'raise',
    emoji: '💰',
    title: 'The Raise',
    description: 'Ask your manager for the promotion you deserve — without backing down when they push back.',
    difficulty: 'Medium',
    category: 'Career',
    opening:
      "Hey — do you have a few minutes? I wanted to talk about my compensation. I've been reflecting on my contributions over the past year and I think it's time we discussed a raise.",
    fallback:
      "I hear you. But let me be honest — this is a tough time budget-wise. Can you help me understand why you feel this is the right moment?",
    debrief: {
      strengths: 'You initiated the conversation directly — that takes courage most people avoid entirely.',
      watchouts: 'Watch for over-explaining or apologizing before making the ask. Confidence is part of the message.',
      nextLevel: 'Lead with concrete impact (numbers, projects, outcomes) before stating the number you want.',
    },
  },
  {
    id: 'boundary',
    emoji: '🚧',
    title: 'The Boundary',
    description: 'Hold a firm boundary with someone close to you who keeps crossing it — without blowing up the relationship.',
    difficulty: 'Hard',
    category: 'Relationships',
    opening:
      "I need to talk to you about something. I've tried to let it go but I can't — when you show up unannounced it really affects me. I need that to stop.",
    fallback:
      "I didn't think it was that big a deal. You used to love when I surprised you. Are you saying you don't want me around anymore?",
    debrief: {
      strengths: 'Naming the behavior clearly (rather than attacking the person) is advanced EQ — well done.',
      watchouts: "Notice if you started JADE-ing (Justify, Argue, Defend, Explain). Boundaries don't require a case.",
      nextLevel: 'Practice saying "I understand this is hard to hear" without walking back your boundary.',
    },
  },
  {
    id: 'grief',
    emoji: '🕯️',
    title: 'The Grief Call',
    description: "Support a friend through devastating news without trying to fix it, minimize it, or make it about you.",
    difficulty: 'Hard',
    category: 'Empathy',
    opening:
      "Hey… I'm sorry to call out of nowhere. My dad passed away this morning. I just — I didn't know who else to call.",
    fallback:
      "I know you mean well but please don't tell me he's in a better place. I just need someone to be here right now.",
    debrief: {
      strengths: 'Staying present and resisting the urge to fix is rare — most people flee into advice.',
      watchouts: "Watch for 'at least' statements — they accidentally minimize. 'At least he didn't suffer' still stings.",
      nextLevel: "Try matching their silence. Let a beat pass before you speak. Grief doesn't need to be filled.",
    },
  },
  {
    id: 'attendance',
    emoji: '⏰',
    title: 'The Attendance Conversation',
    description: 'Address repeated lateness with empathy, clear expectations, and a fair next step.',
    difficulty: 'Medium',
    category: 'Workplace Leadership',
    opening:
      "I know I've been late, but I've had a lot going on at home. I'm doing my best, and I don't feel like anyone understands that.",
    fallback:
      "I hear what you're saying, but I don't know how to fix everything overnight. Are you saying I'm going to get written up?",
    debrief: {
      strengths: 'You made space for the employee to explain their situation while keeping the conversation focused on attendance.',
      watchouts: 'Avoid assumptions, threats, or promising schedule changes you cannot authorize. Follow workplace policy consistently.',
      nextLevel: 'State the attendance expectation, explain the impact on the team, ask what support may help, and agree on a specific follow-up.',
    },
  },
]

# 🧠 MindBridge

> Practice the conversations that matter most. Real scenarios, real stakes — with an AI that doesn’t let you off the hook.

[![Built with MeDo](https://img.shields.io/badge/Built%20with-MeDo-C8A96E?style=flat-square)](https://medo.ai)
[![Hackathon](https://img.shields.io/badge/Hackathon-Build%20with%20MeDo-9E7CB8?style=flat-square)](#)
[![Live Demo](https://img.shields.io/badge/Live-Demo-6E9EA8?style=flat-square)](#)

-----

## 📖 About

MindBridge is an AI-powered **emotional intelligence trainer** that puts you inside difficult real-world conversations — then debriefs you like a coach.

EQ is one of the most important skills a person can develop. And yet it’s almost never *taught directly*. We learn it by stumbling through painful moments, often at great cost. MindBridge changes that — making emotional intelligence **trainable, repeatable, and measurable.**

-----

## ✨ Features

- 🎭 **AI Roleplay Engine** — Three fully realized characters with distinct personalities, emotional triggers, and escalation arcs
- 📊 **EQ Debrief** — Personalized coaching report after every session: what landed, what missed, your EQ pattern, one micro-skill, and a growth score
- 📈 **Progress Tracker** — Session history so you can watch your EQ improve over time
- 🌑 **Premium UI** — Dark editorial design built for focus and emotional presence

-----

## 🎭 The Three Scenarios

|Scenario            |Challenge                                     |Difficulty|
|--------------------|----------------------------------------------|----------|
|💼 **The Raise**     |Advocate for yourself with a defensive manager|Medium    |
|🤝 **The Boundary**  |Say no to a guilt-tripping close friend       |Hard      |
|🕊️ **The Grief Call**|Show up for someone in pain without fixing    |Hardest   |

-----

## 🛠 Tech Stack

|Layer        |Technology                       |
|-------------|---------------------------------|
|Platform     |MeDo by Baidu                    |
|Frontend     |React, Tailwind CSS              |
|Fonts        |Cormorant Garamond, DM Sans      |
|AI / Roleplay|Anthropic Claude API             |
|AI / Platform|ERNIE (Baidu via MeDo)           |
|Storage      |MeDo persistent key-value storage|
|Deploy       |MeDo one-click hosting           |

-----

## 🚀 Getting Started

MindBridge is deployed and live — no installation required.

🔗 **[Try it here →](#)**

To run locally or fork this project:

```bash
# Clone the repo
git clone https://github.com/sapphirebaby/mindbridge.git

# Install dependencies
cd mindbridge
npm install

# Start the dev server
npm run dev
```

> **Note:** You’ll need an Anthropic API key. Add it to your `.env` file:
> 
> ```
> ANTHROPIC_API_KEY=your_key_here
> ```

-----

## 📁 Project Structure

```
mindbridge/
├── src/
│   ├── components/
│   │   ├── ScenarioSelector.jsx   # Home screen with 3 scenario cards
│   │   ├── ScenarioPreview.jsx    # Character brief before roleplay
│   │   ├── Chat.jsx               # Live roleplay chat interface
│   │   └── Debrief.jsx            # EQ debrief results screen
│   ├── data/
│   │   └── scenarios.js           # Character briefs & escalation arcs
│   └── App.jsx
├── public/
└── README.md
```

-----

## 🧠 How the EQ Debrief Works

After each conversation, MindBridge sends the full transcript to Claude with a structured coaching prompt. The model identifies specific exchanges and returns a 5-part debrief:

```
✦ What Landed      — moments of genuine emotional intelligence
◈ What to Watch    — where the response could have landed better  
◎ Your EQ Pattern  — your conversational tendencies across sessions
→ Try This Next    — one concrete micro-skill to practice
⭐ Growth Score    — 1–10 with a one-line explanation
```

-----

## 🏆 Hackathon

Built for the **[Build with MeDo Hackathon](https://devpost.com)** — April 2026.

**Category:** Learning & Education

-----

## 📸 Screenshots

|Home      |Roleplay  |Debrief      |
|----------|----------|-------------|
|![Home](#)|![Chat](#)|![Debrief](#)|

-----

## 🗺 Roadmap

- [ ] Voice mode for spoken roleplay
- [ ] Custom scenario builder — practice *your* upcoming hard conversation
- [ ] Team EQ training for workplaces
- [ ] Longitudinal EQ dashboard
- [ ] Community-submitted scenarios

-----

## 📄 License

MIT © 2026 MindBridge

-----

*Built with ❤️ and MeDo · #BuiltWithMeDo*

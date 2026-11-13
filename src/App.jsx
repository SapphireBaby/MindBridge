import { useState } from 'react'
import Header from './components/Header'
import ScenarioCard from './components/ScenarioCard'
import ChatInterface from './components/ChatInterface'
import DebriefPanel from './components/DebriefPanel'
import { scenarios } from './data/scenarios'

const experiences = {
  personal: {
    eyebrow: 'THE ART OF UNDERSTANDING YOURSELF',
    title: 'Find the words. Feel the shift.',
    description: 'A private practice space for the conversations you keep replaying. Explore what you feel, rehearse what you mean, and discover a steadier way forward.',
    label: 'Personal growth studio',
    prompt: 'Begin with a conversation that matters to you.',
  },
  teams: {
    eyebrow: 'THE HUMAN SIDE OF LEADERSHIP',
    title: 'Better dialogue. Stronger teams.',
    description: 'Rehearse the moments that define leadership—from tough feedback to difficult employee conversations—with room to reflect and improve.',
    label: 'Workplace practice studio',
    prompt: 'Start with a real workplace challenge.',
  },
}

const personalIds = ['boundary', 'grief', 'raise']
const teamIds = ['attendance', 'raise', 'boundary', 'grief']

function Symbol({ type, className = '' }) {
  const shared = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.65, strokeLinecap: 'round', strokeLinejoin: 'round', className }
  if (type === 'heart') return <svg {...shared} aria-hidden="true"><path d="M20.8 4.9a5.6 5.6 0 0 0-7.9 0l-.9.9-.9-.9a5.6 5.6 0 0 0-7.9 7.9L12 21l8.8-8.2a5.6 5.6 0 0 0 0-7.9Z"/></svg>
  if (type === 'briefcase') return <svg {...shared} aria-hidden="true"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg>
  return <svg {...shared} aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7"/></svg>
}

function Welcome({ onSelect }) {
  return (
    <div className="welcome-shell">
      <div className="ambient ambient-pink" aria-hidden="true" />
      <div className="ambient ambient-teal" aria-hidden="true" />
      <section className="welcome-content" aria-labelledby="welcome-title">
        <div className="eyebrow"><span className="eyebrow-line" /> THE NEW LANGUAGE OF GROWTH <span className="eyebrow-line" /></div>
        <h1 id="welcome-title" className="display-title">Every conversation<br /><em>changes something.</em></h1>
        <p className="welcome-copy">Practice the moments that matter. Explore how your words land, discover new ways to respond, and build more intentional connections.</p>
        <div className="experience-grid" aria-label="Choose your MindBridge experience">
          <button className="experience-card personal-card" onClick={() => onSelect('personal')}>
            <span className="card-top"><span className="experience-icon"><Symbol type="heart" /></span><span className="card-index">01 / PERSONAL</span></span>
            <span className="card-overline">FOR THE LIFE YOU LIVE</span>
            <span className="card-heading">Grow from<br />within<span className="accent-dot">.</span></span>
            <span className="card-description">Relationships, boundaries, confidence, and the conversations you wish you could revisit.</span>
            <span className="card-action">Enter Personal <Symbol type="arrow" /></span>
          </button>
          <button className="experience-card teams-card" onClick={() => onSelect('teams')}>
            <span className="card-top"><span className="experience-icon"><Symbol type="briefcase" /></span><span className="card-index">02 / TEAMS</span></span>
            <span className="card-overline">FOR THE PEOPLE YOU LEAD</span>
            <span className="card-heading">Lead with<br />intention<span className="accent-dot">.</span></span>
            <span className="card-description">Leadership, feedback, workplace conflict, and the human side of building stronger teams.</span>
            <span className="card-action">Enter Teams <Symbol type="arrow" /></span>
          </button>
        </div>
        <p className="privacy-line">PRACTICE WITHOUT PRESSURE <span aria-hidden="true">✦</span> REFLECT WITH PURPOSE</p>
      </section>
    </div>
  )
}

function ExperienceHome({ audience, onSelectScenario, onSwitch, onBack }) {
  const e = experiences[audience]
  const ids = audience === 'personal' ? personalIds : teamIds
  const available = ids.map(id => scenarios.find(s => s.id === id)).filter(Boolean)
  return (
    <div className={`experience-home ${audience}-home`}>
      <div className="experience-container">
        <div className="studio-toolbar">
          <button className="text-link" onClick={onBack}>← All experiences</button>
          <button className="switch-pill" onClick={() => onSwitch(audience === 'personal' ? 'teams' : 'personal')}>Switch to {audience === 'personal' ? 'Teams' : 'Personal'} ↗</button>
        </div>
        <section className="studio-hero" aria-labelledby="studio-title">
          <div className="studio-kicker"><span className="kicker-glyph">✦</span> {e.eyebrow}</div>
          <h1 id="studio-title" className="studio-title">{e.title}</h1>
          <p className="studio-copy">{e.description}</p>
          <div className="studio-meta"><span className="meta-rule" /><span>{e.label}</span><span>•</span><span>Self-paced practice</span></div>
        </section>
        <section className="scenario-section" aria-labelledby="scenario-title">
          <div className="scenario-intro"><div><p className="section-eyebrow">YOUR PRACTICE LIBRARY</p><h2 id="scenario-title">Choose your next conversation.</h2><p>{e.prompt}</p></div><span className="scenario-counter">{String(available.length).padStart(2,'0')} SCENARIOS</span></div>
          <div className="scenario-grid">{available.map(s => <ScenarioCard key={s.id} scenario={s} onSelect={onSelectScenario} />)}</div>
        </section>
        <p className="prototype-note">Preview experience • Conversation replies and debriefs are still prototype behaviors, not personalized AI coaching.</p>
      </div>
    </div>
  )
}

export default function App() {
  const [audience, setAudience] = useState(null)
  const [activeScenario, setActiveScenario] = useState(null)
  const [sessionComplete, setSessionComplete] = useState(false)
  const [messages, setMessages] = useState([])

  function handleSelectScenario(scenario) {
    setActiveScenario(scenario)
    setSessionComplete(false)
    setMessages([{ role: 'assistant', content: scenario.opening }])
  }
  function handleReset() {
    setActiveScenario(null)
    setSessionComplete(false)
    setMessages([])
  }
  function chooseAudience(value) {handleReset();setAudience(value)}

  return (
    <div className={`app-shell ${audience || 'welcome'}-theme`}>
      <Header audience={audience} onLogoClick={() => {handleReset();setAudience(null)}} />
      <main id="main-content">
        {!audience && <Welcome onSelect={chooseAudience} />}
        {audience && !activeScenario && <ExperienceHome audience={audience} onSelectScenario={handleSelectScenario} onSwitch={chooseAudience} onBack={() => chooseAudience(null)} />}
        {audience && activeScenario && <div className="chat-shell"><button className="text-link chat-back" onClick={handleReset}>← Back to {audience === 'personal' ? 'Personal' : 'Teams'}</button>{!sessionComplete ? <ChatInterface scenario={activeScenario} messages={messages} setMessages={setMessages} onEndSession={() => setSessionComplete(true)} /> : <DebriefPanel scenario={activeScenario} messages={messages} onReset={handleReset} />}</div>}
      </main>
    </div>
  )
}

import { useState } from 'react'
import Header from './components/Header'
import ScenarioCard from './components/ScenarioCard'
import ChatInterface from './components/ChatInterface'
import DebriefPanel from './components/DebriefPanel'
import { scenarios } from './data/scenarios'

export default function App() {
  const [activeScenario, setActiveScenario] = useState(null)
  const [sessionComplete, setSessionComplete] = useState(false)
  const [messages, setMessages] = useState([])

  function handleSelectScenario(scenario) {
    setActiveScenario(scenario)
    setSessionComplete(false)
    setMessages([
      { role: 'assistant', content: scenario.opening },
    ])
  }

  function handleEndSession() {
    setSessionComplete(true)
  }

  function handleReset() {
    setActiveScenario(null)
    setSessionComplete(false)
    setMessages([])
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        {!activeScenario && (
          <>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">
                Choose a scenario
              </h2>
              <p className="text-gray-400 text-lg">
                Pick a difficult conversation and practice it with an AI that won&apos;t let you off the hook.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {scenarios.map((s) => (
                <ScenarioCard
                  key={s.id}
                  scenario={s}
                  onSelect={handleSelectScenario}
                />
              ))}
            </div>
          </>
        )}

        {activeScenario && !sessionComplete && (
          <ChatInterface
            scenario={activeScenario}
            messages={messages}
            setMessages={setMessages}
            onEndSession={handleEndSession}
          />
        )}

        {activeScenario && sessionComplete && (
          <DebriefPanel
            scenario={activeScenario}
            messages={messages}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  )
}

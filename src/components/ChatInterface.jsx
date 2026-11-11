import { useState } from 'react'

export default function ChatInterface({ scenario, messages, setMessages, onEndSession }) {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSend() {
    const text = input.trim()
    if (!text || loading) return

    const userMessage = { role: 'user', content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      // Replace with your Claude API integration
      const reply = await simulateAIResponse(scenario, updatedMessages)
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-140px)]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">
          {scenario.emoji} {scenario.title}
        </h2>
        <button
          onClick={onEndSession}
          className="text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg px-4 py-2 transition-colors"
        >
          End &amp; Debrief
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-brand-500 text-white'
                  : 'bg-gray-800 text-gray-100'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 rounded-2xl px-4 py-3 text-sm text-gray-400 animate-pulse">
              Typing…
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Say something…"
          rows={2}
          className="flex-1 resize-none rounded-xl bg-gray-800 border border-gray-700 focus:border-brand-500 focus:outline-none text-white placeholder-gray-500 px-4 py-3 text-sm"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || loading}
          className="self-end bg-brand-500 hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl px-5 py-3 text-sm font-medium transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  )
}

// Placeholder — replace with real Claude API call
async function simulateAIResponse(scenario, messages) {
  await new Promise((r) => setTimeout(r, 900))
  const lastUser = messages.findLast((m) => m.role === 'user')?.content ?? ''
  return scenario.responses?.[lastUser] ?? scenario.fallback
}

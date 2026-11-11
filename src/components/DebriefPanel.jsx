export default function DebriefPanel({ scenario, messages, onReset }) {
  const userTurns = messages.filter((m) => m.role === 'user')

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">📋</div>
        <h2 className="text-2xl font-bold text-white mb-2">Session Debrief</h2>
        <p className="text-gray-400">
          {scenario.emoji} {scenario.title} — {userTurns.length} responses
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <DebriefCard
          icon="✅"
          title="What worked"
          body={scenario.debrief?.strengths ?? 'You showed up and practiced — that already puts you ahead.'}
        />
        <DebriefCard
          icon="⚠️"
          title="What to watch"
          body={scenario.debrief?.watchouts ?? 'Look for moments where you deflected or softened too quickly.'}
        />
        <DebriefCard
          icon="🎯"
          title="Next-level move"
          body={scenario.debrief?.nextLevel ?? 'Try naming the emotion in the room before making your ask.'}
        />
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={onReset}
          className="bg-brand-500 hover:bg-blue-600 text-white rounded-xl px-6 py-3 font-medium transition-colors"
        >
          Try another scenario
        </button>
      </div>
    </div>
  )
}

function DebriefCard({ icon, title, body }) {
  return (
    <div className="rounded-2xl bg-gray-900 border border-gray-800 p-5">
      <div className="flex items-start gap-3">
        <span className="text-xl mt-0.5">{icon}</span>
        <div>
          <h3 className="font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  )
}

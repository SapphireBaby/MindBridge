export default function ScenarioCard({ scenario, onSelect }) {
  return (
    <button
      onClick={() => onSelect(scenario)}
      className="text-left rounded-2xl border border-gray-800 bg-gray-900 hover:border-brand-500 hover:bg-gray-800 transition-all p-6 group"
    >
      <div className="text-3xl mb-3">{scenario.emoji}</div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-500 transition-colors">
        {scenario.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {scenario.description}
      </p>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-xs bg-gray-800 text-gray-300 rounded-full px-3 py-1">
          {scenario.difficulty}
        </span>
        <span className="text-xs bg-gray-800 text-gray-300 rounded-full px-3 py-1">
          {scenario.category}
        </span>
      </div>
    </button>
  )
}

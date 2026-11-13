export default function ScenarioCard({ scenario, onSelect }) {
  return (
    <button onClick={() => onSelect(scenario)} className="new-scenario-card">
      <span className="scenario-card-head"><span className="scenario-emoji">{scenario.emoji}</span><span className="scenario-arrow" aria-hidden="true">↗</span></span>
      <span className="scenario-category">{scenario.category}</span>
      <span className="scenario-title">{scenario.title}</span>
      <span className="scenario-description">{scenario.description}</span>
      <span className="scenario-footer"><span>{scenario.difficulty}</span><span>START PRACTICE <span aria-hidden="true">→</span></span></span>
    </button>
  )
}

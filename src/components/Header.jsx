export default function Header({ audience, onLogoClick }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand-lockup" onClick={onLogoClick} aria-label="MindBridge home">
          <span className="brand-symbol" aria-hidden="true">✳</span>
          <span className="brand-name">mindbridge<span className="brand-period">.</span></span>
        </button>
        <div className="header-trailing"><span className="header-caption">PRACTICE WHAT MATTERS</span>{audience && <span className="audience-chip">{audience === 'personal' ? 'PERSONAL' : 'TEAMS'}</span>}</div>
      </div>
    </header>
  )
}

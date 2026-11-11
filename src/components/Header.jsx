export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 max-w-5xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧠</span>
          <span className="text-xl font-bold text-white tracking-tight">
            MindBridge
          </span>
        </div>
        <p className="text-gray-400 text-sm hidden sm:block">
          Train your EQ — one conversation at a time
        </p>
      </div>
    </header>
  )
}

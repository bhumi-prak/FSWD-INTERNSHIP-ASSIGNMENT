import { useState } from 'react'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      alert(`🔍 Searching eco-trips to: ${searchTerm}... (Try "Amazon" or "Himalayas")`)
    } else {
      alert("🌿 Enter a destination to explore sustainably!")
    }
  }

  return (
    <>
      {/* Hero Section */}
      <div className="hero-bg h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/1920/1080')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative text-center px-6 max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">
            EXPLORE THE<br />WORLD <span className="text-green-400">RESPONSIBLY</span>
          </h1>
          <p className="text-2xl text-zinc-300 mb-12 max-w-xl mx-auto">
            Carbon-neutral adventures • Local communities • Unforgettable memories
          </p>

          {/* Interactive Search */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Where do you want to go? (Amazon, Iceland...)"
              className="flex-1 px-8 py-5 text-black text-lg rounded-l-3xl focus:outline-none focus:ring-4 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 px-12 py-5 rounded-r-3xl font-semibold text-xl transition-all active:scale-95"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="py-8 bg-black text-center text-green-400 flex flex-wrap justify-center gap-12 text-xl">
        <div>🌱 100% Carbon Neutral</div>
        <div>👥 50k+ Happy Travelers</div>
        <div>⭐ 4.98/5 Rating</div>
      </div>
    </>
  )
}

export default Home
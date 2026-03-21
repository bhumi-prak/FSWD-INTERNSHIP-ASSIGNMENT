import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Destinations from './pages/Destinations'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-black py-12 border-t border-green-900">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-green-400 text-2xl font-bold mb-2">🌍 EcoTravel</p>
            <p className="text-zinc-500">Travel Responsibly • 2026</p>
            <p className="text-zinc-600 mt-4 text-sm">Made for your React Router Assignment</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
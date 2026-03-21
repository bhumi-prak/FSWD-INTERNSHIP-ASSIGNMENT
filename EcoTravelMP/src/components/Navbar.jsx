import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-green-950 sticky top-0 z-50 border-b border-green-900">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-4xl">🌍</span>
          <span className="text-3xl font-bold tracking-tight">EcoTravel</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-lg">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-green-400 transition-colors ${location.pathname === link.path ? 'text-green-400 font-semibold' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-950 border-t border-green-900 py-6">
          <div className="flex flex-col gap-6 px-6 text-xl">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-green-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
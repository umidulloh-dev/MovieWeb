import { useEffect, useState } from 'react'
import { Search, Bell, X, Menu } from 'lucide-react'

export default function Navbar({ onSearch }) {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    onSearch?.(query)
  }, [query, onSearch])

  const links = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-netflix-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-1 select-none">
            <span className="text-netflix-red font-black text-2xl md:text-3xl tracking-tighter">
              MOVIE
            </span>
            <span className="text-white font-black text-2xl md:text-3xl tracking-tighter">
              FLIX
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-6">
            {links.map((link, i) => (
              <li key={link}>
                <a
                  href="#"
                  className={`text-sm transition-colors hover:text-gray-300 ${
                    i === 0 ? 'text-white font-semibold' : 'text-gray-200'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`flex items-center transition-all duration-300 overflow-hidden ${
              searchOpen
                ? 'w-48 md:w-64 bg-black/80 border border-white/30 px-3'
                : 'w-9'
            } h-9 rounded`}
          >
            <button
              onClick={() => {
                setSearchOpen((s) => !s)
                if (searchOpen) setQuery('')
              }}
              className="text-white shrink-0"
              aria-label="Toggle search"
            >
              {searchOpen ? <X size={18} /> : <Search size={20} />}
            </button>
            {searchOpen && (
              <input
                autoFocus
                type="text"
                placeholder="Titles, genres..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent text-white text-sm w-full outline-none ml-2 placeholder-gray-400"
              />
            )}
          </div>

          <button
            className="text-white hidden md:block hover:text-gray-300 transition-colors"
            aria-label="Notifications"
          >
            <Bell size={20} />
          </button>

          <div className="w-9 h-9 rounded bg-gradient-to-br from-netflix-red to-orange-500 flex items-center justify-center text-white font-bold text-sm select-none">
            U
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-netflix-dark/95 backdrop-blur-md border-t border-white/10 animate-fade-in">
          <ul className="flex flex-col p-4 gap-3">
            {links.map((link, i) => (
              <li key={link}>
                <a
                  href="#"
                  className={`block py-2 text-base ${
                    i === 0 ? 'text-white font-semibold' : 'text-gray-300'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

import { useMemo, useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MovieRow from './components/MovieRow'
import MovieModal from './components/MovieModal'
import Footer from './components/Footer'
import {
  FEATURED_MOVIE,
  TRENDING,
  POPULAR,
  TOP_RATED,
  ACTION,
} from './data/movies'

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = useCallback((q) => setSearchQuery(q), [])

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return null
    const q = searchQuery.toLowerCase()
    const all = [...TRENDING, ...POPULAR, ...TOP_RATED, ...ACTION]
    const seen = new Set()
    return all.filter((m) => {
      if (seen.has(m.id)) return false
      seen.add(m.id)
      return (
        m.title.toLowerCase().includes(q) ||
        m.genre.some((g) => g.toLowerCase().includes(q))
      )
    })
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-netflix-dark text-white">
      <Navbar onSearch={handleSearch} />

      {filtered ? (
        <div className="pt-24 px-4 md:px-12 min-h-screen">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Search results for "{searchQuery}"
          </h2>
          {filtered.length === 0 ? (
            <div className="text-white/60 text-lg py-20 text-center">
              No movies found. Try different keywords.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {filtered.map((m) => (
                <div
                  key={m.id}
                  onClick={() => setSelectedMovie(m)}
                  className="cursor-pointer group"
                >
                  <div className="aspect-video rounded-md overflow-hidden bg-netflix-gray">
                    <img
                      src={m.poster}
                      alt={m.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-2 text-sm md:text-base font-semibold truncate">
                    {m.title}
                  </h3>
                  <p className="text-xs text-white/60">{m.year} · {m.duration}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <Hero movie={FEATURED_MOVIE} onInfo={setSelectedMovie} />

          <main className="relative -mt-24 md:-mt-32 z-10">
            <MovieRow
              title="Trending Now"
              movies={TRENDING}
              onMovieClick={setSelectedMovie}
            />
            <MovieRow
              title="Popular on MovieFlix"
              movies={POPULAR}
              onMovieClick={setSelectedMovie}
            />
            <MovieRow
              title="Top Rated"
              movies={TOP_RATED}
              onMovieClick={setSelectedMovie}
            />
            <MovieRow
              title="Action & Adventure"
              movies={ACTION}
              onMovieClick={setSelectedMovie}
            />
          </main>
        </>
      )}

      <Footer />

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  )
}

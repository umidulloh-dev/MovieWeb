import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MovieCard from './MovieCard'

export default function MovieRow({ title, movies, onMovieClick }) {
  const scrollRef = useRef(null)
  const [showLeft, setShowLeft] = useState(false)

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    setShowLeft(scrollRef.current?.scrollLeft > 10)
  }

  if (!movies?.length) return null

  return (
    <section className="relative mb-8 md:mb-12 group/row">
      <h2 className="text-lg md:text-2xl font-bold text-white px-4 md:px-12 mb-3">
        {title}
      </h2>

      <div className="relative">
        {showLeft && (
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-0 bottom-0 z-10 w-12 items-center justify-center bg-black/60 hover:bg-black/80 transition-all opacity-0 group-hover/row:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={36} className="text-white" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-28 md:pb-32 -mb-28 md:-mb-32 scroll-smooth"
        >
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} onClick={onMovieClick} />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-0 bottom-0 z-10 w-12 items-center justify-center bg-black/60 hover:bg-black/80 transition-all opacity-0 group-hover/row:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight size={36} className="text-white" />
        </button>
      </div>
    </section>
  )
}

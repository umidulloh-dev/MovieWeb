import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react'

export default function MovieCard({ movie, onClick }) {
  return (
    <div
      className="group relative shrink-0 w-44 md:w-60 cursor-pointer transition-all duration-300 hover:scale-110 hover:z-20"
      onClick={() => onClick?.(movie)}
    >
      <div className="relative aspect-video rounded-md overflow-hidden bg-netflix-gray shadow-lg">
        <img
          src={movie.poster}
          alt={movie.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-bold text-sm md:text-base truncate">
            {movie.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-white/80 mt-1">
            <span className="text-green-500 font-bold">{movie.match}% Match</span>
            <span>{movie.year}</span>
            <span className="border border-white/40 px-1 text-[10px]">HD</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 left-0 right-0 bg-netflix-gray p-3 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl hidden md:block">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <button
              className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/80 transition-colors"
              aria-label="Play"
              onClick={(e) => e.stopPropagation()}
            >
              <Play size={14} fill="black" />
            </button>
            <button
              className="w-8 h-8 rounded-full border border-white/60 text-white flex items-center justify-center hover:border-white transition-colors"
              aria-label="Add to list"
              onClick={(e) => e.stopPropagation()}
            >
              <Plus size={14} />
            </button>
            <button
              className="w-8 h-8 rounded-full border border-white/60 text-white flex items-center justify-center hover:border-white transition-colors"
              aria-label="Like"
              onClick={(e) => e.stopPropagation()}
            >
              <ThumbsUp size={14} />
            </button>
          </div>
          <button
            className="w-8 h-8 rounded-full border border-white/60 text-white flex items-center justify-center hover:border-white transition-colors"
            aria-label="More info"
          >
            <ChevronDown size={14} />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
          <span className="text-green-500 font-bold">{movie.match}% Match</span>
          <span className="border border-white/40 px-1 text-[10px] text-white/80">HD</span>
          <span className="text-white/80">{movie.duration}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-1 text-xs text-white/80 mt-1">
          {movie.genre.slice(0, 3).map((g, i) => (
            <span key={g}>
              {g}
              {i < Math.min(movie.genre.length, 3) - 1 && (
                <span className="mx-1 text-white/40">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

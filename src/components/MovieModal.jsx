import { useEffect, useRef, useState } from 'react'
import { X, Play, Plus, ThumbsUp, Volume2, VolumeX } from 'lucide-react'

export default function MovieModal({ movie, onClose }) {
  const [muted, setMuted] = useState(true)
  const [videoReady, setVideoReady] = useState(false)
  const iframeRef = useRef(null)

  useEffect(() => {
    if (!movie) return
    document.body.style.overflow = 'hidden'
    setVideoReady(false)
    setMuted(true)

    const showTimer = movie.trailerId
      ? setTimeout(() => setVideoReady(true), 1000)
      : null

    const handleKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      if (showTimer) clearTimeout(showTimer)
      window.removeEventListener('keydown', handleKey)
    }
  }, [movie, onClose])

  const toggleMute = () => {
    const next = !muted
    setMuted(next)
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func: next ? 'mute' : 'unMute',
        args: '',
      }),
      '*'
    )
  }

  if (!movie) return null

  const showVideo = videoReady && movie.trailerId

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start md:items-center justify-center p-0 md:p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-netflix-dark w-full md:max-w-3xl rounded-none md:rounded-lg overflow-hidden shadow-2xl animate-scale-in my-0 md:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-netflix-gray overflow-hidden">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              showVideo ? 'opacity-0' : 'opacity-100'
            }`}
            onError={(e) => {
              if (movie.trailerId && !e.currentTarget.dataset.fallback) {
                e.currentTarget.dataset.fallback = '1'
                e.currentTarget.src = `https://img.youtube.com/vi/${movie.trailerId}/hqdefault.jpg`
              }
            }}
          />

          {movie.trailerId && (
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${movie.trailerId}?autoplay=1&mute=1&loop=1&playlist=${movie.trailerId}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&enablejsapi=1&disablekb=1&fs=0&cc_load_policy=0`}
              title={`${movie.title} Trailer`}
              allow="autoplay; encrypted-media; picture-in-picture"
              frameBorder="0"
              className={`absolute top-1/2 left-1/2 w-[125%] h-[125%] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-700 ${
                showVideo ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-black flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-6 left-4 md:left-8 right-4 md:right-8 z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 text-shadow-lg">
              {movie.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded font-semibold hover:bg-white/80 transition-colors">
                <Play size={18} fill="black" />
                Play
              </button>
              <button
                className="w-10 h-10 rounded-full border-2 border-white/60 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:border-white transition-colors"
                aria-label="Add to list"
              >
                <Plus size={18} />
              </button>
              <button
                className="w-10 h-10 rounded-full border-2 border-white/60 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:border-white transition-colors"
                aria-label="Like"
              >
                <ThumbsUp size={18} />
              </button>
              {movie.trailerId && showVideo && (
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 ml-auto rounded-full border-2 border-white/60 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:border-white transition-colors"
                  aria-label={muted ? 'Unmute trailer' : 'Mute trailer'}
                >
                  {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 md:p-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
              <span className="text-green-500 font-bold">{movie.match}% Match</span>
              <span className="text-white">{movie.year}</span>
              <span className="border border-white/40 px-2 py-0.5 text-xs">HD</span>
              <span className="text-white">{movie.duration}</span>
              <span className="text-yellow-400">★ {movie.rating}</span>
            </div>
            <p className="text-white/90 text-base leading-relaxed">
              {movie.description}
            </p>
          </div>

          <div className="text-sm space-y-3">
            <div>
              <span className="text-white/60">Genres: </span>
              <span className="text-white">{movie.genre.join(', ')}</span>
            </div>
            <div>
              <span className="text-white/60">Year: </span>
              <span className="text-white">{movie.year}</span>
            </div>
            <div>
              <span className="text-white/60">Rating: </span>
              <span className="text-white">{movie.rating}/10</span>
            </div>
            <div>
              <span className="text-white/60">Duration: </span>
              <span className="text-white">{movie.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

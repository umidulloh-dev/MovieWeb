import { Play, Info, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const TRAILER_DURATION = 130

export default function Hero({ movie, onInfo }) {
  const [muted, setMuted] = useState(true)
  const [videoReady, setVideoReady] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)
  const iframeRef = useRef(null)

  useEffect(() => {
    if (!movie.trailerId) return
    const showTimer = setTimeout(() => setVideoReady(true), 1800)
    const endTimer = setTimeout(() => setVideoEnded(true), TRAILER_DURATION * 1000)
    return () => {
      clearTimeout(showTimer)
      clearTimeout(endTimer)
    }
  }, [movie.trailerId])

  const sendCommand = (func) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: '' }),
      '*'
    )
  }

  const toggleMute = () => {
    const next = !muted
    setMuted(next)
    sendCommand(next ? 'mute' : 'unMute')
  }

  const showVideo = videoReady && !videoEnded && movie.trailerId

  return (
    <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            showVideo ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {movie.trailerId && !videoEnded && (
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              showVideo ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${movie.trailerId}?autoplay=1&mute=1&loop=1&playlist=${movie.trailerId}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&enablejsapi=1&disablekb=1&fs=0&cc_load_policy=0`}
              title={`${movie.title} Trailer`}
              allow="autoplay; encrypted-media; picture-in-picture"
              frameBorder="0"
              className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        )}

        <div className="absolute inset-0 gradient-fade-left" />
        <div className="absolute inset-0 gradient-fade-bottom" />
      </div>

      <div className="relative h-full flex items-end md:items-center pb-24 md:pb-0">
        <div className="px-4 md:px-12 max-w-2xl animate-slide-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-netflix-red font-bold text-sm tracking-widest">
              N · SERIES
            </span>
            <span className="text-white/70 text-sm">·</span>
            <span className="text-white/70 text-sm">#1 in Movies Today</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-4 text-shadow-lg leading-none">
            {movie.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
            <span className="text-green-500 font-bold">{movie.match}% Match</span>
            <span className="text-white/80">{movie.year}</span>
            <span className="border border-white/40 px-2 py-0.5 text-xs">HD</span>
            <span className="text-white/80">{movie.duration}</span>
          </div>

          <p className="text-base md:text-lg text-white/90 mb-6 text-shadow-lg max-w-xl line-clamp-3">
            {movie.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2.5 rounded font-semibold hover:bg-white/80 transition-all duration-200 active:scale-95">
              <Play size={20} fill="black" />
              Play
            </button>
            <button
              onClick={() => onInfo?.(movie)}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 md:px-8 py-2.5 rounded font-semibold hover:bg-white/30 transition-all duration-200 active:scale-95"
            >
              <Info size={20} />
              More Info
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-32 right-0 items-center gap-4 z-10">
        {movie.trailerId && showVideo && (
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:border-white transition-colors"
            aria-label={muted ? 'Unmute trailer' : 'Mute trailer'}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        )}
        <div className="bg-white/20 border-l-4 border-white text-white px-4 py-2 text-base font-medium">
          18+
        </div>
      </div>
    </section>
  )
}

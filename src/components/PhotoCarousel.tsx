import { useEffect, useState } from 'react'
import type { GalleryShot } from '../data/siteContent'

type PhotoCarouselProps = {
  shots: GalleryShot[]
}

const AUTO_PLAY_MS = 4300

const cycleIndex = (next: number, total: number) => {
  if (next < 0) {
    return total - 1
  }
  if (next >= total) {
    return 0
  }
  return next
}

export default function PhotoCarousel({ shots }: PhotoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setPaused] = useState(false)

  useEffect(() => {
    if (shots.length <= 1 || isPaused) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => cycleIndex(index + 1, shots.length))
    }, AUTO_PLAY_MS)

    return () => window.clearInterval(timer)
  }, [isPaused, shots.length])

  if (shots.length === 0) {
    return null
  }

  const activeShot = shots[activeIndex]
  const orientationClass = activeShot.height >= activeShot.width ? 'is-portrait' : 'is-landscape'

  return (
    <article
      className="photo-carousel"
      aria-label="Photo carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={`photo-carousel__stage ${orientationClass}`}>
        <img
          className="photo-carousel__image"
          src={activeShot.image}
          alt={activeShot.alt}
          width={activeShot.width}
          height={activeShot.height}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="photo-carousel__footer">
        <div>
          <p className="photo-carousel__counter">
            {String(activeIndex + 1).padStart(2, '0')} / {String(shots.length).padStart(2, '0')}
          </p>
          <h3>{activeShot.title}</h3>
          <p className="photo-carousel__autoplay">{isPaused ? 'Paused' : 'Auto-changing'}</p>
        </div>
        <div className="photo-carousel__controls">
          <button
            type="button"
            className="button button--ghost"
            onClick={() => setActiveIndex((index) => cycleIndex(index - 1, shots.length))}
            aria-label="Previous photo"
          >
            Prev
          </button>
          <button
            type="button"
            className="button button--ghost"
            onClick={() => setActiveIndex((index) => cycleIndex(index + 1, shots.length))}
            aria-label="Next photo"
          >
            Next
          </button>
        </div>
      </div>
      <div className="photo-carousel__dots" role="tablist" aria-label="Choose photo">
        {shots.map((shot, index) => (
          <button
            key={shot.title}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show ${shot.title}`}
            className={`photo-carousel__dot${index === activeIndex ? ' is-active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </article>
  )
}

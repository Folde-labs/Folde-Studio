const mosaicCells = [
  { cls: 'rc1', span2: true },
  { cls: 'rc2', span2: false },
  { cls: 'rc3', span2: false },
  { cls: 'rc4', span2: true },
  { cls: 'rc5', span2: false },
  { cls: 'rc6', span2: false },
]

export default function Process() {
  return (
    <section id="process">
      <div className="reel-top reveal">
        <span className="reel-label">Showreel — 2026</span>
        <h2 className="reel-headline">
          <span className="reel-line-light">Let&apos;s</span>
          <span className="reel-line-bold">GET REEL</span>
        </h2>
      </div>

      <div className="reel-mosaic">
        {mosaicCells.map((cell, i) => (
          <div key={i} className="reel-mosaic-cell">
            <div className={`reel-cell-bg ${cell.cls}`} />
          </div>
        ))}

        <div className="reel-play-center">
          <div className="reel-play-circle">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="reel-play-inner-text">Play Reel</span>
          </div>
        </div>
      </div>
    </section>
  )
}

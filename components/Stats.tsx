const awards = [
  {
    org: 'Awwwards',
    num: '16',
    label: 'Site of the Day, Developer Award, and Honorable Mention recognitions',
  },
  {
    org: 'Behance',
    num: '22',
    label: 'Featured projects across Brand Identity, Web Design, and Motion categories',
  },
  {
    org: 'CSSDA',
    num: '6',
    label: 'Website of the Day and Special Kudos from the CSS Design Awards jury',
  },
  {
    org: 'The FWA',
    num: '7',
    label: 'FWA of the Day and FWA of the Month awards across interactive projects',
  },
  {
    org: 'Commarts',
    num: '4',
    label: 'Communication Arts Interactive Annual selections',
  },
  {
    org: 'Typewolf',
    num: '2',
    label: 'Site of the Day features for typographic excellence in digital design',
  },
]

export default function Stats() {
  return (
    <div id="stats">
      <div className="awards-header reveal">
        <div>
          <span className="section-label">Recognition</span>
          <h2 className="awards-headline">
            Awards &amp;<br /><strong>RECOGNITION</strong>
          </h2>
        </div>
        <p className="awards-sub reveal reveal-delay-1">We&apos;re super proud.</p>
      </div>

      <div className="awards-grid">
        {awards.map((a, i) => (
          <div key={a.org} className={`award-card reveal reveal-delay-${Math.min(i, 4)}`}>
            <div className="award-card-org">{a.org}</div>
            <div className="award-card-num">{a.num}</div>
            <div className="award-card-label">{a.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

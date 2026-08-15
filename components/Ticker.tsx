const items = [
  'Brand Identity', 'Web Design', 'UI/UX Design', 'Motion Design',
  'Digital Strategy', 'Development', 'eCommerce', 'App Design',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {doubled.map((label, i) => (
          <div key={i} className="ticker-item">
            <div className="ticker-dot" />
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}

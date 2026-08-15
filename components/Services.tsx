const services = [
  {
    num: '01',
    title: 'Brand Identity',
    capabilities: ['Logo & Visual Identity', 'Brand Guidelines', 'Typography Systems', 'Color Strategy', 'Brand Voice & Messaging'],
    img: '/work1.png',
  },
  {
    num: '02',
    title: 'Web Design',
    capabilities: ['Responsive Design', 'Clean UI Layout', 'Fast Loading Speed', 'Conversion Focused Design', 'Cross-Browser Compatibility'],
    img: '/work2.avif',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    capabilities: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Interaction Design'],
    img: '/work3.avif',
  },
  {
    num: '04',
    title: 'Motion & Animation',
    capabilities: ['Brand Films', 'Micro-interactions', 'Scroll Animation', 'Motion Graphics', 'Video Production'],
    img: '/work4.png',
  },
  {
    num: '05',
    title: 'Digital Strategy',
    capabilities: ['Audience Research', 'Brand Positioning', 'Content Strategy', 'Growth Roadmap', 'Market Analysis'],
    img: '/work1.png',
  },
  {
    num: '06',
    title: 'eCommerce Design',
    capabilities: ['Shopify Design', 'Product UX', 'Checkout Optimisation', 'Conversion Strategy', 'Performance Design'],
    img: '/work2.avif',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="svc-ticker-wrap">
        <div className="svc-ticker-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="svc-ticker-item">
              <span className="svc-ticker-star">*</span> OUR SERVICES
            </span>
          ))}
        </div>
      </div>
      <div className="svc-list">
        {services.map((s) => (
          <div key={s.num} className="svc-row reveal">
            <div className="svc-row-left">
              <span className="svc-row-num">({s.num})</span>
              <h3 className="svc-row-title">{s.title}</h3>
            </div>
            <ul className="svc-row-caps">
              {s.capabilities.map((cap) => (
                <li key={cap}>{cap}</li>
              ))}
            </ul>
            <div className="svc-row-img">
              <img src={s.img} alt={s.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

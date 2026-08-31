import Image from 'next/image'

const DiagArrow = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4 14L14 4M14 4H8M14 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const posts = [
  {
    bg: '/blog1.avif',
    category: 'Strategy',
    title: 'CREATIVITY AND BRAND CONSISTENCY',
    excerpt:
      'Modern design systems reshape brand through consistent, scalable, and efficient across every digital and physical touchpoint.',
    href: '#',
  },
  {
    bg: '/blog2.avif',
    category: 'Branding',
    title: 'THE EVOLUTION OF MICRO INTERACTIONS',
    excerpt:
      'Small animations create big impact — subtle movements guide attention, enhance clarity, and shape a smoother, more intuitive user experience.',
    href: '#',
  },
]

export default function Blog() {
  return (
    <section id="blog">
      <div className="blog-top">
        <div className="blog-top-left reveal">
          <div className="blog-eyebrow">
            <span className="blog-star">✦</span>
            <span>Blogs</span>
          </div>
          <h2 className="blog-headline">
            Stories that<br />
            <strong>TRULY INSPIRE US</strong>
          </h2>
        </div>
        <div className="blog-top-right reveal reveal-delay-1">
          <p className="blog-top-desc">
            Discover fresh ideas, actionable insights, and meaningful experiences crafted to
            inspire creativity, accelerate growth, and ignite lasting innovation.
          </p>
          {/* <a href="#blog" className="blog-see-btn">
            See All Posts
            <span className="blog-see-circle">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a> */}
        </div>
      </div>

      <div className="blog-duo">
        {posts.map((post, i) => (
          <a
            href={post.href}
            key={post.title}
            target="_blank"
            rel="noopener noreferrer"
            className={`blog-duo-card reveal${i > 0 ? ' reveal-delay-1' : ''}`}
          >
            <div className="blog-duo-img">
              <Image src={post.bg} alt={post.title} className="blog-img-bg" width={900} height={650} sizes="(max-width: 768px) 100vw, 50vw" />
              <span className="blog-cat-pill">{post.category}</span>
            </div>
            <div className="blog-duo-body">
              <div className="blog-duo-title-row">
                <h3 className="blog-duo-title">{post.title}</h3>
                <span className="blog-duo-arrow"><DiagArrow /></span>
              </div>
              <p className="blog-duo-excerpt">{post.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

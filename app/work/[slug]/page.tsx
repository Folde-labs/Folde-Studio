import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects, ProjectData } from '@/lib/projects'

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const p = projects[slug]
  if (!p) return {}
  return {
    title: p.client,
    description: p.tagline,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      type: 'article',
      url: `/work/${slug}`,
      title: `${p.client} — Folde Studio`,
      description: p.tagline,
      images: [{ url: p.heroImage ?? workImg(p.bgClass), alt: `${p.client} case study` }],
    },
  }
}

function workImg(bgClass: string) {
  const n = bgClass.replace('wk', '')
  return `/work${n}.${n === '1' || n === '4' ? 'png' : 'avif'}`
}

function galleryImgs(bgClass: string): [string, string, string] {
  const all = ['wk1', 'wk2', 'wk3', 'wk4']
  const others = all.filter(c => c !== bgClass)
  return [workImg(others[0]), workImg(others[1]), workImg(others[2])]
}

function heroImg(p: ProjectData) {
  return p.heroImage ?? workImg(p.bgClass)
}

function sectionImgs(p: ProjectData): [string, string, string] {
  return p.sectionImages ?? galleryImgs(p.bgClass)
}

/* ─────────────────────────────────────────────────────────
   Layout A — Editorial sidebar (01 Wowzi, 03 Formii)
   Left thin sidebar + right wide content, all white
───────────────────────────────────────────────────────── */
function LayoutA({ p, next }: { p: ProjectData; next: ProjectData | undefined }) {
  const [img1, img2, img3] = sectionImgs(p)
  return (
    <>
      <Nav />

      {/* FULL-WIDTH header — back link + title */}
      <div className="csa-header">
        <Link href="/work" className="csa-back">← All Projects</Link>
        <div className="csa-title-row">
          <h1 className="csa-title">{p.client}</h1>
          <span className="csa-badge">{p.num}</span>
        </div>
      </div>

      {/* FULL-WIDTH hero image — no sidebar beside it */}
      <div className="csa-hero-img">
        <Image src={heroImg(p)} alt={p.client} width={1800} height={1100} sizes="100vw" priority />
      </div>

      {/* BELOW HERO: narrow sidebar + wide content */}
      <div className="csa-page">
        <aside className="csa-sidebar">
          <div className="csa-field">
            <span className="csa-field-key">Year</span>
            <span className="csa-field-val">{p.year}</span>
          </div>
          <div className="csa-field">
            <span className="csa-field-key">Services</span>
            <span className="csa-field-val">{p.type}</span>
          </div>
          <div className="csa-field">
            <span className="csa-field-key">Result</span>
            <span className="csa-field-val">{p.heroStat} {p.heroStatLabel}</span>
          </div>
          <div className="csa-field">
            <span className="csa-field-key">Tags</span>
            <div className="csa-sidebar-tags">
              {p.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </aside>

        <main className="csa-main">
          <section className="csa-sect">
            <h2 className="csa-sect-head">Project Overview</h2>
            <p className="csa-para">{p.overview}</p>
          </section>

          <div className="csa-img-2col">
            <div className="csa-img-cell"><Image src={img1} alt={p.client} width={1000} height={800} sizes="(max-width: 768px) 100vw, 50vw" /></div>
            <div className="csa-img-cell"><Image src={img2} alt={p.client} width={1000} height={800} sizes="(max-width: 768px) 100vw, 50vw" /></div>
          </div>

          <section className="csa-sect">
            <h2 className="csa-sect-head">{p.challengeLabel}</h2>
            <p className="csa-para">{p.challenge}</p>
            <ul className="csa-list">
              {p.callout.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <div className="csa-img-wide">
            <Image src={img3} alt={p.client} width={1800} height={1000} sizes="100vw" />
          </div>

          <section className="csa-sect">
            <h2 className="csa-sect-head">{p.approachLabel}</h2>
            <p className="csa-para">{p.approach}</p>
          </section>

          {p.execution && (
            <section className="csa-sect">
              <h2 className="csa-sect-head">Execution</h2>
              <p className="csa-para">{p.execution}</p>
            </section>
          )}

          {p.gallery.length > 0 && (
            <div className="csa-img-3col">
              {p.gallery.slice(0, 3).map((src) => (
                <div key={src} className="csa-img-cell"><Image src={src} alt={p.client} width={900} height={700} sizes="(max-width: 768px) 100vw, 33vw" /></div>
              ))}
            </div>
          )}

          {p.gallery.length > 3 && (
            <div className="csa-img-wide">
              <Image src={p.gallery[3]} alt={p.client} width={1800} height={1000} sizes="100vw" />
            </div>
          )}

          {p.gallery.length > 4 && (
            <div className="csa-img-2col">
              {p.gallery.slice(4, 6).map((src) => (
                <div key={src} className="csa-img-cell"><Image src={src} alt={p.client} width={1000} height={800} sizes="(max-width: 768px) 100vw, 50vw" /></div>
              ))}
            </div>
          )}

          {p.gallery.length > 6 && (
            <div className="csa-img-wide">
              <Image src={p.gallery[6]} alt={p.client} width={1800} height={1000} sizes="100vw" />
            </div>
          )}

          {p.gallery.length > 7 && (
            <div className="csa-img-wide">
              <Image src={p.gallery[7]} alt={p.client} width={1800} height={1000} sizes="100vw" />
            </div>
          )}

          <section className="csa-sect">
            <h2 className="csa-sect-head">The Outcome</h2>
            {p.outcomeText && <p className="csa-para">{p.outcomeText}</p>}
            <div className="csa-metrics">
              {p.metrics.map((m) => (
                <div key={m.label} className="csa-metric">
                  <span className="csa-metric-v">{m.value}</span>
                  <span className="csa-metric-l">{m.label}</span>
                  <span className="csa-metric-d">{m.desc}</span>
                </div>
              ))}
            </div>
            <blockquote className="csa-quote">
              <p>&ldquo;{p.quote.text}&rdquo;</p>
              <cite>— {p.quote.author}</cite>
            </blockquote>
          </section>
        </main>
      </div>

      {next && (
        <Link href={`/work/${p.next}`} className="cs2-next">
          <span className="cs2-next-label">Next Project</span>
          <span className="cs2-next-name">{next.client}</span>
          <span className="cs2-next-type">{next.type}</span>
          <svg className="cs2-next-arrow" width="20" height="20" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
      <Footer />
      <RevealObserver />
    </>
  )
}

/* ─────────────────────────────────────────────────────────
   Layout B — Light minimal (02 Must, 04 Mentorable)
   Big title → full hero image → sidebar + content → gallery
───────────────────────────────────────────────────────── */
function LayoutB({ p, next }: { p: ProjectData; next: ProjectData | undefined }) {
  const [img1, img2, img3] = sectionImgs(p)
  return (
    <>
      <Nav />

      <div className="csb-title-section">
        <div className="csb-title-row">
          <h1 className="csb-title">{p.client}</h1>
          <span className="csa-badge">{p.num}</span>
        </div>
      </div>

      <div className="csb-hero-img">
        <Image src={heroImg(p)} alt={p.client} width={1800} height={1100} sizes="100vw" priority />
      </div>

      <div className="csb-body">
        {/* LEFT META */}
        <aside className="csb-meta">
          <div className="csb-meta-field">
            <span className="csb-meta-key">Date</span>
            <span className="csb-meta-val">{p.year}</span>
          </div>
          <div className="csb-meta-field">
            <span className="csb-meta-key">Services</span>
            <span className="csb-meta-val">{p.type}</span>
          </div>
          <div className="csb-meta-field">
            <span className="csb-meta-key">Client</span>
            <span className="csb-meta-val">{p.client}</span>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="csb-content">
          <section className="csb-sect">
            <h2 className="csb-heading">Project Overview</h2>
            <p className="csb-para">{p.overview}</p>
          </section>
          <section className="csb-sect">
            <h2 className="csb-heading">{p.challengeLabel}</h2>
            <p className="csb-para">{p.challenge}</p>
          </section>
          <section className="csb-sect">
            <h2 className="csb-heading">{p.approachLabel}</h2>
            <p className="csb-para">{p.approach}</p>
          </section>
          {p.execution && (
            <section className="csb-sect">
              <h2 className="csb-heading">Execution</h2>
              <p className="csb-para">{p.execution}</p>
            </section>
          )}
        </div>
      </div>

      {/* 3-col gallery */}
      <div className="csb-gallery">
        <div className="csb-gallery-cell"><Image src={img1} alt={p.client} width={900} height={700} sizes="(max-width: 768px) 100vw, 33vw" /></div>
        <div className="csb-gallery-cell"><Image src={img2} alt={p.client} width={900} height={700} sizes="(max-width: 768px) 100vw, 33vw" /></div>
        <div className="csb-gallery-cell"><Image src={img3} alt={p.client} width={900} height={700} sizes="(max-width: 768px) 100vw, 33vw" /></div>
      </div>

      {/* Outcome */}
      <div className="csb-outcome">
        {p.outcomeText && <p className="csb-outcome-text">{p.outcomeText}</p>}
        <div className="csa-metrics">
          {p.metrics.map((m) => (
            <div key={m.label} className="csa-metric">
              <span className="csa-metric-v">{m.value}</span>
              <span className="csa-metric-l">{m.label}</span>
              <span className="csa-metric-d">{m.desc}</span>
            </div>
          ))}
        </div>
        <blockquote className="csa-quote">
          <p>&ldquo;{p.quote.text}&rdquo;</p>
          <cite>— {p.quote.author}</cite>
        </blockquote>
      </div>

      {next && (
        <Link href={`/work/${p.next}`} className="cs2-next">
          <span className="cs2-next-label">Next Project</span>
          <span className="cs2-next-name">{next.client}</span>
          <span className="cs2-next-type">{next.type}</span>
          <svg className="cs2-next-arrow" width="20" height="20" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}

      <Footer />
      <RevealObserver />
    </>
  )
}

/* ─── Route ─── */
export default async function CaseStudyPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const p = projects[slug]
  if (!p) notFound()
  const next = p.next ? projects[p.next] : undefined
  const isOdd = parseInt(p.num) % 2 === 1
  return isOdd ? <LayoutA p={p} next={next} /> : <LayoutB p={p} next={next} />
}

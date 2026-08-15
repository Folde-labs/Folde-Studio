export type ProjectData = {
  num: string
  client: string
  type: string
  year: string
  tagline: string
  heroStat: string
  heroStatLabel: string
  heroStatContext: string
  overview: string
  challengeLabel: string
  challenge: string
  approachLabel: string
  approach: string
  execution: string
  outcomeText: string
  callout: { eyebrow: string; heading: string; items: string[] }
  metrics: { value: string; label: string; desc: string }[]
  quote: { text: string; author: string }
  tags: string[]
  next: string
  bgClass: string
  heroSvg: React.ReactNode
  gallerySvgs: [React.ReactNode, React.ReactNode, React.ReactNode]
  videoCaption: string
  gallery: string[]
}

export const projects: Record<string, ProjectData> = {
  ovrae: {
    num: '01',
    client: 'OVRAE',
    type: 'Brand Identity & Packaging Design',
    year: '2026',
    tagline: `A brand built around dignity — quiet luxury feminine care, designed for women who were tired of hiding.`,
    heroStat: '100%',
    heroStatLabel: 'Organic Materials',
    heroStatContext: `Every product touchpoint — carry tin, individually wrapped pad, wipe, and subscription box — specced to a full-stack organic standard with no compromises across the supply chain.`,
    overview: `Ovrae launched into a feminine care category where every competitor — from Rael and Cora to local entrants — had converged on the same claims: organic cotton, sustainable packaging, give-back models. No brand was speaking to African women in their own cultural and physical context, and none had built a full-stack organic system that felt like it belonged on a skincare shelf. The brief was rooted in lived experience — PCOS, endometriosis, pain dismissed as normal — and the insight was sharp: the product wasn't the gap. Dignity was.`,
    challengeLabel: 'The Challenge',
    challenge: `Feminine care is one of the most culturally loaded product categories in the world, and in African markets it carries additional weight: the products themselves are often hidden — tucked inside food wrappers, avoided in public. Competitive analysis showed a converging market with no meaningful visual differentiation and no brand speaking directly to the physical and cultural experience of African women. The brief wasn't just packaging. It was to build a brand that treated the cycle as something to understand rather than hide — and to do it without borrowing the clinical language that had defined the category for decades.`,
    approachLabel: 'The Approach',
    approach: `We began with founder workshops and a competitive audit mapping every brand in the space — Rael, Cora, August, and local entrants — against visual language, ingredient transparency, cultural specificity, and tone of voice. The white space was clear: quiet, dignified, full-stack organic, culturally honest. We defined Ovrae's inner world as "your body, decoded" and built the North Star — honest ingredients, carried without embarrassment — as the filter for every decision that followed. The visual system moved deliberately away from clinical blue-and-white pharmacy codes and toward the language of quiet luxury skincare. Soft sage, dusty blush, and kraft tones replace medical colour-coding. Matte aluminium and kraft paper replace plastic shine. The lowercase "ovrae." mark became the signature of that shift — a brand that treats its name the way it treats its products: without unnecessary force.`,
    execution: `The final system covers 4 core touchpoints — period pad carry bag, panty liner wallet, wet wipe pouch, and spare pad sleeve. The 100% organic material stack runs from formula to packaging: no synthetics, no greenwashing. A carry-first design means the primary packaging is the bag itself — a minimal, reusable tote with a tonal label, not a box you throw away. Shipped as a complete feminine hygiene carry system designed to be the first in its category to look as good as it works.`,
    outcomeText: `The result is the first brand in its category to be designed carry-first, not product-first. The visual system is ready to scale — from DTC to retail, from Lagos to London — because it was built on principles, not aesthetics. Ovrae now has the assets, tone, and system to move from a founding product range into a broader wellness brand as the category grows. The 100% organic material stack, the quiet luxury positioning, and the carry-first innovation make it genuinely first in category — not as a claim, but as a design decision that shows in every touchpoint.`,
    callout: {
      eyebrow: 'Deliverables',
      heading: 'A Full Brand & Carry System',
      items: [
        'Brand identity: lowercase wordmark, typographic system, and colour architecture (soft sage, dusty blush, kraft)',
        'Brand North Star and inner-world strategy framework',
        'Full product packaging system: carry tin, individually wrapped pad, subscription box, and wipe',
        'Matte aluminium and kraft paper material direction across all touchpoints',
        'Competitive positioning framework and cultural insight report',
        'Digital brand presence and tone-of-voice guidelines',
        'WhatsApp community brand expression system',
      ],
    },
    metrics: [
      { value: '100%', label: 'Organic Stack',    desc: 'Every material across tin, wrapper, wipe, and box specced to full-stack organic standards' },
      { value: '4',    label: 'Product Touchpoints', desc: 'Unified carry system: individually wrapped pad, carry tin, wipe, and subscription box' },
      { value: '1st',  label: 'In Category',      desc: 'First brand in the African feminine care market to pair full-stack organic transparency with a quiet luxury visual identity' },
    ],
    quote: {
      text: `We needed a brand that tells the truth about what touches her body — something she's proud to carry in the open, not hide inside a wrapper.`,
      author: 'Founder, Ovrae',
    },
    tags: ['Brand Identity', 'Packaging Design', 'Femtech', 'Wellness', 'African Market'],
    next: 'tirra',
    bgClass: 'wk1',
    videoCaption: 'Brand identity and carry system — full packaging walkthrough, 2026',
    gallery: [
      '/ovrae-2.png',
      '/ovrae-3.png',
      '/ovrae-4.png',
      '/ovrae-cover.png',
      '/ovrae-5.png',
      '/ovrae-6.png',
      '/ovrae-moodboard.png',
      '/ovrae-illustrations.png',
    ],
    heroSvg: (
      <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
        <circle cx="130" cy="130" r="120" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <circle cx="130" cy="130" r="90"  stroke="rgba(255,255,255,0.2)"  strokeWidth="1.5" />
        <circle cx="130" cy="130" r="60"  stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <circle cx="130" cy="130" r="30"  fill="rgba(255,255,255,0.9)" />
        <circle cx="130" cy="130" r="14"  fill="rgba(255,255,255,0.4)" />
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => {
          const rad = (deg * Math.PI) / 180
          return (
            <line key={deg}
              x1={130 + 32 * Math.cos(rad)} y1={130 + 32 * Math.sin(rad)}
              x2={130 + 88 * Math.cos(rad)} y2={130 + 88 * Math.sin(rad)}
              stroke="rgba(255,255,255,0.15)" strokeWidth="1"
            />
          )
        })}
      </svg>
    ),
    gallerySvgs: [
      <svg key="g1" width="100%" height="100%" viewBox="0 0 400 500" fill="none">
        <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <circle cx="200" cy="200" r="100" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <circle cx="200" cy="200" r="60"  stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" />
        <circle cx="200" cy="200" r="24"  fill="rgba(255,255,255,0.95)" />
        <rect x="60" y="390" width="280" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="60" y="406" width="180" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="60" y="422" width="220" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
      </svg>,
      <svg key="g2" width="100%" height="100%" viewBox="0 0 300 300" fill="none">
        <rect x="24" y="40" width="252" height="28" rx="4" fill="rgba(255,255,255,0.9)" />
        <rect x="24" y="82" width="200" height="20" rx="4" fill="rgba(255,255,255,0.65)" />
        <rect x="24" y="116" width="240" height="16" rx="4" fill="rgba(255,255,255,0.45)" />
        <rect x="24" y="146" width="180" height="12" rx="4" fill="rgba(255,255,255,0.3)" />
        <rect x="24" y="172" width="210" height="10" rx="4" fill="rgba(255,255,255,0.2)" />
        <rect x="24" y="196" width="160" height="8"  rx="4" fill="rgba(255,255,255,0.15)" />
        <rect x="24" y="240" width="60" height="60" rx="8" fill="rgba(255,255,255,0.9)" />
        <rect x="96" y="240" width="60" height="60" rx="8" fill="rgba(255,255,255,0.5)" />
        <rect x="168" y="240" width="60" height="60" rx="8" fill="rgba(255,255,255,0.2)" />
      </svg>,
      <svg key="g3" width="100%" height="100%" viewBox="0 0 300 300" fill="none">
        {[0,1,2,3,4,5,6,7,8].map((i) => (
          <circle key={i}
            cx={36 + (i % 3) * 80}
            cy={48 + Math.floor(i / 3) * 80}
            r={28}
            fill={`rgba(255,255,255,${0.95 - i * 0.08})`}
          />
        ))}
        <rect x="24" y="250" width="252" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
        <rect x="24" y="268" width="180" height="8" rx="4" fill="rgba(255,255,255,0.07)" />
      </svg>,
    ],
  },

  tirra: {
    num: '02',
    client: 'TIRRA',
    type: 'Fintech Rebrand & Product Design',
    year: '2025',
    tagline: `Rebuilt from viral infamy to earned trust — a complete rebrand that turned perception damage into a product people would move money through.`,
    heroStat: '6×',
    heroStatLabel: 'User Growth',
    heroStatContext: `From 100 users under Azawire to a 600+ person waitlist under Tirra — delivered 100% end-to-end across iOS, Android, and web in 8 months, before raising a single round of funding.`,
    overview: `Tirra — formerly Azawire — launched into one of the hardest positions a fintech product can occupy: the internet had already passed judgement. "Azawire" had gone viral in Nigerian fintech circles for all the wrong reasons, and the name had become synonymous with scam. But the problem wasn't the UI — it was perception. Public sentiment analysis and user review audits made it clear the real audience was people who had lost trust in crypto products entirely, and needed proof, not promises, before they'd tap a single button. The brief was to rebuild from the ground up.`,
    challengeLabel: 'The Challenge',
    challenge: `A rebrand in fintech is not just a visual exercise — it is a trust rebuild. Before the redesign, Azawire had 100 users, a 30% activation rate, and 10% retention: a product technically live but emotionally rejected. The redesign had to do two things simultaneously — create a new identity credible enough to erase the old association, and redesign the product experience so that first-time users could understand and complete a transaction without dropping off. Three surfaces — iOS, Android, and a web landing page — had to ship as one coherent system, under one new name, at the same time.`,
    approachLabel: 'The Approach',
    approach: `We defined Tirra's inner world as "clarity over features" — a product that earns every tap instead of overwhelming users with a feature-heavy dashboard. The North Star was deceptively simple: show the live exchange rate. The most honest signal was also the most trust-building one, and it became the filter for every screen, every flow, and every word. The visual world reframes Tirra from a scam-adjacent app to a credible financial product — a distinct, ownable design system with tokens, components, and interaction patterns that replaced the scattered, feature-led hierarchy of Azawire. Every screen, from onboarding to the send flow, reads like a guided journey rather than a dashboard of options, with visible status transparency and confirmation feedback at every step.`,
    execution: `Applied across iOS, Android, and the web landing page simultaneously, this system makes Tirra feel like one cohesive voice instead of three disconnected surfaces. The core transaction flow was cut from 9 steps down to 3. Onboarding was rebuilt around the user's trust journey rather than the product's feature list. The rebrand was delivered end-to-end — name, token, and component system shipped together across all 3 surfaces in 8 months, before raising a single round of funding.`,
    outcomeText: `The result is the first cohesive identity Tirra has ever had — connecting every screen in the product under one system instead of nine fragmented steps. Users could finally explain what the product was for, something they couldn't do before the redesign. Before the redesign, Azawire had just 100 users, a 30% activation rate, and 10% retention — a product technically live but emotionally rejected. After the rebrand, Tirra grew to a 600+ person waitlist, with 250+ active pilot users and over 1,000 beta transactions processed. The product secured key infrastructure partnerships with Sudo, SafeHaven MFB, Bridge by Stripe, and cNGN — all before raising a single round of funding. More than a rebrand, Tirra became proof that clarity — not capital — is what earns trust back first.`,
    callout: {
      eyebrow: 'Deliverables',
      heading: 'End-to-End Rebrand Across 3 Surfaces',
      items: [
        'Full rebrand: new name (Tirra), wordmark, and ownable visual token system',
        'Product design system: tokens, components, and interaction patterns',
        'Core transaction flow redesign: 9 steps → 3',
        'Trust-first onboarding rebuilt around the user\'s skepticism journey',
        'iOS, Android, and web landing page redesigned in parallel',
        'Visible status transparency: confirmation and feedback at every step',
        'Web landing page anchored on live exchange rate as primary trust signal',
      ],
    },
    metrics: [
      { value: '6×',    label: 'User Growth',         desc: 'From 100 Azawire users to a 600+ person Tirra waitlist' },
      { value: '9→3',   label: 'Transaction Steps',   desc: 'Core send flow cut from 9 steps to 3 — the single biggest activation win' },
      { value: '1,000+', label: 'Beta Transactions',  desc: 'Processed by 250+ active pilot users before a single funding round' },
    ],
    quote: {
      text: `Before the rebrand, users couldn't explain what the product was for. After, they were funding wallets and moving money through it. That shift didn't come from new features — it came from clarity.`,
      author: 'Founder, Tirra',
    },
    tags: ['Fintech', 'Product Design', 'Brand Rebrand', 'Crypto', 'Nigeria'],
    next: 'canann',
    bgClass: 'wk2',
    videoCaption: 'Product walkthrough — trust-first rebrand across iOS, Android, and web, 2025',
    gallery: [],
    heroSvg: (
      <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
        <polygon points="130,10 250,230 10,230" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
        <polygon points="130,40 225,215 35,215"  stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" />
        <polygon points="130,70 200,200 60,200"  stroke="rgba(255,255,255,0.55)" strokeWidth="2" fill="none" />
        <polygon points="130,95 178,185 82,185"  fill="rgba(255,255,255,0.15)" />
        <circle cx="130" cy="155" r="20" fill="rgba(255,255,255,0.95)" />
        <circle cx="130" cy="155" r="9"  fill="rgba(255,255,255,0.4)" />
      </svg>
    ),
    gallerySvgs: [
      <svg key="g1" width="100%" height="100%" viewBox="0 0 400 500" fill="none">
        <polygon points="200,40 370,460 30,460" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
        <polygon points="200,80 340,440 60,440"  fill="rgba(255,255,255,0.06)" />
        <polygon points="200,120 310,420 90,420" fill="rgba(255,255,255,0.06)" />
        <rect x="80" y="340" width="240" height="32" rx="4" fill="rgba(255,255,255,0.9)" />
        <rect x="80" y="384" width="160" height="20" rx="4" fill="rgba(255,255,255,0.4)" />
        <circle cx="200" cy="280" r="36" fill="rgba(255,255,255,0.85)" />
      </svg>,
      <svg key="g2" width="100%" height="100%" viewBox="0 0 300 300" fill="none">
        <rect x="16" y="16" width="124" height="124" rx="8" fill="rgba(255,255,255,0.15)" />
        <rect x="160" y="16" width="124" height="60" rx="8" fill="rgba(255,255,255,0.15)" />
        <rect x="160" y="88" width="124" height="52" rx="8" fill="rgba(255,255,255,0.1)" />
        <rect x="16" y="160" width="60" height="124" rx="8" fill="rgba(255,255,255,0.1)" />
        <rect x="88" y="160" width="196" height="56" rx="8" fill="rgba(255,255,255,0.15)" />
        <rect x="88" y="228" width="196" height="56" rx="8" fill="rgba(255,255,255,0.1)" />
        <circle cx="78" cy="78" r="22" fill="rgba(255,255,255,0.7)" />
      </svg>,
      <svg key="g3" width="100%" height="100%" viewBox="0 0 300 300" fill="none">
        <rect x="20" y="20" width="260" height="146" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <polygon points="150,55 150,125 215,90" fill="rgba(255,255,255,0.7)" />
        <rect x="20" y="186" width="80" height="48" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="110" y="186" width="80" height="48" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="200" y="186" width="80" height="48" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="20" y="250" width="120" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
        <rect x="20" y="268" width="80" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
      </svg>,
    ],
  },

  canann: {
    num: '03',
    client: 'CANANN',
    type: 'Nonprofit Digital Identity & Web Design',
    year: '2026',
    tagline: `A digital platform that turns grassroots impact into something donors can see, believe, and act on — proof-first, not guilt-first.`,
    heroStat: '1,200+',
    heroStatLabel: 'Learners Trained',
    heroStatContext: `Canann's reach across four active programmes — Tech in School, Pad a Girl, GroundUp Skills, and Green Workforce — with every number traceable to a real device, a real classroom, a real life.`,
    overview: `Canann Impact Foundation launched into a digital space crowded with generic NGO sites — stock photos, guilt-driven donation appeals, and programmes that felt distant from the people they claimed to serve. But Canann's real strength was proof: 1,200+ learners trained, 48+ volunteers on the ground, real devices in real classrooms across grassroots Nigeria. The brief was to build a digital identity that felt as warm, urgent, and unmistakably human as the communities the foundation serves — and to make every ₦1,000 donation feel traceable, tangible, and worth giving.`,
    challengeLabel: 'The Challenge',
    challenge: `Nonprofit digital design has a recurring problem: the websites that ask for the most trust often do the least to earn it. Generic stock photography, vague impact claims, and guilt-first copywriting have trained donors to tune out. Canann needed to break that pattern — not by looking more like a charity, but by looking more credible. The site had to lead with evidence over emotion, turning real impact numbers and real community stories into a platform that felt closer to a modern social enterprise than a traditional NGO appeal.`,
    approachLabel: 'The Approach',
    approach: `We defined Canann's inner world as "small actions, big impact" — a platform that makes every donation tangible: a device in a child's hands, a pad that keeps a girl in school, a skill that builds a livelihood. The North Star, "where small actions lead to big impact," became the filter for every headline, cause description, and call to action. Visually, we moved Canann from charity to movement — warm photography of real learners and volunteers, confident impact numbers, and a clean editorial layout that positions the foundation closer to a modern social enterprise. Each of the four causes — Tech in School, Pad a Girl, GroundUp Skills, and Green Workforce — was designed as its own mini campaign with a clear goal, a human story, and a direct path to support.`,
    execution: `Built in Next.js with Framer Motion, the platform delivers the full digital identity system end-to-end — homepage, four individual cause pages (each designed as a mini campaign), donation flow, and impact storytelling framework. Real numbers are presented as real proof: traceable donations, live impact counters, and photography that shows the humans behind the stats. A cause-as-campaign visual system gives each programme its own identity within a unified brand, so donors can navigate by the cause that moves them most.`,
    outcomeText: `The result is a platform that turns grassroots impact into something a donor can see, trace, and trust — not just a charity website, but a proof-first digital movement. Canann can now communicate its four programmes clearly, showcase real community impact, and give donors a direct path from discovery to action. Where before the foundation existed only in grant documents and community rooms, it now has a digital presence as confident and credible as the work it represents.`,
    callout: {
      eyebrow: 'Deliverables',
      heading: 'A Movement-Focused Digital Platform',
      items: [
        'Brand identity and North Star strategy: "Where small actions lead to big impact"',
        'Homepage editorial system: proof-first layout with live impact counters',
        'Four individual cause pages — Tech in School, Pad a Girl, GroundUp Skills, Green Workforce',
        'Donation flow UX: transparent, traceable giving from first click to confirmation',
        'Impact storytelling framework: photography direction and volunteer and learner features',
        'Built in Next.js with Framer Motion animations for a live momentum feel',
        'Cause-as-campaign visual system: individual identity per programme within a unified brand',
      ],
    },
    metrics: [
      { value: '1,200+', label: 'Learners Trained',  desc: 'Reached across four active programmes since the foundation began' },
      { value: '48+',    label: 'Active Volunteers', desc: 'On the ground across partner schools and communities in Nigeria' },
      { value: '4',      label: 'Cause Programmes',  desc: 'Each its own mini campaign — Tech in School, Pad a Girl, GroundUp Skills, Green Workforce' },
    ],
    quote: {
      text: `For the first time, when a donor lands on our site, they can see exactly where their money goes. That's what we needed — not just a website, but proof.`,
      author: 'Director, Canann Impact Foundation',
    },
    tags: ['Nonprofit', 'Web Design', 'Social Impact', 'Next.js', 'Nigeria'],
    next: 'gtwa',
    bgClass: 'wk3',
    videoCaption: 'Platform walkthrough — cause pages, donation flow, and impact system, 2026',
    gallery: [
      '/canann-1.jpg',
      '/canann-2.jpg',
      '/canann-3.jpg',
      '/canann-4.jpg',
    ],
    heroSvg: (
      <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
        <rect x="20" y="40" width="220" height="24" rx="12" fill="rgba(255,255,255,0.9)" />
        <rect x="20" y="78" width="148" height="18" rx="9" fill="rgba(255,255,255,0.65)" />
        <rect x="20" y="112" width="185" height="18" rx="9" fill="rgba(255,255,255,0.45)" />
        <rect x="20" y="146" width="110" height="18" rx="9" fill="rgba(255,255,255,0.3)" />
        <rect x="20" y="186" width="220" height="52" rx="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="44" cy="212" r="12" fill="rgba(255,255,255,0.6)" />
        <rect x="66" y="205" width="100" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
        <rect x="66" y="219" width="70" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      </svg>
    ),
    gallerySvgs: [
      <svg key="g1" width="100%" height="100%" viewBox="0 0 400 500" fill="none">
        <rect x="100" y="30" width="200" height="440" rx="24" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <rect x="116" y="70" width="168" height="12" rx="6" fill="rgba(255,255,255,0.5)" />
        <rect x="116" y="94" width="120" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
        <rect x="116" y="124" width="168" height="80" rx="10" fill="rgba(255,255,255,0.12)" />
        <circle cx="152" cy="164" r="16" fill="rgba(255,255,255,0.6)" />
        <rect x="180" y="156" width="88" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
        <rect x="180" y="170" width="60" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="116" y="220" width="168" height="80" rx="10" fill="rgba(255,255,255,0.08)" />
        <rect x="116" y="316" width="168" height="80" rx="10" fill="rgba(255,255,255,0.06)" />
        <rect x="116" y="430" width="72" height="28" rx="14" fill="rgba(255,255,255,0.8)" />
        <rect x="200" y="430" width="84" height="28" rx="14" fill="rgba(255,255,255,0.15)" />
      </svg>,
      <svg key="g2" width="100%" height="100%" viewBox="0 0 300 300" fill="none">
        {[0,1,2,3,4,5].map((i) => (
          <rect key={i}
            x={16 + (i % 2) * 144} y={16 + Math.floor(i / 2) * 96}
            width="126" height="80" rx="8"
            fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"
          />
        ))}
        <rect x="32" y="36"  width="80" height="8" rx="4" fill="rgba(255,255,255,0.6)" />
        <rect x="32" y="52"  width="56" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
        <rect x="32" y="68"  width="94" height="20" rx="10" fill="rgba(255,255,255,0.7)" />
      </svg>,
      <svg key="g3" width="100%" height="100%" viewBox="0 0 300 300" fill="none">
        <rect x="20"  y="120" width="60" height="60" rx="8" fill="rgba(255,255,255,0.8)" />
        <rect x="120" y="120" width="60" height="60" rx="8" fill="rgba(255,255,255,0.5)" />
        <rect x="220" y="120" width="60" height="60" rx="8" fill="rgba(255,255,255,0.3)" />
        <path d="M82 150 L118 150" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M182 150 L218 150" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M113 145 L118 150 L113 155" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M213 145 L218 150 L213 155" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="20" y="50" width="260" height="40" rx="8" fill="rgba(255,255,255,0.07)" />
        <rect x="32" y="62" width="100" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
        <rect x="20" y="220" width="260" height="40" rx="8" fill="rgba(255,255,255,0.07)" />
        <rect x="32" y="232" width="80" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
      </svg>,
    ],
  },

  gtwa: {
    num: '04',
    client: 'GTWA',
    type: 'Website Design',
    year: '2025–2026',
    tagline: `A digital home for girls and the mothers raising them.`,
    heroStat: '4',
    heroStatLabel: 'Programmes',
    heroStatContext: `Mental health awareness, leadership building, mentorship sessions, and youth clubs — each with its own digital invitation.`,
    overview: `Girls Talk with Abigail launched into the digital space with no online presence at all — a community initiative running real seminars, youth clubs, and mentorship sessions that was invisible to anyone searching for it. We built their first digital home: a website designed to answer the one question every worried parent asks before they commit.`,
    challengeLabel: 'The Challenge',
    challenge: `GTWA had no online presence despite an active, well-loved community programme. The real audience wasn't just the girls — it was the mothers and guardians searching for a trustworthy space to send their daughters. They needed to feel the initiative's care before they'd commit to it, and there was nowhere for them to look.`,
    approachLabel: 'The Approach',
    approach: `We defined GTWA's inner world as "a safe place to become" — a platform that feels less like an organisation's website and more like an open door. The North Star, "support the girl child, support the mother raising her," became the filter for every page, every word, and every image. Warm, approachable photography, soft typography, and a calm colour palette position the initiative as a space built on trust rather than authority. Each programme — mental health awareness, leadership building, mentorship sessions, youth clubs — reads as its own invitation, clearly explained and easy to act on.`,
    execution: `Designed and built end-to-end as a full website from zero, this system gives GTWA its first real digital home — a place to explain its mission, showcase its programmes, and invite girls and mothers in without needing a single conversation first. Every page was built to answer the same question a worried parent might ask: is this safe, and is this for us?`,
    outcomeText: `The result is GTWA's first true online presence — turning a community initiative that previously lived only in physical rooms and word-of-mouth into something discoverable, explainable, and shareable. Mothers and girls can now find the initiative, understand its mission, and see a clear path to get involved — something that simply didn't exist before. More than a website, GTWA now has a digital front door that matches the warmth of the work happening inside its seminars and mentorship sessions — making it easier for the initiative to grow beyond the rooms it started in.`,
    callout: {
      eyebrow: 'What we were solving',
      heading: 'Invisible to the people who needed it most',
      items: [
        'Zero digital presence despite active seminars, youth clubs, and mentorship sessions running in real rooms',
        'Primary audience: mothers searching for a trustworthy space — not just the girls themselves',
        'Four programmes needed their own clear invitation: mental health, leadership, mentorship, and youth clubs',
      ],
    },
    metrics: [
      { value: '0 → 1', label: 'Online Presence', desc: 'First digital home — from word-of-mouth only to a fully discoverable website' },
      { value: '4',     label: 'Programmes',       desc: 'Each clearly explained and easy to act on for mothers and girls' },
      { value: '100%',  label: 'Built From Zero',  desc: 'Designed and built end-to-end with no prior digital infrastructure' },
    ],
    quote: {
      text: `For the first time, a mother can find us, understand what we do, and feel confident bringing her daughter — without needing anyone to explain it.`,
      author: 'Abigail, Founder · GTWA',
    },
    tags: ['Website Design', 'Community', 'Social Impact', 'Next.js', 'Youth Empowerment'],
    next: 'ovrae',
    bgClass: 'wk4',
    videoCaption: 'GTWA — first digital home for a community initiative built from zero, 2025–2026',
    gallery: [],
    heroSvg: (
      <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
        <circle cx="50"  cy="130" r="30" fill="rgba(255,255,255,0.9)" />
        <circle cx="210" cy="60"  r="30" fill="rgba(255,255,255,0.9)" />
        <circle cx="210" cy="200" r="30" fill="rgba(255,255,255,0.9)" />
        <path d="M80 130 L180 68"  stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
        <path d="M80 130 L180 196" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
        <path d="M180 68 L180 196" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
        <circle cx="50"  cy="130" r="12" fill="rgba(255,255,255,0.35)" />
        <circle cx="210" cy="60"  r="12" fill="rgba(255,255,255,0.35)" />
        <circle cx="210" cy="200" r="12" fill="rgba(255,255,255,0.35)" />
      </svg>
    ),
    gallerySvgs: [
      <svg key="g1" width="100%" height="100%" viewBox="0 0 400 500" fill="none">
        <rect x="20" y="20" width="360" height="50" rx="8" fill="rgba(255,255,255,0.12)" />
        <rect x="36" y="34" width="80" height="10" rx="5" fill="rgba(255,255,255,0.6)" />
        <rect x="290" y="32" width="72" height="18" rx="9" fill="rgba(255,255,255,0.5)" />
        <rect x="20"  y="90"  width="170" height="130" rx="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <rect x="210" y="90"  width="170" height="130" rx="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <rect x="36"  y="108" width="60" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
        <rect x="36"  y="124" width="100" height="40" rx="6" fill="rgba(255,255,255,0.7)" />
        <rect x="36"  y="172" width="80" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="226" y="108" width="60" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
        <rect x="20" y="240" width="360" height="100" rx="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {[0,1,2,3,4,5,6].map((i) => (
          <rect key={i} x={36 + i * 48} y={320 - i * 18} width="36" height={20 + i * 18} rx="4" fill={`rgba(255,255,255,${0.15 + i * 0.08})`} />
        ))}
        <rect x="20" y="360" width="360" height="120" rx="10" fill="rgba(255,255,255,0.05)" />
      </svg>,
      <svg key="g2" width="100%" height="100%" viewBox="0 0 300 300" fill="none">
        {[0,1,2,3].map((i) => (
          <g key={i}>
            <circle cx="40" cy={56 + i * 64} r="16" fill={i === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.15)'} />
            <rect x="68" y={49 + i * 64} width="140" height="8" rx="4" fill={`rgba(255,255,255,${0.5 - i * 0.1})`} />
            <rect x="68" y={63 + i * 64} width="100" height="6" rx="3" fill={`rgba(255,255,255,${0.25 - i * 0.05})`} />
            {i < 3 && <line x1="40" y1={73 + i * 64} x2="40" y2={88 + i * 64} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />}
          </g>
        ))}
      </svg>,
      <svg key="g3" width="100%" height="100%" viewBox="0 0 300 300" fill="none">
        <circle cx="150" cy="110" r="50" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M135 110 L147 122 L167 100" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="60"  y="182" width="180" height="10" rx="5" fill="rgba(255,255,255,0.4)" />
        <rect x="80"  y="200" width="140" height="8"  rx="4" fill="rgba(255,255,255,0.2)" />
        <rect x="100" y="226" width="100" height="32" rx="16" fill="rgba(255,255,255,0.7)" />
        <rect x="30"  y="272" width="240" height="6"  rx="3" fill="rgba(255,255,255,0.08)" />
      </svg>,
    ],
  },
}

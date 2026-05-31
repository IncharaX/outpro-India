import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <span className="eyebrow">India's Premier Digital Agency</span>
          <h1>We Build Digital Brands That <em>Perform</em></h1>
          <p>End-to-end web design, development & growth systems for India's fastest-scaling businesses. From Figma to deployment — we own every pixel.</p>
          <div className="hero-actions">
            <Link to="/portfolio" className="button primary">See Our Work</Link>
            <Link to="/contact" className="button secondary">Start a Project →</Link>
          </div>
          <div className="trust-strip">
            <span>✓ 150+ Projects Delivered</span>
            <span>✓ 98% Client Satisfaction</span>
            <span>✓ 8+ Years Experience</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="hero-card-label">outpro.india</span>
          </div>
          <p className="hero-card-sub">Core Services</p>
          <div className="vis-chips">
            {['React / Next.js','UI/UX Design','Node.js','Brand Strategy','SEO & GA4','E-Commerce','Mobile Apps','CRM Setup'].map(c => (
              <span key={c} className="vis-chip">{c}</span>
            ))}
          </div>
          <div className="vis-stats">
            <div className="vis-stat"><strong>90+</strong><span>PageSpeed</span></div>
            <div className="vis-stat"><strong>&lt;2.5s</strong><span>Load Time</span></div>
            <div className="vis-stat"><strong>GA4</strong><span>Analytics</span></div>
          </div>
        </div>
      </section>

      {/* METRICS BAND */}
      <div className="metrics-band">
        <div><strong>150+</strong><span>Projects Delivered</span></div>
        <div><strong>98%</strong><span>Client Satisfaction</span></div>
        <div><strong>8+</strong><span>Years Experience</span></div>
        <div><strong>40+</strong><span>Expert Team Members</span></div>
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="section">
        <div className="section-header">
          <span className="eyebrow">What We Offer</span>
          <h2>End-to-End Digital Services</h2>
          <p>From strategy to deployment — we handle the entire digital lifecycle so you can focus on growing your business.</p>
        </div>
        <div className="home-service-grid">
          {[
            { icon:'🎨', title:'UI/UX Design', desc:'Pixel-perfect Figma designs with brand systems and conversion-focused layouts handed off before dev begins.', tags:['Figma','Adobe XD','Prototyping'] },
            { icon:'⚡', title:'Web Development', desc:'React.js / Next.js frontends with Node.js / Python backends — fast, scalable, and SEO-optimised.', tags:['React','Next.js','Node.js'] },
            { icon:'📈', title:'Growth & Analytics', desc:'GA4 setup, Search Console, CRM integration, and lead gen systems that turn traffic into revenue.', tags:['GA4','SEO','HubSpot'] },
          ].map(s => (
            <div key={s.title} className="service-card">
              <div className="icon-tile">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="svc-tags">
                {s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '24px' }}>
          <Link to="/services" className="button secondary">View All Services →</Link>
        </div>
      </section>

      {/* FEATURED PORTFOLIO */}
      <section className="section muted">
        <div className="section-header">
          <span className="eyebrow">Our Work</span>
          <h2>Featured Projects</h2>
          <p>A selection of recent work across industries — each built to perform, not just impress.</p>
        </div>
        <div className="home-case-grid">
          {[
            { bg:'linear-gradient(135deg,#0f3142,#15576b)', cat:'E-Commerce', client:'LuxeCart', title:'Fashion Platform Redesign', desc:'Next.js storefront with custom CMS and Razorpay integration.', kpis:['3.2× Conv. Rate','98 PageSpeed','₹4Cr GMV/mo'] },
            { bg:'linear-gradient(135deg,#0e8f8f,#0a6666)', cat:'SaaS', client:'FlowDesk', title:'B2B Analytics Dashboard', desc:'Real-time data, multi-tenant auth, Slack + Jira integrations.', kpis:['40% Faster Ops','12k+ Users'] },
            { bg:'linear-gradient(135deg,#1a3a1a,#2d5a2d)', cat:'Branding', client:'GreenRoot', title:'Sustainability Brand & Web', desc:'Full brand identity, Figma design system, React + CMS.', kpis:['5× Leads','95 PageSpeed'] },
          ].map(p => (
            <div key={p.title} className="case-card">
              <div className="case-thumb" style={{ background: p.bg }}>
                <span className="case-cat">{p.cat}</span>
              </div>
              <div className="case-content">
                <div className="cat-label">{p.client}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="kpi-list">
                  {p.kpis.map(k => <strong key={k}>{k}</strong>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '24px' }}>
          <Link to="/portfolio" className="button secondary">View All Projects →</Link>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="cta-band">
        <div>
          <span className="eyebrow">Ready to grow?</span>
          <h2>Let's Build Something Remarkable Together</h2>
          <p>Tell us about your project. We respond within 24 hours with a tailored proposal.</p>
        </div>
        <div className="cta-btns">
          <Link to="/contact" className="button light">Start a Project</Link>
          <Link to="/portfolio" className="button secondary">See Our Work</Link>
        </div>
      </div>
    </>
  )
}
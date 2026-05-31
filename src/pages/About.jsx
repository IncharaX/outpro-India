import { Link } from 'react-router-dom'
import './About.css'

const team = [
  { initials:'AK', name:'Arjun Kumar', role:'Founder & CEO', bg:'linear-gradient(135deg,#0f3142,#15576b)' },
  { initials:'PR', name:'Priya Reddy', role:'Head of Design', bg:'linear-gradient(135deg,#0e8f8f,#0a6666)' },
  { initials:'RS', name:'Rahul Sharma', role:'Lead Developer', bg:'linear-gradient(135deg,#1a3a1a,#2d6a2d)' },
  { initials:'NT', name:'Neha Trivedi', role:'Growth Strategist', bg:'linear-gradient(135deg,#3a1a1a,#6a2d2d)' },
]

export default function About() {
  return (
    <>
      <div className="page-hero">
        <span className="eyebrow">About Outpro.India</span>
        <h1>Built on Craft,<br />Driven by Results</h1>
        <p>A team of designers, developers, and strategists obsessed with one thing — making your digital presence the best in your space.</p>
      </div>

      {/* STORY + MVV */}
      <section className="section">
        <div className="about-split">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>From a Small Studio to a Full-Service Agency</h2>
            <p>Outpro.India started with a simple belief: every business deserves world-class digital execution. We grew from a design studio into a 40-person agency trusted by brands across India.</p>
            <p style={{ marginTop: '14px' }}>Today we combine strategic thinking with cutting-edge engineering to deliver digital products that don't just look great — they drive real, measurable business outcomes.</p>
            <div className="check-list">
              {[
                { title:'Figma-first design', desc:'Every project starts with a full design file delivered for approval before a single line of code is written.' },
                { title:'Performance-obsessed', desc:'We target 90+ PageSpeed on mobile and sub-2.5s load times on every delivery.' },
                { title:'Full source code ownership', desc:"You get complete Git repository access and documentation. No lock-in, ever." },
              ].map(item => (
                <div key={item.title} className="check-item">
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mvv-grid">
            {[
              { label:'Mission', text:'To empower businesses with premium digital products that drive measurable growth and lasting brand impact across India and beyond.' },
              { label:'Vision', text:"To be India's most trusted digital growth partner — known for craft, integrity, speed, and client-first thinking in everything we deliver." },
              { label:'Values', text:'Excellence in execution, radical transparency, continuous innovation, and genuine investment in every client\'s long-term success.' },
            ].map(m => (
              <div key={m.label} className="mvv-card">
                <h4>{m.label}</h4>
                <p>{m.text}</p>
              </div>
            ))}
            <div className="scalability-note">
              <p className="scalability-label">Scalability Built In</p>
              <p>Our architecture supports future additions — Blogs, Career Pages, Partner Programs — without rebuilding from scratch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section muted">
        <div className="section-header">
          <span className="eyebrow">The Team</span>
          <h2>Leadership</h2>
          <p>The people behind every pixel and every deployment.</p>
        </div>
        <div className="team-grid">
          {team.map(t => (
            <div key={t.name} className="team-card">
              <div className="team-avatar" style={{ background: t.bg }}>{t.initials}</div>
              <div className="team-info">
                <h3>{t.name}</h3>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div>
          <span className="eyebrow">Work with us</span>
          <h2>Let's Create Something Great</h2>
          <p>We're selective about the projects we take on — and we give each one everything we've got.</p>
        </div>
        <Link to="/contact" className="button light">Get In Touch</Link>
      </div>
    </>
  )
}
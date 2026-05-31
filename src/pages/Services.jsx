import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  { icon:'🎨', title:'UI/UX Design', desc:'Research-led design with Figma prototypes, brand systems, and pixel-perfect handoffs before development starts.', tags:['Figma','Adobe XD','Brand Systems'] },
  { icon:'⚡', title:'Web Development', desc:'React.js / Next.js frontends with Node.js or Python backends. Optimised for speed, SEO, and long-term scale.', tags:['React','Next.js','Node.js','Python'] },
  { icon:'📱', title:'Mobile Apps', desc:'Cross-platform apps with React Native or Flutter — integrated with your existing backend and published to both stores.', tags:['React Native','Flutter','iOS & Android'] },
  { icon:'🛒', title:'E-Commerce', desc:'Custom storefronts and marketplaces with payment gateways, inventory management, and CRM integration.', tags:['Shopify','WooCommerce','Custom'] },
  { icon:'📊', title:'SEO & Analytics', desc:'GA4 setup, Google Search Console, technical SEO audits, and dashboards that surface actionable growth insights.', tags:['GA4','GSC','Dashboards'] },
  { icon:'🔗', title:'CRM & Integrations', desc:'HubSpot, Zoho, Mailchimp, Tawk.to live chat, and custom API integrations to automate your entire workflow.', tags:['HubSpot','Zoho','Mailchimp'] },
]

const stack = ['React.js','Next.js','Vue.js','Node.js','Python','PHP / Laravel','MongoDB','PostgreSQL','MySQL','AWS','Vercel','Netlify','Cloudflare CDN','Google Analytics 4','Figma','Adobe XD','HubSpot','Zoho CRM','Mailchimp','Tawk.to']

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <span className="eyebrow">Services</span>
        <h1>Everything You Need,<br />Under One Roof</h1>
        <p>Strategy, design, engineering, and growth — a complete digital team without the overhead of hiring one.</p>
      </div>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">What We Build</span>
          <h2>Core Services</h2>
        </div>
        <div className="services-grid">
          {services.map(s => (
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
      </section>

      <section className="section muted">
        <div className="section-header">
          <span className="eyebrow">Tech Stack</span>
          <h2>Tools & Technologies</h2>
          <p>We work with the best modern tools across the full stack.</p>
        </div>
        <div className="stack-chips">
          {stack.map(t => <span key={t} className="vis-chip stack-chip">{t}</span>)}
        </div>
      </section>

      <div className="cta-band">
        <div>
          <span className="eyebrow">Start today</span>
          <h2>Not Sure What You Need?</h2>
          <p>Tell us about your business goals and we'll recommend the right service mix — free of charge.</p>
        </div>
        <Link to="/contact" className="button light">Talk to Us</Link>
      </div>
    </>
  )
}
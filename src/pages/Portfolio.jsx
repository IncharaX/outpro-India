import { useState } from 'react'
import './Portfolio.css'

const projects = [
  { cat:'E-Commerce', client:'LuxeCart', title:'Fashion Platform Redesign', desc:'Next.js storefront, custom CMS, Razorpay, 3D product views.', kpis:['3.2× Conv. Rate','98 PageSpeed','₹4Cr GMV/mo'], bg:'linear-gradient(135deg,#0f3142,#15576b)' },
  { cat:'SaaS', client:'FlowDesk', title:'B2B Analytics Dashboard', desc:'Real-time data, multi-tenant, Slack + Jira integrations.', kpis:['40% Faster Ops','12k+ Users'], bg:'linear-gradient(135deg,#0e8f8f,#0a6666)' },
  { cat:'Branding', client:'GreenRoot', title:'Sustainability Brand & Web', desc:'Full brand identity, Figma design system, React + CMS.', kpis:['5× Leads','95 PageSpeed'], bg:'linear-gradient(135deg,#1a3a1a,#2d5a2d)' },
  { cat:'Corporate', client:'NexaGroup', title:'Corporate Portal', desc:'Multi-language portal with GA4, HubSpot CRM, investor section.', kpis:['2.1s Load','97 PageSpeed'], bg:'linear-gradient(135deg,#3a1a0f,#6b3a1a)' },
  { cat:'Mobile', client:'ShopNow', title:'Grocery Delivery App', desc:'React Native, real-time inventory, geolocation delivery tracking.', kpis:['50k+ Downloads','4.8★ Rating'], bg:'linear-gradient(135deg,#1a0f3a,#3a1a6b)' },
  { cat:'SaaS', client:'HireLoop', title:'AI-Powered HR Platform', desc:'Recruitment SaaS with AI screening, video interviews, analytics.', kpis:['60% Time Saved','500+ Companies'], bg:'linear-gradient(135deg,#0f3a3a,#0f6060)' },
]

const filters = ['All', 'E-Commerce', 'SaaS', 'Branding', 'Corporate', 'Mobile']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? projects : projects.filter(p => p.cat === active)

  return (
    <>
      <div className="page-hero">
        <span className="eyebrow">Portfolio</span>
        <h1>150+ Projects,<br />Real Results</h1>
        <p>Work that goes beyond looks — every project is measured by the business outcomes it delivers.</p>
      </div>

      <section className="section">
        <div className="filter-tabs">
          {filters.map(f => (
            <button
              key={f}
              className={`ftab ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="port-grid">
          {visible.map(p => (
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
      </section>
    </>
  )
}
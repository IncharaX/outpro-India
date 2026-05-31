import './Testimonials.css'

const testimonials = [
  { initials:'SM', name:'Sameer Mehta', role:'CEO, NexaGroup', bg:'linear-gradient(135deg,#0f3142,#15576b)', quote:'Outpro transformed our digital presence. Bounce rate dropped 40% and inbound leads tripled within the first month of launch.' },
  { initials:'AV', name:'Ananya Verma', role:'CTO, FlowDesk', bg:'linear-gradient(135deg,#0e8f8f,#0a6666)', quote:'Delivered beyond scope — on time, within budget, with a level of polish we did not expect. The Figma handoff was impeccable.' },
  { initials:'RK', name:'Rohan Kapoor', role:'Founder, GreenRoot', bg:'linear-gradient(135deg,#1a3a1a,#2d6a2d)', quote:'PageSpeed went from 62 to 97 overnight. The React migration was smooth and GA4 setup has been a genuine game changer.' },
  { initials:'PJ', name:'Pooja Joshi', role:'Marketing Head, LuxeCart', bg:'linear-gradient(135deg,#3a1a1a,#6a2d2d)', quote:'Working with Outpro felt like having an in-house team. They understood our brand deeply and the final result exceeded expectations.' },
  { initials:'VS', name:'Vikram Singh', role:'Product Lead, ShopNow', bg:'linear-gradient(135deg,#1a0f3a,#3a1a6b)', quote:'Our app is now 4.8 stars on both stores. Outpro\'s attention to UX detail is unmatched — every edge case handled perfectly.' },
  { initials:'DM', name:'Divya Menon', role:'COO, HireLoop', bg:'linear-gradient(135deg,#0f3a3a,#0f6060)', quote:'The HubSpot + Mailchimp + Tawk.to stack they built is fully automated. Lead tracking used to take hours — now it is zero effort.' },
]

export default function Testimonials() {
  return (
    <>
      <div className="page-hero">
        <span className="eyebrow">Client Stories</span>
        <h1>What Our Clients Say</h1>
        <p>We let our clients' results do the talking.</p>
      </div>

      <section className="section">
        <div className="testi-grid">
          {testimonials.map(t => (
            <div key={t.name} className="testi-card">
              <div className="testi-top">
                <span className="stars">★★★★★</span>
                <span className="testi-company">{t.role.split(', ')[1]}</span>
              </div>
              <blockquote>"{t.quote}"</blockquote>
              <div className="testi-author">
                <div className="author-avatar" style={{ background: t.bg }}>{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
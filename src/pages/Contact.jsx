import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ firstName:'', email:'', company:'', message:'' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      <div className="page-hero">
        <span className="eyebrow">Contact Us</span>
        <h1>Let's Start a Conversation</h1>
        <p>Tell us about your project and goals. We'll come back within 24 hours with a tailored approach — no generic proposals.</p>
      </div>

      <section className="section">
        <div className="contact-layout">

          {/* LEFT — Info panel */}
          <div>
            <div className="contact-panel">
              <h3>Get In Touch</h3>
              <p>We'd love to hear about what you're building.</p>
              {[
                { icon:'📧', label:'Email', value:'hello@outpro.india' },
                { icon:'📞', label:'Phone', value:'+91 98XXX XXXXX' },
                { icon:'📍', label:'Office', value:'Bangalore, Karnataka' },
                { icon:'⏱', label:'Response Time', value:'Within 24 hours' },
              ].map(item => (
                <div key={item.label} className="contact-info-item">
                  <div className="ci-icon">{item.icon}</div>
                  <div>
                    <div className="ci-label">{item.label}</div>
                    <div className="ci-val">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="next-steps">
              <p className="next-label">What Happens Next</p>
              <div className="next-list">
                <div><span>1.</span>We review your project details</div>
                <div><span>2.</span>Schedule a 30-min discovery call</div>
                <div><span>3.</span>Deliver a tailored proposal & timeline</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="form-notice success full-span">
                ✓ Message sent! We'll get back to you within 24 hours.
              </div>
            )}
            <label>
              First Name
              <input name="firstName" type="text" placeholder="Your name" value={form.firstName} onChange={handleChange} required />
            </label>
            <label>
              Email Address
              <input name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
            </label>
            <label className="full-span">
              Company / Project Name
              <input name="company" type="text" placeholder="Acme Corp or My New Project" value={form.company} onChange={handleChange} />
            </label>
            <label className="full-span">
              Tell us about your project
              <textarea name="message" placeholder="Describe your goals, timeline, and any requirements..." value={form.message} onChange={handleChange} required />
            </label>
            <div className="full-span">
              <button type="submit" className="button primary" style={{ width:'100%' }}>
                Send Message →
              </button>
            </div>
          </form>

        </div>
      </section>
    </>
  )
}
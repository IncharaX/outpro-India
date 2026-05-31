import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <div className="footer-brand">
          <div className="footer-mark">OP</div>
          <div>
            <strong>Outpro.India</strong>
            <small>Digital Growth Agency</small>
          </div>
        </div>
        <p>Premium digital agency delivering world-class websites, apps, and growth systems for India's leading businesses.</p>
        <span className="fine-print">© 2025 Outpro.India. All rights reserved.</span>
      </div>

      <div>
        <h3>Pages</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/testimonials">Testimonials</Link>
      </div>

      <div>
        <h3>Services</h3>
        <span>UI/UX Design</span>
        <span>Web Development</span>
        <span>Mobile Apps</span>
        <span>SEO & Analytics</span>
        <span>CRM Integration</span>
      </div>

      <div>
        <h3>Contact</h3>
        <span>hello@outpro.india</span>
        <span>+91 98XXX XXXXX</span>
        <span>Bangalore, India</span>
        <Link to="/contact">Start a Project →</Link>
      </div>
    </footer>
  )
}
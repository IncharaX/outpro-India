import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <div className="brand-mark">OP</div>
        <div>
          <strong>Outpro.India</strong>
          <small>Digital Growth Agency</small>
        </div>
      </Link>

      <nav className="main-nav">
        <Link className={pathname === '/' ? 'active' : ''} to="/">Home</Link>
        <Link className={pathname === '/about' ? 'active' : ''} to="/about">About</Link>
        <Link className={pathname === '/services' ? 'active' : ''} to="/services">Services</Link>
        <Link className={pathname === '/portfolio' ? 'active' : ''} to="/portfolio">Portfolio</Link>
        <Link className={pathname === '/testimonials' ? 'active' : ''} to="/testimonials">Testimonials</Link>
      </nav>

      <Link to="/contact" className="nav-cta">Get In Touch</Link>
    </header>
  )
}
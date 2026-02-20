import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { siteTitle } from '../data/siteContent'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about-me', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const navClassName = ({ isActive }: { isActive: boolean }) =>
  `site-nav__link${isActive ? ' is-active' : ''}`

export default function SiteShell() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="brand-mark" aria-label="Go to homepage">
            <img
              className="brand-mark__img"
              src="/images/logo.webp"
              alt={siteTitle}
              height ={40}
              loading="eager"
              decoding="async"
            />
          </NavLink>
          <button
            type="button"
            className="menu-button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`site-nav${isMenuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={navClassName}
                end={item.to === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>Copyright © {new Date().getFullYear()} {siteTitle}</p>
          <div className="site-footer__links">
            {navItems.map((item) => (
              <NavLink key={`footer-${item.to}`} to={item.to} className={navClassName} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

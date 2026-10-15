import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const navClassName = ({ isActive }: { isActive: boolean }) =>
  `site-nav__link${isActive ? ' is-active' : ''}`

export default function SiteShell() {
  const { locale, setLocale, content: { siteTitle, ui } } = useLanguage()
  const navItems = ['/', '/about-me', '/projects', '/contact'].map((to, index) => ({ to, label: ui.nav[index] }))
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="brand-mark" aria-label={ui.home}>
            <img
              className="brand-mark__img"
              src="/images/logo.webp"
              alt={siteTitle}
              height={40}
              loading="eager"
              decoding="async"
            />
          </NavLink>
          <nav id="primary-navigation" className={`site-nav${isMenuOpen ? ' is-open' : ''}`} aria-label={ui.navigation}>
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
          <button
            type="button"
            className="language-switch"
            aria-label={locale === 'en' ? 'Switch to Chinese' : '切换为英文'}
            onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
          >
            <span lang="en" className={locale === 'en' ? 'is-active' : ''}>EN</span>
            <span aria-hidden="true">/</span>
            <span lang="zh-CN" className={locale === 'zh' ? 'is-active' : ''}>中文</span>
          </button>
          <button
            type="button"
            className="menu-button"
            aria-label={ui.menu}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>{ui.copyright} © {new Date().getFullYear()} {siteTitle}</p>
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

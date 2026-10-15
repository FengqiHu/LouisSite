import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function HomePage() {
  const { content: { featuredStacks, hero, interests, resume, skills, socialLinks, ui } } = useLanguage()
  return (
    <div className="page home-page">
      <section className="hero section">
        <div className="hero__content">
          <p className="section-kicker">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero__summary">{hero.subtitle}</p>
          <div className="hero__cta-row">
            <Link to="/projects" className="button button--primary">
              {ui.viewProjects}
            </Link>
            <Link to="/contact" className="button button--ghost">
              {ui.contactMe}
            </Link>
          </div>
          <dl className="hero-details">
            <div>
              <dt>{ui.focus}</dt>
              <dd>{hero.focus}</dd>
            </div>
            <div>
              <dt>{ui.email}</dt>
              <dd><a href={`mailto:${hero.email}`}>{hero.email}</a></dd>
            </div>
            <div>
              <dt>{ui.phone}</dt>
              <dd><a href="tel:+14108051208">{hero.phone}</a></dd>
            </div>
            <div>
              <dt>{ui.resume}</dt>
              <dd><a href={resume.href} target="_blank" rel="noreferrer">
                {resume.title}
              </a></dd>
            </div>
          </dl>
          <ul className="social-list social-list--icons">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <img
                    src={social.icon}
                    alt={`${social.label} ${ui.logo}`}
                    width={20}
                    height={20}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img
              src={hero.portrait}
              alt={hero.portraitAlt}
              width={720}
              height={1280}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section about-preview">
        <div className="section-head">
          <p className="section-kicker">{ui.aboutMe}</p>
          <h2>{ui.workAndEnjoy}</h2>
        </div>
        <div className="skills-layout">
          <article className="content-panel">
            <h3>{ui.skills}</h3>
            <ul className="chip-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
          <article className="content-panel">
            <h3>{ui.interests}</h3>
            <ul className="chip-list">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
            <Link to="/about-me" className="inline-link">
              {ui.moreAbout}
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="section-kicker">{ui.tools}</p>
          <h2>{ui.howIBuild}</h2>
          <p>
            {ui.toolsIntro}
          </p>
        </div>
        <div className="stack-grid">
          {featuredStacks.map((stack) => (
            <article className="stack-card" key={stack.id}>
              <p className="stack-card__category">{stack.category}</p>
              <h3>{stack.title}</h3>
              <p>{stack.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { featuredStacks, hero, interests, resume, skills, socialLinks } from '../data/siteContent'

export default function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero section">
        <div className="hero__content">
          <p className="section-kicker">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero__summary">{hero.subtitle}</p>
          <div className="hero__cta-row">
            <Link to="/projects" className="button button--primary">
              View Projects
            </Link>
            <Link to="/contact" className="button button--ghost">
              Contact Me
            </Link>
          </div>
          <div className="hero-info-grid">
            <article className="hero-info-card hero-info-card--major">
              <p>Major</p>
              <h3>{hero.major}</h3>
            </article>
            <article className="hero-info-card hero-info-card--email">
              <p>Email</p>
              <a href={`mailto:${hero.email}`}>{hero.email}</a>
            </article>
            <article className="hero-info-card">
              <p>Phone</p>
              <a href="tel:+14108051208">{hero.phone}</a>
            </article>
            <article className="hero-info-card hero-info-card--resume">
              <p>Resume</p>
              <a href={resume.href} target="_blank" rel="noreferrer">
                {resume.title}
              </a>
            </article>
          </div>
          <ul className="social-list social-list--icons">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <img
                    src={social.icon}
                    alt={`${social.label} logo`}
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
          <p className="section-kicker">About Me</p>
          <h2>I aim to Design & Build Ultimate Software.</h2>
        </div>
        <div className="skills-layout">
          <article className="glass-card">
            <h3>Skills</h3>
            <ul className="chip-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
          <article className="glass-card">
            <h3>Interests</h3>
            <ul className="chip-list">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
            <Link to="/about-me" className="inline-link">
              More About Me
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="section-kicker">My Fields</p>
          <h2>Featured Tech Stacks.</h2>
          <p>
            I mainly use Java and Spring Boot for backend development and Vue 3 for frontend.
            Python remains my core tool for machine learning projects.
          </p>
        </div>
        <div className="stack-grid">
          {featuredStacks.map((stack, index) => (
            <article className="stack-card" key={stack.id}>
              <span className="stack-card__index">0{index + 1}</span>
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

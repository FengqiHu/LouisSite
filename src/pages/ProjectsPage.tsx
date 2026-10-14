import { projects, workExperiences } from '../data/siteContent'

export default function ProjectsPage() {
  return (
    <div className="page projects-page">
      <section className="section hero-block">
        <div className="section-head">
          <p className="section-kicker">My Projects</p>
          <h1>Projects & research.</h1>
          <p>
            From full-stack platforms to deep learning systems, these projects reflect my focus on
            practical impact, scalability, and clean architecture.
          </p>
        </div>
      </section>

      <section className="section projects-list-section" aria-label="Project list">
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__header">
                <h2>{project.title}</h2>
                {project.href ? (
                  <a className="inline-link project-card__link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View reference for ${project.title}`}>
                    View Reference <span aria-hidden="true">↗</span>
                  </a>
                ) : project.status ? (
                  <span className="project-card__status">{project.status}</span>
                ) : null}
              </div>
              <ul className="chip-list chip-list--dense">
                {project.tags.map((tag) => (
                  <li key={`${project.id}-${tag}`}>{tag}</li>
                ))}
              </ul>
              <details className="project-card__details">
                <summary>Details</summary>
                <p>{project.summary}</p>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-experience-section">
        <div className="section-head">
          <p className="section-kicker">Professional Experience</p>
          <h2>Work experience.</h2>
        </div>
        <div className="work-experience-list">
          {workExperiences.map((experience) => (
            <article className="work-experience" key={experience.company}>
              <div className="work-experience__meta">
                <h3>{experience.company}</h3>
                <p>{experience.role}</p>
                <p>{experience.location}</p>
                <p className="work-experience__period">{experience.period}</p>
                {experience.href ? <a className="inline-link" href={experience.href} target="_blank" rel="noreferrer">Company Website</a> : null}
              </div>
              <p>{experience.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

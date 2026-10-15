import { useLanguage } from '../i18n/LanguageContext'

export default function ProjectsPage() {
  const { content: { projects, workExperiences, ui } } = useLanguage()
  return (
    <div className="page projects-page">
      <section className="section hero-block">
        <div className="section-head">
          <p className="section-kicker">{ui.myProjects}</p>
          <h1>{ui.projectsTitle}</h1>
          <p>
            {ui.projectsIntro}
          </p>
        </div>
      </section>

      <section className="section projects-list-section" aria-label={ui.projectList}>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__header">
                <h2>{project.title}</h2>
                {project.href ? (
                  <a className="inline-link project-card__link" href={project.href} target="_blank" rel="noreferrer" aria-label={`${ui.referenceFor} ${project.title}`}>
                    {ui.reference} <span aria-hidden="true">↗</span>
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
                <summary>{ui.details}</summary>
                <p>{project.summary}</p>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-experience-section">
        <div className="section-head">
          <p className="section-kicker">{ui.professional}</p>
          <h2>{ui.workExperience}</h2>
        </div>
        <div className="work-experience-list">
          {workExperiences.map((experience) => (
            <article className="work-experience" key={experience.company}>
              <div className="work-experience__meta">
                <h3>{experience.company}</h3>
                <p>{experience.role}</p>
                <p>{experience.location}</p>
                <p className="work-experience__period">{experience.period}</p>
                {experience.href ? <a className="inline-link" href={experience.href} target="_blank" rel="noreferrer">{ui.companyWebsite}</a> : null}
              </div>
              <p>{experience.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

import { useLanguage } from '../i18n/LanguageContext'

export default function ProjectsPage() {
  const { content: { projects, workExperiences, ui } } = useLanguage()
  const projectSections = [
    { id: 'research-projects', title: ui.researchProjects, items: projects.filter((project) => project.category === 'research') },
    { id: 'development-projects', title: ui.developmentProjects, items: projects.filter((project) => project.category !== 'research') },
  ]

  return (
    <div className="page projects-page">

      {projectSections.map((section) => (
        <section className="section projects-list-section" key={section.id} aria-labelledby={section.id}>
          <div className="section-head">
            <h2 id={section.id}>{section.title}</h2>
          </div>
          <div className="project-list">
            {section.items.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-card__header">
                  <h3>{project.title}</h3>
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
                  {project.citation && project.doi && (
                    <p className="project-card__citation">
                      {project.citation}{' '}
                      <a href={`https://doi.org/${project.doi}`} target="_blank" rel="noreferrer">doi: {project.doi}</a>
                    </p>
                  )}
                </details>
              </article>
            ))}
          </div>
        </section>
      ))}

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

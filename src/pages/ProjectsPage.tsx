import { internship, projects } from '../data/siteContent'

export default function ProjectsPage() {
  return (
    <div className="page projects-page">
      <section className="section hero-block">
        <div className="section-head">
          <p className="section-kicker">My Projects</p>
          <h1>Research, Product, and Applied Engineering</h1>
          <p>
            From full-stack platforms to deep learning systems, these projects reflect my focus on
            practical impact, scalability, and clean architecture.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <p className="project-card__index">0{index + 1}</p>
              <img
                src={project.image}
                alt={project.alt}
                width={720}
                height={420}
                loading="lazy"
                decoding="async"
                style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
              />
              <div className="project-card__body">
                <ul className="chip-list chip-list--dense">
                  {project.tags.map((tag) => (
                    <li key={`${project.id}-${tag}`}>{tag}</li>
                  ))}
                </ul>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <a className="inline-link" href={project.href} target="_blank" rel="noreferrer">
                  View Reference
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <article className="internship-card">
          <img
            src={internship.image}
            alt="Hundsun Technologies logo"
            width={900}
            height={260}
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="section-kicker">{internship.company}</p>
            <h2>{internship.role}</h2>
            <p>{internship.locationAndTime}</p>
            <p>{internship.summary}</p>
            <a className="inline-link" href={internship.href} target="_blank" rel="noreferrer">
              Company Website
            </a>
          </div>
        </article>
      </section>
    </div>
  )
}

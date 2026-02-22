import PhotoCarousel from "../components/PhotoCarousel";
import {
  aboutIntro,
  aboutNarrative,
  aboutStats,
  childhoodMoments,
  galleryShots,
  growthStory,
  hobbies,
  resume,
} from "../data/siteContent";

export default function AboutPage() {
  return (
    <div className="page about-page">
      <section className="section hero-block">
        <div className="section-head section-head--tight">
          <p className="section-kicker">About Me</p>
          <h1>{aboutIntro.title}</h1>
          <p className="lead-paragraph">{aboutIntro.description}</p>
          <p className="lead-spotlight">“{aboutNarrative.spotlight}”</p>
        </div>
        <div className="stats-grid">
          {aboutStats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <p className="stat-card__label">{stat.label}</p>
              <h2>{stat.value}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-childhood-layout">
        <article className="glass-card text-focus-card">
          <p className="section-kicker">From a child to full-stack</p>
          <h2>A Developer with Grit.</h2>
          <p>{aboutNarrative.origin}</p>
          <ul className="origin-list">
            {childhoodMoments.map((moment) => (
              <li key={moment.title}>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="glass-card childhood-showcase">
          <div className="childhood-showcase__head">
            <p className="section-kicker">Early Milestones</p>
            <h2>Key Moments</h2>
          </div>
          <div className="childhood-image-grid">
            {childhoodMoments.map((moment) => (
              <figure
                className="childhood-image-card"
                key={`image-${moment.title}`}
              >
                <img
                  src={moment.image}
                  alt={moment.alt}
                  width={720}
                  height={440}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{moment.title}</figcaption>
              </figure>
            ))}
          </div>
        </article>
      </section>

      <section className="section about-growth">
        <article className="growth-cinematic">
          <header className="growth-cinematic__header">
            <p className="section-kicker">My Professional Growth</p>
            <h2>{growthStory.title}</h2>
          </header>
          <p className="growth-cinematic__lead">{growthStory.first}</p>
          <div className="growth-cinematic__split">
            <img
              src={growthStory.image}
              alt={growthStory.imageAlt}
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />
            <div className="growth-cinematic__detail">
              <p>{growthStory.second}</p>
              <a
                className="inline-link"
                href={resume.href}
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>
        </article>
      </section>


      <section className="section about-offline">
        <div className="section-head section-head--tight">
          <p className="section-kicker">Beyond Code</p>
          <h2>Life Offline</h2>
        </div>
        <article className="about-offline__layout">
          
          <PhotoCarousel shots={galleryShots} />

          <div className="glass-card about-offline__story">
            <p className="section-kicker">Life Snapshot</p>
            <h3>What I Do Beyond Coding</h3>
            <p>{hobbies}</p>
            <a
              className="about-offline__video-link"
              href="https://www.bilibili.com/video/BV1CS421K7mF/?spm_id_from=333.1387.homepage.video_card.click"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/razer-review.webp"
                alt="Razer Mouse Review video thumbnail"
                width={1200}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}

import PhotoCarousel from "../components/PhotoCarousel";
import { useLanguage } from "../i18n/LanguageContext";

export default function AboutPage() {
  const { content: { aboutIntro, aboutNarrative, aboutStats, childhoodMoments, galleryShots, growthStory, hobbies, resume, ui } } = useLanguage();
  const childhoodTextMoments = [...childhoodMoments].reverse();

  return (
    <div className="page about-page">
      <section className="section hero-block">
        <div className="section-head section-head--tight">
          <p className="section-kicker">{ui.aboutMe}</p>
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
        <article className="content-panel text-focus-card">
          <p className="section-kicker">{ui.childhood}</p>
          <h2>{ui.origin}</h2>
          <p>{aboutNarrative.origin}</p>
          <ul className="origin-list">
            {childhoodTextMoments.map((moment) => (
              <li key={moment.title}>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="content-panel childhood-showcase">
          <div className="childhood-showcase__head">
            <p className="section-kicker">{ui.milestones}</p>
            <h2>{ui.moments}</h2>
          </div>
          <div className="childhood-image-grid">
            {childhoodMoments.map((moment) => (
              <figure
                className={`childhood-image-card${moment.imageFit === "contain" ? " childhood-image-card--contain" : ""}`}
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
            <p className="section-kicker">{ui.growth}</p>
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
                {ui.viewResume}
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="section about-offline">
        <div className="section-head section-head--tight">
          <p className="section-kicker">{ui.beyondCode}</p>
          <h2>{ui.offline}</h2>
        </div>
        <article className="about-offline__layout">
          <PhotoCarousel shots={galleryShots} />

          <div className="content-panel about-offline__story">
            <p className="section-kicker">{ui.snapshot}</p>
            <h3>{ui.beyondCoding}</h3>
            <p>{hobbies}</p>
            <a
              className="about-offline__video-link"
              href="https://www.bilibili.com/video/BV1CS421K7mF/?spm_id_from=333.1387.homepage.video_card.click"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/razer-review.webp"
                alt={ui.videoAlt}
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

import { useState, type FormEvent } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { sendMessage } from "../lib/sendMessage";

type Status = "idle" | "loading" | "mailto" | "sent" | "error";

export default function ContactPage() {
  const { content: { contactInfo, resume, socialLinks, ui } } = useLanguage();
  const phoneHref = "tel:+14108051208";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const result = await sendMessage({ name, email, message });
      if (result.mode === "mailto") {
        window.location.href = result.href;
        setStatus("mailto");
      } else {
        setStatus("sent");
      }
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="page contact-page">
      <section className="section hero-block">
        <div className="section-head">
          <p className="section-kicker">{ui.contactMe}</p>
          <h1>{ui.contactTitle}</h1>
          <p>
            {ui.phone}: <a href={phoneHref}>{contactInfo.phone}</a>
            <br />
            {ui.email}:{" "}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <br />
            {contactInfo.location}
          </p>
          <p className="contact-resume-link">
            <a href={resume.href} target="_blank" rel="noreferrer">
              {ui.openResume}
            </a>
          </p>
        </div>
      </section>

      <section className="section contact-grid">
        <article className="content-panel contact-form-card">
          <h2>{ui.sendTitle}</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              {ui.yourName}
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
            <label>
              {ui.yourEmail}
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label>
              {ui.message}
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                required
              />
            </label>
            <button
              className="button button--primary"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? ui.sending : ui.send}
            </button>
          </form>

          {status !== "idle" ? (
            <p role="status" className={`form-status form-status--${status === "mailto" || status === "sent" ? "success" : status}`}>
              {ui.status[status]}
            </p>
          ) : null}

          <ul className="contact-social-grid">
            {socialLinks.map((social) => (
              <li key={`contact-${social.label}`}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <img
                    src={social.icon}
                    alt={`${social.label} ${ui.logo}`}
                    width={22}
                    height={22}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{social.label}</span>
                </a>
              </li>
            ))}

            <li className="contact-social-grid__resume-item">
              <a
                className="contact-social-grid__resume-link"
                href={resume.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{ui.openResume}</span>
              </a>
            </li>
          </ul>
        </article>

        <article className="content-panel contact-extra-card">
          <h2>{ui.wechat}</h2>
          <div className="qr-block">
            <img
              src={contactInfo.wechatQr}
              alt={ui.qrAlt}
              width={320}
              height={430}
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>
      </section>
    </div>
  );
}

import { useState, type FormEvent } from "react";
import { contactInfo, resume, socialLinks } from "../data/siteContent";
import { sendMessage } from "../lib/sendMessage";

type Status =
  | { type: "idle"; text: "" }
  | { type: "loading"; text: string }
  | { type: "success"; text: string }
  | { type: "error"; text: string };

export default function ContactPage() {
  const phoneHref = "tel:+14108051208";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle", text: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "loading", text: "Sending message..." });

    try {
      const result = await sendMessage({ name, email, message });
      if (result.mode === "mailto") {
        window.location.href = result.href;
        setStatus({
          type: "success",
          text: "Email client opened. If it did not open, please use the direct email below.",
        });
      } else {
        setStatus({
          type: "success",
          text: "Message sent. Thanks for reaching out.",
        });
      }
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus({
        type: "error",
        text: "Unable to send right now. Please email me directly at hufq0611@outlook.com.",
      });
    }
  };

  return (
    <div className="page contact-page">
      <section className="section hero-block">
        <div className="section-head">
          <p className="section-kicker">Contact Me</p>
          <h1>If You Have Any Queries.</h1>
          <p>
            Phone: <a href={phoneHref}>{contactInfo.phone}</a>
            <br />
            Email:{" "}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <br />
            {contactInfo.location}
          </p>
          <p className="contact-resume-link">
            <a href={resume.href} target="_blank" rel="noreferrer">
              Open {resume.title}
            </a>
          </p>
        </div>
      </section>

      <section className="section contact-grid">
        <article className="glass-card contact-form-card">
          <h2>Send me a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Your Name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
            <label>
              Your Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label>
              Message
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
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status.type !== "idle" ? (
            <p className={`form-status form-status--${status.type}`}>
              {status.text}
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
                    alt={`${social.label} logo`}
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
                <span>Open {resume.title}</span>
              </a>
            </li>
          </ul>
        </article>

        <article className="glass-card contact-extra-card">
          <h2>Scan for WeChat</h2>
          <div className="qr-block">
            <img
              src={contactInfo.wechatQr}
              alt="WeChat QR code"
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

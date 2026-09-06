import { projects } from './data';
import './styles.css';

const skills = [
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML / CSS', level: 90 },
  { name: 'Node.js / Express', level: 78 },
  { name: 'SQLite / SQL', level: 75 },
];

const services = [
  {
    title: 'Landing Pages',
    desc: 'Fast, mobile-friendly, conversion-focused landing pages that load in under a second.',
  },
  {
    title: 'Business Websites',
    desc: 'Clean, modern websites for small businesses with SEO and contact forms built in.',
  },
  {
    title: 'Web Apps',
    desc: 'Full-stack applications with user accounts, databases, and REST APIs — from idea to deployed product.',
  },
];

export default function App() {
  return (
    <div className="wrap">
      <header className="nav">
        <span className="logo">AD<span className="dot">.</span></span>
        <a className="nav-cta" href="mailto:dauletovasankhan@gmail.com">Contact me</a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-badge">
            <span className="pulse-dot" />
            Available for work
          </div>
          <p className="eyebrow">Hi, I&apos;m</p>
          <h1 className="hero-name">Asankhan Dauletov</h1>
          <h2 className="hero-title">Full-Stack Web Developer</h2>
          <p className="hero-desc">
            I build <strong>clean, fast, modern</strong> websites and web applications with
            React, TypeScript, and Node.js — from a one-page landing to a full product with
            a database and user accounts.
          </p>
          <div className="hero-stats">
            <div className="hero-stat"><strong>3+</strong><span>projects shipped</span></div>
            <div className="hero-stat"><strong>Full-stack</strong><span>React · Node · SQL</span></div>
            <div className="hero-stat"><strong>100%</strong><span>responsive designs</span></div>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">See my work</a>
            <a className="btn btn-ghost" href="mailto:dauletovasankhan@gmail.com">Get in touch</a>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <h2 className="section-title">What I do</h2>
          <div className="cards">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section className="section" id="work">
          <h2 className="section-title">Selected work</h2>
          <div className="project-list">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <div className="project-info">
                  <h3>{p.title}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="stack">
                    {p.stack.map((s) => (
                      <span className="chip" key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a className="btn btn-small btn-primary" href={p.url} target="_blank" rel="noreferrer">Live site</a>
                    <a className="btn btn-small btn-ghost" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills">
            {skills.map((s) => (
              <div className="skill" key={s.name}>
                <span className="skill-name">{s.name}</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* CONTACT / FOOTER */}
      <footer className="contact" id="contact">
        <h2 className="section-title">Let&apos;s build something</h2>
        <p className="contact-text">
          Have a project in mind? I&apos;m open to freelance work and new opportunities.
        </p>
        <a className="btn btn-primary btn-lg" href="mailto:dauletovasankhan@gmail.com">
          dauletovasankhan@gmail.com
        </a>
        <div className="contact-links">
          <a href="https://github.com/spryzzen666" target="_blank" rel="noreferrer">GitHub</a>
          <span className="sep">·</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Asankhan Dauletov</p>
      </footer>
    </div>
  );
}
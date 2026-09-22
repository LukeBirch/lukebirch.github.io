const stats = [
  { value: "6+", label: "Years building" },
  { value: "20+", label: "Projects shipped" },
  { value: "100%", label: "Curiosity-driven" },
];

const values = [
  {
    number: "01",
    title: "Product thinking",
    text: "I start with user needs and focus on the right problem before building the solution.",
  },
  {
    number: "02",
    title: "Clean engineering",
    text: "I value maintainable code, strong systems, and thoughtful implementation decisions.",
  },
  {
    number: "03",
    title: "Thoughtful delivery",
    text: "I collaborate closely with teams to move from idea to launch with clarity and momentum.",
  },
];

const projects = [
  {
    category: "Web app",
    year: "2024",
    title: "Northstar Dashboard",
    description:
      "A reporting platform for teams tracking key operational metrics and trends in real time.",
    bullets: ["Built a clean analytics experience", "Improved visibility and decision speed"],
  },
  {
    category: "Product design",
    year: "2023",
    title: "Studio Sprint",
    description:
      "A collaborative workshop tool for shaping ideas, prioritizing scope, and planning delivery.",
    bullets: ["Designed a clearer planning workflow", "Reduced friction across team collaboration"],
  },
  {
    category: "Engineering",
    year: "2022",
    title: "Signal Notes",
    description:
      "A focused note-taking experience designed to support calm, distraction-free thinking.",
    bullets: ["Shipped a lightweight but powerful product", "Optimized for clarity and readability"],
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "UI Design",
  "UX Strategy",
  "Product Thinking",
  "API Design",
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="Luke Birch home">
            LB
          </a>

          <nav className="site-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="button button-small">
            Let&apos;s talk
          </a>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software engineer • maker • problem solver</p>
            <h1>Building useful things with care.</h1>
            <p className="lead">
              I&apos;m Luke Birch, a product-minded software engineer who enjoys turning ideas
              into polished, dependable experiences.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button">
                View work
              </a>
              <a href="#contact" className="button button-secondary">
                Contact me
              </a>
            </div>

            <ul className="mini-stats" aria-label="Key stats">
              {stats.map((item) => (
                <li key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="profile-card" aria-label="Profile summary">
            <div className="avatar">LB</div>
            <h2>Luke Birch</h2>
            <p>Engineer focused on thoughtful product design and reliable software.</p>
            <div className="card-meta">
              <span>Based in London</span>
              <span>Available for freelance</span>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container narrow">
          <p className="section-tag">About</p>
          <h2>Designing systems that feel simple and work beautifully.</h2>
          <p>
            I help teams turn ideas into clear digital experiences. My work sits at the
            intersection of engineering, design thinking, and practical delivery. I care deeply
            about user experience, maintainable architecture, and long-term product value.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="three-col">
            {values.map((value) => (
              <article key={value.number} className="info-card">
                <span className="card-kicker">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-tag">Projects</p>
              <h2>Selected work</h2>
            </div>
            <a href="#contact" className="text-link">
              Hire me
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-header">
                  <span className="project-tag">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section alt-section">
        <div className="container">
          <p className="section-tag">Skills</p>
          <h2>Capabilities I bring to a project</h2>
          <div className="skill-cloud" aria-label="Skills list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-box">
          <div>
            <p className="section-tag">Contact</p>
            <h2>Let&apos;s build something meaningful.</h2>
          </div>

          <div className="contact-actions">
            <a href="mailto:luke@example.com" className="button">
              luke@example.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© {new Date().getFullYear()} Luke Birch</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

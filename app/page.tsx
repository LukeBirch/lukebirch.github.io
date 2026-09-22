const stats = [
  { value: "1st", label: "Class degree" },
  { value: "4", label: "Featured projects" },
  { value: "AI", label: "& ML focus" },
];

const values = [
  {
    number: "01",
    title: "Deep learning",
    text: "I build end-to-end AI systems with a focus on model design, data pipelines, and practical performance.",
  },
  {
    number: "02",
    title: "Systems thinking",
    text: "My work balances algorithmic rigor with maintainable, effective engineering choices.",
  },
  {
    number: "03",
    title: "Applied research",
    text: "I enjoy turning complex ideas into working, testable tools and products with measurable impact.",
  },
];

const projects = [
  {
    category: "AI / NLP",
    year: "2025",
    title: "Sign Language Translation",
    description:
      "A multimodal deep learning system for gloss-free British Sign Language translation using PyTorch, NLP and Transformers.",
    bullets: ["PyTorch", "Transformers", "Deep Learning", "NLP"],
    link: "https://github.com/LukeBirch/Sign-Language-Translation-Project-Report",
  },
  {
    category: "Web app",
    year: "2026",
    title: "Jewel by Ayr",
    description:
      "A responsive single-page website designed for a jewellery brand, with a polished storefront feel and external shopping links.",
    bullets: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/LukeBirch/jewel-by-ayr",
  },
  {
    category: "Cryptography",
    year: "2024",
    title: "LWE Cryptosystem & Cryptanalysis",
    description:
      "An implementation of an LWE-style public-key cryptosystem with experimental statistical and lattice-based attacks.",
    bullets: ["Python", "NumPy", "Linear Algebra", "Cryptography"],
    link: "https://github.com/LukeBirch/Crypto",
  },
  {
    category: "C / Systems",
    year: "2023",
    title: "Langton's Ant",
    description:
      "A C implementation of Langton's Ant with a terminal-based animation using ncurses to visualize emergent behaviour.",
    bullets: ["C", "ncurses", "Linux", "Make"],
    link: "https://github.com/LukeBirch/PP_Summative",
  },
];

const skills = [
  "Python",
  "C++",
  "C#",
  "JavaScript",
  "SQL",
  "PyTorch",
  "Hugging Face",
  "NLP",
  "Deep Learning",
  "Computer Vision",
  "Reinforcement Learning",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
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
            <p className="eyebrow">Computer science graduate • AI researcher • builder</p>
            <h1>Luke Birch</h1>
            <p className="lead">
              First-Class MEng Computer Science graduate from Durham University, with a strong
              interest in AI, machine learning, and building impactful, technically rigorous
              systems.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button">
                View projects
              </a>
              <a href="#contact" className="button button-secondary">
                Get in touch
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
            <p>AI-focused computer scientist building models, systems and products with real-world impact.</p>
            <div className="card-meta">
              <span>Durham University</span>
              <span>MEng Computer Science</span>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container narrow">
          <p className="section-tag">About</p>
          <h2>First-Class MEng Computer Science graduate from Durham University.</h2>
          <p>
            I am a computer science graduate with a strong foundation in software engineering,
            deep learning, and applied problem solving. My work spans AI, NLP, computer vision,
            cryptography, and modern web development, with a focus on building tools that are both
            technically sound and practically useful.
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
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  View Repository
                </a>
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
            <p className="section-tag">Links</p>
            <h2>Connect with me.</h2>
          </div>

          <div className="contact-actions">
            <a
              href="https://github.com/LukeBirch"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/luke-birch-167a67198"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© {new Date().getFullYear()} Luke Birch</p>
          <div className="footer-links">
            <a href="https://github.com/LukeBirch" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/luke-birch-167a67198" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

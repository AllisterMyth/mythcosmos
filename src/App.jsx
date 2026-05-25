export default function App() {
  const projects = [
    {
      title: 'Multimodal Cancer Prediction System',
      description:
        'A multimodal ML system using CT scans, diagnoses and liquid biopsy data to predict cancer risk over the next few years.',
      tags: ['Machine Learning', 'Healthcare', 'Biomathematics'],
      link: 'https://github.com/AllisterMyth/Multimodal-Cancer-Prediction',
    },

    {
      title: 'Automation of Lab using n8n with Agentic AI',
      description:
        'AI-driven automation workflows integrating intelligent agents with lab productivity systems.',
      tags: ['Automation', 'Agentic AI', 'n8n'],
    },

    {
      title: 'Equalizer in Scilab using FFT',
      description:
        'An equalizer built using FFT and reverse FFT signal processing techniques in Scilab.',
      tags: ['Signal Processing', 'FFT', 'Scilab'],
    },

    {
      title: 'Fine Tuning AI Models for Writing & Mathematical Proofs',
      description:
        'Experiments in adapting AI systems for mathematical reasoning, proof generation and technical writing.',
      tags: ['AI Models', 'Mathematics', 'Neural Networks'],
    },
  ]

  return (
    <div className="app">
      <div className="bg-glow purple"></div>
      <div className="bg-glow blue"></div>
      <div className="bg-glow pink"></div>

      <header className="navbar">
        <div className="logo">✦ MythCosmos</div>

        <nav>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="subtitle">
          MATHEMATICS STUDENT · MACHINE INTELLIGENCE · BIOMATHEMATICS
        </p>

        <h1>
          Understanding the Universe
          <br />
          through Mathematics
        </h1>

        <p className="hero-text">
          I am passionate about biomathematics, machine learning,
          cybersecurity, automation systems and computational problem solving.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a
            href="https://mythcosmos-blog.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="secondary">
              Open Blog →
            </button>
          </a>
        </div>
      </section>

      <section className="work-section" id="about">
        <h2>What I Work On</h2>

        <div className="cards">
          <div className="card">
            <h3>Mathematics</h3>

            <p>
              Mathematical modelling, statistics and computational systems.
            </p>
          </div>

          <div className="card">
            <h3>Biomathematics</h3>

            <p>
              Applying mathematics and ML methods to biological systems.
            </p>
          </div>

          <div className="card">
            <h3>Machine Intelligence</h3>

            <p>
              AI systems, neural networks and intelligent automation.
            </p>
          </div>

          <div className="card">
            <h3>Cybersecurity</h3>

            <p>
              Security systems, digital privacy and computational defense.
            </p>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>Featured Projects</h2>

        <div className="cards">
          {projects.map((project) => (
            <div className="card" key={project.title}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="blog-preview" id="blog">
        <div className="feature-box">
          <div>
            <h2>Blog</h2>

            <p>
              Essays and thoughts on mathematics, AI,
              biomathematics and life.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <a
                href="https://mythcosmos-blog.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Open Blog</button>
              </a>
            </div>
          </div>

          <div className="feature-visual">
            ✦
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="feature-box">
          <div>
            <h2>Let’s Build Something Interesting</h2>

            <p>
              Interested in AI systems, mathematics or automation?
            </p>

            <div style={{ marginTop: '2rem' }}>
              <a href="mailto:allistermyth@gmail.com">
                <button>Contact Me</button>
              </a>
            </div>
          </div>

          <div className="feature-visual">
            ✦
          </div>
        </div>
      </section>

      <footer>
        <p>✦ MythCosmos</p>

        <div className="socials">
          <a
            href="https://github.com/AllisterMyth"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <p>Built with React + Vite</p>
      </footer>
    </div>
  )
}
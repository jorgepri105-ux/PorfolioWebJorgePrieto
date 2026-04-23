export default function PortfolioJorgePrieto() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Angular",
    "Java",
    "PHP",
    "Python",
    ".NET / C#",
    "SQL Server",
    "MySQL",
    "MongoDB",
    "Git",
    "Azure DevOps",
    "Jenkins",
    "OWASP ZAP",
    "Wireshark",
    "Kali Linux",
  ];

  const projects = [
    {
      title: "Auditorías web y análisis de vulnerabilidades",
      description:
        "Prácticas orientadas a la identificación de vulnerabilidades en servicios web, análisis técnico y redacción de informes claros para perfiles no técnicos, siguiendo enfoques basados en OWASP.",
      tags: ["OWASP", "ZAP", "Pentesting", "Informes técnicos"],
    },
    {
      title: "Desarrollo de aplicaciones web",
      description:
        "Experiencia académica y práctica construyendo aplicaciones web con tecnologías de frontend y backend, consumo de APIs REST y trabajo con bases de datos relacionales.",
      tags: ["Angular", "JavaScript", ".NET/C#", "SQL Server"],
    },
    {
      title: "Proyecto interactivo de simulación histórica",
      description:
        "Conceptualización y prototipado de experiencias interactivas centradas en visualización histórica y navegación digital, combinando parte visual, lógica y experiencia de usuario.",
      tags: ["Unity", "UX/UI", "Simulación", "Prototipado"],
    },
  ];

  const experience = [
    {
      title: "Prácticas – Verne Technology Group",
      text: "Participación en desarrollo y gestión de aplicaciones web, trabajo con bases de datos y apoyo en tareas técnicas relacionadas con frontend, backend y APIs REST.",
    },
    {
      title: "Formación en Ciberseguridad",
      text: "Especialización práctica en pentesting, auditoría, análisis de seguridad de sistemas, identificación de vulnerabilidades y propuestas de mitigación.",
    },
    {
      title: "Técnico Superior en Desarrollo de Aplicaciones Web",
      text: "Base sólida en desarrollo web, diseño de aplicaciones, estructura de datos, lógica de programación y tecnologías modernas del entorno web.",
    },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #081120;
          color: #e6eef8;
        }
        a { text-decoration: none; }
        .portfolio {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, rgba(56, 189, 248, 0.18), transparent 22%),
            radial-gradient(circle at left, rgba(14, 165, 233, 0.12), transparent 28%),
            linear-gradient(180deg, #081120 0%, #0b1324 45%, #0b1220 100%);
        }
        .container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }
        .hero {
          padding: 88px 0 72px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 36px;
          align-items: center;
        }
        .eyebrow {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(34, 211, 238, 0.10);
          border: 1px solid rgba(34, 211, 238, 0.22);
          color: #9be7f5;
          font-size: 0.92rem;
          margin-bottom: 18px;
        }
        h1 {
          margin: 0;
          font-size: clamp(2.6rem, 6vw, 4.8rem);
          line-height: 0.96;
          color: white;
        }
        .hero p.lead {
          margin: 22px 0 0;
          color: #bfd0e2;
          font-size: 1.18rem;
          line-height: 1.8;
          max-width: 760px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 32px;
        }
        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          border-radius: 16px;
          font-weight: 700;
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }
        .btn-primary {
          background: #35d6ee;
          color: #04101d;
          box-shadow: 0 12px 30px rgba(53, 214, 238, 0.18);
        }
        .btn-primary:hover,
        .btn-secondary:hover {
          transform: translateY(-2px);
        }
        .btn-secondary {
          color: #e8f0f8;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
        }
        .hero-panel {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          padding: 18px;
          border-radius: 28px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 18px 50px rgba(0,0,0,0.22);
          backdrop-filter: blur(8px);
        }
        .stat-card {
          padding: 20px;
          border-radius: 20px;
          background: rgba(7, 18, 34, 0.88);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .stat-card span {
          display: block;
          font-size: 0.95rem;
          color: #94a9bf;
          margin-bottom: 8px;
        }
        .stat-card strong {
          font-size: 1.1rem;
          line-height: 1.5;
          color: white;
        }
        section.section {
          padding: 84px 0;
        }
        .section-alt {
          background: rgba(255,255,255,0.03);
          border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .section-header {
          margin-bottom: 34px;
        }
        .section-kicker {
          margin: 0 0 10px;
          color: #7fe6f3;
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: .8rem;
          font-weight: 700;
        }
        h2 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.12;
          color: white;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 34px;
          align-items: start;
        }
        .about-text p {
          margin: 0 0 18px;
          color: #bfd0e2;
          line-height: 1.9;
          font-size: 1.03rem;
        }
        .card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 26px;
          padding: 28px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.15);
        }
        .card h3 {
          margin: 0 0 18px;
          font-size: 1.35rem;
          color: white;
        }
        .skills-list,
        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .skill-pill {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(34, 211, 238, 0.10);
          border: 1px solid rgba(34, 211, 238, 0.20);
          color: #daf8fc;
          font-size: .95rem;
          font-weight: 600;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .info-card {
          border-radius: 26px;
          padding: 28px;
          background: rgba(8, 17, 32, 0.75);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .info-card h3,
        .project-card h3 {
          margin: 0 0 16px;
          font-size: 1.28rem;
          color: white;
        }
        .info-card p,
        .project-card p {
          margin: 0;
          line-height: 1.85;
          color: #bfd0e2;
        }
        .project-card {
          border-radius: 28px;
          padding: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
        }
        .project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(34, 211, 238, 0.36);
          box-shadow: 0 20px 40px rgba(0,0,0,0.16);
        }
        .tag {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          color: #e6eef8;
          font-size: .82rem;
        }
        .contact-box {
          text-align: center;
          padding: 18px 0 6px;
        }
        .contact-box p {
          max-width: 760px;
          margin: 18px auto 0;
          color: #bfd0e2;
          line-height: 1.9;
          font-size: 1.03rem;
        }
        @media (max-width: 920px) {
          .hero-grid,
          .about-grid,
          .grid-3 {
            grid-template-columns: 1fr;
          }
          .hero {
            padding-top: 72px;
          }
        }
        @media (max-width: 640px) {
          .container {
            width: min(100% - 22px, 1120px);
          }
          .hero-panel {
            grid-template-columns: 1fr;
          }
          .btn-primary,
          .btn-secondary {
            width: 100%;
          }
          section.section {
            padding: 68px 0;
          }
        }
      `}</style>

      <div className="portfolio">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Desarrollo web · Ciberseguridad · Perfil técnico junior</div>
              <h1>Jorge Prieto</h1>
              <p className="lead">
                Desarrollador web con formación en ciberseguridad, experiencia en tecnologías
                frontend y backend y orientación a construir soluciones funcionales, seguras y
                bien presentadas.
              </p>
              <div className="hero-actions">
                <a href="#proyectos" className="btn-primary">Ver proyectos</a>
                <a href="#contacto" className="btn-secondary">Contacto</a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="stat-card">
                <span>Especialidad</span>
                <strong>Desarrollo + Seguridad</strong>
              </div>
              <div className="stat-card">
                <span>Ubicación</span>
                <strong>Madrid, España</strong>
              </div>
              <div className="stat-card">
                <span>Stack</span>
                <strong>Frontend, Backend y APIs</strong>
              </div>
              <div className="stat-card">
                <span>Perfil</span>
                <strong>Junior con base sólida</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section">
          <div className="container about-grid">
            <div className="about-text">
              <div className="section-header">
                <p className="section-kicker">Sobre mí</p>
                <h2>Perfil técnico con visión práctica</h2>
              </div>
              <p>
                He desarrollado mi perfil entre el desarrollo de aplicaciones web y la
                ciberseguridad. Cuento con formación en desarrollo web, experiencia práctica en
                entornos reales y una orientación clara hacia la mejora continua, el aprendizaje
                técnico y la creación de soluciones útiles.
              </p>
              <p>
                Me interesa especialmente combinar una buena base de programación con una visión de
                seguridad, calidad técnica y experiencia de usuario. Busco seguir creciendo en
                proyectos donde pueda aportar tanto en la parte funcional como en la parte
                analítica.
              </p>
            </div>

            <div className="card">
              <h3>Tecnologías y herramientas</h3>
              <div className="skills-list">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">Experiencia y formación</p>
              <h2>Base técnica y recorrido</h2>
            </div>

            <div className="grid-3">
              {experience.map((item) => (
                <article key={item.title} className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">Proyectos destacados</p>
              <h2>Trabajo y líneas que me representan</h2>
            </div>

            <div className="grid-3">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list" style={{ marginTop: 18 }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section section-alt">
          <div className="container contact-box">
            <div className="section-header">
              <p className="section-kicker">Contacto</p>
              <h2>Disponible para nuevas oportunidades</h2>
            </div>
            <p>
              Este portfolio puede ampliarse con proyectos reales, enlaces a GitHub, CV
              descargable, formulario de contacto, versión en inglés y secciones personalizadas
              según el tipo de puesto al que quieras optar.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a href="mailto:tuemail@ejemplo.com" className="btn-primary">Enviar email</a>
              <a href="#" className="btn-secondary">LinkedIn / GitHub</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

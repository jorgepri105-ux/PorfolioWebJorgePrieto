import { useMemo, useState } from "react";

export default function PortfolioJorgePrieto() {
  const [language, setLanguage] = useState("es");

  const content = useMemo(() => ({
    es: {
      badge: "Desarrollo web · Ciberseguridad · Perfil técnico junior",
      heroTitle: "Jorge Prieto",
      heroLead:
        "Desarrollador web con formación en ciberseguridad, experiencia en desarrollo de aplicaciones web y orientación a construir soluciones funcionales, seguras y bien presentadas.",
      viewProjects: "Ver proyectos",
      contact: "Contacto",
      languageButton: "EN",
      stats: [
        { label: "Especialidad", value: "Desarrollo + Seguridad" },
        { label: "Ubicación", value: "Madrid, España" },
        { label: "Stack", value: "Frontend, Backend y APIs" },
        { label: "Perfil", value: "Junior con base sólida" },
      ],
      aboutKicker: "Sobre mí",
      aboutTitle: "Perfil técnico con visión práctica",
      aboutParagraphs: [
        "Soy Técnico Superior en Desarrollo de Aplicaciones Web y he completado una formación profesional en ciberseguridad orientada a pentesting, auditoría informática, análisis de vulnerabilidades y respuesta ante ataques.",
        "He trabajado en Verne Technology Group en gestión de proyectos, desarrollo de aplicaciones web y apoyo en ciberseguridad empresarial. Busco seguir creciendo en entornos donde pueda combinar programación, análisis técnico, seguridad y experiencia de usuario.",
      ],
      skillsTitle: "Tecnologías y herramientas",
      experienceKicker: "Experiencia y formación",
      experienceTitle: "Base técnica y recorrido",
      experience: [
        {
          title: "Verne Technology Group",
          text: "Desarrollo de aplicaciones web, gestión de proyectos y apoyo en ciberseguridad en un entorno profesional de telecomunicaciones.",
        },
        {
          title: "Máster Profesional en Ciberseguridad y Asesoría Web",
          text: "Formación práctica en hacking, pentesting, auditoría informática, forense, gestión de identidades, análisis de sistemas e implementación de medidas de seguridad.",
        },
        {
          title: "Técnico Superior en Desarrollo de Aplicaciones Web",
          text: "Base sólida en desarrollo web, lógica de programación, bases de datos y construcción de aplicaciones funcionales.",
        },
      ],
      projectsKicker: "Proyectos destacados",
      projectsTitle: "Trabajo y líneas que me representan",
      projects: [
        {
          title: "Auditorías web y análisis de vulnerabilidades",
          description:
            "Prácticas orientadas a identificar vulnerabilidades en servicios web, analizar riesgos y redactar informes claros para perfiles no técnicos.",
          tags: ["OWASP", "ZAP", "Pentesting", "Informes técnicos"],
        },
        {
          title: "Desarrollo de aplicaciones web",
          description:
            "Proyectos académicos y prácticos centrados en frontend, backend, APIs REST y bases de datos, con foco en funcionalidad y estructura limpia.",
          tags: ["JavaScript", "PHP", "Python", "SQL"],
        },
        {
          title: "Portfolio profesional en React",
          description:
            "Web personal diseñada para mostrar perfil, tecnologías, experiencia y proyectos, con una estructura clara y preparada para crecer con demos reales.",
          tags: ["React", "Vite", "UI", "Responsive"],
        },
      ],
      languagesKicker: "Idiomas",
      languagesTitle: "Comunicación internacional",
      languages: [
        { name: "Inglés", level: "C1 · Alto hablado, escrito y lectura" },
        { name: "Francés", level: "B1 · Nivel medio / medio-alto" },
      ],
      contactKicker: "Contacto",
      contactTitle: "Disponible para nuevas oportunidades",
      contactText:
        "Este portfolio ya permite cambiar entre español e inglés. El siguiente paso será añadir proyectos reales, vistas previas, enlaces a GitHub, CV descargable y una versión aún más orientada a recruiters.",
      emailButton: "Enviar email",
      linksButton: "LinkedIn / GitHub",
    },
    en: {
      badge: "Web development · Cybersecurity · Junior technical profile",
      heroTitle: "Jorge Prieto",
      heroLead:
        "Web developer with cybersecurity training, experience in web application development, and a strong focus on building functional, secure, and well-presented solutions.",
      viewProjects: "View projects",
      contact: "Contact",
      languageButton: "ES",
      stats: [
        { label: "Specialty", value: "Development + Security" },
        { label: "Location", value: "Madrid, Spain" },
        { label: "Stack", value: "Frontend, Backend and APIs" },
        { label: "Profile", value: "Junior with solid foundations" },
      ],
      aboutKicker: "About me",
      aboutTitle: "Technical profile with a practical mindset",
      aboutParagraphs: [
        "I hold a Higher Technician qualification in Web Application Development and I have completed professional cybersecurity training focused on pentesting, IT auditing, vulnerability analysis, and incident response.",
        "I have worked at Verne Technology Group in project management, web application development, and cybersecurity support. I am looking to continue growing in environments where I can combine programming, technical analysis, security, and user experience.",
      ],
      skillsTitle: "Technologies and tools",
      experienceKicker: "Experience and education",
      experienceTitle: "Technical background and journey",
      experience: [
        {
          title: "Verne Technology Group",
          text: "Web application development, project management, and cybersecurity support in a professional telecommunications environment.",
        },
        {
          title: "Professional Diploma in Cybersecurity and Web Advisory",
          text: "Hands-on training in hacking, pentesting, IT auditing, forensics, identity management, systems analysis, and security implementation.",
        },
        {
          title: "Higher Technician in Web Application Development",
          text: "Strong foundation in web development, programming logic, databases, and building functional applications.",
        },
      ],
      projectsKicker: "Featured projects",
      projectsTitle: "Work and areas that represent me",
      projects: [
        {
          title: "Web audits and vulnerability analysis",
          description:
            "Practice projects focused on identifying vulnerabilities in web services, assessing risks, and writing clear reports for non-technical audiences.",
          tags: ["OWASP", "ZAP", "Pentesting", "Technical reports"],
        },
        {
          title: "Web application development",
          description:
            "Academic and practical projects focused on frontend, backend, REST APIs, and databases, with emphasis on functionality and clean structure.",
          tags: ["JavaScript", "PHP", "Python", "SQL"],
        },
        {
          title: "Professional portfolio in React",
          description:
            "Personal website designed to showcase profile, technologies, experience, and projects, with a clear structure ready to grow with real demos.",
          tags: ["React", "Vite", "UI", "Responsive"],
        },
      ],
      languagesKicker: "Languages",
      languagesTitle: "International communication",
      languages: [
        { name: "English", level: "C1 · High spoken, written and reading level" },
        { name: "French", level: "B1 · Intermediate / upper-intermediate" },
      ],
      contactKicker: "Contact",
      contactTitle: "Open to new opportunities",
      contactText:
        "This portfolio already supports switching between Spanish and English. The next step will be adding real projects, previews, GitHub links, a downloadable CV, and an even stronger recruiter-focused version.",
      emailButton: "Send email",
      linksButton: "LinkedIn / GitHub",
    },
  }), []);

  const t = content[language];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Angular",
    "Java",
    "PHP",
    "Python",
    ".NET / C#",
    "SQL",
    "MongoDB",
    "Figma",
    "WordPress",
    "Canva",
    "Git",
    "Azure DevOps",
    "Jenkins",
    "OWASP ZAP",
    "Wireshark",
    "Kali Linux",
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
        button { font: inherit; }
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
        .topbar {
          padding-top: 18px;
          display: flex;
          justify-content: flex-end;
        }
        .lang-switch {
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          color: #e8f0f8;
          border-radius: 14px;
          padding: 10px 14px;
          cursor: pointer;
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }
        .lang-switch:hover {
          transform: translateY(-2px);
          border-color: rgba(34, 211, 238, 0.35);
          background: rgba(34, 211, 238, 0.08);
        }
        .hero {
          padding: 36px 0 72px;
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
        .tag-list,
        .lang-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .skill-pill,
        .lang-pill {
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
            padding-top: 24px;
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
          <div className="container topbar">
            <button
              className="lang-switch"
              onClick={() => setLanguage((prev) => (prev === "es" ? "en" : "es"))}
            >
              {t.languageButton}
            </button>
          </div>

          <div className="container hero-grid">
            <div>
              <div className="eyebrow">{t.badge}</div>
              <h1>{t.heroTitle}</h1>
              <p className="lead">{t.heroLead}</p>
              <div className="hero-actions">
                <a href="#proyectos" className="btn-primary">{t.viewProjects}</a>
                <a href="#contacto" className="btn-secondary">{t.contact}</a>
              </div>
            </div>

            <div className="hero-panel">
              {t.stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section">
          <div className="container about-grid">
            <div className="about-text">
              <div className="section-header">
                <p className="section-kicker">{t.aboutKicker}</p>
                <h2>{t.aboutTitle}</h2>
              </div>
              {t.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="card">
              <h3>{t.skillsTitle}</h3>
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
              <p className="section-kicker">{t.experienceKicker}</p>
              <h2>{t.experienceTitle}</h2>
            </div>

            <div className="grid-3">
              {t.experience.map((item) => (
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
              <p className="section-kicker">{t.projectsKicker}</p>
              <h2>{t.projectsTitle}</h2>
            </div>

            <div className="grid-3">
              {t.projects.map((project) => (
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

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">{t.languagesKicker}</p>
              <h2>{t.languagesTitle}</h2>
            </div>
            <div className="lang-list">
              {t.languages.map((item) => (
                <span key={item.name} className="lang-pill">
                  {item.name}: {item.level}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section section-alt">
          <div className="container contact-box">
            <div className="section-header">
              <p className="section-kicker">{t.contactKicker}</p>
              <h2>{t.contactTitle}</h2>
            </div>
            <p>{t.contactText}</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a href="mailto:jorgepri105@gmail.com" className="btn-primary">{t.emailButton}</a>
              <a href="#" className="btn-secondary">{t.linksButton}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

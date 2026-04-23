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
      title: "Proyecto interactivo de realidad aumentada / simulación histórica",
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(14,165,233,0.12),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                Desarrollo web · Ciberseguridad · Perfil técnico junior
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Jorge Prieto
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Desarrollador web con formación en ciberseguridad, experiencia en tecnologías frontend y backend y orientación a construir soluciones funcionales, seguras y bien presentadas.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#proyectos"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
                >
                  Ver proyectos
                </a>
                <a
                  href="#contacto"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contacto
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Especialidad</p>
                  <p className="mt-2 text-lg font-semibold text-white">Desarrollo + Seguridad</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Ubicación</p>
                  <p className="mt-2 text-lg font-semibold text-white">Madrid, España</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Stack</p>
                  <p className="mt-2 text-lg font-semibold text-white">Frontend, Backend y APIs</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Perfil</p>
                  <p className="mt-2 text-lg font-semibold text-white">Junior con base sólida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Sobre mí
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Perfil técnico con visión práctica
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              He desarrollado mi perfil entre el desarrollo de aplicaciones web y la ciberseguridad. Cuento con formación en desarrollo web, experiencia práctica en entornos reales y una orientación clara hacia la mejora continua, el aprendizaje técnico y la creación de soluciones útiles.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Me interesa especialmente combinar una buena base de programación con una visión de seguridad, calidad técnica y experiencia de usuario. Busco seguir creciendo en proyectos donde pueda aportar tanto en la parte funcional como en la parte analítica.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Tecnologías y herramientas</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Experiencia y formación
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Base técnica y recorrido
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {experience.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Proyectos destacados
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Trabajo y líneas que me representan
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Disponible para nuevas oportunidades
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Este portfolio puede ampliarse con tus proyectos reales, enlaces a GitHub, CV descargable, formulario de contacto, versión en inglés y secciones personalizadas según el tipo de puesto que quieras buscar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tuemail@ejemplo.com"
              className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Enviar email
            </a>
            <a
              href="#"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
            >
              LinkedIn / GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

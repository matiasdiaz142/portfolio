import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = {
  github: "https://github.com/matiasdiaz142",
  linkedin: "https://www.linkedin.com/in/matiasdiaz142/",
  cv: "/CV_Matias_Diaz.pdf",
};

export default function Hero() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const target = document.querySelector("#contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-950 px-6 pt-24 sm:px-10 lg:px-20"
    >
      {/* Glow decorativo de fondo */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-4xl">
        <span className="mb-4 inline-block font-mono text-sm text-violet-400">
          hola, soy
        </span>

        <h1 className="text-4xl font-bold leading-tight text-slate-100 sm:text-6xl">
          Matias Diaz
        </h1>

        <h2 className="mt-4 text-xl font-medium text-slate-300 sm:text-2xl">
          Desarrollador de Software{" "}
          <span className="text-violet-400">|</span> Técnico Universitario en
          Programación
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg text-justify">
          Construyo software con bases sólidas: análisis estructurado, código
          limpio y testing como estándar, no como excepción. Técnico
          Universitario en Programación (UNAHUR), actualmente completando la
          Licenciatura en Informática. Además de desarrollar, disfruto
          meterme "debajo del capó" — entender cómo funcionan los sistemas,
          las redes y la infraestructura que sostiene al software es parte de
          cómo resuelvo problemas.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-400"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-violet-500/50 hover:text-violet-300"
          >
            <FaLinkedin className="h-4 w-4" />
            LinkedIn
          </a>

          <a
            href={SOCIAL_LINKS.cv}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-violet-500/50 hover:text-violet-300"
          >
            <Download className="h-4 w-4" />
            Descargar CV
          </a>

          <a
            href="#contacto"
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-violet-500/50 hover:text-violet-300"
          >
            <Mail className="h-4 w-4" />
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}

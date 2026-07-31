// 1. Dejá Mail desde lucide-react
import { Mail } from "lucide-react";

// 2. Traé los logos de redes desde react-icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT = {
  email: "matiasdiaz142@gmail.com",
  github: "https://github.com/matiasdiaz142",
  linkedin: "https://www.linkedin.com/in/matiasdiaz142/",
};

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section
        id="contacto"
        className="relative overflow-hidden bg-slate-900/40 px-6 py-24 sm:px-10 lg:px-20"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block font-mono text-sm text-violet-400">
            // contacto
          </span>
          <h2 className="mb-5 text-3xl font-bold text-slate-100 sm:text-4xl">
            Hablemos
          </h2>
          <p className="mb-10 text-base leading-relaxed text-slate-400">
            Si tenés una oportunidad, un proyecto o simplemente querés
            conversar sobre desarrollo de software, escribime. Te respondo a
            la brevedad.
          </p>

          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400"
          >
            <Mail className="h-4 w-4" />
            {CONTACT.email}
          </a>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-colors hover:text-violet-300"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-violet-300"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© {currentYear} Matias Diaz. Todos los derechos reservados.</p>
          <p className="font-mono text-xs">
            Hecho con React, Vite &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
}

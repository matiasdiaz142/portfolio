// 1. Íconos de interfaz desde lucide-react
import { ExternalLink, GraduationCap, User } from "lucide-react";

// 2. Logo de GitHub desde react-icons
import { FaGithub } from "react-icons/fa";

// 3. Importación de los proyectos (queda igual)
import { projects } from "../data/projects";

function ProjectCard({ project }) {
  const { title, category, problem, solution, tags, github, demo } = project;
  const isAcademic = category?.toLowerCase().includes("académico");

  return (
    <div
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-800
                 bg-slate-900/60 p-6 transition-all duration-300
                 hover:-translate-y-1 hover:border-violet-500/50
                 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.35)]"
    >
      {/* Badge de categoría */}
      <div className="mb-4 flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
            isAcademic
              ? "bg-violet-500/10 text-violet-300 ring-1 ring-inset ring-violet-500/30"
              : "bg-cyan-500/10 text-cyan-300 ring-1 ring-inset ring-cyan-500/30"
          }`}
        >
          {isAcademic ? (
            <GraduationCap className="h-3.5 w-3.5" />
          ) : (
            <User className="h-3.5 w-3.5" />
          )}
          {category}
        </span>
      </div>

      {/* Título */}
      <h3 className="mb-3 text-lg font-semibold text-slate-100 transition-colors group-hover:text-violet-300">
        {title}
      </h3>

      {/* Problema / Solución */}
      <div className="mb-5 space-y-2 text-sm leading-relaxed text-slate-400">
        <p>
          <span className="font-medium text-slate-300">Problema: </span>
          {problem}
        </p>
        <p>
          <span className="font-medium text-slate-300">Solución: </span>
          {solution}
        </p>
      </div>

      {/* Tags de tecnologías */}
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-800 px-2.5 py-1 font-mono text-xs text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Botones de acción */}
      <div className="mt-auto flex gap-3 border-t border-slate-800 pt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-violet-300"
          >
            <FaGithub className="h-4 w-4" />
            Código
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-violet-300"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado de sección */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block font-mono text-sm text-violet-400">
            // proyectos
          </span>
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Proyectos destacados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Una selección de trabajos académicos y personales donde aplico
            desarrollo estructurado, buenas prácticas y resolución de
            problemas reales.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

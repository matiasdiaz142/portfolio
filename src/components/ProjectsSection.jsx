import { projects } from "./projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
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

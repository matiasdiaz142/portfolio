import { GraduationCap, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Columna de texto */}
        <div>
          <span className="mb-3 inline-block font-mono text-sm text-violet-400">
            // sobre mí
          </span>
          <h2 className="mb-8 text-3xl font-bold text-slate-100 sm:text-4xl">
            Sobre mí
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-slate-400 text-justify">
            <p>
              Soy Técnico Universitario en Programación, egresado de la
              Universidad Nacional de Hurlingham (UNAHUR), donde actualmente
              continúo mi formación en la Licenciatura en Informática. Mi
              paso por la carrera me dio algo más que herramientas técnicas:
              una forma de pensar el software desde sus fundamentos —
              paradigmas de programación, algoritmos y estructuras de datos,
              bases de datos relacionales, ingeniería de software y
              metodologías ágiles.
            </p>
            <p>
              Me interesa particularmente el desarrollo Full Stack, con foco
              en construir soluciones bien diseñadas: desacopladas, testeadas
              y pensadas para escalar. Trabajo con Programación Orientada a
              Objetos aplicando buenas prácticas de diseño, y me tomo en
              serio el testing (TDD) como parte del proceso, no como un paso
              opcional.
            </p>
            <p>
              En paralelo, tengo una fuerte base en sistemas operativos,
              redes y arquitectura de computadoras, lo que me da una ventaja
              a la hora de diagnosticar problemas: no solo escribo código,
              también entiendo el entorno en el que ese código va a correr.
              Esa mirada integral — desde el diseño de una clase hasta el
              comportamiento de una red o un servidor — es algo que aplico
              tanto para desarrollar software robusto como para dar soporte
              técnico cuando se necesita.
            </p>
            <p>
              Busco seguir creciendo como desarrollador, sumando proyectos
              reales y desafíos donde pueda combinar rigor técnico con
              capacidad de resolución práctica.
            </p>
          </div>
        </div>

        {/* Columna de formación */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
                <GraduationCap className="h-5 w-5 text-violet-400" />
              </div>
              <h3 className="text-base font-semibold text-slate-100">
                Técnico Universitario en Programación
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Universidad Nacional de Hurlingham (UNAHUR)
            </p>
            <span className="mt-2 inline-block rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 ring-1 ring-inset ring-violet-500/30">
              Título obtenido
            </span>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                <BookOpen className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-semibold text-slate-100">
                Licenciatura en Informática
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Universidad Nacional de Hurlingham (UNAHUR)
            </p>
            <span className="mt-2 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-500/30">
              En curso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

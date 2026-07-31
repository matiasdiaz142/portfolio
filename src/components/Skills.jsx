import { Code2, Database, Network, Wrench } from "lucide-react";

const SKILL_BLOCKS = [
  {
    icon: Code2,
    title: "Lenguajes & Frameworks",
    description:
      "Desarrollo tanto frontend como backend con foco en Programación Orientada a Objetos y buenas prácticas de diseño.",
    items: [
      "JavaScript / TypeScript",
      "React.js",
      "Node.js / Express",
      "HTML5 / CSS3",
      "POO (patrones, acoplamiento/cohesión)",
    ],
  },
  {
    icon: Database,
    title: "Bases de Datos & Persistencia",
    description:
      "Modelado de datos y estrategias de persistencia, desde SQL puro hasta mapeo objeto-relacional.",
    items: [
      "SQL (consultas, transacciones)",
      "MongoDB",
      "Modelado relacional",
      "ORM / Mapeo objeto-relacional",
    ],
  },
  {
    icon: Network,
    title: "Sistemas, Redes & Soporte",
    description:
      "Entiendo el entorno en el que corre el software: desde el hardware hasta la red, lo que me da una mirada más completa a la hora de diagnosticar problemas.",
    items: [
      "Sistemas Operativos (procesos, hilos, memoria)",
      "Redes (modelo OSI/TCP-IP, sockets, cliente-servidor)",
      "Arquitectura de computadoras",
      "Diagnóstico y soporte técnico IT",
    ],
  },
  {
    icon: Wrench,
    title: "Metodologías & Herramientas",
    description:
      "Trabajo con procesos que priorizan calidad y colaboración en equipo.",
    items: ["Git / GitHub", "Metodologías Ágiles (Scrum)", "Testing / TDD", "Clean Code"],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="bg-slate-900/40 px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado de sección */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block font-mono text-sm text-violet-400">
            // stack
          </span>
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Stack técnico
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Herramientas y conocimientos que aplico para construir software
            confiable, de punta a punta.
          </p>
        </div>

        {/* Grid de paneles */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SKILL_BLOCKS.map(({ icon: Icon, title, description, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-7 transition-colors hover:border-violet-500/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
                  <Icon className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-slate-400">
                {description}
              </p>

              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

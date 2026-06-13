import { Shield, Users, ExternalLink, CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

const projectIcons = { Shield, Users }

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="py-24 bg-flame-950/15">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="Innovative applications built to improve road safety and preserve cultural heritage."
        />

        <div ref={ref} className="reveal grid gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = projectIcons[project.icon]
            return (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-flame-900/40 bg-carbon-950/80 transition-all duration-300 hover:border-flame-700/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-flame-950/50"
              >
                <div
                  className={`relative bg-gradient-to-br ${project.gradient} px-8 py-10`}
                >
                  <div className="absolute inset-0 bg-carbon-950/20" />
                  <div className="relative flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white">
                      <Icon size={28} />
                    </div>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      Featured
                    </span>
                  </div>
                  <h3 className="relative mt-6 text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="relative mt-1 text-sm font-medium text-white/80">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-flame-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-carbon-800 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-flame-500 transition-colors hover:text-flame-400"
                  >
                    View Simulation
                    <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

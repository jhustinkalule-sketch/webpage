import { Briefcase } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          subtitle="A track record of hands-on IT work and innovative project leadership."
        />

        <div ref={ref} className="reveal relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-flame-600 via-flame-900 to-transparent md:left-8 md:block" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <article
                key={item.role}
                className="relative md:pl-20"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute left-0 top-6 hidden h-4 w-4 rounded-full border-4 border-carbon-950 bg-flame-600 md:left-6 md:block" />

                <div className="rounded-2xl border border-flame-900/40 bg-carbon-900/60 p-6 transition-all hover:border-flame-700/50 hover:bg-flame-950/25 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-flame-950 text-flame-500 md:hidden">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {item.role}
                        </h3>
                        <p className="mt-1 font-medium text-flame-500">
                          {item.organization}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-carbon-800 px-4 py-1.5 text-sm font-medium text-slate-300">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-flame-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

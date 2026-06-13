import {
  Wrench,
  Package,
  Monitor,
  Lightbulb,
  User,
  Target,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import { specializations } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import ProfileAvatar from './ProfileAvatar'

const iconMap = {
  Wrench,
  Package,
  Monitor,
  Lightbulb,
}

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-24 bg-flame-950/20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          subtitle="Dedicated IT professional passionate about keeping technology running smoothly and building solutions that matter."
        />

        <div ref={ref} className="reveal grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-flame-900/40 bg-carbon-800/50 p-6 sm:flex-row sm:items-center">
              <ProfileAvatar size="lg" className="shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-white">Justin Kalule</h3>
                <p className="mt-1 text-sm text-flame-500">IT Personnel · Uganda — Wakiso</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Passionate about technology, innovation, and building solutions
                  that make a real impact.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-flame-900/40 bg-carbon-800/50 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-flame-950/80 text-flame-500">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">My Story</h3>
                <p className="mt-2 leading-relaxed text-slate-400">
                  I am Justin Kalule, an IT personnel with hands-on expertise across
                  the full technology stack—from repairing physical hardware to
                  managing software ecosystems and installing operating systems. I
                  combine technical precision with a drive for innovation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-flame-900/40 bg-carbon-800/50 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-flame-950/80 text-flame-500">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">My Mission</h3>
                <p className="mt-2 leading-relaxed text-slate-400">
                  To design and maintain reliable, secure, and adaptable technological
                  infrastructures that support innovation and meet the evolving needs
                  of businesses, communities and the world at large.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {specializations.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-flame-900/40 bg-carbon-950/60 p-5 transition-all duration-300 hover:border-flame-700/60 hover:bg-flame-950/30 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-carbon-700 text-flame-500 transition-colors group-hover:bg-flame-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

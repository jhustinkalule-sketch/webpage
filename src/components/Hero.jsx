import {
  ArrowDown,
  Mail,
  Cpu,
  ChevronRight,
} from 'lucide-react'
import ProfileAvatar from './ProfileAvatar'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-flame-900/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-flame-600/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#ea580c 1px, transparent 1px), linear-gradient(90deg, #ea580c 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-flame-800/70 bg-flame-950/60 px-4 py-1.5 text-sm font-medium text-flame-400">
              <Cpu size={16} />
              IT Professional & Innovator
            </p>

            <h1 className="animate-fade-up animation-delay-100 opacity-0-start text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-flame-400 via-flame-500 to-flame-600 bg-clip-text text-transparent">
                Justin Kalule
              </span>
            </h1>

            <p className="animate-fade-up animation-delay-200 opacity-0-start mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              I specialize in hardware repair, software management, operating
              system installation, and building technology solutions that make
              a real difference.
            </p>

            <div className="animate-fade-up animation-delay-300 opacity-0-start mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2 rounded-xl bg-flame-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-flame-500 hover:shadow-lg hover:shadow-flame-900/50"
              >
                View My Work
                <ChevronRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 rounded-xl border border-flame-800 bg-carbon-900/50 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-all hover:border-flame-600 hover:bg-flame-950/40"
              >
                <Mail size={18} />
                Get In Touch
              </button>
            </div>

            <div className="animate-fade-up animation-delay-400 opacity-0-start mt-12 flex gap-8">
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '2', label: 'Major Projects' },
                { value: '100%', label: 'Client Focus' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-500 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up animation-delay-200 opacity-0-start relative flex justify-center lg:justify-end">
            <div className="animate-float relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-flame-600/25 to-flame-950/50 blur-2xl" />
              <div className="relative rounded-3xl border border-flame-900/60 bg-gradient-to-br from-carbon-900 to-black p-8 shadow-2xl shadow-flame-950/40 sm:p-10">
                <div className="mx-auto mb-6 flex justify-center">
                  <ProfileAvatar size="md" />
                </div>
                <h2 className="text-center text-xl font-bold text-white">
                  Justin Kalule
                </h2>
                <p className="mt-1 text-center text-sm text-flame-500">
                  IT Personnel · Uganda — Wakiso
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Hardware & Maintenance',
                    'Software Management',
                    'OS Installation',
                    'Tech Innovation',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-flame-900/50 bg-carbon-950/50 px-4 py-2.5 text-sm text-zinc-400"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-flame-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500 hover:text-flame-500 transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  )
}

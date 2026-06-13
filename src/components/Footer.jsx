import { Heart } from 'lucide-react'
import { navLinks } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-flame-900/50 bg-carbon-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white">Justin Kalule</p>
            <p className="mt-1 text-sm text-slate-500">
              IT Professional · Hardware · Software · Innovation
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="text-sm text-zinc-400 transition-colors hover:text-flame-500"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-flame-900/50 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {year} Justin Kalule. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-slate-500">
            Built with
            <Heart size={14} className="text-flame-600 fill-flame-600" />
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

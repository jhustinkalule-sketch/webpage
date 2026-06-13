import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolio'
import ProfileAvatar from './ProfileAvatar'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-lg border-b border-flame-900/50 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNav('home')
          }}
          className="flex items-center gap-2 text-white font-bold text-lg tracking-tight"
        >
          <ProfileAvatar size="sm" className="ring-1" />
          <span className="hidden sm:inline">Justin Kalule</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNav(link.id)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-flame-950/60 hover:text-flame-400"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-white hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-flame-900/50 bg-carbon-950/95 px-6 pb-6 backdrop-blur-lg">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNav(link.id)}
                className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-zinc-400 hover:bg-flame-950/60 hover:text-flame-400 transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

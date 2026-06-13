import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import { contactInfo } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import MediumIcon from './MediumIcon'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-flame-950/20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          subtitle="Have a project in mind or need IT support? I'd love to hear from you."
        />

        <div ref={ref} className="reveal grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: contactInfo.email,
                href: `mailto:${contactInfo.email}`,
              },
              {
                icon: Phone,
                label: 'Phone',
                value: contactInfo.phone,
                href: `tel:${contactInfo.phoneHref}`,
              },
              {
                icon: MapPin,
                label: 'Location',
                value: contactInfo.location,
              },
            ].map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-flame-950/80 text-flame-500">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="font-medium text-white">{value}</p>
                  </div>
                </>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl border border-flame-900/40 bg-carbon-950/60 p-5 transition-colors hover:border-flame-700/50 hover:bg-flame-950/30"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-flame-900/40 bg-carbon-950/60 p-5 transition-colors hover:border-flame-700/50"
                >
                  {content}
                </div>
              )
            })}

            <div className="flex gap-4">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-flame-900/40 bg-carbon-950/60 text-zinc-400 transition-all hover:border-flame-600 hover:bg-flame-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-flame-900/40 bg-carbon-950/60 text-zinc-400 transition-all hover:border-flame-600 hover:bg-flame-600 hover:text-white"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href={contactInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-flame-900/40 bg-carbon-950/60 text-zinc-400 transition-all hover:border-flame-600 hover:bg-flame-600 hover:text-white"
                aria-label="Medium"
              >
                <MediumIcon size={22} />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-flame-900/40 bg-carbon-950/60 p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="w-full rounded-xl border border-flame-900/50 bg-carbon-900 px-4 py-3 text-white outline-none transition-colors focus:border-flame-600 focus:ring-1 focus:ring-flame-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="w-full rounded-xl border border-flame-900/50 bg-carbon-900 px-4 py-3 text-white outline-none transition-colors focus:border-flame-600 focus:ring-1 focus:ring-flame-600"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className="w-full resize-none rounded-xl border border-flame-900/50 bg-carbon-900 px-4 py-3 text-white outline-none transition-colors focus:border-flame-600 focus:ring-1 focus:ring-flame-600"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-flame-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-flame-500 sm:w-auto"
            >
              <Send size={18} />
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>

            {submitted && (
              <p className="mt-3 text-sm text-flame-500 animate-fade-in">
                Thank you! I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

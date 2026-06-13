import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import {
  HardDrive,
  Server,
  Terminal,
  AppWindow,
  Wifi,
  Code2,
  Palette,
  Headphones,
} from 'lucide-react'

const skillIcons = [
  HardDrive,
  Server,
  Terminal,
  AppWindow,
  Wifi,
  Code2,
  Palette,
  Headphones,
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          subtitle="A balanced skill set spanning hardware, software, systems, and emerging technology."
        />

        <div ref={ref} className="reveal grid gap-6 sm:grid-cols-2">
          {skills.map((skill, i) => {
            const Icon = skillIcons[i % skillIcons.length]
            return (
              <div
                key={skill.name}
                className="group rounded-2xl border border-flame-900/40 bg-carbon-900/60 p-5 transition-all hover:border-flame-700/50 hover:shadow-lg hover:shadow-flame-950/30"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-carbon-700 text-flame-500 transition-colors group-hover:bg-flame-600 group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <span className="font-medium text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-flame-500">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-carbon-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-flame-950 via-flame-700 to-flame-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

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

// Map icon names to icons for categories if desired, fallback to first icon per category
const categoryIcons = {
  Hardware: HardDrive,
  Backend: Server,
  CLI: Terminal,
  Frontend: AppWindow,
  Network: Wifi,
  Programming: Code2,
  Design: Palette,
  Audio: Headphones,
}

function getIconForCategory(category) {
  return categoryIcons[category] || HardDrive
}

// Expecting `skills` to be an array of objects like:
// { category: 'Frontend', skills: ['React', 'Vue', ...] }
// or { name: "...", category: "...", ...}
// We'll auto-group by category if not already grouped

function groupSkillsByCategory(skills) {
  if (!skills[0]) return []
  if ('category' in skills[0] && 'skills' in skills[0]) return skills // already grouped
  // If flat, group by category
  const groups = {}
  skills.forEach((s) => {
    if (!groups[s.category]) groups[s.category] = []
    groups[s.category].push(s.name)
  })
  return Object.entries(groups).map(([category, skills]) => ({
    category,
    skills,
  }))
}

export default function Skills() {
  const ref = useReveal()
  const skillGroups = groupSkillsByCategory(skills)

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          subtitle="A balanced skill set spanning hardware, software, systems, and emerging technology."
        />

        <div
          ref={ref}
          className="reveal grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group, idx) => {
            const Icon = getIconForCategory(group.category)
            return (
              <div
                key={group.category}
                className="rounded-2xl border border-flame-900/40 bg-carbon-900/60 p-6 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-carbon-700 text-flame-500">
                    <Icon size={22} />
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-flame-900/70 text-flame-100 px-3 py-1 text-sm font-medium border border-flame-700/60 hover:bg-flame-600 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

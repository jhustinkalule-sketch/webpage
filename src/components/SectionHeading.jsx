export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <span className="mb-3 inline-block rounded-full border border-flame-800/60 bg-flame-950/50 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-flame-400">
        {label}
      </span>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">{subtitle}</p>
      )}
    </div>
  )
}

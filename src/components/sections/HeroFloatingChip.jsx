export default function HeroFloatingChip({
  className = '',
  children,
  driftClass = 'hero-drift-1',
  entranceDelay = 0,
}) {
  return (
    <div
      className={`hero-chip-shell pointer-events-none absolute z-30 ${className}`}
      style={{ animationDelay: `${entranceDelay}s` }}
    >
      <div className={`hero-chip-drift ${driftClass}`}>
        <div className="rounded-2xl border border-ivory/15 bg-gradient-to-br from-charcoal/75 via-charcoal/55 to-charcoal/40 p-px shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="rounded-[calc(1rem-1px)] bg-charcoal/40 px-3 py-2 sm:px-3.5 sm:py-2.5">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { useRevealVisibility } from '../../hooks/useRevealVisibility'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
}) {
  const { ref, visible } = useRevealVisibility({ margin: '-80px', amount: 0.2 })

  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <motion.div
      ref={ref}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 flex max-w-3xl flex-col gap-4 sm:mb-16 ${alignClass} ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${dark ? 'text-gold-light' : 'text-gold-dark'}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl ${dark ? 'text-ivory' : 'text-charcoal'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${dark ? 'text-ivory/75' : 'text-muted'}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}

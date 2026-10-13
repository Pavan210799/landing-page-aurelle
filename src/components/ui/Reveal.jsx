import { motion } from 'framer-motion'
import { useRevealVisibility } from '../../hooks/useRevealVisibility'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 32,
  amount = 0.15,
}) {
  const { ref, visible } = useRevealVisibility({ margin: '-60px', amount })

  return (
    <motion.div
      ref={ref}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.55,
        delay: visible ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

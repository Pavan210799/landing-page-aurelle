import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 32,
  amount = 0.15,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    margin: '-60px',
    amount,
  })

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.55,
        delay: isInView ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/**
 * Reveal when `amount` of the element is visible; reset only when fully off-screen
 * so half-in-view scroll positions do not flicker.
 */
export function useRevealVisibility({ margin = '-60px', amount = 0.15 } = {}) {
  const ref = useRef(null)
  const shouldReveal = useInView(ref, { margin, amount })
  const intersects = useInView(ref, { amount: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (shouldReveal) setVisible(true)
    else if (!intersects) setVisible(false)
  }, [shouldReveal, intersects])

  return { ref, visible }
}

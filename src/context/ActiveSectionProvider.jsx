import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const SECTION_IDS = [
  'hero',
  'about',
  'features',
  'how-it-works',
  'testimonials',
  'pricing',
  'contact',
]

const ActiveSectionContext = createContext('hero')

export function ActiveSectionProvider({ children }) {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return undefined

    const visibility = new Map(SECTION_IDS.map((id) => [id, 0]))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let bestId = 'hero'
        let bestRatio = 0

        visibility.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        setActiveId(bestId)
      },
      {
        root: null,
        rootMargin: '-32% 0px -42% 0px',
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const value = useMemo(() => activeId, [activeId])

  return (
    <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>
  )
}

export function useActiveSection() {
  return useContext(ActiveSectionContext)
}

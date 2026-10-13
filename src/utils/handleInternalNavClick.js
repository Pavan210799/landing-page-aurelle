import { scrollToSection } from './scrollToSection'

export function handleInternalNavClick(event, href, onAfter) {
  if (!href?.startsWith('#')) return false

  event.preventDefault()

  const sectionId = href.slice(1)

  // Close mobile menu first so body overflow is unlocked before scrolling
  onAfter?.()

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      scrollToSection(sectionId, { behavior: 'smooth' })
    })
  })

  return true
}

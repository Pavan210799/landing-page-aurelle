import { scrollToSection } from './scrollToSection'

export function handleInternalNavClick(event, href, onAfter) {
  if (!href?.startsWith('#')) return false

  event.preventDefault()
  const sectionId = href.slice(1)
  scrollToSection(sectionId, { behavior: 'smooth' })
  onAfter?.()
  return true
}

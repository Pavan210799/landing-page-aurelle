import { clearUrlHash } from './scrollStorage'

export function scrollToSection(sectionId, { behavior = 'smooth' } = {}) {
  if (!sectionId) return
  const el = document.getElementById(sectionId)
  if (!el) return
  el.scrollIntoView({ behavior, block: 'start' })
  clearUrlHash()
}

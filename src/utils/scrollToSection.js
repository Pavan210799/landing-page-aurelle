import { clearUrlHash } from './scrollStorage'

function getScrollOffset() {
  const padding = getComputedStyle(document.documentElement).scrollPaddingTop
  const parsed = Number.parseFloat(padding)
  return Number.isNaN(parsed) ? 88 : parsed
}

export function scrollToSection(sectionId, { behavior = 'smooth' } = {}) {
  if (!sectionId) return

  if (sectionId === 'hero') {
    window.scrollTo({ top: 0, left: 0, behavior })
    clearUrlHash()
    return
  }

  const el = document.getElementById(sectionId)
  if (!el) return

  const offset = getScrollOffset()
  const top = el.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({
    top: Math.max(0, top),
    left: 0,
    behavior,
  })
  clearUrlHash()
}

export const SCROLL_STORAGE_KEY = 'aurelle-scroll-y'

export function saveScrollPosition() {
  sessionStorage.setItem(SCROLL_STORAGE_KEY, String(Math.round(window.scrollY)))
}

export function readScrollPosition() {
  const raw = sessionStorage.getItem(SCROLL_STORAGE_KEY)
  if (raw == null || raw === '') return null
  const y = Number.parseInt(raw, 10)
  return Number.isNaN(y) ? null : y
}

export function clearUrlHash() {
  if (!window.location.hash) return
  window.history.replaceState(
    null,
    '',
    `${window.location.pathname}${window.location.search}`,
  )
}

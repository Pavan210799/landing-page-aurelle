import { useEffect } from 'react'
import {
  clearUrlHash,
  readScrollPosition,
  saveScrollPosition,
  SCROLL_STORAGE_KEY,
} from '../utils/scrollStorage'

export function useScrollRestoration(isPageReady) {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const persist = () => saveScrollPosition()

    window.addEventListener('pagehide', persist)
    window.addEventListener('beforeunload', persist)

    let timeoutId
    const onScroll = () => {
      window.clearTimeout(timeoutId)
      timeoutId = window.setTimeout(persist, 120)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('pagehide', persist)
      window.removeEventListener('beforeunload', persist)
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (!isPageReady) return undefined

    const savedY = readScrollPosition()

    const applyScroll = () => {
      if (savedY != null) {
        clearUrlHash()
        window.scrollTo({ top: savedY, left: 0, behavior: 'instant' })
        return
      }

      const hash = window.location.hash.replace('#', '')
      if (hash) {
        const target = document.getElementById(hash)
        if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' })
        clearUrlHash()
      }
    }

    applyScroll()
    const raf = window.requestAnimationFrame(() => {
      applyScroll()
    })

    return () => window.cancelAnimationFrame(raf)
  }, [isPageReady])
}

export { SCROLL_STORAGE_KEY }

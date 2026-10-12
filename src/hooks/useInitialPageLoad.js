import { useEffect, useState } from 'react'

const MIN_SKELETON_MS = 650

export function useInitialPageLoad() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const startedAt = Date.now()

    const heroImage = new Image()
    heroImage.src =
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=85'

    const finish = () => {
      if (cancelled) return
      const elapsed = Date.now() - startedAt
      const wait = Math.max(0, MIN_SKELETON_MS - elapsed)
      window.setTimeout(() => {
        if (!cancelled) setIsLoading(false)
      }, wait)
    }

    const onWindowLoad = () => {
      if (heroImage.complete) finish()
      else {
        heroImage.addEventListener('load', finish, { once: true })
        heroImage.addEventListener('error', finish, { once: true })
      }
    }

    if (document.readyState === 'complete') onWindowLoad()
    else window.addEventListener('load', onWindowLoad, { once: true })

    return () => {
      cancelled = true
      window.removeEventListener('load', onWindowLoad)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoading])

  return isLoading
}

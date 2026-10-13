import { useEffect, useRef } from 'react'

const CSS_VAR = '--site-header-height'

export function useSiteHeaderHeight(deps = []) {
  const headerRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    const header = headerRef.current
    if (!header) return undefined

    const apply = () => {
      root.style.setProperty(CSS_VAR, `${header.offsetHeight}px`)
    }

    apply()

    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(apply) : null
    observer?.observe(header)
    window.addEventListener('resize', apply)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', apply)
    }
  }, deps)

  return headerRef
}

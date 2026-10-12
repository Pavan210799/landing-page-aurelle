import { useLinkActionFeedback } from '../../hooks/useLinkActionFeedback'
import { handleInternalNavClick } from '../../utils/handleInternalNavClick'

export default function TextLink({
  href,
  children,
  className = '',
  external = false,
  onClick,
  ...props
}) {
  const { runWithFeedback } = useLinkActionFeedback()

  const base =
    'relative inline-block transition-colors duration-150 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-150 after:ease-out hover:after:w-full'

  const isExternal =
    external || href?.startsWith('http://') || href?.startsWith('https://')

  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      className={`${base} ${className}`}
      onClick={(event) => {
        if (handleInternalNavClick(event, href, () => onClick?.(event))) return
        runWithFeedback(href, onClick)(event)
      }}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  )
}

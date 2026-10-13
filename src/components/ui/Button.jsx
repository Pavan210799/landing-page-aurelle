import { useLinkActionFeedback } from '../../hooks/useLinkActionFeedback'
import { handleInternalNavClick } from '../../utils/handleInternalNavClick'

const variants = {
  primary:
    'border border-transparent bg-charcoal text-ivory shadow-lg shadow-charcoal/20 hover:border-gold/25 hover:bg-charcoal-soft hover:shadow-xl hover:shadow-charcoal/30',
  secondary:
    'border border-charcoal/20 bg-transparent text-charcoal shadow-sm shadow-transparent hover:border-gold/50 hover:bg-gold/10 hover:shadow-md hover:shadow-gold/15',
  gold:
    'isolate overflow-hidden border-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-charcoal shadow-[0_3px_12px_rgba(196,165,116,0.35)] hover:brightness-[1.03] hover:shadow-[0_4px_16px_rgba(196,165,116,0.42)]',
  ghost:
    'border border-transparent bg-transparent text-charcoal shadow-none hover:-translate-y-0 hover:text-gold-dark hover:underline',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  ...props
}) {
  const { runWithFeedback } = useLinkActionFeedback()

  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide antialiased transition-[transform,box-shadow,filter,background-color,border-color] duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:translate-y-0 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-150 group-hover:[&_svg]:translate-x-0.5'

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={(event) => {
          if (handleInternalNavClick(event, href, () => onClick?.(event))) return
          runWithFeedback(href, onClick)(event)
        }}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

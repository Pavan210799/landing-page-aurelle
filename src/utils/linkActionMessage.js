export function getLinkActionMessage(href) {
  if (!href || typeof href !== 'string') return null
  if (href.startsWith('mailto:')) return 'Opening your email app…'
  if (href.startsWith('tel:')) return 'Opening phone dialer…'
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return 'Opening external link…'
  }
  return null
}

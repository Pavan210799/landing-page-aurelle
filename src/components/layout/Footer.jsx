import { Mail, MapPin, Phone } from 'lucide-react'
import {
  footerLinkGroups,
  footerMapsHref,
  footerSocialLinks,
} from '../../data/footerLinks'
import { useLinkActionFeedback } from '../../hooks/useLinkActionFeedback'
import { handleInternalNavClick } from '../../utils/handleInternalNavClick'
import Container from '../ui/Container'
import TextLink from '../ui/TextLink'

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.3 3h3.2l-7 8.1L21.5 21h-6.2l-4.8-6.3-5.5 6.3H2.2l7.5-8.6L2.5 3h6.4l4.3 5.7L17.3 3zm-1.1 16.2h1.8L7.9 4.7H6l10.2 14.5z" />
    </svg>
  )
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.5 8.5h3v11h-3v-11zm1.5-4.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM10 8.5h2.9v1.5h.04c.4-.75 1.38-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.6V19.5h-3v-5.2c0-1.24-.02-2.83-1.72-2.83-1.72 0-1.98 1.35-1.98 2.74v5.29H10V8.5z" />
    </svg>
  )
}

const socialIcons = {
  Instagram: IconInstagram,
  X: IconX,
  LinkedIn: IconLinkedIn,
}

function FooterNavItem({ link }) {
  const isExternal = link.type === 'external'

  return (
    <TextLink
      href={link.href}
      external={isExternal}
      className="text-sm text-ivory/70 hover:text-ivory"
    >
      {link.label}
    </TextLink>
  )
}

export default function Footer() {
  const { runWithFeedback } = useLinkActionFeedback()

  return (
    <footer id="contact" className="border-t border-ivory/10 bg-charcoal text-ivory">
      <Container className="section-padding !pb-12 !pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div>
            <a
              href="#hero"
              onClick={(event) => handleInternalNavClick(event, '#hero')}
              className="font-display text-3xl tracking-[0.15em] text-ivory transition-colors duration-150 hover:text-gold-light"
            >
              AURELLE
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">
              Curated luxury travel for those who seek beauty, privacy, and impeccable
              service—wherever the map leads.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-ivory/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <TextLink
                  href={footerMapsHref}
                  external
                  className="text-ivory/80 hover:text-gold-light"
                >
                  88 Madison Avenue, Suite 1200
                  <br />
                  New York, NY 10016
                </TextLink>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <TextLink href="tel:+18005552873" className="text-ivory/80 hover:text-gold-light">
                  +1 (800) 555-AURE
                </TextLink>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <TextLink
                  href="mailto:concierge@aurelle.travel"
                  className="break-all text-ivory/80 hover:text-gold-light"
                >
                  concierge@aurelle.travel
                </TextLink>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {footerSocialLinks.map(({ label, href }) => {
                const Icon = socialIcons[label]
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    onClick={runWithFeedback(href)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/80 transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 hover:text-gold-light hover:shadow-md hover:shadow-gold/15"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinkGroups).map(([title, links]) => (
              <div key={title}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                  {title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <FooterNavItem link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-center text-xs text-ivory/50 sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} AURELLE Travel. All rights reserved.</p>
          <p>Crafted for discerning explorers worldwide.</p>
        </div>
      </Container>
    </footer>
  )
}

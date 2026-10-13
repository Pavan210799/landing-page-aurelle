import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../../data/content'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolledNav } from '../../hooks/useScrolledNav'
import { handleInternalNavClick } from '../../utils/handleInternalNavClick'
import Button from '../ui/Button'

function NavLink({ link, scrolled, menuOpen, active, onNavigate, className = '' }) {
  const sectionId = link.href.replace('#', '')
  const isActive = active === sectionId

  return (
    <a
      href={link.href}
      aria-current={isActive ? 'true' : undefined}
      onClick={(event) => handleInternalNavClick(event, link.href, onNavigate)}
      className={`relative text-sm font-medium tracking-wide transition-colors duration-150 after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gold after:transition-[width] after:duration-150 after:ease-out ${
        isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
      } ${
        isActive
          ? scrolled || menuOpen
            ? 'text-gold-dark'
            : 'text-gold-light'
          : scrolled || menuOpen
            ? 'text-charcoal hover:text-gold-dark'
            : 'text-ivory/90 hover:text-ivory'
      } ${className}`}
    >
      {link.label}
    </a>
  )
}

export default function Navbar() {
  const scrolled = useScrolledNav()
  const activeSection = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = ''
      return undefined
    }

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-charcoal/5 bg-ivory/90 shadow-sm backdrop-blur-xl'
          : 'bg-gradient-to-b from-charcoal/40 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="group flex shrink-0 flex-col leading-none"
          onClick={(event) => handleInternalNavClick(event, '#hero', closeMenu)}
        >
          <span
            className={`font-display text-2xl tracking-[0.2em] transition-colors sm:text-3xl ${
              scrolled || menuOpen ? 'text-charcoal' : 'text-ivory'
            } group-hover:text-gold`}
          >
            AURELLE
          </span>
          <span
            className={`mt-0.5 text-[0.6rem] uppercase tracking-[0.35em] ${
              scrolled || menuOpen ? 'text-muted' : 'text-ivory/70'
            }`}
          >
            Travel
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink link={link} scrolled={scrolled} menuOpen={menuOpen} active={activeSection} />
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 lg:block">
          <Button
            href="#pricing"
            variant={scrolled ? 'gold' : 'secondary'}
            size="sm"
            className={
              scrolled
                ? 'ring-0 outline-none'
                : 'overflow-hidden border border-ivory/40 bg-ivory/5 text-ivory shadow-none ring-0 outline-none backdrop-blur-[2px] hover:border-ivory/75 hover:bg-ivory/10 hover:shadow-none'
            }
          >
            Join Aurelle
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex rounded-full p-2 transition-all duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 lg:hidden ${
            scrolled || menuOpen
              ? 'text-charcoal hover:bg-charcoal/5 hover:shadow-sm'
              : 'text-ivory hover:bg-ivory/10 hover:shadow-md hover:shadow-charcoal/20'
          }`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden border-t border-charcoal/5 bg-ivory lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    link={link}
                    scrolled
                    menuOpen
                    active={activeSection}
                    onNavigate={closeMenu}
                    className="block rounded-lg px-3 py-3 text-base"
                  />
                </motion.li>
              ))}
              <li className="pt-2">
                <Button href="#pricing" variant="gold" className="w-full" onClick={closeMenu}>
                  Join Aurelle
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

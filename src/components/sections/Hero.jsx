import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Button from '../ui/Button'
import HeroDestinationShowcase from './HeroDestinationShowcase'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-x-clip lg:h-[100svh] lg:max-h-[100svh] lg:overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Phone & tablet: fixed background (no motion) */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=85"
            alt="Luxury travel map and camera"
            className="h-full w-full scale-105 object-cover object-center"
          />
        </div>

        {/* Desktop: smooth, slightly faster Ken Burns drift */}
        <motion.div
          className="absolute left-1/2 top-1/2 hidden h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2 will-change-transform lg:block"
          animate={{
            x: ['-1.75%', '1.75%'],
            y: ['-1.1%', '1.1%'],
            scale: [1.04, 1.07, 1.04],
          }}
          transition={{
            x: { duration: 10, repeat: Infinity, repeatType: 'mirror', ease: [0.45, 0.05, 0.55, 0.95] },
            y: { duration: 12, repeat: Infinity, repeatType: 'mirror', ease: [0.45, 0.05, 0.55, 0.95] },
            scale: { duration: 16, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] },
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=85"
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/38 to-charcoal/72" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(196,165,116,0.22),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
      </div>

      <div
        className="relative z-10 flex h-full min-h-0 w-full flex-col"
        style={{ paddingTop: 'var(--site-header-height, 5.5rem)' }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-start px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-5 md:px-8 lg:min-h-0 lg:justify-center lg:overflow-y-auto lg:px-10 lg:pb-6 lg:pt-3">
          <div className="grid items-start gap-6 sm:gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
            <div className="min-w-0 max-w-xl md:max-w-none lg:max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-light sm:text-xs"
              >
                Luxury Travel Experience
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.75 }}
                className="font-display text-balance text-[1.625rem] leading-[1.12] text-ivory sm:text-4xl md:text-[2.35rem] lg:text-5xl"
              >
                Discover stays crafted for the{' '}
                <span className="italic text-gold-light">exceptional</span> traveler
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.65 }}
                className="mt-3 line-clamp-3 text-sm leading-relaxed text-ivory/85 sm:mt-4 sm:line-clamp-none sm:text-[0.95rem] lg:text-base"
              >
                AURELLE curates premium retreats, private estates, and destination
                experiences—with editorial storytelling and concierge care.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.65 }}
                className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <Button href="#pricing" variant="gold" size="sm" className="sm:!px-6 sm:!py-3">
                  Explore Membership
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="#about"
                  variant="secondary"
                  size="sm"
                  className="border-ivory/25 text-ivory shadow-md shadow-charcoal/20 hover:border-ivory/80 hover:bg-ivory/10 hover:shadow-lg hover:shadow-charcoal/25 sm:!px-6 sm:!py-3"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Our Story
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="hidden justify-center sm:flex"
            >
              <HeroDestinationShowcase />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ivory/55 md:flex"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 5] }}
            transition={{ duration: 1.4, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
            className="block h-7 w-px bg-gradient-to-b from-gold/90 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}

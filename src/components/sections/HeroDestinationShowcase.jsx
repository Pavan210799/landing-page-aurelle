import { AnimatePresence, motion } from 'framer-motion'
import { Globe2, Headset, MapPin, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { destinations } from '../../data/content'
import HeroFloatingChip from './HeroFloatingChip'

const INTERVAL_MS = 4500

export default function HeroDestinationShowcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % destinations.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  const current = destinations[active]

  return (
    <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[480px]">
      <div className="relative pb-2 pt-4">
        <HeroFloatingChip
          className="-left-5 top-5 sm:-left-7 sm:top-7"
          driftClass="hero-drift-1"
          entranceDelay={0.7}
        >
          <span className="flex items-center gap-1.5 text-[0.65rem] font-medium tracking-wide text-ivory/95">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-gold-light" />
            Curated weekly
          </span>
        </HeroFloatingChip>

        <HeroFloatingChip
          className="-right-4 top-[38%] sm:-right-6"
          driftClass="hero-drift-2"
          entranceDelay={0.82}
        >
          <p className="font-display text-xl leading-none text-gold-light">120+</p>
          <p className="mt-0.5 text-[0.6rem] uppercase tracking-[0.12em] text-ivory/75">
            Estates
          </p>
        </HeroFloatingChip>

        <HeroFloatingChip
          className="-left-3 bottom-[26%] sm:-left-5 sm:bottom-[28%]"
          driftClass="hero-drift-3"
          entranceDelay={0.95}
        >
          <span className="flex items-center gap-1.5">
            <Globe2 className="h-3.5 w-3.5 text-gold-light" />
            <span>
              <span className="block font-display text-lg leading-none text-ivory">48</span>
              <span className="text-[0.58rem] uppercase tracking-wider text-ivory/70">
                Countries
              </span>
            </span>
          </span>
        </HeroFloatingChip>

        <HeroFloatingChip
          className="-right-2 top-[12%] sm:-right-4 sm:top-[14%]"
          driftClass="hero-drift-4"
          entranceDelay={1.05}
        >
          <span className="flex items-center gap-1.5 text-[0.65rem] font-medium text-ivory/90">
            <Headset className="h-3.5 w-3.5 shrink-0 text-gold-light" />
            <span>
              <span className="block tracking-wide">Concierge</span>
              <span className="text-[0.58rem] uppercase tracking-[0.15em] text-gold-light/90">
                24 / 7
              </span>
            </span>
          </span>
        </HeroFloatingChip>

        <HeroFloatingChip
          className="right-0 top-[52%] sm:-right-2"
          driftClass="hero-drift-5"
          entranceDelay={1.12}
        >
          <span className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-gold-light text-gold-light" />
            <span>
              <span className="block font-display text-lg leading-none text-ivory">4.9</span>
              <span className="text-[0.58rem] uppercase tracking-wider text-ivory/70">
                Guest rating
              </span>
            </span>
          </span>
        </HeroFloatingChip>

        <HeroFloatingChip
          className="-left-4 top-[22%] sm:-left-6"
          driftClass="hero-drift-6"
          entranceDelay={1.2}
        >
          <span className="flex items-center gap-1.5 text-[0.65rem] font-medium text-ivory/90">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-gold-light" />
            <span>
              <span className="block tracking-wide">Private</span>
              <span className="text-[0.58rem] uppercase tracking-[0.12em] text-gold-light/90">
                Access
              </span>
            </span>
          </span>
        </HeroFloatingChip>

        <HeroFloatingChip
          className="bottom-[10%] left-[18%] sm:bottom-[12%] sm:left-[20%]"
          driftClass="hero-drift-7"
          entranceDelay={1.28}
        >
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold-light">
            Editor&apos;s pick
          </span>
        </HeroFloatingChip>

        <div className="relative z-10">
          <div
            className="pointer-events-none absolute -inset-3 rounded-[1.35rem] bg-charcoal/25 blur-2xl sm:-inset-4"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[1.25rem] shadow-[0_28px_56px_-16px_rgba(0,0,0,0.55),0_12px_24px_-8px_rgba(196,165,116,0.15)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal-soft">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.name}
                  src={current.image}
                  alt={current.name}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 z-[1] p-4 sm:p-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45 }}
                  >
                    <p className="flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold-light">
                      <MapPin className="h-3 w-3" />
                      {current.region}
                    </p>
                    <p className="mt-1 font-display text-2xl text-ivory">{current.name}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        {destinations.map((dest, index) => (
          <button
            key={dest.name}
            type="button"
            onClick={() => setActive(index)}
            className="group relative rounded-full p-0.5 transition-transform duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label={`View ${dest.name}`}
            aria-current={index === active ? 'true' : undefined}
          >
            <span
              className={`block h-11 w-11 overflow-hidden rounded-full border-2 transition-all duration-150 ease-out sm:h-12 sm:w-12 ${
                index === active
                  ? 'border-gold shadow-lg shadow-gold/25'
                  : 'border-ivory/25 opacity-70 group-hover:border-gold/50 group-hover:opacity-100 group-hover:shadow-md group-hover:shadow-gold/20'
              }`}
            >
              <img
                src={dest.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-150 group-hover:scale-105"
              />
            </span>
            {index === active && (
              <motion.span
                layoutId="hero-dest-ring"
                className="absolute inset-0 rounded-full ring-2 ring-gold/50 ring-offset-2 ring-offset-transparent"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-3 h-0.5 w-full max-w-[200px] overflow-hidden rounded-full bg-ivory/15">
        <motion.div
          key={active}
          className="h-full origin-left rounded-full bg-gradient-to-r from-gold-dark to-gold-light"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: INTERVAL_MS / 1000, ease: 'linear' }}
        />
      </div>
    </div>
  )
}

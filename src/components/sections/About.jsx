import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const stats = [
  { value: '120+', label: 'Curated properties' },
  { value: '48', label: 'Countries' },
  { value: '4.9', label: 'Member satisfaction' },
]

const hoverEase = '[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]'

export default function About() {
  return (
    <section id="about" className="section-padding bg-ivory">
      <Container>
        <div className="grid items-center gap-8 xl:grid-cols-2 xl:gap-20">
          <Reveal className="order-2 xl:order-1 xl:justify-self-auto">
            <div className="about-since-card-wrap group/image relative mx-auto w-full max-w-[280px] sm:max-w-[320px] xl:max-w-none">
              <div className="relative overflow-hidden rounded-2xl luxury-shadow">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80"
                  alt="Elegant luxury suite with ocean view"
                  className={`aspect-[3/4] w-full object-cover transition-transform duration-300 ease-out will-change-transform group-hover/image:scale-[1.02] sm:aspect-[4/5] sm:max-h-[380px] xl:aspect-[5/6] xl:max-h-none ${hoverEase}`}
                  loading="lazy"
                />

                <Reveal
                  delay={0.15}
                  y={0}
                  className="absolute bottom-[5%] right-[5%] z-10 w-[min(42%,12.5rem)] max-w-[calc(100%-10%)] xl:w-[min(38%,13.75rem)]"
                >
                  <div className="about-since-card-drift">
                    <div
                      className={`rounded-xl border border-gold/20 bg-ivory/95 p-3.5 luxury-shadow backdrop-blur-[2px] transition-[border-color,box-shadow] duration-200 ease-out hover:border-gold/45 hover:luxury-shadow-hover sm:p-4 xl:p-5 ${hoverEase}`}
                    >
                      <p className="font-display text-lg text-charcoal sm:text-xl xl:text-2xl">
                        Since 2018
                      </p>
                      <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">
                        Crafting journeys for discerning travelers worldwide.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>

          <div className="order-1 xl:order-2">
            <SectionHeading
              align="left"
              eyebrow="About Aurelle"
              title="Where editorial vision meets white-glove travel"
              description="We believe luxury is not excess—it is clarity. Every property, guide, and itinerary on AURELLE is chosen for atmosphere, authenticity, and the quiet confidence of impeccable service."
            />

            <Reveal delay={0.15}>
              <p className="mb-6 text-base leading-relaxed text-muted md:mb-8 md:text-[0.95rem] lg:mb-8 lg:text-lg">
                From cliffside villas on the Mediterranean to forest sanctuaries in
                Hokkaido, our team of editors and concierges opens doors to experiences
                that feel personal, unhurried, and deeply memorable.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <ul className="grid grid-cols-3 gap-2 border-t border-charcoal/10 pt-6 sm:gap-3 md:gap-3 md:pt-7 lg:gap-4 lg:pt-8">
                {stats.map((stat) => (
                  <li
                    key={stat.label}
                    className={`group cursor-default rounded-xl border border-charcoal/5 bg-ivory px-2 py-3 text-center transition-all duration-150 ease-out hover:-translate-y-1 hover:border-gold/35 hover:bg-ivory-dark/70 hover:luxury-shadow-hover md:px-3 md:py-3.5 sm:text-left lg:px-4 lg:py-4 ${hoverEase}`}
                  >
                    <p className="font-display text-2xl text-charcoal transition-colors duration-150 group-hover:text-gold-dark md:text-3xl lg:text-4xl">
                      {stat.value}
                    </p>
                    <span className="mx-auto mt-1.5 block h-px w-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-[width] duration-150 ease-out group-hover:w-10 sm:mx-0 md:mt-2" />
                    <p className="mt-1.5 text-[0.65rem] text-muted transition-colors duration-150 group-hover:text-charcoal sm:text-xs md:text-sm">
                      {stat.label}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

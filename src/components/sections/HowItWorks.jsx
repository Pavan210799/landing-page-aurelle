import { steps } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const stepImages = [
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=700&q=80',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=80',
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding overflow-hidden bg-charcoal text-ivory">
      <Container>
        <SectionHeading
          dark
          eyebrow="How It Works"
          title="From inspiration to arrival in four refined steps"
          description="Our process is designed to respect your time while elevating every detail—from first browse to welcome drink."
        />

        <div className="relative">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent sm:left-1/2 sm:block sm:-translate-x-1/2"
            aria-hidden
          />

          <ol className="flex flex-col gap-10 sm:gap-16">
            {steps.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.1}>
                <li
                  className={`relative grid items-center gap-6 sm:grid-cols-2 sm:gap-12 ${
                    index % 2 === 1 ? 'sm:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  <div className="sm:px-8">
                    <div className="group overflow-hidden rounded-2xl border border-ivory/10 bg-charcoal-soft">
                      <img
                        src={stepImages[index]}
                        alt={`Illustration for step ${item.step}: ${item.title}`}
                        className="aspect-[16/10] w-full origin-center object-cover object-center opacity-90 transition-transform duration-200 ease-out will-change-transform group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <div className="sm:px-8">
                    <div className="flex items-start gap-4">
                      <span
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-charcoal font-display text-base text-gold sm:h-11 sm:w-11 sm:text-lg"
                        aria-hidden
                      >
                        {index + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
                          Step {item.step}
                        </p>
                        <h3 className="mt-2 font-display text-3xl sm:text-4xl">{item.title}</h3>
                        <p className="mt-4 max-w-md text-base leading-relaxed text-ivory/75">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

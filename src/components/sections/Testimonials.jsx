import { Quote, Star } from 'lucide-react'
import { testimonials } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-ivory">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by travelers who expect more"
          description="Real stories from members who've experienced AURELLE's curated stays and concierge care."
        />

        <ul className="grid gap-8 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <li className="h-full">
                <article className="group/card flex h-full flex-col rounded-2xl border border-charcoal/5 bg-ivory-dark/50 p-6 luxury-shadow transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-gold/35 hover:bg-ivory hover:shadow-[0_20px_40px_-12px_rgba(26,26,26,0.12),0_0_0_1px_rgba(201,169,98,0.12)] sm:p-8">
                  <Quote
                    className="h-8 w-8 text-gold/40 transition-colors duration-200 group-hover/card:text-gold/70"
                    strokeWidth={1.25}
                  />
                  <div className="mt-4 flex gap-0.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed text-charcoal sm:text-xl">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-8 flex items-center gap-4 border-t border-charcoal/10 pt-6 transition-colors duration-200 group-hover/card:border-gold/25">
                    <img
                      src={item.image}
                      alt=""
                      className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-gold/20 shadow-sm transition-all duration-200 group-hover/card:scale-105 group-hover/card:ring-[3px] group-hover/card:ring-gold/55 group-hover/card:shadow-md group-hover/card:shadow-gold/20"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-charcoal transition-colors duration-200 group-hover/card:text-gold-dark">
                        {item.name}
                      </p>
                      <p className="truncate text-sm text-muted transition-colors duration-200 group-hover/card:text-charcoal/75">
                        {item.role}
                      </p>
                    </div>
                  </footer>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}

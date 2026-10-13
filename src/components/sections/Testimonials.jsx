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
              <li className="group h-full transition-transform duration-150 ease-out hover:-translate-y-0.5">
                <article className="flex h-full flex-col rounded-2xl border border-charcoal/5 bg-ivory-dark/50 p-6 transition-[box-shadow,border-color] duration-150 luxury-shadow group-hover:border-gold/20 group-hover:luxury-shadow-hover sm:p-8">
                  <Quote className="h-8 w-8 text-gold/40" strokeWidth={1.25} />
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
                  <footer className="mt-8 flex items-center gap-4 border-t border-charcoal/10 pt-6">
                    <img
                      src={item.image}
                      alt=""
                      className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-gold/20"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-medium text-charcoal">{item.name}</p>
                      <p className="truncate text-sm text-muted">{item.role}</p>
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

import {
  BookOpen,
  Compass,
  Gem,
  KeyRound,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { features } from '../../data/content'
import { handleInternalNavClick } from '../../utils/handleInternalNavClick'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  compass: Compass,
  key: KeyRound,
  sparkles: Sparkles,
  shield: ShieldCheck,
  book: BookOpen,
  gem: Gem,
}

export default function Features() {
  return (
    <section id="features" className="section-padding bg-ivory-dark">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need for effortless luxury travel"
          description="Member tools, human expertise, and a design-forward platform—built so planning feels as refined as the journey itself."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <Reveal key={feature.title} delay={index * 0.08}>
                <li className="h-full">
                  <a
                    href={feature.href}
                    onClick={(event) => handleInternalNavClick(event, feature.href)}
                    className="group flex h-full flex-col rounded-2xl border border-charcoal/5 bg-ivory p-6 transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-gold/30 luxury-shadow hover:luxury-shadow-hover sm:p-8"
                  >
                    <div className="mb-5 inline-flex rounded-xl bg-gold/10 p-3 text-gold-dark transition-colors duration-150 group-hover:bg-gold group-hover:text-charcoal">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl text-charcoal sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                      {feature.description}
                    </p>
                    <span className="mt-6 inline-flex items-center text-sm font-medium text-gold-dark opacity-0 transition-all duration-150 group-hover:opacity-100">
                      Learn more
                      <span className="ml-2 h-px w-8 bg-gold transition-[width] duration-150 group-hover:w-12" />
                    </span>
                  </a>
                </li>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

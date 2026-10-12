import { Check } from 'lucide-react'
import { pricingPlans } from '../../data/content'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding overflow-x-clip bg-ivory-dark">
      <Container>
        <SectionHeading
          eyebrow="Membership"
          title="Choose the tier that matches your travel rhythm"
          description="Transparent plans with no hidden fees. Upgrade anytime as your journeys grow more ambitious."
        />

        <ul className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.12} className="h-full">
              <li
                className={`relative flex h-full flex-col rounded-2xl p-6 transition-all duration-150 ease-out sm:p-8 ${
                  plan.highlighted
                    ? 'scale-100 border-2 border-gold bg-charcoal text-ivory shadow-2xl shadow-charcoal/20 lg:scale-[1.03]'
                    : 'border border-charcoal/10 bg-ivory luxury-shadow hover:-translate-y-0.5 hover:luxury-shadow-hover'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-semibold uppercase tracking-wider text-charcoal">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3
                    className={`font-display text-2xl ${plan.highlighted ? 'text-ivory' : 'text-charcoal'}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${plan.highlighted ? 'text-ivory/70' : 'text-muted'}`}
                  >
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span
                      className={`font-display text-4xl sm:text-5xl ${plan.highlighted ? 'text-gold-light' : 'text-charcoal'}`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${plan.highlighted ? 'text-ivory/60' : 'text-muted'}`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm sm:text-base">
                      <Check
                        className={`mt-0.5 h-5 w-5 shrink-0 ${plan.highlighted ? 'text-gold-light' : 'text-gold-dark'}`}
                        strokeWidth={2}
                      />
                      <span className={plan.highlighted ? 'text-ivory/85' : 'text-muted'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={plan.ctaHref}
                  variant={plan.highlighted ? 'gold' : 'primary'}
                  className="mt-8 w-full"
                  {...(plan.ctaHref.startsWith('mailto:')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {plan.cta}
                </Button>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}

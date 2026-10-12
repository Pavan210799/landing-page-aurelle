export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Membership', href: '#pricing' },
]

export const features = [
  {
    title: 'Curated Destinations',
    description:
      'Hand-selected villas, lodges, and urban sanctuaries vetted by our travel editors for design, service, and sense of place.',
    icon: 'compass',
    href: '#about',
  },
  {
    title: 'Private Retreat Access',
    description:
      'Members-only openings at secluded estates and boutique properties unavailable on public booking channels.',
    icon: 'key',
    href: '#pricing',
  },
  {
    title: 'Concierge Planning',
    description:
      'Dedicated specialists craft itineraries with transfers, dining, and experiences tailored to your pace and preferences.',
    icon: 'sparkles',
    href: '#contact',
  },
  {
    title: 'Seamless Booking',
    description:
      'Transparent pricing, flexible dates, and white-glove confirmation—every detail handled before you depart.',
    icon: 'shield',
    href: '#how-it-works',
  },
  {
    title: 'Editorial Guides',
    description:
      'Rich destination stories, seasonal recommendations, and insider notes to inspire your next journey.',
    icon: 'book',
    href: '#about',
  },
  {
    title: 'Member Privileges',
    description:
      'Complimentary upgrades, late checkout, and partner perks at a growing network of luxury properties worldwide.',
    icon: 'gem',
    href: '#testimonials',
  },
]

export const steps = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Browse our editorial collections or share your vision with a concierge—we match you to stays that feel unmistakably you.',
  },
  {
    step: '02',
    title: 'Refine',
    description:
      'Review detailed property briefs, imagery, and availability. Adjust dates, room types, and experiences in one place.',
  },
  {
    step: '03',
    title: 'Confirm',
    description:
      'Secure your reservation with member rates and instant confirmation. We coordinate every arrival detail on your behalf.',
  },
  {
    step: '04',
    title: 'Arrive',
    description:
      'Step into a journey designed around calm luxury—pre-arranged transfers, welcome rituals, and on-trip support.',
  },
]

export const testimonials = [
  {
    quote:
      'AURELLE felt less like booking a hotel and more like being introduced to a hidden world. The Amalfi villa exceeded every expectation.',
    name: 'Elena Marchetti',
    role: 'Creative Director, Milan',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
  },
  {
    quote:
      'Our Kyoto ryokan and private tea ceremony were orchestrated flawlessly. The editorial guides made planning genuinely enjoyable.',
    name: 'James Whitfield',
    role: 'Partner, Venture Capital',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
  },
  {
    quote:
      'As frequent travelers, we value discretion and quality. AURELLE’s membership tier paid for itself on the first Santorini stay.',
    name: 'Amara & David Okonkwo',
    role: 'Members since 2024',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face',
  },
]

export const pricingPlans = [
  {
    name: 'Explorer',
    price: 'Free',
    period: 'to join',
    description: 'Begin your journey with curated inspiration and limited booking access.',
    features: [
      'Editorial destination library',
      'Save favorite properties',
      'Standard booking support',
      'Seasonal travel briefs',
    ],
    cta: 'Create Account',
    ctaHref: '#contact',
    highlighted: false,
  },
  {
    name: 'Connoisseur',
    price: '$49',
    period: '/ month',
    description: 'Full access to member rates, concierge chat, and priority availability.',
    features: [
      'Everything in Explorer',
      'Member-only rates & offers',
      '24/7 concierge messaging',
      'Flexible change policies',
      'Complimentary upgrades when available',
    ],
    cta: 'Start Membership',
    ctaHref:
      'mailto:concierge@aurelle.travel?subject=Aurelle%20Connoisseur%20Membership',
    highlighted: true,
  },
  {
    name: 'Aurelle Private',
    price: 'Custom',
    period: 'annual',
    description: 'Bespoke travel design for families, celebrations, and extended retreats.',
    features: [
      'Dedicated travel designer',
      'Private jet & yacht partners',
      'Unpublished estate access',
      'On-trip concierge team',
      'Annual lifestyle planning session',
    ],
    cta: 'Request Invitation',
    ctaHref:
      'mailto:concierge@aurelle.travel?subject=Aurelle%20Private%20Invitation%20Request',
    highlighted: false,
  },
]

export const destinations = [
  {
    name: 'Amalfi Coast',
    region: 'Italy',
    image: '/images/amalfi-coast.jpg',
  },
  {
    name: 'Kyoto',
    region: 'Japan',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Safari Lodge',
    region: 'Kenya',
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80&auto=format&fit=crop',
  },
]

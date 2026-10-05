// Local workshop catalogue. Firestore documents in the `workshops` collection use the same shape
// (plus an optional numeric `sortOrder`). `accent` picks the image background colour in WorkshopCard.

export const workshopCategories = [
  { id: 'all', label: 'All Experiences' },
  { id: 'diffuser', label: 'Diffusers & Vents' },
  { id: 'wearable', label: 'Solid Perfume Keychains' },
  { id: 'candles', label: 'Candle Artistry' },
];

export const workshops = [
  {
    id: 'liquid-diffuser-blending',
    category: 'diffuser',
    title: 'Bespoke Liquid Diffuser Blending',
    description:
      'Formulate your signature home fragrance from 20+ fine fragrance notes into a 100ml amber glass vessel.',
    durationLabel: '90 Mins',
    price: 65,
    imageUrl: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=500',
    imageAlt: 'Liquid Diffuser',
    accent: 'brand',
    inclusions: [
      '100ml Glass Diffuser & Fiber Reeds',
      'Olfactory Fragrance Profile Sheet',
      'Gift Box Packaging Included',
    ],
  },
  {
    id: 'solid-perfume-keychain',
    category: 'wearable',
    title: 'Wearable Solid Perfume & Bead Keychain',
    // Shorter name shown in the booking modal.
    bookingTitle: 'Wearable Solid Perfume Keychain',
    description:
      'Melt beeswax and skin-safe botanical oils into solid perfume beads and assemble custom charm keychains.',
    durationLabel: '75 Mins',
    price: 55,
    imageUrl: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=500',
    imageAlt: 'Solid Perfume Keychain',
    accent: 'pink',
    inclusions: [
      '2 Custom Solid Perfume Lockets',
      'Faux Fur or Pom-Pom Hardware',
      'Natural Beeswax & Jojoba Carrier',
    ],
  },
  {
    id: 'jelly-crystal-candle',
    category: 'candles',
    title: 'Jelly, Crystal & Heart Candle Decorating',
    bookingTitle: 'Jelly & Crystal Candle Decorating',
    description:
      'Craft translucent gel candles with crystal embeds, glitter, and botanical tops. Includes mini heart candles.',
    durationLabel: '90 Mins',
    price: 59,
    imageUrl: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=500',
    imageAlt: 'Jelly Candle',
    accent: 'yellow',
    inclusions: [
      '1 Gel Crystal Glass Candle Vessel',
      '2 Decorated Pastel Heart Tea Lights',
      'Real Gemstone & Dried Floral Embeds',
    ],
  },
  {
    id: 'car-vent-scent-bar',
    category: 'diffuser',
    title: 'Portable Car Vent & Pocket Scent Bar',
    description:
      'A fast-paced interactive express bar session to formulate portable vent diffuser clips and pocket scent pods.',
    durationLabel: '45 Mins',
    price: 39,
    imageUrl: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=500',
    imageAlt: 'Car Diffuser Bar',
    accent: 'blue',
    inclusions: ['2 Metal Car Vent Diffuser Clips', '1 Pocket Aromatherapy Pod', 'Quick Express Blend Guide'],
  },
];

export const bookingTimeSlots = ['10:30 AM', '01:30 PM', '04:00 PM'];

export const BOOKING_GUEST_LIMITS = { min: 1, max: 10 };

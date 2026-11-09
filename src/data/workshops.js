import christmasHeartImage from '../assets/noel-night-christmas-2026.jpg';
import diffuserWorkshopImage from '../assets/diffuser-workshop.jpg';
import candleWorkshopImage from '../assets/candle-workshop.jpg';

// Local workshop catalogue. Firestore documents in the `workshops` collection use the same shape
// (plus an optional numeric `sortOrder`). `accent` picks the image background colour in WorkshopCard;
// optional `imagePosition` (CSS object-position) adjusts how the image is cropped.
// Optional `calendlyUrl` is the workshop's own Calendly event link (e.g. https://calendly.com/yokiehome-scentbar/<event>);
// without it, booking opens the main Calendly page from src/data/siteConfig.js.
// `launchPrice: true` shows a "Launch price" tag next to the price; remove it when the price changes.

export const workshopCategories = [
  { id: 'all', label: 'All Experiences' },
  { id: 'diffuser', label: 'Diffusers' },
  { id: 'wearable', label: 'Perfume & Keychains' },
  { id: 'candles', label: 'Candle Artistry' },
];

export const workshops = [
  {
    id: 'christmas-heart-tealight',
    category: 'candles',
    title: 'Christmas Heart Tealight Workshop',
    description: 'Make heart tealights topped with letters to spell LOVE or XMAS.',
    durationLabel: '60–75 Mins',
    price: 68,
    launchPrice: true,
    imageUrl: christmasHeartImage,
    imageAlt: 'Heart-shaped tealights topped with letters spelling LOVE and XMAS on a stone tray',
    imagePosition: 'center 80%',
    accent: 'yellow',
    inclusions: [
      '4–6 Heart-Shaped Tealights',
      'Letter Toppings: LOVE, XMAS or Your Own Message',
      'Japanese Tea & a Light Seasonal Snack',
    ],
  },
  {
    id: 'liquid-diffuser-blending',
    category: 'diffuser',
    title: 'Bespoke Diffuser Blending',
    description: 'Blend your signature home scent from 40–50 notes, including exclusive Asian zen blends.',
    durationLabel: '90 Mins',
    price: 115,
    launchPrice: true,
    imageUrl: diffuserWorkshopImage,
    imageAlt: 'Yokie Scent 200ml reed diffuser and 10ml room mist casting soft shadows',
    imagePosition: 'center 85%',
    accent: 'brand',
    inclusions: [
      '200ml Diffuser & Fibre Reeds, Gift-Boxed',
      '40–50 Fragrances incl. Exclusive Asian Zen Blends',
      'Japanese Tea & a Light Seasonal Snack',
    ],
  },
  {
    id: 'mood-perfume-keychain',
    category: 'wearable',
    title: 'Mood Perfume & Scented Keychain',
    description: 'Blend a perfume spray for your mood, then craft a charm keychain with a scent-holding fluffy ball.',
    durationLabel: '2 Hrs',
    price: 95,
    launchPrice: true,
    // Placeholder photo until a real perfume and keychain photo is ready.
    imageUrl: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=500',
    imageAlt: 'Perfume bottles',
    accent: 'pink',
    inclusions: [
      '10ml Perfume Spray Blended to Your Mood',
      'Charm Keychain & Fluffy Scent Ball (Spray Clips On)',
      'All Accessories Included',
      'Japanese Tea & a Light Seasonal Snack',
    ],
  },
  {
    id: 'signature-800ml-candle',
    category: 'candles',
    title: 'Signature 800ml Candle Studio',
    description: 'Pour a large 800ml candle in your own scent, then design your label and decorate the glass.',
    durationLabel: '2.5 Hrs',
    price: 150,
    launchPrice: true,
    imageUrl: candleWorkshopImage,
    imageAlt: 'Close-up of a hand-poured Yokie Scent two-wick candle with an embossed grey label',
    accent: 'yellow',
    inclusions: [
      '800ml Candle in Your Own Scent',
      'Design Your Own Label',
      'Decorate Your Glass',
      'Includes Time for Your Candle to Set',
      'Japanese Tea & a Light Seasonal Snack',
    ],
  },
  // Hidden for now. To bring it back, uncomment this block.
  // {
  //   id: 'car-vent-scent-bar',
  //   category: 'diffuser',
  //   title: 'Portable Car Vent & Pocket Scent Bar',
  //   description:
  //     'A fast-paced interactive express bar session to formulate portable vent diffuser clips and pocket scent pods.',
  //   durationLabel: '45 Mins',
  //   price: 39,
  //   imageUrl: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=500',
  //   imageAlt: 'Car Diffuser Bar',
  //   accent: 'blue',
  //   inclusions: ['2 Metal Car Vent Diffuser Clips', '1 Pocket Aromatherapy Pod', 'Quick Express Blend Guide'],
  // },
];

// Bookings are for 2–6 guests; groups of 7–8 are by enquiry (see src/data/bookingPolicies.js).
export const BOOKING_GUEST_LIMITS = { min: 2, max: 6 };

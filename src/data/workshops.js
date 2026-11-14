// Poster text cropped off for the square card; the full poster is the hero image (HeroSection.jsx).
import christmasHeartImage from '../assets/christmas-heart-tealight-card.jpg';
import diffuserWorkshopImage from '../assets/diffuser-workshop.jpg';
import candleWorkshopImage from '../assets/candle-workshop.jpg';
import scentedKeychainImage from '../assets/scented-keychain-workshop.jpg';

// Local workshop catalogue. Firestore documents in the `workshops` collection use the same shape
// (plus an optional numeric `sortOrder`). `accent` picks the image background colour in WorkshopCard;
// optional `imagePosition` (CSS object-position) adjusts how the image is cropped.
// Optional `bookingUrls` maps a group size to its own Cal.com (or Calendly) booking link, e.g. { 1: '...', 2: '...' },
// so each size can carry its own price. Otherwise `calendlyUrl` is the workshop's single Calendly event link
// (e.g. https://calendly.com/yokiehome-scentbar/<event>); without either, booking opens the main Calendly page
// from src/data/siteConfig.js.
// `launchPrice: true` shows a "Launch price" tag next to the price; remove it when the price changes.
// `comingSoon: true` shows the workshop but replaces its Book Session button with a disabled "Coming Soon" one.

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
    description: 'Make heart tealights in the colours of your choice, topped with letters to spell LOVE or XMAS.',
    durationLabel: '60–75 Mins',
    price: 68,
    launchPrice: true,
    // Cal.com event per group size; each one charges the full total (price × guests).
    bookingUrls: {
      1: 'https://cal.com/yokie-htovur/xmas-tealight',
      2: 'https://cal.com/yokie-htovur/xmas-tealight-2',
      3: 'https://cal.com/yokie-htovur/xmas-tealight-3',
      4: 'https://cal.com/yokie-htovur/xmas-tealight-4',
      5: 'https://cal.com/yokie-htovur/xmas-tealight-5',
      6: 'https://cal.com/yokie-htovur/xmas-tealight-6',
    },
    imageUrl: christmasHeartImage,
    imageAlt: 'Heart-shaped tealights topped with letters spelling MERRY XMAS on a marble tray',
    accent: 'yellow',
    inclusions: [
      '4 Heart-Shaped Tealights',
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
    // Cal.com event per group size; each one charges the full total (price × guests).
    bookingUrls: {
      1: 'https://cal.com/yokie-htovur/bespoke-diffuser-blending',
      2: 'https://cal.com/yokie-htovur/bespoke-diffuser-blending-2-people',
      3: 'https://cal.com/yokie-htovur/bespoke-diffuser-blending-3-people',
      4: 'https://cal.com/yokie-htovur/bespoke-diffuser-blending-4-people',
      5: 'https://cal.com/yokie-htovur/bespoke-diffuser-blending-5-people',
      6: 'https://cal.com/yokie-htovur/bespoke-diffuser-blending-6-people',
    },
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
    id: 'signature-800ml-candle',
    category: 'candles',
    title: 'Signature 800ml Candle Studio',
    description: 'Pour a large 800ml candle in your own scent, then design your label and decorate the glass.',
    durationLabel: '2.5 Hrs',
    price: 150,
    launchPrice: true,
    // Cal.com event per group size; each one charges the full total (price × guests).
    bookingUrls: {
      1: 'https://cal.com/yokie-htovur/signature-800ml-candle-studio',
      2: 'https://cal.com/yokie-htovur/signature-800ml-candle-studio-2-person',
      3: 'https://cal.com/yokie-htovur/signature-800ml-candle-studio-3-person',
      4: 'https://cal.com/yokie-htovur/signature-800ml-candle-studio-4-person',
      5: 'https://cal.com/yokie-htovur/signature-800ml-candle-studio-5person',
      6: 'https://cal.com/yokie-htovur/signature-800ml-candle-studio-6-person',
    },
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
  {
    id: 'mood-perfume-keychain',
    category: 'wearable',
    title: 'Mood Perfume & Scented Keychain',
    description: 'Blend a perfume spray for your mood, then craft a charm keychain with a scent-holding fluffy ball.',
    durationLabel: '2 Hrs',
    price: 95,
    launchPrice: true,
    comingSoon: true,
    calendlyUrl: 'https://calendly.com/yokiehome-scentbar/mood-perfume-scented-keychain',
    imageUrl: scentedKeychainImage,
    imageAlt: 'Cream and silver beaded charm keychain with a star charm, letter bead and fluffy scent ball, beside a Scented Blend perfume spray',
    accent: 'pink',
    inclusions: [
      '10ml Perfume Spray Blended to Your Mood',
      'Charm Keychain & Fluffy Scent Ball (Spray Clips On)',
      'All Accessories Included',
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

// Bookings are for 1–6 guests; larger groups are by email enquiry (see src/data/bookingPolicies.js).
// Keep in step with the guests check in firestore.rules.
export const BOOKING_GUEST_LIMITS = { min: 1, max: 6 };

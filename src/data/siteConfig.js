export const siteConfig = {
  name: 'Yokie Scent Studio',
  shortName: 'YOKIE SCENT',
  tagline: 'Sensory Studio',
  description: 'Bespoke sensory workshops, portable fragrance tools, and mind-wellness activations.',
  email: 'hello@createwithyokiescents.com',
  location: 'Q Station & Melbourne Pop-Ups',
  instagramHandle: '@yokie.scent',
  // Set to the full profile URL to turn the gallery's Instagram tile into a link.
  instagramUrl: '',
  // Default booking calendar. A workshop's own `calendlyUrl` (src/data/workshops.js) takes priority.
  calendlyUrl: 'https://calendly.com/yokiehome-scentbar',
  // Set to true to show the At-Home DIY Craft Kits section, the cart and the shop links.
  shopEnabled: false,
};

// Includes `link` only while the shop is switched on.
const shopLink = (link) => (siteConfig.shopEnabled ? [link] : []);

export const mainNavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#workshops', label: 'Workshops' },
  { href: '#about', label: 'About' },
  ...shopLink({ href: '#shop', label: 'DIY Kits' }),
  { href: '#gallery', label: 'Pop-Ups' },
];

export const footerLinks = [
  { href: '#workshops', label: 'Book Workshop' },
  { href: '#about', label: 'Our Story' },
  ...shopLink({ href: '#shop', label: 'At-Home Kits' }),
];

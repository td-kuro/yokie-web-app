// Local "Workshop Moments" gallery. Firestore documents in the `galleryImages` collection use the same shape.
// Add `postUrl` to link a photo to one Instagram post; without it, the photo links to the profile.
import christmasCandles from '../assets/gallery-christmas-candles.jpg';

export const galleryImages = [
  {
    id: 'liquid-diffuser',
    imageUrl: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=300',
    imageAlt: 'Liquid diffuser blending station',
  },
  {
    id: 'reed-diffuser',
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=300',
    imageAlt: 'Finished reed diffuser in an amber glass vessel',
  },
  {
    id: 'solid-perfume',
    imageUrl: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=300',
    imageAlt: 'Solid perfume keychain charms',
  },
  {
    id: 'christmas-candles',
    imageUrl: christmasCandles,
    imageAlt: 'Christmas candles: dark green tree, textured sphere, gingerbread man and light green tree',
    postUrl: 'https://www.instagram.com/p/Dd0qGLJTlqM/',
  },
  // Hidden for now, along with the Car Vent workshop (see src/data/workshops.js).
  // {
  //   id: 'car-vent-bar',
  //   imageUrl: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=300',
  //   imageAlt: 'Car vent and pocket scent bar',
  // },
];

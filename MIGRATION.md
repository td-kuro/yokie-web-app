# Migration notes: HTML prototype → React app

The source of truth for the design was `yokie_scent_studio_web_app.html`, a single file using the Tailwind Play CDN, Font Awesome's JS kit and inline `<script>` handlers. This document records how each part was carried over and every intentional difference.

## How the prototype maps to the new code

| Prototype | Now |
| --- | --- |
| `<script src="cdn.tailwindcss.com">` + inline `tailwind.config` | `tailwindcss` v3 compiled at build time. The same theme lives in `tailwind.config.js`, so all original class names still work |
| `<style>` `.glass-card`, `.hero-pattern` | `src/styles/index.css` (plus shared classes such as `.form-input`, `.eyebrow`, `.btn-dark`, `.section-container` for repeated markup) |
| Font Awesome `all.min.js` (replaces `<i>` with SVG) | `@fortawesome/fontawesome-free` CSS webfont, with the same `<i className="fa-solid fa-…">` markup. The JS kit rewrites the DOM, which breaks React |
| Google Fonts `<link>` | Unchanged, in `index.html` |
| `<header id="navbar">` + mobile menu | `components/layout/Header.jsx`, `MobileMenu.jsx` |
| `#home` hero | `pages/home/HeroSection.jsx` |
| `#workshops` cards + `filterWorkshops()` | `pages/home/WorkshopsSection.jsx`, `components/workshops/WorkshopCard.jsx`, `WorkshopFilters.jsx`; data in `src/data/workshops.js` |
| `#booking-modal` + `openBookingModal()`, `updateModalTotal()`, `handleBookingSubmit()` | `components/booking/BookingModal.jsx`, `BookingForm.jsx`, `TimeSlotPicker.jsx`; state in `context/BookingProvider.jsx` |
| `#corporate` + `calculateQuote()` | `pages/home/CorporateSection.jsx`, `components/corporate/CorporateQuoteForm.jsx`; pricing in `src/data/corporatePackages.js` |
| `#shop` + `addToCart()` | `pages/home/ShopSection.jsx`, `components/shop/ProductCard.jsx`; data in `src/data/products.js` |
| `#cart-drawer` + `toggleCart()`, `updateCartUI()`, `removeFromCart()` | `components/cart/CartDrawer.jsx`, `CartButton.jsx`, `CartLineItem.jsx`; state in `context/CartProvider.jsx` |
| `#gallery` calendar + photo grid | `pages/home/GallerySection.jsx`, `components/gallery/PopUpEventCard.jsx`; data in `src/data/popUpEvents.js`, `galleryImages.js` |
| Footer + newsletter input | `components/layout/Footer.jsx`, `NewsletterForm.jsx` |
| `alert(...)` | `utils/notify.js`, one function to swap for a toast component later |

All copy, prices, images, colours and section order are unchanged.

## Bugs fixed

- **Time slots couldn't be selected.** The buttons had no handler. They are now selectable, and the choice is saved with the booking.
- **Quote estimate ignored the package dropdown.** Only the guest field recalculated it. The estimate now updates on any change.
- **Quote form didn't submit.** Submitting only recalculated the price. It now sends a quote request (simulated locally, or saved to Firestore).
- **Newsletter "Join" did nothing.** It now validates the email and submits it.
- **"Add to Cart" toggled the drawer.** If the bag was already open, adding an item closed it. Adding now always opens the bag.
- **Cart removal by array index.** Each line now has a stable id.
- **Workshop filter used the global `event`.** That is non-standard and fails in some browsers. Filtering is now plain React state.
- **`background-opacity: 0.1`** in `.hero-pattern` is not a CSS property and had no effect, so it was removed.

## Intentional (small) differences

- **Card and hero images now use a 4:3 frame.** The prototype used `aspect-4/3`, which isn't a Tailwind v3 class, so images showed at their natural proportions. Most were tall portraits, and the fourth workshop card's image was much shorter than its neighbours. A 4:3 frame was clearly intended and keeps cards even. To bring back taller images, change `aspect-4/3` to e.g. `aspect-[3/4]` in `WorkshopCard.jsx` and `HeroSection.jsx`.
- **Anchor offset.** `scroll-pt-20` on `<html>` stops the sticky header from covering section headings after clicking a nav link.
- **Mobile menu icon** switches to ✕ while the menu is open.
- **Escape key** closes the booking modal, cart and mobile menu. Clicking the dark backdrop closes the booking modal.
- **Closed cart drawer** is now hidden from keyboard and screen readers, and its shadow no longer bleeds onto the page edge.
- **Date pickers** no longer allow past dates.
- **Checkout button** is disabled while the bag is empty.
- **Booking confirmation copy** changed from "A confirmation email has been dispatched" to "We'll email you to confirm your booking", because no email is sent yet.
- **Prices** use thousands separators everywhere (e.g. a cart subtotal of `$1,049 AUD`), as the quote estimate already did.
- **Product titles and prices** no longer squeeze the price onto two lines on tablet widths.
- **Accessibility**: labels are linked to inputs, icon-only buttons have labels, gallery images have alt text, and toggle buttons expose `aria-pressed` / `aria-expanded`.
- **Footer**: the email address is a `mailto:` link, and the copyright year updates automatically.

## Placeholders (not yet backed by a real service)

| Feature | Current behaviour | To make it real |
| --- | --- | --- |
| Workshop booking, quote request, newsletter | `VITE_DATA_SOURCE=local`: simulated and logged to the console in dev. `firebase`: saved to Firestore | Enable Firestore and deploy `firestore.rules`. Add email notifications (e.g. the Trigger Email extension) |
| Checkout | Shows "Checkout process initiated!" (as in the prototype) | Server-side payments. See README › Payments |
| Instagram tile | Not a link (as in the prototype) | Set `instagramUrl` in `src/data/siteConfig.js` |
| Corporate package prices | Static in `src/data/corporatePackages.js` | Move to Firestore if staff need to edit them |

The original prototype file is not used by the build. Keep it for reference, or move it to a `docs/` folder.

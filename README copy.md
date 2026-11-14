# Yokie Scent Studio

The marketing and booking site for **Yokie Scent Studio**, a Melbourne sensory studio running bespoke fragrance workshops, corporate scent bars, pop-up markets and at-home DIY kits.

The site is a single-page React app (Vite) hosted on **GitHub Pages** at <https://github.com/td-kuro/yokie-web-app>. Every push to `main` publishes it automatically. Workshop bookings and payments are handled by **Cal.com** (and Calendly for workshops not yet moved over). The site runs on bundled data in `src/data/` and needs no backend. It is also ready to use **Firebase** (Firestore, Auth, Storage) later, but that is switched off.

What visitors can do:

- Browse and filter workshops, then book a session: enter the number of guests, name and email, then pick a time and pay in the booking calendar
- Get a live per-head estimate and send a corporate event quote request
- Add DIY kits to a shopping bag (slide-out drawer with subtotal; hidden while `shopEnabled` is off)
- See upcoming pop-up markets and the workshop gallery
- Sign up for the newsletter

> Converted from the original single-file prototype (`yokie_scent_studio_web_app.html`). See [MIGRATION.md](MIGRATION.md) for what changed.

---

## Tech stack

| Concern | Choice |
| --- | --- |
| UI | React 19 + Vite 8 (JavaScript) |
| Styling | Tailwind CSS 3 (same theme as the prototype) + a small shared stylesheet |
| Icons | Font Awesome 6 Free (self-hosted webfont) |
| Workshop booking & payment | Cal.com (embedded calendar, Stripe payments); Calendly for workshops not yet moved over |
| Hosting / CI | GitHub Pages + GitHub Actions |
| Backend (optional, off) | Firebase Web SDK: Firestore, Auth, Storage |

## Prerequisites

- **Node.js 22.12+** (or 20.19+). The repo's `.nvmrc` pins Node 22. Vite 8's native bundler will not install on older versions.
  Check with `node -v`; on macOS with Homebrew, upgrade with `brew upgrade node`.
- **npm** (bundled with Node)
- **Git** with push access to the GitHub repo (publishing is a push to `main`)

## Getting started

```bash
git clone https://github.com/td-kuro/yokie-web-app.git
cd yokie-web-app
npm install
npm run dev                    # http://localhost:5173
```

No `.env` file is needed: without one the site uses the bundled data in `src/data/`.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint (also runs in CI) |
| `npm run deploy` | Lint and build locally, then `git push origin main`; GitHub Actions publishes the site |

## Workshop booking

The booking form (`src/components/booking/BookingForm.jsx`) asks for the number of guests, name and email, then shows the workshop's booking calendar in the same window with the name and email filled in. Cal.com takes the payment.

Booking links live on each workshop in `src/data/workshops.js`:

- **`bookingUrls`**: one Cal.com link per group size, so each size charges its own total (price × guests). The form opens the link for the number of guests entered:
  ```js
  bookingUrls: {
    1: 'https://cal.com/yokie-htovur/xmas-tealight',
    2: 'https://cal.com/yokie-htovur/xmas-tealight-2',
    // … up to 6
  },
  ```
- **`calendlyUrl`**: a single Calendly link, used when a workshop has no `bookingUrls` yet.
- With neither, the form opens the main Calendly page from `src/data/siteConfig.js`.

To move a workshop to Cal.com, create one Cal.com event per group size (1–6) with the right price, then replace its `calendlyUrl` with `bookingUrls`. Set each Cal.com event's location to the studio address, not a video call.

Group size limits (1–6, with larger groups by email enquiry) are `BOOKING_GUEST_LIMITS` in `src/data/workshops.js`; the wording on the site is in `src/data/bookingPolicies.js` and `src/pages/home/WorkshopsSection.jsx`.

Bookings, payments, confirmations and reschedules are all managed in Cal.com. With Firebase switched off, the site itself keeps no record of bookings.

## Project structure

```text
├── .github/workflows/github-pages.yml   CI: lint → build → publish to GitHub Pages (on push to main)
├── public/                    Static files copied as-is (favicon)
├── src/
│   ├── main.jsx               Entry point: global CSS + <App />
│   ├── App.jsx                Providers + page shell (header, page, footer, modal, cart)
│   ├── pages/
│   │   ├── HomePage.jsx       Composes the page sections in order
│   │   └── home/              Hero, Workshops, Corporate, Shop, Gallery, Reviews sections
│   ├── components/
│   │   ├── layout/            Header, MobileMenu, Footer, NewsletterForm
│   │   ├── booking/           BookingModal, BookingForm, CalScheduler (Cal.com), CalendlyScheduler
│   │   ├── cart/              CartButton, CartDrawer, CartLineItem
│   │   ├── workshops/         WorkshopCard, WorkshopFilters
│   │   ├── shop/              ProductCard
│   │   ├── corporate/         CorporateQuoteForm
│   │   ├── gallery/           PopUpEventCard
│   │   └── ui/                FormField (TextField, SelectField), LoadErrorMessage
│   ├── context/               Cart and booking-modal state (React context)
│   ├── hooks/                 useCart, useBooking, useCatalog, useFormFields, useSubmitAction, …
│   ├── services/              Data layer, Cal.com / Calendly embeds, Firebase (see below)
│   ├── data/                  Workshops, booking links, policies and other site copy/config
│   ├── utils/                 Formatting, pricing, dates, ids, notify
│   └── styles/index.css       Tailwind layers + shared component classes
├── index.html                 HTML shell (fonts, meta tags)
├── vite.config.js             `base: './'` so the build works from the GitHub Pages sub-folder
├── tailwind.config.js         Brand colours and fonts (ported from the prototype)
├── firebase.json / .firebaserc, firestore.rules / storage.rules   Only used if Firebase is switched on
└── .env.example
```

**Routing.** The site is one scrolling page with anchor links (`#workshops`, `#shop`, …), as in the prototype, so it does not use React Router. GitHub Pages only serves real files, so if you add separate pages later, use a hash router (`/#/admin`) or add a `404.html` fallback.

## Data layer

Components never talk to Firebase directly. They call domain services, which go through one switch in `src/services/dataStore.js`:

```text
component → hook (useWorkshops…) → catalogService / bookingService / newsletterService
                                         ↓
                                   dataStore.js ── VITE_DATA_SOURCE=local    → src/data/*.js (default)
                                                └─ VITE_DATA_SOURCE=firebase → firestoreService.js → Firestore
```

In `local` mode (the default, and what the live site uses) catalogue data comes from `src/data/`, and form submissions are not stored: they are only logged to the browser console during development. The Firestore SDK is loaded on demand, so this build ships no Firestore code at all.

| Service | Responsibility |
| --- | --- |
| `calcom.js` | Loads Cal.com's embed script on demand |
| `calendly.js` | Loads Calendly's embed script on demand |
| `firebase.js` | Initialises the Firebase app from env vars (`getFirebaseApp()`) |
| `firestoreService.js` | Generic `listDocuments`, `getDocument`, `addDocument` (adds `createdAt`) |
| `authService.js` | `signIn`, `signOut`, `subscribeToAuthChanges`, `hasAdminClaim`. Not used yet |
| `storageService.js` | `uploadFile`, `getFileUrl`. Not used yet |
| `catalogService.js` | Workshops, products, pop-up events, gallery images |
| `bookingService.js` | Workshop reservations and corporate quote requests |
| `newsletterService.js` | Newsletter sign-ups |
| `checkoutService.js` | **Placeholder.** See [Payments](#payments) |

## Environment variables (optional)

Only needed to switch on Firebase. Copy `.env.example` to `.env.local` and fill it in. Vite only exposes variables prefixed with `VITE_`.

| Variable | Purpose |
| --- | --- |
| `VITE_FIREBASE_API_KEY` … `VITE_FIREBASE_APP_ID` | Firebase **web app** config (Firebase console → Project settings → Your apps) |
| `VITE_DATA_SOURCE` | `local` (default): bundled data, submissions not stored. `firebase`: read and write Cloud Firestore |

For the live site, set these in GitHub instead (see [Publishing](#publishing-to-github-pages)).

**Development vs production.** Vite loads `.env.local` in every mode, `.env.development.local` for `npm run dev`, and `.env.production.local` for `npm run build`. All `.env*` files except `.env.example` are git-ignored.

**About secrets.** The Firebase web config is not secret. It ships inside the public JavaScript bundle by design. Security comes from **Security Rules** (`firestore.rules`, `storage.rules`), not from hiding these values. Never put service-account keys, Stripe secret keys or any admin credentials in this app or in a `VITE_` variable.

## Publishing to GitHub Pages

### How it works

`.github/workflows/github-pages.yml` runs on every push to `main` (and can be run by hand from the **Actions** tab → **GitHub Pages** → **Run workflow**):

```text
Push to main → npm ci → lint → build → publish dist/ to GitHub Pages
```

`npm ci` is the CI form of `npm install`. It installs exactly what `package-lock.json` specifies. The site is live a minute or two after the run turns green. If lint or the build fails, nothing is published and the previous version stays live.

One-off setup (already done): **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Publishing a change

```bash
npm run dev                  # check the change locally
git add <files>
git commit -m "Describe the change"
npm run deploy               # = lint + build locally, then git push origin main
```

Running lint and the build locally first catches errors before they reach GitHub. Watch the run under the repo's **Actions** tab.

### Rolling back

Revert the bad commit and publish again:

```bash
git revert <commit-sha>
npm run deploy
```

### GitHub secrets and variables (only for Firebase)

The site needs none of these today. If you switch Firebase on, add them under **Settings → Secrets and variables → Actions**:

| Name | Where | Value |
| --- | --- | --- |
| `VITE_FIREBASE_API_KEY` … `VITE_FIREBASE_APP_ID` | Secrets | From your Firebase web app config |
| `VITE_DATA_SOURCE` | Variables | `firebase` (defaults to `local`) |

## Firebase (optional, currently off)

The code is ready for Firebase, but nothing on the live site uses it. To switch it on later:

1. **Create a project** at <https://console.firebase.google.com> and **register a web app** (Project settings → General → Your apps → `</>`). Copy the config values into `.env.local` and the GitHub secrets above.
2. **Install the CLI and link the project:**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use --add          # choose the project, alias it "default"
   ```
3. **Enable the services you need** in the console:
   - **Firestore Database** (production mode), then deploy the rules: `firebase deploy --only firestore:rules`
   - **Storage**, then: `firebase deploy --only storage`
   - **Authentication**: enable a provider such as Email/Password when you build an admin area
4. **Switch data to Firestore.** Add documents to the catalogue collections (same shape as `src/data/*`), then set `VITE_DATA_SOURCE=firebase`.

### Firestore collections

| Collection | Access (see `firestore.rules`) | Document shape |
| --- | --- | --- |
| `workshops` | Public read, admin write | Same fields as `src/data/workshops.js` (+ optional `sortOrder`) |
| `products` | Public read, admin write | Same fields as `src/data/products.js` (+ optional `sortOrder`) |
| `popUpEvents` | Public read, admin write | Same fields as `src/data/popUpEvents.js` (+ optional `sortOrder`) |
| `galleryImages` | Public read, admin write | Same fields as `src/data/galleryImages.js` (+ optional `sortOrder`) |
| `bookings` | Public **create only** (validated), admin read/manage | `workshopId, workshopTitle, pricePerPerson, guests, estimatedTotal, fullName, email, status, createdAt`, plus `calBookingUid` (Cal.com) or `calendlyEventUri, calendlyInviteeUri` (Calendly) |
| `quoteRequests` | Public **create only** (validated), admin read/manage | `packageId, packageLabel, pricePerHead, guests, eventDate, email, estimatedTotal, status, createdAt` |
| `newsletterSubscribers` | Public **create only** (validated), admin read/manage | `email, createdAt` |

"Admin" means a signed-in user with the custom claim `{ admin: true }`. Set it from a trusted environment with the Firebase Admin SDK, for example a one-off script or Cloud Function: `getAuth().setCustomUserClaims(uid, { admin: true })`.

Frontend validation (required fields, min/max) is only for user experience. The Security Rules are what enforce the data shape, and totals sent from the browser are only estimates.

## Recommended GitHub workflow

1. Create a short-lived branch for each change, for example `feature/gift-cards` or `fix/cart-total`, and check it locally with `npm run dev`.
2. Open a pull request on GitHub and review the changes.
3. Merge into `main` (squash merge keeps history tidy). GitHub Actions publishes the site.
4. To roll back, revert the merge commit on `main` (see [Rolling back](#rolling-back)).

## Payments

Workshop payments are taken by Cal.com (Stripe) when the visitor books; set prices on each Cal.com event. The DIY kit checkout button is a placeholder, as it was in the prototype. To sell kits online, create checkout sessions **server-side** (for example a hosted Stripe Payment Link, or a Cloud Function). Never trust prices from the browser, and never put payment secret keys in this app.

## Known notes

- `npm audit` reports advisories in `@grpc/grpc-js` (pulled in by Firestore's **Node.js** build, which is not included in the browser bundle) and in `braces` (a build-time file-matching dependency of Tailwind 3 with no patched release). Neither is reachable from the deployed site. The suggested `npm audit fix --force` would downgrade Firebase or jump to Tailwind 4, so don't run it.
- Some images are still loaded from Unsplash, as in the prototype. Replace them with the studio's own photos in `src/assets/`.

# Yokie Scent Studio

The marketing and booking site for **Yokie Scent Studio**, a Melbourne sensory studio running bespoke fragrance workshops, corporate scent bars, pop-up markets and at-home DIY kits.

The site is a single-page React app (Vite) deployed to **Firebase Hosting**. It is ready to use **Firebase Authentication**, **Cloud Firestore** and **Cloud Storage**, but runs entirely on bundled mock data until you switch it over.

What visitors can do:

- Browse and filter workshops, then book a session (date, time slot, guests) in a modal
- Get a live per-head estimate and send a corporate event quote request
- Add DIY kits to a shopping bag (slide-out drawer with subtotal)
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
| Backend (optional) | Firebase Web SDK: Firestore, Auth, Storage |
| Hosting / CI | Firebase Hosting + GitHub Actions |

## Prerequisites

- **Node.js 22.12+** (or 20.19+). The repo's `.nvmrc` pins Node 22. Vite 8's native bundler will not install on older versions.
  Check with `node -v`; on macOS with Homebrew, upgrade with `brew upgrade node`.
- **npm** (bundled with Node)
- **Firebase CLI** for manual deploys: `npm install -g firebase-tools`, then `firebase login`
- A **Firebase project** (free Spark plan is enough for Hosting)

## Getting started

```bash
git clone https://github.com/<your-org>/yokie-scent-studio.git
cd yokie-scent-studio
npm install
cp .env.example .env.local     # optional for local mock-data mode
npm run dev                    # http://localhost:5173
```

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint (also runs in CI) |
| `npm run deploy` | Build and deploy to Firebase Hosting with your local Firebase CLI login |

## Environment variables

Copy `.env.example` to `.env.local` and fill it in. Vite only exposes variables prefixed with `VITE_`.

| Variable | Purpose |
| --- | --- |
| `VITE_FIREBASE_API_KEY` … `VITE_FIREBASE_APP_ID` | Firebase **web app** config (Firebase console → Project settings → Your apps) |
| `VITE_DATA_SOURCE` | `local` (default): bundled mock data, simulated submissions. `firebase`: read and write Cloud Firestore |

**Development vs production.** Vite loads `.env.local` in every mode, `.env.development.local` for `npm run dev`, and `.env.production.local` for `npm run build`. For example, point development at a separate staging Firebase project and production at the live one. All `.env*` files except `.env.example` are git-ignored.

**About secrets.** The Firebase web config is not secret. It ships inside the public JavaScript bundle by design. Security comes from **Security Rules** (`firestore.rules`, `storage.rules`), not from hiding these values. Never put service-account keys, Stripe secret keys or any admin credentials in this app or in a `VITE_` variable.

## Project structure

```text
├── .github/workflows/firebase-hosting.yml   CI: lint → build → deploy (preview on PR, live on main)
├── public/                    Static files copied as-is (favicon)
├── src/
│   ├── main.jsx               Entry point: global CSS + <App />
│   ├── App.jsx                Providers + page shell (header, page, footer, modal, cart)
│   ├── pages/
│   │   ├── HomePage.jsx       Composes the page sections in order
│   │   └── home/              Hero, Workshops, Corporate, Shop, Gallery sections
│   ├── components/
│   │   ├── layout/            Header, MobileMenu, Footer, NewsletterForm
│   │   ├── booking/           BookingModal, BookingForm, TimeSlotPicker
│   │   ├── cart/              CartButton, CartDrawer, CartLineItem
│   │   ├── workshops/         WorkshopCard, WorkshopFilters
│   │   ├── shop/              ProductCard
│   │   ├── corporate/         CorporateQuoteForm
│   │   ├── gallery/           PopUpEventCard
│   │   └── ui/                FormField (TextField, SelectField), LoadErrorMessage
│   ├── context/               Cart and booking-modal state (React context)
│   ├── hooks/                 useCart, useBooking, useCatalog, useFormFields, useSubmitAction, …
│   ├── services/              Data layer and Firebase (see below)
│   ├── data/                  Local mock data and site copy/config
│   ├── utils/                 Formatting, pricing, dates, ids, notify
│   └── styles/index.css       Tailwind layers + shared component classes
├── index.html                 HTML shell (fonts, meta tags)
├── tailwind.config.js         Brand colours and fonts (ported from the prototype)
├── firebase.json / .firebaserc
├── firestore.rules / storage.rules
└── .env.example
```

**Routing.** The site is one scrolling page with anchor links (`#workshops`, `#shop`, …), as in the prototype, so it does not use React Router. `firebase.json` already rewrites every path to `index.html`. Adding `react-router-dom` later for new pages (for example an admin area) needs no hosting changes.

## Data layer

Components never talk to Firebase directly. They call domain services, which go through one switch in `src/services/dataStore.js`:

```text
component → hook (useWorkshops…) → catalogService / bookingService / newsletterService
                                         ↓
                                   dataStore.js ── VITE_DATA_SOURCE=local    → src/data/*.js (mock)
                                                └─ VITE_DATA_SOURCE=firebase → firestoreService.js → Firestore
```

The Firestore SDK is loaded on demand, so the default build ships no Firestore code at all.

| Service | Responsibility |
| --- | --- |
| `firebase.js` | Initialises the Firebase app from env vars (`getFirebaseApp()`) |
| `firestoreService.js` | Generic `listDocuments`, `getDocument`, `addDocument` (adds `createdAt`) |
| `authService.js` | `signIn`, `signOut`, `subscribeToAuthChanges`, `hasAdminClaim`. Not used yet |
| `storageService.js` | `uploadFile`, `getFileUrl`. Not used yet |
| `catalogService.js` | Workshops, products, pop-up events, gallery images |
| `bookingService.js` | Workshop reservations and corporate quote requests |
| `newsletterService.js` | Newsletter sign-ups |
| `checkoutService.js` | **Placeholder.** See [Payments](#payments) |

### Firestore collections

| Collection | Access (see `firestore.rules`) | Document shape |
| --- | --- | --- |
| `workshops` | Public read, admin write | Same fields as `src/data/workshops.js` (+ optional `sortOrder`) |
| `products` | Public read, admin write | Same fields as `src/data/products.js` (+ optional `sortOrder`) |
| `popUpEvents` | Public read, admin write | Same fields as `src/data/popUpEvents.js` (+ optional `sortOrder`) |
| `galleryImages` | Public read, admin write | Same fields as `src/data/galleryImages.js` (+ optional `sortOrder`) |
| `bookings` | Public **create only** (validated), admin read/manage | `workshopId, workshopTitle, pricePerPerson, sessionDate, timeSlot, guests, estimatedTotal, fullName, email, status, createdAt` |
| `quoteRequests` | Public **create only** (validated), admin read/manage | `packageId, packageLabel, pricePerHead, guests, eventDate, email, estimatedTotal, status, createdAt` |
| `newsletterSubscribers` | Public **create only** (validated), admin read/manage | `email, createdAt` |

"Admin" means a signed-in user with the custom claim `{ admin: true }`. Set it from a trusted environment with the Firebase Admin SDK, for example a one-off script or Cloud Function: `getAuth().setCustomUserClaims(uid, { admin: true })`.

Frontend validation (required fields, min/max) is only for user experience. The Security Rules are what enforce the data shape, and totals sent from the browser are only estimates.

## Firebase setup

1. **Create a project** at <https://console.firebase.google.com>.
2. **Register a web app** (Project settings → General → Your apps → `</>`). Copy the config values into `.env.local`.
3. **Link the CLI to the project.** Replace `your-firebase-project-id` in `.firebaserc`, or run:
   ```bash
   firebase login
   firebase use --add          # choose the project, alias it "default"
   ```
4. **Enable the services you need** in the console:
   - **Firestore Database** (production mode), then deploy the rules: `firebase deploy --only firestore:rules`
   - **Storage**, then: `firebase deploy --only storage`
   - **Authentication**: enable a provider such as Email/Password when you build an admin area
5. **Switch data to Firestore** (optional). Add documents to the catalogue collections (same shape as `src/data/*`), then set `VITE_DATA_SOURCE=firebase`.

Hosting works without enabling Firestore, Storage or Auth.

## Deploying

### Manually

```bash
npm run deploy               # = npm run build && firebase deploy --only hosting
```

The site is served from `dist/`. All routes rewrite to `index.html`, hashed files in `/assets` are cached for a year, and `index.html` is always revalidated so visitors get new releases straight away.

### Automatically with GitHub Actions

`.github/workflows/firebase-hosting.yml` runs on every pull request into `main` and every push to `main`:

```text
Pull request → npm ci → lint → build → deploy a 7-day preview channel (URL posted on the PR)
Merge to main → npm ci → lint → build → deploy to the live site
```

`npm ci` is the CI form of `npm install`. It installs exactly what `package-lock.json` specifies.

#### Required GitHub secrets

Add these under **Settings → Secrets and variables → Actions → Secrets**:

| Secret | Value |
| --- | --- |
| `FIREBASE_SERVICE_ACCOUNT` | JSON key of a service account allowed to deploy Hosting (see below) |
| `VITE_FIREBASE_API_KEY` | From your Firebase web app config |
| `VITE_FIREBASE_AUTH_DOMAIN` | 〃 |
| `VITE_FIREBASE_PROJECT_ID` | 〃 (also tells the deploy step which project to use) |
| `VITE_FIREBASE_STORAGE_BUCKET` | 〃 |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | 〃 |
| `VITE_FIREBASE_APP_ID` | 〃 |

Optional **variable** (Variables tab, not secret): `VITE_DATA_SOURCE` = `local` or `firebase` (defaults to `local`).

**Creating the service account.** The easiest way is `firebase init hosting:github`. It creates a service account with the right roles and uploads it to your repo as a secret. Rename that secret to `FIREBASE_SERVICE_ACCOUNT`, or update the workflow to use its name. When it asks to generate workflow files, decline so it doesn't overwrite this workflow. To do it manually, in Google Cloud console → IAM → Service accounts, create an account with the **Firebase Hosting Admin** role (plus **API Keys Viewer** if the deploy fails with a permissions error), create a JSON key, and paste the whole file into the secret.

Preview deploys are skipped for pull requests from forks, because GitHub does not share secrets with them.

## Recommended GitHub workflow

1. Protect `main` (Settings → Branches): require a pull request and a passing **Build and deploy** check before merging.
2. Create a short-lived branch for each change, for example `feature/gift-cards` or `fix/cart-total`.
3. Open a pull request. CI lints, builds and posts a **preview URL** so you can review the change live.
4. Merge (squash merge keeps history tidy). CI deploys `main` to the live site.
5. To roll back, revert the merge commit on `main`, or use **Hosting → Release history → Roll back** in the Firebase console.

## Payments

The checkout button is a placeholder, as it was in the prototype. To take payments, create checkout sessions **server-side**, for example with the [Run Payments with Stripe](https://extensions.dev/extensions/invertase/firestore-stripe-payments) Firebase extension or a Cloud Function. Look up prices by product id on the server. Never trust prices from the browser, and never put payment secret keys in this app.

## Known notes

- `npm audit` reports advisories in `@grpc/grpc-js` (pulled in by Firestore's **Node.js** build, which is not included in the browser bundle) and in `braces` (a build-time file-matching dependency of Tailwind 3 with no patched release). Neither is reachable from the deployed site. The suggested `npm audit fix --force` would downgrade Firebase or jump to Tailwind 4, so don't run it.
- Images are loaded from Unsplash, as in the prototype. Replace them with the studio's own photos, either in `public/` or uploaded to Storage under `public/`.

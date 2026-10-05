import { useBooking } from '../../hooks/useBooking';
import { formatAud } from '../../utils/formatters';

// Quick-book target for the hero card. Keep in sync with the matching workshop in src/data/workshops.js.
const FEATURED_WORKSHOP = { id: 'liquid-diffuser-blending', title: 'Bespoke Liquid Diffuser Blending', price: 65 };

const TRUST_HIGHLIGHTS = [
  { value: '100%', label: 'Skin Safe Oils' },
  { value: '1,200+', label: 'Guests Welcomed' },
  { value: '4.9 ★', label: 'Event Rating' },
];

function FloatingBadge({ icon, iconColorClass, title, subtitle, className }) {
  return (
    <div
      className={`absolute backdrop-blur-md p-4 rounded-2xl shadow-lg z-30 hidden sm:flex items-center gap-3 border border-white ${className}`}
    >
      <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center ${iconColorClass}`}>
        <i className={`fa-solid ${icon}`} aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-bold text-slate-800">{title}</p>
        <p className="text-[10px] text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { openBooking } = useBooking();

  return (
    <section id="home" className="relative py-20 lg:py-28 overflow-hidden hero-pattern">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/80 border border-brand-200/60 text-brand-800 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              Melbourne Pop-Up & Global Workshop Kits
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-brand-900">
              Scent on the Move: <br />
              <span className="italic text-brand-600 font-serif">Craft Your Signature</span> Fragrance
            </h1>

            <p className="text-base sm:text-lg text-brand-700 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Step into an immersive tactile workshop experience. Blend custom liquid diffusers, formulate wearable
              solid perfume charms, and decorate aesthetic candles with intention.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#workshops"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-800 text-brand-50 font-medium hover:bg-brand-900 transition-all shadow-md hover:shadow-lg text-center"
              >
                Explore Workshops
              </a>
              <a
                href="#corporate"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-brand-200 text-brand-800 font-medium hover:bg-brand-100 transition-all text-center"
              >
                Corporate Inquiries
              </a>
            </div>

            <dl className="pt-6 border-t border-brand-200/60 grid grid-cols-3 gap-4 text-center lg:text-left">
              {TRUST_HIGHLIGHTS.map((highlight) => (
                <div key={highlight.label} className="flex flex-col">
                  <dt className="order-2 text-xs text-brand-600">{highlight.label}</dt>
                  <dd className="order-1 font-serif text-2xl font-bold text-brand-900">{highlight.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl relative z-20">
                <div className="aspect-4/3 rounded-2xl bg-brand-100 overflow-hidden mb-6 relative">
                  <img
                    src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800"
                    alt="Diffuser Workshop"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-brand-800 shadow-sm">
                    Live Station Setup
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-xl font-medium text-brand-900">Bespoke Reed Diffuser</h3>
                    <span className="text-brand-600 font-bold whitespace-nowrap">
                      {formatAud(FEATURED_WORKSHOP.price)}
                    </span>
                  </div>
                  <p className="text-xs text-brand-700 leading-relaxed">
                    Mix, measure, and pour custom fragrance notes into amber glass vessels with natural fiber reeds.
                  </p>
                  <button
                    type="button"
                    onClick={() => openBooking(FEATURED_WORKSHOP)}
                    className="w-full py-3 rounded-xl bg-brand-200 text-brand-900 font-medium hover:bg-brand-300 transition-colors text-sm"
                  >
                    Quick Book Experience
                  </button>
                </div>
              </div>

              <FloatingBadge
                icon="fa-heart"
                iconColorClass="text-pink-500"
                title="Mini Heart Candles"
                subtitle="Decorate with Botanicals"
                className="-top-6 -left-6 bg-pastel-pink/90"
              />
              <FloatingBadge
                icon="fa-car"
                iconColorClass="text-sky-600"
                title="Vent Clips & Keychains"
                subtitle="Scent On The Go"
                className="-bottom-6 -right-6 bg-pastel-blue/90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

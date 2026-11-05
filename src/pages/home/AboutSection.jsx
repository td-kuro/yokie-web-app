import candleImage from '../../assets/candle-decorating.jpg';
import FloatingBadge from '../../components/ui/FloatingBadge';

const HIGHLIGHTS = ['No rush', 'No screens', 'No experience needed', 'Melbourne Studio'];

// Laid out like the hero (HeroSection): story on the left, photo card with floating badges on the right.
export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-brand-100/60 border-y border-brand-200/60">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-brand-200/60 text-brand-800 text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-brand-400" aria-hidden="true" />
                Our Story &amp; Philosophy
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-brand-900">
                Welcome to <span className="italic text-brand-600">our table</span>
              </h2>
            </div>

            <blockquote className="border-l-2 border-brand-400 pl-6 font-serif italic text-2xl sm:text-3xl leading-snug text-brand-700">
              “Handmade with intention, shared amongst friends.”
            </blockquote>

            <div className="space-y-5 text-base sm:text-lg text-brand-700 font-light leading-relaxed">
              <p>
                Yokie Scent isn’t a faceless brand—it’s just us. A small, close-knit circle of creators who love the
                quiet magic of working with our hands right here in Melbourne. Every room spray is blended, every candle
                is hand-poured, and every piece is threaded with care right here in our studio.
              </p>
              <p>
                We wanted to create a space to step away from the noise, get our hands a little messy, and make things
                that bring a genuine sense of calm back into your day. Grab a cup of tea, slow down for a moment, and
                come make something with us.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-3 bg-white/70 border border-brand-200/60 rounded-xl px-4 py-3 text-sm text-brand-800"
                >
                  <span className="w-5 h-5 shrink-0 rounded-full bg-brand-300 text-white flex items-center justify-center text-[10px]">
                    <i className="fa-solid fa-check" aria-hidden="true" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="flex justify-center lg:justify-start pt-2">
              <a
                href="#workshops"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-800 text-brand-50 font-medium hover:bg-brand-900 transition-all shadow-md hover:shadow-lg"
              >
                Join a Table <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl relative z-20">
                <div className="aspect-4/5 rounded-2xl bg-brand-100 overflow-hidden">
                  <img
                    src={candleImage}
                    alt="Hand-poured Yokie Scent candle lit on a wooden table"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 75%' }}
                  />
                </div>
              </div>

              <FloatingBadge
                icon="fa-fire-flame-curved"
                iconColorClass="text-amber-500"
                title="Small-Batch Candles"
                subtitle="Hand-poured in Melbourne"
                className="-top-6 -left-6 bg-pastel-yellow/90"
              />
              <FloatingBadge
                icon="fa-mug-hot"
                iconColorClass="text-emerald-600"
                title="Grab a Cup of Tea"
                subtitle="Slow down with us"
                className="-bottom-6 -right-6 bg-pastel-green/90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

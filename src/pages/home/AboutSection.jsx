import candleImage from '../../assets/candle-decorating.jpg';

// Single centred column of story text, with a wide photo underneath.
export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-100/60 border-y border-brand-200/60">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <header className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-brand-200/60 text-brand-800 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-400" aria-hidden="true" />
              Our Story &amp; Philosophy
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-brand-900">
              Welcome to <span className="italic text-brand-600">our table</span>
            </h2>

            <div className="w-16 h-px bg-brand-400 mx-auto" aria-hidden="true" />

            <blockquote className="font-serif italic text-2xl sm:text-3xl leading-snug text-brand-700">
              “Handmade with intention, shared amongst friends.”
            </blockquote>
          </header>

          <div className="mt-12 space-y-6 text-base sm:text-lg text-brand-700 font-light leading-relaxed">
            <p>
              Yokie Scent isn’t a faceless brand—it’s just us. A small, close-knit circle of creators who love the quiet
              magic of working with our hands right here in Melbourne. Every room spray is blended, every candle is
              hand-poured, and every piece is threaded with care right here in our studio.
            </p>
            <p>
              We wanted to create a space to step away from the noise, get our hands a little messy, and make things
              that bring a genuine sense of calm back into your day. Grab a cup of tea, slow down for a moment, and come
              make something with us.
            </p>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="#workshops"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-800 text-brand-50 font-medium hover:bg-brand-900 transition-all shadow-md hover:shadow-lg"
            >
              Join a Table <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-16 lg:mt-20 glass-card rounded-3xl p-4 sm:p-6 shadow-xl">
          <div className="aspect-4/5 sm:aspect-3/2 rounded-2xl bg-brand-100 overflow-hidden">
            <img
              src={candleImage}
              alt="Hand-poured Yokie Scent candle lit on a wooden table beside books and fresh flowers"
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 88%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

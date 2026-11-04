import candleImage from '../../assets/candle-decorating.jpg';
import FloatingBadge from '../../components/ui/FloatingBadge';
import { siteConfig } from '../../data/siteConfig';

const STORY_BLOCKS = [
  {
    title: 'Who we are',
    text: 'A small Melbourne studio led by Yokie. We hand-pour small-batch candles and host workshops for a handful of people at a time. No rush, no screens, no experience needed.',
  },
  {
    title: 'Inspired by memories, art and a love for handcraft',
    text: "Every Yokie Scent creation begins with a memory: a fragrance that takes you back, a feeling you want to keep. We blend colour, texture and scent with an artist's eye, then pour each one by hand, slowly and with care. Come and make your own at our table, and take home a small moment of calm to light whenever you need it.",
  },
];

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
                About Create with <br className="hidden sm:block" />
                <span className="italic text-brand-600">Yokie Scent</span>
              </h2>

              <p className="text-base sm:text-lg text-brand-700 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                A gentle reminder to slow down, disconnect from screens, and reconnect with yourself through the
                grounding power of sensory curation.
              </p>
            </div>

            <div className="pt-8 border-t border-brand-200/60 space-y-8">
              {STORY_BLOCKS.map((block) => (
                <div key={block.title}>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug text-brand-900 mb-3">
                    {block.title}
                  </h3>
                  <p className="text-base sm:text-lg text-brand-700 font-light leading-relaxed">{block.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#workshops"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-800 text-brand-50 font-medium hover:bg-brand-900 transition-all shadow-md hover:shadow-lg text-center"
              >
                Explore Workshops
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-brand-200 text-brand-800 font-medium hover:bg-brand-100 transition-all text-center"
              >
                Say Hello
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
                icon="fa-seedling"
                iconColorClass="text-emerald-600"
                title="No Experience Needed"
                subtitle="Just bring yourself"
                className="-bottom-6 -right-6 bg-pastel-green/90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

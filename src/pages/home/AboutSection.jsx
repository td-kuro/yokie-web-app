import { siteConfig } from '../../data/siteConfig';

const STORY_BLOCKS = [
  {
    number: '01',
    title: 'Who we are',
    text: 'A small Melbourne studio led by Yokie. We hand-pour small-batch candles and host workshops for a handful of people at a time. No rush, no screens, no experience needed.',
  },
  {
    number: '02',
    title: 'Inspired by memories, art and a love for handcraft',
    text: "Every Yokie Scent creation begins with a memory: a fragrance that takes you back, a feeling you want to keep. We blend colour, texture and scent with an artist's eye, then pour each one by hand, slowly and with care. Come and make your own at our table, and take home a small moment of calm to light whenever you need it.",
  },
];

// Large serif first letter on the opening story, magazine style.
const DROP_CAP_CLASSES =
  'first-letter:float-left first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:mr-3 first-letter:mt-1 first-letter:text-brand-600';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 lg:py-40 bg-brand-100/60 border-y border-brand-200/60">
      <div className="section-container">
        <header className="text-center max-w-4xl mx-auto">
          <span className="eyebrow mb-6">Our Story &amp; Philosophy</span>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] text-brand-900">
            About Create with <span className="italic text-brand-600 whitespace-nowrap">Yokie Scent</span>
          </h2>
          <div className="w-16 h-px bg-brand-400 mx-auto my-10" aria-hidden="true" />
          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl leading-relaxed text-brand-700 max-w-3xl mx-auto">
            A gentle reminder to slow down, disconnect from screens, and reconnect with yourself through the grounding
            power of sensory curation.
          </p>
        </header>

        <div className="max-w-5xl mx-auto mt-20 lg:mt-28">
          {STORY_BLOCKS.map((block, index) => (
            <article
              key={block.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 lg:py-16 border-t border-brand-300/70"
            >
              <div className="lg:col-span-5">
                <span className="block font-serif italic text-brand-500 text-lg mb-3">{block.number}</span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-brand-900">
                  {block.title}
                </h3>
              </div>
              <p
                className={`lg:col-span-7 text-lg sm:text-xl leading-loose sm:leading-loose text-brand-800 font-light ${
                  index === 0 ? DROP_CAP_CLASSES : ''
                }`}
              >
                {block.text}
              </p>
            </article>
          ))}

          <p className="pt-12 lg:pt-16 border-t border-brand-300/70 text-center text-base text-brand-700">
            Questions?{' '}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-brand-900 underline hover:text-brand-600">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

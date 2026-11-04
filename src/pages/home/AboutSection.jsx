import { siteConfig } from '../../data/siteConfig';

const STORY_BLOCKS = [
  {
    icon: 'fa-hand-holding-heart',
    title: 'Who we are',
    text: 'A small Melbourne studio led by Yokie. We hand-pour small-batch candles and host workshops for a handful of people at a time. No rush, no screens, no experience needed.',
  },
  {
    icon: 'fa-palette',
    title: 'Inspired by memories, art and a love for handcraft',
    text: "Every Yokie Scent creation begins with a memory: a fragrance that takes you back, a feeling you want to keep. We blend colour, texture and scent with an artist's eye, then pour each one by hand, slowly and with care. Come and make your own at our table, and take home a small moment of calm to light whenever you need it.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brand-100/60 border-y border-brand-200/60">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow mb-2">Our Story &amp; Philosophy</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-900">About Create with Yokie Scent</h2>
          <p className="text-brand-700 mt-3 font-light leading-relaxed">
            A gentle reminder to slow down, disconnect from screens, and reconnect with yourself through the grounding
            power of sensory curation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {STORY_BLOCKS.map((block) => (
            <article key={block.title}>
              <i className={`fa-solid ${block.icon} text-brand-500 text-xl mb-4`} aria-hidden="true" />
              <h3 className="font-serif text-2xl font-normal text-brand-900 mb-3">{block.title}</h3>
              <p className="text-sm text-brand-800 leading-relaxed font-light">{block.text}</p>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-brand-700 mt-10">
          Questions?{' '}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-brand-900 underline hover:text-brand-600">
            {siteConfig.email}
          </a>
        </p>
      </div>
    </section>
  );
}

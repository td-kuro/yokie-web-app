import candleImage from '../../assets/candle-decorating.jpg';

const STORY_BLOCKS = [
  {
    number: '01',
    // Non-breaking space keeps “our table” together on one line.
    title: 'So, what is “our table”?',
    paragraphs: [
      'It’s a real table in our studio, and a way of gathering. A few people, warm wax and all the time you need. Pull up a chair and you’re one of us.',
    ],
  },
  {
    number: '02',
    title: 'Who we are',
    paragraphs: [
      'A small, close-knit circle of creators who love the quiet magic of working with our hands right here in Melbourne. Every room spray is blended, every candle is hand-poured, and every piece is threaded with care right here in our studio.',
      'Whether you’re joining us for an intimate workshop or lighting a candle at home, you aren’t just buying a product; you’re stepping into our corner of slow, creative calm.',
    ],
    // Index of the paragraph that opens with an oversized first letter.
    largeFirstLetterIndex: 0,
  },
  {
    number: '03',
    title: 'What we do',
    paragraphs: [
      'We wanted to create a space to step away from the noise, get our hands a little messy, and make things that bring a genuine sense of calm back into your day. Grab a cup of tea, slow down for a moment, and come make something with us.',
    ],
  },
];

// Oversized serif first letter that sits on the first line and rises above it.
const LARGE_FIRST_LETTER_CLASSES =
  'first-letter:font-serif first-letter:text-6xl sm:first-letter:text-7xl first-letter:leading-none first-letter:mr-2 first-letter:text-brand-600';

// Centred heading, numbered story rows, then a wide photo underneath.
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
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          {STORY_BLOCKS.map((block) => (
            <article
              key={block.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-10 lg:py-12 border-t border-brand-300/70"
            >
              <div className="lg:col-span-4">
                <span className="block font-serif italic text-brand-500 text-lg mb-2">{block.number}</span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-brand-900">
                  {block.title}
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-5 text-base sm:text-lg leading-relaxed sm:leading-relaxed text-brand-700 font-light">
                {block.paragraphs.map((paragraph, index) => (
                  <p key={paragraph} className={index === block.largeFirstLetterIndex ? LARGE_FIRST_LETTER_CLASSES : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}

          <div className="flex justify-center pt-12 border-t border-brand-300/70">
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

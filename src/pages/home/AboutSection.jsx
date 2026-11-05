import candleImage from '../../assets/candle-decorating.jpg';

// Shown in its own dark card above the numbered rows.
const OUR_TABLE = {
  title: 'So, what is “our table”?',
  text: 'It’s a real table in our studio, and a way of gathering. A few of us, warm wax, a shelf of fragrances, a tray of charms and beads, and all the quiet time you need. Pull up a chair and you’re one of us.',
};

const STORY_BLOCKS = [
  {
    number: '01',
    title: 'Who',
    titleAccent: 'we are',
    lean: 'left',
    paragraphs: [
      'A small, close-knit circle of creators who love the quiet magic of working with our hands, right here in Melbourne. Every room spray is blended, every candle is hand-poured, and every charm is threaded with care in our studio.',
      'Whether you’re joining us for an intimate workshop or lighting a candle at home, you aren’t just buying a product; you’re stepping into our corner of slow, creative calm.',
    ],
    // Index of the paragraph that opens with an oversized first letter.
    largeFirstLetterIndex: 0,
  },
  {
    number: '02',
    title: 'What',
    titleAccent: 'we do',
    lean: 'right',
    paragraphs: [
      'We created a space where you can step away from the noise, get your hands a little messy, and make things that bring a genuine sense of calm back into your day.',
      'Join us for intimate, in-person craft workshops hosted in our cosy private apartment studio, or let us bring the creative setup directly to your space with mobile sessions available within 30\u00A0km of the Melbourne CBD.',
    ],
  },
];

// Sign-off sentences centred between the story rows and the button.
// Each inner array is one sentence; its parts are always shown on separate lines.
const CLOSING_LINES = [
  ['Pour a warm cup of tea and take a quiet breath.'],
  ['Come create with us and discover', 'scented self-care for inner peace.'],
];

// Oversized serif first letter that sits on the first line and rises above it.
const LARGE_FIRST_LETTER_CLASSES =
  'first-letter:font-serif first-letter:text-6xl sm:first-letter:text-7xl first-letter:leading-none first-letter:mr-2 first-letter:text-brand-600';

// Deliberately uneven placement on desktop: each story leans to one side, its big faint number is tilted,
// and its text sits at a different offset from its heading. On phones everything stacks.
const STAGGERED_LAYOUTS = {
  left: {
    block: 'lg:w-4/5',
    number: '-left-1 sm:-left-6 -rotate-6',
    heading: 'lg:pl-36',
    body: 'lg:ml-48',
  },
  right: {
    block: 'lg:w-4/5 lg:ml-auto',
    number: 'right-0 sm:-right-4 rotate-6',
    heading: 'lg:text-right lg:pr-40',
    body: 'lg:ml-auto lg:mr-20',
  },
};

// Centred heading, the "our table" card, staggered story rows, then a wide photo underneath.
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
          <div className="bg-brand-900 rounded-3xl px-6 py-10 sm:px-12 sm:py-12 mb-12 lg:mb-16 shadow-xl">
            <h3 className="font-serif italic text-3xl sm:text-4xl font-normal leading-tight text-brand-50 mb-5">
              {OUR_TABLE.title}
            </h3>
            <p className="text-base sm:text-xl leading-loose sm:leading-loose text-brand-100 font-light">
              {OUR_TABLE.text}
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28 pt-8">
            {STORY_BLOCKS.map((block) => {
              const layout = STAGGERED_LAYOUTS[block.lean];
              return (
                <article key={block.title} className={`relative pt-12 sm:pt-16 ${layout.block}`}>
                  <span
                    className={`absolute top-0 font-serif italic leading-none text-7xl sm:text-9xl text-brand-300/60 select-none ${layout.number}`}
                    aria-hidden="true"
                  >
                    {block.number}
                  </span>
                  <h3
                    className={`relative font-serif text-3xl sm:text-4xl font-normal leading-tight text-brand-900 ${layout.heading}`}
                  >
                    {block.title} <span className="italic text-brand-600">{block.titleAccent}</span>
                  </h3>
                  <div
                    className={`relative mt-6 max-w-xl space-y-5 text-base sm:text-lg leading-relaxed sm:leading-relaxed text-brand-700 font-light ${layout.body}`}
                  >
                    {block.paragraphs.map((paragraph, index) => (
                      <p
                        key={paragraph}
                        className={index === block.largeFirstLetterIndex ? LARGE_FIRST_LETTER_CLASSES : ''}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-20 lg:mt-28 text-center space-y-3 font-serif italic text-2xl sm:text-3xl lg:text-4xl leading-snug text-brand-600 [text-wrap:balance]">
            {CLOSING_LINES.map((parts) => (
              <p key={parts.join(' ')}>
                {parts.map((part, index) => (
                  <span key={part} className="block">
                    {part}
                    {index < parts.length - 1 && ' '}
                  </span>
                ))}
              </p>
            ))}
          </div>

          <div className="flex justify-center mt-12 lg:mt-14">
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

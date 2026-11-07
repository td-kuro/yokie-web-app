import { reviews } from '../../data/reviews';
import { siteConfig } from '../../data/siteConfig';

// Empty review slots are shown as placeholders only while previewing locally (`npm run dev`),
// so the layout can be seen before real reviews are added. They never reach the live site.
const SHOW_PLACEHOLDERS = import.meta.env.DEV;

function Stars({ rating }) {
  return (
    <div className="flex gap-1 text-brand-400 text-sm mb-4" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <i key={index} className={`fa-solid fa-star ${index < rating ? '' : 'opacity-25'}`} aria-hidden="true" />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <figure className="bg-brand-50 rounded-2xl border border-brand-100 p-8 flex flex-col">
      <span className="font-serif text-6xl leading-none text-brand-300 h-8 mb-2" aria-hidden="true">
        “
      </span>
      {review.rating && <Stars rating={review.rating} />}
      <blockquote className="flex-1 text-base text-brand-700 font-light leading-relaxed">{review.quote}</blockquote>
      <figcaption className="mt-6 pt-5 border-t border-brand-200/70">
        <span className="block font-serif text-lg text-brand-900">{review.name}</span>
        {review.detail && <span className="block text-xs text-brand-600 mt-1">{review.detail}</span>}
      </figcaption>
    </figure>
  );
}

function PlaceholderCard() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-brand-300 p-8 flex flex-col items-center justify-center text-center text-brand-600 min-h-[16rem]">
      <i className="fa-solid fa-quote-left text-2xl text-brand-300 mb-4" aria-hidden="true" />
      <p className="text-sm font-medium">Empty review slot</p>
      <p className="text-xs mt-2 leading-relaxed">
        Paste a real guest review into src/data/reviews.js.
        <br />
        This card only shows on your computer, never on the live site.
      </p>
    </div>
  );
}

export default function ReviewsSection() {
  const publishedReviews = reviews.filter((review) => review.quote.trim() && review.name.trim());
  const emptySlots = SHOW_PLACEHOLDERS ? reviews.length - publishedReviews.length : 0;

  if (publishedReviews.length === 0 && emptySlots === 0) return null;

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow mb-2">Kind Words</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-brand-900">
            Stories from <span className="italic text-brand-600">our table</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publishedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {Array.from({ length: emptySlots }, (_, index) => (
            <PlaceholderCard key={index} />
          ))}
        </div>

        {siteConfig.googleReviewUrl && (
          <div className="flex justify-center mt-12">
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-brand-200 text-brand-800 font-medium hover:bg-brand-100 transition-all"
            >
              <i className="fa-brands fa-google" aria-hidden="true" /> Leave us a Google review
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

import { useBooking } from '../../hooks/useBooking';
import { formatAud } from '../../utils/formatters';

// Background shown behind each workshop image while it loads.
const IMAGE_ACCENT_CLASSES = {
  brand: 'bg-brand-200',
  pink: 'bg-pastel-pink/40',
  yellow: 'bg-pastel-yellow/40',
  blue: 'bg-pastel-blue/40',
};

export default function WorkshopCard({ workshop }) {
  const { openBooking } = useBooking();
  const accentClass = IMAGE_ACCENT_CLASSES[workshop.accent] ?? IMAGE_ACCENT_CLASSES.brand;

  function handleBook() {
    openBooking({ id: workshop.id, title: workshop.bookingTitle ?? workshop.title, price: workshop.price });
  }

  return (
    <article className="bg-brand-50 rounded-2xl p-6 border border-brand-100 hover:border-brand-300 transition-all hover:shadow-lg flex flex-col justify-between">
      <div>
        <div className={`aspect-4/3 rounded-xl mb-5 overflow-hidden relative ${accentClass}`}>
          <img src={workshop.imageUrl} alt={workshop.imageAlt} loading="lazy" className="w-full h-full object-cover" />
          <span className="absolute top-2 left-2 bg-white/90 text-brand-900 text-[10px] font-bold px-2.5 py-1 rounded-md">
            {workshop.durationLabel}
          </span>
        </div>
        <h3 className="font-serif text-lg font-semibold text-brand-900 mb-2">{workshop.title}</h3>
        <p className="text-xs text-brand-700 leading-relaxed mb-4">{workshop.description}</p>
        <ul className="text-xs text-brand-800 space-y-2 mb-6">
          {workshop.inclusions.map((inclusion) => (
            <li key={inclusion} className="flex items-center gap-2">
              <i className="fa-solid fa-check text-brand-500" aria-hidden="true" /> {inclusion}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center justify-between pt-4 border-t border-brand-200 mb-4">
          <span className="text-xs text-brand-600">Per Person</span>
          <span className="font-serif text-xl font-bold text-brand-900">{formatAud(workshop.price)}</span>
        </div>
        <button type="button" onClick={handleBook} className="w-full py-2.5 rounded-xl btn-dark text-xs">
          Book Session
        </button>
      </div>
    </article>
  );
}

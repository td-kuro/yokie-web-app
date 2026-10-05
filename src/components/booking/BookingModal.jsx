import { useId } from 'react';
import { useBooking } from '../../hooks/useBooking';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { formatAud } from '../../utils/formatters';
import BookingForm from './BookingForm';

export default function BookingModal() {
  const { selectedWorkshop, closeBooking } = useBooking();
  const titleId = useId();
  useEscapeKey(closeBooking, Boolean(selectedWorkshop));

  if (!selectedWorkshop) return null;

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) closeBooking();
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={closeBooking}
          aria-label="Close booking form"
          className="absolute top-4 right-4 text-brand-400 hover:text-brand-900"
        >
          <i className="fa-solid fa-xmark text-xl" aria-hidden="true" />
        </button>

        <span className="eyebrow text-[10px] mb-1">Interactive Booking</span>
        <h3 id={titleId} className="font-serif text-2xl font-semibold text-brand-900 mb-1">
          {selectedWorkshop.title}
        </h3>
        <p className="text-xs text-brand-600 mb-6">{formatAud(selectedWorkshop.price)} per person</p>

        {/* Keyed by workshop so the form starts fresh for each booking. */}
        <BookingForm key={selectedWorkshop.id} workshop={selectedWorkshop} onBooked={closeBooking} />
      </div>
    </div>
  );
}

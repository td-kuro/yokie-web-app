import { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { BOOKING_GUEST_LIMITS } from '../../data/workshops';
import { useFormFields } from '../../hooks/useFormFields';
import { useSubmitAction } from '../../hooks/useSubmitAction';
import { createWorkshopBooking } from '../../services/bookingService';
import { formatAud } from '../../utils/formatters';
import { isCalUrl } from '../../services/calcom';
import { parseGuestCount } from '../../utils/pricing';
import { TextField } from '../ui/FormField';
import CalScheduler from './CalScheduler';
import CalendlyScheduler from './CalendlyScheduler';

const INITIAL_VALUES = {
  guests: String(BOOKING_GUEST_LIMITS.min),
  fullName: '',
  email: '',
};

/** The workshop's link for this group size, else its single link, else the main booking page. */
function getBookingUrl(workshop, guestCount) {
  return workshop.bookingUrls?.[guestCount] ?? workshop.calendlyUrl ?? siteConfig.calendlyUrl;
}

/**
 * Two steps: the visitor enters their details once, then picks a time in Cal.com or Calendly
 * (whichever the workshop's link points to) with those details pre-filled. The booking is saved
 * once the scheduler confirms it.
 */
export default function BookingForm({ workshop, onBooked }) {
  const { values, handleChange } = useFormFields(INITIAL_VALUES);
  const [step, setStep] = useState('details');
  const guestCount = parseGuestCount(values.guests, BOOKING_GUEST_LIMITS.min);
  const total = guestCount * workshop.price;
  const fullName = values.fullName.trim();
  const email = values.email.trim();
  const bookingUrl = getBookingUrl(workshop, guestCount);

  const saveBooking = useSubmitAction(createWorkshopBooking, {
    successMessage: "You're booked! Check your email for your confirmation and calendar invite.",
    errorMessage:
      "Your session is booked and you'll get a confirmation email, but we couldn't save your guest details. We'll be in touch.",
    onSuccess: onBooked,
  });
  // Paid Cal.com events: the booking exists, but the visitor still has to pay in the calendar.
  const saveBookingBeforePayment = useSubmitAction(createWorkshopBooking, {
    successMessage: 'Almost done! Complete your payment below to confirm your place.',
    errorMessage: "Please complete your payment below to confirm your place. We couldn't save your guest details, so we'll be in touch.",
  });
  const isSubmitting = saveBooking.isSubmitting || saveBookingBeforePayment.isSubmitting;

  function handleDetailsSubmit(event) {
    event.preventDefault();
    setStep('schedule');
  }

  function bookingDetails() {
    return {
      workshopId: workshop.id,
      workshopTitle: workshop.title,
      pricePerPerson: workshop.price,
      guests: guestCount,
      estimatedTotal: total,
      fullName,
      email,
    };
  }

  function handleCalScheduled(booking) {
    const details = { ...bookingDetails(), calBookingUid: booking.uid };
    // Only close the form when Cal.com says no payment is due; otherwise its payment form is next.
    if (booking.paymentRequired === false) saveBooking.submit(details);
    else saveBookingBeforePayment.submit(details);
  }

  function handleCalendlyScheduled(payload) {
    saveBooking.submit({
      ...bookingDetails(),
      calendlyEventUri: payload.event.uri,
      calendlyInviteeUri: payload.invitee.uri,
    });
  }

  if (step === 'schedule') {
    return (
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3 text-xs text-brand-700">
          <p>
            Booking for <span className="font-semibold text-brand-900">{fullName}</span> · {guestCount}{' '}
            {guestCount === 1 ? 'guest' : 'guests'} · {formatAud(total)}
          </p>
          <button
            type="button"
            onClick={() => setStep('details')}
            disabled={isSubmitting}
            className="shrink-0 underline font-medium hover:text-brand-900"
          >
            Edit details
          </button>
        </div>

        {isCalUrl(bookingUrl) ? (
          <CalScheduler
            key={bookingUrl}
            url={bookingUrl}
            name={fullName}
            email={email}
            onScheduled={handleCalScheduled}
          />
        ) : (
          <CalendlyScheduler
            url={bookingUrl}
            name={fullName}
            email={email}
            guestsAnswer={String(guestCount)}
            onScheduled={handleCalendlyScheduled}
          />
        )}

        {isSubmitting && <p className="text-xs text-brand-600 text-center">Saving your booking…</p>}
      </div>
    );
  }

  return (
    <form onSubmit={handleDetailsSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <TextField
          label="Number of Guests"
          type="number"
          name="guests"
          min={BOOKING_GUEST_LIMITS.min}
          max={BOOKING_GUEST_LIMITS.max}
          required
          value={values.guests}
          onChange={handleChange}
        />
        <TextField
          label="Full Name"
          type="text"
          name="fullName"
          required
          autoComplete="name"
          placeholder="Jane Doe"
          value={values.fullName}
          onChange={handleChange}
        />
      </div>
      <p className="text-[11px] text-brand-600 -mt-2">
        {BOOKING_GUEST_LIMITS.min}–{BOOKING_GUEST_LIMITS.max} guests per session. More than 6?{' '}
        <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Group enquiry: ${workshop.title}`)}`} className="underline">
          Email us
        </a>
        .
      </p>

      <TextField
        label="Email Address"
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="jane@example.com"
        value={values.email}
        onChange={handleChange}
      />

      <div className="pt-4 border-t border-brand-100 flex items-center justify-between">
        <span className="text-xs text-brand-600">Total Payable:</span>
        <span className="font-serif text-2xl font-bold text-brand-900">{formatAud(total)}</span>
      </div>

      <p className="text-[11px] text-brand-600 leading-relaxed">
        Full payment is taken at booking. Free reschedule or full refund with at least 48 hours’ notice.
      </p>

      <button type="submit" className="w-full py-3 rounded-xl btn-dark text-xs">
        Continue to Choose a Time
      </button>
    </form>
  );
}

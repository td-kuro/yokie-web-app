import { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { BOOKING_GUEST_LIMITS } from '../../data/workshops';
import { useFormFields } from '../../hooks/useFormFields';
import { useSubmitAction } from '../../hooks/useSubmitAction';
import { createWorkshopBooking } from '../../services/bookingService';
import { formatAud } from '../../utils/formatters';
import { parseGuestCount } from '../../utils/pricing';
import { TextField } from '../ui/FormField';
import CalendlyScheduler from './CalendlyScheduler';

const INITIAL_VALUES = {
  guests: String(BOOKING_GUEST_LIMITS.min),
  fullName: '',
  email: '',
};

/**
 * Two steps: the visitor enters their details once, then picks a time in Calendly with
 * those details pre-filled. The booking is saved once Calendly confirms it.
 */
export default function BookingForm({ workshop, onBooked }) {
  const { values, handleChange } = useFormFields(INITIAL_VALUES);
  const [step, setStep] = useState('details');
  const guestCount = parseGuestCount(values.guests, BOOKING_GUEST_LIMITS.min);
  const total = guestCount * workshop.price;
  const fullName = values.fullName.trim();
  const email = values.email.trim();

  const { submit, isSubmitting } = useSubmitAction(createWorkshopBooking, {
    successMessage: "You're booked! Calendly has emailed your confirmation and calendar invite.",
    errorMessage:
      "Your session is booked and Calendly has emailed your confirmation, but we couldn't save your guest details. We'll be in touch.",
    onSuccess: onBooked,
  });

  function handleDetailsSubmit(event) {
    event.preventDefault();
    setStep('schedule');
  }

  function handleScheduled(payload) {
    submit({
      workshopId: workshop.id,
      workshopTitle: workshop.title,
      pricePerPerson: workshop.price,
      guests: guestCount,
      estimatedTotal: total,
      fullName,
      email,
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

        <CalendlyScheduler
          url={workshop.calendlyUrl ?? siteConfig.calendlyUrl}
          name={fullName}
          email={email}
          guestsAnswer={String(guestCount)}
          onScheduled={handleScheduled}
        />

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

      <button type="submit" className="w-full py-3 rounded-xl btn-dark text-xs">
        Continue to Choose a Time
      </button>
    </form>
  );
}

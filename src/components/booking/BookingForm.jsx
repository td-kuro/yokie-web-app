import { BOOKING_GUEST_LIMITS, bookingTimeSlots } from '../../data/workshops';
import { useFormFields } from '../../hooks/useFormFields';
import { useSubmitAction } from '../../hooks/useSubmitAction';
import { createWorkshopBooking } from '../../services/bookingService';
import { getTodayIsoDate } from '../../utils/dates';
import { formatAud } from '../../utils/formatters';
import { parseGuestCount } from '../../utils/pricing';
import { TextField } from '../ui/FormField';
import TimeSlotPicker from './TimeSlotPicker';

const INITIAL_VALUES = {
  sessionDate: '',
  timeSlot: bookingTimeSlots[0],
  guests: String(BOOKING_GUEST_LIMITS.min),
  fullName: '',
  email: '',
};

export default function BookingForm({ workshop, onBooked }) {
  const { values, setValue, handleChange } = useFormFields(INITIAL_VALUES);
  const guestCount = parseGuestCount(values.guests, BOOKING_GUEST_LIMITS.min);
  const total = guestCount * workshop.price;

  const { submit, isSubmitting } = useSubmitAction(createWorkshopBooking, {
    successMessage: "Reservation submitted successfully! We'll email you to confirm your booking.",
    errorMessage: "Sorry, we couldn't submit your reservation. Please try again.",
    onSuccess: onBooked,
  });

  function handleSubmit(event) {
    event.preventDefault();
    submit({
      workshopId: workshop.id,
      workshopTitle: workshop.title,
      pricePerPerson: workshop.price,
      sessionDate: values.sessionDate,
      timeSlot: values.timeSlot,
      guests: guestCount,
      estimatedTotal: total,
      fullName: values.fullName.trim(),
      email: values.email.trim(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField
        label="Select Date"
        type="date"
        name="sessionDate"
        required
        min={getTodayIsoDate()}
        value={values.sessionDate}
        onChange={handleChange}
      />

      <TimeSlotPicker
        label="Select Time Slot"
        slots={bookingTimeSlots}
        selectedSlot={values.timeSlot}
        onSelect={(slot) => setValue('timeSlot', slot)}
      />

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

      <button type="submit" disabled={isSubmitting} className="w-full py-3 rounded-xl btn-dark text-xs">
        {isSubmitting ? 'Submitting…' : 'Confirm Reservation'}
      </button>
    </form>
  );
}

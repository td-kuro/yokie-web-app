import { CORPORATE_GUEST_LIMITS, corporatePackages } from '../../data/corporatePackages';
import { useFormFields } from '../../hooks/useFormFields';
import { useSubmitAction } from '../../hooks/useSubmitAction';
import { createCorporateQuoteRequest } from '../../services/bookingService';
import { getTodayIsoDate } from '../../utils/dates';
import { formatAud } from '../../utils/formatters';
import { parseGuestCount } from '../../utils/pricing';
import { SelectField, TextField } from '../ui/FormField';

const PACKAGE_OPTIONS = corporatePackages.map((pkg) => ({
  value: pkg.id,
  label: `${pkg.label} ($${pkg.pricePerHead}/head)`,
}));

const INITIAL_VALUES = {
  packageId: corporatePackages[0].id,
  guests: String(CORPORATE_GUEST_LIMITS.initial),
  eventDate: '',
  email: '',
};

export default function CorporateQuoteForm() {
  const { values, handleChange, reset } = useFormFields(INITIAL_VALUES);
  const selectedPackage = corporatePackages.find((pkg) => pkg.id === values.packageId) ?? corporatePackages[0];
  const guestCount = parseGuestCount(values.guests, CORPORATE_GUEST_LIMITS.min);
  const estimatedTotal = selectedPackage.pricePerHead * guestCount;

  const { submit, isSubmitting } = useSubmitAction(createCorporateQuoteRequest, {
    successMessage: 'Thank you! Your booking request has been received. Our events team will be in touch shortly.',
    errorMessage: "Sorry, we couldn't send your request. Please try again or email us directly.",
    onSuccess: reset,
  });

  function handleSubmit(event) {
    event.preventDefault();
    submit({
      packageId: selectedPackage.id,
      packageLabel: selectedPackage.label,
      pricePerHead: selectedPackage.pricePerHead,
      guests: guestCount,
      eventDate: values.eventDate,
      email: values.email.trim(),
      estimatedTotal,
    });
  }

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl border border-white">
      <h3 className="font-serif text-2xl font-semibold text-brand-900 mb-1">Request a Corporate Quote</h3>
      <p className="text-xs text-brand-700 mb-6">Receive an instant estimate for your event date.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <SelectField
          label="Event Type"
          name="packageId"
          options={PACKAGE_OPTIONS}
          value={values.packageId}
          onChange={handleChange}
        />

        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="Estimated Guests"
            type="number"
            name="guests"
            min={CORPORATE_GUEST_LIMITS.min}
            max={CORPORATE_GUEST_LIMITS.max}
            required
            value={values.guests}
            onChange={handleChange}
          />
          <TextField
            label="Preferred Date"
            type="date"
            name="eventDate"
            required
            min={getTodayIsoDate()}
            value={values.eventDate}
            onChange={handleChange}
          />
        </div>

        <TextField
          label="Work Email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="hr@company.com"
          value={values.email}
          onChange={handleChange}
        />

        <div className="p-4 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] text-brand-600 uppercase tracking-wider font-bold">Estimated Investment</p>
            <p className="font-serif text-2xl font-bold text-brand-900" aria-live="polite">
              {formatAud(estimatedTotal)}
            </p>
          </div>
          <span className="text-[11px] text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md font-medium">
            Facilitation Included
          </span>
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full py-3 rounded-xl btn-dark text-xs shadow">
          {isSubmitting ? 'Submitting…' : 'Submit Formal Booking Request'}
        </button>
      </form>
    </div>
  );
}

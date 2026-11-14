// "Good to know before you book" panel under the workshops (src/pages/home/WorkshopsSection.jsx).
// Keep in step with the Cal.com / Calendly event settings and your Terms and Conditions.
import { siteConfig } from './siteConfig';

export const bookingPolicies = [
  {
    icon: 'fa-user-group',
    title: 'Group size',
    text: `1–6 guests per booking. We’re currently focusing on small groups for a more interactive experience. For more than 6 people, please email us at ${siteConfig.email} to enquire.`,
  },
  {
    icon: 'fa-credit-card',
    title: 'Payment',
    text: 'Full payment is taken when you book.',
  },
  {
    icon: 'fa-calendar-check',
    title: 'Changes & refunds',
    text: 'Reschedule for free or get a full refund with at least 48 hours’ notice. Within 48 hours we can’t offer a refund, but you’re welcome to reschedule or transfer your booking to someone else.',
  },
  {
    icon: 'fa-clock',
    title: 'Arrival',
    text: 'Please arrive 10 minutes early. If you arrive more than 15 minutes late, you may not be able to complete the experience.',
  },
  {
    icon: 'fa-car',
    title: 'Travel fee',
    text: 'Sessions outside the CBD include a travel fee: $20 up to 10 km, $30 for 10–20 km and $50 for more than 20 km.',
  },
  {
    icon: 'fa-leaf',
    title: 'Allergies',
    text: 'Please let us know about any allergies or sensitivities before your session.',
  },
];

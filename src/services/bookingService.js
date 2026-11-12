// Workshop reservations and corporate quote requests.
// Totals sent from the browser are estimates for display; any real payment or
// invoice must recalculate prices on the server.
import { COLLECTIONS, saveSubmission } from './dataStore';

/**
 * Records a workshop booking after the scheduler has confirmed the time slot. The session date and
 * time live in the scheduler: Cal.com bookings carry `calBookingUid` (open
 * https://app.cal.com/booking/<uid>), Calendly bookings carry `calendlyEventUri` and `calendlyInviteeUri`.
 * Paid Cal.com bookings are saved just before the visitor pays, so check payment in Cal.com.
 * @param {{ workshopId: string, workshopTitle: string, pricePerPerson: number, guests: number,
 *   estimatedTotal: number, fullName: string, email: string, calBookingUid?: string,
 *   calendlyEventUri?: string, calendlyInviteeUri?: string }} booking
 */
export function createWorkshopBooking(booking) {
  return saveSubmission(COLLECTIONS.bookings, { ...booking, status: 'pending' });
}

/**
 * @param {{ packageId: string, packageLabel: string, pricePerHead: number, guests: number,
 *   eventDate: string, email: string, estimatedTotal: number }} quoteRequest
 */
export function createCorporateQuoteRequest(quoteRequest) {
  return saveSubmission(COLLECTIONS.quoteRequests, { ...quoteRequest, status: 'new' });
}

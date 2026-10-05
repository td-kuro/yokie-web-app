// Workshop reservations and corporate quote requests.
// Totals sent from the browser are estimates for display; any real payment or
// invoice must recalculate prices on the server.
import { COLLECTIONS, saveSubmission } from './dataStore';

/**
 * @param {{ workshopId: string, workshopTitle: string, pricePerPerson: number, sessionDate: string,
 *   timeSlot: string, guests: number, estimatedTotal: number, fullName: string, email: string }} booking
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
